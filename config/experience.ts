import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  stackIcons: string[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  // {
  //   id: "crm-automation-n8n",
  //   companyName: "CRM Automation n8n",
  //   type: "Projects",
  //   category: ["Automation", "Workflow", "Backend"],
  //   shortDescription:
  //     "Automated CRM system built with n8n untuk lead scoring, assignment, dan follow-up processes.",
  //   websiteLink: "https://github.com/ookapratama/crm-automation-n8n",
  //   techStack: ["n8n", "PostgreSQL", "Docker", "Webhooks", "Google Sheets"],
  //   stackIcons: ["n8n", "postgresql", "docker", "webhook", "googlesheets"],
  //   startDate: new Date("2025-05-14"),
  //   endDate: new Date(),
  //   companyLogoImg: "/experience/portofolio/logo.webp",
  //   pagesInfoArr: [
  //     {
  //       title: "Home Screen",
  //       description: "",
  //       imgArr: [
  //         "/experience/portofolio/landing_1.webp",
  //         "/experience/portofolio/landing_2.webp",
  //         "/experience/portofolio/landing_3.webp",
  //       ],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "CRM Pipeline Automation dengan n8n untuk mengelola lead scoring, smart assignment, follow-up, dan pipeline reporting.",
  //       "Proyek ini dibangun untuk mengurangi pekerjaan manual tim sales/marketing sekaligus meningkatkan respon time dan conversion rate.",
  //     ],
  //     bullets: [
  //       "Automated lead scoring engine dengan rules-based calculation.",
  //       "Smart lead assignment berdasarkan territory/expertise.",
  //       "Scheduled follow-up automation untuk memastikan 100% compliance.",
  //       "Pipeline reporting real-time menggunakan Google Sheets & dashboard.",
  //       "Reduce lead response time dari 4 jam → 15 menit.",
  //       "Increase conversion rate sebesar 25%.",
  //       "Save ±10 jam per minggu dari pekerjaan manual.",
  //     ],
  //   },
  // },

  // {
  //   id: "ml-experiments",
  //   companyName: "Personal Portfolio",
  //   type: "Projects",
  //   category: ["Machine Learning", "Data Science", "Artificial Intelligence"],
  //   shortDescription:
  //     "A centralized repository of personal Machine Learning projects, showcasing skills in building, evaluating, and deploying data-driven models.",
  //   // websiteLink: "https://github.com/ookapratama/ML-Experiments", // Replace with GitHub Pages link if available
  //   githubLink: "https://github.com/ookapratama/ML-Experiments",
  //   techStack: ["Python", "Pandas", "Scikit-learn", "NumPy", "Plotly"],
  //   stackIcons: ["python", "pandas", "scikitlearn", "numpy", "plotly"],
  //   startDate: new Date("2025-08-10"),
  //   endDate: new Date("now"),
  //   companyLogoImg: "/experience/ml-experiments/thumbnail.webp",
  //   pagesInfoArr: [
  //     {
  //       title: "Waiter Tips Prediction",
  //       description:
  //         "A case study project to predict tips using Linear Regression model. This project emphasizes the importance of data quality.",
  //       imgArr: [
  //         "/experience/ml-experiments/tips-prediction/1.webp",
  //         "/experience/ml-experiments/tips-prediction/2.webp",
  //       ],
  //     },
  //     {
  //       title: "Future Sales Prediction",
  //       description:
  //         "Predicting future sales based on advertising cost data. This project demonstrates the application of Linear Regression to business problems.",
  //       imgArr: [
  //         "/experience/ml-experiments/sales-prediction/1.webp",
  //         "/experience/ml-experiments/sales-prediction/2.webp",
  //       ],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "This repository serves as a centralized portfolio of all Machine Learning and Data Science projects I have worked on. Its purpose is to demonstrate my understanding of ML concepts, from data preprocessing to model evaluation, as well as my ability to apply algorithms to solve practical problems.",
  //     ],
  //     bullets: [
  //       "Implementing various Machine Learning algorithms such as Linear Regression, Classification, and Clustering.",
  //       "Performing Exploratory Data Analysis (EDA) to gain insights from datasets.",
  //       "Using industry-standard Python libraries such as Pandas, Scikit-learn, and NumPy.",
  //       "Visualizing model results and data using Plotly for clear presentation.",
  //       "Documenting each project in detail to explain methodology and findings.",
  //     ],
  //   },
  // },
  {
    id: "laptop-price-prediction-v1",
    companyName: "Laptop Price Prediction",
    type: "Projects",
    category: ["Machine Learning", "Data Science", "Full Stack"],
    shortDescription:
      "Laptop price prediction system using an XGBoost-based regression model, featuring data scraping from Tokopedia, cleaning, EDA, feature engineering, hyperparameter tuning, and deployment via Streamlit Cloud.",
    websiteLink:
      "https://ookapratama-ml-experiments-laptop-price-predictionappapp-f33pbo.streamlit.app/",
    githubLink:
      "https://github.com/ookapratama/ML-Experiments/tree/main/laptop_price_prediction",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Streamlit",
    ],
    stackIcons: ["python", "scikitlearn", "xgboost", "pandas", "streamlit"],
    startDate: new Date("2025-12-08"),
    endDate: new Date("2025-12-11"),

    companyLogoImg: "/experience/laptop-predict/cover.webp",

    pagesInfoArr: [
      {
        title: "Dashboard & Prediction UI",
        description:
          "The main Streamlit page for inputting laptop specifications and receiving price predictions.",
        imgArr: ["/experience/laptop-predict/ui.webp"],
      },
      {
        title: "EDA",
        description:
          "EDA diagrams and correlation heatmaps, and model training visuals.",
        imgArr: [
          "/experience/laptop-predict/eda-1.webp",
          "/experience/laptop-predict/eda-2.webp",
        ],
      },
      {
        title: "Model Development",
        description: "Model training visuals.",
        imgArr: ["/experience/laptop-predict/model.webp"],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "A Machine Learning project focused on predicting laptop prices based on specifications such as CPU series, RAM, storage, and brand. Data was collected via scraping the Tokopedia e-commerce platform using the GraphQL API.",
        "The process included comprehensive data cleaning, feature engineering, Exploratory Data Analysis (EDA), building multiple regression models (Linear Regression, Random Forest, XGBoost), and selecting the best model through hyperparameter tuning.",
        "The XGBoost model yielded the best performance and was subsequently deployed via Streamlit Cloud with custom preprocessing and CPU series encoding.",
      ],
      bullets: [
        "Scraped data from Tokopedia using the GraphQL API.",
        "Cleaned dataset (RAM/storage parsing, CPU parsing, brand normalization).",
        "Conducted extensive EDA (heatmap, price distribution, CPU vs Price, RAM vs Price, etc.).",
        "Performed feature engineering and hyperparameter tuning.",
        "Achieved optimal performance with the XGBoost model (MAE < IDR 2.5 million).",
        "Deployed the model using Streamlit Cloud with an interactive user interface (UI).",
        "Ensured complete documentation via a detailed README and Mermaid flow diagrams.",
      ],
    },
  },
  {
    id: "sair-jaya-mandiri",
    companyName: "Sair Jaya Mandiri",
    type: "Projects",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "A corporate website built from scratch for Sair Jaya Mandiri, a port services company, to showcase their profile, services, and fleet.",
    websiteLink: "https://sairjayamandiri.com",
    githubLink: "https://github.com/ookapratama/Laravel_sjm.git",
    techStack: ["Laravel", "PHP", "MySQL", "jQuery"],
    stackIcons: ["laravel", "php", "mysql", "jquery"],
    startDate: new Date("2025-08-10"),
    endDate: new Date("2025-09-20"),
    companyLogoImg: "/experience/sjm/thumbnail.webp",
    pagesInfoArr: [
      {
        title: "Admin",
        description:
          "A comprehensive backend dashboard for administrators to monitor sales, manage user accounts, track commissions, and oversee the entire MLM network.",
        imgArr: [
          "/experience/sjm/1.webp",
          "/experience/sjm/2.webp",
          "/experience/sjm/3.webp",
          "/experience/sjm/4.webp",
          "/experience/sjm/5.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A custom-built multi-level marketing (MLM) website for a perfume product, developed as a full-stack solution to manage user networks, product sales, and commission systems.",
      ],
      bullets: [
        "Developed a responsive and dynamic user interface using Bootstrap and jQuery.",
        "Engineered a robust backend system with the Laravel framework to handle complex MLM logic, including user hierarchies and commission tracking.",
        "Implemented secure user authentication and registration processes.",
        "Managed database operations to track sales, inventory, and member network growth.",
        "Designed and built a comprehensive dashboard for members to monitor their sales performance and network activity.",
        "Ensured high-level security for transactions and user data.",
      ],
    },
  },

  {
    id: "my-porofolio",
    companyName: "Personal Portofolio",
    type: "Projects",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Personal Portfolio Website for experienced Web Developer.",
    websiteLink: "https://ooka.my.id",
    githubLink: "https://github.com/ookapratama/my-portofolio.git",
    techStack: ["React", "Typescript", "Tailwind CSS", "Shadcn"],
    stackIcons: ["react", "typescript", "tailwind", "shadcn"],
    startDate: new Date("2025-05-14"),
    endDate: new Date("now"),
    companyLogoImg: "/experience/portofolio/logo.webp",
    pagesInfoArr: [
      {
        title: "Home Screen",
        description: "",
        imgArr: [
          "/experience/portofolio/landing_1.webp",
          "/experience/portofolio/landing_2.webp",
          "/experience/portofolio/landing_3.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: ["Personal Portfolio Website for experienced Web Developer."],
      bullets: [
        "Built a high-performance frontend with Next.js App Router.",
        "Designed responsive UIs with Tailwind CSS utility classes, ensuring consistent styling across mobile/desktop.",
        "Implemented dynamic routing (/products/[id]) for seamless user navigation.",
        "Developed reusable components with TypeScript type safety.",
        "Integrated RESTful APIs/[GraphQL] for real-time data fetching using fetch/axios.",
        "Optimized images using Next.js <Image> component, reducing page load time by 40%.",
        "Configured dark mode toggle with Tailwind’s dark: variant and React context.",
      ],
    },
  },

  {
    id: "bkpp-mamuju",
    companyName: "BKPP Mamuju",
    type: "Projects",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Official Website of BKPP Mamuju Regency – Regional Personnel and Human Resources Development Agency. Information on civil service recruitment, employee training, and regional government HR policies.",
    websiteLink: "https://bkpp.mamujukab.go.id/",
    githubLink: "https://github.com/ookapratama/Laravel_BkppMamuju.git",
    techStack: ["Laravel", "PHP", "MySQL", "jQuery"],
    stackIcons: ["laravel", "php", "mysql", "jquery"],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-08-01"),
    companyLogoImg: "/experience/bkppmamuju/bkpp-1.webp",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [
          "/experience/bkppmamuju/bkpp-1.webp",
          "/experience/bkppmamuju/landing_1.webp",
          "/experience/bkppmamuju/landing_2.webp",
          "/experience/bkppmamuju/landing_3.webp",
          "/experience/bkppmamuju/landing_4.webp",
        ],
      },

      {
        title: "Admin Dashboard",
        description:
          "Powerful administrative interface for managing users, projects, and system settings",
        imgArr: [
          "/experience/bkppmamuju/dashboard-1.webp",
          "/experience/bkppmamuju/dashboard-2.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my first hands-on experience with Laravel, I worked on a dynamic web application project that allowed me to explore full-stack development within a modern PHP ecosystem. My role involved building and optimizing a functional platform from the ground up, focusing on clean architecture and user-friendly interfaces.",
        "I leveraged Laravel’s MVC framework to develop robust backend logic, including authentication systems, database management, and API integrations. For the frontend, I used Blade templating alongside basic JavaScript to create responsive layouts. This project deepened my understanding of routing, middleware, and Eloquent ORM while emphasizing secure coding practices.",
        "This project marked a significant milestone in my journey as a developer, introducing me to core web development concepts like CRUD operations, server-side validation, and session management. Though modest in scale, it solidified my confidence in working with Laravel and motivated me to explore more advanced features like Livewire or API-driven SPAs in future projects.",
      ],
      bullets: [
        "Developed my first Laravel-based web application, implementing MVC architecture and RESTful routing.",
        "Designed interactive frontend components with Blade templates, CSS (Bootstrap), and jQuery.",
        "Integrated MySQL databases with Eloquent ORM for efficient data handling and relationships.",
        "Collaborated with teammates to debug and optimize features, improving code quality.",
        "Improved adaptability by incorporating feedback during iterative development.",
      ],
    },
  },

  {
    id: "bbgtk-sulsel",
    companyName: "BBGTK Sulsel",
    type: "Projects",
    category: ["Web Dev", "Full Stack", "User Management"],
    shortDescription:
      "Official Website of BBGTK Sulsel - South Sulawesi's Regional Center for Educator Development. Providing teacher training programs, certification information, and educational technology resources.",
    websiteLink: "https://simbbgtksulsel.com/",
    githubLink: "https://github.com/ookapratama/Laravel_bbgp.git",
    techStack: ["Laravel", "PHP", "MySQL", "jQuery"],
    stackIcons: ["laravel", "php", "mysql", "jquery"],
    startDate: new Date("2024-06-28"),
    endDate: new Date("2025-01-21"),
    companyLogoImg: "/experience/bbgtk/bbgtk.webp",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [
          "/experience/bbgtk/landing_1.webp",
          "/experience/bbgtk/landing_2.webp",
          "/experience/bbgtk/landing_3.webp",
          "/experience/bbgtk/landing_4.webp",
          "/experience/bbgtk/landing_5.webp",
          "/experience/bbgtk/landing_6.webp",
        ],
      },

      {
        title: "Admin Dashboard",
        description:
          "Powerful administrative interface for managing users, employees, and system settings",
        imgArr: [
          "/experience/bbgtk/admin_1.webp",
          "/experience/bbgtk/admin_2.webp",
          "/experience/bbgtk/admin_3.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As the lead developer of this internal management information system, I built an integrated platform to optimize daily operations for the South Sulawesi Education Office. The system covers employee management, and educator activity tracking, replacing manual processes that previously hindered productivity.",
      ],
      bullets: [
        "Designed analytical dashboards for employee performance.",
        "Designed interactive dashboards with real-time data visualization using Chart.js",
        "Implemented automated report generation (PDF/Excel) for monthly performance reviews.",
        "Optimized database performance handling 300+ daily transactions through query optimization.",
      ],
    },
  },

  {
    id: "persuratan-iain-pare",
    companyName: "IAIN Parepare",
    type: "Projects",
    category: ["Web Dev", "Full Stack", "User Management"],
    shortDescription:
      "SISKA Digital Archiving System a Laravel solution that transformed IAIN Parepare's document workflow",
    websiteLink: "https://arsip.iainpare.id/public/auth/login",
    githubLink: "https://github.com/akmaalll/persuratan-iain.git",
    techStack: ["Laravel", "PHP", "MySQL", "jQuery"],
    stackIcons: ["laravel", "php", "mysql", "jquery"],
    startDate: new Date("2024-10-19"),
    endDate: new Date("2025-01-14"),
    companyLogoImg: "/experience/arsip-iainpare/login.webp",
    pagesInfoArr: [
      {
        title: "Admin Dashboard",
        description:
          "Powerful administrative interface for managing users, employees, and system settings",
        imgArr: [
          "/experience/arsip-iainpare/dashboard_1.webp",
          "/experience/arsip-iainpare/dashboard_2.webp",
          "/experience/arsip-iainpare/dashboard_3.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed SISKA (Sistem Informasi Kearsipan), a comprehensive document management system for IAIN Parepare Islamic State University. This digital archiving solution modernized the institution's letter management workflow, handling incoming/outgoing mail, document classification, and activity logging.",
      ],
      bullets: [
        "Implemented complete letter lifecycle management: incoming mail (Surat Masuk), outgoing mail (Surat Keluar)",
        "Developed automated letter numbering system with institutional numbering standards",
        "Created JRA (Jadwal Retensi Arsip) classification for document retention policies",
        "Built comprehensive activity logs tracking all user actions with timestamps",
        "Designed role-specific dashboards (Admin, Staff, Faculty) with relevant KPIs",
        "Integrated document search with filters by type, date, and classification",
        "Developed PDF generation for official mail with institutional letterheads",
        "Reduced physical document storage needs by 60% in first 6 months",
      ],
    },
  },

  {
    id: "mobile-dcc-v1",
    companyName: "Mobile DCC",
    type: "Projects",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "A React Native mobile app for Dipanegara Computer Club (DCC) featuring articles, tutorials, and event management. Designed to enhance member engagement with educational content and real-time updates.",
    websiteLink: "https://dcc-dp.com/",
    techStack: [
      "React Native",
      "Typescript",
      "Axios",
      "Laravel",
      "RESTfull API",
    ],
    stackIcons: ["react", "typescript", "axios", "laravel"],
    startDate: new Date("2024-09-12"),
    endDate: new Date("2024-11-09"),
    companyLogoImg: "/experience/mobile-dccv1/logo.webp",
    pagesInfoArr: [
      {
        title: "Screen",
        description: "",
        imgArr: [
          "/experience/mobile-dccv1/screen.webp",
          "/experience/mobile-dccv1/screen1.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description: "",
        imgArr: ["/experience/mobile-dccv1/admin.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed the official DCC mobile app to centralize club resources using React Native and Laravel. The app serves 200+ members with educational content and event coordination.",
        "optimized API responses for slow network conditions common in campus and general environments.",
        "Designed a video streaming system with offline caching for tutorials, reducing data usage for students by 40% compared to web platforms.",
      ],
      bullets: [
        "Built with React Native (JavaScript) for cross-platform performance",
        "Laravel backend with API endpoints for articles, videos, and events",
        "Admin portal for content management",
        "Reduced app launch time by 35% through image optimization",
      ],
    },
  },
  {
    id: "hewan-ar-skripsi",
    companyName: "Animal AR (Bachelor Thesis)", // Sesuaikan dengan kampus Anda
    type: "Projects",
    category: ["Mobile Dev", "Augmented Reality", "Education"],
    shortDescription:
      "A mobile-based Augmented Reality (AR) application for animal education. Built with React Native Expo and ViroReact/Expo-AR to provide an interactive learning experience with 3D models of animals.",
    githubLink: "https://github.com/ookapratama/expo_AR",
    techStack: [
      "React Native Expo",
      "Expo Tracking (AR)",
      "AR.js",
      "Typescript",
      "Node.js",
    ],
    stackIcons: ["react", "typescript", "nodejs", "expo", "mobileAR"],
    startDate: new Date("2025-01-01"), // Sesuaikan tanggal mulai skripsi
    endDate: new Date("2025-02-27"), // Sesuaikan tanggal selesai skripsi
    companyLogoImg: "/experience/expo-ar/cover.webp",
    pagesInfoArr: [
      {
        title: "AR View",
        description:
          "Main AR interface showing 3D animal models in real-world environments.",
        imgArr: [
          "/experience/expo-ar/layout-2.webp",
          "/experience/expo-ar/layout-1.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed an Augmented Reality (AR) application as a thesis project to visualize animal species in 3D, aiming to increase engagement in digital learning for students.",
        "Implemented plane detection and world tracking to allow users to place and interact with lifelike 3D animal models on any flat surface.",
        "Optimized 3D asset rendering within the Expo environment to ensure smooth performance (60 FPS) on mid-range mobile devices.",
      ],
      bullets: [
        "Integrated ARCore (Android) through the Expo/React Native ecosystem.",
        "Designed an interactive UI for educational content including species classification, habitat, and sound features.",
        "Utilized efficient asset loading strategies to manage high-quality 3D models without compromising app stability.",
        "Conducted UI/UX testing with target users to achieve high accessibility and intuitive AR interaction.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
