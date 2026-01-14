import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";
import logo from "@assets/1_background_removed_1768426374235.png";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--color-deep-forest))] text-[hsl(var(--color-cream))] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img src={logo} alt="Sunveil Catering" className="h-24 w-auto" />
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Pastries crafted from Somali tradition, baked fresh daily in Atlanta. Bringing the warmth of Mogadishu to your morning.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-[hsl(var(--color-amber))] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[hsl(var(--color-amber))] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[hsl(var(--color-amber))] transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[hsl(var(--color-amber))]">Explore</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="/" className="hover:text-[hsl(var(--color-amber))] transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-[hsl(var(--color-amber))] transition-colors">Order Online</a></li>
              <li><a href="/locations" className="hover:text-[hsl(var(--color-amber))] transition-colors">Find a Shop</a></li>
              <li><a href="/story" className="hover:text-[hsl(var(--color-amber))] transition-colors">Our Story</a></li>
              <li><a href="/catering" className="hover:text-[hsl(var(--color-amber))] transition-colors">Catering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[hsl(var(--color-amber))]">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[hsl(var(--color-amber))]" />
                <span>Atlanta, GA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[hsl(var(--color-amber))]" />
                <a href="mailto:sunveilcatering@gmail.com" className="hover:underline">sunveilcatering@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[hsl(var(--color-amber))]" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[hsl(var(--color-amber))]">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">Join the Sunveil Circle for recipes and exclusive drops.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-none rounded-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-[hsl(var(--color-amber))]"
              />
              <button className="bg-[hsl(var(--color-amber))] text-[hsl(var(--color-deep-forest))] px-4 py-2 rounded-md font-medium text-sm hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Sunveil Catering. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
