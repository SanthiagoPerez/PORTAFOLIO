const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-6">About Me</h2>
          
          <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-12" />

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a dedicated <span className="text-foreground font-medium">Backend Developer</span> with 
              a passion for crafting efficient, scalable, and maintainable server-side applications. 
              With expertise in designing RESTful APIs, managing databases, and building microservices 
              architectures, I turn complex business requirements into elegant technical solutions.
            </p>

            <p>
              My approach to development centers on <span className="text-foreground font-medium">clean code principles</span> and 
              thoughtful system design. I believe that robust backend infrastructure is the foundation 
              of any successful application, and I take pride in building systems that are not just 
              functional, but also performant and secure.
            </p>

            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing knowledge with the developer community. I'm always eager to take 
              on challenging projects that push the boundaries of what's possible.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <p className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-2">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <p className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <p className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-2">20+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
