import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        investors: 'Investors',
        capabilities: 'Capabilities',
        applications: 'Applications',
        specifications: 'Specifications',
        quality: 'Quality & Process',
        glossary: 'Glossary',
        compliance: 'Compliance',
        rfq: 'RFQ / NDA Request',
        contact: 'Contact',
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Quarterly Growth',
        patentAssets: 'Patent Assets',
      },
      applications: {
        industrial: 'Industrial Implementation',
        titlePart1: 'Strategic',
        titlePart2: 'Applications.',
        intro: 'Adamas Materials provides the fundamental building blocks for industries where failure is not an option. Our synthetic lattices enable performance beyond conventional limits.',
        items: {
          photonics: { name: 'Photonics', desc: 'Substrates for laser windows and optical modulation.' },
          quantum: { name: 'Quantum research', desc: 'Engineered defect centers for spin-based experimentation.' },
          sensing: { name: 'Sensing', desc: 'High-precision sensing nodes for magnetic and thermal detection.' },
          thermal: { name: 'Thermal management', desc: 'Heat spreaders for high-power density electronics.' },
          science: { name: 'Experimental materials science', desc: 'Fundamental research into lattice dynamics and extreme physics.' }
        }
      },
      home: {
        heroTitle: 'Forging the Future of Synthesis.',
        heroSubtitle: 'Leading industrial and scientific supplier of high-performance advanced materials for global infrastructure and quantum synthesis.',
        cta: 'Request Quote',
        positioningTitle: 'Industrial & Scientific Specialist',
        positioningSubtitle: 'Uncompromising quality in synthetic lattice engineering. Building the foundation of the next industrial era.',
        extremePerformance: 'Extreme Performance.',
        solutionText: 'We specialize in synthetic diamond technology and advanced minerals for industrial applications. Our focus is on pushing the boundaries of material physics.',
        categories: {
          quantum: 'Quantum sensing materials',
          thermal: 'Thermal management',
          tooling: 'Specialized tooling',
          technical: 'Technical minerals'
        }
      },
      about: {
        heritage: 'The Heritage of Synthesis',
        premise: 'Established in 2026, Adamas Materials was founded on a simple premise: that the next stage of human progress will be defined by materials that do not exist in nature.',
        valuesTitle: 'Our Values',
        valuesText: 'We prioritize scientific rigor over market hype. We believe that true commercial value is built on a foundation of verifiable excellence and operational reliability.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'Industrial Synthesis'
        }
      },
      investors: {
        stewardship: 'Financial Stewardship',
        growthMetrics: 'Growth Metrics',
        revenueTrajectory: 'Revenue Trajectory',
        capexEfficiency: 'Capex Efficiency',
        ipValuation: 'IP Valuation',
        portal: 'Investor Portal',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital Management',
        capitalText: 'We manage capital with the same precision we apply to our materials. Our approach is conservative regarding risk and aggressive regarding scientific advancement.'
      },
      capabilities: {
        excellence: 'Engineering Excellence',
        titlePart1: 'Capabilities',
        titlePart2: '& Processes.',
        intro: 'Our facilities are equipped with Proprietary High-Pressure High-Temperature (HPHT) systems, capable of simulating conditions at the Earth\'s core.',
        hpht: {
          title: 'HPHT Synthesis',
          text: 'Precise control over carbon lattice formation at pressures exceeding 60,000 atmospheres.',
          items: ['Chemical Vapor Deposition', 'Lattice Engineering', 'Doping Control']
        },
        nano: {
          title: 'Nano-Fabrication',
          text: 'Sub-micron precision for technical components used in quantum computing and extreme optics.',
          items: ['Laser Etching', 'Ion Beam Polishing', '3D Mapping']
        },
        comp: {
          title: 'Computational Physics',
          text: 'Advanced modeling of material properties before synthesis occurs, reducing time-to-market.',
          items: ['DFT Simulations', 'Machine Learning Optimization', 'T-Symmetry Analysis']
        },
        supply: {
          title: 'Supply Orchestration',
          text: 'End-to-end logistics for critical minerals, ensuring ethical sourcing and reliable delivery.',
          items: ['Blockchain Tracking', 'Ethical Auditing', 'Just-In-Time Logistics']
        },
        precision: 'High-Precision Synthesis',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Multi-spectrometric analysis in our Charlotte facility.',
        traceability: 'Full traceability for every carat equivalent produced.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential data access and project scoping.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'Scientific Orientation',
        scientificText: 'We focus on high-precision research and industrial production.',
        noConsumerTitle: 'Strictly Industrial',
        noConsumerText: 'We do not supply consumer jewelry or fashion sectors.',
        rfqTitle: 'RFQ Framework',
        rfqText: 'Project-based pricing models ensuring confidentiality and precision.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. All rights reserved.',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        investors: 'Инвесторам',
        capabilities: 'Возможности',
        applications: 'Применение',
        specifications: 'Спецификации',
        quality: 'Качество и Процесс',
        glossary: 'Словарь',
        compliance: 'Соответствие',
        rfq: 'Запрос КП / NDA',
        contact: 'Контакт',
      },
      common: {
        learnMore: 'Подробнее',
        est2026: 'Осн. 2026',
        coreFocus: 'Основной фокус',
        solutions: 'Решения',
        quarterlyGrowth: 'Квартальный рост',
        patentAssets: 'Патентные активы',
      },
      applications: {
        industrial: 'Промышленная реализация',
        titlePart1: 'Стратегические',
        titlePart2: 'применения.',
        intro: 'Adamas Materials предоставляет фундаментальные строительные блоки для отраслей, где неудача невозможна. Наши синтетические решетки обеспечивают производительность сверх обычных пределов.',
        items: {
          photonics: { name: 'Фотоника', desc: 'Подложки для лазерных окон и оптической модуляции.' },
          quantum: { name: 'Квантовые исследования', desc: 'Инженерные центры дефектов для экспериментов на основе спина.' },
          sensing: { name: 'Сенсорика', desc: 'Высокоточные сенсорные узлы для магнитного и теплового обнаружения.' },
          thermal: { name: 'Тепловое управление', desc: 'Теплораспределители для электроники с высокой плотностью мощности.' },
          science: { name: 'Материаловедение', desc: 'Фундаментальные исследования динамики решеток и экстремальной физики.' }
        }
      },
      home: {
        heroTitle: 'Формируя будущее синтеза.',
        heroSubtitle: 'Ведущий промышленный и научный поставщик высокотехнологичных материалов для глобальной инфраструктуры и квантового синтеза.',
        cta: 'Запросить расчет',
        positioningTitle: 'Промышленная и научная специализация',
        positioningSubtitle: 'Бескомпромиссное качество в инженерии синтетических решеток. Закладываем фундамент следующей промышленной эры.',
        extremePerformance: 'Экстремальная производительность.',
        solutionText: 'Мы специализируемся на технологиях синтетических алмазов и передовых минералах для промышленного применения. Наш фокус — расширение границ физики материалов.',
        categories: {
          quantum: 'Материалы для квантовых датчиков',
          thermal: 'Тепловое управление',
          tooling: 'Специализированный инструмент',
          technical: 'Технические минералы'
        }
      },
      about: {
        heritage: 'Наследие синтеза',
        premise: 'Основанная в 2026 году, компания Adamas Materials базируется на простом принципе: следующий этап человеческого прогресса будет определяться материалами, которых नहीं существует в природе.',
        valuesTitle: 'Наши ценности',
        valuesText: 'Мы ставим научную строгость выше рыночного хайпа. Мы верим, что истинная коммерческая ценность строится на фундаменте проверяемого превосходства и операционной надежности.',
        metrics: {
          founded: 'Основано',
          hq: 'Штаб-квартира',
          focus: 'Фокус',
          industrial: 'Промышленный синтез'
        }
      },
      investors: {
        stewardship: 'Финансовое управление',
        growthMetrics: 'Метрики роста',
        revenueTrajectory: 'Траектория выручки',
        capexEfficiency: 'Эффективность Capex',
        ipValuation: 'Оценка IP',
        portal: 'Портал инвесторов',
        confidential: 'Доступ к конфиденциальным данным требует подтвержденных учетных данных.',
        requestAccess: 'Запросить доступ',
        capitalManagement: 'Управление капиталом',
        capitalText: 'Мы управляем капиталом с той же точностью, которую применяем к нашим материалам. Наш подход консервативен в отношении рисков и агрессивен в отношении научного прогресса.'
      },
      capabilities: {
        excellence: 'Инженерное превосходство',
        titlePart1: 'Возможности',
        titlePart2: 'и процессы.',
        intro: 'Наши мощности оснащены собственными системами высокого давления и высоких температур (HPHT), способными имитировать условия в ядре Земли.',
        hpht: {
          title: 'HPHT синтез',
          text: 'Точный контроль над формированием углеродной решетки при давлении, превышающем 60 000 атмосфер.',
          items: ['Химическое осаждение из газовой фазы', 'Инженерия решеток', 'Контроль легирования']
        },
        nano: {
          title: 'Нано-фабрикация',
          text: 'Субмикронная точность технических компонентов для квантовых вычислений и экстремальной оптики.',
          items: ['Лазерное травление', 'Ионно-лучевая полировка', '3D картирование']
        },
        comp: {
          title: 'Вычислительная физика',
          text: 'Передовое моделирование свойств материалов до начала синтеза, сокращающее время вывода на рынок.',
          items: ['DFT-моделирование', 'Оптимизация машинного обучения', 'Т-симметричный анализ']
        },
        supply: {
          title: 'Оркестрация поставок',
          text: 'Сквозная логистика критически важных минералов, обеспечивающая этичный сорсинг и надежную доставку.',
          items: ['Блокчейн-трекинг', 'Этический аудит', 'Логистика точно в срок']
        },
        precision: 'Высокоточный синтез',
        qualityAssurance: 'Гарантия качества',
        analysis: 'Многоспектрометрический анализ на нашем предприятии в Шарлотте.',
        traceability: 'Полная прослеживаемость для каждого произведенного карат-эквивалента.',
        purity: 'Стандарт чистоты',
        compliance: 'Соответствие'
      },
      rfq: {
        title: 'Запросы по проектам',
        framework: 'Структура RFQ',
        confidentiality: 'Доступ к конфиденциальным данным и определение масштаба проекта.',
        communications: 'СВЯЗЬ',
        requestForm: 'Форма запроса'
      },
      positioning: {
        scientificTitle: 'Научная ориентация',
        scientificText: 'Мы фокусируемся на высокоточных исследованиях и промышленном производстве.',
        noConsumerTitle: 'Строго промышленный сектор',
        noConsumerText: 'Мы не поставляем продукцию для ювелирного сектора или модной индустрии.',
        rfqTitle: 'Модель RFQ',
        rfqText: 'Проектная модель ценообразования, обеспечивающая конфиденциальность и точность.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Все права защищены.',
        legal: 'Юридическая информация',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
      }
    }
  },
  uk: {
    translation: {
      nav: {
        home: 'Головна',
        about: 'Про нас',
        investors: 'Інвесторам',
        capabilities: 'Можливості',
        applications: 'Застосування',
        specifications: 'Специфікації',
        quality: 'Якість та Процес',
        glossary: 'Словник',
        compliance: 'Відповідність',
        rfq: 'Запит КП',
        contact: 'Контакт',
      },
      common: {
        learnMore: 'Докладніше',
        est2026: 'Засн. 2026',
        coreFocus: 'Основний фокус',
        solutions: 'Рішення',
        quarterlyGrowth: 'Квартальне зростання',
        patentAssets: 'Патентні активи',
      },
      applications: {
        industrial: 'Промислова реалізація',
        titlePart1: 'Стратегічні',
        titlePart2: 'застосування.',
        intro: 'Adamas Materials надає фундаментальні будівельні блоки для галузей, де відмова неможлива. Наші синтетичні решітки забезпечують продуктивність поза звичайними межами.',
        items: {
          photonics: { name: 'Фотоніка', desc: 'Підкладки для лазерних вікон та оптичної модуляції.' },
          quantum: { name: 'Квантові дослідження', desc: 'Інженерні центри дефектів для експериментів на основі спіну.' },
          sensing: { name: 'Сенсорика', desc: 'Високоточні сенсорні вузлы для магнітного та теплового виявлення.' },
          thermal: { name: 'Теплове управління', desc: 'Теплорозподільники для електроніки з високою щільністю потужності.' },
          science: { name: 'Матеріалознавство', desc: 'Фундаментальні дослідження динаміки решіток та екстремальної фізики.' }
        }
      },
      home: {
        heroTitle: 'Формуючи майбутнє синтезу.',
        heroSubtitle: 'Провідний промисловий та науковий постачальник високотехнологічних матеріалів для глобальної інфраструктури та квантового синтезу.',
        cta: 'Запити вартість',
        positioningTitle: 'Промислова та наукова спеціалізація',
        positioningSubtitle: 'Безкомпромісна якість в інженерії синтетичних решіток. Закладаємо фундамент наступної промислової ери.',
        extremePerformance: 'Екстремальна продуктивність.',
        solutionText: 'Ми спеціалізуємося на технологіях синтетичних алмазів та передових мінералах для промислового застосування. Наш фокус — розширення меж фізики матеріалів.',
        categories: {
          quantum: 'Матеріали для квантових датчиків',
          thermal: 'Теплове управління',
          tooling: 'Спеціалізований інструмент',
          technical: 'Технічні мінерали'
        }
      },
      about: {
        heritage: 'Спадщина синтезу',
        premise: 'Заснована у 2026 році, компанія Adamas Materials базується на простому принципі: наступний етап людського прогресу буде визначатися матеріалами, яких не існує в природі.',
        valuesTitle: 'Наші цінності',
        valuesText: 'Ми ставимо наукову строгість вище ринкового хайпу. Ми віримо, що справжня комерційна цінність будується на фундаменті перевіреної переваги та операційної надійності.',
        metrics: {
          founded: 'Засновано',
          hq: 'Штаб-квартира',
          focus: 'Фокус',
          industrial: 'Промисловий синтез'
        }
      },
      investors: {
        stewardship: 'Фінансове управління',
        growthMetrics: 'Метрики зростання',
        revenueTrajectory: 'Траєкторія виручки',
        capexEfficiency: 'Ефективність Capex',
        ipValuation: 'Оцінка IP',
        portal: 'Портал інвесторів',
        confidential: 'Доступ до конфіденційних даних потребує підтверджених облікових даних.',
        requestAccess: 'Запросити доступ',
        capitalManagement: 'Управління капіталом',
        capitalText: 'Ми управляємо капіталом з тією ж точністю, яку застосовуємо до наших матеріалів. Наш підхід консервативний щодо ризиків та агресивний щодо наукового прогресу.'
      },
      capabilities: {
        precision: 'Високоточний синтез',
        qualityAssurance: 'Гарантія якості',
        analysis: 'Багатоспектрометричний аналіз на нашому підприємстві в Шарлотті.',
        traceability: 'Повна простежуваність для кожного виробленого карат-еквівалента.'
      },
      rfq: {
        title: 'Запити по проєктах',
        framework: 'Структура RFQ',
        confidentiality: 'Доступ до конфіденційних даних та визначення масштабу проєкту.',
        communications: 'ЗВ\'ЯЗОК',
        requestForm: 'Форма запиту'
      },
      positioning: {
        scientificTitle: 'Наукова орієнтація',
        scientificText: 'Ми фокусуємося на високоточних дослідженнях та промисловому виробництві.',
        noConsumerTitle: 'Суворо промисловий сектор',
        noConsumerText: 'Ми не постачаємо продукцію для ювелірного сектора або модної індустрії.',
        rfqTitle: 'Модель RFQ',
        rfqText: 'Проєктна модель ціноутворення, що забезпечує конфіденційність та точність.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Всі права захищені.',
        legal: 'Юридична інформація',
        privacy: 'Політика конфіденційності',
        terms: 'Умови використання',
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        investors: 'Inversores',
        capabilities: 'Capacidades',
        applications: 'Aplicaciones',
        quality: 'Calidad y Proceso',
        glossary: 'Glosario',
        rfq: 'Solicitud de Cotización',
      },
      common: {
        learnMore: 'Leer más',
        est2026: 'Est. 2026',
        solutions: 'Soluciones',
      },
      home: {
        heroTitle: 'Forjando el Futuro de la Síntesis.',
        heroSubtitle: 'Proveedor líder industrial y científico de materiales avanzados de alto rendimiento.',
        cta: 'Solicitar Cotización',
      },
      positioning: {
        scientificTitle: 'Orientación Científica',
        scientificText: 'Nos enfocamos en investigación de alta precisión y producción industrial.',
        noConsumerTitle: 'Estrictamente Industrial',
        noConsumerText: 'No suministramos a los sectores de joyería o moda de consumo.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        investors: 'Investisseurs',
        capabilities: 'Capacités',
        applications: 'Applications',
        quality: 'Qualité et Processus',
        glossary: 'Glossaire',
        rfq: 'Demande de Devis',
      },
      common: {
        learnMore: 'En savoir plus',
        est2026: 'Est. 2026',
        solutions: 'Solutions',
      },
      home: {
        heroTitle: 'Forger l\'Avenir de la Synthèse.',
        heroSubtitle: 'Premier fournisseur industriel et scientifique de matériaux avancés de haute performance.',
        cta: 'Demander un Devis',
      },
      positioning: {
        scientificTitle: 'Orientation Scientifique',
        scientificText: 'Nous nous concentrons sur la recherche de haute précision et la production industrielle.',
        noConsumerTitle: 'Strictement Industriel',
        noConsumerText: 'Nous ne fournissons pas les secteurs de la bijouterie ou de la mode grand public.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Tous droits réservés.',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions d\'Utilisation',
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über uns',
        investors: 'Investoren',
        capabilities: 'Fähigkeiten',
        applications: 'Anwendungen',
        quality: 'Qualität & Prozess',
        glossary: 'Glossar',
        rfq: 'Angebotsanfrage',
      },
      common: {
        learnMore: 'Mehr erfahren',
        est2026: 'Gegr. 2026',
        solutions: 'Lösungen',
      },
      home: {
        heroTitle: 'Die Zukunft der Synthese schmieden.',
        heroSubtitle: 'Führender industrieller und wissenschaftlicher Lieferant von Hochleistungsmaterialien.',
        cta: 'Angebot anfordern',
      },
      positioning: {
        scientificTitle: 'Wissenschaftliche Orientierung',
        scientificText: 'Wir konzentrieren uns auf Hochpräzisionsforschung und industrielle Produktion.',
        noConsumerTitle: 'Rein Industriell',
        noConsumerText: 'Wir beliefern keine Schmuck- oder Modebranchen.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Alle Rechte vorbehalten.',
        privacy: 'Datenschutzrichtlinie',
        terms: 'Nutzungsbedingungen',
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        about: '会社概要',
        investors: '投資家情報',
        capabilities: '技術力',
        applications: '用途',
        quality: '品質とプロセス',
        glossary: '用語集',
        rfq: '見積依頼',
      },
      common: {
        learnMore: '詳細はこちら',
        est2026: '2026年設立',
        solutions: 'ソリューション',
      },
      home: {
        heroTitle: '合成の未来を拓く。',
        heroSubtitle: '高機能先端材料の世界的な産業・科学サプライヤー。',
        cta: '見積を依頼する',
      },
      positioning: {
        scientificTitle: '科学的志向',
        scientificText: '高精度な研究と工業生産に注力しています。',
        noConsumerTitle: '完全産業用',
        noConsumerText: '宝飾品やファッション分野への供給は行っておりません。',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. 全著作権所有。',
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
      },
      about: {
        heritage: '合成の遺産',
        valuesTitle: '私たちの価値観',
      },
      investors: {
        stewardship: '財務管理',
        portal: '投資家ポータル',
      },
      capabilities: {
        excellence: 'エンジニアリング・エクセレンス',
        qualityAssurance: '品質保証',
      }
    }
  },
  he: {
    translation: {
      nav: {
        home: 'בית',
        about: 'אודות',
        investors: 'משקיעים',
        capabilities: 'יכולות',
        applications: 'יישומים',
        quality: 'איכות ותהליך',
        glossary: 'מילון מונחים',
        rfq: 'בקשת הצעת מחיר',
      },
      common: {
        learnMore: 'למידע נוסף',
        est2026: 'נוסד ב-2026',
        solutions: 'פתרונות',
      },
      home: {
        heroTitle: 'מעצבים את עתיד הסינטזה.',
        heroSubtitle: 'ספק תעשייתי ומדעי מוביל של חומרים מתקדמים בעלי ביצועים גבוהים.',
        cta: 'בקש הצעת מחיר',
      },
      positioning: {
        scientificTitle: 'אוריינטציה מדעית',
        scientificText: 'אנו מתמקדים במחקר ובייצור תעשייתי ברמת דיוק גבוהה.',
        noConsumerTitle: 'תעשייתי בלבד',
        noConsumerText: 'אנו לא מספקים מוצרים למגזרי התכשיטים או האופנה.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. כל הזכויות שמורות.',
        privacy: 'מדיניות פרטיות',
        terms: 'תנאי שימוש',
      },
      about: {
        heritage: 'מורשת הסינטזה',
        valuesTitle: 'הערכים שלנו',
      },
      investors: {
        stewardship: 'ניהול פיננסי',
        portal: 'פורטל משקיעים',
      },
      capabilities: {
        excellence: 'מצוינות הנדסית',
        qualityAssurance: 'בקרת איכות',
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'عن الشركة',
        investors: 'المستثمرون',
        capabilities: 'القدرات',
        applications: 'التطبيقات',
        quality: 'الجودة والعمليات',
        glossary: 'المصطلحات',
        rfq: 'طلب عرض سعر',
      },
      common: {
        learnMore: 'تعرف على المزيد',
        est2026: 'تأسست عام 2026',
        solutions: 'الحلول',
      },
      home: {
        heroTitle: 'صياغة مستقبل التصنيع.',
        heroSubtitle: 'المورد الصناعي والعلمي الرائد للمواد المتقدمة عالية الأداء.',
        cta: 'طلب عرض سعر',
      },
      positioning: {
        scientificTitle: 'التوجه العلمي',
        scientificText: 'نحن نركز على الأبحاث عالية الدقة والإنتاج الصناعي.',
        noConsumerTitle: 'صناعي بحت',
        noConsumerText: 'نحن لا نورد لقطاعات المجوهرات أو الأزياء الاستهلاكية.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
      },
      about: {
        heritage: 'تراث التصنيع',
        valuesTitle: 'قيمنا',
      },
      investors: {
        stewardship: 'الإشراف المالي',
        portal: 'بوابة المستثمرين',
      },
      capabilities: {
        excellence: 'التميز الهندسي',
        qualityAssurance: 'ضمان الجودة',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
