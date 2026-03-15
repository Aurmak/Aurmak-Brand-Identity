import { ImageWithFallback } from './figma/ImageWithFallback';

export function VisualDirection() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-[#1B2A6B] mb-4" style={{ fontSize: '48px', fontWeight: '700' }}>
            Visual Language
          </h1>
          <div className="w-16 h-1 bg-[#2CB5E3]"></div>
        </div>

        {/* Visual Principles */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Visual Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#1B2A6B] rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
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
                Clean lines, grid-based layouts, and precise geometry. Every element serves a clear purpose. Avoid decorative flourishes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#2CB5E3] rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="15" r="6" stroke="white" strokeWidth="2" />
                  <path d="M10 35 C10 28, 15 25, 20 25 C25 25, 30 28, 30 35" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                Human but Professional
              </h3>
              <p className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Authentic photography with natural light. Real people, genuine interactions. Avoid stock imagery that looks staged.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 border-2 border-[#1B2A6B] rounded-sm flex items-center justify-center bg-white">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
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
                Thin-line diagrams, clean charts, and technical illustrations. Abstract representations of complex systems.
              </p>
            </div>
          </div>
        </div>

        {/* Mood Board - Photography */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Photography Style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="space-y-3">
              <div className="aspect-square overflow-hidden rounded-sm border border-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMTkyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern professional workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2CB5E3] rounded-full flex-shrink-0"></div>
                <span className="text-[#4A5568]" style={{ fontSize: '13px' }}>
                  Clean, minimalist workspaces
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-square overflow-hidden rounded-sm border border-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwY2xlYW58ZW58MXx8fHwxNzcwMTk4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Engineering team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2CB5E3] rounded-full flex-shrink-0"></div>
                <span className="text-[#4A5568]" style={{ fontSize: '13px' }}>
                  Candid collaboration moments
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-square overflow-hidden rounded-sm border border-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1749310726959-d8fccfef7ee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29ycG9yYXRlJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTkyOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Minimalist corporate office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2CB5E3] rounded-full flex-shrink-0"></div>
                <span className="text-[#4A5568]" style={{ fontSize: '13px' }}>
                  Architectural details, geometry
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#F4F6F8] border border-gray-200 p-6 rounded-sm">
            <h3 className="text-[#1B2A6B] mb-4" style={{ fontSize: '18px', fontWeight: '600' }}>
              Photography Guidelines
            </h3>
            <div className="grid grid-cols-2 gap-6 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Natural light preferred over harsh artificial lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Authentic moments, no overly staged compositions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Diverse representation across all materials</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Minimal colour grading, keep tones neutral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Focus on details: hands, technology, environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Avoid clichéd stock photography aesthetics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Diagrams & Data */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Data Dashboards & Wireframes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-3">
              <div className="aspect-video overflow-hidden rounded-sm border border-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwc2NyZWVufGVufDF8fHx8MTc3MDE1MjQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Clean data dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2CB5E3] rounded-full flex-shrink-0"></div>
                <span className="text-[#4A5568]" style={{ fontSize: '13px' }}>
                  Clean, minimal data dashboards with clear hierarchy
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-video overflow-hidden rounded-sm border border-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1698434156098-68e834638679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcwMTU3OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wireframe design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2CB5E3] rounded-full flex-shrink-0"></div>
                <span className="text-[#4A5568]" style={{ fontSize: '13px' }}>
                  Wireframes and technical planning diagrams
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Iconography */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Iconography Standards
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-3xl">
            Our iconography is functional, minimalist, and engineering-focused. We use <strong>Lucide React</strong> as our primary icon library, following a consistent linear style that complements our typography and grid.
          </p>
          <div className="bg-[#F4F6F8] border border-gray-200 p-8 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="text-[#1B2A6B] font-semibold text-xs uppercase tracking-wider">Style</div>
                <div className="p-6 bg-white border border-gray-200 rounded-sm flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <p className="text-[#4A5568] text-xs">Linear style only. No fills. Rounded caps and joins.</p>
              </div>
              <div className="space-y-3">
                <div className="text-[#1B2A6B] font-semibold text-xs uppercase tracking-wider">Stroke Weight</div>
                <div className="p-6 bg-white border border-gray-200 rounded-sm flex items-center justify-center">
                  <div className="flex items-center space-x-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                  </div>
                </div>
                <p className="text-[#4A5568] text-xs">Standard: 1.5pt for most UI. Use 2pt for hero icons.</p>
              </div>
              <div className="space-y-3">
                <div className="text-[#1B2A6B] font-semibold text-xs uppercase tracking-wider">Bounding Box</div>
                <div className="p-6 bg-white border border-gray-200 rounded-sm flex items-center justify-center">
                  <div className="w-8 h-8 border border-dashed border-[#2CB5E3] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="1.5"><path d="M12 2v20M2 12h20" /></svg>
                  </div>
                </div>
                <p className="text-[#4A5568] text-xs">All icons must fit within a 24×24px square container.</p>
              </div>
              <div className="space-y-3">
                <div className="text-[#1B2A6B] font-semibold text-xs uppercase tracking-wider">Colour Application</div>
                <div className="p-6 bg-white border border-gray-200 rounded-sm flex items-center justify-center">
                  <div className="flex space-x-4">
                    <div className="w-6 h-6 rounded-full bg-[#1B2A6B]"></div>
                    <div className="w-6 h-6 rounded-full bg-[#2CB5E3]"></div>
                    <div className="w-6 h-6 rounded-full bg-[#4A5568]"></div>
                  </div>
                </div>
                <p className="text-[#4A5568] text-xs">Use brand Navy, Cyan, or Slate Grey. No other colours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Elements */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Graphic Elements
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Thin Line Diagrams */}
            <div className="border border-gray-200 p-8 bg-white rounded-sm">
              <div className="aspect-square flex items-center justify-center">
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

            {/* Grid Patterns */}
            <div className="border border-gray-200 p-8 bg-white rounded-sm">
              <div className="aspect-square flex items-center justify-center">
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

            {/* Abstract Data */}
            <div className="border border-gray-200 p-8 bg-white rounded-sm">
              <div className="aspect-square flex items-center justify-center">
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
                    opacity="0.4"
                  />
                  {[20, 40, 60, 80, 100, 120, 140, 160].map((x, i) => (
                    <circle key={i} cx={x} cy="160" r="2" fill="#4A5568" />
                  ))}
                  <line x1="20" y1="160" x2="160" y2="160" stroke="#4A5568" strokeWidth="1" opacity="0.3" />
                  <line x1="20" y1="20" x2="20" y2="160" stroke="#4A5568" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
              <div className="mt-4 text-center text-[#4A5568]" style={{ fontSize: '14px' }}>
                Clean data visualisation
              </div>
            </div>
          </div>
        </div>

        {/* Avoid */}
        <div className="space-y-6 bg-red-50 border-l-4 border-red-500 p-8 rounded-sm">
          <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
            What to Avoid
          </h3>
          <div className="grid grid-cols-2 gap-6 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 flex-shrink-0">×</span>
              <span>Overly playful or casual imagery (cartoons, illustrations)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 flex-shrink-0">×</span>
              <span>Stock photos that look staged or artificial</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 flex-shrink-0">×</span>
              <span>Bright, saturated colours outside the approved palette</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 flex-shrink-0">×</span>
              <span>Decorative elements without functional purpose</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 flex-shrink-0">×</span>
              <span>Gradients, drop shadows, or excessive effects</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 flex-shrink-0">×</span>
              <span>Busy patterns or textured backgrounds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
