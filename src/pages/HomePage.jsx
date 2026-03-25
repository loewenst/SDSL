import { useState } from 'react'
import { Link } from 'react-router-dom'
import { homeContent } from '../data/homeContent'

// Converts \n to <br> tags for display in the modal body.
function formatBody(text) {
  return text.replace(/\n/g, '<br />')
}

export default function HomePage() {
  const [activeModal, setActiveModal] = useState(null) // homeContent item or null

  const open  = (item) => setActiveModal(item)
  const close = () => setActiveModal(null)

  // Map content id → homeContent item for easy lookup
  const contentMap = Object.fromEntries(homeContent.map(item => [item.id, item]))

  return (
    <div
      className="min-h-screen w-full bg-black"
      style={{
        backgroundImage: "url('https://i.imgur.com/b4m7vyE.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-10">

        {/* Header */}
        <h1 className="font-sigmar text-game-blue text-[clamp(1.8rem,6vmin,3.5rem)] text-center mb-12 drop-shadow-lg leading-tight">
          Surprisingly Deep Song Lyrics
        </h1>

        {/* Navigation grid */}
        <div className="relative flex flex-col items-center gap-6 w-full max-w-2xl">

          {/* Top row */}
          <div className="flex gap-4 justify-center w-full">
            <NavButton label="How to Play" onClick={() => open(contentMap['howto'])} />
            <NavButton label="About"       onClick={() => open(contentMap['about'])} />
          </div>

          {/* Center play button */}
          <Link
            to="/game"
            className="
              flex items-center justify-center
              w-36 h-36 md:w-44 md:h-44 rounded-full
              bg-game-dark border-4 border-game-blue
              font-sigmar text-game-blue text-[clamp(1.4rem,5vmin,2rem)]
              shadow-[0_0_30px_rgba(65,140,202,0.5)]
              hover:bg-game-blue hover:text-white
              hover:shadow-[0_0_50px_rgba(65,140,202,0.8)]
              animate-bounce-scale
              transition-all duration-300
              no-underline text-center leading-tight
            "
          >
            Play<br />SDSL
          </Link>

          {/* Bottom row */}
          <div className="flex gap-4 justify-center w-full">
            <NavButton label="Contact" onClick={() => open(contentMap['contact'])} />
            <NavButton label="Thanks"  onClick={() => open(contentMap['thanks'])} />
          </div>
        </div>
      </div>

      {/* Info modal */}
      {activeModal && (
        <InfoModal item={activeModal} onClose={close} />
      )}
    </div>
  )
}

function NavButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex-1 max-w-[180px] py-3 px-4 h-14 rounded-xl
        border-2 border-[#78b7eb] bg-[#16076b]/80
        text-white font-dosis font-semibold text-sm
        hover:bg-[#2513a0]/80 hover:border-white
        transition-all duration-200
      "
    >
      {label}
    </button>
  )
}

function InfoModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="
        relative z-10 animate-fade-slide-up
        w-[min(90vw,640px)] max-h-[80vh]
        bg-[#5a5757] rounded-2xl shadow-2xl
        flex flex-col overflow-hidden
      ">
        {/* Heading */}
        <div className="bg-[#403d3d] px-6 py-4 flex-shrink-0">
          <h2 className="text-white font-dosis font-bold text-lg text-center">{item.title}</h2>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <p
            className="text-white/90 font-dosis text-base leading-relaxed text-left"
            dangerouslySetInnerHTML={{ __html: formatBody(item.body) }}
          />
          {item.email && (
            <div className="mt-5 flex justify-center">
              <a
                href={`mailto:${item.email}`}
                className="
                  inline-block px-6 py-2.5 rounded-xl
                  bg-game-blue text-white font-dosis font-semibold text-sm
                  hover:brightness-110 transition-all duration-150
                "
              >
                Send an Email
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 flex justify-center py-4 bg-[#4a4747]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 min-w-[120px] rounded-xl font-dosis font-semibold text-sm text-white bg-[#555] border border-gray-500 hover:bg-[#666] transition-all duration-150"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
