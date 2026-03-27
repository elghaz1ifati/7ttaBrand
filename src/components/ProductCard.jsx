export default function ProductCard({ product }) {
  return (
    <article className="group cursor-pointer animate-fade-scale">
      <div className="aspect-[3/4] bg-neutral-100 mb-3 sm:mb-4 overflow-hidden rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-sm sm:text-base mb-1 sm:mb-2">{product.name}</h3>
      <p className="text-neutral-600 text-sm sm:text-base">{product.price}</p>
    </article>
  );
}
