export default function Hero() {
  return (
    <section className="pt-16 relative">
      <div className="relative h-[70vh] sm:h-[85vh] bg-neutral-100">
        <img
          src="https://images.unsplash.com/photo-1744135995163-5096abf1841c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Vintage fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wider mb-4 sm:mb-6 animate-fade-up">HETTA</h1>
          <p className="text-xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 font-light tracking-wide animate-fade-up animation-delay-100">
            Timeless Style, Curated for You
          </p>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 font-light tracking-wide animate-fade-up animation-delay-200">
            Premium thrift clothing from Morocco
          </p>
          <button className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 hover:bg-neutral-100 transition-colors tracking-wider animate-fade-up animation-delay-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
