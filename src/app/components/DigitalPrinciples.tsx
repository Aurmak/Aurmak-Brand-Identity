import { DoDont } from './DoDont';
const principles = [
  {
    title: 'Clarity first',
    body: 'Each screen has one main job. Remove anything that does not help the reader or user complete it.',
  },
  {
    title: 'Clear hierarchy',
    body: 'Headings, body copy and calls to action should be easy to tell apart at a glance, so the reader always knows where to look.',
  },
  {
    title: 'Interactive elements stand out',
    body: 'Make calls to action and links easy to spot, and use emphasis sparingly.',
  },
  {
    title: 'Feedback is clear',
    body: 'Pair status messages with an icon or text, never colour alone.',
  },
  {
    title: 'Accessible by default',
    body: 'Meet WCAG 2.2 AA. Accessibility is part of the design, not a final check.',
  },
  {
    title: 'Respect the user',
    body: 'Keep motion short and optional. Load fast on slow connections. Work on phones as well as desktops.',
  },
];

const subBrandRules = [
  {
    title: 'Agree first',
    body: 'Every sub-brand is agreed before it is used. Each one has a domain, look and relationship to AURMAK. This guide does not list sub-brands, because they change over time.',
  },
  {
    title: 'Own look',
    body: 'A sub-brand sets its own colours and typefaces. It does not reuse the AURMAK look.',
  },
  {
    title: 'Same accessibility bar',
    body: 'Each sub-brand meets the accessibility requirements below before it is published.',
  },
  {
    title: 'Logo built from the parent rules',
    body: 'Each sub-brand has a master logo file, a reversed version for dark backgrounds, and clear space and minimum sizes that follow the Logo Guidelines section.',
  },
  {
    title: 'Retire properly',
    body: 'When a sub-brand ends, decide what happens to its domain, assets and records, and archive the assets.',
  },
];

const accessibility = [
  'Use semantic HTML: real buttons, links, headings and lists',
  'Every interactive element works with the keyboard alone',
  'Focus should stay visible, with at least 3:1 contrast against its background',
  'Every input has a programmatic label, not just visual text',
  'Errors are announced to screen readers and are not conveyed by colour alone',
  'Text meets 4.5:1 contrast; large text and control boundaries meet 3:1',
  'Respect reduced-motion settings for all animation and video',
  'A component library does not guarantee accessibility. Test each implementation.',
];

export function DigitalPrinciples() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12 lg:space-y-16">
        <div>
          <h1 className="text-[#282973]" style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>
            Digital Principles
          </h1>
          <div className="mb-6 mt-4 h-1 w-16 bg-[#27AAE1]"></div>
          <p className="text-[#545F7E]" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '48rem' }}>
            These principles apply to the parent brand and to every sub-brand, product and venture, in every website,
            app and digital service. They are guiding rules, not a list of assets or styles. Each team applies them in
            its own way, so that all of our digital work still feels like AURMAK.
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>Principles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-1 w-10 bg-[#27AAE1]"></div>
                <h3 className="mb-2 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>{p.title}</h3>
                <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>Using the brand in digital</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-gray-200 bg-[#EEF7FC] p-6">
              <h3 className="mb-2 text-[#282973]" style={{ fontSize: '18px', fontWeight: 700 }}>Use from this guide</h3>
              <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <li>• The logo files and their clear-space rules</li>
                <li>• The voice, imagery and motion principles</li>
              </ul>
            </div>
            <div className="rounded-sm border border-gray-200 bg-[#EEF7FC] p-6">
              <h3 className="mb-2 text-[#282973]" style={{ fontSize: '18px', fontWeight: 700 }}>Decided by each team</h3>
              <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <li>• Page layouts, grids and spacing</li>
                <li>• Component shapes, sizes and states</li>
                <li>• Exact type sizes for each screen</li>
                <li>• Animation details and page transitions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>Sub-brands</h2>
          <p className="text-[#545F7E]" style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '48rem' }}>
            Sub-brands, products and ventures can have their own look and logos. These rules keep them recognisably part of AURMAK.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {subBrandRules.map((r) => (
              <div key={r.title} className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-1 w-10 bg-[#27AAE1]"></div>
                <h3 className="mb-2 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>{r.title}</h3>
                <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{r.body}</p>
              </div>
            ))}
          </div>
          <DoDont dos={["Agree a sub-brand before using it"]} donts={["Launch a sub-brand before it is agreed"]} />
        </div>

        <div className="border-l-4 border-[#27AAE1] bg-[#EEF7FC] p-8">
          <h2 className="mb-4 text-[#282973]" style={{ fontSize: '24px', fontWeight: 700 }}>Accessibility requirements</h2>
          <ul className="grid grid-cols-1 gap-3 text-[#545F7E] md:grid-cols-2" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {accessibility.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </div>
        <DoDont dos={["Pair status messages with an icon or text"]} donts={["Rely on colour alone to show status"]} />
      </div>
    </div>
  );
}
