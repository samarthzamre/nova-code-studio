import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, X } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-card border-2 border-border p-0 overflow-hidden">
        <DialogHeader className="p-4 border-b border-border">
          <DialogTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            AstraIDE Demo
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-background flex items-center justify-center">
          {/* Placeholder for demo video */}
          <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 flex items-center justify-center">
              <Play className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Demo Video Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're preparing an in-depth walkthrough of AstraIDE's features.
              In the meantime, download the beta and experience it firsthand!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
