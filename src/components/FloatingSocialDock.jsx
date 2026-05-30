export default function FloatingSocialDock() {
  const item =
    "group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition relative";

  const glow =
    "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition";

  return (
    <div className="fixed bottom-24 left-4 z-50 hidden md:flex flex-col gap-3">

      {/* ⭐ TITLE */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-lg">
        <p className="text-white text-xs md:text-sm font-medium text-center">
          🌍 Follow our travels on social media
        </p>
      </div>

      {/* Instagram */}
      <a href="https://instagram.com" target="_blank" className={item}>
        <span className={`${glow} bg-pink-500`}></span>
        <span className="relative">📸</span>
        <span className="relative text-white text-sm">Instagram</span>
      </a>

      {/* Facebook */}
      <a href="https://facebook.com" target="_blank" className={item}>
        <span className={`${glow} bg-blue-500`}></span>
        <span className="relative">📘</span>
        <span className="relative text-white text-sm">Facebook</span>
      </a>

      {/* YouTube */}
      <a href="https://youtube.com" target="_blank" className={item}>
        <span className={`${glow} bg-red-500`}></span>
        <span className="relative">▶️</span>
        <span className="relative text-white text-sm">YouTube</span>
      </a>

      {/* Snapchat */}
      <a href="https://snapchat.com" target="_blank" className={item}>
        <span className={`${glow} bg-yellow-400`}></span>
        <span className="relative">👻</span>
        <span className="relative text-white text-sm">Snapchat</span>
      </a>

    </div>
  );
}