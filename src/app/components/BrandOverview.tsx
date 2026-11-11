import { DoDont } from './DoDont';
import logoImage from '../../assets/a534ae5395a05e9265cd96257376030497e72896.png';

export function BrandOverview() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#282973] mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              Brand Overview
            </h1>
            <div className="w-12 md:w-16 h-1 bg-[#27AAE1]"></div>
          </div>
          <img src={logoImage} alt="AURMAK Logo" className="h-10 md:h-12 lg:h-16 w-auto" />
        </div>

        {/* Positioning */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">
            Who we are
          </h2>
          <p className="text-[#545F7E] text-base md:text-lg lg:text-xl leading-relaxed">
            AURMAK designs and delivers enterprise systems, digital infrastructure, legacy modernisation
            and AI-enabled operational intelligence. We align commercial objectives with disciplined delivery
            to modernise systems, build scalable products and strengthen the infrastructure that supports growth.
          </p>
        </div>

        {/* Brand architecture */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">Brand architecture</h2>
          <p className="text-[#545F7E] text-base leading-relaxed max-w-3xl">
            AURMAK is the parent brand. Sub-brands, products and ventures sit beneath it. Each one has a clear relationship to AURMAK. This guide does not list them, because they change over time. See the Sub-Brands section for the rules they follow.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>AURMAK (parent)</div>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>Defines the core identity in this guide: logo, voice, imagery and principles.</p>
            </div>
            <div className="border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>Sub-brands</div>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>Have their own look, within the rules in the Sub-Brands section.</p>
            </div>
            <div className="border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>Products and ventures</div>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>Follow the sub-brand rules when they have their own identity. Otherwise they use the parent brand.</p>
            </div>
          </div>
        </div>

        {/* Voice */}

        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">Voice and tone</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>Formal, B2B</p>
              <p className="text-[#545F7E]" style={{ fontSize: '17px', lineHeight: '1.6' }}>Written for operators, leaders and buyers. No slang, no hype.</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>UK English</p>
              <p className="text-[#545F7E]" style={{ fontSize: '17px', lineHeight: '1.6' }}>Use modernise, organisations and programme. Dates and currency follow UK style.</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#282973]" style={{ fontSize: '20px', fontWeight: 700 }}>Short, paired headlines</p>
              <p className="text-[#545F7E]" style={{ fontSize: '17px', lineHeight: '1.6' }}>Two short phrases ending in full stops: "Two Centres. One Vision." Use this pattern for marketing headlines.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-slate-200 bg-white p-6">
              <p className="mb-3 text-[#282973]" style={{ fontSize: '18px', fontWeight: 700 }}>Words and habits to avoid</p>
              <ul className="space-y-1 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <li>• Synergy, leverage, disruptive, game-changing</li>
                <li>• World-class, best-in-class, cutting-edge</li>
                <li>• Exclamation marks in headlines</li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-white p-6">
              <p className="mb-3 text-[#282973]" style={{ fontSize: '18px', fontWeight: 700 }}>Example</p>
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Instead of "We leverage cutting-edge AI to disrupt your operations!", write "We apply AI where it reduces operational cost and risk."
              </p>
            </div>
          </div>
        </div>

        <DoDont dos={["Write in plain UK English", "Use short, paired headlines that end in a full stop", "Say what we do and what the client gains"]} donts={["Use buzzwords such as synergy, leverage or world-class", "Use exclamation marks in headlines", "Make claims we cannot back up with a source"]} />

        {/* Core principles */}
        <div className="space-y-8">
          <h2 className="text-[#282973]" style={{ fontSize: '30px', fontWeight: '600' }}>
            Core principles
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
              <div className="w-2 h-16 bg-[#27AAE1]"></div>
              <h3 className="text-[#282973]" style={{ fontSize: '22px', fontWeight: '600' }}>
                Structured execution
              </h3>
              <p className="text-[#545F7E]" style={{ fontSize: '17px', lineHeight: '1.6' }}>
                Complex initiatives are delivered through defined frameworks, clear ownership,
                and disciplined implementation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-2 h-16 bg-[#27AAE1]"></div>
              <h3 className="text-[#282973]" style={{ fontSize: '22px', fontWeight: '600' }}>
                Commercial alignment
              </h3>
              <p className="text-[#545F7E]" style={{ fontSize: '17px', lineHeight: '1.6' }}>
                Technical decisions are shaped by operational priorities, measurable performance,
                and long-term business value.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-2 h-16 bg-[#27AAE1]"></div>
              <h3 className="text-[#282973]" style={{ fontSize: '22px', fontWeight: '600' }}>
                Controlled innovation
              </h3>
              <p className="text-[#545F7E]" style={{ fontSize: '17px', lineHeight: '1.6' }}>
                New capability is introduced with governance and precision in mind,
                including AI where it delivers clear operational value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
