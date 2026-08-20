#!/usr/bin/env python3
"""Generate simplified CVD-focused i18n.ts for all locales."""

from pathlib import Path

# Base English content
EN = {
  "nav": {
    "home": "Home",
    "about": "About",
    "investors": "Investors",
    "capabilities": "Capabilities",
    "applications": "Applications",
    "materials": "Materials",
    "quality": "Quality & Process",
    "glossary": "Glossary",
    "compliance": "Compliance",
    "rfq": "RFQ / NDA Request",
    "contact": "Contact",
  },
  "common": {
    "learnMore": "Learn More",
    "est2026": "Est. 2026",
    "coreFocus": "Core Focus",
    "solutions": "Solutions",
    "quarterlyGrowth": "Project Pipeline",
    "patentAssets": "CVD Focus",
  },
  "applications": {
    "industrial": "Where We Work",
    "titlePart1": "Technical",
    "titlePart2": "Applications.",
    "intro": "CVD materials bring extreme hardness, high thermal conductivity, and low thermal expansion to tooling, cooling, semiconductors, and research.",
    "items": {
      "tooling": {
        "name": "Cutting tools",
        "desc": "Extreme hardness and wear resistance for cutting inserts, precision machining, and durable industrial edges.",
      },
      "cooling": {
        "name": "Data center cooling",
        "desc": "Heat sinks and heat spreaders that move heat fast — high thermal conductivity with low thermal expansion for dense electronics.",
      },
      "semiconductors": {
        "name": "Semiconductors",
        "desc": "CVD materials for thermal parts, substrates, and high-power electronics — including RF, optoelectronics, and power devices where Si and SiC fall short.",
      },
      "universities": {
        "name": "Universities & labs",
        "desc": "Custom CVD samples for research on thermal, electronic, and materials performance — from heat spreading to substrate studies.",
      },
      "technical": {
        "name": "Technical solutions",
        "desc": "Spec-driven CVD work for engineering teams: heat management, wear parts, wafers, and other defined technical needs.",
      },
    },
  },
  "home": {
    "heroTitle": "Materials for",
    "heroAccent": "Heat, Power and Precision.",
    "heroSubtitle": "Hardness for cutting tools. Thermal conductivity for data centers and power electronics. CVD materials for semiconductors and research.",
    "cta": "Request Quote",
    "positioningTitle": "CVD Materials Supplier",
    "positioningSubtitle": "One process: CVD. Properties that matter: hardness, wear life, heat spreading, and materials for high-power electronics.",
    "extremePerformance": "Material",
    "solutionText": "We supply CVD materials where performance is physical: cutting tools that last, heat spreaders for chips and data centers, and semiconductor parts that handle heat and voltage.",
    "categories": {
      "tooling": "Cutting tools",
      "cooling": "Data center cooling",
      "semiconductors": "Semiconductors",
      "universities": "Universities & labs",
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "subtitle": "Straight answers about our CVD work.",
      "items": [
        {
          "q": "What do you make?",
          "a": "CVD materials and related technical solutions. We do not offer HPHT or other synthesis routes at this time.",
        },
        {
          "q": "Why CVD for cooling and semiconductors?",
          "a": "Our CVD materials combine very high thermal conductivity with low thermal expansion. They also offer a wide bandgap and high carrier mobility — useful for heat sinks, heat spreaders, and high-power electronics compared with Si or SiC in demanding cases.",
        },
        {
          "q": "Do you supply jewelry or consumer products?",
          "a": "No. We work only with industrial and research customers.",
        },
        {
          "q": "How do we start a project?",
          "a": "Send an RFQ with the application, target specs, and volume. We typically respond within 48 business hours.",
        },
      ],
    },
  },
  "about": {
    "heritage": "About Adamas Materials",
    "premise": "Founded in 2026, Adamas Materials focuses on CVD materials for industrial and research use — hardness, wear resistance, and thermal performance for tools, cooling, and semiconductors.",
    "valuesTitle": "How We Work",
    "valuesText": "We keep the scope clear: CVD first, specs first, no consumer fashion. Delivery and documentation matter as much as the material.",
    "metrics": {
      "founded": "Founded",
      "hq": "HQ",
      "focus": "Focus",
      "industrial": "CVD Materials",
    },
  },
  "investors": {
    "stewardship": "Financial Stewardship",
    "growthMetrics": "Growth Metrics",
    "revenueTrajectory": "Revenue Trajectory",
    "capexEfficiency": "Capex Efficiency",
    "ipValuation": "IP Valuation",
    "portal": "Investor Portal",
    "confidential": "Confidential data access requires verified credentials.",
    "requestAccess": "Request Access",
    "capitalManagement": "Capital Management",
    "capitalText": "We invest in CVD capacity and quality systems that support industrial and research customers.",
  },
  "capabilities": {
    "excellence": "What We Do",
    "titlePart1": "Capabilities",
    "titlePart2": "& Process.",
    "intro": "CVD growth for applications that need hardness, heat spreading, or high-performance electronic materials.",
    "cvd": {
      "title": "CVD Growth",
      "text": "Chemical vapor deposition for industrial and research grades. Controlled growth for tooling, thermal management, and semiconductor use.",
      "items": ["CVD growth", "Grade selection", "Spec control"],
    },
    "tooling": {
      "title": "Cutting Tool Materials",
      "text": "Extreme hardness and wear resistance for cutting inserts, precision machining, and long-life industrial edges.",
      "items": ["Insert blanks", "Wear resistance", "Precision machining"],
    },
    "thermal": {
      "title": "Thermal Management",
      "text": "High thermal conductivity and low expansion for heat sinks and heat spreaders in data centers, chips, GaN devices, and power electronics.",
      "items": ["Heat sinks", "Heat spreaders", "Data centers", "Power electronics"],
    },
    "custom": {
      "title": "Semiconductors & Research",
      "text": "CVD materials for substrates, high-power RF and power devices, and university projects — where heat, voltage, and material limits matter.",
      "items": ["Substrates", "RF & power", "University projects", "Custom specs"],
    },
    "precision": "CVD Process Control",
    "qualityAssurance": "Quality Assurance",
    "analysis": "Material checks and documentation from our Charlotte facility.",
    "traceability": "Batch tracking for production and research lots.",
    "purity": "Purity Standard",
    "compliance": "Compliance",
  },
  "rfq": {
    "title": "Project Inquiries",
    "framework": "RFQ Framework",
    "confidentiality": "Confidential project scoping for industrial and research work.",
    "communications": "COMMUNICATIONS",
    "requestForm": "Request Form",
  },
  "positioning": {
    "scientificTitle": "CVD Focus",
    "scientificText": "One core process: CVD with hardness, thermal conductivity, and electronic performance in mind.",
    "noConsumerTitle": "Industrial & Research Only",
    "noConsumerText": "We do not supply jewelry or consumer fashion.",
    "rfqTitle": "Clear RFQ Process",
    "rfqText": "Share the application and specs. We respond with a practical proposal.",
  },
  "footer": {
    "copyright": "© 2026 Adamas Materials. All rights reserved.",
    "legal": "Legal",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "blurb": "CVD materials: hardness for cutting tools, high thermal conductivity for cooling and power electronics, materials for semiconductors and research.",
  },
}

