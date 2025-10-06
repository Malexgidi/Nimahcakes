// 'use client';

// import { useParams, useRouter } from 'next/navigation';
// import { useContext, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { CartContext } from '@/context/CartContext';
// import CakeCustomizer from '@/components/CakeCustomizer';
// import { products } from '@/data/products';

// export default function ProductDetails() {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);
//   const { addToCart } = useContext(CartContext);




//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [flavor, setFlavor] = useState('');
//   const [message, setMessage] = useState('');
//   const [color, setColor] = useState('');

//   if (!product) return <div className="p-10">Loading or Product Not Found...</div>;

//   // Function to update quantity
//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleAddToCart = () => {
//     const customizedProduct = {
//       ...product,
//       options: {
//         size,
//         layers,
//         flavor,
//         message,
//         color,
//       },
//     };
//     addToCart(customizedProduct, quantity);
//     router.push('/cart');
//   };

//   const relatedProducts = products
//     .filter((p) => p.category === product.category && p.id !== product.id)
//     .slice(0, 3);

//   const reviews = [
//     { name: 'Aisha', text: 'Delicious cake, beautifully presented!' },
//     { name: 'Tolu', text: 'Absolutely loved it, will order again!' },
//     { name: 'Emeka', text: 'Perfect for our birthday event!' },
//   ];

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={500}
//             height={500}
//             className="rounded-xl shadow w-full md:w-1/2 object-cover"
//           />
//            <div>
//       <h1>{product.name}</h1>
//       {product.category === 'cakes' ? (
//         <CakeCustomizer product={product} onAddToCart={addToCart} />
//       ) : (
//         <button onClick={() => addToCart(product)}>Add to Cart</button>
//       )}
//     </div>
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-black">{product.title}</h1>
//             <p className="mt-4 text-gray-700">{product.description}</p>
//             <p className="mt-4 font-bold text-black text-xl">{product.price}</p>

//             {/* Show customization only for Cakes */}
//             {product.category === 'Cakes' && (
//               <div className="mt-6 space-y-4 text-black">
//                 <div>
//                   <label className="block mb-1">Size (inches):</label>
//                   <select
//                     value={size}
//                     onChange={(e) => setSize(e.target.value)}
//                     className="w-full p-2 border rounded"
//                   >
//                     {[6, 7, 8, 9, 10, 11, 12].map((s) => (
//                       <option key={s} value={s}>
//                         {s} inches
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block mb-1">Layers:</label>
//                   <select
//                     value={layers}
//                     onChange={(e) => setLayers(e.target.value)}
//                     className="w-full p-2 border rounded"
//                   >
//                     <option value="1">1 Layer</option>
//                     <option value="2">2 Layers</option>
//                     <option value="3">3 Layers</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block mb-1">Flavor:</label>
//                   <select
//                     value={flavor}
//                     onChange={(e) => setFlavor(e.target.value)}
//                     className="w-full p-2 border rounded"
//                   >
//                     {['vanilla', 'red velvet', 'chocolate', 'butterscotch'].map((f) => (
//                       <option key={f} value={f}>
//                         {f}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block mb-1">Message on Cake:</label>
//                   <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="e.g., Happy Birthday"
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-1">Color Theme:</label>
//                   <input
//                     type="text"
//                     value={color}
//                     onChange={(e) => setColor(e.target.value)}
//                     placeholder="e.g., Pink & Gold"
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div className="mt-6 flex items-center gap-4">
//               <span className="font-bold">Quantity:</span>
//               <div className="flex items-center border rounded">
//                 <button
//                   onClick={decreaseQuantity}
//                   className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-4">{quantity}</span>
//                 <button
//                   onClick={increaseQuantity}
//                   className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             <button
//               onClick={handleAddToCart}
//               className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 mt-6"
//             >
//               Add to Cart
//             </button>

