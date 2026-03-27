import ProductCard from './ProductCard';

export default function FeaturedProducts({ products }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl text-center mb-12 sm:mb-16 tracking-wide animate-fade-up">Featured Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
