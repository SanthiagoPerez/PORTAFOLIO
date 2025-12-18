import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  nav: {
    home: string;
    about: string;
    stack: string;
    portfolio: string;
  };
  hero: {
    role: string;
    tagline: string;
    learnMore: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    yearsExp: string;
    projects: string;
    clients: string;
  };
  stack: {
    title: string;
    subtitle: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    projects: {
      title: string;
      description: string;
    }[];
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      stack: "Stack",
      portfolio: "Portfolio",
    },
    hero: {
      role: "Backend Junior Developer",
      tagline: "Building robust, scalable server-side solutions. Passionate about clean code and system architecture.",
      learnMore: "Learn more",
    },
    about: {
      title: "About Me",
      paragraph1: "I'm a dedicated Backend Junior Developer with a passion for crafting efficient, scalable, and maintainable server-side applications. With expertise in designing RESTful APIs, managing databases, and building microservices architectures, I turn complex business requirements into elegant technical solutions.",
      paragraph2: "My approach to development centers on clean code principles and thoughtful system design. I believe that robust backend infrastructure is the foundation of any successful application, and I take pride in building systems that are not just functional, but also performant and secure.",
      paragraph3: "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I'm always eager to take on challenging projects that push the boundaries of what's possible.",
      yearsExp: "Years Experience",
      projects: "Projects Completed",
      clients: "Happy Clients",
    },
    stack: {
      title: "Tech Stack",
      subtitle: "Technologies I work with to build robust backend systems",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "A selection of backend projects I've built",
      demo: "Demo",
      code: "Code",
      projects: [
        {
          title: "E-Commerce API",
          description: "A scalable RESTful API for e-commerce platforms with payment integration, inventory management, and order processing.",
        },
        {
          title: "Real-time Chat Service",
          description: "WebSocket-based messaging service supporting real-time communication, message persistence, and user presence.",
        },
        {
          title: "Authentication Microservice",
          description: "Secure authentication service with JWT tokens, OAuth2 integration, and role-based access control.",
        },
        {
          title: "Data Pipeline Engine",
          description: "ETL pipeline for processing large-scale data with scheduling, monitoring, and error handling capabilities.",
        },
        {
          title: "API Gateway",
          description: "Custom API gateway with rate limiting, request routing, load balancing, and comprehensive logging.",
        },
        {
          title: "Task Queue System",
          description: "Distributed task queue for handling background jobs with retry logic, priority queues, and monitoring.",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      stack: "Tecnologías",
      portfolio: "Portafolio",
    },
    hero: {
      role: "Desarrollador Backend Junior",
      tagline: "Construyendo soluciones robustas y escalables del lado del servidor. Apasionado por el código limpio y la arquitectura de sistemas.",
      learnMore: "Saber más",
    },
    about: {
      title: "Sobre Mí",
      paragraph1: "Soy un Desarrollador Backend Junior dedicado con pasión por crear aplicaciones del lado del servidor eficientes, escalables y mantenibles. Con experiencia en diseño de APIs RESTful, gestión de bases de datos y construcción de arquitecturas de microservicios, transformo requisitos de negocio complejos en soluciones técnicas elegantes.",
      paragraph2: "Mi enfoque de desarrollo se centra en los principios de código limpio y diseño de sistemas reflexivo. Creo que una infraestructura backend robusta es la base de cualquier aplicación exitosa, y me enorgullezco de construir sistemas que no solo sean funcionales, sino también eficientes y seguros.",
      paragraph3: "Cuando no estoy programando, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y compartiendo conocimiento con la comunidad de desarrolladores. Siempre estoy dispuesto a asumir proyectos desafiantes que amplíen los límites de lo posible.",
      yearsExp: "Años de Experiencia",
      projects: "Proyectos Completados",
      clients: "Clientes Satisfechos",
    },
    stack: {
      title: "Tecnologías",
      subtitle: "Tecnologías con las que trabajo para construir sistemas backend robustos",
    },
    portfolio: {
      title: "Portafolio",
      subtitle: "Una selección de proyectos backend que he construido",
      demo: "Demo",
      code: "Código",
      projects: [
        {
          title: "API de E-Commerce",
          description: "Una API RESTful escalable para plataformas de comercio electrónico con integración de pagos, gestión de inventario y procesamiento de pedidos.",
        },
        {
          title: "Servicio de Chat en Tiempo Real",
          description: "Servicio de mensajería basado en WebSocket que soporta comunicación en tiempo real, persistencia de mensajes y presencia de usuarios.",
        },
        {
          title: "Microservicio de Autenticación",
          description: "Servicio de autenticación seguro con tokens JWT, integración OAuth2 y control de acceso basado en roles.",
        },
        {
          title: "Motor de Pipeline de Datos",
          description: "Pipeline ETL para procesar datos a gran escala con programación, monitoreo y capacidades de manejo de errores.",
        },
        {
          title: "API Gateway",
          description: "Gateway de API personalizado con limitación de velocidad, enrutamiento de solicitudes, balanceo de carga y registro completo.",
        },
        {
          title: "Sistema de Cola de Tareas",
          description: "Cola de tareas distribuida para manejar trabajos en segundo plano con lógica de reintentos, colas de prioridad y monitoreo.",
        },
      ],
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
