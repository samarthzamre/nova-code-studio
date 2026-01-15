import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code2,
  FileText,
  Rocket,
  Terminal,
  Zap,
  ArrowRight,
} from "lucide-react";

const docCategories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Quick start guide to get AstraIDE up and running in minutes",
    link: "#",
  },
  {
    icon: Code2,
    title: "AI Features",
    description: "Learn about autocomplete, agents, and AI-powered workflows",
    link: "#",
  },
  {
    icon: Terminal,
    title: "Terminal & CLI",
    description: "Sandboxed terminal integration and command line tools",
    link: "#",
  },
  {
    icon: FileText,
    title: "API Reference",
    description: "Complete API documentation for extensions and integrations",
    link: "#",
  },
  {
    icon: BookOpen,
    title: "Guides & Tutorials",
    description: "Step-by-step tutorials for common development workflows",
    link: "#",
  },
  {
    icon: Zap,
    title: "Best Practices",
    description: "Tips and tricks to maximize your productivity with AstraIDE",
    link: "#",
  },
];

const DocsSection = () => {
  return (
    <section id="docs" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Documentation & </span>
            <span className="text-primary">Resources</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master AstraIDE. From quick starts to advanced
            integrations.
          </p>
        </div>

        {/* Docs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {docCategories.map((category) => (
            <a
              key={category.title}
              href={category.link}
              className="group p-6 bg-card border-2 border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View Full Documentation
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocsSection;
