import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: "en", toggleLang: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "pt" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const t = (lang: Lang, key: string): string => {
  return translations[lang]?.[key] ?? key;
};

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.title": "LUCAS PORTA",
    "nav.contact": "Contact",
    "nav.cv": "Resume",

    // Hero
    "hero.subtitle": "UX / UI Designer",
    "hero.line1": "Crafting digital",
    "hero.line2": "experiences",
    "hero.line3": "that matter.",
    "hero.scroll": "Scroll to explore",

    // Projects
    "projects.heading": "Selected Work",
    "projects.role": "Role",
    "projects.tools": "Tools",
    "projects.view": "View project",
    "project.1.title": "Zello",
    "project.1.category": "Mobile App",
    "project.1.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "project.1.details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "project.1.role": "Lead Designer",
    "project.2.title": "Arclight",
    "project.2.category": "Web Platform",
    "project.2.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "project.2.details": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    "project.2.role": "UX/UI Designer",
    "project.3.title": "Pulse Health",
    "project.3.category": "Dashboard",
    "project.3.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.",
    "project.3.details": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    "project.3.role": "Product Designer",
    "project.4.title": "Nomad",
    "project.4.category": "Brand Identity",
    "project.4.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    "project.4.details": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    "project.4.role": "Brand Designer",

    // About
    "about.heading": "About",
    "about.bg": "ABOUT",
    "about.intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Currently based in Berlin.",
    "about.body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    // Contact
    "contact.heading": "Get in touch",
    "contact.body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "contact.copyright": "© 2026",
  },
  pt: {
    // Navbar
    "nav.title": "LUCAS PORTA",
    "nav.contact": "Contato",
    "nav.cv": "Currículo",

    // Hero
    "hero.subtitle": "Designer UX / UI",
    "hero.line1": "Experiências",
    "hero.line2": "digitais",
    "hero.line3": "que importam.",
    "hero.scroll": "Deslize para explorar",

    // Projects
    "projects.heading": "Trabalhos em destaque",
    "projects.role": "Função",
    "projects.tools": "Ferramentas",
    "projects.view": "Ver projeto",
    "project.1.title": "Zello",
    "project.1.category": "Aplicação Mobile",
    "project.1.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "project.1.details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "project.1.role": "Designer Líder",
    "project.2.title": "Arclight",
    "project.2.category": "Plataforma Web",
    "project.2.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "project.2.details": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    "project.2.role": "Designer UX/UI",
    "project.3.title": "Pulse Health",
    "project.3.category": "Painel",
    "project.3.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.",
    "project.3.details": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    "project.3.role": "Designer de Produto",
    "project.4.title": "Nomad",
    "project.4.category": "Identidade de Marca",
    "project.4.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    "project.4.details": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    "project.4.role": "Designer de Marca",

    // About
    "about.heading": "Sobre",
    "about.bg": "SOBRE",
    "about.intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atualmente baseado em Berlim.",
    "about.body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    // Contact
    "contact.heading": "Entre em contato",
    "contact.body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "contact.copyright": "© 2026",
  },
};
