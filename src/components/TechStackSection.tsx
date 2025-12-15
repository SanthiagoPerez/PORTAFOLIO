import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/contexts/LanguageContext";

const technologies = [
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "🔴" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "AWS", icon: "☁️" },
  { name: "GraphQL", icon: "◈" },
  { name: "Go", icon: "🔵" },
  { name: "TypeScript", icon: "📘" },
  { name: "Rust", icon: "🦀" },
];

const TechStackSection = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-24 md:py-32 bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t.stack.title}</h2>
          <p className="section-subtitle mx-auto">
            {t.stack.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {technologies.map((tech) => (
                <CarouselItem
                  key={tech.name}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="tech-badge flex-col h-full">
                    <span className="text-3xl mb-2">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-secondary hover:border-primary/30" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-secondary hover:border-primary/30" />
          </Carousel>
        </div>

        {/* Static grid for mobile fallback */}
        <div className="md:hidden mt-8 grid grid-cols-3 gap-3">
          {technologies.slice(0, 6).map((tech) => (
            <div key={tech.name} className="tech-badge flex-col text-center">
              <span className="text-2xl mb-1">{tech.icon}</span>
              <span className="text-xs font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
