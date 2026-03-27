export default function InstagramGallery() {
  const images = [
    'https://images.unsplash.com/photo-1717852359279-ff4d14b62097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'https://images.unsplash.com/photo-1717852359327-57882a70584c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'https://images.unsplash.com/photo-1717852360487-ca79b0531f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'https://images.unsplash.com/photo-1717852360273-0464d627d3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'https://images.unsplash.com/photo-1717852359428-24eb87f419cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    'https://images.unsplash.com/photo-1717852359446-93f531991637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  ];

  return (
    <section className="py-16 sm:py-24 animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 tracking-wide">Follow Us on Instagram</h2>
          <p className="text-neutral-600 text-base sm:text-lg">@hetta.morocco</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
          {images.map((img, index) => (
            <div key={index} className="aspect-square bg-neutral-100 overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <img
                src={img}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
