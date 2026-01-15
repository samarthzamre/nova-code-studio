import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface CTASectionProps {
  onGetStarted: () => void;
  onScheduleDemo: () => void;
}

const CTASection = ({ onGetStarted, onScheduleDemo }: CTASectionProps) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Stars/Rating */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-chart-4 text-chart-4" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              Loved by 50,000+ developers
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="text-primary">Transform</span>
            <span className="text-foreground"> Your Workflow?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of developers who've already made the switch. 
            Start coding smarter, faster, and more securely with AstraIDE.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" onClick={onGetStarted}>
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={onScheduleDemo}>
              Schedule Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wide">
              Trusted by teams at
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap opacity-50">
              <span className="text-lg font-bold text-foreground">Vercel</span>
              <span className="text-lg font-bold text-foreground">Stripe</span>
              <span className="text-lg font-bold text-foreground">GitHub</span>
              <span className="text-lg font-bold text-foreground">Linear</span>
              <span className="text-lg font-bold text-foreground">Notion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
