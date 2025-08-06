import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-900 fill-current">
                  <path d="M12 2L13.09 8.26L19 7L17.74 13.26L22 15L15.74 16.09L17 22L10.74 20.74L9 24L7.91 17.74L2 19L3.26 12.74L0 11L6.26 9.91L5 4L11.26 5.26L12 2Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">{t('footer.about')}</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.aboutDescription')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">{t('footer.address')}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">{t('footer.email')}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('header.nav.home')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('header.nav.experts')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('header.nav.news')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('header.nav.research')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('header.nav.publications')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{t('header.nav.contacts')}</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {t('header.title')}. {t('footer.allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
}