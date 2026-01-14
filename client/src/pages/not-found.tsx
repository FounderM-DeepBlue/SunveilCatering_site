import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[hsl(var(--color-cream))] text-[hsl(var(--color-deep-forest))]">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-9xl font-serif font-bold text-[hsl(var(--color-rust))] opacity-20">404</h1>
        <h2 className="text-4xl font-serif font-bold">Page Not Found</h2>
        <p className="text-lg opacity-70 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <a className="inline-flex items-center gap-2 text-[hsl(var(--color-forest))] font-bold hover:text-[hsl(var(--color-amber))] transition-colors border-b-2 border-transparent hover:border-[hsl(var(--color-amber))] pb-1 mt-8">
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
