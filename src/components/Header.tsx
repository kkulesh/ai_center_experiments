import { Button } from "./ui/button.js";
import { Globe, Search, Menu } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";
const aiBackgroundImage = "/images/ai_background.jpg";


interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}


export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();


  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };


  const toggleLanguage = () => {
    setLanguage(language === 'uk' ? 'en' : 'uk');
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Background Image 
       <div className="absolute inset-0">
        <img
          src={aiBackgroundImage}
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
      */}


      {/* Header Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
         
          {/* Logo Section */}
          <div
            className="flex items-center space-x-6 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavigation("home")}
          >
            {/* University Logo */}
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-gray-100 transition-colors shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold leading-none">КПІ</div>
                <div className="text-sm leading-none mt-1">2024</div>
              </div>
            </div>


            {/* Title - Hidden on mobile */}
            <div className="hidden md:block">
              <h1 className="text-white text-2xl font-medium leading-tight mb-2">
                {t('header.title')}
              </h1>
              <p className="text-white/90 text-lg">
                {t('header.subtitle')}
              </p>
            </div>
          </div>


          {/* Navigation Section */}
          <div className="hidden lg:flex flex-col items-end justify-center space-y-6 flex-1 ml-8">
           
            {/* Top Navigation Row */}
            <div className="flex items-center space-x-8">
              <button className="text-white/90 hover:text-white text-base transition-colors hover:bg-white/10 px-3 py-2 rounded-lg">
                {t('header.topNav.partnership')}
              </button>
              <button className="text-white/90 hover:text-white text-base transition-colors hover:bg-white/10 px-3 py-2 rounded-lg">
                {t('header.topNav.contacts')}
              </button>
              <button className="text-white/90 hover:text-white text-base transition-colors hover:bg-white/10 px-3 py-2 rounded-lg">
                {t('header.topNav.about')}
              </button>
             
              {/* Language Toggle and Search */}
              <div className="flex items-center space-x-3 ml-6">
                <Button
                  onClick={toggleLanguage}
                  variant="ghost"
                  size="sm"
                  className="text-white/90 hover:text-white hover:bg-white/10 text-base h-10 px-4"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  {language === 'uk' ? 'EN' : 'УК'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/90 hover:text-white hover:bg-white/10 h-10 w-10 p-0"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>


            {/* Bottom Navigation Row */}
            <div className="flex items-center space-x-8">
              <button className="text-white/90 hover:text-white text-base transition-colors hover:bg-white/10 px-3 py-2 rounded-lg">
                {t('header.mainNav.researchTopics')}
              </button>
              <button className="text-white/90 hover:text-white text-base transition-colors hover:bg-white/10 px-3 py-2 rounded-lg">
                {t('header.mainNav.publications')}
              </button>
              <button
                onClick={() => handleNavigation("news")}
                className={`text-base transition-colors px-3 py-2 rounded-lg ${
                  currentPage === "news"
                    ? "text-white font-medium bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t('header.mainNav.datasets')}
              </button>
              <button className="text-white/90 hover:text-white text-base transition-colors hover:bg-white/10 px-3 py-2 rounded-lg">
                {t('header.mainNav.events')}
              </button>
              <button
                onClick={() => handleNavigation("experts")}
                className={`text-base transition-colors px-3 py-2 rounded-lg ${
                  currentPage === "experts"
                    ? "text-white font-medium bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t('header.mainNav.experts')}
              </button>
            </div>
          </div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-3"
            >
              <Menu className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>


      {/* Mobile Navigation - Full width dropdown */}
      <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm border-t border-white/20 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile Title */}
          <div className="md:hidden mb-6">
            <h1 className="text-white text-xl font-medium leading-tight mb-2">
              {t('header.title')}
            </h1>
            <p className="text-white/90 text-base">
              {t('header.subtitle')}
            </p>
          </div>
         
          {/* Top navigation items */}
          <div className="space-y-3 mb-6">
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t('header.topNav.partnership')}
            </button>
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t('header.topNav.contacts')}
            </button>
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t('header.topNav.about')}
            </button>
          </div>
         
          {/* Divider */}
          <div className="border-t border-white/20 my-6"></div>
         
          {/* Main navigation items */}
          <div className="space-y-3">
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t('header.mainNav.researchTopics')}
            </button>
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t('header.mainNav.publications')}
            </button>
            <button
              onClick={() => handleNavigation("news")}
              className={`block w-full text-left text-base py-3 px-4 rounded-lg transition-colors ${
                currentPage === "news"
                  ? "text-white font-medium bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t('header.mainNav.datasets')}
            </button>
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t('header.mainNav.events')}
            </button>
            <button
              onClick={() => handleNavigation("experts")}
              className={`block w-full text-left text-base py-3 px-4 rounded-lg transition-colors ${
                currentPage === "experts"
                  ? "text-white font-medium bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t('header.mainNav.experts')}
            </button>
          </div>


          {/* Language toggle in mobile */}
          <div className="border-t border-white/20 mt-6 pt-6">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-white/90 hover:text-white hover:bg-white/10 text-base py-3 px-4"
            >
              <Globe className="w-5 h-5 mr-3" />
              {language === 'uk' ? 'Switch to English' : 'Перемкнути на українську'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
