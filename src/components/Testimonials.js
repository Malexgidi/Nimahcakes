// components/Testimonials.tsx

const testimonials = [
    { name: "Zainab A.", text: "The cake was heavenly and beautifully decorated!" },
    { name: "Tunde K.", text: "Fast delivery and everyone loved the small chops!" },
    { name: "Ifeoma M.", text: "Booked them for my wedding — best decision ever!" },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-20 px-6 pb-[100px] mb-10 border-b border-pink-300 border-spacing-1 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-black ">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-red-100 p-6 rounded-lg shadow text-left">
              <p className="italic mb-2">“{t.text}”</p>
              <p className="font-bold text-sm text-black">– {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  