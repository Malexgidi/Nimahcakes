// // components/ProductFilter.js
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { products } from '@/data/products'; // wherever your product data lives

// const categories = ['All', 'Cakes', 'Chops', 'Grills', 'Desserts', 'Ice Creams', 'Pastries'];

// export default function ProductFilter() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const filteredProducts =
//     selectedCategory === 'All'
//       ? products
//       : products.filter((product) => product.category === selectedCategory);

//   return (
//     <div className="px-4 py-10">
//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-full text-sm border ${
//               selectedCategory === cat
//                 ? 'bg-red-500 text-white'
//                 : 'bg-white text-black border-gray-300'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//   {filteredProducts.map((product) => (
//     <div
//       key={product.id}
//       className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//     >
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-6 text-left">
//         <h4 className="text-xl font-bold">{product.title}</h4>
//         <p className="text-sm text-gray-600">{product.description}</p>
//         <p className="font-bold text-black-500 mt-3">{product.price.toLocaleString()}</p>
//         <Link href={`/product/${product.id}`}>
//           <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//             Buy Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { products } from '@/data/products'; // wherever your product data lives

// const categories = ['All', 'Cakes', 'Chops', 'Grills', 'Desserts', 'Ice Creams', 'Pastries'];

// export default function ProductFilter() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const groupedProducts = categories.reduce((acc, category) => {
//     if (category === 'All') return acc;
//     acc[category] = products.filter((product) => product.category === category);
//     return acc;
//   }, {});

//   return (
//     <div className="px-4 py-10">
//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-full text-sm border ${
//               selectedCategory === cat
//                 ? 'bg-red-500 text-white'
//                 : 'bg-white text-black border-gray-300'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Display */}
//       {selectedCategory === 'All' ? (
//         // Show all categories grouped
//         Object.entries(groupedProducts).map(([category, items]) => (
//           <div key={category} className="mb-12">
//             <h2 className="text-2xl font-bold mb-4">{category}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {items.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="p-6 text-left">
//                     <h4 className="text-xl font-bold">{product.title}</h4>
//                     <p className="text-sm text-gray-600">{product.description}</p>
//                     <p className="font-bold text-black-500 mt-3">
//                       {product.price.toLocaleString()}
//                     </p>
//                     <Link href={`/product/${product.id}`}>
//                       <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//                         Buy Now
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         // Show only selected category
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter((product) => product.category === selectedCategory)
//               .map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="p-6 text-left">
//                     <h4 className="text-xl font-bold">{product.title}</h4>
//                     <p className="text-sm text-gray-600">{product.description}</p>
//                     <p className="font-bold text-black-500 mt-3">
//                       {product.price.toLocaleString()}
//                     </p>
//                     <Link href={`/product/${product.id}`}>
//                       <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//                         Buy Now
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products'; // Make sure this has real product data

const categories = ['All', 'Cakes', 'Chops', 'Grills', 'Drinks', 'Event Catering'];

export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Group products by category
  const groupedProducts = categories.reduce((acc, category) => {
    if (category === 'All') return acc;
    acc[category] = products.filter((product) => product.category === category);
    return acc;
  }, {});

  const renderProductCard = (product) => (
    <div
      key={product.id}
      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-left">
        <h4 className="text-xl font-bold">{product.title}</h4>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-bold text-black-500 mt-3">
          {product.price.toLocaleString()}
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
    <div className="px-4 py-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border ${
              selectedCategory === cat
                ? 'bg-red-500 text-white'
                : 'bg-white text-black border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Display products */}
      {selectedCategory === 'All' ? (
        Object.entries(groupedProducts).map(([category, items]) => (
          items.length > 0 && (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map(renderProductCard)}
              </div>
            </div>
          )
        ))
      ) : (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === selectedCategory)
              .map(renderProductCard)}
          </div>
        </div>
      )}
    </div>
  );
}
