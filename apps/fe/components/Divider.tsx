export default function Divider({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-xs text-[#bbb]">
      <span className="h-px flex-1 bg-[#e5e5e5]" />
      {text}
      <span className="h-px flex-1 bg-[#e5e5e5]" />
    </div>
  );
}
