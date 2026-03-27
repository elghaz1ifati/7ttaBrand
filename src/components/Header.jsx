import { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200 animate-fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl tracking-wider">HETTA</div>
          <div className="flex items-center gap-8">
            <button className="hidden sm:block hover:text-neutral-600 transition-colors">Shop</button>
            <button className="hidden sm:block hover:text-neutral-600 transition-colors">About</button>
            <button className="hidden sm:block hover:text-neutral-600 transition-colors">Contact</button>
            <button className="hover:text-neutral-600 transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
