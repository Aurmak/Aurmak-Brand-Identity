import { DoDont } from './DoDont';
const rules = [
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
    body: 'Each sub-brand must meet the accessibility requirements in Digital Principles before it is published.',
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

export function SubBrands() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12 lg:space-y-16">
        <div>
          <h1 className="text-[#282973]" style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>
            Sub-Brands
          </h1>
          <div className="mb-6 mt-4 h-1 w-16 bg-[#27AAE1]"></div>
          <p className="text-[#545F7E]" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '48rem' }}>
            Sub-brands, products and ventures can have their own look and logos. This section sets the rules they
            follow to stay recognisably part of AURMAK.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rules.map((r) => (
            <div key={r.title} className="border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-10 bg-[#27AAE1]"></div>
              <h3 className="mb-2 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>{r.title}</h3>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{r.body}</p>
            </div>
          ))}
        </div>
        <DoDont dos={["Agree a sub-brand before using it"]} donts={["Launch a sub-brand before it is agreed"]} />
      </div>
    </div>
  );
}
