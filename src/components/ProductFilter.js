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

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { products } from '@/data/products'; // Make sure this has real product data

// const categories = ['All', 'Cakes', 'Chops', 'Grills', 'Drinks', 'Events'];

// export default function ProductFilter() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Group products by category
//   const groupedProducts = categories.reduce((acc, category) => {
//     if (category === 'All') return acc;
//     acc[category] = products.filter((product) => product.category === category);
//     return acc;
//   }, {});

//   const renderProductCard = (product) => (
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
//         <p className="font-bold text-black-500 mt-3">
//           {product.price.toLocaleString()}
//         </p>
//         <Link href={`/product/${product.id}`}>
//           <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//             Buy Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );

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

//       {/* Display products */}
//       {selectedCategory === 'All' ? (
//         Object.entries(groupedProducts).map(([category, items]) => (
//           items.length > 0 && (
//             <div key={category} className="mb-12">
//               <h2 className="text-2xl font-bold mb-4">{category}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {items.map(renderProductCard)}
//               </div>
//             </div>
//           )
//         ))
//       ) : (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter((product) => product.category === selectedCategory)
//               .map(renderProductCard)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { products } from '@/data/products'; // Ensure products have "subcategory" for chops

// const categories = ['All', 'Cakes', 'Chops', 'Grills', 'Drinks', 'Events'];
// const chopSubcategories = ['Economy Pack', 'Platter Pack'];

// export default function ProductFilter() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);

//   // Group products by category
//   const groupedProducts = categories.reduce((acc, category) => {
//     if (category === 'All') return acc;
//     acc[category] = products.filter((product) => product.category === category);
//     return acc;
//   }, {});

//   const renderProductCard = (product) => (
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
//         <p className="font-bold text-black-500 mt-3">
//           {product.price.toLocaleString()}
//         </p>
//         <Link href={`/product/${product.id}`}>
//           <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//             Buy Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <div className="px-4 py-10">
//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setSelectedCategory(cat);
//               setSelectedSubcategory(null); // reset subcategory when changing category
//             }}
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

//       {/* If Chops is selected, show dropdown */}
//       {selectedCategory === 'Chops' && (
//         <div className="flex justify-center mb-8">
//           <select
//             value={selectedSubcategory || ''}
//             onChange={(e) => setSelectedSubcategory(e.target.value)}
//             className="border border-gray-300 px-4 py-2 rounded"
//           >
//             <option value="">Select Pack</option>
//             {chopSubcategories.map((sub) => (
//               <option key={sub} value={sub}>
//                 {sub}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Display products */}
//       {selectedCategory === 'All' ? (
//         Object.entries(groupedProducts).map(([category, items]) => (
//           items.length > 0 && (
//             <div key={category} className="mb-12">
//               <h2 className="text-2xl font-bold mb-4">{category}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {items.map(renderProductCard)}
//               </div>
//             </div>
//           )
//         ))
//       ) : selectedCategory === 'Chops' && selectedSubcategory ? (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">
//             {selectedSubcategory}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter(
//                 (product) =>
//                   product.category === 'Chops' &&
//                   product.subcategory === selectedSubcategory
//               )
//               .map(renderProductCard)}
//           </div>
//         </div>
//       ) : selectedCategory !== 'Chops' ? (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter((product) => product.category === selectedCategory)
//               .map(renderProductCard)}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { products } from '@/data/products'; // Ensure chops have "subcategory"

// const categories = ['All', 'Cakes', 'Chops', 'Grills', 'Drinks', 'Events', "Sides"];
// const chopSubcategories = ['Economy Pack', 'Platter Pack'];

// export default function ProductFilter() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);

//   // Group products by category
//   const groupedProducts = categories.reduce((acc, category) => {
//     if (category === 'All') return acc;
//     acc[category] = products.filter((product) => product.category === category);
//     return acc;
//   }, {});

   
// const renderProductCard = (product) => (
//   <div
//     key={product.id}
//     className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//   >
//     <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
//       {product.video ? (
//         <video
//           src={product.video || null}
//           controls
//           className="w-full h-64 object-cover"
//         />
//       ) : product.image ? (
//         <img
//           src={product.image || null}
//           alt={product.title || "Product image"}
//           className="w-full h-64 object-cover"
//         />
//       ) : (
//         <span className="text-gray-400">No preview available</span>
//       )}
//     </div>

//     <div className="p-6 text-left">
//       <h4 className="text-xl font-bold">{product.title || "Untitled"}</h4>
//       <p className="text-sm text-gray-600">{product.description || ""}</p>

//       <p className="font-bold text-black-500 mt-3">
//         {typeof product.price === "number"
//           ? `₦${product.price.toLocaleString()}`
//           : "Price not available"}
//       </p>

