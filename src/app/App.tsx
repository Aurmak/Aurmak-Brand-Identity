import { useState } from 'react';
import { ConfigProvider } from 'antd';
import { CoverPage } from './components/CoverPage';
import { BrandOverview } from './components/BrandOverview';
import { LogoUsage } from './components/LogoUsage';
import { ColorSystem } from './components/ColorSystem';
import { Typography } from './components/Typography';
import { VisualDirection } from './components/VisualDirection';
import { UIComponents } from './components/UIComponents';
import { ToneOfVoice } from './components/ToneOfVoice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logoImage from 'figma:asset/a534ae5395a05e9265cd96257376030497e72896.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { title: 'Cover', component: <CoverPage /> },
    { title: 'Brand Overview', component: <BrandOverview /> },
    { title: 'Logo Guidelines', component: <LogoUsage /> },
    { title: 'Colour Palette', component: <ColorSystem /> },
    { title: 'Typography', component: <Typography /> },
    { title: 'Visual Language', component: <VisualDirection /> },
    { title: 'UI Components', component: <UIComponents /> },
    { title: 'Tone of Voice', component: <ToneOfVoice /> },
  ];

  const goToPage = (index: number) => {
    if (index >= 0 && index < pages.length) {
      setCurrentPage(index);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2CB5E3',
          colorInfo: '#2CB5E3',
          colorTextBase: '#1B2A6B',
          fontFamily: 'Inter, sans-serif',
        },
        components: {
          Button: {
            colorPrimary: '#2CB5E3',
            colorPrimaryHover: '#1B9BC4',
          },
        }
      }}
    >
      <div className="size-full flex flex-col bg-white">
        {/* Top Navigation with Tabs */}
        <div className="border-b-2 border-gray-300 bg-white shadow-md">
          {/* Logo Bar */}
          {currentPage > 0 && (
            <div className="border-b border-gray-200 px-6 md:px-8 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={logoImage} alt="AURMAK Logo" className="h-7 md:h-8 w-auto" />
                  <div className="w-px h-5 bg-gray-300"></div>
                  <div className="text-[#4A5568] text-sm">
                    Brand Guidelines v1.0
                  </div>
                </div>
                <span className="text-[#4A5568] text-sm">
                  {currentPage + 1}/{pages.length}
                </span>
              </div>
            </div>
          )}
          
          {/* Tab Navigation */}
          <div className="flex items-center justify-center px-6 md:px-8 py-4">
            <div className="flex items-center space-x-2 md:space-x-4">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`group flex flex-col items-center space-y-2 transition-all px-4 py-2 rounded-sm ${
                    index === currentPage
                      ? 'bg-[#2CB5E3] shadow-md'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <span
                    className={`text-sm transition-all whitespace-nowrap ${
                      index === currentPage 
                        ? 'text-white font-bold' 
                        : 'text-[#4A5568] font-medium group-hover:text-[#1B2A6B]'
                    }`}
                    style={{ fontSize: index === currentPage ? '14px' : '13px' }}
                  >
                    {page.title}
                  </span>
                  <div
                    className={`transition-all ${
                      index === currentPage
                        ? 'w-full h-1 bg-white rounded-full'
                        : 'w-8 h-1 bg-gray-300 rounded-full group-hover:bg-[#4A5568] group-hover:w-full'
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden">
          {pages[currentPage].component}
        </div>

        {/* Bottom Navigation - Previous/Next Only */}
        <div className="border-t border-gray-200 bg-white">
          <div className="flex items-center justify-between px-6 md:px-8 py-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-sm transition-all ${
                currentPage === 0
                  ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                  : 'text-[#1B2A6B] border-2 border-[#1B2A6B] hover:bg-gray-50'
              }`}
              style={{ fontSize: '15px', fontWeight: '600' }}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-sm transition-all ${
                currentPage === pages.length - 1
                  ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                  : 'text-white bg-[#2CB5E3] hover:bg-[#1B9BC4]'
              }`}
              style={{ fontSize: '15px', fontWeight: '600' }}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}