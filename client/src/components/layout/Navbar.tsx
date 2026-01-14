import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/2_1768354997788.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/story" },
    { name: "Shop", href: "/shop" },
    { name: "Catering", href: "/catering" },
    { name: "Find Us", href: "/locations" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-[hsl(var(--color-cream))]/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <img 
                src={logo} 
                alt="Sunveil Catering" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-[hsl(var(--color-amber))]",
                    location === link.href
                      ? "text-[hsl(var(--color-amber))]"
                      : scrolled
                      ? "text-[hsl(var(--color-deep-forest))]"
                      : "text-[hsl(var(--color-deep-forest))]" // Always dark for visibility on light bg, change if hero is dark
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <button className="relative p-2 text-[hsl(var(--color-deep-forest))] hover:text-[hsl(var(--color-amber))] transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-[hsl(var(--color-rust))] text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button className="bg-[hsl(var(--color-forest))] text-[hsl(var(--color-forest-foreground))] px-5 py-2 rounded-full text-sm font-medium hover:bg-[hsl(var(--color-deep-forest))] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
              Order Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[hsl(var(--color-deep-forest))]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(var(--color-cream))] border-t border-[hsl(var(--color-border))]"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-lg font-medium text-[hsl(var(--color-deep-forest))]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
              <button className="w-full bg-[hsl(var(--color-forest))] text-[hsl(var(--color-forest-foreground))] py-3 rounded-md font-medium">
                Order Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