//       {product.category === "Events" ? (
//         <Link href="#booking">
//           <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//             Book Now
//           </button>
//         </Link>
//       ) : (
//         <Link href={`/product/${product.id}`}>
//           <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//             Buy Now
//           </button>
//         </Link>
//       )}
//     </div>
//   </div>
// );



//   return (
//     <div className="px-4 py-10">
//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setSelectedCategory(cat);
//               setSelectedSubcategory(null); // reset subcategory when switching
//             }}
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

//       {/* Subcategory highlights when Chops is selected */}
//       {selectedCategory === 'Chops' && (
//         <div className="flex justify-center gap-4 mb-8">
//           {chopSubcategories.map((sub) => (
//             <button
//               key={sub}
//               onClick={() =>
//                 setSelectedSubcategory(
//                   selectedSubcategory === sub ? null : sub
//                 )
//               }
//               className={`px-4 py-2 rounded-lg text-sm border transition ${
//                 selectedSubcategory === sub
//                   ? 'bg-red-500 text-white'
//                   : 'bg-white text-black border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {sub}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Display products */}
//       {selectedCategory === 'All' ? (
//         Object.entries(groupedProducts).map(([category, items]) => (
//           items.length > 0 && (
//             <div key={category} className="mb-12">
//               <h2 className="text-2xl font-bold mb-4">{category}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {items.map(renderProductCard)}
//               </div>
//             </div>
//           )
//         ))
//       ) : selectedCategory === 'Chops' ? (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">
//             {selectedSubcategory || 'Chops'}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter(
//                 (product) =>
//                   product.category === 'Chops' &&
//                   (!selectedSubcategory ||
//                     product.subcategory === selectedSubcategory)
//               )
//               .map(renderProductCard)}
//           </div>
//         </div>
//       ) : (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter((product) => product.category === selectedCategory)
//               .map(renderProductCard)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { products } from '@/data/products'; // Ensure chops have "subcategory"

// const categories = ['All', 'Cakes', 'Chops', 'Grills', 'Drinks', 'Events', "Sides",'Wedding Cakes',];
// const chopSubcategories = ['Pack Menu', 'Platter Menu'];

// export default function ProductFilter() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);

//   // Group products by category
//   const groupedProducts = categories.reduce((acc, category) => {
//     if (category === 'All') return acc;
//     acc[category] = products.filter((product) => product.category === category);
//     return acc;
//   }, {});

//   const renderProductCard = (product) => {
//     // ✅ Pick correct preview (video > image > images[0])
//     const previewImage = product.image || (product.images && product.images[0]);

//     return (
//       <div
//         key={product.id}
//         className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//       >
     
//         <div className="w-full h-64 bg-gray-100 overflow-hidden">
//           {product.video ? (
//             <video
//               src={product.video}
//               controls
//               className="w-full h-full object-cover"
//             />
//           ) : previewImage ? (
//          <img
//            src={previewImage}
//            alt={product.title || "Product image"}
//            className="w-full h-full object-cover"
//          />
//                ) : (
//          <span className="flex items-center justify-center h-full text-gray-400">
//       No preview available
//          </span>
//           )}
//           </div>


//         <div className="p-6 text-left">
//           <h4 className="text-xl font-bold">{product.title || "Untitled"}</h4>
//           <p className="text-sm text-gray-600">{product.description || ""}</p>

//           {/* <p className="font-bold text-black-500 mt-3">
//             {typeof product.price === "number"
//               ? `₦${product.price.toLocaleString()}`
//               : "Price not available"}
//           </p> */}

//          {/* <p className="font-bold text-black-500 mt-3">
//            {product.category === "Cakes"
//              ? `₦${16000.toLocaleString()} - ₦${140000.toLocaleString()}`
//              : typeof product.price === "number"
//              ? `₦${product.price.toLocaleString()}`
//              : "Price not available"}
//          </p> */}

//          <p className="font-bold text-black-500 mt-3">
//            {product.category === "Cakes"
//              ? `₦${(16000).toLocaleString()} - ₦${(140000).toLocaleString()}`
//              : typeof product.price === "number"
//              ? `₦${product.price.toLocaleString()}`
//              : "Price not available"}
//          </p>


//           {product.category === "Events" ? (
//             <Link href="#booking">
//               <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//                 Book Now
//               </button>
//             </Link>
//           ) : (
//             <Link href={`/product/${product.id}`}>
//               <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//                 Buy Now
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="px-4 py-10">
//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setSelectedCategory(cat);
//               setSelectedSubcategory(null); // reset subcategory when switching
//             }}
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

