// Modal explaining how to play the game. Self-contained with content baked in.
export function HowToPlayModal({ onClose }) {
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
          <h2 className="text-white font-dosis font-bold text-lg text-center">How to Play</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <p className="text-white/90 font-dosis text-base leading-relaxed text-left">
            Surprisingly Deep Song Lyrics works a lot like Who Wants to be a Millionaire: there are
            ten questions, each with four possible answers, and if you get all of them right, you win.
            Get one wrong, you lose. There are even hints — three per turn on Easy, and three for the
            whole game on Hard — like Millionaire's lifelines.
            <br /><br />
            The twist: all questions are song lyrics, and the answers are the artists who sang them.
            And because the deeper purpose of SDSL is to showcase the awesome depth song lyrics can
            have, a brief reflection pops up after each question on why those lyrics pack a punch.
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
