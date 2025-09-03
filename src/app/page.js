import Hero from '@/components/Hero';
import ProductFilter from '@/components/ProductFilter';
import Navbar from '@/components/Navbar';
// import Offerings from '@/components/Offerings';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
// import BestSellers from '@/components/BestSellers';
import Testimonials from '@/components/Testimonials';
// import products from '@/data/products';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ProductFilter />
      {/* <Offerings /> */}
      {/* <BestSellers /> */}
      <Testimonials />
      <BookingSection />
      <Footer />
    </main>
  );
}