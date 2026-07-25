"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type PortfolioLanguage = "pt" | "en";

const DEFAULT_LANGUAGE: PortfolioLanguage = "en";
const LANGUAGE_STORAGE_KEY = "hud-language";

const EN_TRANSLATIONS = {
  "header.role": "Full-Stack Engineer",
  "header.languageSelectorAria": "Select interface language",
  "header.themeToggleAria": "Toggle theme between light and dark",

  "hero.startContact": "Start Contact",
  "hero.contact": "Contact",
  "hero.contactDescription": "Reach out via email, phone, or LinkedIn.",
  "hero.copied": "Copied",
  "hero.downloadLabel": "Download Resume",
  "profile.summary":
    "Full-Stack Software Engineer with experience in end-to-end web application development using React, Next.js, NestJS, TypeScript, and PostgreSQL, working with REST APIs, AWS cloud integrations, and AI solutions with Azure OpenAI and the OpenAI API.",
  "profile.principle.scalableArchitecture": "Scalable architecture",
  "profile.principle.technicalLeadership": "Technical leadership",
  "profile.principle.teamCollaboration": "Team collaboration",
  "profile.principle.fullStack": "Full-stack",

  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.stack": "Stack",
  "nav.about": "Experience",
  "nav.ariaLabel": "Bottom navigation",
  "nav.newActionAria": "New action",

  "section.coreMetrics": "Core metrics",
  "section.featuredMission": "Featured Mission",
  "section.techMatrix": "Tech Matrix",
  "section.experienceLogs": "Experience Logs",
  "section.projectFiles": "Project Files",

  "project.linkTo": "link to",
  "project.linkLabelCode": "Code",
  "project.linkLabelExternal": "External",

  "metric.yearsExp": "Years Exp",
  "metric.perfScore": "Perf Score",
  "metric.cleanArch": "Clean Arch",

  "tech.languages": "Languages",
  "tech.frontend": "Frontend",
  "tech.backend": "Backend",
  "tech.databases": "Databases",
  "tech.cloudDevops": "Cloud / DevOps",
  "tech.aiLlm": "AI / LLM",
} as const;

type TranslationKey = keyof typeof EN_TRANSLATIONS;

const UI_TRANSLATIONS: Record<PortfolioLanguage, Record<TranslationKey, string>> = {
  en: EN_TRANSLATIONS,
  pt: {
    "header.role": "Engenheiro Full-Stack",
    "header.languageSelectorAria": "Selecionar idioma da interface",
    "header.themeToggleAria": "Alternar tema entre claro e escuro",

    "hero.startContact": "Iniciar Contato",
    "hero.contact": "Contato",
    "hero.contactDescription": "Fale comigo por e-mail, telefone ou LinkedIn.",
    "hero.copied": "Copiado",
    "hero.downloadLabel": "Download CV",
    "profile.summary":
      "Engenheiro de Software Full-Stack com experiência em desenvolvimento ponta a ponta de aplicações web com React, Next.js, NestJS, TypeScript e PostgreSQL, atuando com APIs REST, integrações em nuvem na AWS e soluções de IA com Azure OpenAI e OpenAI API.",
    "profile.principle.scalableArchitecture": "Arquitetura escalável",
    "profile.principle.technicalLeadership": "Liderança técnica",
    "profile.principle.teamCollaboration": "Colaboração em equipe",
    "profile.principle.fullStack": "Full-stack",

    "nav.home": "Home",
    "nav.projects": "Projetos",
    "nav.stack": "Stack",
    "nav.about": "Experiência",
    "nav.ariaLabel": "Navegação inferior",
    "nav.newActionAria": "Nova ação",

    "section.coreMetrics": "Métricas principais",
    "section.featuredMission": "Missão em destaque",
    "section.techMatrix": "Matriz tecnológica",
    "section.experienceLogs": "Logs de experiência",
    "section.projectFiles": "Arquivos de projeto",

    "project.linkTo": "link para",
    "project.linkLabelCode": "Código",
    "project.linkLabelExternal": "Externo",

    "metric.yearsExp": "Anos Exp",
    "metric.perfScore": "Perf Score",
    "metric.cleanArch": "Clean Arch",

    "tech.languages": "Linguagens",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.databases": "Banco de Dados",
    "tech.cloudDevops": "Cloud / DevOps",
    "tech.aiLlm": "IA / LLM",
  },
};

const RESUME_LINKS: Record<PortfolioLanguage, string> = {
  pt: "https://docs.google.com/document/d/1fQm9mO9_41xzvaIAE4DsWCVP7ZmMEPvomO7Zx2yN978/edit?usp=sharing",
  en: "https://drive.google.com/file/d/1--j9siz-isPL9BlAP8EiTDCVAlZuHqS0/view?usp=sharing",
};

type PortfolioLanguageContextValue = {
  language: PortfolioLanguage;
  setLanguage: (language: PortfolioLanguage) => void;
  t: (key: TranslationKey) => string;
  resumeHref: string;
};

const PortfolioLanguageContext = createContext<PortfolioLanguageContextValue | null>(null);

const isPortfolioLanguage = (value: string | null): value is PortfolioLanguage =>
  value === "pt" || value === "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<PortfolioLanguage>(DEFAULT_LANGUAGE);
  const hasHydratedLanguageRef = useRef(false);

  useLayoutEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isPortfolioLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
    }

    hasHydratedLanguageRef.current = true;
  }, []);

  useEffect(() => {
    if (!hasHydratedLanguageRef.current) {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<PortfolioLanguageContextValue>(() => {
    const t = (key: TranslationKey) =>
      UI_TRANSLATIONS[language][key] ?? UI_TRANSLATIONS.en[key];

    return {
      language,
      setLanguage,
      t,
      resumeHref: RESUME_LINKS[language] ?? RESUME_LINKS.en,
    };
  }, [language]);

  return (
    <PortfolioLanguageContext.Provider value={value}>
      {children}
    </PortfolioLanguageContext.Provider>
  );
}

export function usePortfolioLanguage() {
  const context = useContext(PortfolioLanguageContext);

  if (!context) {
    throw new Error("usePortfolioLanguage must be used within LanguageProvider");
  }

  return context;
}