//             <p className="mt-4 text-sm">
//               <Link href="/checkout" className="text-black underline">
//                 Pay with Transfer
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Customer Reviews</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {reviews.map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded shadow text-gray-700">
//                 <p className="italic">"{review.text}"</p>
//                 <p className="mt-2 font-semibold text-sm">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {relatedProducts.map((item) => (
//               <Link key={item.id} href={`/product/${item.id}`}>
//                 <div className="bg-white rounded shadow hover:shadow-lg transition">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={400}
//                     height={300}
//                     className="rounded-t w-full h-64 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg">{item.title}</h3>
//                     <p className="text-black font-semibold">{item.price}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useParams, useRouter } from 'next/navigation';
// import { useContext, useMemo, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { CartContext } from '@/context/CartContext';
// import CakeCustomizer from '@/components/CakeCustomizer';
// import { products } from '@/data/products';

// export default function ProductDetails() {
//   const { id } = useParams();
//   const router = useRouter();
//   // make sure id comparison works whether your product.id is a number or string
//   const product = useMemo(
//     () => products.find((p) => String(p.id) === String(id)),
//     [id]
//   );
//   const { addToCart } = useContext(CartContext);

//   // quantity is for NON-cake products only (CakeCustomizer handles its own add)
//   const [quantity, setQuantity] = useState(1);

//   if (!product) return <div className="p-10">Loading or Product Not Found...</div>;

//   const isCake = (product.category || '').toLowerCase() === 'cakes';

//   // Quantity controls (non-cakes)
//   const increaseQuantity = () => setQuantity((q) => q + 1);
//   const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddNonCake = () => {
//     addToCart(product, quantity);
//     router.push('/cart');
//   };

//   const relatedProducts = products
//     .filter((p) => p.category === product.category && p.id !== product.id)
//     .slice(0, 3);

//   const reviews = [
//     { name: 'Aisha', text: 'Delicious cake, beautifully presented!' },
//     { name: 'Tolu', text: 'Absolutely loved it, will order again!' },
//     { name: 'Emeka', text: 'Perfect for our birthday event!' },
//   ];

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={500}
//             height={500}
//             className="rounded-xl shadow w-full md:w-1/2 object-cover"
//           />

//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-black">{product.title}</h1>
//             <p className="mt-4 text-gray-700">{product.description}</p>
//             <p className="mt-4 font-bold text-black text-xl">₦{Number(product.price).toLocaleString()}</p>

//             {/* 👇 Put the CakeCustomizer right here for cakes */}
//             {isCake && (
//               <div className="mt-6">
//                 {/* Your CakeCustomizer already calls addToCart internally */}
//                 <CakeCustomizer product={product} />
//               </div>
//             )}

//             {/* Quantity + Add to Cart only for NON-cake items */}
//             {!isCake && (
//               <>
//                 <div className="mt-6 flex items-center gap-4">
//                   <span className="font-bold">Quantity:</span>
//                   <div className="flex items-center border rounded">
//                     <button
//                       onClick={decreaseQuantity}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-4">{quantity}</span>
//                     <button
//                       onClick={increaseQuantity}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleAddNonCake}
//                   className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 mt-6"
//                 >
//                   Add to Cart
//                 </button>
//               </>
//             )}

//             <p className="mt-4 text-sm">
//               <Link href="/checkout" className="text-black underline">
//                 Pay with Transfer
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Customer Reviews</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {reviews.map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded shadow text-gray-700">
//                 <p className="italic">"{review.text}"</p>
//                 <p className="mt-2 font-semibold text-sm">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {relatedProducts.map((item) => (
//               <Link key={item.id} href={`/product/${item.id}`}>
//                 <div className="bg-white rounded shadow hover:shadow-lg transition">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={400}
//                     height={300}
//                     className="rounded-t w-full h-64 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg">{item.title}</h3>
//                     <p className="text-black font-semibold">₦{Number(item.price).toLocaleString()}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


// 'use client';

// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';
// import { products } from '@/data/products';

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === String(id));

//   if (!product) return <div className="p-10">Loading or Product Not Found...</div>;

//   const relatedProducts = products
//     .filter((p) => p.category === product.category && String(p.id) !== String(product.id))
//     .slice(0, 3);

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           <Image
//             src={product.image}
//             alt={product.title || product.name}
//             width={500}
//             height={500}
//             className="rounded-xl shadow w-full md:w-1/2 object-cover"
//           />

//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-black">
//               {product.title || product.name}
//             </h1>
//             <p className="mt-4 text-gray-700">{product.description}</p>

//             {/* Always show the product’s base price string if provided */}
//             {product.price && (
//               <p className="mt-4 font-bold text-black text-xl">{product.price}</p>
//             )}

//             {/* Cake customizer only for cakes */}
//             {(product.category === 'Cakes' || product.category === 'cakes') && (
//               <div className="mt-6">
//                 <CakeCustomizer product={product} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Reviews (unchanged) */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Customer Reviews</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { name: 'Aisha', text: 'Delicious cake, beautifully presented!' },
//               { name: 'Tolu', text: 'Absolutely loved it, will order again!' },
//               { name: 'Emeka', text: 'Perfect for our birthday event!' },
//             ].map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded shadow text-gray-700">
//                 <p className="italic">"{review.text}"</p>
//                 <p className="mt-2 font-semibold text-sm">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products (unchanged) */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {relatedProducts.map((item) => (
//               <Link key={item.id} href={`/product/${item.id}`}>
//                 <div className="bg-white rounded shadow hover:shadow-lg transition">
//                   <Image
//                     src={item.image}
//                     alt={item.title || item.name}
//                     width={400}
//                     height={300}
//                     className="rounded-t w-full h-64 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg">{item.title || item.name}</h3>
//                     {item.price && (
//                       <p className="text-black font-semibold">{item.price}</p>
//                     )}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


// 'use client';

// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';
// import { products } from '@/data/products';
// import { useCart } from '@/context/CartContext'; // 👈 hook from context
// import { useState } from 'react';

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === String(id));
//   const { addToCart } = useCart(); // 👈 function from CartContext
//   const [quantity, setQuantity] = useState(1);

