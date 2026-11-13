import { DoDont } from './DoDont';
export function VisualDirection() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12 lg:space-y-16">
        <div>
          <h1 className="mb-4 text-3xl font-bold text-[#282973] md:text-4xl lg:text-5xl">
            Visual Language
          </h1>
          <div className="h-1 w-16 bg-[#27AAE1]"></div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: '600' }}>
            Visual principles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#282973]">
                <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                  <rect x="5" y="5" width="30" height="30" stroke="#27AAE1" strokeWidth="2" />
                  <line x1="5" y1="13" x2="35" y2="13" stroke="#27AAE1" strokeWidth="1" />
                  <line x1="5" y1="21" x2="35" y2="21" stroke="#27AAE1" strokeWidth="1" />
                  <line x1="5" y1="29" x2="35" y2="29" stroke="#27AAE1" strokeWidth="1" />
                  <line x1="13" y1="5" x2="13" y2="35" stroke="#27AAE1" strokeWidth="1" />
                  <line x1="21" y1="5" x2="21" y2="35" stroke="#27AAE1" strokeWidth="1" />
                  <line x1="29" y1="5" x2="29" y2="35" stroke="#27AAE1" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-[#282973]" style={{ fontSize: '22px', fontWeight: '600' }}>
                Engineering clarity
              </h3>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Clean lines, structured layouts and a disciplined grid. Every visual should feel considered rather than decorative.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#27AAE1]">
                <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="15" r="6" stroke="white" strokeWidth="2" />
                  <path d="M10 35 C10 28, 15 25, 20 25 C25 25, 30 28, 30 35" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-[#282973]" style={{ fontSize: '22px', fontWeight: '600' }}>
                Human but professional
              </h3>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Show real working environments, calm pacing and intentional spacing. The overall tone should feel credible and composed.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#282973] bg-white">
                <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                  <path d="M5 30 L12 22 L18 26 L25 15 L35 20" stroke="#27AAE1" strokeWidth="2" fill="none" />
                  <circle cx="5" cy="30" r="2" fill="#282973" />
                  <circle cx="12" cy="22" r="2" fill="#282973" />
                  <circle cx="18" cy="26" r="2" fill="#282973" />
                  <circle cx="25" cy="15" r="2" fill="#282973" />
                  <circle cx="35" cy="20" r="2" fill="#282973" />
                </svg>
              </div>
              <h3 className="text-[#282973]" style={{ fontSize: '22px', fontWeight: '600' }}>
                Data visualisation
              </h3>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Use thin-line diagrams, subtle technical overlays and uncluttered charts to reinforce precision and analytical depth.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: '600' }}>
            Graphic elements
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <div className="flex aspect-square items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 180 180" className="stroke-[#282973]" fill="none">
                  <line x1="40" y1="40" x2="140" y2="40" strokeWidth="1.5" />
                  <line x1="140" y1="40" x2="140" y2="140" strokeWidth="1.5" />
                  <line x1="140" y1="140" x2="40" y2="140" strokeWidth="1.5" />
                  <line x1="40" y1="140" x2="40" y2="40" strokeWidth="1.5" />
                  <line x1="40" y1="40" x2="140" y2="140" strokeWidth="1" opacity="0.4" />
                  <line x1="140" y1="40" x2="40" y2="140" strokeWidth="1" opacity="0.4" />
                  <circle cx="90" cy="90" r="30" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="4" fill="#27AAE1" stroke="none" />
                  <circle cx="140" cy="40" r="4" fill="#27AAE1" stroke="none" />
                  <circle cx="140" cy="140" r="4" fill="#27AAE1" stroke="none" />
                  <circle cx="40" cy="140" r="4" fill="#27AAE1" stroke="none" />
                </svg>
              </div>
              <div className="mt-4 text-center text-[#545F7E]" style={{ fontSize: '16px' }}>
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
                      stroke="#282973"
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
                      stroke="#282973"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))}
                  <rect x="40" y="40" width="60" height="60" fill="#27AAE1" opacity="0.2" />
                  <rect x="80" y="80" width="60" height="60" fill="#282973" opacity="0.15" />
                </svg>
              </div>
              <div className="mt-4 text-center text-[#545F7E]" style={{ fontSize: '16px' }}>
                Precise grid-based layouts
              </div>
            </div>

            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <div className="flex aspect-square items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                  <path
                    d="M 20 160 L 40 120 L 60 140 L 80 80 L 100 100 L 120 40 L 140 60 L 160 20"
                    stroke="#27AAE1"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M 20 160 L 40 130 L 60 150 L 80 110 L 100 120 L 120 90 L 140 100 L 160 70"
                    stroke="#282973"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                  {[20, 40, 60, 80, 100, 120, 140, 160].map((x, i) => (
                    <circle key={x} cx={x} cy={[160, 120, 140, 80, 100, 40, 60, 20][i]} r="3.5" fill="#282973" />
                  ))}
                </svg>
              </div>
              <div className="mt-4 text-center text-[#545F7E]" style={{ fontSize: '16px' }}>
                Abstract, engineering-led data compositions
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>
            Imagery and motion
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Stock imagery',
                body: 'Choose specific, real subjects over generic globes and wireframe maps. Avoid green, magenta and neon-heavy imagery.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-sm border border-gray-200 bg-white p-8">
                <h3 className="mb-3 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>{card.title}</h3>
                <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{card.body}</p>
              </div>
            ))}
          </div>
          <div className="border-l-4 border-[#27AAE1] bg-[#EEF7FC] p-6">
            <p className="text-[#282973]" style={{ fontSize: '18px', fontWeight: 600 }}>Motion</p>
            <p className="mt-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Motion is short and subtle, with gentle entrance effects. It shouldn't block reading, and it stops for users who prefer reduced motion.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>
            Photography
          </h2>
          <p className="max-w-3xl text-[#545F7E]" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Real, stock and AI-generated images are all permitted. The same rules apply to each source.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <h3 className="mb-3 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>Real photography</h3>
              <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <li>• Show real teams, sites and working environments</li>
                <li>• Natural light, unposed moments, calm framing</li>
                <li>• Get written consent before publishing identifiable people or clients</li>
              </ul>
            </div>
            <div className="rounded-sm border border-gray-200 bg-white p-8">
              <h3 className="mb-3 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>Stock and AI-generated</h3>
              <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <li>• Choose images that match the tone above</li>
                <li>• Avoid generic clichés such as handshakes and glowing circuits</li>
                <li>• Check AI output for distorted hands, text and logos before use</li>
                <li>• Avoid AI images that imitate a real person or client</li>
              </ul>
            </div>
          </div>
          <div className="border-l-4 border-[#27AAE1] bg-[#EEF7FC] p-6">
            <p className="text-[#282973]" style={{ fontSize: '18px', fontWeight: 600 }}>Treatment</p>
            <p className="mt-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Use light grading, and a dark overlay where text sits on a photo. Avoid heavy filters, neon tints and added effects.
            </p>
          </div>
        </div>
        <DoDont dos={["Use real, stock or AI-generated images that fit the tone", "Get consent before publishing identifiable people or clients"]} donts={["Use AI images that imitate a real person or client", "Use neon, heavy filters or unrelated stock imagery"]} />
      </div>
    </div>
  );
}
