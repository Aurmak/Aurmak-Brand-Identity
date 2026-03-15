import VerticalLogo from '../../imports/Layer1';

export function CoverPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
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
      <div className="relative z-10 mb-8 md:mb-16 px-4 w-full flex justify-center">
        <div className="w-48 md:w-64 aspect-[1.77/1] relative">
          <VerticalLogo />
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center space-y-4 md:space-y-6 px-4">
        <h1 className="text-[#1B2A6B] tracking-wide text-3xl md:text-5xl lg:text-[56px] font-bold">
          Brand Identity Guidelines
        </h1>
        <div className="w-16 md:w-24 h-1 bg-[#2CB5E3] mx-auto"></div>
        <p className="text-[#4A5568] text-lg md:text-xl">
          Version 1.0
        </p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-6 md:bottom-12 text-[#4A5568] text-xs md:text-sm px-4">
        Last updated: February 2026
      </div>
    </div>
  );
}