//   if (!product) return <div className="p-10">Loading or Product Not Found...</div>;

//   const relatedProducts = products
//     .filter((p) => p.category === product.category && String(p.id) !== String(product.id))
//     .slice(0, 3);

//   const handleAddToCart = () => {
//     addToCart(product, quantity);
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           <Image
//             src={product.image}
//             alt={product.title || product.name}
//             width={500}
//             height={500}
//             className="rounded-xl shadow w-full md:w-1/2 object-cover"
//           />

//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-black">
//               {product.title || product.name}
//             </h1>
//             <p className="mt-4 text-gray-700">{product.description}</p>

//             {product.price && (
//               <p className="mt-4 font-bold text-black text-xl">₦{product.price}</p>
//             )}

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-4 mt-6">
//               <label className="text-black">Qty:</label>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 className="w-16 border rounded px-2 py-1 text-center"
//               />
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600"
//             >
//               Add to Cart
//             </button>

//             {/* Cake customizer only for cakes */}
//             {(product.category === 'Cakes' || product.category === 'cakes') && (
//               <div className="mt-6">
//                 <CakeCustomizer product={product} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Customer Reviews</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { name: 'Aisha', text: 'Delicious cake, beautifully presented!' },
//               { name: 'Tolu', text: 'Absolutely loved it, will order again!' },
//               { name: 'Emeka', text: 'Perfect for our birthday event!' },
//             ].map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded shadow text-gray-700">
//                 <p className="italic">"{review.text}"</p>
//                 <p className="mt-2 font-semibold text-sm">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {relatedProducts.map((item) => (
//               <Link key={item.id} href={`/product/${item.id}`}>
//                 <div className="bg-white rounded shadow hover:shadow-lg transition">
//                   <Image
//                     src={item.image}
//                     alt={item.title || item.name}
//                     width={400}
//                     height={300}
//                     className="rounded-t w-full h-64 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg">{item.title || item.name}</h3>
//                     {item.price && (
//                       <p className="text-black font-semibold">₦{item.price}</p>
//                     )}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';
// import { products } from '@/data/products';
// import { useCart } from '@/context/CartContext';
// import { useState } from 'react';

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === String(id));
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   if (!product) return <div className="p-10">Loading or Product Not Found...</div>;

//   const relatedProducts = products
//     .filter((p) => p.category === product.category && String(p.id) !== String(product.id))
//     .slice(0, 3);

//   const handleAddToCart = () => {
//     addToCart(product, quantity);
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           <Image
//             src={product.image}
//             alt={product.title || product.name}
//             width={500}
//             height={500}
//             className="rounded-xl shadow w-full md:w-1/2 object-cover"
//           />

//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-black">
//               {product.title || product.name}
//             </h1>
//             <p className="mt-4 text-gray-700">{product.description}</p>

//             {/* ✅ Normal Products */}
//             {product.category !== 'Cakes' && product.category !== 'cakes' && (
//               <>
//                 {product.price && (
//                   <p className="mt-4 font-bold text-black text-xl">{product.price}</p>
//                 )}

//                 {/* Quantity Selector */}
//                 <div className="flex items-center gap-4 mt-6">
//                   <label className="text-black">Qty:</label>
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={(e) => setQuantity(Number(e.target.value))}
//                     className="w-16 border rounded px-2 py-1 text-center"
//                   />
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={handleAddToCart}
//                   className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600"
//                 >
//                   Add to Cart
//                 </button>
//               </>
//             )}

