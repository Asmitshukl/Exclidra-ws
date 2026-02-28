export default function Logo({ hover = false }: { hover?: boolean }) {
  return (
    <a href="/" className={`flex items-center gap-2 ${hover ? "group" : ""}`}>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717] text-white text-sm font-bold ${
          hover ? "transition-transform group-hover:scale-110" : ""
        }`}
      >
        Ex
      </span>
      <span className="text-lg font-bold tracking-tight">
        Exaclidra<span className="text-[#00E0C6]">-ws</span>
      </span>
    </a>
  );
}
