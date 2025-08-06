import { Button } from "./ui/button.js";
import { useLanguage } from "../contexts/LanguageContext.js";
const campusImage = "/images/campus.jpg";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative text-white overflow-hidden">
      {/* Campus Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${campusImage})`,
          zIndex: 0
        }}
      />
      
      {/* Subtle dark overlay for text readability only */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32" style={{ zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed drop-shadow-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                {t('hero.learnMore')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 shadow-lg backdrop-blur-sm">
                {t('hero.ourResearch')}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/20 h-20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                  </svg>
                </div>
                <div className="bg-white/25 h-20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="bg-white/30 h-20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium drop-shadow-md">{t('hero.mission')}</h3>
                <p className="text-gray-100 text-sm drop-shadow-sm">
                  {t('hero.missionDescription')}
                </p>
              </div>
            </div>
            
            {/* University Connection Badge */}
            <div className="absolute -bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30 shadow-lg">
              <p className="text-gray-900 text-sm font-medium">{t('hero.university')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}