//             {/* ✅ Cake Products with Customizer */}
//             {(product.category === 'Cakes' || product.category === 'cakes') && (
//               <div className="mt-6">
//                 <CakeCustomizer product={product} quantity={quantity} setQuantity={setQuantity} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Customer Reviews</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { name: 'Aisha', text: 'Delicious cake, beautifully presented!' },
//               { name: 'Tolu', text: 'Absolutely loved it, will order again!' },
//               { name: 'Emeka', text: 'Perfect for our birthday event!' },
//             ].map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded shadow text-gray-700">
//                 <p className="italic">"{review.text}"</p>
//                 <p className="mt-2 font-semibold text-sm">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {relatedProducts.map((item) => (
//               <Link key={item.id} href={`/product/${item.id}`}>
//                 <div className="bg-white rounded shadow hover:shadow-lg transition">
//                   <Image
//                     src={item.image}
//                     alt={item.title || item.name}
//                     width={400}
//                     height={300}
//                     className="rounded-t w-full h-64 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg">{item.title || item.name}</h3>
//                     {item.price && (
//                       <p className="text-black font-semibold">₦{item.price}</p>
//                     )}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// "use client";

// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CakeCustomizer from "@/components/CakeCustomizer";
// import { products } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// import { useState } from "react";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => String(p.id) === String(id));
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   if (!product) return <div className="p-10">Loading or Product Not Found...</div>;

//   const relatedProducts = products
//     .filter((p) => p.category === product.category && String(p.id) !== String(product.id))
//     .slice(0, 3);

//   const handleAddToCart = () => {
//     addToCart(product, quantity);
//     router.push("/cart"); // ✅ redirect user to cart after adding
//   };

//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const totalPrice = product.price ? product.price * quantity : 0;

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           <Image
//             src={product.image}
//             alt={product.title || product.name}
//             width={500}
//             height={500}
//             className="rounded-xl shadow w-full md:w-1/2 object-cover"
//           />

//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold text-black">
//               {product.title || product.name}
//             </h1>
//             <p className="mt-4 text-gray-700">{product.description}</p>

//     {/* ✅ Normal Products */}
// {product.category !== "Cakes" && product.category !== "cakes" && (
//   <>
//     {product.price && (
//       <p className="mt-4 font-bold text-black text-xl">
//         ₦{Number(product.price).toLocaleString()}
//       </p>
//     )}

//     {/* Quantity Selector with +/- */}
//     <div className="flex items-center gap-4 mt-6">
//       <label className="text-black">Qty:</label>
//       <div className="flex items-center gap-3">
//         <button
//           onClick={decreaseQty}
//           className="px-3 py-1 bg-gray-200 text-black rounded"
//         >
//           -
//         </button>
//         <span className="px-4 py-1 border rounded bg-white">
//           {quantity}
//         </span>
//         <button
//           onClick={increaseQty}
//           className="px-3 py-1 bg-gray-200 text-black rounded"
//         >
//           +
//         </button>
//       </div>
//     </div>

//     {/* ✅ Total Price */}
//     <p className="mt-4 font-semibold text-black text-lg">
//       Total: ₦{(Number(product.price) * quantity).toLocaleString()}
//     </p>

//     {/* Add to Cart Button */}
//     <button
//       onClick={handleAddToCart}
//       className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600"
//     >
//       Add to Cart
//     </button>
//   </>
// )}

//             {/* ✅ Cake Products with Customizer */}
//             {(product.category === "Cakes" || product.category === "cakes") && (
//               <div className="mt-6">
//                 <CakeCustomizer
//                   product={product}
//                   quantity={quantity}
//                   setQuantity={setQuantity}
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Customer Reviews</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { name: "Aisha", text: "Delicious cake, beautifully presented!" },
//               { name: "Tolu", text: "Absolutely loved it, will order again!" },
//               { name: "Emeka", text: "Perfect for our birthday event!" },
//             ].map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded shadow text-gray-700">
//                 <p className="italic">"{review.text}"</p>
//                 <p className="mt-2 font-semibold text-sm">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {relatedProducts.map((item) => (
//               <Link key={item.id} href={`/product/${item.id}`}>
//                 <div className="bg-white rounded shadow hover:shadow-lg transition">
//                   <Image
//                     src={item.image}
//                     alt={item.title || item.name}
//                     width={400}
//                     height={300}
//                     className="rounded-t w-full h-64 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg">{item.title || item.name}</h3>
//                     {item.price && (
//                       <p className="text-black font-semibold">₦{item.price}</p>
//                     )}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Slider from 'react-slick';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';

// // Slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails({ product }: { product: any }) {
//   const [quantity, setQuantity] = useState(1);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* ✅ Left Column: Image Slider */}
//           <div className="w-full md:w-1/2">
//             {product.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img: string, index: number) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="rounded-xl shadow object-cover"
//               />
//             )}
//           </div>