# Translations: only values that differ from EN structure (full dicts per lang)
TRANSLATIONS = {
  "ru": {
    "nav": {
      "home": "Главная", "about": "О компании", "investors": "Инвесторам", "capabilities": "Возможности",
      "applications": "Применение", "materials": "Материалы", "quality": "Качество и процесс",
      "glossary": "Глоссарий", "compliance": "Соответствие", "rfq": "RFQ / NDA", "contact": "Контакты",
    },
    "common": {
      "learnMore": "Подробнее", "est2026": "Основано в 2026", "coreFocus": "Фокус", "solutions": "Решения",
      "quarterlyGrowth": "Проекты", "patentAssets": "CVD",
    },
    "applications": {
      "industrial": "Где мы работаем", "titlePart1": "Технические", "titlePart2": "применения.",
      "intro": "CVD-материалы дают экстремальную твёрдость, высокую теплопроводность и низкое тепловое расширение для инструмента, охлаждения, полупроводников и науки.",
      "items": {
        "tooling": {"name": "Резцы и инструмент", "desc": "Экстремальная твёрдость и износостойкость для пластин, точной обработки и долговечных промышленных режущих кромок."},
        "cooling": {"name": "Охлаждение дата-центров", "desc": "Теплоотводы и heat spreaders: высокая теплопроводность и низкое расширение для плотной электроники."},
        "semiconductors": {"name": "Полупроводники", "desc": "CVD-материалы для тепловых узлов, подложек и силовой электроники — RF, оптоэлектроника и приборы, где Si и SiC уже не хватает."},
        "universities": {"name": "Университеты и лаборатории", "desc": "Заказные CVD-образцы для исследований тепловых и электронных свойств — от теплоотвода до подложек."},
        "technical": {"name": "Технические решения", "desc": "CVD по спецификации: тепловой менеджмент, износостойкие детали, пластины и другие чёткие инженерные задачи."},
      },
    },
    "home": {
      "heroTitle": "Материалы для", "heroAccent": "тепла, мощности и точности.",
      "heroSubtitle": "Твёрдость для резцов. Теплопроводность для дата-центров и силовой электроники. CVD-материалы для полупроводников и науки.",
      "cta": "Запросить предложение", "positioningTitle": "Поставщик CVD-материалов",
      "positioningSubtitle": "Один процесс: CVD. Ключевые свойства: твёрдость, ресурс, теплоотвод и материалы для мощной электроники.",
      "extremePerformance": "Материал",
      "solutionText": "Поставляем CVD-материалы там, где важна физика: резцы с ресурсом, теплоотводы для чипов и дата-центров, полупроводниковые узлы под тепло и напряжение.",
      "categories": {
        "tooling": "Резцы", "cooling": "Охлаждение ДЦ", "semiconductors": "Полупроводники", "universities": "Университеты",
      },
      "faq": {
        "title": "Частые вопросы", "subtitle": "Прямые ответы о нашей работе с CVD.",
        "items": [
          {"q": "Что вы производите?", "a": "CVD-материалы и связанные технические решения. HPHT и другие методы синтеза сейчас не предлагаем."},
          {"q": "Почему CVD для охлаждения и полупроводников?", "a": "У наших CVD-материалов очень высокая теплопроводность и низкое тепловое расширение. Широкая запрещённая зона и высокая подвижность носителей полезны для теплоотводов и мощной электроники — там, где Si или SiC уже на пределе."},
          {"q": "Поставляете ли вы ювелирные изделия?", "a": "Нет. Только промышленные и исследовательские заказчики."},
          {"q": "Как начать проект?", "a": "Отправьте RFQ с применением, спецификацией и объёмом. Обычно отвечаем в течение 48 рабочих часов."},
        ],
      },
    },
    "about": {
      "heritage": "О Adamas Materials",
      "premise": "Основанная в 2026 году, Adamas Materials фокусируется на CVD-материалах — твёрдость и износостойкость для инструмента, тепловые свойства для охлаждения и полупроводников.",
      "valuesTitle": "Как мы работаем",
      "valuesText": "Чёткий фокус: сначала CVD, сначала спецификация, без потребительской моды. Поставка и документация так же важны, как сам материал.",
      "metrics": {"founded": "Основана", "hq": "Штаб-квартира", "focus": "Фокус", "industrial": "CVD-материалы"},
    },
    "investors": {
      "stewardship": "Финансовое управление", "growthMetrics": "Показатели роста", "revenueTrajectory": "Динамика выручки",
      "capexEfficiency": "Эффективность Capex", "ipValuation": "Оценка IP", "portal": "Портал инвестора",
      "confidential": "Доступ к конфиденциальным данным требует подтверждённых полномочий.", "requestAccess": "Запросить доступ",
      "capitalManagement": "Управление капиталом",
      "capitalText": "Мы вкладываемся в CVD-мощности и системы качества для промышленных и научных клиентов.",
    },
    "capabilities": {
      "excellence": "Что мы делаем", "titlePart1": "Возможности", "titlePart2": "и процесс.",
      "intro": "CVD-рост для задач, где нужны твёрдость, теплоотвод или материалы для мощной электроники.",
      "cvd": {"title": "CVD-рост", "text": "Химическое осаждение из газовой фазы для промышленных и исследовательских марок. Контролируемый рост под инструмент, тепло и полупроводники.", "items": ["CVD-рост", "Выбор марки", "Контроль спецификации"]},
      "tooling": {"title": "Материалы для резцов", "text": "Экстремальная твёрдость и износостойкость для пластин, точной обработки и долговечных режущих кромок.", "items": ["Заготовки вставок", "Износостойкость", "Точная обработка"]},
      "thermal": {"title": "Тепловой менеджмент", "text": "Высокая теплопроводность и низкое расширение для теплоотводов в дата-центрах, чипах, GaN-приборах и силовой электронике.", "items": ["Теплоотводы", "Heat spreaders", "Дата-центры", "Силовая электроника"]},
      "custom": {"title": "Полупроводники и наука", "text": "CVD-материалы для подложек, мощных RF и силовых приборов, университетских проектов — где важны тепло, напряжение и пределы материала.", "items": ["Подложки", "RF и power", "Университеты", "Заказные спецификации"]},
      "precision": "Контроль CVD-процесса", "qualityAssurance": "Обеспечение качества",
      "analysis": "Проверки материала и документация на площадке в Charlotte.",
      "traceability": "Прослеживаемость партий для производства и исследований.",
      "purity": "Стандарт чистоты", "compliance": "Соответствие",
    },
    "rfq": {
      "title": "Запросы по проектам", "framework": "Рамки RFQ",
      "confidentiality": "Конфиденциальная проработка промышленных и научных проектов.",
      "communications": "СВЯЗЬ", "requestForm": "Форма запроса",
    },
    "positioning": {
      "scientificTitle": "Фокус на CVD", "scientificText": "Один процесс: CVD с упором на твёрдость, теплопроводность и электронные свойства.",
      "noConsumerTitle": "Только промышленность и наука", "noConsumerText": "Мы не поставляем ювелирные изделия и fashion.",
      "rfqTitle": "Понятный RFQ", "rfqText": "Опишите применение и спецификацию — получите практичное предложение.",
    },
    "footer": {
      "copyright": "© 2026 Adamas Materials. Все права защищены.",
      "legal": "Правовая информация", "privacy": "Политика конфиденциальности", "terms": "Условия использования",
      "blurb": "CVD-материалы: твёрдость для резцов, высокая теплопроводность для охлаждения и силовой электроники, материалы для полупроводников и науки.",
    },
  },
}

