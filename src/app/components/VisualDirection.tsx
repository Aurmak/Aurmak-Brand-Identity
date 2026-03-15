export function VisualDirection() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12 lg:space-y-16">
        <div>
          <h1 className="mb-4 text-3xl font-bold text-[#1B2A6B] md:text-4xl lg:text-5xl">
            Visual Language
          </h1>
          <div className="h-1 w-16 bg-[#2CB5E3]"></div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Visual Principles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#1B2A6B]">
                <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                  <rect x="5" y="5" width="30" height="30" stroke="#2CB5E3" strokeWidth="2" />
                  <line x1="5" y1="13" x2="35" y2="13" stroke="#2CB5E3" strokeWidth="1" />
                  <line x1="5" y1="21" x2="35" y2="21" stroke="#2CB5E3" strokeWidth="1" />
                  <line x1="5" y1="29" x2="35" y2="29" stroke="#2CB5E3" strokeWidth="1" />
                  <line x1="13" y1="5" x2="13" y2="35" stroke="#2CB5E3" strokeWidth="1" />
                  <line x1="21" y1="5" x2="21" y2="35" stroke="#2CB5E3" strokeWidth="1" />
                  <line x1="29" y1="5" x2="29" y2="35" stroke="#2CB5E3" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                Engineering Clarity
              </h3>
              <p className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Clean lines, structured layouts, and a disciplined grid. Every visual should feel considered rather than decorative.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#2CB5E3]">
                <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="15" r="6" stroke="white" strokeWidth="2" />
                  <path d="M10 35 C10 28, 15 25, 20 25 C25 25, 30 28, 30 35" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                Human but Professional
              </h3>
              <p className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Show real working environments, calm pacing, and intentional spacing. The overall tone should feel credible, composed, and current.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#1B2A6B] bg-white">
                <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                  <path d="M5 30 L12 22 L18 26 L25 15 L35 20" stroke="#2CB5E3" strokeWidth="2" fill="none" />
                  <circle cx="5" cy="30" r="2" fill="#1B2A6B" />
                  <circle cx="12" cy="22" r="2" fill="#1B2A6B" />
                  <circle cx="18" cy="26" r="2" fill="#1B2A6B" />
                  <circle cx="25" cy="15" r="2" fill="#1B2A6B" />
                  <circle cx="35" cy="20" r="2" fill="#1B2A6B" />
                </svg>
              </div>
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                Data Visualisation
              </h3>
              <p className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Use thin-line diagrams, subtle technical overlays, and uncluttered charts to reinforce precision and analytical depth.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Iconography Standards
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#4A5568] md:text-base">
            Our iconography is functional, minimalist, and engineering-focused. We use <strong>Lucide React</strong> as our primary icon library, following a consistent linear style that complements our typography and grid.
          </p>

          <div className="rounded-sm border border-gray-200 bg-[#F4F6F8] p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1B2A6B]">Style</div>
                <div className="flex items-center justify-center rounded-sm border border-gray-200 bg-white p-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <p className="text-xs text-[#4A5568]">Linear style only. No fills. Rounded caps and joins.</p>
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1B2A6B]">Stroke Weight</div>
                <div className="flex items-center justify-center rounded-sm border border-gray-200 bg-white p-6">
                  <div className="flex items-center space-x-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                  </div>
                </div>
                <p className="text-xs text-[#4A5568]">Standard: 1.5pt for most UI. Use 2pt for hero icons.</p>
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1B2A6B]">Bounding Box</div>
                <div className="flex items-center justify-center rounded-sm border border-gray-200 bg-white p-6">
                  <div className="flex h-8 w-8 items-center justify-center border border-dashed border-[#2CB5E3]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.5"><path d="M12 2v20M2 12h20" /></svg>
                  </div>
                </div>
                <p className="text-xs text-[#4A5568]">All icons must fit within a 24x24px square container.</p>
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1B2A6B]">Colour Application</div>
                <div className="flex items-center justify-center rounded-sm border border-gray-200 bg-white p-6">
                  <div className="flex space-x-4">
                    <div className="h-6 w-6 rounded-full bg-[#1B2A6B]"></div>
                    <div className="h-6 w-6 rounded-full bg-[#2CB5E3]"></div>
                    <div className="h-6 w-6 rounded-full bg-[#4A5568]"></div>
                  </div>
                </div>
                <p className="text-xs text-[#4A5568]">Use brand Navy, Cyan, or Slate Grey. No other colours.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-[#1B2A6B]" style={{ fontSize: '18px', fontWeight: '600' }}>
                  Navigation Set
                </h3>
                <span className="text-xs uppercase tracking-[0.18em] text-[#2CB5E3]">24px</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  <path key="1" d="M4 12h16" />,
                  <path key="2" d="M12 4v16" />,
                  <path key="3" d="m9 18 6-6-6-6" />,
                  <path key="4" d="m15 18-6-6 6-6" />,
                  <path key="5" d="M6 6h12v12H6z" />,
                  <path key="6" d="M6 12h12" />,
                  <path key="7" d="M12 6h6v6" />,
                  <path key="8" d="m18 6-7 7" />,
                ].map((icon, index) => (
                  <div key={index} className="flex aspect-square items-center justify-center rounded-sm border border-gray-200 bg-[#F4F6F8]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Navigation icons should be clear at a glance, evenly weighted, and free of decorative detail.
              </p>
            </div>

            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-[#1B2A6B]" style={{ fontSize: '18px', fontWeight: '600' }}>
                  Product & Systems
                </h3>
                <span className="text-xs uppercase tracking-[0.18em] text-[#2CB5E3]">1.5pt</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  <>
                    <rect x="4" y="4" width="7" height="7" rx="1.5" />
                    <rect x="13" y="4" width="7" height="7" rx="1.5" />
                    <rect x="4" y="13" width="7" height="7" rx="1.5" />
                    <rect x="13" y="13" width="7" height="7" rx="1.5" />
                  </>,
                  <>
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.4.1" />
                  </>,
                  <>
                    <path d="M4 7h16" />
                    <path d="M7 4v16" />
                    <path d="M17 11v9" />
                    <path d="M14 14h6" />
                  </>,
                  <>
                    <path d="M6 20V10" />
                    <path d="M12 20V4" />
                    <path d="M18 20v-6" />
                  </>,
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h10" />
                    <path d="M4 18h16" />
                  </>,
                  <>
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                  </>,
                  <>
                    <path d="M4 19h16" />
                    <path d="M8 15l4-4 3 3 5-6" />
                  </>,
                  <>
                    <path d="M20 7 9 18l-5-5" />
                  </>,
                ].map((icon, index) => (
                  <div key={index} className="flex aspect-square items-center justify-center rounded-sm border border-gray-200 bg-[#F4F6F8]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Systems icons can be slightly more technical, but they should still feel simple, crisp, and highly legible.
              </p>
            </div>

            <div className="rounded-sm border border-gray-200 bg-[#1B2A6B] p-8 text-white">
              <div className="mb-6 flex items-center justify-between">
                <h3 style={{ fontSize: '18px', fontWeight: '600' }}>
                  Brand Accent Usage
                </h3>
                <span className="text-xs uppercase tracking-[0.18em] text-[#9DDEF3]">Hero</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  <circle key="a" cx="12" cy="12" r="8" />,
                  <path key="b" d="M5 12h14M12 5v14" />,
                  <path key="c" d="m6 12 4 4 8-8" />,
                  <path key="d" d="m8 6 8 12" />,
                  <path key="e" d="M6 18 18 6" />,
                  <path key="f" d="M12 4v16" />,
                ].map((icon, index) => (
                  <div key={index} className="flex aspect-square items-center justify-center rounded-sm bg-[#10213F]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2CB5E3" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/80" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Cyan should be used selectively to create emphasis, guide focus, and add energy without overpowering the interface.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Graphic Elements
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <div className="flex aspect-square items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 180 180" className="stroke-[#1B2A6B]" fill="none">
                  <line x1="40" y1="40" x2="140" y2="40" strokeWidth="1.5" />
                  <line x1="140" y1="40" x2="140" y2="140" strokeWidth="1.5" />
                  <line x1="140" y1="140" x2="40" y2="140" strokeWidth="1.5" />
                  <line x1="40" y1="140" x2="40" y2="40" strokeWidth="1.5" />
                  <line x1="40" y1="40" x2="140" y2="140" strokeWidth="1" opacity="0.4" />
                  <line x1="140" y1="40" x2="40" y2="140" strokeWidth="1" opacity="0.4" />
                  <circle cx="90" cy="90" r="30" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="4" fill="#2CB5E3" stroke="none" />
                  <circle cx="140" cy="40" r="4" fill="#2CB5E3" stroke="none" />
                  <circle cx="140" cy="140" r="4" fill="#2CB5E3" stroke="none" />
                  <circle cx="40" cy="140" r="4" fill="#2CB5E3" stroke="none" />
                </svg>
              </div>
              <div className="mt-4 text-center text-[#4A5568]" style={{ fontSize: '14px' }}>
                Thin-line technical diagrams
              </div>
            </div>

            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <div className="flex aspect-square items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 20}
                      x2="180"
                      y2={i * 20}
                      stroke="#1B2A6B"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 20}
                      y1="0"
                      x2={i * 20}
                      y2="180"
                      stroke="#1B2A6B"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))}
                  <rect x="40" y="40" width="60" height="60" fill="#2CB5E3" opacity="0.2" />
                  <rect x="80" y="80" width="60" height="60" fill="#1B2A6B" opacity="0.15" />
                </svg>
              </div>
              <div className="mt-4 text-center text-[#4A5568]" style={{ fontSize: '14px' }}>
                Precise grid-based layouts
              </div>
            </div>

            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <div className="flex aspect-square items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                  <path
                    d="M 20 160 L 40 120 L 60 140 L 80 80 L 100 100 L 120 40 L 140 60 L 160 20"
                    stroke="#2CB5E3"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M 20 160 L 40 130 L 60 150 L 80 110 L 100 120 L 120 90 L 140 100 L 160 70"
                    stroke="#1B2A6B"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                  {[20, 40, 60, 80, 100, 120, 140, 160].map((x, i) => (
                    <circle key={x} cx={x} cy={[160, 120, 140, 80, 100, 40, 60, 20][i]} r="3.5" fill="#1B2A6B" />
                  ))}
                </svg>
              </div>
              <div className="mt-4 text-center text-[#4A5568]" style={{ fontSize: '14px' }}>
                Abstract, engineering-led data compositions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