//           {/* ✅ Right Column: Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.title || product.name}</h1>
//             <p className="text-lg font-semibold text-pink-600 mb-2">
//               ₦{Number(product.price).toLocaleString()}
//             </p>
//             <p className="text-gray-700 mb-6">
//               {product.description || "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* ✅ Cake Customizer only for Cakes */}
//             {(product.category === "Cakes" || product.category === "cakes") && (
//               <div className="mt-6">
//                 <CakeCustomizer
//                   product={product}
//                   quantity={quantity}
//                   setQuantity={setQuantity}
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Placeholder for reviews + related products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
//           <p className="text-gray-600">Reviews section coming soon...</p>
//         </div>

//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//           <p className="text-gray-600">Related products section coming soon...</p>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Slider from 'react-slick';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';

// // Slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails({ product }) {
//   const [quantity, setQuantity] = useState(1);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* ✅ Left Column: Image Slider */}
//           <div className="w-full md:w-1/2">
//             {product.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img, index) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="rounded-xl shadow object-cover"
//               />
//             )}
//           </div>

//           {/* ✅ Right Column: Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.title || product.name}</h1>
//             <p className="text-lg font-semibold text-pink-600 mb-2">
//               ₦{Number(product.price).toLocaleString()}
//             </p>
//             <p className="text-gray-700 mb-6">
//               {product.description || "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* ✅ Cake Customizer only for Cakes */}
//             {(product.category === "Cakes" || product.category === "cakes") && (
//               <div className="mt-6">
//                 <CakeCustomizer
//                   product={product}
//                   quantity={quantity}
//                   setQuantity={setQuantity}
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Placeholder for reviews + related products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
//           <p className="text-gray-600">Reviews section coming soon...</p>
//         </div>

//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//           <p className="text-gray-600">Related products section coming soon...</p>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Slider from 'react-slick';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';

// // ✅ Slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails({ product }) {
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Slider settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* ✅ Left Column: Image Slider */}
//           <div className="w-full md:w-1/2">
//             {product?.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img, index) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="rounded-xl shadow object-cover"
//               />
//             )}
//           </div>

//           {/* ✅ Right Column: Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">
//               {product.title || product.name}
//             </h1>
//             <p className="text-lg font-semibold text-pink-600 mb-2">
//               ₦{Number(product.price).toLocaleString()}
//             </p>
//             <p className="text-gray-700 mb-6">
//               {product.description ||
//                 "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* ✅ Cake Customizer only for Cakes */}
//             {(product.category === "Cakes" || product.category === "cakes") && (
//               <div className="mt-6">
//                 <CakeCustomizer
//                   product={product}
//                   quantity={quantity}
//                   setQuantity={setQuantity}
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Placeholder for reviews + related products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
//           <p className="text-gray-600">Reviews section coming soon...</p>
//         </div>

//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//           <p className="text-gray-600">Related products section coming soon...</p>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Slider from 'react-slick';
// import { useParams } from 'next/navigation';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';

// // Import your products dataset
// import { products } from '@/data/products'; // <-- make sure you have this file

// // Slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails() {
//   const { id } = useParams(); // ✅ get product id from URL (/product/[id])
//   const product = products.find((p) => p.id === id); // ✅ look up product by id

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <section className="px-6 md:px-20 py-20">
//           <h1 className="text-2xl font-bold">Product not found</h1>
//         </section>
//         <Footer />
//       </>
//     );
//   }

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* ✅ Left Column: Image Slider */}
//           <div className="w-full md:w-1/2">
//             {product.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img, index) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="rounded-xl shadow object-cover"
//               />
//             )}
//           </div>

//           {/* ✅ Right Column: Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">
//               {product.title || product.name}
//             </h1>
//             <p className="text-lg font-semibold text-pink-600 mb-2">
//               ₦{Number(product.price).toLocaleString()}
//             </p>
//             <p className="text-gray-700 mb-6">
//               {product.description ||
//                 "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* ✅ Cake Customizer only for Cakes */}
//             {(product.category === "Cakes" || product.category === "cakes") && (
//               <div className="mt-6">
//                 <CakeCustomizer
//                   product={product}
//                   quantity={quantity}
//                   setQuantity={setQuantity}
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Placeholder for reviews + related products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
//           <p className="text-gray-600">Reviews section coming soon...</p>
//         </div>

//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//           <p className="text-gray-600">Related products section coming soon...</p>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Slider from 'react-slick';
// import { useParams } from 'next/navigation';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';

// // Import your products dataset
// import { products } from '@/data/products'; // <-- make sure this file exists

// // Slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails() {
//   const { id } = useParams(); // ✅ get product id from URL (/product/[id])
//   const product = products.find((p) => p.id === id); // ✅ look up product by id

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <section className="px-6 md:px-20 py-20">
//           <h1 className="text-2xl font-bold">Product not found</h1>
//         </section>
//         <Footer />
//       </>
//     );
//   }

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* ✅ Left Column: Image Slider */}
//           <div className="w-full md:w-1/2">
//             {product.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img, index) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="w-full rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : product.image ? (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="w-full rounded-xl shadow object-cover"
//               />
//             ) : (
//               <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl">
//                 <span className="text-gray-500">No Image Available</span>
//               </div>
//             )}
//           </div>

//           {/* ✅ Right Column: Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">
//               {product.title || product.name}
//             </h1>
//             {/* <p className="text-lg font-semibold text-pink-600 mb-2">
//               ₦{Number(product.price).toLocaleString()}
//             </p> */}
//             <p className="text-lg font-semibold text-pink-600 mb-2">
//              {product.category === "Cakes"
//                ? `₦${(16000).toLocaleString()} - ₦${(140000).toLocaleString()}`
//                : product.price
//                ? `₦${Number(product.price).toLocaleString()}`
//                : "Price not available"}
//              </p>

//             <p className="text-gray-700 mb-6">
//               {product.description ||
//                 "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* ✅ Cake Customizer only for Cakes */}
//             {(product.category === "Cakes" || product.category === "cakes") && (
//               <div className="mt-6">
//                 <CakeCustomizer
//                   product={product}
//                   quantity={quantity}
//                   setQuantity={setQuantity}
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Placeholder for reviews + related products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
//           <p className="text-gray-600">Reviews section coming soon...</p>
//         </div>

//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//           <p className="text-gray-600">Related products section coming soon...</p>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Slider from 'react-slick';
// import { useParams } from 'next/navigation';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CakeCustomizer from '@/components/CakeCustomizer';
// import { useCart } from '@/context/CartContext'; // ✅ Cart hook

// // Import your products dataset
// import { products } from '@/data/products';

// // Slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails() {
//   const { id } = useParams(); // ✅ get product id from URL (/product/[id])
//   const { addToCart } = useCart(); // ✅ access addToCart
//   const product = products.find((p) => p.id === id); // ✅ look up product by id

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <section className="px-6 md:px-20 py-20">
//           <h1 className="text-2xl font-bold">Product not found</h1>
//         </section>
//         <Footer />
//       </>
//     );
//   }

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   // ✅ Generic Add to Cart handler (non-cakes)
//   const handleAddToCart = () => {
//     if (!product.price) {
//       alert("This product doesn't have a valid price");
//       return;
//     }
//     addToCart(product, {
//       unitPrice: product.price,
//       finalUnitPrice: product.price,
//       quantity,
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* ✅ Left Column: Image Slider */}
//           <div className="w-full md:w-1/2">
//             {product.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img, index) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="w-full rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : product.image ? (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="w-full rounded-xl shadow object-cover"
//               />
//             ) : (
//               <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl">
//                 <span className="text-gray-500">No Image Available</span>
//               </div>
//             )}
//           </div>

//           {/* ✅ Right Column: Product Info */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">
//               {product.title || product.name}
//             </h1>

//             <p className="text-lg font-semibold text-pink-600 mb-2">
//               {product.category === "Cakes" || product.category === "cakes"
//                 ? `₦${(16000).toLocaleString()} - ₦${(140000).toLocaleString()}`
//                 : product.price
//                 ? `₦${Number(product.price).toLocaleString()}`
//                 : "Price not available"}
//             </p>

//             <p className="text-gray-700 mb-6">
//               {product.description ||
//                 "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* ✅ If Cake → show CakeCustomizer */}
//             {(product.category === "Cakes" || product.category === "cakes") ? (
//               <div className="mt-6">
//                 <CakeCustomizer
//                   product={product}
//                   quantity={quantity}
//                   setQuantity={setQuantity}
//                 />
//               </div>
//             ) : (
//               /* ✅ Else show standard Add to Cart */
//               <div className="mt-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="font-medium">Quantity:</span>
//                   <div className="flex items-center border rounded">
//                     <button
//                       onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-4">{quantity}</span>
//                     <button
//                       onClick={() => setQuantity((q) => q + 1)}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Placeholder for reviews + related products */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
//           <p className="text-gray-600">Reviews section coming soon...</p>
//         </div>

//         <div className="mt-20">
//           <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//           <p className="text-gray-600">Related products section coming soon...</p>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import { useParams, useRouter } from "next/navigation";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CakeCustomizer from "@/components/CakeCustomizer";
// import { useCart } from "@/context/CartContext";
// import { products } from "@/data/products";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const router = useRouter();
//   const { addToCart } = useCart();
//   const product = products.find((p) => String(p.id) === String(id));


