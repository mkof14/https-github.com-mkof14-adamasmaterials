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
        materials: 'Materials',
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
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Operational and technical inquiries regarding our synthesis processes.',
          items: [
            {
              q: 'What sets your synthetic lattice apart from natural minerals?',
              a: 'Natural minerals often contain unpredictable inclusions. Our engineered lattices are synthesized with sub-atomic precision, allowing for controlled vacancy levels and isotopic purity required for quantum and high-power applications.'
            },
            {
              q: 'What are the typical lead times for custom orders?',
              a: 'Standard industrial grades are typically available within 2-4 weeks. Custom HPHT synthesis or nano-fabricated optical components generally require 8-12 weeks depending on the complexity of the lattice engineering.'
            },
            {
              q: 'Do you provide materials for jewelry or consumer fashion?',
              a: 'No. Adamas Materials is strictly an industrial and scientific supplier. We do not participate in the consumer luxury or fashion sectors.'
            },
            {
              q: 'How is quality verified for extreme applications?',
              a: 'Every carat equivalent undergoes multispectrometric analysis in our Charlotte facility. We provide full certificate of conformity and chain-of-custody documentation for all high-precision components.'
            }
          ]
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
        materials: 'Материалы',
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
        },
        faq: {
          title: 'Часто задаваемые вопросы',
          subtitle: 'Операционные и технические запросы относительно наших процессов синтеза.',
          items: [
            {
              q: 'Что отличает ваши синтетические решетки от природных минералов?',
              a: 'Природные минералы часто содержат непредсказуемые включения. Наши инженерные решетки синтезируются с субатомной точностью, что позволяет контролировать уровни вакансий и изотопную чистоту, необходимые для квантовых и высокомощных приложений.'
            },
            {
              q: 'Каковы типичные сроки выполнения индивидуальных заказов?',
              a: 'Стандартные промышленные марки обычно доступны в течение 2-4 недель. Индивидуальный HPHT-синтез или нанофабрикованные оптические компоненты обычно требуют 8-12 недель в зависимости от сложности инженерии решетки.'
            },
            {
              q: 'Поставляете ли вы материалы для ювелирных изделий или модной индустрии?',
              a: 'Нет. Adamas Materials является строго промышленным и научным поставщиком. Мы не участвуем в секторах потребительских предметов роскоши или моды.'
            },
            {
              q: 'Как проверяется качество для экстремальных применений?',
              a: 'Каждый карат-эквивалент проходит многоспектрометрический анализ на нашем предприятии в Шарлотте. Мы предоставляем полный сертификат соответствия и документацию по цепочке поставок для всех высокоточных компонентов.'
            }
          ]
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
        materials: 'Матеріали',
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
        },
        faq: {
          title: 'Часті запитання',
          subtitle: 'Операційні та технічні запити щодо наших процесів синтезу.',
          items: [
            {
              q: 'Що відрізняє ваші синтетичні решітки від природних мінералів?',
              a: 'Природні мінерали часто містять непередбачувані включення. Наші інженерні решітки синтезуються з субатомною точністю, що дозволяє контролювати рівні вакансій та ізотопну чистоту, необхідні для квантових та високопотужних застосувань.'
            },
            {
              q: 'Які типові терміни виконання індивідуальних замовлень?',
              a: 'Стандартні промислові марки зазвичай доступні протягом 2-4 тижнів. Індивідуальний HPHT-синтез або нанофабриковані оптичні компоненти зазвичай потребують 8-12 тижнів залежно від складності інженерії решітки.'
            },
            {
              q: 'Чи постачаєте ви матеріали для ювелірних виробів або модної індустрії?',
              a: 'Ні. Adamas Materials є суворо промисловим та науковим постачальником. Ми не беремо участі в секторах споживчих товарів розкоші або моди.'
            },
            {
              q: 'Як перевіряється якість для екстремальних застосувань?',
              a: 'Кожен карат-еквівалент проходить багатоспектрометричний аналіз на нашому підприємстві в Шарлотті. Ми надаємо повний сертифікат відповідності та документацію про ланцюжок поставок для всіх високоточних компонентів.'
            }
          ]
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
        materials: 'Materiales',
        quality: 'Calidad y Proceso',
        glossary: 'Glosario',
        rfq: 'Solicitud de Cotización',
      },
      common: {
        learnMore: 'Leer más',
        est2026: 'Est. 2026',
        solutions: 'Soluciones',
        coreFocus: 'Foco Central',
        quarterlyGrowth: 'Crecimiento Trimestral',
        patentAssets: 'Activos de Patente',
      },
      applications: {
        industrial: 'Implementación Industrial',
        titlePart1: 'Aplicaciones',
        titlePart2: 'Estratégicas.',
        intro: 'Adamas Materials proporciona los bloques fundamentales para industrias donde el fallo no es una opción. Nuestras redes sintéticas permiten un rendimiento más allá de los límites convencionales.',
        items: {
          photonics: { name: 'Fotónica', desc: 'Sustratos para ventanas láser y modulación óptica.' },
          quantum: { name: 'Investigación cuántica', desc: 'Centros de defectos diseñados para experimentación basada en espín.' },
          sensing: { name: 'Detección', desc: 'Nodos de detección de alta precisión para detección magnética y térmica.' },
          thermal: { name: 'Gestión térmica', desc: 'Disipadores de calor para electrónica de alta densidad de potencia.' },
          science: { name: 'Ciencia de materiales experimentales', desc: 'Investigación fundamental sobre la dinámica de redes y física extrema.' }
        }
      },
      home: {
        heroTitle: 'Forjando el Futuro de la Síntesis.',
        heroSubtitle: 'Proveedor líder industrial y científico de materiales avanzados de alto rendimiento para infraestructura global y síntesis cuántica.',
        cta: 'Solicitar Cotización',
        positioningTitle: 'Especialista Industrial y Científico',
        positioningSubtitle: 'Calidad sin compromisos en ingeniería de redes sintéticas. Construyendo la base de la próxima era industrial.',
        extremePerformance: 'Rendimiento Extremo.',
        solutionText: 'Nos especializamos en tecnología de diamante sintético y minerales avanzados para aplicaciones industriales. Nuestro enfoque es ampliar los límites de la física de materiales.',
        categories: {
          quantum: 'Materiales de detección cuántica',
          thermal: 'Gestión térmica',
          tooling: 'Herramientas especializadas',
          technical: 'Minerales técnicos'
        },
        faq: {
          title: 'Preguntas Frecuentes',
          subtitle: 'Consultas operativas y técnicas sobre nuestros procesos de síntesis.',
          items: [
            {
              q: '¿Qué diferencia a sus redes sintéticas de los minerales naturales?',
              a: 'Los minerales naturales a menudo contienen inclusiones impredecibles. Nuestras redes diseñadas se sintetizan con precisión subatómica, lo que permite niveles de vacantes controlados y la pureza isotópica requerida para aplicaciones cuánticas и de alta potencia.'
            },
            {
              q: '¿Cuáles son los plazos de entrega típicos para pedidos personalizados?',
              a: 'Los grados industriales estándar suelen estar disponibles en 2-4 semanas. La síntesis HPHT personalizada o los componentes ópticos nanofabricados generalmente requieren de 8-12 semanas, dependiendo de la complejidad de la ingeniería de la red.'
            },
            {
              q: '¿Suministran materiales para joyería o moda de consumo?',
              a: 'No. Adamas Materials es estrictamente un proveedor industrial и científico. No participamos en los sectores de lujo o moda de consumo.'
            },
            {
              q: '¿Cómo se verifica la calidad para aplicaciones extremas?',
              a: 'Cada equivalente de quilate se somete a un análisis multiespectrométrico en nuestra planta de Charlotte. Proporcionamos un certificado de conformidad completo и documentación de la cadena de custodia para todos los componentes de alta precisión.'
            }
          ]
        }
      },
      about: {
        heritage: 'El Legado de la Síntesis',
        premise: 'Establecida en 2026, Adamas Materials se fundó sobre una premisa simple: que la próxima etapa del progreso humano estará definida por materiales que no existen en la naturaleza.',
        valuesTitle: 'Nuestros Valores',
        valuesText: 'Priorizamos el rigor científico sobre el bombo publicitario. Creemos que el verdadero valor comercial se construye sobre una base de excelencia verificable y confiabilidad operativa.',
        metrics: {
          founded: 'Fundada',
          hq: 'Sede',
          focus: 'Enfoque',
          industrial: 'Síntesis Industrial'
        }
      },
      investors: {
        stewardship: 'Administración Financiera',
        growthMetrics: 'Métricas de Crecimiento',
        revenueTrajectory: 'Trayectoria de Ingresos',
        capexEfficiency: 'Eficiencia de Capex',
        ipValuation: 'Valoración de IP',
        portal: 'Portal de Inversores',
        confidential: 'El acceso a datos confidenciales requiere credenciales verificadas.',
        requestAccess: 'Solicitar Acceso',
        capitalManagement: 'Gestión de Capital',
        capitalText: 'Gestionamos el capital con la misma precisión que aplicamos a nuestros materiales. Nuestro enfoque es conservador respecto al riesgo y agresivo respecto al avance científico.'
      },
      capabilities: {
        excellence: 'Excelencia en Ingeniería',
        titlePart1: 'Capacidades',
        titlePart2: '& Procesos.',
        intro: 'Nuestras instalaciones están equipadas con sistemas propietarios de Alta Presión y Alta Temperatura (HPHT), capaces de simular las condiciones en el núcleo de la Tierra.',
        hpht: {
          title: 'Síntesis HPHT',
          text: 'Control preciso sobre la formación de la red de carbono a presiones superiores a 60,000 atmósferas.',
          items: ['Deposición Química de Vapor', 'Ingeniería de Redes', 'Control de Dopaje']
        },
        nano: {
          title: 'Nano-Fabricación',
          text: 'Precisión submicrométrica para componentes técnicos utilizados en computación cuántica y óptica extrema.',
          items: ['Grabado Láser', 'Pulido por Haz de Iones', 'Mapeo 3D']
        },
        comp: {
          title: 'Física Computacional',
          text: 'Modelado avanzado de propiedades de materiales antes de que ocurra la síntesis, reduciendo el tiempo de comercialización.',
          items: ['Simulaciones DFT', 'Optimización por Aprendizaje Automático', 'Análisis de Simetría T']
        },
        supply: {
          title: 'Orquestación de Suministros',
          text: 'Logística de extremo a extremo para minerales críticos, asegurando un abastecimiento ético y una entrega confiable.',
          items: ['Seguimiento por Blockchain', 'Auditoría Ética', 'Logística Justo a Tiempo']
        },
        precision: 'Síntesis de Alta Precisión',
        qualityAssurance: 'Garantía de Calidad',
        analysis: 'Análisis multiespectrométrico en nuestra planta de Charlotte.',
        traceability: 'Trazabilidad total para cada equivalente de quilate producido.',
        purity: 'Estándar de Pureza',
        compliance: 'Cumplimiento'
      },
      rfq: {
        title: 'Consultas de Proyectos',
        framework: 'Marco de RFQ',
        confidentiality: 'Acceso a datos confidenciales y alcance del proyecto.',
        communications: 'COMUNICACIONES',
        requestForm: 'Formulario de Solicitud'
      },
      positioning: {
        scientificTitle: 'Orientación Científica',
        scientificText: 'Nos enfocamos en la investigación de alta precisión y la producción industrial.',
        noConsumerTitle: 'Estrictamente Industrial',
        noConsumerText: 'No suministramos a los sectores de joyería de consumo o moda.',
        rfqTitle: 'Marco de RFQ',
        rfqText: 'Modelos de precios basados en proyectos que garantizan confidencialidad y precisión.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Todos los derechos reservados.',
        legal: 'Legal',
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
        materials: 'Matériaux',
        quality: 'Qualité et Processus',
        glossary: 'Glossaire',
        rfq: 'Demande de Devis',
      },
      common: {
        learnMore: 'En savoir plus',
        est2026: 'Est. 2026',
        solutions: 'Solutions',
        coreFocus: 'Cœur de Métier',
        quarterlyGrowth: 'Croissance Trimestrielle',
        patentAssets: 'Actifs Brevetés',
      },
      applications: {
        industrial: 'Mise en Œuvre Industrielle',
        titlePart1: 'Applications',
        titlePart2: 'Stratégiques.',
        intro: 'Adamas Materials fournit les blocs fondamentaux pour les industries où l\'échec n\'est pas une option. Nos réseaux synthétiques permettent des performances au-delà des limites conventionnelles.',
        items: {
          photonics: { name: 'Photonique', desc: 'Substrats pour fenêtres laser et modulation optique.' },
          quantum: { name: 'Recherche quantique', desc: 'Centres de défauts techniques pour l\'expérimentation basée sur le spin.' },
          sensing: { name: 'Détection', desc: 'Nœuds de détection haute précision pour la détection magnétique et thermique.' },
          thermal: { name: 'Gestion thermique', desc: 'Dissipateurs thermiques pour l\'électronique à haute densité de puissance.' },
          science: { name: 'Science des matériaux expérimentaux', desc: 'Recherche fondamentale sur la dynamique des réseaux et la physique extrême.' }
        }
      },
      home: {
        heroTitle: 'Forger l\'Avenir de la Synthèse.',
        heroSubtitle: 'Premier fournisseur industriel et scientifique de matériaux avancés de haute performance pour l\'infrastructure mondiale et la synthèse quantique.',
        cta: 'Demander un Devis',
        positioningTitle: 'Spécialiste Industriel et Scientifique',
        positioningSubtitle: 'Qualité sans compromis dans l\'ingénierie des réseaux synthétiques. Construisant la base de la prochaine ère industrielle.',
        extremePerformance: 'Performance Extrême.',
        solutionText: 'Nous nous spécialisons dans la technologie du diamant synthétique et les minéraux avancés pour les applications industrielles. Notre objectif est de repousser les limites de la physique des matériaux.',
        categories: {
          quantum: 'Matériaux de détection quantique',
          thermal: 'Gestion thermique',
          tooling: 'Outillage spécialisé',
          technical: 'Minéraux techniques'
        },
        faq: {
          title: 'Foire Aux Questions',
          subtitle: 'Demandes opérationnelles et techniques concernant nos processus de synthèse.',
          items: [
            {
              q: 'Qu\'est-ce qui distingue vos réseaux synthétiques des minéraux naturels ?',
              a: 'Les minéraux naturels contiennent souvent des inclusions imprévisibles. Nos réseaux techniques sont synthétisés avec une précision subatomique, permettant des niveaux de vacance contrôlés et une pureté isotopique requis pour les applications quantiques et de haute puissance.'
            },
            {
              q: 'Quels sont les délais de livraison typiques pour les commandes personnalisées ?',
              a: 'Les qualités industrielles standard sont généralement disponibles sous 2 à 4 semaines. La synthèse HPHT personnalisée ou les composants optiques nanofabriqués nécessitent généralement 8 à 12 semaines selon la complexité de l\'ingénierie du réseau.'
            },
            {
              q: 'Fournissez-vous des matériaux pour la bijouterie ou la mode grand public ?',
              a: 'Non. Adamas Materials est strictement un fournisseur industriel et scientifique. Nous ne participons pas aux secteurs de l\'industrie du luxe ou de la mode grand public.'
            },
            {
              q: 'Comment la qualité est-elle vérifiée pour les applications extrêmes ?',
              a: 'Chaque équivalent carat subit une analyse multispectrométrique dans notre installation de Charlotte. Nous fournissons un certificat de conformité complet et une documentation sur la chaîne de contrôle pour tous les composants de haute précision.'
            }
          ]
        }
      },
      about: {
        heritage: 'L\'Héritage de la Synthèse',
        premise: 'Établie en 2026, Adamas Materials a été fondée sur une prémisse simple : la prochaine étape du progrès humain sera définie par des matériaux qui n\'existent pas dans la nature.',
        valuesTitle: 'Nos Valeurs',
        valuesText: 'Nous priorisons la rigueur scientifique sur le battage médiatique. Nous croyons que la véritable valeur commerciale est bâtie sur un fondement d\'excellence vérifiable et de fiabilité opérationnelle.',
        metrics: {
          founded: 'Fondée',
          hq: 'Siège',
          focus: 'Focus',
          industrial: 'Synthèse Industrielle'
        }
      },
      investors: {
        stewardship: 'Intendance Financière',
        growthMetrics: 'Mesures de Croissance',
        revenueTrajectory: 'Trajectoire des Revenus',
        capexEfficiency: 'Efficacité CAPEX',
        ipValuation: 'Valorisation de la PI',
        portal: 'Portail Investisseurs',
        confidential: 'L\'accès aux données confidentielles nécessite des identifiants vérifiés.',
        requestAccess: 'Demander l\'Accès',
        capitalManagement: 'Gestion du Capital',
        capitalText: 'Nous gérons le capital avec la même précision que celle que nous appliquons à nos matériaux. Notre approche est conservatrice vis-à-vis du risque et agressive vis-à-vis de l\'avancement scientifique.'
      },
      capabilities: {
        excellence: 'Excellence en Ingénierie',
        titlePart1: 'Capacités',
        titlePart2: '& Processus.',
        intro: 'Nos installations sont équipées de systèmes propriétaires Haute Pression Haute Température (HPHT), capables de simuler les conditions au cœur de la Terre.',
        hpht: {
          title: 'Synthèse HPHT',
          text: 'Contrôle précis de la formation du réseau de carbone à des pressions dépassant 60 000 atmosphères.',
          items: ['Dépôt Chimique en Phase Vapeur', 'Ingénierie des Réseaux', 'Contrôle du Dopage']
        },
        nano: {
          title: 'Nano-Fabrication',
          text: 'Précision sub-micronique pour les composants techniques utilisés dans l\'informatique quantique et l\'optique extrême.',
          items: ['Gravure Laser', 'Polissage par Faisceau Ionique', 'Cartographie 3D']
        },
        comp: {
          title: 'Physique Computationnelle',
          text: 'Modélisation avancée des propriétés des matériaux avant la synthèse, réduisant le temps de mise sur le marché.',
          items: ['Simulations DFT', 'Optimisation par Apprentissage Automatique', 'Analyse de Symétrie T']
        },
        supply: {
          title: 'Orchestration de l\'Approvisionnement',
          text: 'Logistique de bout en bout pour les minéraux critiques, assurant un approvisionnement éthique et une livraison fiable.',
          items: ['Suivi Blockchain', 'Audit Éthique', 'Logistique Juste-à-Temps']
        },
        precision: 'Synthèse Haute Précision',
        qualityAssurance: 'Assurance Qualité',
        analysis: 'Analyse multi-spectrométrique dans notre installation de Charlotte.',
        traceability: 'Traçabilité complète pour chaque équivalent carat produit.',
        purity: 'Norme de Pureté',
        compliance: 'Conformité'
      },
      rfq: {
        title: 'Demandes de Projets',
        framework: 'Cadre RFQ',
        confidentiality: 'Accès aux données confidentielles et délimitation du projet.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Formulaire de Demande'
      },
      positioning: {
        scientificTitle: 'Orientation Scientifique',
        scientificText: 'Nous nous concentrons sur la recherche de haute précision et la production industrielle.',
        noConsumerTitle: 'Strictement Industriel',
        noConsumerText: 'Nous ne fournissons pas les secteurs de la bijouterie grand public ou de la mode.',
        rfqTitle: 'Cadre RFQ',
        rfqText: 'Modèles de tarification basés sur les projets garantissant confidentialité et précision.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Tous droits réservés.',
        legal: 'Légal',
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
        materials: 'Materialien',
        quality: 'Qualität & Prozess',
        glossary: 'Glossar',
        rfq: 'Angebotsanfrage',
      },
      common: {
        learnMore: 'Mehr erfahren',
        est2026: 'Gegr. 2026',
        solutions: 'Lösungen',
        coreFocus: 'Kernfokus',
        quarterlyGrowth: 'Quartalswachstum',
        patentAssets: 'Patentvermögen',
      },
      applications: {
        industrial: 'Industrielle Umsetzung',
        titlePart1: 'Strategische',
        titlePart2: 'Anwendungen.',
        intro: 'Adamas Materials liefert die fundamentalen Bausteine für Branchen, in denen Versagen keine Option ist. Unsere synthetischen Gitter ermöglichen Leistungen jenseits konventioneller Grenzen.',
        items: {
          photonics: { name: 'Photonik', desc: 'Substrate für Laserfenster und optische Modulation.' },
          quantum: { name: 'Quantenforschung', desc: 'Gezielte Defektzentren für spinbasierte Experimente.' },
          sensing: { name: 'Sensorik', desc: 'Hochpräzise Sensorknoten für magnetische und thermische Detektion.' },
          thermal: { name: 'Thermomanagement', desc: 'Wärmeverteiler für Elektronik mit hoher Leistungsdichte.' },
          science: { name: 'Experimentelle Materialwissenschaften', desc: 'Grundlagenforschung zu Gitterdynamik und Extremphysik.' }
        }
      },
      home: {
        heroTitle: 'Die Zukunft der Synthese schmieden.',
        heroSubtitle: 'Führender industrieller und wissenschaftlicher Lieferant von Hochleistungsmaterialien für globale Infrastruktur und Quantensynthese.',
        cta: 'Angebot anfordern',
        positioningTitle: 'Industrie- und Wissenschaftsspezialist',
        positioningSubtitle: 'Kompromisslose Qualität im Bereich der synthetischen Gittertechnik. Aufbau des Fundaments der nächsten Industrie-Ära.',
        extremePerformance: 'Extreme Leistung.',
        solutionText: 'Wir spezialisieren uns auf synthetische Diamanttechnologie und fortschrittliche Mineralien für industrielle Anwendungen. Unser Fokus liegt auf der Erweiterung der Grenzen der Materialphysik.',
        categories: {
          quantum: 'Quantensensormaterialien',
          thermal: 'Thermomanagement',
          tooling: 'Spezialwerkzeuge',
          technical: 'Technische Mineralien'
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          subtitle: 'Operative und technische Anfragen zu unseren Syntheseprozessen.',
          items: [
            {
              q: 'Was unterscheidet Ihr synthetisches Gitter von natürlichen Mineralien?',
              a: 'Natürliche Mineralien enthalten oft unvorhersehbare Einschlüsse. Unsere technischen Gitter werden mit subatomarer Präzision synthetisiert, was kontrollierte Leerstellenniveaus und Isotopenreinheit ermöglicht, die für Quanten- und Hochleistungsanwendungen erforderlich sind.'
            },
            {
              q: 'Wie lange sind die typischen Lieferzeiten für Sonderanfertigungen?',
              a: 'Standard-Industrie-Güteklassen sind in der Regel innerhalb von 2-4 Wochen verfügbar. Kundenspezifische HPHT-Synthese oder nanofabrizierte optische Komponenten erfordern in der Regel 8-12 Wochen, abhängig von der Komplexität der Gittertechnik.'
            },
            {
              q: 'Liefern Sie Materialien für Schmuck oder Mode?',
              a: 'Nein. Adamas Materials ist ein rein industrieller und wissenschaftlicher Lieferant. Wir beliefern nicht den Luxusgüter- oder Modemarkt.'
            },
            {
              q: 'Wie wird die Qualität für extreme Anwendungen verifiziert?',
              a: 'Jedes Karat-Äquivalent wird in unserer Anlage in Charlotte einer multispektrometrischen Analyse unterzogen. Wir stellen für alle Hochpräzisionskomponenten ein vollständiges Konformitätszertifikat und eine lückenlose Dokumentationskette zur Verfügung.'
            }
          ]
        }
      },
      about: {
        heritage: 'Das Erbe der Synthese',
        premise: 'Gegründet im Jahr 2026, basiert Adamas Materials auf der einfachen Prämisse, dass die nächste Stufe des menschlichen Fortschritts durch Materialien definiert wird, die in der Natur nicht existieren.',
        valuesTitle: 'Unsere Werte',
        valuesText: 'Wir priorisieren wissenschaftliche Strenge vor Marktrummel. Wir glauben, dass wahrer kommerzieller Wert auf einem Fundament aus nachweisbarer Exzellenz und operativer Zuverlässigkeit aufgebaut wird.',
        metrics: {
          founded: 'Gegründet',
          hq: 'Hauptsitz',
          focus: 'Fokus',
          industrial: 'Industrielle Synthese'
        }
      },
      investors: {
        stewardship: 'Finanzielle Verantwortung',
        growthMetrics: 'Wachstumskennzahlen',
        revenueTrajectory: 'Umsatzverlauf',
        capexEfficiency: 'Investitionseffizienz',
        ipValuation: 'IP-Bewertung',
        portal: 'Investorenportal',
        confidential: 'Der Zugriff auf vertrauliche Daten erfordert verifizierte Anmeldedaten.',
        requestAccess: 'Zugang anfordern',
        capitalManagement: 'Kapitalmanagement',
        capitalText: 'Wir verwalten Kapital mit derselben Präzision, die wir bei unseren Materialien anwenden. Unser Ansatz ist konservativ in Bezug auf Risiken und aggressiv in Bezug auf den wissenschaftlichen Fortschritt.'
      },
      capabilities: {
        excellence: 'Engineering Excellence',
        titlePart1: 'Fähigkeiten',
        titlePart2: '& Prozesse.',
        intro: 'Unsere Anlagen sind mit proprietären Hochdruck-Hochtemperatur-Systemen (HPHT) ausgestattet, die in der Lage sind, Bedingungen im Erdkern zu simulieren.',
        hpht: {
          title: 'HPHT-Synthese',
          text: 'Präzise Kontrolle über die Bildung von Kohlenstoffgittern bei Drücken von über 60.000 Atmosphären.',
          items: ['Chemische Gasphasenabscheidung', 'Gittertechnik', 'Dotierungskontrolle']
        },
        nano: {
          title: 'Nano-Fabrikation',
          text: 'Submikrometer-Präzision für technische Komponenten in Quantencomputer und Extremoptik.',
          items: ['Laserätzen', 'Ionenstrahlpolieren', '3D-Kartierung']
        },
        comp: {
          title: 'Computerphysik',
          text: 'Fortgeschrittene Modellierung von Materialeigenschaften vor der Synthese, was die Markteinführungszeit verkürzt.',
          items: ['DFT-Simulationen', 'Machine-Learning-Optimierung', 'T-Symmetrie-Analyse']
        },
        supply: {
          title: 'Lieferketten-Orchestrierung',
          text: 'End-to-End-Logistik für kritische Mineralien, die eine ethische Beschaffung und zuverlässige Lieferung gewährleistet.',
          items: ['Blockchain-Tracking', 'Ethisches Auditing', 'Just-in-Time-Logistik']
        },
        precision: 'Hochpräzisionssynthese',
        qualityAssurance: 'Qualitätssicherung',
        analysis: 'Multispektrometrische Analyse in unserer Anlage in Charlotte.',
        traceability: 'Vollständige Rückverfolgbarkeit für jedes produzierte Karat-Äquivalent.',
        purity: 'Reinheitsstandard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Projektanfragen',
        framework: 'RFQ-Rahmen',
        confidentiality: 'Zugriff auf vertrauliche Daten und Projektumfang.',
        communications: 'KOMMUNIKATION',
        requestForm: 'Anfrageformular'
      },
      positioning: {
        scientificTitle: 'Wissenschaftliche Orientierung',
        scientificText: 'Wir konzentrieren uns auf Hochpräzisionsforschung und industrielle Produktion.',
        noConsumerTitle: 'Rein Industriell',
        noConsumerText: 'Wir beliefern keine Consumer-Schmuck- oder Modesektoren.',
        rfqTitle: 'RFQ-Rahmen',
        rfqText: 'Projektbasierte Preismodelle, die Vertraulichkeit und Präzision gewährleisten.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Alle Rechte vorbehalten.',
        legal: 'Rechtliches',
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
        coreFocus: 'コアフォーカス',
        quarterlyGrowth: '四半期成長率',
        patentAssets: '特許資産',
      },
      applications: {
        industrial: '産業実装',
        titlePart1: '戦略的',
        titlePart2: 'アプリケーション。',
        intro: 'Adamas Materialsは、失敗が許されない産業に不可欠な構成要素を提供します。当社の合成格子は、従来の限界を超えたパフォ​​ーマンスを可能にします。',
        items: {
          photonics: { name: 'フォトニクス', desc: 'レーザーウィンドウおよび光変調用基板。' },
          quantum: { name: '量子研究', desc: 'スピンベースの実験用に設計された欠陥センター。' },
          sensing: { name: 'センシング', desc: '磁気および熱検出用の高精度センシングノード。' },
          thermal: { name: '熱管理', desc: '高電力密度電子機器用ヒートスプレッダー。' },
          science: { name: '実験材料科学', desc: '格子力学と極限物理学の基礎研究。' }
        }
      },
      home: {
        heroTitle: '合成の未来を拓く。',
        heroSubtitle: 'グローバルインフラと量子合成のための高性能先端材料の世界的な産業・科学サプライヤー。',
        cta: '見積を依頼する',
        positioningTitle: '産業・科学スペシャリスト',
        positioningSubtitle: '合成格子工学における妥協のない品質。次世代産業の基盤を構築。',
        extremePerformance: '究極のパフォーマンス。',
        solutionText: '当社は産業用途の合成ダイヤモンド技術と先端鉱物に特化しています。材料物理学の限界を押し広げることに注力しています。',
        categories: {
          quantum: '量子センシング材料',
          thermal: '熱管理',
          tooling: '特殊工具',
          technical: '技術鉱物'
        },
        faq: {
          title: 'よくある質問',
          subtitle: '当社の合成プロセスに関する運用および技術的なお問い合わせ。',
          items: [
            {
              q: '貴社の合成格子と天然鉱物の違いは何ですか？',
              a: '天然鉱物には予測不可能な不純物が含まれることがよくあります。当社のエンジニアリング格子は原子レベルの精度で合成されており、量子用途や高電力用途に必要な空孔レベルと同位体純度を制御できます。'
            },
            {
              q: 'カスタムオーダーの標準的な納期はどのくらいですか？',
              a: '標準的な工業用グレードは通常2〜4週間以内に納品可能です。カスタムHPHT合成またはナノ加工された光学コンポーネントは、格子の複雑さに応じて通常8〜12週間かかります。'
            },
            {
              q: '宝飾品やファッション向けの材料は提供していますか？',
              a: 'いいえ。Adamas Materialsは厳格な産業・科学用サプライヤーです。消費者向けの高級品やファッション分野には関与していません。'
            },
            {
              q: '極限環境向けの品質はどのように検証されますか？',
              a: 'すべてのカラット相当品は、シャーロットの施設で多種分光分析を受けます。すべての高精度コンポーネントに対して、完全な適合証明書とトレーサビリティ文書を提供します。'
            }
          ]
        }
      },
      about: {
        heritage: '合成の遺産',
        premise: '2026年に設立されたAdamas Materialsは、「人類の進歩の次の段階は、自然界には存在しない材料によって定義される」という単純な前提に基づいています。',
        valuesTitle: '私たちの価値観',
        valuesText: '市場の流行よりも科学的な厳密さを優先します。真の商業価値は、検証可能な卓越性と運用の信頼性を基盤に築かれると信じています。',
        metrics: {
          founded: '設立',
          hq: '本社',
          focus: 'フォーカス',
          industrial: '産業合成'
        }
      },
      investors: {
        stewardship: '財務管理',
        growthMetrics: '成長指標',
        revenueTrajectory: '収益の推移',
        capexEfficiency: '設備投資効率',
        ipValuation: '知的財産評価',
        portal: '投資家ポータル',
        confidential: '機密データへのアクセスには、検証済みの資格情報が必要です。',
        requestAccess: 'アクセスをリクエスト',
        capitalManagement: '資本管理',
        capitalText: '材料に適用するのと同じ精度で資本を管理します。リスクに対しては保守的であり、科学的な進歩に対しては積極的です。'
      },
      capabilities: {
        excellence: 'エンジニアリング・エクセレンス',
        titlePart1: '技術力',
        titlePart2: '& プロセス。',
        intro: '当社の施設には、地球の中心部の条件を模倣できる独自の高温高圧（HPHT）システムが装備されています。',
        hpht: {
          title: 'HPHT合成',
          text: '6万気圧を超える圧力下での炭素格子の形成を精密に制御。',
          items: ['化学気相成長', '格子工学', 'ドーピング制御']
        },
        nano: {
          title: 'ナノ加工',
          text: '量子コンピューティングや究極の光学系に使用される技術コンポーネントのサブミクロン精度。',
          items: ['レーザーエッチング', 'イオンビーム研磨', '3Dマッピング']
        },
        comp: {
          title: '計算物理学',
          text: '合成が行われる前に材料特性を高度にモデリングし、市場投入までの時間を短縮。',
          items: ['DFTシミュレーション', '機械学習による最適化', 'T対称性解析']
        },
        supply: {
          title: '供給オーケストレーション',
          text: '重要な鉱物のエンドツーエンドのロジスティクスにより、倫理的な調達と信頼性の高い配送を保証。',
          items: ['ブロックチェーン追跡', '倫理監査', 'ジャストインタイム・ロジスティクス']
        },
        precision: '高精度合成',
        qualityAssurance: '品質保証',
        analysis: 'シャーロットの施設での多種分光分析。',
        traceability: '生産されたすべてのカラット相当品の完全なトレーサビリティ。',
        purity: '純度基準',
        compliance: 'コンプライアンス'
      },
      rfq: {
        title: 'プロジェクトのお問い合わせ',
        framework: '見積依頼枠組み',
        confidentiality: '機密データへのアクセスとプロジェクトの精査。',
        communications: 'コミュニケーション',
        requestForm: 'リクエストフォーム'
      },
      positioning: {
        scientificTitle: '科学的志向',
        scientificText: '高精度な研究と工業生産に注力しています。',
        noConsumerTitle: '完全産業用',
        noConsumerText: '宝飾品やファッション分野への供給は行っておりません。',
        rfqTitle: '見積依頼枠組み',
        rfqText: '機密性と精度を確保するプロジェクトベースの価格モデル。',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. 全著作権所有。',
        legal: '法的情報',
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
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
        coreFocus: 'מיקוד ליבה',
        quarterlyGrowth: 'צמיחה רבעונית',
        patentAssets: 'נכסי פטנט',
      },
      applications: {
        industrial: 'יישום תעשייתי',
        titlePart1: 'יישומים',
        titlePart2: 'אסטרטגיים.',
        intro: 'Adamas Materials מספקת את אבני הבניין הבסיסיות לתעשיות שבהן כישלון אינו אופציה. הסריגים הסינתטיים שלנו מאפשרים ביצועים מעבר לגבולות המקובלים.',
        items: {
          photonics: { name: 'פוטוניקה', desc: 'מצעים לחלונות לייזר ואפנון אופטי.' },
          quantum: { name: 'מחקר קוונטי', desc: 'מרכזי פגמים מהונדסים לניסויים מבוססי ספין.' },
          sensing: { name: 'חישה', desc: 'צמתי חישה בדיוק גבוה לזיהוי מגנטי ותרמי.' },
          thermal: { name: 'ניהול תרמי', desc: 'מפזרי חום לאלקטרוניקה בצפיפות הספק גבוהה.' },
          science: { name: 'מדע חומרים ניסיוני', desc: 'מחקר בסיסי בדינמיקה של סריגים ופיזיקה קיצונית.' }
        }
      },
      home: {
        heroTitle: 'מעצבים את עתיד הסינטזה.',
        heroSubtitle: 'ספק תעשייתי ומדעי מוביל של חומרים מתקדמים בעלי ביצועים גבוהים לתשתית גלובלית וסינתזה קוונטית.',
        cta: 'בקש הצעת מחיר',
        positioningTitle: 'מומחה תעשייתי ומדעי',
        positioningSubtitle: 'איכות ללא פשרות בהנדסת סריג סינתטי. בניית הבסיס לעידן התעשייתי הבא.',
        extremePerformance: 'ביצועים קיצוניים.',
        solutionText: 'אנו מתמחים בטכנולוגיית יהלומים סינתטיים ומינרלים מתקדמים ליישומים תעשייתיים. המיקוד שלנו הוא פריצת גבולות הפיזיקה של החומרים.',
        categories: {
          quantum: 'חומרי חישה קוונטיים',
          thermal: 'ניהול תרמי',
          tooling: 'כלי עבודה ייעודיים',
          technical: 'מינרלים טכניים'
        },
        faq: {
          title: 'שאלות נפוצות',
          subtitle: 'פניות תפעוליות וטכניות לגבי תהליכי הסינתזה שלנו.',
          items: [
            {
              q: 'מה מבדיל את הסריג הסינתטי שלכם ממינרלים טבעיים?',
              a: 'מינרלים טבעיים מכילים לעיתים קרובות תכלילים בלתי צפויים. הסריגים המהונדסים שלנו מסונתזים בדיוק תת-אטומי, המאפשר רמות פגמים מבוקרות וטוהר איזוטופי הנדרש ליישומים קוונטיים ויישומי הספק גבוה.'
            },
            {
              q: 'מהם זמני האספקה האופייניים להזמנות בהתאמה אישית?',
              a: 'דרגות תעשייתיות סטנדרטיות זמינות בדרך כלל תוך 2-4 שבועות. סינתזת HPHT מותאמת אישית או רכיבים אופטיים בנאנו-ייצור דורשים בדרך כלל 8-12 שבועות, תלוי במורכבות הנדסת הסריג.'
            },
            {
              q: 'האם אתם מספקים חומרים לתכשיטים או לאופנה?',
              a: 'לא. Adamas Materials היא ספקית תעשייתית ומדעית בלבד. איננו משתתפים במגזרי היוקרה או האופנה הצרכניים.'
            },
            {
              q: 'כיצב מאומתת האיכות ליישומים קיצוניים?',
              a: 'כל שווה ערך קראט עובר ניתוח רב-ספקטרומטרי במתקן שלנו בשארלוט. אנו מספקים תעודת תאימות מלאה ותיעוד שרשרת אספקה עבור כל הרכיבים בדיוק גבוה.'
            }
          ]
        }
      },
      about: {
        heritage: 'מורשת הסינטזה',
        premise: 'Adamas Materials, שהוקמה בשנת 2026, נוסדה על בסיס הנחה פשוטה: שהשלב הבא של הקידמה האנושית יוגדר על ידי חומרים שאינם קיימים בטבע.',
        valuesTitle: 'הערכים שלנו',
        valuesText: 'אנו נותנים עדיפות לדיוק מדעי על פני הייפ שיווקי. אנו מאמינים שערך מסחרי אמיתי נבנה על בסיס של מצוינות ניתנת לאימות ואמינות תפעולית.',
        metrics: {
          founded: 'נוסד',
          hq: 'מטה',
          focus: 'מיקוד',
          industrial: 'סינתזה תעשייתית'
        }
      },
      investors: {
        stewardship: 'ניהול פיננסי',
        growthMetrics: 'מטריצות צמיחה',
        revenueTrajectory: 'מסלול הכנסות',
        capexEfficiency: 'יעילות Capex',
        ipValuation: 'הערכת IP',
        portal: 'פורטל משקיעים',
        confidential: 'גישה לנתונים חסויים דורשת אישורים מאומתים.',
        requestAccess: 'בקש גישה',
        capitalManagement: 'ניהול הון',
        capitalText: 'אנו מנהלים הון באותו דיוק שאנו מיישמים על החומרים שלנו. הגישה שלנו שמרנית לגבי סיכון ואגרסיבית לגבי קידמה מדעית.'
      },
      capabilities: {
        excellence: 'מצוינות הנדסית',
        titlePart1: 'יכולות',
        titlePart2: 'ותהליכים.',
        intro: 'המתקנים שלנו מצוידים במערכות קנייניות של לחץ גבוה וטמפרטורה גבוהה (HPHT), המסוגלות לדמות תנאים בליבת כדור הארץ.',
        hpht: {
          title: 'סינתזת HPHT',
          text: 'בקרה מדויקת על היווצרות סריג פחמן בלחצים העולים על 60,000 אטמוספרות.',
          items: ['שיקוע אדים כימי', 'הנדסת סריגים', 'בקרת אילוח']
        },
        nano: {
          title: 'נאנו-ייצור',
          text: 'דיוק תת-מיקרוני לרכיבים טכניים המשמשים במחשוב קוונטי ואופטיקה קיצונית.',
          items: ['צריבת לייזר', 'ליטוש בקרן יונים', 'מיפוי תלת מימד']
        },
        comp: {
          title: 'פיזיקה חישובית',
          text: 'מודלים מתקדמים של תכונות חומרים לפני התרחשות הסינתזה, המקצרים את זמן ההגעה לשוק.',
          items: ['סימולציות DFT', 'אופטימיזציה של למידת מכונה', 'ניתוח סימטריה T']
        },
        supply: {
          title: 'תזמור אספקה',
          text: 'לוגיסטיקה מקצה לקצה עבור מינרלים קריטיים, המבטיחה מקורות אתיים ואספקה אמינה.',
          items: ['מעקב בלוקצ\'יין', 'ביקורת אתית', 'לוגיסטיקה בדיוק בזמן']
        },
        precision: 'סינתזה בדיוק גבוה',
        qualityAssurance: 'בקרת איכות',
        analysis: 'ניתוח רב-ספקטרומטרי במתקן שלנו בשארלוט.',
        traceability: 'עקיבות מלאה לכל שווה ערך קראט המיוצר.',
        purity: 'תקן טוהר',
        compliance: 'ציות'
      },
      rfq: {
        title: 'פניות לפרויקטים',
        framework: 'מסגרת RFQ',
        confidentiality: 'גישה לנתונים חסויים והגדרת היקף הפרויקט.',
        communications: 'תקשורת',
        requestForm: 'טופס בקשה'
      },
      positioning: {
        scientificTitle: 'אוריינטציה מדעית',
        scientificText: 'אנו מתמקדים במחקר בדיוק גבוה ובייצור תעשייתי.',
        noConsumerTitle: 'תעשייתי בלבד',
        noConsumerText: 'אנו לא מספקים מוצרים למגזרי התכשיטים או האופנה הצרכניים.',
        rfqTitle: 'מסגרת RFQ',
        rfqText: 'מודלים של תמחור מבוססי פרויקט המבטיחים סודיות ודיוק.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. כל הזכויות שמורות.',
        legal: 'משפטי',
        privacy: 'מדיניות פרטיות',
        terms: 'תנאי שימוש',
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
        coreFocus: 'التركيز الأساسي',
        quarterlyGrowth: 'النمو الربعي',
        patentAssets: 'أصول البراءات',
      },
      applications: {
        industrial: 'التنفيذ الصناعي',
        titlePart1: 'التطبيقات',
        titlePart2: 'الاستراتيجية.',
        intro: 'توفر Adamas Materials اللبنات الأساسية للصناعات حيث لا يكون الفشل خياراً. تتيح شبكاتنا الاصطناعية أداءً يتجاوز الحدود التقليدية.',
        items: {
          photonics: { name: 'الفوتونيات', desc: 'ركائز لنوافذ الليزر والتعديل الضوئي.' },
          quantum: { name: 'الأبحاث الكمومية', desc: 'مراكز عيوب هندسية للتجارب القائمة على الدوران المغزلي.' },
          sensing: { name: 'الاستشعار', desc: 'عقد استشعار عالية الدقة للكشف المغناطيسي والحراري.' },
          thermal: { name: 'الإدارة الحرارية', desc: 'موزعات حرارية للالكترونيات ذات الكثافة العالية للطاقة.' },
          science: { name: 'علوم المواد التجريبية', desc: 'أبحاث أساسية في ديناميات الشبكات والفيزياء المتطرفة.' }
        }
      },
      home: {
        heroTitle: 'صياغة مستقبل التصنيع.',
        heroSubtitle: 'المورد الصناعي والعلمي الرائد للمواد المتقدمة عالية الأداء للبنية التحتية العالمية والتوليف الكمومي.',
        cta: 'طلب عرض سعر',
        positioningTitle: 'متخصص صناعي وعلمي',
        positioningSubtitle: 'جودة لا تضاهى في هندسة الشبكات الاصطناعية. بناء أساس العصر الصناعي القادم.',
        extremePerformance: 'أداء فائق.',
        solutionText: 'نحن متخصصون في تكنولوجيا الألماس الاصطناعي والمعادن المتقدمة للتطبيقات الصناعية. تركيزنا هو دفع حدود فيزياء المواد.',
        categories: {
          quantum: 'مواد الاستشعار الكمومي',
          thermal: 'الإدارة الحرارية',
          tooling: 'أدوات متخصصة',
          technical: 'معادن تقنية'
        },
        faq: {
          title: 'الأسئلة الشائعة',
          subtitle: 'الاستفسارات التشغيلية والتقنية المتعلقة بعمليات التوليف لدينا.',
          items: [
            {
              q: 'ما الذي يميز شبكتكم الاصطناعية عن المعادن الطبيعية؟',
              a: 'غالبًا ما تحتوي المعادن الطبيعية على شوائب لا يمكن التنبؤ بها. يتم تصنيع شبكاتنا الهندسية بدقة دون ذرية، مما يسمح بمستويات شغور محكومة ونقاء نظيري مطلوب للتطبيقات الكمومية وتطبيقات الطاقة العالية.'
            },
            {
              q: 'ما هي المواعيد النهائية المعتادة للطلبات المخصصة؟',
              a: 'تتوفر الدرجات الصناعية القياسية عادةً في غضون 2-4 أسابيع. يتطلب توليف HPHT المخصص أو المكونات البصرية المصنعة نانويًا عادةً من 8-12 أسبوعًا، اعتمادًا على تعقيد هندسة الشبكة.'
            },
            {
              q: 'هل توفرون مواد للمجوهرات أو الأزياء الاستهلاكية؟',
              a: 'لا. إن Adamas Materials هي مورد صناعي وعلمي بحت. نحن لا نشارك في قطاعات الرفاهية أو الأزياء الاستهلاكية.'
            },
            {
              q: 'كيف يتم التحقق من الجودة للتطبيقات المتطرفة؟',
              a: 'يخضع كل ما يعادل قيراط لتحليل متعدد الأطياف في منشأتنا في شارلوت. نحن نقدم شهادة مطابقة كاملة ووثائق سلسلة العهدة لجميع المكونات عالية الدقة.'
            }
          ]
        }
      },
      about: {
        heritage: 'تراث التصنيع',
        premise: 'تأسست Adamas Materials في عام 2026 بناءً على فرضية بسيطة: أن المرحلة التالية من التقدم البشري ستحددها مواد غير موجودة في الطبيعة.',
        valuesTitle: 'قيمنا',
        valuesText: 'نحن نعطي الأولوية للدقة العلمية على الضجيج التسويقي. نحن نؤمن بأن القيمة التجارية الحقيقية تبنى على أساس من التميز القابل للتحقق والموثوقية التشغيلية.',
        metrics: {
          founded: 'تأسست',
          hq: 'المقر الرئيسي',
          focus: 'التركيز',
          industrial: 'التصنيع الصناعي'
        }
      },
      investors: {
        stewardship: 'الإشراف المالي',
        growthMetrics: 'مقاييس النمو',
        revenueTrajectory: 'مسار الإيرادات',
        capexEfficiency: 'كفاءة الإنفاق الرأسمالي',
        ipValuation: 'تقييم الملكية الفكرية',
        portal: 'بوابة المستثمرين',
        confidential: 'الوصول إلى البيانات السرية يتطلب بيانات اعتماد تم التحقق منها.',
        requestAccess: 'طلب الوصول',
        capitalManagement: 'إدارة رأس المال',
        capitalText: 'نحن ندير رأس المال بنفس الدقة التي نطبقها على موادنا. نهجنا محافظ فيما يتعلق بالمخاطر وجريء فيما يتعلق بالتقدم العلمي.'
      },
      capabilities: {
        excellence: 'التميز الهندسي',
        titlePart1: 'القدرات',
        titlePart2: 'والعمليات.',
        intro: 'مرافقنا مجهزة بأنظمة الضغط العالي ودرجة الحرارة العالية (HPHT) الحاصلة على براءة اختراع، والقادرة على محاكاة الظروف في لب الأرض.',
        hpht: {
          title: 'تصنيع HPHT',
          text: 'تحكم دقيق في تكوين الشبكة الكربونية عند ضغوط تتجاوز 60،000 ضغط جوي.',
          items: ['ترسيب البخار الكيميائي', 'هندسة الشبكات', 'التحكم في التطعيم']
        },
        nano: {
          title: 'التصنيع النانوي',
          text: 'دقة دون الميكرون للمكونات التقنية المستخدمة في الحوسبة الكمومية والبصريات المتطرفة.',
          items: ['النقش بالليزر', 'التلميع بالحزمة الأيونية', 'رسم الخرائط ثلاثية الأبعاد']
        },
        comp: {
          title: 'الفيزياء الحاسوبية',
          text: 'نمذجة متقدمة لخصائص المواد قبل حدوث التصنيع، مما يقلل من وقت الوصول إلى السوق.',
          items: ['محاكاة DFT', 'تحسين التعلم الآلي', 'تحليل تناظر T']
        },
        supply: {
          title: 'تنسيق التوريد',
          text: 'لوجستيات شاملة للمعادن الحرجة، مما يضمن المصادر الأخلاقية والتسليم الموثوق.',
          items: ['تتبع البلوكشين', 'التدقيق الأخلاقي', 'الخدمات اللوجستية في الوقت المناسب']
        },
        precision: 'تصنيع عالي الدقة',
        qualityAssurance: 'ضمان الجودة',
        analysis: 'تحليل متعدد الأطياف في منشأتنا في شارلوت.',
        traceability: 'تتبع كامل لكل ما يعادل قيراط يتم إنتاجه.',
        purity: 'معيار النقاء',
        compliance: 'الامتثال'
      },
      rfq: {
        title: 'استفسارات المشاريع',
        framework: 'إطار فرعي لطلب عرض السعر',
        confidentiality: 'الوصول إلى البيانات السرية وتحديد نطاق المشروع.',
        communications: 'اتصالات',
        requestForm: 'نموذج الطلب'
      },
      positioning: {
        scientificTitle: 'التوجه العلمي',
        scientificText: 'نحن نركز على الأبحاث عالية الدقة والإنتاج الصناعي.',
        noConsumerTitle: 'صناعي بحت',
        noConsumerText: 'نحن لا نورد لقطاعات المجوهرات أو الأزياء الاستهلاكية.',
        rfqTitle: 'إطار فرعي لطلب عرض السعر',
        rfqText: 'نماذج تسعير قائمة على المشاريع تضمن السرية والدقة.',
      },
      footer: {
        copyright: '© 2026 Adamas Materials. جميع الحقوق محفوظة.',
        legal: 'قانوني',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
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
