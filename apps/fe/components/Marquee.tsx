const ITEMS = [
  "Real-time collaboration",
  "WebSocket sync",
  "Infinite whiteboard",
  "Rich text editing",
  "Zero conflicts",
  "Version history",
  "End-to-end encrypted",
  "Multi-user cursors",
  "Markdown support",
  "Export anywhere",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-[#f0f0f0] bg-[#fafafa] py-4 select-none">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#fafafa] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#fafafa] to-transparent" />

      <div className="marquee-track flex w-max items-center gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <svg width="6" height="6" viewBox="0 0 6 6" className="text-[#00E0C6]">
              <circle cx="3" cy="3" r="3" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium text-[#6b7280]">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
