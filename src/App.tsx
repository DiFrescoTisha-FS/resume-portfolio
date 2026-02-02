import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
// import NotFoundPage from './pages/NotFoundPage';

/**
 * App Component - Root Application Component
 * 
 * LEARNING NOTE: This is the main App component that sets up:
 * - React Router for client-side routing
 * - Helmet Provider for SEO management
 * - Global layout structure
 * - Route definitions
 * 
 * PATTERN: We wrap the entire app with providers at the top level
 * to make services available throughout the component tree.
 */

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* TODO(TRAINING): Add more routes as needed */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;