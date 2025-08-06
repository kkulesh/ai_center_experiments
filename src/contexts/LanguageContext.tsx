import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'uk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'uk';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const translations = language === 'uk' ? ukrainianTranslations : englishTranslations;
    return getNestedTranslation(translations, key) || key;
  };

  const getNestedTranslation = (obj: any, key: string): string => {
    const keys = key.split('.');
    let result = obj;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the original key if path doesn't exist
      }
    }
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const ukrainianTranslations = {
  header: {
    title: "Центр стратегій застосування штучного інтелекту",
    subtitle: "КПІ ім. Ігоря Сікорського",
    topNav: {
      partnership: "Партнерство",
      announcements: "Анонси",
      contacts: "Контакти",
      about: "Про нас"
    },
    mainNav: {
      researchTopics: "Теми досліджень",
      publications: "Публікації",
      datasets: "Набори даних",
      events: "Події",
      experts: "Наші експерти"
    },
    nav: {
      home: "Головна",
      experts: "Експерти",
      news: "Новини",
      research: "Дослідження",
      publications: "Публікації",
      contacts: "Контакти"
    }
  },
  
  hero: {
    title: "Формування експертного середовища у сфері ШІ",
    subtitle: "Розроблення інноваційних рішень у сфері штучного інтелекту в стратегічних секторах економіки",
    learnMore: "Дізнатися більше",
    ourResearch: "Наші дослідження",
    mission: "Наша місія",
    missionDescription: "Експертне середовище • Інноваційні рішення • Стратегічні сектори",
    university: "КПІ ім. Ігоря Сікорського"
  },
  tasks: {
    title: "Завдання центру",
    subtitle: "Ми працюємо над створенням комплексної екосистеми для розвитку штучного інтелекту в Україні",
    analyticalResearch: {
      title: "Аналітичні дослідження",
      description: "Проведення глибинних досліджень у сфері штучного інтелекту та його застосування в різних галузях економіки."
    },
    consulting: {
      title: "Консультування стейкхолдерів",
      description: "Надання експертних консультацій для бізнесу, державного сектору та наукових установ."
    },
    education: {
      title: "Навчання та поширення досвіду",
      description: "Організація освітніх програм, семінарів та воркшопів для підвищення кваліфікації фахівців."
    },
    strategy: {
      title: "Обговорення стратегій та інновацій",
      description: "Розробка та впровадження інноваційних стратегій використання ШІ в ключових секторах економіки."
    }
  },
  initiatives: {
    title: "Наші заходи",
    subtitle: "Комплексний підхід до розвитку штучного інтелекту через різноманітні форми діяльності",
    thinkTanks: {
      title: "Think Tanks, Брифінги, Дебати",
      description: "Організація експертних дискусій та аналітичних сесій з ключових питань розвитку ШІ",
      tags: ["Експертиза", "Дискусії", "Аналітика"]
    },
    expertise: {
      title: "Наукова експертиза",
      description: "Проведення незалежної наукової експертизи проєктів та ініціатив у сфері штучного інтелекту",
      tags: ["Дослідження", "Експертиза", "Наука"]
    },
    publications: {
      title: "Публікації та аналітика",
      description: "Підготовка та публікація аналітичних матеріалів, звітів та рекомендацій",
      tags: ["Публікації", "Звіти", "Рекомендації"]
    },
    partnership: {
      title: "Партнерство та співпраця",
      description: "Розвиток партнерських відносин з міжнародними організаціями та дослідницькими центрами",
      tags: ["Партнерство", "Співпраця", "Міжнародні зв'язки"]
    }
  },
  stats: {
    title: "Результати нашої роботи",
    subtitle: "Цифри, що демонструють наш внесок у розвиток штучного інтелекту в Україні",
    research: {
      number: "50+",
      label: "Експертних досліджень",
      description: "Проведено аналітичних досліджень у сфері ШІ"
    },
    partners: {
      number: "25+",
      label: "Партнерських організацій",
      description: "Активна співпраця з провідними установами"
    },
    publications: {
      number: "100+",
      label: "Наукових публікацій",
      description: "Опубліковано статей та аналітичних матеріалів"
    },
    programs: {
      number: "15+",
      label: "Освітніх програм",
      description: "Реалізовано програм підвищення кваліфікації"
    }
  },
  experts: {
    title: "Наші експерти",
    subtitle: "Команда провідних вчених та дослідників, які формують майбутнє штучного інтелекту в Україні",
    backToList: "До списку експертів",
    expertNotFound: "Експерта не знайдено",
    backButton: "Повернутися до списку",
    experience: "Досвід роботи",
    publicationsCount: "Наукових публікацій",
    citations: "Цитувань",
    education: "Освіта",
    keySkills: "Ключові навички",
    achievements: "Досягнення",
    recentPublications: "Останні наукові публікації",
    contact: "Контакт",
    view: "Переглянути",
    citationsText: "цитувань"
  },
  news: {
    title: "Новини та дослідження",
    subtitle: "Останні новини, дослідження та розробки у сфері штучного інтелекту від нашого центру",
    moreNews: "Більше новин",
    featuredNews: "Головні новини",
    latestNews: "Останні новини",
    researchUpdates: "Оновлення досліджень",
    readMore: "Читати далі",
    publishedOn: "Опубліковано",
    category: "Категорія",
    tags: "Теги"
  },
  footer: {
    about: "Про центр",
    aboutDescription: "Центр стратегій застосування штучного інтелекту КПІ ім. Ігоря Сікорського",
    quickLinks: "Швидкі посилання",
    contact: "Контакти",
    followUs: "Слідкуйте за нами",
    allRightsReserved: "Всі права захищені",
    address: "пр. Перемоги, 37, Київ, 03056, Україна",
    phone: "+380 44 204 8000",
    email: "info@ai-center.kpi.ua"
  },
  expertsData: {
    petrenko: {
      name: "Проф. Олександр Петренко",
      position: "Керівник центру",
      specialization: "Машинне навчання, Deep Learning",
      education: "Доктор технічних наук, КПІ ім. Ігоря Сікорського",
      experience: "15+ років у сфері ШІ",
      achievements: "30+ наукових публікацій у провідних міжнародних журналах,Керівник 5 міжнародних проєктів з розвитку ШІ,Експерт IEEE та член редколегії 3 журналів,Лауреат премії НАН України за видатні досягнення,Організатор 8 міжнародних конференцій",
      skills: "Python,TensorFlow,PyTorch,Computer Vision,NLP,Deep Learning,Neural Networks,Data Science",
      email: "o.petrenko@ai-center.kpi.ua"
    },
    kovalenko: {
      name: "Д-р Марина Коваленко",
      position: "Провідний науковий співробітник",
      specialization: "Обробка природної мови, Когнітивні обчислення",
      education: "Кандидат технічних наук, Національний університет \"Львівська політехніка\"",
      experience: "12+ років у сфері NLP",
      achievements: "25+ наукових статей з обробки природної мови,Розробник 3 патентів в галузі NLP,Лауреат премії НАН України за молоді вчені,Член наукової ради Європейської асоціації NLP,Ментор 15+ аспірантів та магістрантів",
      skills: "BERT,GPT,Transformers,Sentiment Analysis,Text Mining,Python,R,Natural Language Processing",
      email: "m.kovalenko@ai-center.kpi.ua"
    },
    melnyk: {
      name: "Д-р Андрій Мельник",
      position: "Старший науковий співробітник",
      specialization: "Комп'ютерний зір, Робототехніка",
      education: "Кандидат фізико-математичних наук, Харківський національний університет",
      experience: "10+ років у Computer Vision",
      achievements: "20+ публікацій з комп'ютерного зору,Учасник 8 міжнародних конференцій,Ментор технологічних стартапів,Розробник системи автономного водіння,Експерт з робототехніки в НАТО",
      skills: "OpenCV,YOLO,CNNs,Object Detection,Autonomous Systems,ROS,Python,C++",
      email: "a.melnyk@ai-center.kpi.ua"
    },
    shevchenko: {
      name: "Катерина Шевченко",
      position: "Молодший науковий співробітник",
      specialization: "Етика ШІ, Аналіз даних",
      education: "Магістр комп'ютерних наук, КПІ ім. Ігоря Сікорського",
      experience: "5+ років у Data Science",
      achievements: "15+ досліджень з етики штучного інтелекту,Організатор AI Ethics Workshop в Україні,Стипендіат Google AI for Social Good,Співавтор посібника з етичного ШІ,Експерт з питань регулювання ШІ",
      skills: "R,Python,Ethics Framework,Data Visualization,Statistical Analysis,GDPR Compliance,Tableau",
      email: "k.shevchenko@ai-center.kpi.ua"
    },
    ivanenko: {
      name: "Д-р Віктор Іваненко",
      position: "Науковий співробітник",
      specialization: "Квантові обчислення, Криптографія",
      education: "Кандидат фізико-математичних наук, Київський університет",
      experience: "8+ років у квантових технологіях",
      achievements: "18+ наукових праць з квантових обчислень,Експерт IBM Quantum Network,Розробник квантових алгоритмів,Консультант з квантової криптографії,Лектор міжнародних курсів з квантових технологій",
      skills: "Qiskit,Quantum Algorithms,Cryptography,Mathematical Modeling,Python,MATLAB,Quantum Computing",
      email: "v.ivanenko@ai-center.kpi.ua"
    },
    bondarenko: {
      name: "Юлія Бондаренко",
      position: "Аналітик даних",
      specialization: "Big Data, Бізнес-аналітика",
      education: "Магістр економічної кібернетики, Київський економічний університет",
      experience: "6+ років у аналітиці",
      achievements: "10+ успішних проєктів з аналізу великих даних,Сертифікована фахівчиня AWS та Azure,Спікер на 5 міжнародних конференціях,Розробниця BI-рішень для державного сектору,Експертка з візуалізації даних",
      skills: "Hadoop,Spark,SQL,Tableau,Business Intelligence,Power BI,Python,Apache Kafka",
      email: "y.bondarenko@ai-center.kpi.ua"
    }
  }
};

