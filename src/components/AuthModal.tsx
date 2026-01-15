import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail } from "lucide-react";
import logo from "@/assets/logo-astraIDE.png";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "signin" | "signup";
}

const AuthModal = ({ open, onOpenChange, mode }: AuthModalProps) => {
  const [authMode, setAuthMode] = useState<"signin" | "signup">(mode);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card border-2 border-border">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="AstraIDE" className="h-12 w-12" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            {authMode === "signin" ? "Welcome Back" : "Create Account"}
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            {authMode === "signin"
              ? "Sign in to continue to AstraIDE"
              : "Get started with AstraIDE for free"}
          </p>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          {/* OAuth Buttons */}
          <Button variant="outline" className="w-full" disabled>
            <Github className="w-5 h-5 mr-2" />
            Continue with GitHub
          </Button>
          <Button variant="outline" className="w-full" disabled>
            <Mail className="w-5 h-5 mr-2" />
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-background"
              />
            </div>
            {authMode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="bg-background"
                />
              </div>
            )}
            <Button variant="hero" className="w-full" disabled>
              {authMode === "signin" ? "Sign In" : "Create Account"}
            </Button>
          </div>

          {/* Toggle Mode */}
          <p className="text-center text-sm text-muted-foreground">
            {authMode === "signin" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setAuthMode("signup")}
                  className="text-primary hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setAuthMode("signin")}
                  className="text-primary hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>

          <p className="text-center text-xs text-muted-foreground">
            Authentication coming soon. Download the beta to get started!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
