import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { initializeTheme } from './store/appStore';

/**
 * Application Entry Point
 *
 * LEARNING NOTE: This is where our React application starts.
 * We use React 18's createRoot API for better performance and
 * concurrent rendering features.
 *
 * BEST PRACTICE: StrictMode helps identify potential problems
 * in development by running effects twice and highlighting
 * deprecated patterns.
 */

// Initialize theme before render to prevent flash of wrong theme
initializeTheme();

// Get the root DOM element
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

// Create React root and render the app
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * PERFORMANCE NOTES:
 * - React 18's concurrent rendering improves user experience
 * - StrictMode only runs in development to catch issues early
 * - CSS is imported here to ensure it's loaded before the app renders
 * 
 * TODO(TRAINING): Learn about React 18 features like:
 * - Automatic batching
 * - Suspense for data fetching
 * - Concurrent rendering
 * - StartTransition API
 */
