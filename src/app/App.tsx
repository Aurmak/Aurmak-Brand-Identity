import { type KeyboardEvent, Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logoImage from '../assets/a534ae5395a05e9265cd96257376030497e72896.png';

const CoverPage = lazy(() => import('./components/CoverPage').then((module) => ({ default: module.CoverPage })));
const BrandOverview = lazy(() => import('./components/BrandOverview').then((module) => ({ default: module.BrandOverview })));
const LogoUsage = lazy(() => import('./components/LogoUsage').then((module) => ({ default: module.LogoUsage })));
const VisualDirection = lazy(() => import('./components/VisualDirection').then((module) => ({ default: module.VisualDirection })));
const DigitalPrinciples = lazy(() => import('./components/DigitalPrinciples').then((module) => ({ default: module.DigitalPrinciples })));
const StartHere = lazy(() => import('./components/StartHere').then((module) => ({ default: module.StartHere })));
const PitchDecks = lazy(() => import('./components/PitchDecks').then((module) => ({ default: module.PitchDecks })));
const AIUse = lazy(() => import('./components/AIUse').then((module) => ({ default: module.AIUse })));
const SubBrands = lazy(() => import('./components/SubBrands').then((module) => ({ default: module.SubBrands })));

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pagesRef = useRef<Array<{ id: string }>>([]);

  const pages = useMemo(
    () => [
      { id: 'cover', title: 'Cover', component: <CoverPage /> },
      { id: 'start-here', title: 'About This Guide', component: <StartHere onNavigate={(id: string) => { const index = pagesRef.current.findIndex((page) => page.id === id); if (index >= 0) setCurrentPage(index); }} /> },
      { id: 'brand-overview', title: 'Brand Overview', component: <BrandOverview /> },
      { id: 'logo-guidelines', title: 'Logo Guidelines', component: <LogoUsage /> },
      { id: 'visual-language', title: 'Visual Language', component: <VisualDirection /> },
      { id: 'digital-principles', title: 'Digital Principles', component: <DigitalPrinciples /> },
      { id: 'sub-brands', title: 'Sub-Brands', component: <SubBrands /> },
      { id: 'pitch-decks', title: 'Pitch Decks', component: <PitchDecks /> },
      { id: 'ai-use', title: 'AI Use', component: <AIUse /> },
    ],
    [],
  );
  pagesRef.current = pages;

  const goToPage = (index: number) => {
    if (index >= 0 && index < pages.length) {
      setCurrentPage(index);
    }
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        goToPage((index + 1) % pages.length);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        goToPage((index - 1 + pages.length) % pages.length);
        break;
      case 'Home':
        event.preventDefault();
        goToPage(0);
        break;
      case 'End':
        event.preventDefault();
        goToPage(pages.length - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const activeTab = tabRefs.current[currentPage];
    if (document.activeElement?.getAttribute('role') === 'tab' && activeTab) {
      activeTab.focus();
    }
  }, [currentPage]);

  return (
      <div className="flex min-h-dvh flex-col bg-white">
        {/* Top Navigation with Tabs */}
        <div className="border-b-2 border-gray-300 bg-white shadow-md">
          {/* Logo Bar */}
          {currentPage > 0 && (
            <div className="border-b border-gray-200 px-4 py-3 md:px-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3 md:gap-4">
                  <img src={logoImage} alt="AURMAK Logo" className="h-7 md:h-8 w-auto" />
                  <div className="hidden h-5 w-px bg-gray-300 sm:block"></div>
                  <div className="text-base text-[#545F7E]">
                    Brand Guidelines v2.0
                  </div>
                </div>
                <span className="text-base text-[#545F7E]">
                  {currentPage + 1}/{pages.length}
                </span>
              </div>
            </div>
          )}
          
          {/* Tab Navigation */}
          <div className="px-4 py-4 md:px-8">
            <div
              aria-label="Brand guideline sections"
              className="flex gap-2 overflow-x-auto pb-1 md:justify-center md:gap-4"
              role="tablist"
            >
              {pages.map((page, index) => (
                <button
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  key={page.id}
                  aria-controls={`panel-${page.id}`}
                  aria-selected={index === currentPage}
                  id={`tab-${page.id}`}
                  onClick={() => goToPage(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  role="tab"
                  tabIndex={index === currentPage ? 0 : -1}
                  className={`group flex shrink-0 flex-col items-center space-y-2 rounded-sm px-4 py-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27AAE1] focus-visible:ring-offset-2 ${
                    index === currentPage
                      ? 'bg-[#0479AB] shadow-md'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <span
                    className={`text-base transition-all whitespace-nowrap ${
                      index === currentPage 
                        ? 'text-white font-bold' 
                        : 'text-[#545F7E] font-medium group-hover:text-[#282973]'
                    }`}
                    style={{ fontSize: index === currentPage ? '16px' : '15px' }}
                  >
                    {page.title}
                  </span>
                  <div
                    className={`transition-all ${
                      index === currentPage
                        ? 'w-full h-1 bg-white rounded-full'
                        : 'w-8 h-1 bg-gray-300 rounded-full group-hover:bg-[#545F7E] group-hover:w-full'
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          aria-labelledby={`tab-${pages[currentPage].id}`}
          className="relative flex-1 overflow-hidden"
          id={`panel-${pages[currentPage].id}`}
          role="tabpanel"
        >
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center bg-white px-6 py-12 text-center text-[#545F7E]">
                Loading section...
              </div>
            }
          >
            {pages[currentPage].component}
          </Suspense>
        </div>

        {/* Bottom Navigation - Previous/Next Only */}
        <div className="border-t border-gray-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className={`flex items-center space-x-2 rounded-sm px-5 py-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27AAE1] focus-visible:ring-offset-2 md:px-6 ${
                currentPage === 0
                  ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                  : 'text-[#282973] border-2 border-[#282973] hover:bg-gray-50'
              }`}
              style={{ fontSize: '17px', fontWeight: '600' }}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
              className={`flex items-center space-x-2 rounded-sm px-5 py-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27AAE1] focus-visible:ring-offset-2 md:px-6 ${
                currentPage === pages.length - 1
                  ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                  : 'text-white bg-[#0479AB] hover:bg-[#04638B]'
              }`}
              style={{ fontSize: '17px', fontWeight: '600' }}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
  );
}
