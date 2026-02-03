import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * LEARNING NOTE: Zustand Store for Application-wide State Management
 *
 * This store handles global application state including theme preferences.
 * We use Zustand because it's lightweight, TypeScript-friendly, and requires
 * minimal boilerplate compared to Redux.
 *
 * PATTERN: The persist middleware automatically saves state to localStorage,
 * ensuring user preferences persist across sessions.
 */

// Type definition for theme options
type Theme = 'dark' | 'light';

// Interface defining the shape of our app store
interface AppState {
  // Current theme ('dark' or 'light')
  theme: Theme;

  // Toggle between dark and light themes
  toggleTheme: () => void;

  // Set a specific theme
  setTheme: (theme: Theme) => void;

  // Check if current theme is dark
  isDarkMode: () => boolean;
}

/**
 * BEST PRACTICE: Apply theme class to document root
 * This function syncs the theme state with the actual DOM
 */
const applyThemeToDocument = (theme: Theme) => {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.remove('light');
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
  }
};

/**
 * App Store - Global State Management
 *
 * Usage:
 * import { useAppStore } from '@/store/appStore';
 *
 * // In component:
 * const { theme, toggleTheme } = useAppStore();
 */
export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Default to dark theme for our Electric Neon aesthetic
      theme: 'dark',

      toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark';
        applyThemeToDocument(newTheme);
        set({ theme: newTheme });
      },

      setTheme: (theme: Theme) => {
        applyThemeToDocument(theme);
        set({ theme });
      },

      isDarkMode: () => get().theme === 'dark',
    }),
    {
      name: 'app-storage', // localStorage key
      /**
       * LEARNING NOTE: onRehydrateStorage runs after state is loaded from localStorage
       * We use it to apply the persisted theme to the document on page load
       */
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyThemeToDocument(state.theme);
        }
      },
    }
  )
);

/**
 * BEST PRACTICE: Initialize theme on app load
 * Call this function in your app's entry point to ensure
 * the theme is applied before the first render
 */
export const initializeTheme = () => {
  // Get persisted state or default to dark
  const storedState = localStorage.getItem('app-storage');
  let theme: Theme = 'dark';

  if (storedState) {
    try {
      const parsed = JSON.parse(storedState);
      theme = parsed.state?.theme || 'dark';
    } catch {
      // If parsing fails, use default
      theme = 'dark';
    }
  }

  applyThemeToDocument(theme);
};
