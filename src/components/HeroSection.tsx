import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="opacity-0 animate-fade-up">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 p-1 mb-8 shadow-lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden border border-border/50">
                <span className="text-4xl md:text-5xl font-heading font-semibold text-primary text-glow">
                  JD
                </span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="opacity-0 animate-fade-up stagger-1 text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground mb-4">
            John Doe
          </h1>

          <p className="opacity-0 animate-fade-up stagger-2 text-xl md:text-2xl text-primary font-medium mb-6 text-glow">
            {t.hero.role}
          </p>

          {/* Tagline */}
          <p className="opacity-0 animate-fade-up stagger-3 text-muted-foreground text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            {t.hero.tagline}
          </p>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollToAbout}
            className="opacity-0 animate-fade-up stagger-4 group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">{t.hero.learnMore}</span>
            <ArrowDown
              size={20}
              className="animate-bounce"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
