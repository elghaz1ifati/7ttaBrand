import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';
import { products, categories, testimonials } from './data';

export default function App() {


  return (
    <div className="size-full overflow-auto">
      <Header />
      <Hero />
      <FeaturedProducts products={products} />
      <About />
      <Categories categories={categories} />
      <Testimonials testimonials={testimonials} />
      <InstagramGallery />
      <Footer />
    </div>
  );
}
