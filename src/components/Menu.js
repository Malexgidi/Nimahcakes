// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import { products } from '@/data/products';

  
//   export default function MenuPage() {
//     return (
//       <> 
//        <Navbar />
     
//       <section id="menu" className="bg-red-100 py-20 px-6 md:px-20">
//         <h2 className="text-3xl font-bold text-center mb-16">Our Menu</h2>
  
//         {/* Cakes Section */}
//         <div id="cakes" className="mb-24 border-b pb-16">
//           <h3 className="text-2xl font-semibold text-black mb-10">Cakes</h3>
//           <div className="grid md:grid-cols-3 gap-10">
//             {cakes.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//               >
//                 <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h4 className="text-xl font-bold">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.description}</p>
//                   <p className="font-bold text-black mt-3">{item.price}</p>
//                   <Link href={`/product/${item.id}`}>
//   <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//     Buy Now
//   </button>
// </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
  
//         {/* Small Chops Section */}
//         <div id="smallchops" className="mb-24">
//           <h3 className="text-2xl font-semibold text-black mb-10">Small Chops & Grills</h3>
//           <div className="grid md:grid-cols-3 gap-10">
//             {smallChops.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//               >
//                 <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h4 className="text-xl font-bold">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.description}</p>
//                   <p className="font-bold text-black mt-3">{item.price}</p>
//                   <Link href={`/product/${item.id}`}>
//   <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//     Buy Now
//   </button>
// </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <footer className="text-center  text-gray-500 text-sm mt-12 mb-4">
//         &copy; {new Date().getFullYear()} Nimah's Cakes & Cuisine. All rights reserved.
//       </footer>
//       </>
//     );
//   }
  

// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import { products } from '@/data/products';

// export default function MenuPage() {
//   // Get unique categories from products
//   const categories = [...new Set(products.map((p) => p.category))];

//   const renderProductCard = (product: any) => (
//     <div
//       key={product.id}
//       className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//     >
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-6">
//         <h4 className="text-xl font-bold">{product.title}</h4>
//         <p className="text-sm text-gray-600">{product.description}</p>
//         <p className="font-bold text-black mt-3">{product.price}</p>
//         <Link href={`/product/${product.id}`}>
//           <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//             Buy Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <Navbar />

//       <section id="menu" className="bg-red-100 py-20 px-6 md:px-20">
//         <h2 className="text-3xl font-bold text-center mb-16">Our Menu</h2>

//         {/* Loop over categories */}
//         {categories.map((category) => {
//           const items = products.filter((p) => p.category === category);

//           return (
//             items.length > 0 && (
//               <div key={category} className="mb-24 border-b pb-16">
//                 <h3 className="text-2xl font-semibold text-black mb-10">
//                   {category}
//                 </h3>
//                 <div className="grid md:grid-cols-3 gap-10">
//                   {items.map(renderProductCard)}
//                 </div>
//               </div>
//             )
//           );
//         })}
//       </section>

//       <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
//         &copy; {new Date().getFullYear()} Nimah&apos;s Cakes & Cuisine. All rights reserved.
//       </footer>
//     </>
//   );
// }


// src/components/Menu.js
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { products } from '@/data/products'; // <-- if this is default export, use: import products from '@/data/products';

export default function Menu() {
  // guard in case products is undefined
  const allProducts = products || [];

  // Build a unique list of categories from the product data
  const categories = [...new Set(allProducts.map((p) => p.category).filter(Boolean))];

  const renderProductCard = (product) => (
    <div
      key={product.id}
      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title || product.name || 'product'}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold">{product.title || product.name}</h4>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-bold text-black mt-3">
          {typeof product.price === 'number' ? `₦${product.price.toLocaleString()}` : product.price}
        </p>
        <Link href={`/product/${product.id}`}>
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <section id="menu" className="bg-red-100 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-16">Our Menu</h2>

        {categories.map((category) => {
          const items = allProducts.filter((p) => p.category === category);
          // Optional: prettify category title (e.g., "small-chops" -> "Small Chops")
          const niceTitle = category
            ? String(category)
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, (c) => c.toUpperCase())
            : 'Uncategorized';

          return (
            items.length > 0 && (
              <div key={category} className="mb-24 border-b pb-16">
                <h3 className="text-2xl font-semibold text-black mb-10">{niceTitle}</h3>
                <div className="grid md:grid-cols-3 gap-10">
                  {items.map(renderProductCard)}
                </div>
              </div>
            )
          );
        })}
      </section>

      <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
        &copy; {new Date().getFullYear()} Nimah&apos;s Cakes & Cuisine. All rights reserved.
      </footer>
    </>
  );
}
