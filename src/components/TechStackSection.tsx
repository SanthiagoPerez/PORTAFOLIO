import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/contexts/LanguageContext";

// Images from src/img
import swaggerImg from "@/img/swagger.png";
import sqlImg from "@/img/SQL.png";
import springImg from "@/img/SpringBoot.png";
import mavenImg from "@/img/maven.png";
import javaImg from "@/img/java.webp";
import hibernateImg from "@/img/Hibernate.png";
import githubImg from "@/img/GitHub.png";
import gitImg from "@/img/Git-Logo.png";

const technologies = [
  { name: "Swagger", src: swaggerImg },
  { name: "SQL", src: sqlImg },
  { name: "Spring Boot", src: springImg },
  { name: "Maven", src: mavenImg },
  { name: "Java", src: javaImg },
  { name: "Hibernate", src: hibernateImg },
  { name: "GitHub", src: githubImg },
  { name: "Git", src: gitImg },
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
            <CarouselContent className="px-4 md:px-6">
              {technologies.map((tech) => (
                <CarouselItem
                  key={tech.name}
                  className="px-4 md:px-6 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="tech-badge flex-col h-full">
                    <img src={tech.src} alt={tech.name} className="mx-auto h-20 md:h-28 mb-4 object-contain" />
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
            <div key={tech.name} className="tech-badge flex-col text-center px-4 py-3">
              <img src={tech.src} alt={tech.name} className="mx-auto h-16 mb-2 object-contain" />
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