//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <section className="px-6 md:px-20 py-20">
//           <h1 className="text-2xl font-bold">Product not found</h1>
//         </section>
//         <Footer />
//       </>
//     );
//   }

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   const handleAddToCart = () => {
//     if (!product.price) {
//       alert("This product doesn't have a valid price");
//       return;
//     }
//     addToCart(product, {
//       unitPrice: product.price,
//       finalUnitPrice: product.price,
//       quantity,
//     });
//     router.push("/cart"); // ✅ redirect after adding
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Left: Images */}
//           <div className="w-full md:w-1/2">
//             {product.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img, index) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="w-full rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : product.image ? (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="w-full rounded-xl shadow object-cover"
//               />
//             ) : (
//               <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl">
//                 <span className="text-gray-500">No Image Available</span>
//               </div>
//             )}
//           </div>

//           {/* Right: Details */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">
//               {product.title || product.name}
//             </h1>

//             <p className="text-lg font-semibold text-pink-600 mb-2">
//               {product.category === "Cakes" || product.category === "cakes"
//                 ? `₦${(16000).toLocaleString()} - ₦${(140000).toLocaleString()}`
//                 : product.price
//                 ? `₦${Number(product.price).toLocaleString()}`
//                 : "Price not available"}
//             </p>


//             <p className="text-gray-700 mb-6">
//               {product.description ||
//                 "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* Cakes → Customizer, Others → Add to Cart */}
//             {product.category === "Cakes" || product.category === "cakes" ? (
//               <CakeCustomizer
//                 product={product}
//                 quantity={quantity}
//                 setQuantity={setQuantity}
//               />
//             ) : (
//               <div className="mt-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="font-medium">Quantity:</span>
//                   <div className="flex items-center border rounded">
//                     <button
//                       onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-4">{quantity}</span>
//                     <button
//                       onClick={() => setQuantity((q) => q + 1)}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import { useParams, useRouter } from "next/navigation";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CakeCustomizer from "@/components/CakeCustomizer";
// import { useCart } from "@/context/CartContext";
// import { products } from "@/data/products";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const router = useRouter();
//   const { addToCart } = useCart();
//   const product = products.find((p) => String(p.id) === String(id));

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <section className="px-6 md:px-20 py-20">
//           <h1 className="text-2xl font-bold">Product not found</h1>
//         </section>
//         <Footer />
//       </>
//     );
//   }

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   const handleAddToCart = () => {
//     if (!product.price) {
//       alert("This product doesn't have a valid price");
//       return;
//     }
//     addToCart(product, {
//       unitPrice: product.price,
//       finalUnitPrice: product.price,
//       quantity,
//     });
//     router.push("/cart");
//   };

//   // ✅ Nimah's WhatsApp info
//   const nimahWhatsApp = "2348179528822"; // Replace with Nimah’s real number

//   // ✅ Create WhatsApp message
//   const message = `Hi Nimah! 💍 I'm interested in one of your *Wedding Cakes* and would love to get more details. 🍰

// Here are the cake details:

// 🎂 *${product.title || "Wedding Cake"}*
// 📸 Product ID: ${product.id}
// 📂 Category: ${product.category}

// Could you please help me with pricing, customization options, and availability? 😊`;

//   const whatsappLink = `https://wa.me/${nimahWhatsApp}?text=${encodeURIComponent(
//     message
//   )}`;

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Left: Images */}
//           <div className="w-full md:w-1/2">
//             {product.images && product.images.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {product.images.map((img, index) => (
//                   <div key={index} className="flex justify-center">
//                     <Image
//                       src={img}
//                       alt={product.title || product.name}
//                       width={500}
//                       height={500}
//                       className="w-full rounded-xl shadow object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : product.image ? (
//               <Image
//                 src={product.image}
//                 alt={product.title || product.name}
//                 width={500}
//                 height={500}
//                 className="w-full rounded-xl shadow object-cover"
//               />
//             ) : (
//               <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl">
//                 <span className="text-gray-500">No Image Available</span>
//               </div>
//             )}
//           </div>

//           {/* Right: Details */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">
//               {product.title || product.name}
//             </h1>

//             <p className="text-lg font-semibold text-pink-600 mb-2">
//               {product.category === "Cakes" || product.category === "cakes"
//                 ? `₦${(16000).toLocaleString()} - ₦${(140000).toLocaleString()}`
//                 : product.price
//                 ? `₦${Number(product.price).toLocaleString()}`
//                 : "Price not available"}
//             </p>

