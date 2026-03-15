import { CheckCircle2 } from 'lucide-react';

export function ToneOfVoice() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-[#1B2A6B] mb-4" style={{ fontSize: '48px', fontWeight: '700' }}>
            Tone of Voice
          </h1>
          <div className="w-16 h-1 bg-[#2CB5E3]"></div>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <p className="text-[#4A5568]" style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Our voice is professional, direct, and grounded. We communicate with clarity and confidence, avoiding 
            unnecessary complexity whilst respecting the intelligence of our audience. Always use British English spelling and conventions.
          </p>
        </div>

        {/* Voice Principles */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Voice Principles
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Direct & Concise */}
            <div className="border border-gray-200 p-8 bg-[#F4F6F8] rounded-sm">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#2CB5E3] flex-shrink-0" />
                <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                  Direct & Concise
                </h3>
              </div>
              <p className="text-[#4A5568] mb-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Get to the point. Use clear, simple sentences. Avoid unnecessary qualifiers and filler words. Respect the reader's time.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Good Example
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-4 text-[#1B2A6B] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "We build ventures that solve real problems."
                  </div>
                </div>
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Avoid
                  </div>
                  <div className="bg-white border-l-4 border-red-500 p-4 text-[#4A5568] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "We're really passionate about potentially creating innovative ventures that might help solve various kinds of problems."
                  </div>
                </div>
              </div>
            </div>

            {/* Grounded */}
            <div className="border border-gray-200 p-8 bg-[#F4F6F8] rounded-sm">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#2CB5E3] flex-shrink-0" />
                <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                  Grounded
                </h3>
              </div>
              <p className="text-[#4A5568] mb-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Stay realistic. Avoid hyperbole and buzzwords. Focus on tangible outcomes and specific details. Evidence over assertion.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Good Example
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-4 text-[#1B2A6B] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "Our portfolio companies have raised £45M in total funding."
                  </div>
                </div>
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Avoid
                  </div>
                  <div className="bg-white border-l-4 border-red-500 p-4 text-[#4A5568] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "We're revolutionising the future with game-changing, disruptive innovation!"
                  </div>
                </div>
              </div>
            </div>

            {/* Professional but Human */}
            <div className="border border-gray-200 p-8 bg-[#F4F6F8] rounded-sm">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#2CB5E3] flex-shrink-0" />
                <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                  Professional but Human
                </h3>
              </div>
              <p className="text-[#4A5568] mb-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Maintain authority without being cold. Use active voice. Write as you would speak to a colleague. Be approachable yet competent.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Good Example
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-4 text-[#1B2A6B] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "We partner with founders who share our commitment to building sustainable businesses."
                  </div>
                </div>
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Avoid
                  </div>
                  <div className="bg-white border-l-4 border-red-500 p-4 text-[#4A5568] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "Partnerships are formed with founders who demonstrate alignment with organisational objectives."
                  </div>
                </div>
              </div>
            </div>

            {/* No Jargon */}
            <div className="border border-gray-200 p-8 bg-[#F4F6F8] rounded-sm">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#2CB5E3] flex-shrink-0" />
                <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                  No Jargon
                </h3>
              </div>
              <p className="text-[#4A5568] mb-6" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Use plain language. If technical terms are necessary, explain them. Assume intelligence, not prior knowledge. Clarity over cleverness.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Good Example
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-4 text-[#1B2A6B] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "We help companies grow by improving their operations and strategy."
                  </div>
                </div>
                <div>
                  <div className="text-[#4A5568] mb-2" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Avoid
                  </div>
                  <div className="bg-white border-l-4 border-red-500 p-4 text-[#4A5568] rounded-sm" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    "We leverage synergies to optimise operational paradigms and deliver value-adds."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Language & Grammar */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Language & Grammar Standards
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-4 border-[#2CB5E3] pl-6 space-y-4 bg-[#F4F6F8] p-6 rounded-sm">
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '18px', fontWeight: '600' }}>
                British English
              </h3>
              <ul className="space-y-2 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Use British spelling: colour, optimise, centre, realise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Oxford comma in lists (A, B, and C)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Single quotation marks for quotes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Date format: DD Month YYYY (4 February 2026)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Use £ (GBP) as the default currency symbol</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-[#2CB5E3] pl-6 space-y-4 bg-[#F4F6F8] p-6 rounded-sm">
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '18px', fontWeight: '600' }}>
                Formatting Conventions
              </h3>
              <ul className="space-y-2 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Use sentence case for headings (not Title Case)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Numbers: Spell out one to nine, use numerals for 10+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Avoid exclamation marks in body text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Use em dashes (—) not hyphens for breaks in thought</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Always use consistent spacing (1.5–1.6 line height)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common British vs American Terms */}
        <div className="bg-[#F4F6F8] border border-gray-200 p-8 rounded-sm">
          <h3 className="text-[#1B2A6B] mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
            British English Reference
          </h3>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-[#1B2A6B] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>Use (British)</p>
              <ul className="space-y-1 text-[#4A5568]" style={{ fontSize: '14px' }}>
                <li>• Colour</li>
                <li>• Organise</li>
                <li>• Centre</li>
                <li>• Programme</li>
                <li>• Analyse</li>
                <li>• Modernise</li>
              </ul>
            </div>
            <div>
              <p className="text-red-600 mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>Avoid (American)</p>
              <ul className="space-y-1 text-[#4A5568]" style={{ fontSize: '14px' }}>
                <li>• Color</li>
                <li>• Organize</li>
                <li>• Center</li>
                <li>• Program</li>
                <li>• Analyze</li>
                <li>• Modernize</li>
              </ul>
            </div>
            <div>
              <p className="text-[#1B2A6B] mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>Additional Terms</p>
              <ul className="space-y-1 text-[#4A5568]" style={{ fontSize: '14px' }}>
                <li>• Whilst (not while)</li>
                <li>• Amongst (not among)</li>
                <li>• Licence (noun)</li>
                <li>• License (verb)</li>
                <li>• Practise (verb)</li>
                <li>• Practice (noun)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-[#1B2A6B] text-white p-12 rounded-sm">
          <h2 className="mb-8" style={{ fontSize: '28px', fontWeight: '600' }}>
            Quick Reference
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-2">
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#2CB5E3' }}>Always</div>
              <ul className="space-y-1" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li>• Be direct and concise</li>
                <li>• Use active voice</li>
                <li>• Support claims with evidence</li>
                <li>• Respect the reader's time</li>
                <li>• Use British English spelling</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#2CB5E3' }}>Never</div>
              <ul className="space-y-1" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li>• Use buzzwords or jargon</li>
                <li>• Make empty promises</li>
                <li>• Overcomplicate language</li>
                <li>• Be overly casual or playful</li>
                <li>• Use American spellings</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#2CB5E3' }}>Remember</div>
              <ul className="space-y-1" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li>• Clarity over cleverness</li>
                <li>• Precision over perfection</li>
                <li>• Substance over style</li>
                <li>• Action over aspiration</li>
                <li>• Evidence over assertion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
