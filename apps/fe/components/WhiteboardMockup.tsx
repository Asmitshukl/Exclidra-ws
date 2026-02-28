"use client";

export default function WhiteboardMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto tilt-hover">
      <div className="absolute -top-3 -right-2 z-20 animate-fade-in-up animate-delay-500">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg border border-[#f0f0f0]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-sm font-medium text-[#374151]">Asmit is editing...</span>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-2 z-20 animate-fade-in-up animate-delay-300">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg border border-[#f0f0f0]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-sm font-medium text-[#374151]">Kashish joined</span>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-br from-[#00E0C6]/20 via-transparent to-[#00E0C6]/10 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-[#e5e7eb] bg-[#f3f4f6] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
            <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
            <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
          </div>
          <div className="ml-4 flex flex-1 items-center gap-2 rounded-lg bg-white border border-[#e5e7eb] px-3 py-1.5 text-xs text-[#9ca3af]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
              <path d="M6 3V6L8 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            app.exaclidra-ws.io/workspace/team-project
          </div>
          <div className="flex items-center gap-2 ml-2">
            <div className="flex -space-x-1.5">
              <div className="h-5 w-5 rounded-full bg-[#6366f1] border-2 border-[#f3f4f6] text-[8px] text-white flex items-center justify-center font-bold">A</div>
              <div className="h-5 w-5 rounded-full bg-[#f59e0b] border-2 border-[#f3f4f6] text-[8px] text-white flex items-center justify-center font-bold">K</div>
              <div className="h-5 w-5 rounded-full bg-[#00E0C6] border-2 border-[#f3f4f6] text-[8px] text-white flex items-center justify-center font-bold">+2</div>
            </div>
            <span className="text-[10px] font-medium text-[#6b7280] bg-white rounded px-1.5 py-0.5 border border-[#e5e7eb]">Whiteboarding</span>
          </div>
        </div>

        <div className="flex items-center gap-1 border-b border-[#e5e7eb] bg-white px-3 py-2">
          {[
            <rect key="r" x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />,
            <circle key="c" cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" />,
            <path key="d" d="M8 3L13 8L8 13L3 8Z" stroke="currentColor" strokeWidth="1.2" fill="none" />,
            <path key="a" d="M3 13L8 3L13 13" stroke="currentColor" strokeWidth="1.2" fill="none" />,
            <path key="l" d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
            <path key="p" d="M3 5C3 5 6 3 8 5C10 7 13 5 13 5" stroke="currentColor" strokeWidth="1.2" fill="none" />,
            <><path key="t1" d="M3 4H13" stroke="currentColor" strokeWidth="1.2" /><path key="t2" d="M8 4V13" stroke="currentColor" strokeWidth="1.2" /></>,
            <path key="s" d="M5 3H11C11 3 13 3 13 5V7C13 7 13 9 11 9H5C5 9 3 9 3 11V13" stroke="currentColor" strokeWidth="1.2" fill="none" />,
          ].map((icon, i) => (
            <div
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f3f4f6] hover:text-[#171717] ${i === 0 ? "bg-[#f0fdf9] text-[#00B8A3]" : ""}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{icon}</svg>
            </div>
          ))}
          <div className="mx-2 h-5 w-px bg-[#e5e7eb]" />
          <div className="flex h-8 items-center gap-1 rounded-lg bg-[#f3f4f6] px-2">
            <div className="h-3 w-3 rounded-full bg-[#171717]" />
            <span className="text-[10px] text-[#6b7280]">2px</span>
          </div>
        </div>

        <div className="relative h-[380px] sm:h-[440px] bg-white dot-grid overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 900 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="330" y="30" width="160" height="50" rx="25" fill="#F0FDF9" stroke="#00E0C6" strokeWidth="2" />
            <text x="410" y="60" textAnchor="middle" fill="#065F46" fontSize="13" fontWeight="600" fontFamily="system-ui">Planning Review</text>

            <path d="M410 80 L410 110" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            <path d="M410 110 L470 155 L410 200 L350 155 Z" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
            <text x="410" y="158" textAnchor="middle" fill="#1E40AF" fontSize="11" fontWeight="500" fontFamily="system-ui">Approved?</text>

            <path d="M470 155 L540 155" stroke="#22C55E" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <text x="500" y="148" textAnchor="middle" fill="#22C55E" fontSize="10" fontFamily="system-ui">Yes</text>

            <path d="M350 155 L270 155" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <text x="315" y="148" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="system-ui">No</text>

            <rect x="540" y="130" width="160" height="50" rx="8" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5" />
            <text x="620" y="152" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="500" fontFamily="system-ui">Deploy to</text>
            <text x="620" y="168" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="500" fontFamily="system-ui">Production</text>

            <rect x="170" y="130" width="100" height="50" rx="8" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
            <text x="220" y="160" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="500" fontFamily="system-ui">Revise</text>

            <path d="M220 130 L220 55 L330 55" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

            <path d="M620 180 L620 220" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            <rect x="550" y="220" width="140" height="45" rx="22" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="2" />
            <text x="620" y="247" textAnchor="middle" fill="#5B21B6" fontSize="12" fontWeight="600" fontFamily="system-ui">Complete</text>

            <g className="float">
              <rect x="60" y="240" width="130" height="100" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
              <rect x="60" y="240" width="130" height="6" rx="2" fill="#F59E0B" />
              <text x="125" y="268" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="600" fontFamily="system-ui">TODO</text>
              <text x="75" y="286" fill="#78350F" fontSize="9" fontFamily="system-ui">- Update API docs</text>
              <text x="75" y="300" fill="#78350F" fontSize="9" fontFamily="system-ui">- Write unit tests</text>
              <text x="75" y="314" fill="#78350F" fontSize="9" fontFamily="system-ui">- Code review</text>
              <text x="75" y="328" fill="#78350F" fontSize="9" fontFamily="system-ui">- Security audit</text>
            </g>

            <g className="float-delay-1">
              <rect x="720" y="280" width="120" height="85" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
              <rect x="720" y="280" width="120" height="6" rx="2" fill="#3B82F6" />
              <text x="780" y="305" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="600" fontFamily="system-ui">NOTES</text>
              <text x="732" y="322" fill="#1E3A5F" fontSize="9" fontFamily="system-ui">Use WebSocket</text>
              <text x="732" y="336" fill="#1E3A5F" fontSize="9" fontFamily="system-ui">for real-time sync</text>
              <text x="732" y="350" fill="#1E3A5F" fontSize="9" fontFamily="system-ui">with CRDT merge</text>
            </g>

            <g className="float-delay-2">
              <polygon
                points="100,60 108,40 116,60 138,64 122,78 126,100 108,88 90,100 94,78 78,64"
                fill="#FDE68A"
                stroke="#F59E0B"
                strokeWidth="1.5"
              />
            </g>

            <circle cx="760" cy="155" r="18" fill="#FCE7F3" stroke="#EC4899" strokeWidth="2" />
            <text x="760" y="159" textAnchor="middle" fill="#9D174D" fontSize="16" fontFamily="system-ui">!</text>

            <path d="M760 173 L780 280" stroke="#EC4899" strokeWidth="1" strokeDasharray="3 3" />

            <circle cx="410" cy="30" r="4" fill="white" stroke="#00E0C6" strokeWidth="1.5" />
            <circle cx="410" cy="200" r="4" fill="white" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="700" cy="242" r="4" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />

            <g>
              <path d="M480 90 L480 100 L486 96 Z" fill="#6366F1" />
              <rect x="488" y="92" width="38" height="14" rx="3" fill="#6366F1" />
              <text x="507" y="102" textAnchor="middle" fill="white" fontSize="8" fontFamily="system-ui">Asmit</text>
            </g>
            <g>
              <path d="M250 210 L250 220 L256 216 Z" fill="#F59E0B" />
              <rect x="258" y="212" width="32" height="14" rx="3" fill="#F59E0B" />
              <text x="274" y="222" textAnchor="middle" fill="white" fontSize="8" fontFamily="system-ui">Kashish</text>
            </g>

            <rect x="540" y="215" width="165" height="55" rx="4" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="540" cy="215" r="3" fill="#6366F1" />
            <circle cx="705" cy="215" r="3" fill="#6366F1" />
            <circle cx="540" cy="270" r="3" fill="#6366F1" />
            <circle cx="705" cy="270" r="3" fill="#6366F1" />

            <rect x="60" y="390" width="20" height="20" rx="2" fill="#E0E7FF" stroke="#818CF8" strokeWidth="1" />
            <rect x="90" y="390" width="20" height="20" rx="2" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="1" />
            <rect x="120" y="390" width="20" height="20" rx="2" fill="#FEE2E2" stroke="#F87171" strokeWidth="1" />
            <rect x="150" y="385" width="20" height="25" rx="2" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="1" />
            <rect x="180" y="388" width="20" height="22" rx="10" fill="#F3E8FF" stroke="#C084FC" strokeWidth="1" />

            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0 0 L8 3 L0 6 Z" fill="#9CA3AF" />
              </marker>
            </defs>
          </svg>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-[#6366F1]/10 px-3 py-1.5 text-xs text-[#4338CA] font-medium">
            <span className="flex gap-0.5">
              <span className="h-1 w-1 rounded-full bg-[#6366F1] animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="h-1 w-1 rounded-full bg-[#6366F1] animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="h-1 w-1 rounded-full bg-[#6366F1] animate-bounce" style={{ animationDelay: "300ms" }} />
            </span>
            Asmit is typing...
          </div>
        </div>
      </div>
    </div>
  );
}
