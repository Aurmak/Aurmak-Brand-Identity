import { DoDont } from './DoDont';
const templates = [
  {
    name: 'Product pitch: Pulse for education',
    detail: 'Start from the latest approved Education pitch. Copy it and create a new file for each buyer.',
  },
  {
    name: 'Sales deck: Automations',
    detail: 'Start from the Automations sales deck. Education and payment-processing versions follow the same flow.',
  },
  {
    name: 'Proposal (Word)',
    detail: 'Start from the proposal template. Copy it and create a new file for each client.',
  },
];

const pulseEducation = [
  'Title: product name and one-line promise',
  'The owner view: what the decision maker sees',
  'What changes for the owner: before and after',
  'What gets controlled: the scope, listed by system',
  'Core idea: the existing timetable drives the building',
  'The money: loss ranges, with the basis stated',
  'Proof for stakeholders: what they can show others',
  'One operations centre for every site',
  'Sensors and installation: what we install',
  'Weekly owner report: what they receive every week',
  'Works with what you have: existing systems we connect',
  '90-day proof: start with one site, expand on evidence',
];

const automations = [
  'Problem in one line, in the buyer\'s own terms',
  'The buyer\'s day: the repetitive work described plainly',
  'Capabilities: six ways we take work off the team',
  'Where it applies: finance, inbox, buildings',
  'Examples of work done overnight, to the buyer\'s rules',
  'Using data they already have: a building example',
  'Keep your systems: we work on top, with no migration',
  'The AI reads, your rules decide, a person approves',
  'Discovery: we review and rate each process before building',
  'Next step: pick one process and watch it run on your data',
];

const deckRules = [
  'Copy the template and create a new file. Don\'t edit the template itself.',
  'One message per slide: a headline, one supporting line, and only the points the buyer needs.',
  'Headlines are short statements that end in a full stop.',
  'Put a short caps kicker above the headline, as the templates do.',
  'Quote numbers as ranges, and state the basis on the slide or in the notes.',
  'Change the order or length to suit the buyer, and note any change.',
  'We suggest ending with one next step, rather than a list of options.',
  'Keep client names, prices and contract terms in a client copy, rather than the shared template.',
];

const proposalSections = [
  'Executive summary',
  'Basis of the proposal',
  'The product',
  'Architecture and data security',
  'Commercials',
  'Payment schedule and milestones',
  'Post-deployment support',
  'Implementation timeline',
  'Client responsibilities and third-party costs',
  'Glossary',
];

const proposalVoice = [
  'Short sentences.',
  'We prefer no em dashes. An en dash works for ranges, such as "Weeks 1–2".',
  'One price, not an itemised quote.',
  'Use the fixed phrases the templates use, such as "Free evaluation" and "Supervised go-live".',
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
          <span className="w-4 flex-shrink-0 text-[#0479AB]" style={{ fontWeight: 700 }}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PitchDecks() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12 lg:space-y-16">
        <div>
          <h1 className="text-[#282973]" style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>
            Pitch Decks & Proposals
          </h1>
          <div className="mb-6 mt-4 h-1 w-16 bg-[#27AAE1]"></div>
          <p className="text-[#545F7E]" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '48rem' }}>
            Sales material starts from our templates. Copy a template and create your own file from it. Keep the
            template itself unchanged, so the next person starts from the same place.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>Templates</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {templates.map((t) => (
              <div key={t.name} className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 h-1 w-10 bg-[#27AAE1]"></div>
                <div className="mb-2 text-[#282973]" style={{ fontSize: '18px', fontWeight: 700 }}>{t.name}</div>
                <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-[#282973]" style={{ fontSize: '24px', fontWeight: 700 }}>Product pitch flow</h2>
            <Bullets items={pulseEducation} />
          </div>
          <div className="space-y-6">
            <h2 className="text-[#282973]" style={{ fontSize: '24px', fontWeight: 700 }}>Sales deck flow</h2>
            <Bullets items={automations} />
          </div>
        </div>
        <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
          These flows are a starting point. Keep the order that suits the buyer.
        </p>

        <div className="border-l-4 border-[#27AAE1] bg-[#EEF7FC] p-8">
          <h2 className="mb-4 text-[#282973]" style={{ fontSize: '24px', fontWeight: 700 }}>Building a deck from a template</h2>
          <ul className="grid grid-cols-1 gap-3 text-[#545F7E] md:grid-cols-2" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {deckRules.map((r) => (
              <li key={r}>• {r}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: 600 }}>Proposal flow</h2>
          <Bullets items={proposalSections} />
          <div className="border border-slate-200 bg-white p-6">
            <div className="mb-3 text-[#282973]" style={{ fontSize: '18px', fontWeight: 700 }}>Proposal voice</div>
            <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {proposalVoice.map((v) => (
                <li key={v}>• {v}</li>
              ))}
            </ul>
          </div>
        </div>
        <DoDont dos={["Copy the template and create a new file", "End every deck with one clear next step", "Quote numbers as ranges, with their basis"]} donts={["Edit the shared template itself", "Put client names, prices or contract terms in a shared template"]} />
      </div>
    </div>
  );
}
