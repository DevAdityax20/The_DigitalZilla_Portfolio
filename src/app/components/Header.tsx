import { Logo } from './Logo';
import { Navigation } from './Navigation';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => onNavigate?.("home")} className="cursor-pointer">
          <Logo />
        </button>
        <Navigation onNavigate={onNavigate} />
        <button
          onClick={() => onNavigate?.("contact")}
          className="bg-foreground text-background px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
        >
          Get in touch →
        </button>
      </div>
    </header>
  );
}
