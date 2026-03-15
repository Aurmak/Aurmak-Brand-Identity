export function Typography() {
  return (
    <div className="h-full overflow-auto bg-white p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-[#1B2A6B] mb-4" style={{ fontSize: '48px', fontWeight: '700' }}>
            Typography Hierarchy
          </h1>
          <div className="w-16 h-1 bg-[#2CB5E3]"></div>
        </div>

        {/* Primary Typeface */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Primary Typeface
          </h2>
          <div className="border border-gray-200 p-12 bg-[#F4F6F8]">
            <div className="text-[#1B2A6B] mb-6" style={{ fontSize: '72px', fontWeight: '700', lineHeight: '1' }}>
              Inter
            </div>
            <div className="mb-6 grid grid-cols-1 gap-8 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '20px', lineHeight: '1.4' }}>
              <div>
                <div className="mb-3" style={{ fontWeight: '700' }}>ABCDEFGHIJKLM</div>
                <div className="mb-3" style={{ fontWeight: '700' }}>NOPQRSTUVWXYZ</div>
              </div>
              <div>
                <div className="mb-3" style={{ fontWeight: '400' }}>abcdefghijklm</div>
                <div className="mb-3" style={{ fontWeight: '400' }}>nopqrstuvwxyz</div>
              </div>
            </div>
            <div className="text-[#4A5568]" style={{ fontSize: '20px' }}>
              0123456789 !@£$%^&*()
            </div>
          </div>
          <div className="text-[#4A5568]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Inter is a carefully crafted typeface designed specifically for computer screens. Its open apertures, 
            tall x-height, and clear letterforms ensure excellent legibility at all sizes. Use Inter for all brand 
            communications, both digital and print.
          </div>
        </div>

        {/* Type Ramp */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Type Ramp
          </h2>
          
          {/* H1 - Display */}
          <div className="border-l-4 border-[#2CB5E3] pl-8 py-6 bg-[#F4F6F8]">
            <div className="text-[#1B2A6B] mb-4" style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1' }}>
              Display / H1
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 56px / 3.5rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Bold (700)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.1 (61.6px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Deep Royal Navy (#1B2A6B)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Page titles, hero sections</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> -0.02em</div>
              </div>
            </div>
          </div>

          {/* H1 - Page Title */}
          <div className="border-l-4 border-[#2CB5E3] pl-8 py-6 bg-[#F4F6F8]">
            <div className="text-[#1B2A6B] mb-4" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.2' }}>
              Page Title / H1
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 48px / 3rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Bold (700)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.2 (57.6px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Deep Royal Navy (#1B2A6B)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Main page headings</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> -0.01em</div>
              </div>
            </div>
          </div>

          {/* H2 - Section Header */}
          <div className="border-l-4 border-[#2CB5E3] pl-8 py-6 bg-[#F4F6F8]">
            <div className="text-[#1B2A6B] mb-4" style={{ fontSize: '36px', fontWeight: '600', lineHeight: '1.3' }}>
              Section Header / H2
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 36px / 2.25rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Semi-Bold (600)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.3 (46.8px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Deep Royal Navy (#1B2A6B)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Major section headings</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> Normal</div>
              </div>
            </div>
          </div>

          {/* H3 */}
          <div className="border-l-4 border-[#2CB5E3] pl-8 py-6 bg-[#F4F6F8]">
            <div className="text-[#1B2A6B] mb-4" style={{ fontSize: '28px', fontWeight: '600', lineHeight: '1.4' }}>
              Sub-section Header / H3
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 28px / 1.75rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Semi-Bold (600)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.4 (39.2px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Deep Royal Navy (#1B2A6B)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Sub-sections, card titles</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> Normal</div>
              </div>
            </div>
          </div>

          {/* H4 */}
          <div className="border-l-4 border-[#4A5568] pl-8 py-5 bg-[#F4F6F8]">
            <div className="text-[#1B2A6B] mb-3" style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.4' }}>
              Component Header / H4
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 22px / 1.375rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Semi-Bold (600)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.4 (30.8px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Deep Royal Navy (#1B2A6B)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Component headers, list titles</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> Normal</div>
              </div>
            </div>
          </div>

          {/* Body Large */}
          <div className="border-l-4 border-[#4A5568] pl-8 py-5 bg-[#F4F6F8]">
            <div className="text-[#4A5568] mb-3" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '1.6' }}>
              Lead Paragraph / Body Large — Use for introductory paragraphs, pull quotes, and content that requires additional emphasis or prominence.
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 20px / 1.25rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Regular (400)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.6 (32px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Slate Grey (#4A5568)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Lead paragraphs, highlights</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> Normal</div>
              </div>
            </div>
          </div>

          {/* Body Regular */}
          <div className="border-l-4 border-[#4A5568] pl-8 py-5 bg-[#F4F6F8]">
            <div className="text-[#4A5568] mb-3" style={{ fontSize: '16px', fontWeight: '400', lineHeight: '1.6' }}>
              Body Regular — The primary text size for most content. Ensures optimal readability whilst maintaining a professional, approachable appearance. Use this for standard paragraphs, descriptions, navigation, and general content. The 1.6 line height provides comfortable reading for both digital and print formats.
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 16px / 1rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Regular (400)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.6 (25.6px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Slate Grey (#4A5568)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Standard body text, most content</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> Normal</div>
              </div>
            </div>
          </div>

          {/* Body Small */}
          <div className="border-l-4 border-[#4A5568] pl-8 py-5 bg-[#F4F6F8]">
            <div className="text-[#4A5568] mb-3" style={{ fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }}>
              Body Small — Use for captions, metadata, footnotes, timestamps, labels, and secondary information that requires less visual prominence whilst remaining fully readable and accessible.
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 14px / 0.875rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Regular (400)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.5 (21px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Slate Grey (#4A5568)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Captions, labels, metadata</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> Normal</div>
              </div>
            </div>
          </div>

          {/* Caption / Label */}
          <div className="border-l-4 border-[#4A5568] pl-8 py-4 bg-[#F4F6F8]">
            <div className="text-[#4A5568] mb-3" style={{ fontSize: '12px', fontWeight: '500', lineHeight: '1.4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Caption / Label — Micro text for UI labels and fine print
            </div>
            <div className="grid grid-cols-1 gap-6 text-[#4A5568] md:grid-cols-2" style={{ fontSize: '14px' }}>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Size:</span> 12px / 0.75rem</div>
                <div><span style={{ fontWeight: '600' }}>Weight:</span> Medium (500)</div>
                <div><span style={{ fontWeight: '600' }}>Line Height:</span> 1.4 (16.8px)</div>
              </div>
              <div className="space-y-1">
                <div><span style={{ fontWeight: '600' }}>Colour:</span> Slate Grey (#4A5568)</div>
                <div><span style={{ fontWeight: '600' }}>Usage:</span> Form labels, UI micro-copy</div>
                <div><span style={{ fontWeight: '600' }}>Letter Spacing:</span> 0.05em (uppercase)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="space-y-8">
          <h2 className="text-[#1B2A6B]" style={{ fontSize: '28px', fontWeight: '600' }}>
            Practical Application
          </h2>
          <div className="border border-gray-200 p-12 bg-white">
            <h1 className="text-[#1B2A6B] mb-6" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }}>
              Building Tomorrow's Ventures
            </h1>
            <h2 className="text-[#1B2A6B] mb-8" style={{ fontSize: '36px', fontWeight: '600', lineHeight: '1.3' }}>
              Engineering Clarity Meets Strategic Vision
            </h2>
            <p className="text-[#4A5568] mb-6" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '1.6' }}>
              At AURMAK, we combine deep technical expertise with strategic venture building. Our approach 
              is rooted in clarity, precision, and a commitment to sustainable innovation.
            </p>
            <h3 className="text-[#1B2A6B] mb-4" style={{ fontSize: '28px', fontWeight: '600', lineHeight: '1.4' }}>
              Our Approach
            </h3>
            <p className="text-[#4A5568] mb-6" style={{ fontSize: '16px', fontWeight: '400', lineHeight: '1.6' }}>
              We partner with founders and enterprises to transform complex challenges into elegant solutions. 
              Every project begins with a clear understanding of goals, constraints, and opportunities. Our 
              global headquarters provides strategic oversight whilst local delivery teams ensure contextual 
              relevance and rapid execution.
            </p>
            <p className="text-[#4A5568]" style={{ fontSize: '14px', fontWeight: '400', lineHeight: '1.5', opacity: 0.8 }}>
              Founded in 2026 | London & San Francisco
            </p>
          </div>
        </div>

        {/* Web & Print Guidelines */}
        <div className="bg-[#F4F6F8] border-l-4 border-[#2CB5E3] p-8">
          <h3 className="text-[#1B2A6B] mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
            Web & Print Considerations
          </h3>
          <div className="grid grid-cols-1 gap-8 text-[#4A5568] lg:grid-cols-2" style={{ fontSize: '15px', lineHeight: '1.6' }}>
            <div>
              <p className="font-semibold mb-2">Digital / Web</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Use rem units for scalability and accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Minimum body text: 16px (1rem) for optimal readability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Line height of 1.5-1.6 ensures comfortable reading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Maximum line length: 65-75 characters for body text</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Print</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Use point sizes (pt) for print specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Minimum body text: 10pt for comfortable reading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Ensure Inter font is embedded in PDF exports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CB5E3] mr-2">•</span>
                  <span>Test readability on both coated and uncoated stock</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
