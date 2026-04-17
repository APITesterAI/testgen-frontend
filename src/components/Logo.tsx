import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

export const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  return (
    <Link to="/" className={`flex items-center gap-2 font-bold text-lg ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero shadow-soft">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className={textColor}>
        TestGen <span className="text-gradient">AI</span>
      </span>
    </Link>
  );
};
