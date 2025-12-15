import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectTags = [
  ["Node.js", "PostgreSQL", "Redis"],
  ["Go", "MongoDB", "WebSocket"],
  ["Python", "FastAPI", "Redis"],
  ["Python", "Airflow", "AWS"],
  ["Go", "Docker", "Kubernetes"],
  ["Node.js", "Redis", "Bull"],
];

const projectLinks = [
  { demoUrl: "#", githubUrl: "#" },
  { demoUrl: "#", githubUrl: "#" },
  { demoUrl: "#", githubUrl: "#" },
  { demoUrl: "#", githubUrl: "#" },
  { demoUrl: "#", githubUrl: "#" },
  { demoUrl: "#", githubUrl: "#" },
];

const PortfolioSection = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t.portfolio.title}</h2>
          <p className="section-subtitle mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.projects.map((project, index) => (
            <article
              key={index}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header with gradient */}
              <div className="h-32 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="w-16 h-16 rounded-xl bg-card border border-border/50 flex items-center justify-center text-2xl text-primary group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {"</>"}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectTags[index]?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={projectLinks[index]?.demoUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>{t.portfolio.demo}</span>
                  </a>
                  <a
                    href={projectLinks[index]?.githubUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>{t.portfolio.code}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
