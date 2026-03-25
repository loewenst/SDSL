// Volume on/off toggle button using inline SVG icons.
export function VolumeToggle({ volume, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={volume ? 'Mute' : 'Unmute'}
      className="text-gray-300 hover:text-white transition-colors duration-150 w-10 h-10 flex items-center justify-center"
    >
      {volume ? <VolumeOnIcon /> : <VolumeOffIcon />}
    </button>
  )
}

function VolumeOnIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zm5.084 1.046a.75.75 0 011.06 0 9.737 9.737 0 012.116 9.634.75.75 0 11-1.44-.415 8.237 8.237 0 00-1.795-8.158.75.75 0 010-1.06zm-1.06 2.122a.75.75 0 011.06 0 6.735 6.735 0 011.539 6.938.75.75 0 11-1.44-.415 5.235 5.235 0 00-1.22-5.463.75.75 0 010-1.06z" />
    </svg>
  )
}

function VolumeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
    </svg>
  )
}
