import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-6">{t.about.title}</h2>
          
          <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-12" style={{ boxShadow: 'var(--shadow-glow)' }} />

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              {t.about.paragraph1.split("Backend Developer").map((part, i, arr) => 
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}<span className="text-foreground font-medium">Backend Developer</span>
                  </span>
                ) : part
              )}
            </p>

            <p>
              {t.about.paragraph2}
            </p>

            <p>
              {t.about.paragraph3}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="p-4 md:p-6 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30" style={{ boxShadow: 'var(--shadow-card)' }}>
              <p className="text-2xl md:text-4xl font-heading font-semibold text-primary mb-2 text-glow">5+</p>
              <p className="text-xs md:text-sm text-muted-foreground">{t.about.yearsExp}</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30" style={{ boxShadow: 'var(--shadow-card)' }}>
              <p className="text-2xl md:text-4xl font-heading font-semibold text-primary mb-2 text-glow">50+</p>
              <p className="text-xs md:text-sm text-muted-foreground">{t.about.projects}</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30" style={{ boxShadow: 'var(--shadow-card)' }}>
              <p className="text-2xl md:text-4xl font-heading font-semibold text-primary mb-2 text-glow">20+</p>
              <p className="text-xs md:text-sm text-muted-foreground">{t.about.clients}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
