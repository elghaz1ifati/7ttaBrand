export default function Categories({ categories }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-up">
      <h2 className="text-3xl sm:text-4xl text-center mb-12 sm:mb-16 tracking-wide">Shop by Category</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="aspect-square bg-neutral-100 hover:bg-neutral-200 transition-colors flex flex-col items-center justify-center gap-2 sm:gap-4 rounded-xl shadow-sm hover:shadow-md"
          >
            <span className="text-xl sm:text-2xl tracking-wide">{category.name}</span>
            <span className="text-xs sm:text-sm text-neutral-600">{category.count}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