# Lightweight locale overlays (nav + key marketing). Fallback to EN for missing deep keys via merge.
LIGHT = {
  "uk": {
    "nav": {"home": "Головна", "about": "Про нас", "investors": "Інвесторам", "capabilities": "Можливості", "applications": "Застосування", "materials": "Матеріали", "quality": "Якість і процес", "glossary": "Глосарій", "compliance": "Відповідність", "rfq": "RFQ / NDA", "contact": "Контакти"},
    "home": {
      "heroTitle": "Матеріали для", "heroAccent": "тепла, потужності та точності.",
      "heroSubtitle": "Твердість для різців. Теплопровідність для дата-центрів і силової електроніки. CVD для напівпровідників і науки.",
      "cta": "Запитати пропозицію", "positioningTitle": "Постачальник CVD-матеріалів",
      "positioningSubtitle": "Один процес: CVD. Твердість, знос, тепловідвід.",
      "extremePerformance": "Матеріал",
      "solutionText": "CVD-матеріали для інструменту, тепловідводів і напівпровідникових задач.",
      "categories": {"tooling": "Різці", "cooling": "Охолодження ДЦ", "semiconductors": "Напівпровідники", "universities": "Університети"},
    },
    "applications": {
      "industrial": "Де ми працюємо", "titlePart1": "Технічні", "titlePart2": "застосування.",
      "intro": "Ми постачаємо CVD-матеріали і технічні рішення для виробництва, охолодження, напівпровідників і науки.",
    },
    "capabilities": {
      "excellence": "Що ми робимо", "titlePart1": "Можливості", "titlePart2": "і процес.",
      "intro": "Наша робота побудована навколо росту CVD-матеріалів та технічної підтримки для виробництва й досліджень.",
    },
    "footer": {"copyright": "© 2026 Adamas Materials. Усі права захищені.", "legal": "Правова інформація", "privacy": "Політика конфіденційності", "terms": "Умови використання"},
  },
  "es": {
    "nav": {"home": "Inicio", "about": "Nosotros", "investors": "Inversores", "capabilities": "Capacidades", "applications": "Aplicaciones", "materials": "Materiales", "quality": "Calidad y proceso", "glossary": "Glosario", "compliance": "Cumplimiento", "rfq": "RFQ / NDA", "contact": "Contacto"},
    "home": {
      "heroTitle": "Materiales para", "heroAccent": "calor, potencia y precisión.",
      "heroSubtitle": "Dureza para herramientas. Conductividad térmica para data centers y electrónica de potencia. CVD para semiconductores e investigación.",
      "cta": "Solicitar cotización", "positioningTitle": "Proveedor de materiales CVD",
      "positioningSubtitle": "Un proceso: CVD. Dureza, desgaste y disipación de calor.",
      "extremePerformance": "Material",
      "solutionText": "Materiales CVD para herramientas, disipadores y semiconductores.",
      "categories": {"tooling": "Herramientas de corte", "cooling": "Refrigeración DC", "semiconductors": "Semiconductores", "universities": "Universidades"},
    },
    "applications": {
      "industrial": "Dónde trabajamos", "titlePart1": "Aplicaciones", "titlePart2": "técnicas.",
      "intro": "Suministramos materiales CVD y soluciones técnicas para producción, refrigeración, semiconductores e investigación.",
    },
    "capabilities": {
      "excellence": "Qué hacemos", "titlePart1": "Capacidades", "titlePart2": "y proceso.",
      "intro": "Nuestro trabajo se centra en el crecimiento de materiales CVD y el soporte técnico para producción e investigación.",
    },
    "footer": {"copyright": "© 2026 Adamas Materials. Todos los derechos reservados.", "legal": "Legal", "privacy": "Privacidad", "terms": "Términos"},
  },
  "fr": {
    "nav": {"home": "Accueil", "about": "À propos", "investors": "Investisseurs", "capabilities": "Capacités", "applications": "Applications", "materials": "Matériaux", "quality": "Qualité & procédé", "glossary": "Glossaire", "compliance": "Conformité", "rfq": "RFQ / NDA", "contact": "Contact"},
    "home": {
      "heroTitle": "Matériaux pour", "heroAccent": "chaleur, puissance et précision.",
      "heroSubtitle": "Dureté pour l’outillage. Conductivité thermique pour data centers et électronique de puissance. CVD pour semi-conducteurs et recherche.",
      "cta": "Demander un devis", "positioningTitle": "Fournisseur de matériaux CVD",
      "positioningSubtitle": "Un procédé : CVD. Dureté, usure et diffusion thermique.",
      "extremePerformance": "Matériau",
      "solutionText": "Matériaux CVD pour outils, dissipateurs et semi-conducteurs.",
      "categories": {"tooling": "Outils de coupe", "cooling": "Refroidissement DC", "semiconductors": "Semi-conducteurs", "universities": "Universités"},
    },
    "applications": {
      "industrial": "Où nous intervenons", "titlePart1": "Applications", "titlePart2": "techniques.",
      "intro": "Nous fournissons des matériaux CVD et des solutions techniques pour la production, le refroidissement, les semi-conducteurs et la recherche.",
    },
    "capabilities": {
      "excellence": "Ce que nous faisons", "titlePart1": "Capacités", "titlePart2": "& procédé.",
      "intro": "Notre activité repose sur la croissance CVD et le support technique pour la production et la recherche.",
    },
    "footer": {"copyright": "© 2026 Adamas Materials. Tous droits réservés.", "legal": "Mentions légales", "privacy": "Confidentialité", "terms": "Conditions"},
  },
  "de": {
    "nav": {"home": "Start", "about": "Über uns", "investors": "Investoren", "capabilities": "Fähigkeiten", "applications": "Anwendungen", "materials": "Materialien", "quality": "Qualität & Prozess", "glossary": "Glossar", "compliance": "Compliance", "rfq": "RFQ / NDA", "contact": "Kontakt"},
    "home": {
      "heroTitle": "Materialien für", "heroAccent": "Wärme, Leistung und Präzision.",
      "heroSubtitle": "Härte für Schneidwerkzeuge. Wärmeleitfähigkeit für Rechenzentren und Leistungselektronik. CVD für Halbleiter und Forschung.",
      "cta": "Angebot anfragen", "positioningTitle": "CVD-Materiallieferant",
      "positioningSubtitle": "Ein Prozess: CVD. Härte, Verschleiß, Wärmespreizung.",
      "extremePerformance": "Material",
      "solutionText": "CVD-Materialien für Werkzeuge, Heat Spreader und Halbleiteranwendungen.",
      "categories": {"tooling": "Schneidwerkzeuge", "cooling": "RZ-Kühlung", "semiconductors": "Halbleiter", "universities": "Universitäten"},
    },
    "applications": {
      "industrial": "Wo wir arbeiten", "titlePart1": "Technische", "titlePart2": "Anwendungen.",
      "intro": "Wir liefern CVD-Materialien und technische Lösungen für Fertigung, Kühlung, Halbleiter und Forschung.",
    },
    "capabilities": {
      "excellence": "Was wir tun", "titlePart1": "Fähigkeiten", "titlePart2": "& Prozess.",
      "intro": "Unsere Arbeit basiert auf CVD-Wachstum und technischer Unterstützung für Produktion und Forschung.",
    },
    "footer": {"copyright": "© 2026 Adamas Materials. Alle Rechte vorbehalten.", "legal": "Rechtliches", "privacy": "Datenschutz", "terms": "Nutzungsbedingungen"},
  },
  "ja": {
    "nav": {"home": "ホーム", "about": "会社概要", "investors": "投資家", "capabilities": "能力", "applications": "用途", "materials": "材料", "quality": "品質とプロセス", "glossary": "用語集", "compliance": "コンプライアンス", "rfq": "RFQ / NDA", "contact": "お問い合わせ"},
    "home": {
      "heroTitle": "Materials for", "heroAccent": "Heat, Power and Precision.",
      "heroSubtitle": "切削工具、データセンター冷却、半導体、研究向けのCVD材料と技術ソリューション。",
      "cta": "見積依頼", "positioningTitle": "CVD材料の供給",
      "positioningSubtitle": "焦点は一つ：化学気相成長。明確な仕様。産業・研究用途のみ。",
      "extremePerformance": "実務",
      "solutionText": "工具、冷却、半導体、大学、カスタム案件向けにCVD材料を成長・供給します。",
      "categories": {"tooling": "切削工具", "cooling": "DC冷却", "semiconductors": "半導体", "universities": "大学・研究室"},
    },
    "applications": {
      "industrial": "対応分野", "titlePart1": "技術", "titlePart2": "用途。",
      "intro": "製造、冷却、半導体、研究向けにCVD材料と技術ソリューションを提供します。",
    },
    "capabilities": {
      "excellence": "私たちが行うこと", "titlePart1": "能力", "titlePart2": "とプロセス。",
      "intro": "CVD材料成長と、生産・研究への実装を支える技術サポートが中心です。",
    },
    "footer": {"copyright": "© 2026 Adamas Materials. All rights reserved.", "legal": "法務", "privacy": "プライバシー", "terms": "利用規約"},
  },
  "he": {
    "nav": {"home": "בית", "about": "אודות", "investors": "משקיעים", "capabilities": "יכולות", "applications": "יישומים", "materials": "חומרים", "quality": "איכות ותהליך", "glossary": "מילון", "compliance": "ציות", "rfq": "RFQ / NDA", "contact": "צור קשר"},
    "home": {
      "heroTitle": "חומרים ל", "heroAccent": "חום, הספק ודיוק.",
      "heroSubtitle": "חומרי CVD ופתרונות טכניים לכלי חיתוך, קירור מרכזי נתונים, מוליכים למחצה ומחקר.",
      "cta": "בקשת הצעה", "positioningTitle": "ספק חומרי CVD",
      "positioningSubtitle": "מיקוד אחד: שקיעה כימית מפאזת גז. מפרטים ברורים.",
      "extremePerformance": "מעשי",
      "solutionText": "אנחנו מגדלים ומספקים חומרי CVD לכלי עבודה, קירור, מוליכים למחצה, אוניברסיטאות ופרויקטים מותאמים.",
      "categories": {"tooling": "כלי חיתוך", "cooling": "קירור DC", "semiconductors": "מוליכים למחצה", "universities": "אוניברסיטאות"},
    },
    "applications": {
      "industrial": "איפה אנחנו עובדים", "titlePart1": "יישומים", "titlePart2": "טכניים.",
      "intro": "אנחנו מספקים חומרי CVD ופתרונות טכניים לייצור, קירור, מוליכים למחצה ומחקר.",
    },
    "capabilities": {
      "excellence": "מה אנחנו עושים", "titlePart1": "יכולות", "titlePart2": "ותהליך.",
      "intro": "העבודה שלנו בנויה סביב גידול חומרי CVD ותמיכה טכנית לייצור ולמחקר.",
    },
    "footer": {"copyright": "© 2026 Adamas Materials. כל הזכויות שמורות.", "legal": "משפטי", "privacy": "פרטיות", "terms": "תנאים"},
  },
  "ar": {
    "nav": {"home": "الرئيسية", "about": "من نحن", "investors": "المستثمرون", "capabilities": "القدرات", "applications": "التطبيقات", "materials": "المواد", "quality": "الجودة والعملية", "glossary": "المسرد", "compliance": "الامتثال", "rfq": "RFQ / NDA", "contact": "اتصل بنا"},
    "home": {
      "heroTitle": "مواد لـ", "heroAccent": "الحرارة والطاقة والدقة.",
      "heroSubtitle": "مواد CVD وحلول تقنية لأدوات القطع وتبريد مراكز البيانات وأشباه الموصلات والبحث.",
      "cta": "طلب عرض سعر", "positioningTitle": "مورد مواد CVD",
      "positioningSubtitle": "تركيز واحد: الترسيب الكيميائي من البخار. مواصفات واضحة.",
      "extremePerformance": "عملي",
      "solutionText": "ننمو ونورد مواد CVD للأدوات والتبريد وأشباه الموصلات والجامعات والمشاريع المخصصة.",
      "categories": {"tooling": "أدوات القطع", "cooling": "تبريد DC", "semiconductors": "أشباه الموصلات", "universities": "الجامعات"},
    },
    "applications": {
      "industrial": "أين نعمل", "titlePart1": "تطبيقات", "titlePart2": "تقنية.",
      "intro": "نورد مواد CVD وحلولاً تقنية للإنتاج والتبريد وأشباه الموصلات والبحث.",
    },
    "capabilities": {
      "excellence": "ما نفعله", "titlePart1": "القدرات", "titlePart2": "والعملية.",
      "intro": "عملنا مبني على نمو مواد CVD والدعم التقني للإنتاج والبحث.",
    },
    "footer": {"copyright": "© 2026 Adamas Materials. جميع الحقوق محفوظة.", "legal": "قانوني", "privacy": "الخصوصية", "terms": "الشروط"},
  },
}


