import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.js";
import { Badge } from "./ui/badge.js";
import { Button } from "./ui/button.js";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { useLanguage } from "../contexts/LanguageContext.js";

export function NewsPage() {
  const { t } = useLanguage();

  const featuredArticle = {
    title: t('news.title').includes('News') 
      ? "Annual AI Conference | November 15-16, 2024"
      : "Щорічна конференція з ШІ | 15-16 листопада 2024",
    description: t('news.title').includes('News')
      ? "This year's annual conference focuses on 25 years of artificial intelligence research and its impact on Ukrainian economy"
      : "Цьогорічна щорічна конференція зосереджена на 25-річчі досліджень штучного інтелекту та його впливі на українську економіку",
    category: t('news.title').includes('News') ? "Annual Events" : "Щорічні заходи",
    date: "2024-11-15",
    readTime: "8",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    tags: t('news.title').includes('News') 
      ? ["artificial intelligence", "conference", "research"]
      : ["штучний інтелект", "конференція", "дослідження"]
  };

  const newsArticles = [
    {
      title: t('news.title').includes('News')
        ? "New AI Research Center Opens in Kyiv"
        : "Новий центр досліджень ШІ відкривається в Києві",
      description: t('news.title').includes('News')
        ? "The center will focus on developing AI solutions for healthcare and education sectors"
        : "Центр зосередиться на розробці рішень ШІ для сфер охорони здоров'я та освіти",
      category: t('news.title').includes('News') ? "Research" : "Дослідження",
      date: "2024-11-10",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      author: t('news.title').includes('News') ? "Dr. Marina Kovalenko" : "Д-р Марина Коваленко"
    },
    {
      title: t('news.title').includes('News')
        ? "Ukraine Joins Global AI Ethics Initiative"
        : "Україна приєднується до глобальної ініціативи з етики ШІ",
      description: t('news.title').includes('News')
        ? "New international partnership aims to establish ethical guidelines for AI development"
        : "Нове міжнародне партнерство має на меті встановити етичні керівні принципи для розвитку ШІ",
      category: t('news.title').includes('News') ? "Ethics" : "Етика",
      date: "2024-11-08",
      readTime: "6",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      author: t('news.title').includes('News') ? "Kateryna Shevchenko" : "Катерина Шевченко"
    },
    {
      title: t('news.title').includes('News')
        ? "Breakthrough in Quantum AI Computing"
        : "Прорив у квантових обчисленнях ШІ",
      description: t('news.title').includes('News')
        ? "Ukrainian researchers achieve significant milestone in quantum machine learning algorithms"
        : "Українські дослідники досягають значної віхи в алгоритмах квантового машинного навчання",
      category: t('news.title').includes('News') ? "Technology" : "Технології",
      date: "2024-11-05",
      readTime: "7",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      author: t('news.title').includes('News') ? "Dr. Viktor Ivanenko" : "Д-р Віктор Іваненко"
    },
    {
      title: t('news.title').includes('News')
        ? "AI in Agriculture: Smart Farming Solutions"
        : "ШІ в сільському господарстві: рішення для розумного фермерства",
      description: t('news.title').includes('News')
        ? "New AI-powered tools help Ukrainian farmers optimize crop yields and reduce environmental impact"
        : "Нові інструменти на основі ШІ допомагають українським фермерам оптимізувати врожайність та зменшити вплив на довкілля",
      category: t('news.title').includes('News') ? "Applications" : "Застосування",
      date: "2024-11-02",
      readTime: "4",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
      author: t('news.title').includes('News') ? "Prof. Oleksandr Petrenko" : "Проф. Олександр Петренко"
    },
    {
      title: t('news.title').includes('News')
        ? "Machine Learning Workshop for Students"
        : "Воркшоп з машинного навчання для студентів",
      description: t('news.title').includes('News')
        ? "Free educational program introduces young minds to the fundamentals of artificial intelligence"
        : "Безкоштовна освітня програма знайомить молодь з основами штучного інтелекту",
      category: t('news.title').includes('News') ? "Education" : "Освіта",
      date: "2024-10-28",
      readTime: "3",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      author: t('news.title').includes('News') ? "Yulia Bondarenko" : "Юлія Бондаренко"
    },
    {
      title: t('news.title').includes('News')
        ? "Partnership with European AI Research Centers"
        : "Партнерство з європейськими центрами досліджень ШІ",
      description: t('news.title').includes('News')
        ? "New collaboration opens opportunities for joint research projects and knowledge exchange"
        : "Нова співпраця відкриває можливості для спільних дослідницьких проєктів та обміну знаннями",
      category: t('news.title').includes('News') ? "Partnerships" : "Партнерства",
      date: "2024-10-25",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      author: t('news.title').includes('News') ? "Dr. Andriy Melnyk" : "Д-р Андрій Мельник"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-medium mb-6">
              {t('news.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('news.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">{t('news.featuredNews')}</h2>
          </div>
          
          <Card className="overflow-hidden border shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{featuredArticle.category}</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime} min
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="self-start">
                  {t('news.readMore')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900">{t('news.latestNews')}</h2>
            <Button variant="outline">
              {t('news.moreNews')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime} min
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                      {t('news.readMore')}
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}