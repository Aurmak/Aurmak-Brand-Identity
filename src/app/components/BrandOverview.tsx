import logoImage from 'figma:asset/a534ae5395a05e9265cd96257376030497e72896.png';

export function BrandOverview() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#1B2A6B] mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              Brand Overview
            </h1>
            <div className="w-12 md:w-16 h-1 bg-[#2CB5E3]"></div>
          </div>
          <img src={logoImage} alt="AURMAK Logo" className="h-10 md:h-12 lg:h-16 w-auto" />
        </div>

        {/* Mission Statement */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-[#1B2A6B] text-2xl md:text-3xl font-semibold">
            Who We Are
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg lg:text-xl leading-relaxed">
            AURMAK is a hybrid venture studio operating at the intersection of strategic consulting 
            and hands-on engineering. We partner with ambitious organisations to build technology 
            ventures that solve complex, real-world problems.
          </p>
        </div>

        {/* Global HQ / Local Delivery Model */}
        <div className="border-l-4 border-[#2CB5E3] pl-4 md:pl-8 lg:pl-12 py-6 md:py-8 bg-[#F4F6F8]">
          <h2 className="text-[#1B2A6B] mb-4 md:mb-6 text-2xl md:text-3xl font-bold">
            Global HQ / Local Delivery
          </h2>
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#1B2A6B] rounded-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2CB5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-[#1B2A6B]" style={{ fontSize: '22px', fontWeight: '600' }}>
                    Global Headquarters
                  </h3>
                </div>
                <p className="text-[#4A5568]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Centralised strategy, governance, and technical architecture ensure consistency, 
                  quality, and alignment across all ventures. Our core team brings deep expertise 
                  in product development, engineering, and venture building.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start text-[#4A5568]" style={{ fontSize: '15px' }}>
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Unified technical standards and architecture</span>
                  </li>
                  <li className="flex items-start text-[#4A5568]" style={{ fontSize: '15px' }}>
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Strategic oversight and venture guidance</span>
                  </li>
                  <li className="flex items-start text-[#4A5568]" style={{ fontSize: '15px' }}>
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Quality assurance and best practices</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#2CB5E3] rounded-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-[#1B2A6B]" style={{ fontSize: '22px', fontWeight: '600' }}>
                    Local Delivery
                  </h3>
                </div>
                <p className="text-[#4A5568]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  On-the-ground teams embedded with clients provide contextual expertise, cultural 
                  understanding, and rapid execution. We adapt global frameworks to local realities 
                  whilst maintaining our standards of excellence.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start text-[#4A5568]" style={{ fontSize: '15px' }}>
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Regional market expertise and networks</span>
                  </li>
                  <li className="flex items-start text-[#4A5568]" style={{ fontSize: '15px' }}>
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Agile, embedded delivery teams</span>
                  </li>
                  <li className="flex items-start text-[#4A5568]" style={{ fontSize: '15px' }}>
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Cultural adaptation and localisation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-[#2CB5E3] pt-6 mt-8">
              <p className="text-[#1B2A6B]" style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.6' }}>
                This hybrid model combines the rigour of enterprise consulting with the speed and 
                execution focus of a product studio, delivering measurable outcomes for our partners.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Core Principles
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-2 h-16 bg-[#2CB5E3]"></div>
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                Engineering Clarity
              </h3>
              <p className="text-[#4A5568]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                We bring engineering discipline to venture building. Every decision is grounded 
                in data, constraints, and clear objectives.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-2 h-16 bg-[#2CB5E3]"></div>
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                Trusted Partnership
              </h3>
              <p className="text-[#4A5568]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                We earn trust through transparency, accountability, and consistent delivery. 
                Our success is measured by our partners' outcomes.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-2 h-16 bg-[#2CB5E3]"></div>
              <h3 className="text-[#1B2A6B]" style={{ fontSize: '20px', fontWeight: '600' }}>
                Sustainable Innovation
              </h3>
              <p className="text-[#4A5568]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                We build for the long term. Our ventures are designed to scale, adapt, 
                and deliver sustained value over years, not quarters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
