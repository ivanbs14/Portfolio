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
    "Full-Stack Engineer and Tech Lead experienced in scalable web applications, REST APIs, SQL and NoSQL databases, cloud infrastructure, CI/CD, and generative AI solutions with OpenAI and Azure OpenAI.",
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
      "Engenheiro Full-Stack e Tech Lead com experiência em aplicações web escaláveis, APIs REST, bancos SQL e NoSQL, infraestrutura em nuvem, CI/CD e soluções de IA generativa com OpenAI e Azure OpenAI.",
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
  pt: "https://drive.google.com/file/d/1sfhLxxWeSA5cb4CkxeGaZanoJ-trHLwf/view?usp=sharing",
  en: "https://drive.google.com/file/d/1pT3MXqhJD6hTc2XSop4KEXBeCprpEc77/view?usp=sharing",
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
