const BASE = '/api/wizard'

async function request(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`)
  return json
}

/**
 * Upload a file to public/audio or public/images.
 * Returns { publicPath } — the path to use in song data (e.g. "/audio/foo.mp3").
 */
export async function uploadFile(subdir, filename, base64) {
  return request('POST', '/upload-file', { subdir, filename, base64 })
}

/**
 * Append a new song to songs.json. The server assigns the id.
 * Returns { ok, id }.
 */
export async function saveSong(song) {
  return request('POST', '/save-song', { song })
}

/**
 * Delete a song by id. Server enforces 10-song floor.
 * Returns { ok } or throws.
 */
export async function deleteSong(id) {
  return request('DELETE', '/delete-song', { id })
}

/**
 * Fetch current songs from songs.json via the dev server.
 * Returns { songs }.
 */
export async function getSongs() {
  return request('GET', '/songs')
}
