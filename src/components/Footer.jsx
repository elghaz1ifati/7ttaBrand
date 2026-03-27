import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-2xl tracking-wider mb-4">HETTA</h3>
            <p className="text-neutral-400 text-sm sm:text-base">Premium curated thrift clothing from Morocco</p>
          </div>

          <div>
            <h4 className="tracking-wide mb-4">Shop</h4>
            <ul className="space-y-2 text-neutral-400 text-sm sm:text-base">
              <li><button className="hover:text-white transition-colors">Men</button></li>
              <li><button className="hover:text-white transition-colors">Women</button></li>
              <li><button className="hover:text-white transition-colors">Vintage</button></li>
              <li><button className="hover:text-white transition-colors">Streetwear</button></li>
            </ul>
          </div>

          <div>
            <h4 className="tracking-wide mb-4">About</h4>
            <ul className="space-y-2 text-neutral-400 text-sm sm:text-base">
              <li><button className="hover:text-white transition-colors">Our Story</button></li>
              <li><button className="hover:text-white transition-colors">Sustainability</button></li>
              <li><button className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3 text-neutral-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@hetta.ma</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>@hetta.morocco</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Marrakech, Morocco</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">© 2026 Hetta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
