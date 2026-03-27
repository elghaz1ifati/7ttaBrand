export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 sm:mb-16 tracking-wide animate-fade-up">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <p className="text-neutral-700 mb-4 sm:mb-6 italic leading-relaxed">"{item.text}"</p>
              <div>
                <p className="tracking-wide">{item.name}</p>
                <p className="text-sm text-neutral-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
