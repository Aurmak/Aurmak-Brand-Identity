type DoDontProps = {
  dos: string[];
  donts: string[];
};

export function DoDont({ dos, donts }: DoDontProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="border border-[#0479AB]/30 bg-[#EEF7FC] p-6">
        <div className="mb-3 text-[#0479AB]" style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
          Do
        </div>
        <ul className="space-y-2 text-[#282973]" style={{ fontSize: '17px', lineHeight: '1.6' }}>
          {dos.map((d) => (
            <li key={d}>✓ {d}</li>
          ))}
        </ul>
      </div>
      <div className="border border-slate-300 bg-white p-6">
        <div className="mb-3 text-[#B42318]" style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
          Don&apos;t
        </div>
        <ul className="space-y-2 text-[#282973]" style={{ fontSize: '17px', lineHeight: '1.6' }}>
          {donts.map((d) => (
            <li key={d}>✕ {d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
