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
        intro: 'CVD diamond brings extreme hardness, high thermal conductivity, and low thermal expansion to tooling, cooling, semiconductors, and research.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: 'Industrial',
        heroAccent: 'CVD Diamond.',
        heroSubtitle: 'Hardness for cutting tools. Thermal conductivity for data centers and power electronics. CVD materials for semiconductors and research.',
        cta: 'Request Quote',
        positioningTitle: 'CVD Diamond Supplier',
        positioningSubtitle: 'One process: CVD. Properties that matter: hardness, wear life, heat spreading, and materials for high-power electronics.',
        extremePerformance: 'Material',
        solutionText: 'We supply CVD diamond where performance is physical: cutting tools that last, heat spreaders for chips and data centers, and semiconductor parts that handle heat and voltage.',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: 'What We Do',
        titlePart1: 'Capabilities',
        titlePart2: '& Process.',
        intro: 'CVD diamond growth for applications that need hardness, heat spreading, or high-performance electronic materials.',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. All rights reserved.',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
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
        intro: 'CVD-алмаз даёт экстремальную твёрдость, высокую теплопроводность и низкое тепловое расширение для инструмента, охлаждения, полупроводников и науки.',
        items: {
          tooling: {
            name: 'Резцы и инструмент',
            desc: 'Твёрдость и износостойкость алмаза для пластин, точной обработки и долговечных промышленных режущих кромок.'
          },
          cooling: {
            name: 'Охлаждение дата-центров',
            desc: 'Теплоотводы и heat spreaders: высокая теплопроводность и низкое расширение для плотной электроники.'
          },
          semiconductors: {
            name: 'Полупроводники',
            desc: 'CVD-алмаз для тепловых узлов, подложек и силовой электроники — RF, оптоэлектроника и приборы, где Si и SiC уже не хватает.'
          },
          universities: {
            name: 'Университеты и лаборатории',
            desc: 'Заказные CVD-образцы для исследований тепловых и электронных свойств — от теплоотвода до подложек.'
          },
          technical: {
            name: 'Технические решения',
            desc: 'CVD по спецификации: тепловой менеджмент, износостойкие детали, пластины и другие чёткие инженерные задачи.'
          }
        }
      },
      home: {
        heroTitle: 'Промышленный',
        heroAccent: 'CVD-алмаз.',
        heroSubtitle: 'Твёрдость для резцов. Теплопроводность для дата-центров и силовой электроники. CVD-материалы для полупроводников и науки.',
        cta: 'Запросить предложение',
        positioningTitle: 'Поставщик CVD-алмаза',
        positioningSubtitle: 'Один процесс: CVD. Ключевые свойства: твёрдость, ресурс, теплоотвод и материалы для мощной электроники.',
        extremePerformance: 'Материал',
        solutionText: 'Поставляем CVD-алмаз там, где важна физика: резцы с ресурсом, теплоотводы для чипов и дата-центров, полупроводниковые узлы под тепло и напряжение.',
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
              a: 'CVD-алмаз и связанные технические решения. HPHT и другие методы синтеза сейчас не предлагаем.'
            },
            {
              q: 'Почему алмаз для охлаждения и полупроводников?',
              a: 'У алмаза очень высокая теплопроводность и низкое тепловое расширение. Широкая запрещённая зона и высокая подвижность носителей полезны для теплоотводов и мощной электроники — там, где Si или SiC уже на пределе.'
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
        premise: 'Основанная в 2026 году, Adamas Materials фокусируется на CVD-алмазе — твёрдость и износостойкость для инструмента, тепловые свойства для охлаждения и полупроводников.',
        valuesTitle: 'Как мы работаем',
        valuesText: 'Чёткий фокус: сначала CVD, сначала спецификация, без потребительской моды. Поставка и документация так же важны, как сам материал.',
        metrics: {
          founded: 'Основана',
          hq: 'Штаб-квартира',
          focus: 'Фокус',
          industrial: 'CVD-алмаз'
        }
      },
      investors: {
        stewardship: 'Финансовое управление',
        growthMetrics: 'Показатели роста',
        revenueTrajectory: 'Динамика выручки',
        capexEfficiency: 'Эффективность Capex',
        ipValuation: 'Оценка IP',
        portal: 'Портал инвестора',
        confidential: 'Доступ к конфиденциальным данным требует подтверждённых полномочий.',
        requestAccess: 'Запросить доступ',
        capitalManagement: 'Управление капиталом',
        capitalText: 'Мы вкладываемся в CVD-мощности и системы качества для промышленных и научных клиентов.'
      },
      capabilities: {
        excellence: 'Что мы делаем',
        titlePart1: 'Возможности',
        titlePart2: 'и процесс.',
        intro: 'Рост CVD-алмаза для задач, где нужны твёрдость, теплоотвод или материалы для мощной электроники.',
        cvd: {
          title: 'Рост CVD-алмаза',
          text: 'Химическое осаждение из газовой фазы для промышленных и исследовательских марок. Контролируемый рост под инструмент, тепло и полупроводники.',
          items: [
            'CVD-рост',
            'Выбор марки',
            'Контроль спецификации'
          ]
        },
        tooling: {
          title: 'Материалы для резцов',
          text: 'Экстремальная твёрдость и износостойкость для пластин, точной обработки и долговечных режущих кромок.',
          items: [
            'Заготовки вставок',
            'Износостойкость',
            'Точная обработка'
          ]
        },
        thermal: {
          title: 'Тепловой менеджмент',
          text: 'Высокая теплопроводность и низкое расширение для теплоотводов в дата-центрах, чипах, GaN-приборах и силовой электронике.',
          items: [
            'Теплоотводы',
            'Heat spreaders',
            'Дата-центры',
            'Силовая электроника'
          ]
        },
        custom: {
          title: 'Полупроводники и наука',
          text: 'CVD-алмаз для подложек, мощных RF и силовых приборов, университетских проектов — где важны тепло, напряжение и пределы материала.',
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
        purity: 'Стандарт чистоты',
        compliance: 'Соответствие'
      },
      rfq: {
        title: 'Запросы по проектам',
        framework: 'Рамки RFQ',
        confidentiality: 'Конфиденциальная проработка промышленных и научных проектов.',
        communications: 'СВЯЗЬ',
        requestForm: 'Форма запроса'
      },
      positioning: {
        scientificTitle: 'Фокус на CVD',
        scientificText: 'Один процесс: CVD-алмаз с упором на твёрдость, теплопроводность и электронные свойства.',
        noConsumerTitle: 'Только промышленность и наука',
        noConsumerText: 'Мы не поставляем ювелирные изделия и fashion.',
        rfqTitle: 'Понятный RFQ',
        rfqText: 'Опишите применение и спецификацию — получите практичное предложение.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Все права защищены.',
        legal: 'Правовая информация',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования'
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
        intro: 'Ми постачаємо CVD-діамант і технічні рішення для виробництва, охолодження, напівпровідників і науки.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: 'Промисловий',
        heroAccent: 'CVD-діамант.',
        heroSubtitle: 'Твердість для різців. Теплопровідність для дата-центрів і силової електроніки. CVD для напівпровідників і науки.',
        cta: 'Запитати пропозицію',
        positioningTitle: 'Постачальник CVD-діаманту',
        positioningSubtitle: 'Один процес: CVD. Твердість, знос, тепловідвід.',
        extremePerformance: 'Матеріал',
        solutionText: 'CVD-діамант для інструменту, тепловідводів і напівпровідникових задач.',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: 'Що ми робимо',
        titlePart1: 'Можливості',
        titlePart2: 'і процес.',
        intro: 'Наша робота побудована навколо росту CVD-діаманту та технічної підтримки для виробництва й досліджень.',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Усі права захищені.',
        legal: 'Правова інформація',
        privacy: 'Політика конфіденційності',
        terms: 'Умови використання'
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
        intro: 'Suministramos diamante CVD y soluciones técnicas para producción, refrigeración, semiconductores e investigación.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: 'Diamante',
        heroAccent: 'CVD industrial.',
        heroSubtitle: 'Dureza para herramientas. Conductividad térmica para data centers y electrónica de potencia. CVD para semiconductores e investigación.',
        cta: 'Solicitar cotización',
        positioningTitle: 'Proveedor de diamante CVD',
        positioningSubtitle: 'Un proceso: CVD. Dureza, desgaste y disipación de calor.',
        extremePerformance: 'Material',
        solutionText: 'Diamante CVD para herramientas, disipadores y aplicaciones de semiconductores.',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: 'Qué hacemos',
        titlePart1: 'Capacidades',
        titlePart2: 'y proceso.',
        intro: 'Nuestro trabajo se centra en el crecimiento de diamante CVD y el soporte técnico para producción e investigación.',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Todos los derechos reservados.',
        legal: 'Legal',
        privacy: 'Privacidad',
        terms: 'Términos'
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
        intro: 'Nous fournissons du diamant CVD et des solutions techniques pour la production, le refroidissement, les semi-conducteurs et la recherche.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: 'Diamant',
        heroAccent: 'CVD industriel.',
        heroSubtitle: 'Dureté pour l’outillage. Conductivité thermique pour data centers et électronique de puissance. CVD pour semi-conducteurs et recherche.',
        cta: 'Demander un devis',
        positioningTitle: 'Fournisseur de diamant CVD',
        positioningSubtitle: 'Un procédé : CVD. Dureté, usure et diffusion thermique.',
        extremePerformance: 'Matériau',
        solutionText: 'Diamant CVD pour outils, dissipateurs et semi-conducteurs.',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: 'Ce que nous faisons',
        titlePart1: 'Capacités',
        titlePart2: '& procédé.',
        intro: 'Notre activité repose sur la croissance de diamant CVD et le support technique pour la production et la recherche.',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Tous droits réservés.',
        legal: 'Mentions légales',
        privacy: 'Confidentialité',
        terms: 'Conditions'
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
        intro: 'Wir liefern CVD-Diamant und technische Lösungen für Fertigung, Kühlung, Halbleiter und Forschung.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: 'Industrieller',
        heroAccent: 'CVD-Diamant.',
        heroSubtitle: 'Härte für Schneidwerkzeuge. Wärmeleitfähigkeit für Rechenzentren und Leistungselektronik. CVD für Halbleiter und Forschung.',
        cta: 'Angebot anfragen',
        positioningTitle: 'CVD-Diamant-Lieferant',
        positioningSubtitle: 'Ein Prozess: CVD. Härte, Verschleiß, Wärmespreizung.',
        extremePerformance: 'Material',
        solutionText: 'CVD-Diamant für Werkzeuge, Heat Spreader und Halbleiteranwendungen.',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: 'Was wir tun',
        titlePart1: 'Fähigkeiten',
        titlePart2: '& Prozess.',
        intro: 'Unsere Arbeit basiert auf CVD-Diamantwachstum und technischer Unterstützung für Produktion und Forschung.',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. Alle Rechte vorbehalten.',
        legal: 'Rechtliches',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen'
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
        intro: '製造、冷却、半導体、研究向けにCVDダイヤモンドと技術ソリューションを提供します。',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: '産業用',
        heroAccent: 'CVDダイヤモンド。',
        heroSubtitle: '切削工具、データセンター冷却、半導体、研究向けのCVDダイヤモンドと技術ソリューション。',
        cta: '見積依頼',
        positioningTitle: 'CVDダイヤモンド供給',
        positioningSubtitle: '焦点は一つ：化学気相成長。明確な仕様。産業・研究用途のみ。',
        extremePerformance: '実務',
        solutionText: '工具、冷却、半導体、大学、カスタム案件向けにCVDダイヤモンドを成長・供給します。',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: '私たちが行うこと',
        titlePart1: '能力',
        titlePart2: 'とプロセス。',
        intro: 'CVDダイヤモンド成長と、生産・研究への実装を支える技術サポートが中心です。',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. All rights reserved.',
        legal: '法務',
        privacy: 'プライバシー',
        terms: '利用規約'
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
        intro: 'אנחנו מספקים יהלום CVD ופתרונות טכניים לייצור, קירור, מוליכים למחצה ומחקר.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: 'תעשייתי',
        heroAccent: 'יהלום CVD.',
        heroSubtitle: 'יהלום CVD ופתרונות טכניים לכלי חיתוך, קירור מרכזי נתונים, מוליכים למחצה ומחקר.',
        cta: 'בקשת הצעה',
        positioningTitle: 'ספק יהלום CVD',
        positioningSubtitle: 'מיקוד אחד: שקיעה כימית מפאזת גז. מפרטים ברורים.',
        extremePerformance: 'מעשי',
        solutionText: 'אנחנו מגדלים ומספקים יהלום CVD לכלי עבודה, קירור, מוליכים למחצה, אוניברסיטאות ופרויקטים מותאמים.',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: 'מה אנחנו עושים',
        titlePart1: 'יכולות',
        titlePart2: 'ותהליך.',
        intro: 'העבודה שלנו בנויה סביב גידול יהלום CVD ותמיכה טכנית לייצור ולמחקר.',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. כל הזכויות שמורות.',
        legal: 'משפטי',
        privacy: 'פרטיות',
        terms: 'תנאים'
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
        intro: 'نورد ماس CVD وحلولاً تقنية للإنتاج والتبريد وأشباه الموصلات والبحث.',
        items: {
          tooling: {
            name: 'Cutting tools',
            desc: 'Diamond’s hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.'
          },
          cooling: {
            name: 'Data center cooling',
            desc: 'Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.'
          },
          semiconductors: {
            name: 'Semiconductors',
            desc: 'CVD diamond for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.'
          },
          universities: {
            name: 'Universities & labs',
            desc: 'Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.'
          },
          technical: {
            name: 'Technical solutions',
            desc: 'Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.'
          }
        }
      },
      home: {
        heroTitle: 'صناعي',
        heroAccent: 'ماس CVD.',
        heroSubtitle: 'مواد ماس CVD وحلول تقنية لأدوات القطع وتبريد مراكز البيانات وأشباه الموصلات والبحث.',
        cta: 'طلب عرض سعر',
        positioningTitle: 'مورد ماس CVD',
        positioningSubtitle: 'تركيز واحد: الترسيب الكيميائي من البخار. مواصفات واضحة.',
        extremePerformance: 'عملي',
        solutionText: 'ننمو ونورد ماس CVD للأدوات والتبريد وأشباه الموصلات والجامعات والمشاريع المخصصة.',
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
              a: 'CVD diamond materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.'
            },
            {
              q: 'Why diamond for cooling and semiconductors?',
              a: 'Diamond combines very high thermal conductivity with low thermal expansion. It also offers a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.'
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
        premise: 'Founded in 2026, Adamas Materials focuses on CVD diamond for industrial and research use — leveraging hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.',
        valuesTitle: 'How We Work',
        valuesText: 'We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.',
        metrics: {
          founded: 'Founded',
          hq: 'HQ',
          focus: 'Focus',
          industrial: 'CVD Diamond'
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
        capitalText: 'We invest in CVD capacity and quality systems that support industrial and research customers.'
      },
      capabilities: {
        excellence: 'ما نفعله',
        titlePart1: 'القدرات',
        titlePart2: 'والعملية.',
        intro: 'عملنا مبني على نمو ماس CVD والدعم التقني للإنتاج والبحث.',
        cvd: {
          title: 'CVD Diamond Growth',
          text: 'Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.',
          items: [
            'CVD growth',
            'Grade selection',
            'Spec control'
          ]
        },
        tooling: {
          title: 'Cutting Tool Materials',
          text: 'Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.',
          items: [
            'Insert blanks',
            'Wear resistance',
            'Precision machining'
          ]
        },
        thermal: {
          title: 'Thermal Management',
          text: 'High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.',
          items: [
            'Heat sinks',
            'Heat spreaders',
            'Data centers',
            'Power electronics'
          ]
        },
        custom: {
          title: 'Semiconductors & Research',
          text: 'CVD diamond for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.',
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
        purity: 'Purity Standard',
        compliance: 'Compliance'
      },
      rfq: {
        title: 'Project Inquiries',
        framework: 'RFQ Framework',
        confidentiality: 'Confidential project scoping for industrial and research work.',
        communications: 'COMMUNICATIONS',
        requestForm: 'Request Form'
      },
      positioning: {
        scientificTitle: 'CVD Focus',
        scientificText: 'One core process: CVD diamond with hardness, thermal conductivity, and electronic performance in mind.',
        noConsumerTitle: 'Industrial & Research Only',
        noConsumerText: 'We do not supply jewelry or consumer fashion.',
        rfqTitle: 'Clear RFQ Process',
        rfqText: 'Share the application and specs. We respond with a practical proposal.'
      },
      footer: {
        copyright: '© 2026 Adamas Materials. جميع الحقوق محفوظة.',
        legal: 'قانوني',
        privacy: 'الخصوصية',
        terms: 'الشروط'
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
