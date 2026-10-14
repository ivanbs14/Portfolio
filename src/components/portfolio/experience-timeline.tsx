"use client";

import { useMemo } from "react";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { EXPERIENCE_TIMELINE } from "@/data/portfolio";

const EXPERIENCE_TIMELINE_PT = [
  {
    period: "[ Jun/2025 - Set/2026 ]",
    title: "Desenvolvedor Full-Stack",
    highlights: [
      "Desenvolvi funcionalidades ponta a ponta com Next.js, NestJS, TypeScript, PostgreSQL e MongoDB nas camadas de frontend, backend e dados.",
      "Projetei APIs REST e melhorei performance, escalabilidade, tratamento de erros e arquitetura modular das aplicações.",
      "Contribuí com code reviews, padrões de engenharia, pipelines de CI/CD e testes automatizados.",
      "Implementei integrações AWS com Amazon S3 e Lambda, além de soluções com Azure OpenAI e OpenAI API para suporte, propostas, automações e extração e classificação de dados.",
    ],
  },
  {
    period: "[ Out/2024 - Mai/2025 ]",
    title: "Tech Lead | Desenvolvedor Full Stack",
    highlights: [
      "Atuei como Tech Lead no planejamento de entregas, decisões arquiteturais e definição de padrões técnicos.",
      "Desenvolvi funcionalidades escaláveis e de fácil manutenção com Next.js, NestJS, PostgreSQL e MongoDB.",
      "Apoiei code reviews, boas práticas de engenharia e melhorias nos pipelines de CI/CD.",
      "Contribuí para integrações AWS de armazenamento e automações de backend.",
    ],
  },
  {
    period: "[ Dez/2023 - Out/2024 ]",
    title: "Desenvolvedor Front-end",
    highlights: [
      "Desenvolvi interfaces responsivas com React, TypeScript, Tailwind CSS e Styled Components, integrando dados com MongoDB.",
      "Aprimorei a usabilidade e a consistência visual do frontend com foco em acessibilidade e experiência do usuário.",
      "Integrei aplicações frontend a APIs REST e colaborei no alinhamento de contratos entre as camadas da aplicação.",
    ],
  },
  {
    period: "[ Jan/2023 - Dez/2023 ]",
    title: "Desenvolvedor Full Stack",
    highlights: [
      "Desenvolvi e mantive funcionalidades de aplicações com React.js e Styled Components.",
      "Trabalhei em serviços de backend com Node.js, MongoDB e integrações de API.",
      "Utilizei Docker, GitLab CI e Git no pipeline de desenvolvimento e entrega de software.",
    ],
  },
] as const;

export function ExperienceTimeline() {
  const { t, language } = usePortfolioLanguage();
  const localizedTimeline = useMemo(
    () =>
      EXPERIENCE_TIMELINE.map((entry, index) => {
        if (language !== "pt") {
          return entry;
        }

        const translatedEntry = EXPERIENCE_TIMELINE_PT[index];

        if (!translatedEntry) {
          return entry;
        }

        return {
          ...entry,
          period: translatedEntry.period,
          title: translatedEntry.title,
          highlights: translatedEntry.highlights,
        };
      }),
    [language]
  );

  return (
    <section
      id="section-experience"
      className="scroll-mt-28 px-6 pb-6 lg:px-4 lg:pb-8"
      aria-labelledby="experience-timeline-title"
    >
      <h2
        id="experience-timeline-title"
        className="mb-6 text-center text-xs font-bold tracking-[0.3em] text-primary/60 uppercase lg:mb-5"
      >
        {t("section.experienceLogs")}
      </h2>

      <div className="relative space-y-8 before:absolute before:top-2 before:bottom-0 before:left-[11px] before:w-px before:bg-primary/20 before:content-[''] lg:space-y-7">
        {localizedTimeline.map((entry) => (
          <article key={`${entry.period}-${entry.title}`} className="relative pl-8 lg:pl-7">
            <div
              className={`absolute top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full border ${
                entry.isActive
                  ? "border-primary bg-background"
                  : "border-primary/40 bg-background"
              }`}
              aria-hidden
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  entry.isActive ? "bg-primary" : "bg-primary/40"
                }`}
              />
            </div>

            <p
              className={`mb-1 font-mono text-xs ${
                entry.isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {entry.period}
            </p>
            <h3
              className={`tracking-tight uppercase ${
                entry.isActive
                  ? "font-bold text-foreground"
                  : "font-bold text-foreground dark:text-foreground/80"
              }`}
            >
              {entry.title}
            </h3>
            <p
              className={`mb-2 text-xs font-medium tracking-wide ${
                entry.isActive
                  ? "text-foreground dark:text-muted-foreground"
                  : "text-foreground dark:text-muted-foreground/80"
              }`}
            >
              {entry.company}
            </p>

            <ul
              className={`list-inside list-disc space-y-1 text-sm leading-relaxed lg:text-[15px] ${
                entry.isActive
                  ? "text-foreground dark:text-muted-foreground"
                  : "text-foreground dark:text-muted-foreground/80"
              }`}
            >
              {entry.highlights.map((highlight) => (
                <li key={`${entry.title}-${highlight}`}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
