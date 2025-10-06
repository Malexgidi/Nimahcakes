// components/BestSellers.tsx
import Link from 'next/link';


// const categories = [
//   {
//     title: "Cakes",
//     items: [
//       {
//         id: "cake1",
//       title: "Custom Cake",
//       description: "Personalized cakes for all occasions.",
//       price: "₦30,000",
//       image: "/Cake1.jpg",
//       },
//       {
//         id: "cake2",
//         title: "Custom Cakes",
//         description: "Personalized cakes for all occasions.",
//         price: "₦28,000",
//         image: "/Cake2.jpg",
//       },
//       {
//         id: "cake3",
//         title: "Custom Cakes",
//         description: "Personalized cakes for all occasions.",
//         price: "₦50,000",
//         image: "/Cake3.jpg",
//       },
//       {
//         id: "cake4",
//         title: "Custom Cakes",
//         description: "Personalized cakes for all occasions.",
//         price: "₦45,000",
//         image: "/Cake4.jpg",
//       },
//       {
//         id: "cake5",
//         title: "Custom Cakes",
//         description: "Personalized cakes for all occasions.",
//         price: "₦80,000",
//         image: "/Cake5.jpg",
//       },
//       {
//         id: "cake6",
//         title: "Custom Cakes",
//         description: "Personalized cakes for all occasions.",
//         price: "₦75,000",
//         image: "/Cake6.jpg",
//       },
//     ],
//   },
//   {
//     title: "Small Chops",
//     items: [
//       {
//         id: "chop1",
//         title: "Small Chops Packs",
//         description: "Perfect for parties and gatherings.",
//         price: "₦12,000",
//         image: "/Chops2.jpg",
//       },
//       {
//         id: "chop2",
//         title: "Small Chops Packs",
//         description: "Perfect for parties and gatherings.",
//         price: "₦15,000",
//         image: "/Turkeychips.jpg",
//       },
//       {
//         id: "chop3",
//         title: "Small Chops Packs",
//         description: "Perfect for parties and gatherings.",
//         price: "₦17,000",
//         image: "/Chops3.jpg",
//       },
//       {
//         id: "chop4",
//         title: "Small Chops Packs",
//         description: "Perfect for parties and gatherings.",
//         price: "₦20,000",
//         image: "/Chops4.jpg",
//       },
//       {
//         id: "chop5",
//         title: "Small Chops Packs",
//         description: "Perfect for parties and gatherings.",
//         price: "₦10,000",
//         image: "/Chops5.jpg",
//       },
//       {
//         id: "chop6",
//         title: "Small Chops Packs",
//         description: "Perfect for parties and gatherings.",
//         price: "₦15,000",
//         image: "/Turkey.jpg",
//       },
//     ],
//   },
  // {
  //   title: "Grills",
  //   items: [
  //     {
  //       title: "Grilled Platters",
  //       description: "Savory grilled chicken, beef & sides.",
  //       price: "₦7,500+",
  //       image: "/images/grills.jpg",
  //     },
  //   ],
  // },
// ];

export default function BestSellers() {
  return (
    
    <section className="pb-10 mb-10 border-b border-pink-300 py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-black ">Our Best Sellers</h2>

      {categories.map((category, idx) => (
        <div key={idx} className="mb-16">
          {/* <h3 className="text-2xl font-semibold pt-10 pb-10    text-pink-700">{category.title}</h3> */}

          <div className="grid md:grid-cols-3  gap-10">
            {category.items.map((item, i) => (
              <div
                key={i}
                className="bg-white  rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h4 className="text-xl font-bold ">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="font-bold text-black-500 mt-3">{item.price}</p>
                  <Link href={`/product/${item.id}`}>
  <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
    Buy Now
  </button>
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