const englishTranslations = {
  header: {
    title: "Center for Strategic Applications of Artificial Intelligence",
    subtitle: "Igor Sikorsky Kyiv Polytechnic Institute",
    nav: {
      home: "Home",
      experts: "Experts",
      news: "News",
      research: "Research",
      publications: "Publications",
      contacts: "Contacts"
    }
  },
  hero: {
    title: "Building Expert Environment in AI Field",
    subtitle: "Developing innovative solutions in artificial intelligence for strategic economic sectors",
    learnMore: "Learn More",
    ourResearch: "Our Research",
    mission: "Our Mission",
    missionDescription: "Expert Environment • Innovative Solutions • Strategic Sectors",
    university: "Igor Sikorsky Kyiv Polytechnic Institute"
  },
  tasks: {
    title: "Center's Objectives",
    subtitle: "We work on creating a comprehensive ecosystem for artificial intelligence development in Ukraine",
    analyticalResearch: {
      title: "Analytical Research",
      description: "Conducting in-depth research in artificial intelligence and its applications across various economic sectors."
    },
    consulting: {
      title: "Stakeholder Consulting",
      description: "Providing expert consultations for business, government sector, and research institutions."
    },
    education: {
      title: "Training and Knowledge Sharing",
      description: "Organizing educational programs, seminars, and workshops for professional development."
    },
    strategy: {
      title: "Strategy and Innovation Discussion",
      description: "Developing and implementing innovative strategies for AI use in key economic sectors."
    }
  },
  initiatives: {
    title: "Our Activities",
    subtitle: "A comprehensive approach to artificial intelligence development through various forms of activity",
    thinkTanks: {
      title: "Think Tanks, Briefings, Debates",
      description: "Organizing expert discussions and analytical sessions on key AI development issues",
      tags: ["Expertise", "Discussions", "Analytics"]
    },
    expertise: {
      title: "Scientific Expertise",
      description: "Conducting independent scientific expertise of projects and initiatives in artificial intelligence",
      tags: ["Research", "Expertise", "Science"]
    },
    publications: {
      title: "Publications and Analytics",
      description: "Preparation and publication of analytical materials, reports, and recommendations",
      tags: ["Publications", "Reports", "Recommendations"]
    },
    partnership: {
      title: "Partnership and Collaboration",
      description: "Developing partnerships with international organizations and research centers",
      tags: ["Partnership", "Collaboration", "International Relations"]
    }
  },
  stats: {
    title: "Results of Our Work",
    subtitle: "Numbers that demonstrate our contribution to artificial intelligence development in Ukraine",
    research: {
      number: "50+",
      label: "Expert Research Studies",
      description: "Analytical research conducted in AI field"
    },
    partners: {
      number: "25+",
      label: "Partner Organizations",
      description: "Active collaboration with leading institutions"
    },
    publications: {
      number: "100+",
      label: "Scientific Publications",
      description: "Published articles and analytical materials"
    },
    programs: {
      number: "15+",
      label: "Educational Programs",
      description: "Professional development programs implemented"
    }
  },
  experts: {
    title: "Our Experts",
    subtitle: "A team of leading scientists and researchers shaping the future of artificial intelligence in Ukraine",
    backToList: "Back to Experts List",
    expertNotFound: "Expert Not Found",
    backButton: "Return to List",
    experience: "Work Experience",
    publicationsCount: "Scientific Publications",
    citations: "Citations",
    education: "Education",
    keySkills: "Key Skills",
    achievements: "Achievements",
    recentPublications: "Recent Scientific Publications",
    contact: "Contact",
    view: "View",
    citationsText: "citations"
  },
  news: {
    title: "News and Research",
    subtitle: "Latest news, research, and developments in artificial intelligence from our center",
    moreNews: "More News",
    featuredNews: "Featured News",
    latestNews: "Latest News",
    researchUpdates: "Research Updates",
    readMore: "Read More",
    publishedOn: "Published on",
    category: "Category",
    tags: "Tags"
  },
  footer: {
    about: "About Center",
    aboutDescription: "Center for Strategic Applications of Artificial Intelligence at Igor Sikorsky Kyiv Polytechnic Institute",
    quickLinks: "Quick Links",
    contact: "Contact",
    followUs: "Follow Us",
    allRightsReserved: "All Rights Reserved",
    address: "37 Beresteiskyi Ave, Kyiv, 03056, Ukraine",
    phone: "+380 44 204 8000",
    email: "info@ai-center.kpi.ua"
  },
  expertsData: {
    petrenko: {
      name: "Prof. Oleksandr Petrenko",
      position: "Center Director",
      specialization: "Machine Learning, Deep Learning",
      education: "Doctor of Technical Sciences, Igor Sikorsky Kyiv Polytechnic Institute",
      experience: "15+ years in AI field",
      achievements: "30+ scientific publications in leading international journals,Leader of 5 international AI development projects,IEEE expert and editorial board member of 3 journals,Winner of the National Academy of Sciences of Ukraine award for outstanding achievements,Organizer of 8 international conferences",
      skills: "Python,TensorFlow,PyTorch,Computer Vision,NLP,Deep Learning,Neural Networks,Data Science",
      email: "o.petrenko@ai-center.kpi.ua"
    },
    kovalenko: {
      name: "Dr. Marina Kovalenko",
      position: "Lead Research Associate",
      specialization: "Natural Language Processing, Cognitive Computing",
      education: "Candidate of Technical Sciences, Lviv Polytechnic National University",
      experience: "12+ years in NLP field",
      achievements: "25+ scientific articles on natural language processing,Developer of 3 patents in NLP field,Winner of the National Academy of Sciences of Ukraine award for young scientists,Member of the scientific council of the European NLP Association,Mentor of 15+ PhD and master's students",
      skills: "BERT,GPT,Transformers,Sentiment Analysis,Text Mining,Python,R,Natural Language Processing",
      email: "m.kovalenko@ai-center.kpi.ua"
    },
    melnyk: {
      name: "Dr. Andriy Melnyk",
      position: "Senior Research Associate",
      specialization: "Computer Vision, Robotics",
      education: "Candidate of Physical and Mathematical Sciences, Kharkiv National University",
      experience: "10+ years in Computer Vision",
      achievements: "20+ publications on computer vision,Participant in 8 international conferences,Mentor of technology startups,Developer of autonomous driving system,NATO robotics expert",
      skills: "OpenCV,YOLO,CNNs,Object Detection,Autonomous Systems,ROS,Python,C++",
      email: "a.melnyk@ai-center.kpi.ua"
    },
    shevchenko: {
      name: "Kateryna Shevchenko",
      position: "Junior Research Associate",
      specialization: "AI Ethics, Data Analysis",
      education: "Master of Computer Science, Igor Sikorsky Kyiv Polytechnic Institute",
      experience: "5+ years in Data Science",
      achievements: "15+ research studies on artificial intelligence ethics,Organizer of AI Ethics Workshop in Ukraine,Google AI for Social Good scholarship recipient,Co-author of ethical AI handbook,Expert on AI regulation issues",
      skills: "R,Python,Ethics Framework,Data Visualization,Statistical Analysis,GDPR Compliance,Tableau",
      email: "k.shevchenko@ai-center.kpi.ua"
    },
    ivanenko: {
      name: "Dr. Viktor Ivanenko",
      position: "Research Associate",
      specialization: "Quantum Computing, Cryptography",
      education: "Candidate of Physical and Mathematical Sciences, Kyiv University",
      experience: "8+ years in quantum technologies",
      achievements: "18+ scientific papers on quantum computing,IBM Quantum Network expert,Developer of quantum algorithms,Quantum cryptography consultant,Lecturer of international quantum technology courses",
      skills: "Qiskit,Quantum Algorithms,Cryptography,Mathematical Modeling,Python,MATLAB,Quantum Computing",
      email: "v.ivanenko@ai-center.kpi.ua"
    },
    bondarenko: {
      name: "Yulia Bondarenko",
      position: "Data Analyst",
      specialization: "Big Data, Business Analytics",
      education: "Master of Economic Cybernetics, Kyiv Economic University",
      experience: "6+ years in analytics",
      achievements: "10+ successful big data analysis projects,Certified AWS and Azure specialist,Speaker at 5 international conferences,Developer of BI solutions for the public sector,Data visualization expert",
      skills: "Hadoop,Spark,SQL,Tableau,Business Intelligence,Power BI,Python,Apache Kafka",
      email: "y.bondarenko@ai-center.kpi.ua"
    }
  }
};