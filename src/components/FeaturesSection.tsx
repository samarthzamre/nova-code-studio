import {
  Zap,
  Shield,
  Bot,
  Terminal,
  Users,
  Search,
  GitBranch,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Autocomplete",
    description:
      "AI-powered completions that understand your codebase context. Get suggestions in under 300ms.",
    color: "text-primary",
  },
  {
    icon: Bot,
    title: "Agent Workflows",
    description:
      "Issue high-level tasks and watch as agents refactor, write tests, or generate documentation.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Local-First Security",
    description:
      "Keep your code and model usage entirely local. Perfect for privacy-focused teams.",
    color: "text-chart-3",
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description:
      "Sandboxed command execution with preserved history and capability-limited safe mode.",
    color: "text-chart-4",
  },
  {
    icon: Search,
    title: "Smart Code Search",
    description:
      "Meilisearch-powered project-wide search with symbol navigation and semantic understanding.",
    color: "text-chart-2",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Share sessions and pair-edit with live cursors, changes sync, and voice integration.",
    color: "text-primary",
  },
  {
    icon: GitBranch,
    title: "Replay & Explain",
    description:
      "Every AI edit stores a replayable diff. Ask the AI to explain reasoning or undo changes.",
    color: "text-accent",
  },
  {
    icon: Lock,
    title: "Secure-for-AI Mode",
    description:
      "Sandboxing architecture with built-in prompt-injection detection and RBAC controls.",
    color: "text-destructive",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Built for </span>
            <span className="text-primary">Modern Development</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to enhance your productivity without
            compromising security or performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card border-2 border-border hover:border-primary/50 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center bg-secondary mb-4 ${feature.color}`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
