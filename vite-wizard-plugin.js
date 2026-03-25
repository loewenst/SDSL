import fs from 'fs'
import path from 'path'

/**
 * Vite dev-server plugin that exposes a small file-writing API for the wizard.
 * All routes are under /api/wizard/* and are only active in dev mode.
 *
 * POST /api/wizard/upload-file  — saves a base64-encoded file to public/
 * POST /api/wizard/save-song    — appends a song object to src/data/songs.json
 * DELETE /api/wizard/delete-song — removes a song by id from src/data/songs.json
 * GET  /api/wizard/songs        — returns current songs.json contents
 */
export function wizardPlugin() {
  return {
    name: 'vite-wizard-plugin',
    configureServer(server) {
      server.middlewares.use('/api/wizard', async (req, res) => {
        const projectRoot = server.config.root

        res.setHeader('Content-Type', 'application/json')

        // Helper to read/write songs.json atomically
        const songsPath = path.join(projectRoot, 'src', 'data', 'songs.json')

        function readSongs() {
          return JSON.parse(fs.readFileSync(songsPath, 'utf-8'))
        }

        function writeSongs(songs) {
          fs.writeFileSync(songsPath, JSON.stringify(songs, null, 2) + '\n', 'utf-8')
        }

        // Parse request body
        async function readBody() {
          return new Promise((resolve, reject) => {
            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', () => {
              try { resolve(JSON.parse(body)) }
              catch (e) { reject(e) }
            })
            req.on('error', reject)
          })
        }

        const url = req.url || '/'

        try {
          // GET /api/wizard/songs
          if (req.method === 'GET' && url === '/songs') {
            const songs = readSongs()
            res.end(JSON.stringify({ songs }))
            return
          }

          // POST /api/wizard/upload-file
          if (req.method === 'POST' && url === '/upload-file') {
            const { subdir, filename, base64 } = await readBody()
            // subdir is 'audio' or 'images'
            const dir = path.join(projectRoot, 'public', subdir)
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
            const dest = path.join(dir, filename)
            const buffer = Buffer.from(base64, 'base64')
            fs.writeFileSync(dest, buffer)
            res.end(JSON.stringify({ ok: true, publicPath: `/${subdir}/${filename}` }))
            return
          }

          // POST /api/wizard/save-song
          if (req.method === 'POST' && url === '/save-song') {
            const { song } = await readBody()
            const songs = readSongs()
            const maxId = songs.reduce((m, s) => Math.max(m, s.id), 0)
            song.id = maxId + 1
            songs.push(song)
            writeSongs(songs)
            res.end(JSON.stringify({ ok: true, id: song.id }))
            return
          }

          // DELETE /api/wizard/delete-song
          if (req.method === 'DELETE' && url === '/delete-song') {
            const { id } = await readBody()
            const songs = readSongs()
            if (songs.length <= 10) {
              res.statusCode = 400
              res.end(JSON.stringify({ error: 'Cannot delete: minimum 10 songs required.' }))
              return
            }
            const next = songs.filter(s => s.id !== id)
            if (next.length === songs.length) {
              res.statusCode = 404
              res.end(JSON.stringify({ error: 'Song not found.' }))
              return
            }
            writeSongs(next)
            res.end(JSON.stringify({ ok: true }))
            return
          }

          res.statusCode = 404
          res.end(JSON.stringify({ error: 'Not found' }))
        } catch (err) {
          console.error('[wizard-plugin]', err)
          res.statusCode = 500
          res.end(JSON.stringify({ error: err.message }))
        }
      })
    },
  }
}
