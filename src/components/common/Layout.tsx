import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout Component
 * 
 * LEARNING NOTE: This component provides a consistent structure
 * for all pages in the application. It's a common pattern in React
 * to have a layout wrapper that includes navigation, footer, etc.
 */

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      {/* SEO Management */}
      <Helmet>
        <title>{title ? `${title} | mytCreative` : 'mytCreative'}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* PATTERN: flex-grow ensures the main content fills available space */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
}