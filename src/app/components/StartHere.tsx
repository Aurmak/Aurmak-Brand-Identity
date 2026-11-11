const sections = [
  { id: 'brand-overview', name: 'Brand Overview', detail: 'Who we are, the parent brand and sub-brands, and how we sound.' },
  { id: 'logo-guidelines', name: 'Logo Guidelines', detail: 'The logo files, clear space, and how not to alter the logo.' },
  { id: 'visual-language', name: 'Visual Language', detail: 'Photography, imagery and graphic elements.' },
  { id: 'digital-principles', name: 'Digital Principles', detail: 'Principles for any AURMAK website, app or product.' },
  { id: 'sub-brands', name: 'Sub-Brands', detail: 'The rules for sub-brands, products and ventures.' },
  { id: 'pitch-decks', name: 'Pitch Decks & Proposals', detail: 'Structures and templates for sales material.' },
  { id: 'ai-use', name: 'AI Use', detail: 'When and how AI can be used, and what must be reviewed.' },
];

export function StartHere({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12 lg:space-y-16">
        <div>
          <h1 className="text-[#282973]" style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>
            About This Guide
          </h1>
          <div className="mb-6 mt-4 h-1 w-16 bg-[#27AAE1]"></div>
          <p className="text-[#545F7E]" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '48rem' }}>
            This guide sets out how AURMAK looks, sounds and presents itself. It is written for everyone at AURMAK,
            and for the partners and suppliers who work on our behalf.
          </p>
        </div>

        <div className="border-l-4 border-[#27AAE1] bg-[#EEF7FC] p-8">
          <h2 className="mb-3 text-[#282973]" style={{ fontSize: '24px', fontWeight: 700 }}>Who we are</h2>
          <p className="text-[#545F7E]" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            AURMAK designs and delivers enterprise systems, digital infrastructure, legacy modernisation and
            AI-enabled operational intelligence. We work with organisations that run complex operations, and we
            stay accountable for delivery after go-live.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>What is in this guide</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sections.map((s) => (
              <button key={s.name} type="button" onClick={() => onNavigate(s.id)} className="border border-slate-200 bg-white p-6 text-left transition-colors hover:border-[#0479AB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27AAE1]">
                <div className="mb-2 text-[#0479AB] underline underline-offset-4" style={{ fontSize: '18px', fontWeight: 700 }}>{s.name}</div>
                <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{s.detail}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 bg-white p-6">
          <div className="mb-2 text-[#282973]" style={{ fontSize: '18px', fontWeight: 700 }}>Email signature</div>
          <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            The signature tool we designed, for every staff email. You need an AURMAK account to open it.
          </p>
          <p className="mt-3 text-[#0479AB]" style={{ fontSize: '16px', fontWeight: 600 }}>Find it on the Business Ops Hub SharePoint site: search for "email signature".</p>
        </div>

        <p className="max-w-3xl text-[#545F7E]" style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Where a section ends with a Do and Don't list, treat it as the guidance to follow unless there is a good
          reason not to. Questions about the brand go to the brand owner, listed in the brand register.
        </p>
      </div>
    </div>
  );
}
