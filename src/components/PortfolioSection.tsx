import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API",
    description:
      "A scalable RESTful API for e-commerce platforms with payment integration, inventory management, and order processing.",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat Service",
    description:
      "WebSocket-based messaging service supporting real-time communication, message persistence, and user presence.",
    tags: ["Go", "MongoDB", "WebSocket"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Authentication Microservice",
    description:
      "Secure authentication service with JWT tokens, OAuth2 integration, and role-based access control.",
    tags: ["Python", "FastAPI", "Redis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Pipeline Engine",
    description:
      "ETL pipeline for processing large-scale data with scheduling, monitoring, and error handling capabilities.",
    tags: ["Python", "Airflow", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "API Gateway",
    description:
      "Custom API gateway with rate limiting, request routing, load balancing, and comprehensive logging.",
    tags: ["Go", "Docker", "Kubernetes"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Queue System",
    description:
      "Distributed task queue for handling background jobs with retry logic, priority queues, and monitoring.",
    tags: ["Node.js", "Redis", "Bull"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle mx-auto">
            A selection of backend projects I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header with gradient */}
              <div className="h-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-card border border-border/50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
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
