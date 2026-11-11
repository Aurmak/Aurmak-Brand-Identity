import VerticalLogo from '../../imports/Layer1';

export function CoverPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 md:px-8 md:py-20">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-[#282973]" style={{ top: '20%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-[#282973]" style={{ top: '40%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-[#282973]" style={{ top: '60%' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-[#282973]" style={{ top: '80%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#282973]" style={{ left: '20%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#282973]" style={{ left: '40%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#282973]" style={{ left: '60%' }} />
        <div className="absolute top-0 left-0 h-full w-px bg-[#282973]" style={{ left: '80%' }} />
      </div>

      {/* Vertical Logo */}
      <div className="relative z-10 mb-8 flex w-full justify-center md:mb-16">
        <div className="w-48 md:w-64 aspect-[1.77/1] relative">
          <VerticalLogo />
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 max-w-4xl space-y-4 text-center md:space-y-6">
        <h1 className="text-[#282973] tracking-wide text-3xl md:text-5xl lg:text-[56px] font-bold">
          Brand Identity Guidelines
        </h1>
        <div className="w-16 md:w-24 h-1 bg-[#27AAE1] mx-auto"></div>
        <p className="text-[#0479AB] text-sm font-semibold uppercase tracking-[0.14em] md:text-base">
          Partnerships Built to Last
        </p>
        <p className="text-[#545F7E] text-sm md:text-base">
          Internal guide for everyone at AURMAK
        </p>
        <p className="text-[#545F7E] text-lg md:text-xl">
          Version 2.0
        </p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-6 space-y-1 text-center text-xs text-[#545F7E] md:bottom-12 md:text-sm">
        <div>Last updated: November 2026 · Official AURMAK Brand Guidelines</div>
      </div>
    </div>
  );
}
