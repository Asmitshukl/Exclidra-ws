interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: string;
  value: string;
  focused: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export default function FormField({
  id,
  label,
  type,
  placeholder,
  icon,
  value,
  focused,
  onChange,
  onFocus,
  onBlur,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#171717]"
      >
        {label}
      </label>
      <div className="relative">
        <svg
          className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
            focused ? "text-[#171717]" : "text-[#bbb]"
          }`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={icon} />
        </svg>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-sm text-[#171717] outline-none transition-all placeholder:text-[#ccc] ${
            focused
              ? "border-[#171717] shadow-[3px_3px_0_rgba(0,224,198,0.15)]"
              : "border-[#e0e0e0]"
          }`}
        />
      </div>
    </div>
  );
}
