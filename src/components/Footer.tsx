import { Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/santiago-perez-/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/SanthiagoPerez",
  },
  {
    name: "Email",
    icon: Mail,
    url: "sperez.pino07@gmail.com",
  },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-secondary/20 border-t border-border/30">
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
            Tektōn<span className="text-primary">.</span>dev
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
            © {new Date().getFullYear()} Santiago Pérez. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