def deep_merge(base, overlay):
  if not isinstance(overlay, dict):
    return overlay
  out = dict(base)
  for k, v in overlay.items():
    if k in out and isinstance(out[k], dict) and isinstance(v, dict):
      out[k] = deep_merge(out[k], v)
    else:
      out[k] = v
  return out


def to_js(value, indent=0):
  sp = "  " * indent
  if isinstance(value, dict):
    lines = ["{"]
    items = list(value.items())
    for i, (k, v) in enumerate(items):
      key = k if k.isidentifier() else repr(k)
      comma = "," if i < len(items) - 1 else ""
      if isinstance(v, (dict, list)):
        lines.append(f"{sp}  {key}: {to_js(v, indent+1)}{comma}")
      else:
        lines.append(f"{sp}  {key}: {to_js(v, indent+1)}{comma}")
    lines.append(f"{sp}}}")
    return "\n".join(lines)
  if isinstance(value, list):
    if not value:
      return "[]"
    lines = ["["]
    for i, item in enumerate(value):
      comma = "," if i < len(value) - 1 else ""
      lines.append(f"{sp}  {to_js(item, indent+1)}{comma}")
    lines.append(f"{sp}]")
    return "\n".join(lines)
  if isinstance(value, str):
    esc = value.replace("\\", "\\\\").replace("'", "\\'")
    return f"'{esc}'"
  if isinstance(value, bool):
    return "true" if value else "false"
  return str(value)


def main():
  resources = {"en": {"translation": EN}}
  resources["ru"] = {"translation": deep_merge(EN, TRANSLATIONS["ru"])}
  for lang, overlay in LIGHT.items():
    resources[lang] = {"translation": deep_merge(EN, overlay)}

  parts = []
  for lang, blob in resources.items():
    parts.append(f"  {lang}: {{\n    translation: {to_js(blob['translation'], 2)}\n  }}")

  out = """import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
""" + ",\n".join(parts) + """
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
"""
  path = Path("/Users/mk/Desktop/adamasmaterials/src/i18n.ts")
  # Preserve existing init block if different — read tail of old file
  old = path.read_text()
  if "i18n" in old and ".init(" in old:
    # keep generator init; check old for dir/detection extras
    pass
  path.write_text(out)
  print("wrote", path, "bytes", path.stat().st_size)


if __name__ == "__main__":
  main()
