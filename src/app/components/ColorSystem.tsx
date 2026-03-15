import { Info } from 'lucide-react';

export function ColorSystem() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-[#1B2A6B] mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Colour Palette
          </h1>
          <div className="w-12 md:w-16 h-1 bg-[#2CB5E3]"></div>
        </div>

        {/* Primary Colours */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#1B2A6B] text-2xl md:text-3xl font-semibold">
            Primary Colours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Deep Royal Navy Blue */}
            <div className="space-y-4">
              <div className="relative">
                <div className="w-full h-64 bg-[#1B2A6B] rounded-sm flex items-center justify-center border border-gray-200">
                  <div className="text-center text-white">
                    <div style={{ fontSize: '28px', fontWeight: '600' }}>Deep Royal Navy</div>
                    <div className="mt-2" style={{ fontSize: '16px', fontWeight: '400', opacity: 0.9 }}>
                      Primary Brand Colour
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 bg-[#F4F6F8] p-6 rounded-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HEX</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '18px', fontWeight: '700' }}>#1B2A6B</span>
                </div>
                <div className="h-px bg-gray-300"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>RGB</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '16px' }}>27, 42, 107</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CMYK</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '16px' }}>75, 61, 0, 58</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PMS</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '16px' }}>534 C</span>
                </div>
              </div>
              <div className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <strong>Usage:</strong> Headers, primary UI elements, backgrounds, buttons, and main brand touchpoints. Conveys authority and trust.
              </div>
            </div>

            {/* Bright Cyan */}
            <div className="space-y-4">
              <div className="relative">
                <div className="w-full h-64 bg-[#2CB5E3] rounded-sm flex items-center justify-center border border-gray-200">
                  <div className="text-center text-white">
                    <div style={{ fontSize: '28px', fontWeight: '600' }}>Bright Cyan</div>
                    <div className="mt-2" style={{ fontSize: '16px', fontWeight: '400', opacity: 0.95 }}>
                      Accent Colour
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 bg-[#F4F6F8] p-6 rounded-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HEX</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '18px', fontWeight: '700' }}>#2CB5E3</span>
                </div>
                <div className="h-px bg-gray-300"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>RGB</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '16px' }}>44, 181, 227</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CMYK</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '16px' }}>81, 20, 0, 11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4A5568]" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PMS</span>
                  <span className="text-[#1B2A6B] select-all cursor-text" style={{ fontSize: '16px' }}>306 C</span>
                </div>
              </div>
              <div className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <strong>Usage:</strong> Highlights, call-to-action buttons, links, interactive elements, data visualisation, and points of emphasis. Signals innovation and action.
              </div>
            </div>
          </div>
        </div>

        {/* Neutral Colours */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Neutral Colours
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {/* White */}
            <div className="space-y-3">
              <div className="h-40 bg-white rounded-sm flex items-center justify-center border-2 border-gray-300">
                <div className="text-center text-[#1B2A6B]" style={{ fontSize: '18px', fontWeight: '600' }}>
                  White
                </div>
              </div>
              <div className="space-y-2 bg-[#F4F6F8] p-4 rounded-sm text-center">
                <span className="text-[#1B2A6B] block select-all cursor-text" style={{ fontSize: '14px', fontWeight: '700' }}>#FFFFFF</span>
                <p className="text-[#4A5568]" style={{ fontSize: '12px' }}>RGB: 255, 255, 255</p>
              </div>
            </div>

            {/* Light Grey */}
            <div className="space-y-3">
              <div className="h-40 bg-[#F4F6F8] rounded-sm flex items-center justify-center border border-gray-200">
                <div className="text-center text-[#1B2A6B]" style={{ fontSize: '18px', fontWeight: '600' }}>
                  Light Grey
                </div>
              </div>
              <div className="space-y-2 bg-[#F4F6F8] p-4 rounded-sm text-center border border-gray-200">
                <span className="text-[#1B2A6B] block select-all cursor-text" style={{ fontSize: '14px', fontWeight: '700' }}>#F4F6F8</span>
                <p className="text-[#4A5568]" style={{ fontSize: '12px' }}>RGB: 244, 246, 248</p>
              </div>
            </div>

            {/* Slate Grey */}
            <div className="space-y-3">
              <div className="h-40 bg-[#4A5568] rounded-sm flex items-center justify-center border border-gray-200">
                <div className="text-center text-white" style={{ fontSize: '18px', fontWeight: '600' }}>
                  Slate Grey
                </div>
              </div>
              <div className="space-y-2 bg-[#F4F6F8] p-4 rounded-sm text-center">
                <span className="text-[#1B2A6B] block select-all cursor-text" style={{ fontSize: '14px', fontWeight: '700' }}>#4A5568</span>
                <p className="text-[#4A5568]" style={{ fontSize: '12px' }}>RGB: 74, 85, 104</p>
              </div>
            </div>

            {/* Dark Grey */}
            <div className="space-y-3">
              <div className="h-40 bg-[#2D3748] rounded-sm flex items-center justify-center border border-gray-200">
                <div className="text-center text-white" style={{ fontSize: '18px', fontWeight: '600' }}>
                  Dark Grey
                </div>
              </div>
              <div className="space-y-2 bg-[#F4F6F8] p-4 rounded-sm text-center">
                <span className="text-[#1B2A6B] block select-all cursor-text" style={{ fontSize: '14px', fontWeight: '700' }}>#2D3748</span>
                <p className="text-[#4A5568]" style={{ fontSize: '12px' }}>RGB: 45, 55, 72</p>
              </div>
            </div>
          </div>
          <div className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <strong>Usage:</strong> White for primary backgrounds and inverted elements. Light Grey for subtle backgrounds and sections. 
            Slate Grey for body text (never use pure black). Dark Grey for secondary headings and emphasis.
          </div>
        </div>

        {/* Accessibility Standards */}
        <div className="bg-[#F4F6F8] border-l-4 border-[#2CB5E3] p-8">
          <div className="flex items-start space-x-3 mb-4">
            <Info className="w-6 h-6 text-[#2CB5E3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-[#1B2A6B] mb-3" style={{ fontSize: '20px', fontWeight: '600' }}>
                Accessibility & Contrast Standards
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white p-4 rounded-sm border border-gray-200">
                    <p className="text-[#1B2A6B] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>WCAG AA Compliant Combinations</p>
                    <ul className="space-y-1 text-[#4A5568]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      <li>• Navy (#1B2A6B) on White (#FFFFFF) — 10.2:1</li>
                      <li>• Slate Grey (#4A5568) on White — 8.6:1</li>
                      <li>• White on Navy (#1B2A6B) — 10.2:1</li>
                      <li>• Cyan (#2CB5E3) on Navy — 4.8:1</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-sm border border-gray-200">
                    <p className="text-[#1B2A6B] mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>Print Specifications</p>
                    <ul className="space-y-1 text-[#4A5568]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      <li>• Always use CMYK values for print</li>
                      <li>• Minimum 300 DPI for raster graphics</li>
                      <li>• Use Pantone references for spot colour</li>
                      <li>• Coated stock recommended for cyan</li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <strong>Note:</strong> Never use Cyan (#2CB5E3) as body text on white backgrounds — it does not meet WCAG AA standards (3.5:1). 
                  Use only for accents, highlights, and interactive elements with Navy or White text overlay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Colour Application Examples
          </h2>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-[#1B2A6B] p-8 text-white">
                <h3 style={{ fontSize: '24px', fontWeight: '700' }}>Header Example</h3>
                <p className="mt-2 opacity-95" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Navy background with white text provides excellent contrast and authority.
                </p>
              </div>
              <div className="bg-white p-8">
                <p className="text-[#4A5568]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Body content uses Slate Grey for optimal readability. This creates clear hierarchy whilst remaining accessible.
                </p>
                <button className="mt-4 px-6 py-3 bg-[#2CB5E3] text-white rounded-sm hover:bg-[#1B9BC4] transition-colors" style={{ fontSize: '15px', fontWeight: '600' }}>
                  Call to Action
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
              <div className="p-8 bg-[#F4F6F8]">
                <h3 className="text-[#1B2A6B]" style={{ fontSize: '24px', fontWeight: '700' }}>Light Background</h3>
                <p className="text-[#4A5568] mt-2" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Light grey backgrounds provide subtle contrast without compromising readability.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <button className="px-6 py-3 bg-[#2CB5E3] text-white rounded-sm hover:bg-[#1B9BC4] transition-colors" style={{ fontSize: '15px', fontWeight: '600' }}>
                    Primary
                  </button>
                  <button className="px-6 py-3 border-2 border-[#1B2A6B] text-[#1B2A6B] bg-white rounded-sm hover:bg-gray-50 transition-colors" style={{ fontSize: '15px', fontWeight: '600' }}>
                    Secondary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