//       {/* Subcategory highlights when Chops is selected */}
//       {selectedCategory === 'Chops' && (
//         <div className="flex justify-center gap-4 mb-8">
//           {chopSubcategories.map((sub) => (
//             <button
//               key={sub}
//               onClick={() =>
//                 setSelectedSubcategory(
//                   selectedSubcategory === sub ? null : sub
//                 )
//               }
//               className={`px-4 py-2 rounded-lg text-sm border transition ${
//                 selectedSubcategory === sub
//                   ? 'bg-red-500 text-white'
//                   : 'bg-white text-black border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {sub}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Display products */}
//       {selectedCategory === 'All' ? (
//         Object.entries(groupedProducts).map(([category, items]) => (
//           items.length > 0 && (
//             <div key={category} className="mb-12">
//               <h2 className="text-2xl font-bold mb-4">{category}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {items.map(renderProductCard)}
//               </div>
//             </div>
//           )
//         ))
//       ) : selectedCategory === 'Chops' ? (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">
//             {selectedSubcategory || 'Chops'}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter(
//                 (product) =>
//                   product.category === 'Chops' &&
//                   (!selectedSubcategory ||
//                     product.subcategory === selectedSubcategory)
//               )
//               .map(renderProductCard)}
//           </div>
//         </div>
//       ) : (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products
//               .filter((product) => product.category === selectedCategory)
//               .map(renderProductCard)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products'; // Ensure chops have "subcategory"

const categories = [
  'All',
  'Cakes',
  'Chops',
  'Grills',
  'Drinks',
  'Events',
  'Sides',
  'Wedding Cakes',
];

const chopSubcategories = ['Pack Menu', 'Platter Menu'];

export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Group products by category
  const groupedProducts = categories.reduce((acc, category) => {
    if (category === 'All') return acc;
    acc[category] = products.filter(
      (product) => product.category === category
    );
    return acc;
  }, {});

  const renderProductCard = (product) => {
    const previewImage = product.image || (product.images && product.images[0]);

    // ✅ Detect if product is a Bento Cake
    const isBentoCake = product.title?.toLowerCase().includes('bento');

    // ✅ Define dynamic price display
    let displayPrice;
    if (product.category === 'Cakes') {
      if (isBentoCake) {
        // Special Bento Cake price range
        displayPrice = `₦${(12000).toLocaleString()} - ₦${(15000).toLocaleString()}`;
      } else {
        // Regular cake price range
        displayPrice = `₦${(16000).toLocaleString()} - ₦${(140000).toLocaleString()}`;
      }
    } else {
      // Non-cake categories use the individual product price
      displayPrice =
        typeof product.price === 'number'
          ? `₦${product.price.toLocaleString()}`
          : 'Price not available';
    }

    return (
      <div
        key={product.id}
        className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
      >
        {/* Product Image or Video */}
        <div className="w-full h-64 bg-gray-100 overflow-hidden">
          {product.video ? (
            <video
              src={product.video}
              controls
              className="w-full h-full object-cover"
            />
          ) : previewImage ? (
            <img
              src={previewImage}
              alt={product.title || 'Product image'}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="flex items-center justify-center h-full text-gray-400">
              No preview available
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 text-left">
          <h4 className="text-xl font-bold">{product.title || 'Untitled'}</h4>
          <p className="text-sm text-gray-600">
            {product.description || ''}
          </p>

          {/* ✅ Dynamic Price Display */}
          <p className="font-bold text-black-500 mt-3">{displayPrice}</p>

          {product.category === 'Events' ? (
            <Link href="#booking">
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Book Now
              </button>
            </Link>
          ) : (
            <Link href={`/product/${product.id}`}>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Buy Now
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSubcategory(null); // reset subcategory when switching
            }}
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

      {/* Subcategory highlights when Chops is selected */}
      {selectedCategory === 'Chops' && (
        <div className="flex justify-center gap-4 mb-8">
          {chopSubcategories.map((sub) => (
            <button
              key={sub}
              onClick={() =>
                setSelectedSubcategory(
                  selectedSubcategory === sub ? null : sub
                )
              }
              className={`px-4 py-2 rounded-lg text-sm border transition ${
                selectedSubcategory === sub
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-100'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Display products */}
      {selectedCategory === 'All' ? (
        Object.entries(groupedProducts).map(([category, items]) =>
          items.length > 0 ? (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map(renderProductCard)}
              </div>
            </div>
          ) : null
        )
      ) : selectedCategory === 'Chops' ? (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {selectedSubcategory || 'Chops'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(
                (product) =>
                  product.category === 'Chops' &&
                  (!selectedSubcategory ||
                    product.subcategory === selectedSubcategory)
              )
              .map(renderProductCard)}
          </div>
        </div>
      ) : (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(
                (product) => product.category === selectedCategory
              )
              .map(renderProductCard)}
          </div>
        </div>
      )}
    </div>
  );
}
