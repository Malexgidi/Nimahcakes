// export default function ProductList({ title, items }) {
//     return (
//       <section className="py-20 px-6 md:px-20 bg-pink-50">
//         <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {items.map((item, i) => (
//             <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
//               <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
//               <div className="p-6 text-left">
//                 <h4 className="text-xl font-bold">{item.title}</h4>
//                 <p className="text-sm text-gray-600">{item.description}</p>
//                 <p className="font-bold text-pink-500 mt-3">{item.price}</p>
//                 <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

// components/ProductList.js

export default function ProductList({ title, items }) {
    return (
      <section className="py-20 px-6 md:px-20 bg-pink-50">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
  
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="font-bold text-pink-500 mt-3">{item.price}</p>
                <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  