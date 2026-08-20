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
        contact: 'Contact'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: 'Where We Work',
        titlePart1: 'Technical',
        titlePart2: 'Applications.',
        intro: 'CVD materials bring extreme hardness, high thermal conductivity, and low thermal expansion to tooling, cooling, semiconductors, and research.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'CVD grades for cutting inserts, blanks, and wear parts where edge life and dimensional stability decide cost per part. Extreme hardness (up to ~100 GPa) and wear resistance support hard machining, precision finishing, and long industrial edges under heat and abrasive load. We match form and grade to insert geometry, coating stacks, and production volume — from pilot lots to repeatable supply.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders for dense racks, accelerators, and power modules that outgrow conventional thermal paths. High thermal conductivity moves heat away from hot spots quickly; low thermal expansion keeps interfaces stable through thermal cycling. Typical work includes chip-level spreaders, module plates, and custom thermal parts for data centers, GaN/RF, and power electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD materials for thermal parts, substrates, and high-power electronics when Si and SiC reach heat or voltage limits. Wide bandgap and high carrier mobility support RF amplifiers, power devices, optoelectronics, and laser diode / LED thermal stacks. We supply wafers, thermal plates, and defined parts for process equipment, die-attach, and test — with specs tied to the device and duty cycle.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for academic and industrial labs studying thermal transport, electronic properties, and materials performance. Typical requests cover heat-spreading coupons, substrate studies, pilot thermal projects, and small-lot grades for measurement and device prototyping. Specs, documentation, and batch traceability are part of the delivery — sized for research through early pilot work.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams with a defined job: heat management, wear parts, wafers, coated solutions, or other fixed requirements. Share application, target properties, geometry, and volume; we respond with a practical grade and form proposal. Scope stays industrial and research only — clear RFQ, controlled growth, and documentation that matches the build.'
          }
        }
      },
      home: {
        heroTitle: 'Materials for',
        heroAccent: 'Heat, Power and Precision.',
        heroSubtitle: 'Hardness for cutting tools. Thermal conductivity for data centers and power electronics. CVD materials for semiconductors and research.',
        cta: 'Request Quote',
        positioningTitle: 'CVD Materials Supplier',
        positioningSubtitle: 'One process: CVD. Properties that matter: hardness, wear life, heat spreading, and materials for high-power electronics.',
        extremePerformance: 'Material',
        solutionText: 'We supply CVD materials where performance is physical: cutting tools that last, heat spreaders for chips and data centers, and semiconductor parts that handle heat and voltage.',
        categories: {
          tooling: 'Cutting tools',
          cooling: 'Data center cooling',
          semiconductors: 'Semiconductors',
          universities: 'Universities & labs'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: 'What We Do',
        titlePart1: 'Capabilities',
        titlePart2: '& Process.',
        intro: 'CVD growth for hardness, heat spreading, and high-performance electronic materials — with grade control, documentation, and supply that fits industrial and research work.',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. All rights reserved.',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О компании',
        investors: 'Инвесторам',
        capabilities: 'Возможности',
        applications: 'Применение',
        materials: 'Материалы',
        quality: 'Качество и процесс',
        glossary: 'Глоссарий',
        compliance: 'Соответствие',
        rfq: 'RFQ / NDA',
        contact: 'Контакты'
      },
      common: {
        learnMore: 'Подробнее',
        est2026: 'Основано в 2026',
        coreFocus: 'Фокус',
        solutions: 'Решения',
        quarterlyGrowth: 'Проекты',
        patentAssets: 'CVD'
      },
      applications: {
        industrial: 'Где мы работаем',
        titlePart1: 'Технические',
        titlePart2: 'применения.',
        intro: 'CVD-материалы дают экстремальную твёрдость, высокую теплопроводность и низкое тепловое расширение для инструмента, охлаждения, полупроводников и науки.',
        items: {
          tooling: {
            name: 'Резцы и инструмент',
            desc: 'CVD-марки для пластин, заготовок и износостойких деталей, где ресурс кромки и стабильность размеров определяют себестоимость детали. Экстремальная твёрдость (до ~100 ГПа) и износостойкость — для твёрдой обработки, точной доводки и долговечных промышленных кромок при нагреве и абразиве. Подбираем форму и марку под геометрию вставки, покрытие и объём — от пилотных партий до серийной поставки.'
          },
          cooling: {
            name: 'Охлаждение дата-центров',
            desc: 'Теплоотводы и heat spreaders для плотных стоек, ускорителей и силовых модулей, где обычные тепловые тракты уже не справляются. Высокая теплопроводность быстро уводит тепло от горячих зон; низкое тепловое расширение держит интерфейсы стабильными при термоциклах. Типичные задачи: чиповые spreaders, пластины модулей и заказные тепловые узлы для дата-центров, GaN/RF и силовой электроники.'
          },
          semiconductors: {
            name: 'Полупроводники',
            desc: 'CVD-материалы для тепловых узлов, подложек и мощной электроники — там, где Si и SiC упираются в тепло или напряжение. Широкая запрещённая зона и высокая подвижность носителей полезны для RF-усилителей, силовых приборов, оптоэлектроники и тепловых стеков лазерных диодов / LED. Поставляем пластины, тепловые пластины и заданные детали для оборудования, die-attach и теста — со спецификацией под прибор и режим работы.'
          },
          universities: {
            name: 'Университеты и лаборатории',
            desc: 'Заказные CVD-образцы для академических и промышленных лабораторий: теплоперенос, электронные свойства, поведение материала. Типичные запросы — купоны теплоотвода, исследования подложек, пилотные тепловые проекты и малые партии под измерения и прототипы приборов. Спецификация, документация и прослеживаемость партии входят в поставку — от лабораторных объёмов до раннего пилота.'
          },
          technical: {
            name: 'Технические решения',
            desc: 'CVD по спецификации для инженерных команд с ясной задачей: тепловой менеджмент, износостойкие детали, пластины, покрытия или другие фиксированные требования. Пришлите применение, целевые свойства, геометрию и объём — ответим практичным предложением по марке и форме. Только промышленность и наука: понятный RFQ, контролируемый рост и документация под сборку.'
          }
        }
      },
      home: {
        heroTitle: 'Материалы для',
        heroAccent: 'тепла, мощности и точности.',
        heroSubtitle: 'Твёрдость для резцов. Теплопроводность для дата-центров и силовой электроники. CVD-материалы для полупроводников и науки.',
        cta: 'Запросить предложение',
        positioningTitle: 'Поставщик CVD-материалов',
        positioningSubtitle: 'Один процесс: CVD. Ключевые свойства: твёрдость, ресурс, теплоотвод и материалы для мощной электроники.',
        extremePerformance: 'Материал',
        solutionText: 'Поставляем CVD-материалы там, где важна физика: резцы с ресурсом, теплоотводы для чипов и дата-центров, полупроводниковые узлы под тепло и напряжение.',
        categories: {
          tooling: 'Резцы',
          cooling: 'Охлаждение ДЦ',
          semiconductors: 'Полупроводники',
          universities: 'Университеты'
        },
        faq: {
          title: 'Частые вопросы',
          subtitle: 'Прямые ответы о нашей работе с CVD.',
          items: [
            {
              q: 'Что вы производите?',
              a: 'CVD-материалы и связанные технические решения. HPHT и другие методы синтеза сейчас не предлагаем.'
            },
            {
              q: 'Почему CVD для охлаждения и полупроводников?',
              a: 'У наших CVD-материалов очень высокая теплопроводность и низкое тепловое расширение. Широкая запрещённая зона и высокая подвижность носителей полезны для теплоотводов и мощной электроники — там, где Si или SiC уже на пределе.'
            },
            {
              q: 'Поставляете ли вы ювелирные изделия?',
              a: 'Нет. Только промышленные и исследовательские заказчики.'
            },
            {
              q: 'Как начать проект?',
              a: 'Отправьте RFQ с применением, спецификацией и объёмом. Обычно отвечаем в течение 48 рабочих часов.'
            }
          ]
        }
      },
      about: {
        heritage: 'О Adamas Materials',
        premise: 'Основанная в 2026 году, Adamas Materials фокусируется на CVD-материалах — твёрдость и износостойкость для инструмента, тепловые свойства для охлаждения и полупроводников.',
        valuesTitle: 'Как мы работаем',
        valuesText: 'Чёткий фокус: сначала CVD, сначала спецификация, без потребительской моды. Поставка и документация так же важны, как сам материал.',
        metrics: {
          founded: 'Основана',
          hq: 'Штаб-квартира',
          focus: 'Фокус',
          industrial: 'CVD-материалы'
        }
      },
      capabilities: {
        excellence: 'Что мы делаем',
        titlePart1: 'Возможности',
        titlePart2: 'и процесс.',
        intro: 'CVD-рост для твёрдости, теплоотвода и высокопроизводительных электронных материалов — с контролем марки, документацией и поставкой под промышленность и науку.',
        cvd: {
          title: 'CVD-рост',
          text: 'Химическое осаждение из газовой фазы для промышленных и исследовательских марок. Контролируем рост под инструмент, тепло и полупроводники — подбираем марку, толщину и форму под задачу. Спецификация и записи партии идут с материалом.',
          items: [
            'CVD-рост',
            'Выбор марки',
            'Контроль спецификации',
            'Записи партии'
          ]
        },
        tooling: {
          title: 'Материалы для резцов',
          text: 'Экстремальная твёрдость и износостойкость для пластин, заготовок и износостойких деталей. Поддерживаем твёрдую обработку и точные кромки, где ресурс и стабильность размеров определяют себестоимость — от пилота до серийной поставки.',
          items: [
            'Заготовки вставок',
            'Износостойкость',
            'Точная обработка',
            'Пилот — серия'
          ]
        },
        thermal: {
          title: 'Тепловой менеджмент',
          text: 'Высокая теплопроводность и низкое расширение для теплоотводов и heat spreaders в дата-центрах, чипах, GaN-приборах и силовой электронике. Чиповые spreaders, пластины модулей и заказные тепловые детали под заданный интерфейс и режим работы.',
          items: [
            'Теплоотводы',
            'Heat spreaders',
            'Дата-центры',
            'Силовая электроника'
          ]
        },
        custom: {
          title: 'Полупроводники и наука',
          text: 'CVD-материалы для подложек, мощных RF и силовых приборов, университетских проектов — где важны тепло, напряжение и пределы материала. Пластины, тепловые пластины и заданные детали для процесса, die-attach, теста и лабораторных исследований.',
          items: [
            'Подложки',
            'RF и power',
            'Университеты',
            'Заказные спецификации'
          ]
        },
        precision: 'Контроль CVD-процесса',
        qualityAssurance: 'Обеспечение качества',
        analysis: 'Проверки материала и документация на площадке в Charlotte.',
        traceability: 'Прослеживаемость партий для производства и исследований.',
        qaDetail: 'Входной и выходной контроль, Raman и смежные методы при необходимости, документация под производственный выпуск или лабораторное использование. Прослеживаемость заложена в партию — не добавляется постфактум.',
        purity: 'Стандарт чистоты',
        compliance: 'Соответствие'
      },
      investors: {
        stewardship: 'Инвесторам',
        growthMetrics: 'Фокус',
        revenueTrajectory: 'Рынки',
        capexEfficiency: 'Мощности',
        ipValuation: 'Процесс',
        portal: 'Доступ инвестора',
        confidential: 'Доступ к конфиденциальным данным требует подтверждённых полномочий.',
        requestAccess: 'Запросить доступ',
        capitalManagement: 'Распределение капитала',
        capitalText: 'Мы вкладываемся в CVD-мощности и системы качества для промышленных и научных клиентов.',
        intro: 'Adamas Materials наращивает CVD-мощности для инструмента, охлаждения, полупроводников и науки. Капитал идёт в контроль роста, метрологию и поставку — не в потребительскую моду.',
        focusText: 'Одно семейство процессов: CVD. Ясные рынки: резцы, тепловые детали для дата-центров, полупроводниковые материалы, университетские и инженерные проекты.',
        marketsText: 'Спрос связан с промышленной обработкой, тепловыми пределами плотных вычислений и мощной электроникой — там, где обычные материалы уже не справляются с теплом или износом.',
        accessText: 'Подтверждённые инвесторы могут запросить конфиденциальные материалы через RFQ. Публичные страницы намеренно остаются общими.'
      },
      materialsPage: {
        label: 'Каталог',
        title: 'CVD',
        accent: 'Материалы.',
        intro: 'Четыре линейки CVD для инструмента, теплового менеджмента, полупроводников и науки. Спецификации ниже — отправная точка; итоговая марка и форма определяются по RFQ.',
        specs: 'Спецификации',
        dataSheet: 'Скачать даташит',
        grade: 'Марка'
      },
      qualityPage: {
        label: 'Процесс',
        title: 'Качество и',
        accent: 'процесс.',
        intro: 'CVD-рост с понятным контролем качества. Спецификация, документация и повторяемый процесс — для промышленных партий и исследовательских образцов.',
        growthTitle: 'CVD-рост',
        growthText: 'Химическое осаждение из газовой фазы выращивает плёнку из газа процесса в контролируемых условиях. Это наш основной метод для инструментальных, тепловых, полупроводниковых и исследовательских марок.',
        fitTitle: 'Под задачу',
        fitText: 'Подбираем марку и форму под применение: износостойкий инструмент, теплоотводы для дата-центров и силовой электроники, полупроводниковые детали и университетские образцы.',
        checksTitle: 'Проверки QA',
        checksText: 'Партии можно проверять Raman и смежными методами для подтверждения качества кристалла и стабильности процесса. AFM и измерение финиша — когда важна шероховатость. Записи роста и контроля обеспечивают прослеживаемость.',
        systemTitle: 'Система качества',
        systemText: 'Площадка в Charlotte работает по структурированному подходу к качеству для промышленной и научной поставки. Фокус процесса — CVD-рост и поставка по спецификации.'
      },
      contactPage: {
        label: 'Связь',
        title: 'Контакты',
        accent: 'Charlotte, NC.',
        intro: 'Котировки, технические вопросы и логистика для промышленных и научных CVD-проектов.',
        generalTitle: 'Общие',
        generalText: 'Партнёрства, медиа и общие вопросы.',
        techTitle: 'Техника и наука',
        techText: 'Спецификации, резцы, тепловые детали, университетские проекты, инженерия.',
        opsTitle: 'Операции',
        opsText: 'Сроки, статус поставки и координация заказов.'
      },
      glossaryPage: {
        label: 'Справка',
        title: 'Технический',
        accent: 'глоссарий.',
        intro: 'Краткие определения CVD-материалов и применений, с которыми мы работаем.',
        search: 'Поиск термина...',
        empty: 'Совпадений не найдено.'
      },
      downloadsPage: {
        label: 'Файлы',
        title: 'Загрузки',
        accent: 'Десктоп и мобил.',
        intro: 'Текстовые даташиты и обзор компании — сохраните на компьютер или откройте на телефоне. Для режима приложения установите сайт из меню браузера.',
        overview: 'Обзор компании (EN)',
        overviewRu: 'Обзор компании (RU)',
        tooling: 'CVD резцы — даташит',
        thermal: 'CVD тепло — даташит',
        semi: 'CVD полупроводники — даташит',
        research: 'CVD исследования — даташит',
        installNote: 'Десктоп: Chrome/Edge → Install. Мобил: меню браузера → На экран «Домой».'
      },
      install: {
        desktopHint: 'Установите Adamas Materials на это устройство для быстрого возврата.',
        iosHint: 'На iPhone/iPad: Поделиться → На экран «Домой».',
        action: 'Установить',
        dismiss: 'Не сейчас'
      },
      rfq: {
        title: 'Запросы по проектам',
        framework: 'Рамки RFQ',
        confidentiality: 'Конфиденциальная проработка промышленных и научных проектов.',
        communications: 'СВЯЗЬ',
        requestForm: 'Форма запроса',
        inquiryLabel: 'Запрос',
        titlePart1: 'Запрос',
        titlePart2: 'предложения.',
        intro: 'Опишите применение, целевые спецификации и объём. Работаем с промышленными и научными заказчиками по CVD.',
        name: 'Имя',
        email: 'Корпоративный email',
        spec: 'Спецификация материала',
        details: 'Детали запроса',
        detailsPlaceholder: 'Применение, ключевые спецификации, количество и сроки...',
        received: 'Запрос получен.',
        receivedText: 'Конфиденциальность соблюдается. Команда свяжется в течение 48 рабочих часов.',
        another: 'Отправить ещё один запрос',
        sla: 'Ответ обычно в течение 48 рабочих часов.'
      },
      positioning: {
        scientificTitle: 'Фокус на CVD',
        scientificText: 'Один процесс: CVD с упором на твёрдость, теплопроводность и электронные свойства.',
        noConsumerTitle: 'Только промышленность и наука',
        noConsumerText: 'Мы не поставляем ювелирные изделия и fashion.',
        rfqTitle: 'Понятный RFQ',
        rfqText: 'Опишите применение и спецификацию — получите практичное предложение.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Все права защищены.',
        legal: 'Правовая информация',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        blurb: 'CVD-материалы: твёрдость для резцов, высокая теплопроводность для охлаждения и силовой электроники, материалы для полупроводников и науки.',
        downloads: 'Загрузки'
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
        quality: 'Якість і процес',
        glossary: 'Глосарій',
        compliance: 'Відповідність',
        rfq: 'RFQ / NDA',
        contact: 'Контакти'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: 'Де ми працюємо',
        titlePart1: 'Технічні',
        titlePart2: 'застосування.',
        intro: 'CVD-матеріали дають екстремальну твердість, високу теплопровідність і низьке теплове розширення для інструменту, охолодження, напівпровідників і науки.',
        items: {
          tooling: {
            name: 'Різці та інструмент',
            desc: 'CVD-марки для пластин, заготовок і зносостійких деталей, де ресурс кромки і стабільність розмірів визначають собівартість деталі. Екстремальна твердість (до ~100 ГПа) і зносостійкість — для твердої обробки, точного доведення і довговічних промислових кромок при нагріві та абразиві. Підбираємо форму і марку під геометрію вставки, покриття і обсяг — від пілотних партій до серійної поставки.'
          },
          cooling: {
            name: 'Охолодження дата-центрів',
            desc: 'Тепловідводи та heat spreaders для щільних стійок, прискорювачів і силових модулів, де звичайні теплові тракти вже не справляються. Висока теплопровідність швидко відводить тепло від гарячих зон; низьке теплове розширення тримає інтерфейси стабільними при термоциклах. Типові задачі: чипові spreaders, пластини модулів і замовні теплові вузли для дата-центрів, GaN/RF і силової електроніки.'
          },
          semiconductors: {
            name: 'Напівпровідники',
            desc: 'CVD-матеріали для теплових вузлів, підкладок і потужної електроніки — там, де Si і SiC впираються в тепло або напругу. Широка заборонена зона і висока рухливість носіїв корисні для RF-підсилювачів, силових приладів, оптоелектроніки та теплових стеків лазерних діодів / LED. Поставляємо пластини, теплові пластини і задані деталі для обладнання, die-attach і тесту — зі специфікацією під прилад і режим роботи.'
          },
          universities: {
            name: 'Університети та лабораторії',
            desc: 'Замовні CVD-зразки для академічних і промислових лабораторій: теплоперенесення, електронні властивості, поведінка матеріалу. Типові запити — купони тепловідводу, дослідження підкладок, пілотні теплові проєкти і малі партії під вимірювання та прототипи приладів. Специфікація, документація і простежуваність партії входять у поставку — від лабораторних обсягів до раннього пілота.'
          },
          technical: {
            name: 'Технічні рішення',
            desc: 'CVD за специфікацією для інженерних команд із ясною задачею: тепловий менеджмент, зносостійкі деталі, пластини, покриття або інші фіксовані вимоги. Надішліть застосування, цільові властивості, геометрію і обсяг — відповімо практичною пропозицією щодо марки і форми. Лише промисловість і наука: зрозумілий RFQ, контрольований ріст і документація під збірку.'
          }
        }
      },
      home: {
        heroTitle: 'Матеріали для',
        heroAccent: 'тепла, потужності та точності.',
        heroSubtitle: 'Твердість для різців. Теплопровідність для дата-центрів і силової електроніки. CVD для напівпровідників і науки.',
        cta: 'Запитати пропозицію',
        positioningTitle: 'Постачальник CVD-матеріалів',
        positioningSubtitle: 'Один процес: CVD. Твердість, знос, тепловідвід.',
        extremePerformance: 'Матеріал',
        solutionText: 'CVD-матеріали для інструменту, тепловідводів і напівпровідникових задач.',
        categories: {
          tooling: 'Різці',
          cooling: 'Охолодження ДЦ',
          semiconductors: 'Напівпровідники',
          universities: 'Університети'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: 'Що ми робимо',
        titlePart1: 'Можливості',
        titlePart2: 'і процес.',
        intro: 'Наша робота побудована навколо росту CVD-матеріалів та технічної підтримки для виробництва й досліджень.',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Усі права захищені.',
        legal: 'Правова інформація',
        privacy: 'Політика конфіденційності',
        terms: 'Умови використання',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
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
        quality: 'Calidad y proceso',
        glossary: 'Glosario',
        compliance: 'Cumplimiento',
        rfq: 'RFQ / NDA',
        contact: 'Contacto'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: 'Dónde trabajamos',
        titlePart1: 'Aplicaciones',
        titlePart2: 'técnicas.',
        intro: 'Los materiales CVD aportan dureza extrema, alta conductividad térmica y baja expansión térmica al utillaje, la refrigeración, los semiconductores y la investigación.',
        items: {
          tooling: {
            name: 'Herramientas de corte',
            desc: 'Grados CVD para insertos, blanks y piezas de desgaste donde la vida de filo y la estabilidad dimensional marcan el coste por pieza. Dureza extrema (hasta ~100 GPa) y resistencia al desgaste para mecanizado duro, acabado de precisión y filos industriales largos bajo calor y abrasión. Ajustamos forma y grado a la geometría del inserto, el stack de recubrimiento y el volumen — del lote piloto al suministro repetible.'
          },
          cooling: {
            name: 'Refrigeración de data centers',
            desc: 'Disipadores y heat spreaders para racks densos, aceleradores y módulos de potencia que superan las vías térmicas convencionales. Alta conductividad térmica aleja el calor de los puntos calientes; baja expansión térmica mantiene estables las interfaces en ciclado térmico. Trabajo típico: spreaders a nivel de chip, placas de módulo y piezas térmicas a medida para data centers, GaN/RF y electrónica de potencia.'
          },
          semiconductors: {
            name: 'Semiconductores',
            desc: 'Materiales CVD para piezas térmicas, sustratos y electrónica de alta potencia cuando Si y SiC alcanzan límites de calor o tensión. Banda prohibida ancha y alta movilidad de portadores para amplificadores RF, dispositivos de potencia, optoelectrónica y stacks térmicos de diodos láser / LED. Suministramos wafers, placas térmicas y piezas definidas para equipos de proceso, die-attach y test — con especificaciones ligadas al dispositivo y al ciclo de trabajo.'
          },
          universities: {
            name: 'Universidades y laboratorios',
            desc: 'Muestras CVD a medida para laboratorios académicos e industriales que estudian transporte térmico, propiedades electrónicas y comportamiento del material. Pedidos típicos: cupones de difusión de calor, estudios de sustrato, proyectos térmicos piloto y lotes pequeños para medición y prototipos. Especificación, documentación y trazabilidad de lote forman parte de la entrega — de volumen de laboratorio a piloto temprano.'
          },
          technical: {
            name: 'Soluciones técnicas',
            desc: 'Trabajo CVD por especificación para equipos de ingeniería con un trabajo definido: gestión térmica, piezas de desgaste, wafers, soluciones recubiertas u otros requisitos fijos. Indique aplicación, propiedades objetivo, geometría y volumen; respondemos con una propuesta práctica de grado y forma. Solo industrial e investigación — RFQ claro, crecimiento controlado y documentación alineada con el montaje.'
          }
        }
      },
      home: {
        heroTitle: 'Materiales para',
        heroAccent: 'calor, potencia y precisión.',
        heroSubtitle: 'Dureza para herramientas. Conductividad térmica para data centers y electrónica de potencia. CVD para semiconductores e investigación.',
        cta: 'Solicitar cotización',
        positioningTitle: 'Proveedor de materiales CVD',
        positioningSubtitle: 'Un proceso: CVD. Dureza, desgaste y disipación de calor.',
        extremePerformance: 'Material',
        solutionText: 'Materiales CVD para herramientas, disipadores y semiconductores.',
        categories: {
          tooling: 'Herramientas de corte',
          cooling: 'Refrigeración DC',
          semiconductors: 'Semiconductores',
          universities: 'Universidades'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: 'Qué hacemos',
        titlePart1: 'Capacidades',
        titlePart2: 'y proceso.',
        intro: 'Nuestro trabajo se centra en el crecimiento de materiales CVD y el soporte técnico para producción e investigación.',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Todos los derechos reservados.',
        legal: 'Legal',
        privacy: 'Privacidad',
        terms: 'Términos',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        investors: 'Investisseurs',
        capabilities: 'Capacités',
        applications: 'Applications',
        materials: 'Matériaux',
        quality: 'Qualité & procédé',
        glossary: 'Glossaire',
        compliance: 'Conformité',
        rfq: 'RFQ / NDA',
        contact: 'Contact'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: 'Où nous intervenons',
        titlePart1: 'Applications',
        titlePart2: 'techniques.',
        intro: 'Les matériaux CVD apportent une dureté extrême, une forte conductivité thermique et une faible dilatation aux outils, au refroidissement, aux semi-conducteurs et à la recherche.',
        items: {
          tooling: {
            name: 'Outils de coupe',
            desc: 'Nuances CVD pour plaquettes, blanks et pièces d’usure où la durée de coupe et la stabilité dimensionnelle fixent le coût par pièce. Dureté extrême (jusqu’à ~100 GPa) et résistance à l’usure pour usinage dur, finition de précision et arêtes industrielles durables sous chaleur et abrasion. Nous adaptons forme et nuance à la géométrie de la plaquette, aux empilements de revêtement et au volume — du lot pilote à la fourniture répétée.'
          },
          cooling: {
            name: 'Refroidissement des data centers',
            desc: 'Dissipateurs et heat spreaders pour baies denses, accélérateurs et modules de puissance qui dépassent les voies thermiques classiques. Haute conductivité thermique pour évacuer la chaleur des points chauds ; faible dilatation pour stabiliser les interfaces en cyclage thermique. Travaux typiques : spreaders au niveau puce, plaques de module et pièces thermiques sur mesure pour data centers, GaN/RF et électronique de puissance.'
          },
          semiconductors: {
            name: 'Semi-conducteurs',
            desc: 'Matériaux CVD pour pièces thermiques, substrats et électronique de puissance lorsque Si et SiC atteignent leurs limites de chaleur ou de tension. Large bande interdite et forte mobilité des porteurs pour amplificateurs RF, dispositifs de puissance, optoélectronique et stacks thermiques diodes laser / LED. Nous fournissons wafers, plaques thermiques et pièces définies pour équipements de process, die-attach et test — avec des specs liées au dispositif et au régime.'
          },
          universities: {
            name: 'Universités et laboratoires',
            desc: 'Échantillons CVD sur mesure pour laboratoires académiques et industriels étudiant le transport thermique, les propriétés électroniques et le comportement des matériaux. Demandes typiques : coupons de diffusion thermique, études de substrat, projets thermiques pilotes et petits lots pour mesures et prototypes. Spécification, documentation et traçabilité de lot font partie de la livraison — du volume labo au pilote précoce.'
          },
          technical: {
            name: 'Solutions techniques',
            desc: 'Travail CVD piloté par spécification pour des équipes d’ingénierie avec un besoin défini : gestion thermique, pièces d’usure, wafers, solutions revêtues ou autres exigences fixes. Indiquez application, propriétés cibles, géométrie et volume ; nous répondons par une proposition concrète de nuance et de forme. Industrie et recherche uniquement — RFQ clair, croissance contrôlée et documentation adaptée au montage.'
          }
        }
      },
      home: {
        heroTitle: 'Matériaux pour',
        heroAccent: 'chaleur, puissance et précision.',
        heroSubtitle: 'Dureté pour l’outillage. Conductivité thermique pour data centers et électronique de puissance. CVD pour semi-conducteurs et recherche.',
        cta: 'Demander un devis',
        positioningTitle: 'Fournisseur de matériaux CVD',
        positioningSubtitle: 'Un procédé : CVD. Dureté, usure et diffusion thermique.',
        extremePerformance: 'Matériau',
        solutionText: 'Matériaux CVD pour outils, dissipateurs et semi-conducteurs.',
        categories: {
          tooling: 'Outils de coupe',
          cooling: 'Refroidissement DC',
          semiconductors: 'Semi-conducteurs',
          universities: 'Universités'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: 'Ce que nous faisons',
        titlePart1: 'Capacités',
        titlePart2: '& procédé.',
        intro: 'Notre activité repose sur la croissance CVD et le support technique pour la production et la recherche.',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Tous droits réservés.',
        legal: 'Mentions légales',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Start',
        about: 'Über uns',
        investors: 'Investoren',
        capabilities: 'Fähigkeiten',
        applications: 'Anwendungen',
        materials: 'Materialien',
        quality: 'Qualität & Prozess',
        glossary: 'Glossar',
        compliance: 'Compliance',
        rfq: 'RFQ / NDA',
        contact: 'Kontakt'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: 'Wo wir arbeiten',
        titlePart1: 'Technische',
        titlePart2: 'Anwendungen.',
        intro: 'CVD-Materialien bringen extreme Härte, hohe Wärmeleitfähigkeit und geringe Wärmeausdehnung in Werkzeuge, Kühlung, Halbleiter und Forschung.',
        items: {
          tooling: {
            name: 'Schneidwerkzeuge',
            desc: 'CVD-Qualitäten für Schneidplatten, Blanks und Verschleißteile, bei denen Standzeit und Maßhaltigkeit die Kosten je Teil bestimmen. Extreme Härte (bis ~100 GPa) und Verschleißfestigkeit für Harzbearbeitung, Präzisionsfinish und langlebige industrielle Schneiden unter Wärme und Abrasion. Form und Qualität passen wir an Geometrie, Beschichtungsaufbau und Volumen an — vom Pilotlos bis zur wiederholbaren Lieferung.'
          },
          cooling: {
            name: 'Rechenzentrumskühlung',
            desc: 'Wärmesenken und Heat Spreader für dichte Racks, Beschleuniger und Leistungsmodule, die konventionelle Wärmepfade überfordern. Hohe Wärmeleitfähigkeit führt Wärme schnell von Hotspots ab; geringe Ausdehnung hält Interfaces bei Thermozyklen stabil. Typische Arbeiten: Chip-Spreader, Modulplatten und kundenspezifische Thermoteile für Rechenzentren, GaN/RF und Leistungselektronik.'
          },
          semiconductors: {
            name: 'Halbleiter',
            desc: 'CVD-Materialien für Thermoteile, Substrate und Hochleistungselektronik, wenn Si und SiC an Hitze- oder Spannungsgrenzen stoßen. Große Bandlücke und hohe Trägerbeweglichkeit für RF-Verstärker, Leistungsbauelemente, Optoelektronik und Thermostacks für Laserdioden / LEDs. Wir liefern Wafer, Thermoplatten und definierte Teile für Prozessanlagen, Die-Attach und Test — mit Specs zum Bauteil und Betriebszyklus.'
          },
          universities: {
            name: 'Universitäten und Labore',
            desc: 'Kundenspezifische CVD-Proben für akademische und industrielle Labore zu Wärmetransport, elektronischen Eigenschaften und Materialverhalten. Typische Anfragen: Heat-Spreading-Coupons, Substratstudien, thermische Pilotprojekte und Kleinserien für Messung und Geräteprototypen. Specs, Dokumentation und Chargenrückverfolgbarkeit gehören zur Lieferung — vom Laborvolumen bis zum frühen Pilot.'
          },
          technical: {
            name: 'Technische Lösungen',
            desc: 'Spezifikationsgetriebenes CVD für Engineering-Teams mit klarem Auftrag: Wärmemanagement, Verschleißteile, Wafer, beschichtete Lösungen oder andere feste Anforderungen. Anwendung, Zielwerte, Geometrie und Volumen mitteilen — wir antworten mit einem praktischen Vorschlag zu Qualität und Form. Nur Industrie und Forschung: klarer RFQ, kontrolliertes Wachstum und Dokumentation passend zum Aufbau.'
          }
        }
      },
      home: {
        heroTitle: 'Materialien für',
        heroAccent: 'Wärme, Leistung und Präzision.',
        heroSubtitle: 'Härte für Schneidwerkzeuge. Wärmeleitfähigkeit für Rechenzentren und Leistungselektronik. CVD für Halbleiter und Forschung.',
        cta: 'Angebot anfragen',
        positioningTitle: 'CVD-Materiallieferant',
        positioningSubtitle: 'Ein Prozess: CVD. Härte, Verschleiß, Wärmespreizung.',
        extremePerformance: 'Material',
        solutionText: 'CVD-Materialien für Werkzeuge, Heat Spreader und Halbleiteranwendungen.',
        categories: {
          tooling: 'Schneidwerkzeuge',
          cooling: 'RZ-Kühlung',
          semiconductors: 'Halbleiter',
          universities: 'Universitäten'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: 'Was wir tun',
        titlePart1: 'Fähigkeiten',
        titlePart2: '& Prozess.',
        intro: 'Unsere Arbeit basiert auf CVD-Wachstum und technischer Unterstützung für Produktion und Forschung.',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Alle Rechte vorbehalten.',
        legal: 'Rechtliches',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        about: '会社概要',
        investors: '投資家',
        capabilities: '能力',
        applications: '用途',
        materials: '材料',
        quality: '品質とプロセス',
        glossary: '用語集',
        compliance: 'コンプライアンス',
        rfq: 'RFQ / NDA',
        contact: 'お問い合わせ'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: '対応分野',
        titlePart1: '技術',
        titlePart2: '用途。',
        intro: 'CVD材料は、工具・冷却・半導体・研究向けに、極めて高い硬度、高い熱伝導率、低い熱膨張を提供します。',
        items: {
          tooling: {
            name: '切削工具',
            desc: '刃先寿命と寸法安定性が部品単価を左右するインサート、ブランク、耐摩耗部品向けCVDグレード。極端な硬度（最大約100 GPa）と耐摩耗性により、硬質加工、精密仕上げ、熱と摩耗下での長寿命エッジを支えます。インサート形状、コーティング構成、数量に合わせて形態とグレードを合わせ、パイロットから再現可能な供給まで対応します。'
          },
          cooling: {
            name: 'データセンター冷却',
            desc: '従来の熱経路を超える高密度ラック、アクセラレータ、パワーモジュール向けヒートシンク／ヒートスプレッダ。高い熱伝導率がホットスポットから熱を速やかに逃がし、低い熱膨張が熱サイクル下でも接合を安定させます。チップ級スプレッダ、モジュール板、データセンター／GaN・RF／パワー向けカスタム熱部品が典型です。'
          },
          semiconductors: {
            name: '半導体',
            desc: 'SiやSiCが熱または電圧の限界に達する場合の熱部品、基板、高出力エレクトロニクス向けCVD材料。広いバンドギャップと高いキャリア移動度は、RF増幅器、パワーデバイス、オプトエレクトロニクス、レーザーダイオード／LEDの熱スタックに適します。プロセス装置、ダイアタッチ、試験向けにウェハ、熱板、規定部品を、デバイスとデューティに合わせた仕様で供給します。'
          },
          universities: {
            name: '大学・研究室',
            desc: '熱輸送、電子物性、材料性能を研究する大学・産業ラボ向けカスタムCVDサンプル。熱拡散クーポン、基板研究、パイロット熱プロジェクト、計測・デバイス試作向け小ロットが典型です。仕様、文書、バッチ追跡を納品に含め、ラボ規模から初期パイロットまで対応します。'
          },
          technical: {
            name: '技術ソリューション',
            desc: '熱管理、耐摩耗部品、ウェハ、コーティングなど明確な要件を持つエンジニアリング向け仕様駆動CVD。用途、目標特性、形状、数量を共有いただければ、実用的なグレードと形態の提案で回答します。産業・研究のみ — 明確なRFQ、制御された成長、組立に合う文書。'
          }
        }
      },
      home: {
        heroTitle: 'Materials for',
        heroAccent: 'Heat, Power and Precision.',
        heroSubtitle: '切削工具、データセンター冷却、半導体、研究向けのCVD材料と技術ソリューション。',
        cta: '見積依頼',
        positioningTitle: 'CVD材料の供給',
        positioningSubtitle: '焦点は一つ：化学気相成長。明確な仕様。産業・研究用途のみ。',
        extremePerformance: '実務',
        solutionText: '工具、冷却、半導体、大学、カスタム案件向けにCVD材料を成長・供給します。',
        categories: {
          tooling: '切削工具',
          cooling: 'DC冷却',
          semiconductors: '半導体',
          universities: '大学・研究室'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: '私たちが行うこと',
        titlePart1: '能力',
        titlePart2: 'とプロセス。',
        intro: 'CVD材料成長と、生産・研究への実装を支える技術サポートが中心です。',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. All rights reserved.',
        legal: '法務',
        privacy: 'プライバシー',
        terms: '利用規約',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
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
        materials: 'חומרים',
        quality: 'איכות ותהליך',
        glossary: 'מילון',
        compliance: 'ציות',
        rfq: 'RFQ / NDA',
        contact: 'צור קשר'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: 'איפה אנחנו עובדים',
        titlePart1: 'יישומים',
        titlePart2: 'טכניים.',
        intro: 'חומרי CVD מביאים קשיות קיצונית, מוליכות תרמית גבוהה והתפשטות תרמית נמוכה לכלי עבודה, קירור, מוליכים למחצה ומחקר.',
        items: {
          tooling: {
            name: 'כלי חיתוך',
            desc: 'דרגות CVD לתוספות חיתוך, blanks וחלקי שחיקה שבהם חיי קצה ויציבות מימדית קובעים עלות ליחידה. קשיות קיצונית (עד ~100 GPa) ועמידות לשחיקה לתמיכה בעיבוד קשה, גימור מדויק וקצוות תעשייתיים ארוכים תחת חום ושחיקה. אנו מתאימים צורה ודרגה לגיאומטריית התוספת, שכבות ציפוי ונפח — ממנות פיילוט ועד אספקה חוזרת.'
          },
          cooling: {
            name: 'קירור מרכזי נתונים',
            desc: 'כיורי חום ו-heat spreaders לארונות צפופים, מאיצים ומודולי הספק שחורגים ממסלולי חום רגילים. מוליכות תרמית גבוהה מסיטה חום מנקודות חמות במהירות; התפשטות נמוכה שומרת על ממשקים יציבים במחזורים תרמיים. עבודה טיפוסית: spreaders ברמת שבב, לוחות מודול וחלקים תרמיים מותאמים למרכזי נתונים, GaN/RF ואלקטרוניקת הספק.'
          },
          semiconductors: {
            name: 'מוליכים למחצה',
            desc: 'חומרי CVD לחלקים תרמיים, מצעים ואלקטרוניקה בהספק גבוה כאשר Si ו-SiC מגיעים לגבולות חום או מתח. פער אסור רחב וניידות נושאים גבוהה תומכים במגברים RF, התקני הספק, אופטו־אלקטרוניקה ומערכות תרמיות לדיודות לייזר / LED. אנו מספקים פרוסות, לוחות תרמיים וחלקים מוגדרים לציוד תהליך, die-attach ובדיקה — עם מפרטים לפי התקן ומחזור העבודה.'
          },
          universities: {
            name: 'אוניברסיטאות ומעבדות',
            desc: 'דגימות CVD מותאמות למעבדות אקדמיות ותעשייתיות החוקרות הולכת חום, תכונות אלקטרוניות וביצועי חומר. בקשות טיפוסיות: קופונים לפיזור חום, מחקרי מצע, פרויקטי חום פיילוט ומנות קטנות למדידה ואבות־טיפוס. מפרט, תיעוד ומעקב אצווה הם חלק מהמסירה — מנפח מעבדה עד פיילוט מוקדם.'
          },
          technical: {
            name: 'פתרונות טכניים',
            desc: 'עבודת CVD מונעת מפרט לצוותי הנדסה עם משימה מוגדרת: ניהול חום, חלקי שחיקה, פרוסות, פתרונות מצופים או דרישות קבועות אחרות. שתפו יישום, תכונות יעד, גיאומטריה ונפח — נשיב בהצעה מעשית לדרגה וצורה. תעשייה ומחקר בלבד: RFQ ברור, גידול מבוקר ותיעוד שמתאים להרכבה.'
          }
        }
      },
      home: {
        heroTitle: 'חומרים ל',
        heroAccent: 'חום, הספק ודיוק.',
        heroSubtitle: 'חומרי CVD ופתרונות טכניים לכלי חיתוך, קירור מרכזי נתונים, מוליכים למחצה ומחקר.',
        cta: 'בקשת הצעה',
        positioningTitle: 'ספק חומרי CVD',
        positioningSubtitle: 'מיקוד אחד: שקיעה כימית מפאזת גז. מפרטים ברורים.',
        extremePerformance: 'מעשי',
        solutionText: 'אנחנו מגדלים ומספקים חומרי CVD לכלי עבודה, קירור, מוליכים למחצה, אוניברסיטאות ופרויקטים מותאמים.',
        categories: {
          tooling: 'כלי חיתוך',
          cooling: 'קירור DC',
          semiconductors: 'מוליכים למחצה',
          universities: 'אוניברסיטאות'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: 'מה אנחנו עושים',
        titlePart1: 'יכולות',
        titlePart2: 'ותהליך.',
        intro: 'העבודה שלנו בנויה סביב גידול חומרי CVD ותמיכה טכנית לייצור ולמחקר.',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. כל הזכויות שמורות.',
        legal: 'משפטי',
        privacy: 'פרטיות',
        terms: 'תנאים',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        investors: 'المستثمرون',
        capabilities: 'القدرات',
        applications: 'التطبيقات',
        materials: 'المواد',
        quality: 'الجودة والعملية',
        glossary: 'المسرد',
        compliance: 'الامتثال',
        rfq: 'RFQ / NDA',
        contact: 'اتصل بنا'
      },
      common: {
        learnMore: 'Learn More',
        est2026: 'Est. 2026',
        coreFocus: 'Core Focus',
        solutions: 'Solutions',
        quarterlyGrowth: 'Project Pipeline',
        patentAssets: 'CVD Focus'
      },
      applications: {
        industrial: 'أين نعمل',
        titlePart1: 'تطبيقات',
        titlePart2: 'تقنية.',
        intro: 'تمنح مواد CVD صلابة قصوى وموصلية حرارية عالية وتمددًا حراريًا منخفضًا للأدوات والتبريد وأشباه الموصلات والبحث.',
        items: {
          tooling: {
            name: 'أدوات القطع',
            desc: 'درجات CVD للإدخالات والفراغات وأجزاء التآكل حيث يحدد عمر الحافة واستقرار الأبعاد تكلفة القطعة. صلابة قصوى (حتى ~100 غيغاباسكال) ومقاومة للتآكل تدعم التشغيل الصلب والتشطيب الدقيق والحواف الصناعية طويلة العمر تحت الحرارة والكشط. نطابق الشكل والدرجة مع هندسة الإدخال وطبقات الطلاء والحجم — من دفعات تجريبية إلى توريد قابل للتكرار.'
          },
          cooling: {
            name: 'تبريد مراكز البيانات',
            desc: 'مشتتات حرارة وheat spreaders للرفوف الكثيفة والمسرّعات ووحدات القدرة التي تتجاوز المسارات الحرارية التقليدية. موصلية حرارية عالية تنقل الحرارة بعيدًا عن النقاط الساخنة بسرعة؛ وتمدد حراري منخفض يثبت الواجهات خلال الدورات الحرارية. العمل النموذجي: ناشرات على مستوى الرقاقة، ألواح وحدات، وأجزاء حرارية مخصصة لمراكز البيانات وGaN/RF وإلكترونيات القدرة.'
          },
          semiconductors: {
            name: 'أشباه الموصلات',
            desc: 'مواد CVD للأجزاء الحرارية والركائز والإلكترونيات عالية القدرة عندما يصل Si وSiC إلى حدود الحرارة أو الجهد. فجوة نطاق واسعة وحركية حاملات عالية تدعم مضخمات RF وأجهزة القدرة والإلكترونيات البصرية ومكدسات حرارية لثنائيات الليزر / LED. نوفر رقائق وألواحًا حرارية وأجزاء محددة لمعدات العملية وdie-attach والاختبار — بمواصفات مرتبطة بالجهاز ودورة التشغيل.'
          },
          universities: {
            name: 'الجامعات والمختبرات',
            desc: 'عينات CVD مخصصة للمختبرات الأكاديمية والصناعية التي تدرس النقل الحراري والخصائص الإلكترونية وأداء المواد. الطلبات النموذجية: كوبونات نشر الحرارة، دراسات الركيزة، مشاريع حرارية تجريبية، ولفات صغيرة للقياس والنماذج الأولية. المواصفات والتوثيق وتتبع الدفعة جزء من التسليم — من حجم المختبر إلى التجريب المبكر.'
          },
          technical: {
            name: 'حلول تقنية',
            desc: 'عمل CVD مدفوع بالمواصفات لفرق هندسية بمهمة محددة: إدارة الحرارة، أجزاء التآكل، الرقائق، حلول مطلية، أو متطلبات ثابتة أخرى. أرسلوا التطبيق والخصائص المستهدفة والهندسة والحجم؛ نرد باقتراح عملي للدرجة والشكل. الصناعة والبحث فقط — RFQ واضح، نمو مضبوط، وتوثيق يناسب التجميع.'
          }
        }
      },
      home: {
        heroTitle: 'مواد لـ',
        heroAccent: 'الحرارة والطاقة والدقة.',
        heroSubtitle: 'مواد CVD وحلول تقنية لأدوات القطع وتبريد مراكز البيانات وأشباه الموصلات والبحث.',
        cta: 'طلب عرض سعر',
        positioningTitle: 'مورد مواد CVD',
        positioningSubtitle: 'تركيز واحد: الترسيب الكيميائي من البخار. مواصفات واضحة.',
        extremePerformance: 'عملي',
        solutionText: 'ننمو ونورد مواد CVD للأدوات والتبريد وأشباه الموصلات والجامعات والمشاريع المخصصة.',
        categories: {
          tooling: 'أدوات القطع',
          cooling: 'تبريد DC',
          semiconductors: 'أشباه الموصلات',
          universities: 'الجامعات'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Straight answers about our CVD work.',
          items: [
            {
              q: 'What do you make?',
              a: 'CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why CVD for cooling and semiconductors?',
              a: 'Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
            },
            {
              q: 'Do you supply jewelry or consumer products?',
              a: 'No. We work only with industrial and research customers.'
            },
            {
              q: 'How do we start a project?',
              a: 'Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.'
            }
          ]
        }
      },
      about: {
        heritage: 'About Adamas Materials',
        premise: 'Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Materials'
        }
      },
      capabilities: {
        excellence: 'ما نفعله',
        titlePart1: 'القدرات',
        titlePart2: 'والعملية.',
        intro: 'عملنا مبني على نمو مواد CVD والدعم التقني للإنتاج والبحث.',
        cvd: {
          title: 'CVD Growth',
          text: 'Chemical vapor deposition for industrial and research grades. We control growth for tooling, thermal management, and semiconductor use — matching grade, thickness, and form to the job. Specs and batch records travel with the material.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control',
            'Batch records'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, blanks, and wear parts. We support hard machining and precision edges where edge life and dimensional stability drive cost per part — from pilot lots to repeatable supply.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining',
            'Pilot to series'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics. Chip-level spreaders, module plates, and custom thermal parts under defined interface and duty-cycle specs.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter. Wafers, thermal plates, and defined parts for process, die-attach, test, and lab studies.',
          items: [
            'Substrates',
            'RF & power',
            'University projects',
            'Custom specs'
          ]
        },
        precision: 'CVD Process Control',
        qualityAssurance: 'Quality Assurance',
        analysis: 'Material checks and documentation from our Charlotte facility.',
        traceability: 'Batch tracking for production and research lots.',
        qaDetail: 'Incoming and outgoing checks, Raman and related methods where required, and documentation that supports production release or lab use. Traceability is built into the lot — not added after the fact.',
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      investors: {
        stewardship: 'Investors',
        growthMetrics: 'Focus',
        revenueTrajectory: 'Markets',
        capexEfficiency: 'Capacity',
        ipValuation: 'Process',
        portal: 'Investor access',
        confidential: 'Confidential data access requires verified credentials.',
        requestAccess: 'Request Access',
        capitalManagement: 'Capital allocation',
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.',
        intro: 'Adamas Materials builds CVD capacity for tooling, cooling, semiconductors, and research. Capital goes into growth control, metrology, and delivery systems — not consumer fashion.',
        focusText: 'One process family: CVD. Clear markets: cutting tools, data-center thermal parts, semiconductor materials, and university / engineering projects.',
        marketsText: 'Demand tracks industrial machining, dense computing thermal limits, and high-power electronics where conventional materials fall short on heat or wear.',
        accessText: 'Verified investors can request confidential materials through RFQ. Public pages stay high-level by design.'
      },
      materialsPage: {
        label: 'Catalog',
        title: 'CVD',
        accent: 'Materials.',
        intro: 'Four CVD lines for tooling, thermal management, semiconductors, and research. Specs below are starting points — final grade and form follow the RFQ.',
        specs: 'Specifications',
        dataSheet: 'Download data sheet',
        grade: 'Grade'
      },
      qualityPage: {
        label: 'Process',
        title: 'Quality &',
        accent: 'Process.',
        intro: 'CVD growth with clear quality checks. Specs, documentation, and repeatable process control come first — for industrial lots and research samples.',
        growthTitle: 'CVD Growth',
        growthText: 'Chemical vapor deposition grows film from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.',
        fitTitle: 'Application Fit',
        fitText: 'We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.',
        checksTitle: 'QA Checks',
        checksText: 'Batches can be checked with Raman and related methods to confirm crystal quality and process consistency. AFM and finish measurements are used when surface roughness matters. Growth and inspection records keep lots traceable.',
        systemTitle: 'Quality System',
        systemText: 'Our Charlotte facility follows a structured quality management approach for industrial and research supply. Process focus stays on CVD growth and specification-driven delivery.'
      },
      contactPage: {
        label: 'Reach us',
        title: 'Contact',
        accent: 'Charlotte, NC.',
        intro: 'Quotes, technical questions, and logistics for industrial and research CVD projects.',
        generalTitle: 'General',
        generalText: 'Partnerships, media, and general questions.',
        techTitle: 'Technical & Research',
        techText: 'Specs, cutting tools, thermal parts, university projects, engineering.',
        opsTitle: 'Operations',
        opsText: 'Timelines, delivery status, and order coordination.'
      },
      glossaryPage: {
        label: 'Reference',
        title: 'Technical',
        accent: 'Glossary.',
        intro: 'Short definitions for CVD materials and the applications we support.',
        search: 'Search terminology...',
        empty: 'No matching terms found.'
      },
      downloadsPage: {
        label: 'Files',
        title: 'Downloads',
        accent: 'Desktop & mobile.',
        intro: 'Plain-text data sheets and a company overview you can save on desktop or open on a phone. For an app-like experience, install the site from your browser.',
        overview: 'Company overview (EN)',
        overviewRu: 'Company overview (RU)',
        tooling: 'CVD cutting tools — data sheet',
        thermal: 'CVD thermal management — data sheet',
        semi: 'CVD semiconductors — data sheet',
        research: 'CVD research — data sheet',
        installNote: 'Desktop: Chrome/Edge → Install app. Mobile: browser menu → Add to Home Screen.'
      },
      install: {
        desktopHint: 'Install Adamas Materials on this device for faster return visits.',
        iosHint: 'On iPhone/iPad: Share → Add to Home Screen for a mobile app icon.',
        action: 'Install',
        dismiss: 'Not now'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form',
        inquiryLabel: 'Inquiry',
        titlePart1: 'Request for',
        titlePart2: 'Proposal.',
        intro: 'Tell us the application, target specs, and volume. We work with industrial and research customers on CVD materials projects.',
        name: 'Full Name',
        email: 'Corporate Email',
        spec: 'Material Specification',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Application, key specs, quantity, and timeline...',
        received: 'Inquiry Received.',
        receivedText: 'Professional discretion is maintained. Our operations team will contact you within 48 business hours.',
        another: 'Send another inquiry',
        sla: 'Expect a response within 48 business hours.'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. جميع الحقوق محفوظة.',
        legal: 'قانوني',
        privacy: 'الخصوصية',
        terms: 'الشروط',
        blurb: 'CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.',
        downloads: 'Downloads'
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
