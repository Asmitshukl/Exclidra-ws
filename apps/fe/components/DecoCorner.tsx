export default function DecoCorner() {
  return (
    <svg
      className="pointer-events-none absolute bottom-6 right-6 opacity-[0.06]"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#171717" strokeWidth="1.5" strokeDasharray="8,6" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="#00E0C6" strokeWidth="1" strokeDasharray="5,8" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="#171717" strokeWidth="1" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="#171717" strokeWidth="1" />
    </svg>
  );
}