//             <p className="text-gray-700 mb-6">
//               {product.category === "Wedding Cakes"
//                 ? "Make your big day unforgettable with our luxurious handcrafted wedding cakes. Each design tells a story — yours. 💕 To order, send Nimah a message on WhatsApp to discuss your perfect cake."
//                 : product.description ||
//                   "Delicious custom-made cake perfect for your occasions."}
//             </p>

//             {/* ✅ Logic for Wedding Cakes → WhatsApp instead of Add to Cart */}
//             {product.category === "Wedding Cakes" ? (
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold inline-block transition"
//               >
//                 💬 Message Nimah on WhatsApp
//               </a>
//             ) : product.category === "Cakes" || product.category === "cakes" ? (
//               <CakeCustomizer
//                 product={product}
//                 quantity={quantity}
//                 setQuantity={setQuantity}
//               />
//             ) : (
//               <div className="mt-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="font-medium">Quantity:</span>
//                   <div className="flex items-center border rounded">
//                     <button
//                       onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-4">{quantity}</span>
//                     <button
//                       onClick={() => setQuantity((q) => q + 1)}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useParams, useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCustomizer from "@/components/CakeCustomizer";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const product = products.find((p) => String(p.id) === String(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <Navbar />
        <section className="px-6 md:px-20 py-20">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </section>
        <Footer />
      </>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  const handleAddToCart = () => {
    if (!product.price) {
      alert("This product doesn't have a valid price");
      return;
    }
    addToCart(product, {
      unitPrice: product.price,
      finalUnitPrice: product.price,
      quantity,
    });
    router.push("/cart");
  };

  // ✅ Nimah's WhatsApp info
  const nimahWhatsApp = "2348179528822"; // Replace with Nimah’s real number

  // ✅ Create WhatsApp message
  const message = `Hi Nimah! 💍 I'm interested in one of your *Wedding Cakes* and would love to get more details. 🍰

Here are the cake details:

🎂 *${product.title || "Wedding Cake"}*
📸 Product ID: ${product.id}
📂 Category: ${product.category}

Could you please help me with pricing, customization options, and availability? 😊`;

  const whatsappLink = `https://wa.me/${nimahWhatsApp}?text=${encodeURIComponent(
    message
  )}`;

  // ✅ Calculate total (only for priced items)
  const itemTotal =
    product.price && quantity ? Number(product.price) * quantity : 0;

  return (
    <>
      <Navbar />
      <section className="px-6 md:px-20 py-20 bg-red-100 min-h-screen">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Images */}
          <div className="w-full md:w-1/2">
            {product.images && product.images.length > 0 ? (
              <Slider {...sliderSettings}>
                {product.images.map((img, index) => (
                  <div key={index} className="flex justify-center">
                    <Image
                      src={img}
                      alt={product.title || product.name}
                      width={500}
                      height={500}
                      className="w-full rounded-xl shadow object-cover"
                    />
                  </div>
                ))}
              </Slider>
            ) : product.image ? (
              <Image
                src={product.image}
                alt={product.title || product.name}
                width={500}
                height={500}
                className="w-full rounded-xl shadow object-cover"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              {product.title || product.name}
            </h1>

            <p className="text-lg font-semibold text-pink-600 mb-2">
              {product.category === "Cakes" || product.category === "cakes"
                ? `₦${(16000).toLocaleString()} - ₦${(140000).toLocaleString()}`
                : product.price
                ? `₦${Number(product.price).toLocaleString()}`
                : "Price not available"}
            </p>

            <p className="text-gray-700 mb-6">
              {product.category === "Wedding Cakes"
                ? "Make your big day unforgettable with our luxurious handcrafted wedding cakes. Each design tells a story — yours. 💕 To order, send Nimah a message on WhatsApp to discuss your perfect cake."
                : product.description ||
                  "Delicious custom-made cake perfect for your occasions."}
            </p>

            {/* ✅ Logic for Wedding Cakes → WhatsApp instead of Add to Cart */}
            {product.category === "Wedding Cakes" ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold inline-block transition"
              >
                💬 Message Nimah on WhatsApp
              </a>
            ) : product.category === "Cakes" || product.category === "cakes" ? (
              <CakeCustomizer
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            ) : (
              <div className="mt-6">
                {/* Quantity control */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* ✅ Display dynamic total */}
                {product.price && (
                  <p className="text-md mb-4 text-gray-800">
                    <span className="font-medium">Item Total:</span>{" "}
                    <span className="text-pink-600 font-semibold">
                      ₦{itemTotal.toLocaleString()}
                    </span>
                  </p>
                )}

                <button
                  onClick={handleAddToCart}
                  className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
