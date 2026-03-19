"use client";

interface UserInfo {
  name: string;
  email: string;
  photo: string;
}

interface PopupProps {
  onClose: () => void;
  user: UserInfo;
  onLogout?: () => void;
}

export default function Popup({ onClose, user, onLogout }: PopupProps) {
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(23,23,23,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-[360px] rounded-2xl bg-[#fafafa] border border-[#e0e0e0] shadow-[8px_8px_0_#00E0C6] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-[#171717]" />

        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#e0e0e0]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#00E0C6]">
            <span className="block h-0.5 w-5 bg-[#00E0C6]" />
            Profile
          </div>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e0e0e0] bg-white text-[#9ca3af] transition-all hover:border-[#171717] hover:text-[#171717]"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4 px-6 py-5 border-b border-[#e0e0e0]">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 border-[#171717] bg-[#171717] text-lg font-bold text-[#00E0C6] shadow-[3px_3px_0_#00E0C6]"
          >
            {initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight text-[#171717]">
              {user.name || "—"}
            </p>
            <p className="truncate text-xs text-[#6b7280] mt-0.5">{user.email || "—"}</p>
            {user.photo && (
              <span className="mt-1.5 inline-block rounded-md border border-[#e0e0e0] bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-[#171717]">
                {user.photo}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-0 px-6 py-4 border-b border-[#e0e0e0]">
          <InfoRow
            icon="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6"
            label="Email"
            value={user.email}
          />
          <InfoRow
            icon="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            label="Name"
            value={user.name}
          />
          <InfoRow
            icon="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            label="Role"
            value={user.photo}
          />
        </div>

        <div className="flex gap-3 px-6 py-5">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-[#e0e0e0] bg-white py-3 text-sm font-semibold text-[#6b7280] transition-all hover:border-[#171717] hover:text-[#171717]"
          >
            Close
          </button>
          <button
            onClick={onLogout}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#171717] py-3 text-sm font-semibold text-white shadow-[3px_3px_0_#00E0C6] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#00E0C6] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#00E0C6]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-dashed border-[#ebebeb] last:border-0">
      <svg
        className="shrink-0 text-[#bbb]"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={icon} />
      </svg>
      <span className="w-12 shrink-0 text-[10px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">
        {label}
      </span>
      <span className="truncate text-sm font-medium text-[#171717]">{value || "—"}</span>
    </div>
  );
}