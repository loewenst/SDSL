// Modal describing the background and purpose of SDSL. Self-contained with content baked in.
export function AboutModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="
        relative z-10 animate-fade-slide-up
        w-[min(90vw,640px)] max-h-[80vh]
        bg-[#5a5757] rounded-2xl shadow-2xl
        flex flex-col overflow-hidden
      ">
        <div className="bg-[#403d3d] px-6 py-4 flex-shrink-0">
          <h2 className="text-white font-dosis font-bold text-lg text-center">About SDSL</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <p className="text-white/90 font-dosis text-base leading-relaxed text-left">
            Welcome! Surprisingly Deep Song Lyrics, or SDSL, is a happy outgrowth of my applying my
            interests to an assignment I was given while learning to code — a kind of "coding practice
            meets passion project." It's basically a gamified way to get players to pay more attention
            to song lyrics, and to notice that they can be — well, surprisingly deep.
            <br /><br />
            Whether you pay attention to song lyrics already or you never paid any attention to them
            before, I hope this game opens your eyes to some really profound, powerful prose.
          </p>
        </div>
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
