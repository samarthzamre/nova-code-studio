import logo from "@/assets/logo-astraIDE.png";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap", "Downloads"],
    Resources: ["Documentation", "API Reference", "Guides", "Blog", "Community"],
    Company: ["About", "Careers", "Press", "Contact", "Legal"],
    Support: ["Help Center", "Status", "Security", "Privacy", "Terms"],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AstraIDE" className="h-8 w-8" />
              <span className="text-xl font-bold text-foreground">AstraIDE</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              The AI-first coding environment built for speed, security, and
              developer ergonomics.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AstraIDE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Press <kbd className="px-1.5 py-0.5 bg-secondary border border-border text-xs">⌘K</kbd> anywhere to search
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
