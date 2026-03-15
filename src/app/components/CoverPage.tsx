import VerticalLogo from '../../imports/Layer1';

export function CoverPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 md:px-8 md:py-20">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-[#1B2A6B]" style={{ top: '20%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-[#1B2A6B]" style={{ top: '40%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-[#1B2A6B]" style={{ top: '60%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-[#1B2A6B]" style={{ top: '80%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#1B2A6B]" style={{ left: '20%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#1B2A6B]" style={{ left: '40%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#1B2A6B]" style={{ left: '60%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#1B2A6B]" style={{ left: '80%' }} />
      </div>

      {/* Vertical Logo */}
      <div className="relative z-10 mb-8 flex w-full justify-center md:mb-16">
        <div className="w-48 md:w-64 aspect-[1.77/1] relative">
          <VerticalLogo />
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 max-w-4xl space-y-4 text-center md:space-y-6">
        <h1 className="text-[#1B2A6B] tracking-wide text-3xl md:text-5xl lg:text-[56px] font-bold">
          Brand Identity Guidelines
        </h1>
        <div className="w-16 md:w-24 h-1 bg-[#2CB5E3] mx-auto"></div>
        <p className="text-[#4A5568] text-lg md:text-xl">
          Version 1.0
        </p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-6 text-center text-xs text-[#4A5568] md:bottom-12 md:text-sm">
        Last updated: February 2026
      </div>
    </div>
  );
}
