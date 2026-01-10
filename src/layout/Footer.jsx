import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/terrorbladegodlike", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mihail-ternovetchii-6a2030244/", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Функция для плавного скролла без изменения URL
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const cleanId = targetId.replace("#", "");
    const element = document.getElementById(cleanId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              MT<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Mihail Ternovetchii. All rights reserved.
            </p>
          </div>

          {/* Навигационные ссылки (внутренние) */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Социальные ссылки (внешние) */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"           // Открывать в новом окне
                rel="noopener noreferrer" // Безопасность
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};