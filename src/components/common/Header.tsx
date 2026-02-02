import { Link } from 'react-router-dom';
import { useAppStore } from '../../store/appStore';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

/**
 * Header Component
 * 
 * BEST PRACTICE: Keep navigation components simple and focused
 * on their primary purpose - navigation and basic UI controls.
 */

export default function Header() {
  const { theme, toggleTheme } = useAppStore();
  
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold">
          mytCreative
        </Link>
        
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </nav>
      </div>
    </header>
  );
}