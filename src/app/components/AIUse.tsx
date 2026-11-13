import { DoDont } from './DoDont';

const rules = [
  {
    title: 'People review everything',
    body: 'Any text, image or video made or edited with AI that goes into an email, marketing or sales material must be reviewed by a person before it is sent or published. That person is responsible for it.',
  },
  {
    title: 'Messaging is written by people',
    body: 'Headlines, taglines, positioning and client-facing messages are written or rewritten by a person. AI can suggest options, but a person decides what we say.',
  },
  {
    title: 'Check the facts',
    body: 'Check every claim, number, name, date, client reference and product capability against a trusted source. AI can invent details that sound right.',
  },
  {
    title: 'Protect client and confidential information',
    body: 'Never put client, financial or confidential information into a tool outside the approved list. The approved tools are listed below.',
  },
  {
    title: 'Images',
    body: 'AI images and video follow the rules in Visual Language, including the rule against AI images that imitate a real person or client.',
  },
];

const telltales = [
  'Em dashes. Use commas, full stops, or an en dash for ranges.',
  'Stock phrases such as "delve", "in today\'s fast-paced world", "it\'s important to note", "game-changer", "unlock", "seamless", "robust", "leverage", "tapestry" and "navigate the landscape".',
  'Over-explaining, or repeating the point in a closing summary.',
  'Groups of three adjectives, and "not just X, but Y" framing.',
  'Openers that praise the question or the reader, such as "Great question".',
];

export function AIUse() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12 lg:space-y-16">
        <div>
          <h1 className="text-[#282973]" style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>
            AI Use
          </h1>
          <div className="mb-6 mt-4 h-1 w-16 bg-[#27AAE1]"></div>
          <p className="text-[#545F7E]" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '48rem' }}>
            AI can help us draft, research and check work. It does not replace the people who decide what we say
            and who signs it off.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rules.map((r) => (
            <div key={r.title} className="border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-10 bg-[#27AAE1]"></div>
              <h2 className="mb-2 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>{r.title}</h2>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{r.body}</p>
            </div>
          ))}
        </div>

        <div className="border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-[#282973]" style={{ fontSize: '24px', fontWeight: 700 }}>Approved AI tools</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <div className="font-semibold text-[#282973]">Claude</div>
            <div className="text-[#545F7E]">Approved for all work, including client and confidential material.</div>
          </div>
          <p className="mt-6 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Other AI tools can be used, but confidential data only goes into the approved tools.
          </p>
          <p className="mt-3 text-[#545F7E]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Image and video generation tools are not formally approved. Staff can use them, but confidential data stays out of them.
          </p>
        </div>

        <div className="border-l-4 border-[#27AAE1] bg-[#EEF7FC] p-8">
          <h2 className="mb-4 text-[#282973]" style={{ fontSize: '24px', fontWeight: 700 }}>Remove the common AI signs</h2>
          <p className="mb-4 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Before anything leaves AURMAK, check it for these signs and rewrite them.
          </p>
          <ul className="space-y-3 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {telltales.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>

        <DoDont dos={["Have a person review AI-assisted material before it goes out", "Check every fact against a trusted source", "Rewrite stock phrases and over-explained text"]} donts={["Send AI-written messages without a person's review", "Let AI decide headlines, taglines or positioning", "Paste confidential client information into an unapproved AI tool"]} />
      </div>
    </div>
  );
}
