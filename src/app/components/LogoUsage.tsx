import { Check, X } from 'lucide-react';
import logoImage from 'figma:asset/a534ae5395a05e9265cd96257376030497e72896.png';
import logoInverted from 'figma:asset/3cb6cb72c135cbff9f33bf11110879c261fa8882.png';
import symbolImage from 'figma:asset/123c93a342e7f8e58a6c002f431ba7f794bc174c.png';
import symbolCyan from 'figma:asset/c65624d69fb977da64433f38bb3017c7d3aed415.png';
import VerticalLogo from '../../imports/Layer1';
import verticalLogoInverted from 'figma:asset/dac02b0353bb043d326dda0b0c00db99f038b840.png';

export function LogoUsage() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-[#1B2A6B] mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Logo Guidelines
          </h1>
          <div className="w-12 md:w-16 h-1 bg-[#2CB5E3]"></div>
        </div>

        {/* Logo Variants */}
        <div className="space-y-6 md:space-y-10">
          <h2 className="text-[#1B2A6B] text-2xl md:text-3xl font-semibold">
            Logo Lockups
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-3xl">
            AURMAK utilizes two primary logo lockups: Horizontal and Vertical. The Horizontal lockup is the primary version and should be used in most cases. The Vertical lockup is provided for applications where horizontal space is limited or where a centered aesthetic is desired.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Horizontal Section */}
            <div className="space-y-4">
              <h3 className="text-[#1B2A6B] text-xl font-medium">Horizontal (Primary)</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-white h-80">
                  <img src={logoImage} alt="AURMAK Horizontal Logo" className="w-full max-w-[400px] h-auto object-contain" />
                </div>
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-[#1B2A6B] h-80">
                  <img src={logoInverted} alt="AURMAK Horizontal Logo Inverted" className="w-full max-w-[400px] h-auto object-contain" />
                </div>
                <p className="text-[#4A5568] text-sm italic">Use for web headers, stationery, and standard documentation.</p>
              </div>
            </div>

            {/* Vertical Section */}
            <div className="space-y-4">
              <h3 className="text-[#1B2A6B] text-xl font-medium">Vertical (Secondary)</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-white h-80">
                  <div className="w-full max-w-[240px] aspect-[1.77/1] relative">
                    <VerticalLogo />
                  </div>
                </div>
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-[#1B2A6B] h-80">
                  <img src={verticalLogoInverted} alt="AURMAK Vertical Logo Inverted" className="w-full max-w-[240px] h-auto object-contain" />
                </div>
                <p className="text-[#4A5568] text-sm italic">Use for social media posts, vertical banners, and centered layouts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Symbol Usage */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#1B2A6B] text-2xl md:text-3xl font-semibold">
            Symbol Usage
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed">
            The AURMAK symbol can be used independently in situations where space is limited or the brand is already well-established. The symbol represents innovation, stability, and forward-thinking design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Symbol on white */}
            <div className="space-y-4">
              <div className="border border-gray-200 p-12 flex items-center justify-center bg-white h-64">
                <img src={symbolImage} alt="AURMAK Symbol on white" className="h-32 w-auto" />
              </div>
              <p className="text-[#4A5568] text-center" style={{ fontSize: '14px' }}>
                Symbol on white background
              </p>
            </div>

            {/* Symbol on navy */}
            <div className="space-y-4">
              <div className="border border-gray-200 p-12 flex items-center justify-center bg-[#1B2A6B] h-64">
                <img 
                  src={symbolCyan} 
                  alt="AURMAK Symbol on navy" 
                  className="h-32 w-auto"
                />
              </div>
              <p className="text-[#4A5568] text-center" style={{ fontSize: '14px' }}>
                Symbol on navy background
              </p>
            </div>
          </div>

          <div className="bg-[#F4F6F8] p-6 md:p-8 rounded-sm border border-gray-200">
            <h3 className="text-[#1B2A6B] mb-4 text-lg md:text-xl font-semibold">
              When to Use the Symbol
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-green-600 font-semibold mb-3" style={{ fontSize: '14px' }}>
                  ✓ Appropriate Uses
                </p>
                <ul className="space-y-2 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <li className="flex items-start">
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Social media profile images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>App icons and favicons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Watermarks and secondary branding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Badge and stamp applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2CB5E3] mr-2">•</span>
                    <span>Pattern and background elements</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-red-600 font-semibold mb-3" style={{ fontSize: '14px' }}>
                  ✗ Avoid Using Symbol
                </p>
                <ul className="space-y-2 text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Primary marketing materials (use full logo)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Initial brand introductions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Official documents and contracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Large-format signage (where space allows)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Email signatures (prefer full logo)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-[#4A5568]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <strong>Minimum Size:</strong> The symbol should never be reproduced smaller than 32px (digital) or 8mm (print) to maintain clarity and visual impact.
              </p>
            </div>
          </div>
        </div>

        {/* Clear Space */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#1B2A6B] text-2xl md:text-3xl font-semibold">
            Clear Space & Minimum Size
          </h2>
          <div className="bg-[#F4F6F8] border border-gray-200 p-6 md:p-12">
            <div className="flex items-center justify-center relative py-16">
              {/* Container with clear space visualization */}
              <div className="relative inline-block">
                {/* The logo */}
                <div className="relative" style={{ padding: '20px' }}>
                  <img src={logoImage} alt="AURMAK Logo with clear space" className="h-24 w-auto block" />
                  
                  {/* Clear space boundary box - dashed cyan lines */}
                  <div className="absolute inset-0 border-2 border-dashed border-[#2CB5E3] pointer-events-none"></div>
                  
                  {/* Top measurement indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none" style={{ top: '-32px' }}>
                    <div className="text-[#2CB5E3] text-center" style={{ fontSize: '13px', fontWeight: '600' }}>
                      20px
                    </div>
                    <div className="w-px h-4 bg-[#2CB5E3]"></div>
                  </div>
                  
                  {/* Bottom measurement indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none" style={{ bottom: '-32px' }}>
                    <div className="w-px h-4 bg-[#2CB5E3]"></div>
                    <div className="text-[#2CB5E3] text-center" style={{ fontSize: '13px', fontWeight: '600' }}>
                      20px
                    </div>
                  </div>
                  
                  {/* Left measurement indicator */}
                  <div className="absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-none" style={{ left: '-40px' }}>
                    <div className="text-[#2CB5E3] transform -rotate-90 whitespace-nowrap" style={{ fontSize: '13px', fontWeight: '600' }}>
                      20px
                    </div>
                  </div>
                  
                  {/* Right measurement indicator */}
                  <div className="absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-none" style={{ right: '-40px' }}>
                    <div className="text-[#2CB5E3] transform rotate-90 whitespace-nowrap" style={{ fontSize: '13px', fontWeight: '600' }}>
                      20px
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3 text-center">
              <p className="text-[#4A5568]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Maintain a minimum clear space of 20 pixels around all sides of the logo. This ensures the logo remains uncluttered and maintains its visual impact in all applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 pt-6 border-t border-gray-300">
                <div>
                  <p className="text-[#1B2A6B]" style={{ fontSize: '14px', fontWeight: '600' }}>Minimum Size (Digital)</p>
                  <p className="text-[#4A5568]" style={{ fontSize: '14px' }}>120px wide</p>
                </div>
                <div>
                  <p className="text-[#1B2A6B]" style={{ fontSize: '14px', fontWeight: '600' }}>Minimum Size (Print)</p>
                  <p className="text-[#4A5568]" style={{ fontSize: '14px' }}>30mm wide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#1B2A6B] text-2xl md:text-3xl font-semibold">
            Do's and Don'ts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Don't - Stretch */}
            <div className="space-y-4">
              <div className="border-2 border-red-500 p-6 flex items-center justify-center bg-gray-50 h-40">
                <img 
                  src={logoImage} 
                  alt="Stretched logo - incorrect" 
                  className="h-16 w-auto transform scale-x-150"
                />
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <X className="w-5 h-5" />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Don't stretch or distort</span>
              </div>
            </div>

            {/* Don't - Rotate */}
            <div className="space-y-4">
              <div className="border-2 border-red-500 p-6 flex items-center justify-center bg-gray-50 h-40">
                <img 
                  src={logoImage} 
                  alt="Rotated logo - incorrect" 
                  className="h-16 w-auto transform -rotate-12"
                />
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <X className="w-5 h-5" />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Don't rotate</span>
              </div>
            </div>

            {/* Don't - Add effects */}
            <div className="space-y-4">
              <div className="border-2 border-red-500 p-6 flex items-center justify-center bg-gray-50 h-40">
                <img 
                  src={logoImage} 
                  alt="Logo with shadow - incorrect" 
                  className="h-16 w-auto" 
                  style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }}
                />
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <X className="w-5 h-5" />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Don't add shadows</span>
              </div>
            </div>

            {/* Don't - Change colours */}
            <div className="space-y-4">
              <div className="border-2 border-red-500 p-6 flex items-center justify-center bg-gray-50 h-40">
                <img 
                  src={logoImage} 
                  alt="Recoloured logo - incorrect" 
                  className="h-16 w-auto" 
                  style={{ filter: 'hue-rotate(180deg)' }}
                />
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <X className="w-5 h-5" />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Don't change colours</span>
              </div>
            </div>

            {/* Don't - Place on busy backgrounds */}
            <div className="space-y-4">
              <div className="border-2 border-red-500 p-6 flex items-center justify-center h-40"
                   style={{ 
                     backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                     backgroundSize: '20px 20px',
                     backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                   }}>
                <img 
                  src={logoImage} 
                  alt="Logo on busy background - incorrect" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <X className="w-5 h-5" />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Don't use busy backgrounds</span>
              </div>
            </div>

            {/* Do - Maintain proportions */}
            <div className="space-y-4">
              <div className="border-2 border-green-600 p-6 flex items-center justify-center bg-white h-40">
                <img 
                  src={logoImage} 
                  alt="Correct logo usage" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <Check className="w-5 h-5" />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Always maintain proportions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="bg-[#F4F6F8] border-l-4 border-[#2CB5E3] p-8">
          <h3 className="text-[#1B2A6B] mb-3" style={{ fontSize: '20px', fontWeight: '600' }}>
            Accessibility Guidelines
          </h3>
          <ul className="space-y-2 text-[#4A5568]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
            <li className="flex items-start">
              <span className="text-[#2CB5E3] mr-2">•</span>
              <span>Always provide alternative text when using the logo in digital formats: "AURMAK Logo"</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2CB5E3] mr-2">•</span>
              <span>Ensure sufficient colour contrast when placing logo on coloured backgrounds (minimum 4.5:1 ratio)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2CB5E3] mr-2">•</span>
              <span>For print materials, ensure logo is reproduced at minimum 300 DPI resolution</span>
            </li>
          </ul>
        </div>

        {/* Partnership & Co-branding */}
        <div className="space-y-6 md:space-y-8 pb-16">
          <h2 className="text-[#1B2A6B] text-2xl md:text-3xl font-semibold">
            Partnership & Co-branding
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-3xl">
            When the AURMAK logo is used alongside a partner or portfolio company logo, use a vertical separator line. The AURMAK logo should always maintain equal visual weight with the partner logo.
          </p>
          <div className="bg-[#F4F6F8] border border-gray-200 p-12">
            <div className="flex items-center justify-center space-x-12">
              <img src={logoImage} alt="AURMAK Logo" className="h-10 w-auto" />
              <div className="h-12 w-px bg-gray-400"></div>
              <div className="h-10 w-32 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-mono text-xs">
                PARTNER LOGO
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-300">
              <div className="space-y-2">
                <p className="text-[#1B2A6B] font-semibold" style={{ fontSize: '14px' }}>Endorsement Line</p>
                <p className="text-[#4A5568] italic" style={{ fontSize: '13px' }}>"An AURMAK Venture Studio Company"</p>
                <p className="text-[#4A5568]" style={{ fontSize: '13px' }}>Set in Inter Regular, 0.05em letter spacing, Slate Grey (#4A5568).</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#1B2A6B] font-semibold" style={{ fontSize: '14px' }}>Visual Hierarchy</p>
                <p className="text-[#4A5568]" style={{ fontSize: '13px' }}>AURMAK should ideally appear first (left or top) in co-branded communications initiated by the studio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
