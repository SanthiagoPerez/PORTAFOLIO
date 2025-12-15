import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="opacity-0 animate-fade-up">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1 mb-8">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <span className="text-4xl md:text-5xl font-heading font-semibold text-primary">
                  JD
                </span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="opacity-0 animate-fade-up stagger-1 text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground mb-4">
            John Doe
          </h1>

          <p className="opacity-0 animate-fade-up stagger-2 text-xl md:text-2xl text-primary font-medium mb-6">
            Backend Developer
          </p>

          {/* Tagline */}
          <p className="opacity-0 animate-fade-up stagger-3 text-muted-foreground text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Building robust, scalable server-side solutions. 
            Passionate about clean code and system architecture.
          </p>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollToAbout}
            className="opacity-0 animate-fade-up stagger-4 group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Learn more</span>
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
