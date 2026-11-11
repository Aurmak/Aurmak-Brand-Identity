import { Check, X } from 'lucide-react';
import logoImage from '../../assets/a534ae5395a05e9265cd96257376030497e72896.png';
import logoInverted from '../../assets/3cb6cb72c135cbff9f33bf11110879c261fa8882.png';
import symbolImage from '../../assets/123c93a342e7f8e58a6c002f431ba7f794bc174c.png';
import symbolCyan from '../../assets/c65624d69fb977da64433f38bb3017c7d3aed415.png';
import VerticalLogo from '../../imports/Layer1';
import verticalLogoInverted from '../../assets/dac02b0353bb043d326dda0b0c00db99f038b840.png';

export function LogoUsage() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-[#282973] mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Logo Guidelines
          </h1>
          <div className="w-12 md:w-16 h-1 bg-[#27AAE1]"></div>
        </div>

        {/* Logo Variants */}
        <div className="space-y-6 md:space-y-10">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">
            Logo lockups
          </h2>
          <p className="text-[#545F7E] text-base md:text-base leading-relaxed max-w-3xl">
            AURMAK uses two primary logo lockups: Horizontal and Vertical. The Horizontal lockup is the primary version and should be used in most cases. The Vertical lockup is provided for applications where horizontal space is limited or where a centered aesthetic is desired.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Horizontal Section */}
            <div className="space-y-4">
              <h3 className="text-[#282973] text-xl font-medium">Horizontal (Primary)</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-white h-80">
                  <img src={logoImage} alt="AURMAK Horizontal Logo" className="w-full max-w-[400px] h-auto object-contain" />
                </div>
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-[#282973] h-80">
                  <img src={logoInverted} alt="AURMAK Horizontal Logo Inverted" className="w-full max-w-[400px] h-auto object-contain" />
                </div>
                <p className="text-[#545F7E] text-base italic">Use for web headers, stationery, and standard documentation.</p>
              </div>
            </div>

            {/* Vertical Section */}
            <div className="space-y-4">
              <h3 className="text-[#282973] text-xl font-medium">Vertical (Secondary)</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-white h-80">
                  <div className="w-full max-w-[240px] aspect-[1.77/1] relative">
                    <VerticalLogo />
                  </div>
                </div>
                <div className="border border-gray-200 p-12 flex items-center justify-center bg-[#282973] h-80">
                  <img src={verticalLogoInverted} alt="AURMAK Vertical Logo Inverted" className="w-full max-w-[240px] h-auto object-contain" />
                </div>
                <p className="text-[#545F7E] text-base italic">Use for social media posts, vertical banners, and centred layouts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Symbol Usage */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">
            Symbol Usage
          </h2>
          <p className="text-[#545F7E] text-base md:text-base leading-relaxed">
            The AURMAK symbol can be used independently in situations where space is limited or the brand is already well-established. The symbol represents innovation, stability, and forward-thinking design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Symbol on white */}
            <div className="space-y-4">
              <div className="border border-gray-200 p-12 flex items-center justify-center bg-white h-64">
                <img src={symbolImage} alt="AURMAK Symbol on white" className="h-32 w-auto" />
              </div>
              <p className="text-[#545F7E] text-center" style={{ fontSize: '16px' }}>
                Symbol on white background
              </p>
            </div>

            {/* Symbol on navy */}
            <div className="space-y-4">
              <div className="border border-gray-200 p-12 flex items-center justify-center bg-[#282973] h-64">
                <img 
                  src={symbolCyan} 
                  alt="AURMAK Symbol on navy" 
                  className="h-32 w-auto"
                />
              </div>
              <p className="text-[#545F7E] text-center" style={{ fontSize: '16px' }}>
                Symbol on navy background
              </p>
            </div>
          </div>

          <div className="bg-[#EEF7FC] p-6 md:p-8 rounded-sm border border-gray-200">
            <h3 className="text-[#282973] mb-4 text-lg md:text-xl font-semibold">
              When to Use the Symbol
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-green-600 font-semibold mb-3" style={{ fontSize: '16px' }}>
                  ✓ Appropriate Uses
                </p>
                <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  <li className="flex items-start">
                    <span className="text-[#27AAE1] mr-2">•</span>
                    <span>Social media profile images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#27AAE1] mr-2">•</span>
                    <span>App icons and favicons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#27AAE1] mr-2">•</span>
                    <span>Watermarks and secondary branding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#27AAE1] mr-2">•</span>
                    <span>Badges and stamps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#27AAE1] mr-2">•</span>
                    <span>Pattern and background elements</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-red-600 font-semibold mb-3" style={{ fontSize: '16px' }}>
                  ✗ When Not to Use the Symbol
                </p>
                <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
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
                    <span>Large-format signage, where the full logo fits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Email signatures (prefer full logo)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-[#545F7E]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <strong>Minimum Size:</strong> Do not reproduce the symbol smaller than 8mm in print.
              </p>
            </div>
          </div>
        </div>

        {/* Clear Space */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">
            Clear Space & Minimum Size
          </h2>
          <div className="bg-[#EEF7FC] border border-gray-200 p-6 md:p-12">
            <div className="relative flex items-center justify-center overflow-x-auto py-12 md:py-16">
              {/* Container with clear space visualization */}
              <div className="relative inline-block px-10 md:px-12">
                {/* The logo */}
                <div className="relative" style={{ padding: '20px' }}>
                  <img src={logoImage} alt="AURMAK Logo with clear space" className="h-24 w-auto block" />
                  
                  {/* Clear space boundary box - dashed cyan lines */}
                  <div className="absolute inset-0 border-2 border-dashed border-[#27AAE1] pointer-events-none"></div>
                  
                  {/* Top measurement indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none" style={{ top: '-32px' }}>
                    <div className="text-[#27AAE1] text-center" style={{ fontSize: '15px', fontWeight: '600' }}>
                      Clear space
                    </div>
                    <div className="w-px h-4 bg-[#27AAE1]"></div>
                  </div>
                  
                  {/* Bottom measurement indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none" style={{ bottom: '-32px' }}>
                    <div className="w-px h-4 bg-[#27AAE1]"></div>
                    <div className="text-[#27AAE1] text-center" style={{ fontSize: '15px', fontWeight: '600' }}>
                      Clear space
                    </div>
                  </div>
                  
                  {/* Left measurement indicator */}
                  <div className="absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-none" style={{ left: '-24px' }}>
                    <div className="text-[#27AAE1] md:transform md:-rotate-90 whitespace-nowrap" style={{ fontSize: '15px', fontWeight: '600' }}>
                      Clear space
                    </div>
                  </div>
                  
                  {/* Right measurement indicator */}
                  <div className="absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-none" style={{ right: '-24px' }}>
                    <div className="text-[#27AAE1] md:transform md:rotate-90 whitespace-nowrap" style={{ fontSize: '15px', fontWeight: '600' }}>
                      Clear space
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3 text-center">
              <p className="text-[#545F7E]" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Maintain a minimum clear space of 20 pixels around all sides of the logo. This ensures the logo remains uncluttered and maintains its visual impact in all applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 pt-6 border-t border-gray-300">
                <div>
                  <p className="text-[#282973]" style={{ fontSize: '16px', fontWeight: '600' }}>Minimum Size (Digital)</p>
                  <p className="text-[#545F7E]" style={{ fontSize: '16px' }}>120px wide</p>
                </div>
                <div>
                  <p className="text-[#282973]" style={{ fontSize: '16px', fontWeight: '600' }}>Minimum Size (Print)</p>
                  <p className="text-[#545F7E]" style={{ fontSize: '16px' }}>30mm wide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage examples */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">
            Usage examples
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
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Avoid stretching or distorting</span>
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
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Don't rotate</span>
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
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Avoid adding shadows</span>
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
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Avoid changing colours</span>
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
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Avoid busy backgrounds</span>
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
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Maintain proportions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="bg-[#EEF7FC] border-l-4 border-[#27AAE1] p-8">
          <h3 className="text-[#282973] mb-3" style={{ fontSize: '22px', fontWeight: '600' }}>
            Accessibility Guidelines
          </h3>
          <ul className="space-y-2 text-[#545F7E]" style={{ fontSize: '17px', lineHeight: '1.6' }}>
            <li className="flex items-start">
              <span className="text-[#27AAE1] mr-2">•</span>
              <span>Provide alternative text when using the logo in digital formats: "AURMAK Logo"</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#27AAE1] mr-2">•</span>
              <span>Keep the logo clearly legible on whatever background it sits on</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#27AAE1] mr-2">•</span>
              <span>For print materials, ensure the logo is reproduced at minimum 300 DPI resolution</span>
            </li>
          </ul>
        </div>

        {/* Partnership & Co-branding */}
        <div className="space-y-6 md:space-y-8 pb-16">
          <h2 className="text-[#282973] text-2xl md:text-3xl font-semibold">
            Partnership & Co-branding
          </h2>
          <p className="text-[#545F7E] text-base md:text-base leading-relaxed max-w-3xl">
            When the AURMAK logo is used alongside a partner or portfolio company logo, use a vertical separator line. The AURMAK logo should aim to maintain equal visual weight with the partner logo.
          </p>
          <div className="bg-[#EEF7FC] border border-gray-200 p-12">
            <div className="flex items-center justify-center space-x-12">
              <img src={logoImage} alt="AURMAK Logo" className="h-10 w-auto" />
              <div className="h-12 w-px bg-gray-400"></div>
              <div className="h-10 w-32 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-mono text-sm">
                PARTNER LOGO
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-300">
              <div className="space-y-2">
                <p className="text-[#282973] font-semibold" style={{ fontSize: '16px' }}>Endorsement line</p>
                <p className="text-[#545F7E]" style={{ fontSize: '15px' }}>Venture Studio is AURMAK's in-house studio, which builds our own products. Use this line on products it builds.</p>
                <p className="text-[#545F7E] italic" style={{ fontSize: '15px' }}>"An AURMAK Venture Studio Company"</p>
                <p className="text-[#545F7E]" style={{ fontSize: '15px' }}>Set smaller than the logo wordmark, and always after it.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#282973] font-semibold" style={{ fontSize: '16px' }}>Visual Hierarchy</p>
                <p className="text-[#545F7E]" style={{ fontSize: '15px' }}>AURMAK appears first (left or top) in co-branded communications initiated by Venture Studio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
