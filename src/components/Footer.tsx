import { Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourprofile",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
  },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary/30 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-heading font-semibold text-2xl text-foreground mb-6"
          >
            dev<span className="text-primary">.</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
