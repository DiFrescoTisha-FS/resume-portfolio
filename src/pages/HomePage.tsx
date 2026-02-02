import { Helmet } from 'react-helmet-async';

/**
 * Home Page Component - mytCreative Application Starter Kit (ASK)
 * * This component serves as the primary entry point for a new application.
 * It has been stripped of all project-specific logic (e.g., SSNC) and UI.
 * Only the Helmet component for SEO metadata remains.
 * All new project content will be built within this wrapper.
 */

export default function HomePage() {
  
  return (
    <>
      <Helmet>
        <title>Home | [Project Name] - mytCreative</title>
        <meta name="description" content="A custom-built application using the mytCreative Application Starter Kit (ASK) - React, TypeScript, and Tailwind CSS." />
      </Helmet>

      {/* This is the main content area for the application's homepage.
        It is intentionally blank to serve as a clean starting point.
      */}
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to Your New ASK Project
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Start building your custom solution here.
        </p>
      </div>
    </>
  );
}