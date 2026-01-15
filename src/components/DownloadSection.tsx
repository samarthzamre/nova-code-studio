import { Button } from "@/components/ui/button";
import {
  Download,
  Apple,
  Monitor,
  Terminal,
  Check,
  ArrowRight,
} from "lucide-react";

const platforms = [
  {
    icon: Apple,
    name: "macOS",
    version: "v1.0.0-beta",
    details: "Apple Silicon & Intel",
    downloadLink: "#",
    primary: true,
  },
  {
    icon: Monitor,
    name: "Windows",
    version: "v1.0.0-beta",
    details: "Windows 10/11 (64-bit)",
    downloadLink: "#",
    primary: false,
  },
  {
    icon: Terminal,
    name: "Linux",
    version: "v1.0.0-beta",
    details: ".deb, .rpm, .AppImage",
    downloadLink: "#",
    primary: false,
  },
];

const systemReqs = [
  "4GB RAM minimum (8GB recommended)",
  "2GB disk space",
  "Modern CPU with SSE4.2 support",
  "Internet connection for AI features",
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-primary/30 bg-primary/10">
            <Download className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Available Now in Public Beta
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Download </span>
            <span className="text-primary">AstraIDE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with the most powerful AI-first coding environment.
            Free to download, free to use.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`p-6 border-2 bg-card text-center ${
                platform.primary
                  ? "border-primary shadow-glow-lg"
                  : "border-border"
              }`}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-secondary mx-auto mb-4">
                <platform.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {platform.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {platform.version}
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                {platform.details}
              </p>
              <Button
                variant={platform.primary ? "hero" : "heroOutline"}
                className="w-full"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 bg-secondary/50 border border-border">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              System Requirements
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {systemReqs.map((req) => (
                <li key={req} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Alternative Install */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Or install via package managers:
            </p>
            <div className="inline-flex items-center gap-4 p-3 bg-card border border-border font-mono text-sm">
              <code className="text-primary">brew install astraIDE</code>
              <Button variant="ghost" size="sm" className="h-auto p-1">
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
