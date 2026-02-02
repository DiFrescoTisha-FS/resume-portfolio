/**
 * Footer Component
 * 
 * LEARNING NOTE: A simple footer component that stays at the
 * bottom of the page thanks to the flex layout in Layout.tsx
 */

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} mytCreative. All rights reserved.</p>
          <p className="mt-2">
            Advancing future generations of digital creative minds
          </p>
        </div>
      </div>
    </footer>
  );
}