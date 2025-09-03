// 'use client';

// import { useContext } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { CartContext } from '@/context/CartContext';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function CartPage() {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-16 min-h-screen bg-red-50">
//         <h1 className="text-2xl font-bold mb-6 text-black">Your Cart</h1>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded shadow"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={150}
//                   height={150}
//                   className="rounded object-cover"
//                 />
//                 <div className="flex-1">
//                   <h2 className="text-xl font-semibold text-black">{item.title}</h2>
//                   <p className="text-gray-600">{item.description}</p>
//                   <p className="font-semibold text-black">₦{item.price.toLocaleString()}</p>
//                   <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>

//                   {/* Display Options if available */}
//                   {item.options && (
//                     <div className="mt-3 text-sm text-gray-700 space-y-1">
//                       {item.options.size && (
//                         <p><span className="font-medium">Size:</span> {item.options.size}</p>
//                       )}
//                       {item.options.layers && (
//                         <p><span className="font-medium">Layers:</span> {item.options.layers}</p>
//                       )}
//                       {item.options.flavor && (
//                         <p><span className="font-medium">Flavor:</span> {item.options.flavor}</p>
//                       )}
//                       {item.options.color && (
//                         <p><span className="font-medium">Color:</span> {item.options.color}</p>
//                       )}
//                       {item.options.message && (
//                         <p><span className="font-medium">Message:</span> “{item.options.message}”</p>
//                       )}
//                     </div>
//                   )}

//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 text-sm mt-3"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <div className="text-right mt-6">
//               <h2 className="text-xl font-bold text-black">
//                 Total: {totalPrice.toLocaleString()}
//               </h2>
//               <Link
//                 href="/checkout"
//                 className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useContext } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { CartContext } from '@/context/CartContext';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function CartPage() {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-16 min-h-screen bg-red-50">
//         <h1 className="text-2xl font-bold mb-6 text-black">Your Cart</h1>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded shadow"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={150}
//                   height={150}
//                   className="rounded object-cover"
//                 />
//                 <div className="flex-1">
//                   <h2 className="text-xl font-semibold text-black">{item.title}</h2>
//                   <p className="text-gray-600">{item.description}</p>
//                   <p className="font-semibold text-black">{item.price.toLocaleString()}</p>
//                   <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>

//                   {/* 👇 Show options ONLY for cakes */}
//                   {item.category === 'cake' && item.options && (
//                     <div className="mt-3 text-sm text-gray-700 space-y-1">
//                       {item.options.size && (
//                         <p><span className="font-medium">Size:</span> {item.options.size}</p>
//                       )}
//                       {item.options.layers && (
//                         <p><span className="font-medium">Layers:</span> {item.options.layers}</p>
//                       )}
//                       {item.options.flavor && (
//                         <p><span className="font-medium">Flavor:</span> {item.options.flavor}</p>
//                       )}
//                       {item.options.color && (
//                         <p><span className="font-medium">Color:</span> {item.options.color}</p>
//                       )}
//                       {item.options.message && (
//                         <p><span className="font-medium">Message:</span> “{item.options.message}”</p>
//                       )}
//                     </div>
//                   )}

//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 text-sm mt-3"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <div className="text-right mt-6">
//               <h2 className="text-xl font-bold text-black">
//                 Total: {totalPrice.toLocaleString()}
//               </h2>
//               <Link
//                 href="/checkout"
//                 className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// }

// 'use client';

// import { useContext } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { CartContext } from '@/context/CartContext';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, totalAmount } = useContext(CartContext);

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-16 min-h-screen bg-red-50">
//         <h1 className="text-2xl font-bold mb-6 text-black">Your Cart</h1>

//         {cart.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cart.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded shadow"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={150}
//                   height={150}
//                   className="rounded object-cover"
//                 />
//                 <div className="flex-1 text-black">
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">{item.description}</p>

//                   {/* Pricing breakdown */}
//                   <div className="mt-3 text-sm text-gray-700 space-y-1">
//                     <p><span className="font-medium">Unit Price:</span> ₦{item.unitPrice.toLocaleString()}</p>
//                     <p><span className="font-medium">Toppings Total:</span> ₦{item.toppingsTotal.toLocaleString()}</p>
//                     <p><span className="font-medium">Final Price (per unit):</span> ₦{item.finalPrice.toLocaleString()}</p>
//                     <p><span className="font-medium">Quantity:</span> {item.quantity}</p>
//                     <p className="font-bold"><span className="font-medium">Item Total:</span> ₦{item.grandTotal.toLocaleString()}</p>
//                   </div>

//                   {/* Show cake options only */}
//                   {item.category === 'cake' && item.options && (
//                     <div className="mt-3 text-sm text-gray-700 space-y-1">
//                       {item.options.size && (
//                         <p><span className="font-medium">Size:</span> {item.options.size}</p>
//                       )}
//                       {item.options.layers && (
//                         <p><span className="font-medium">Layers:</span> {item.options.layers}</p>
//                       )}
//                       {item.options.flavor && (
//                         <p><span className="font-medium">Flavor:</span> {item.options.flavor}</p>
//                       )}
//                       {item.options.color && (
//                         <p><span className="font-medium">Color:</span> {item.options.color}</p>
//                       )}
//                       {item.options.message && (
//                         <p><span className="font-medium">Message:</span> “{item.options.message}”</p>
//                       )}
//                     </div>
//                   )}

//                   {/* Quantity controls */}
//                   <div className="flex items-center gap-3 mt-4">
//                     <button
//                       onClick={() => updateQuantity(item.id, item.options, item.quantity - 1)}
//                       className="px-3 py-1 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.options, item.quantity + 1)}
//                       className="px-3 py-1 bg-gray-200 rounded"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <button
//                     onClick={() => removeFromCart(item.id, item.options)}
//                     className="text-red-500 text-sm mt-3"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Cart summary */}
//             <div className="text-right mt-6">
//               <h2 className="text-xl font-bold text-black">
//                 Cart Total: ₦{totalAmount.toLocaleString()}
//               </h2>
//               <Link
//                 href="/checkout"
//                 className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// }
// 'use client';

// import { useCart } from '@/context/CartContext'; // ✅ use the custom hook
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function CartPage() {
//   const { cartItems, removeFromCart, updateQuantity, grandTotal } = useCart(); // ✅ correct names

//   return (
//     <>
//       <Navbar />
//       <section className="px-6 md:px-20 py-16 min-h-screen bg-red-50">
//         <h1 className="text-2xl font-bold mb-6 text-black">Your Cart</h1>

//         {cartItems.length === 0 ? ( // ✅ fixed from "cart"
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded shadow"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={150}
//                   height={150}
//                   className="rounded object-cover"
//                 />
//                 <div className="flex-1 text-black">
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">{item.description}</p>

//                   {/* Pricing breakdown */}
//                   <div className="mt-3 text-sm text-gray-700 space-y-1">
//                     <p><span className="font-medium">Unit Price:</span> ₦{item.price.toLocaleString()}</p>
//                     <p><span className="font-medium">Quantity:</span> {item.quantity}</p>
//                     <p className="font-bold"><span className="font-medium">Item Total:</span> ₦{item.unitTotal.toLocaleString()}</p>
//                   </div>

//                   {/* Quantity controls */}
//                   <div className="flex items-center gap-3 mt-4">
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="px-3 py-1 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="px-3 py-1 bg-gray-200 rounded"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 text-sm mt-3"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Cart summary */}
//             <div className="text-right mt-6">
//               <h2 className="text-xl font-bold text-black">
//                 Cart Total: ₦{grandTotal.toLocaleString()}
//               </h2>
//               <Link
//                 href="/checkout"
//                 className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// }

'use client';

import { useCart } from '@/context/CartContext'; // ✅ use the custom hook
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, grandTotal } = useCart(); // ✅ from context

  return (
    <>
      <Navbar />
      <section className="px-6 md:px-20 py-16 min-h-screen bg-red-50">
        <h1 className="text-2xl font-bold mb-6 text-black">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded shadow"
              >
                {/* ✅ Product Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded object-cover"
                />

                {/* ✅ Product Details */}
                <div className="flex-1 text-black">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>

                  {/* ✅ Pricing breakdown */}
                  <div className="mt-3 text-sm text-gray-700 space-y-1">
                    <p>
                      <span className="font-medium">Unit Price:</span> ₦
                      {Number(item.price).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-medium">Quantity:</span> {item.quantity}
                    </p>
                    <p className="font-bold">
                      <span className="font-medium">Item Total:</span> ₦
                      {(Number(item.price) * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* ✅ Quantity controls */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* ✅ Remove button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* ✅ Cart summary */}
            <div className="text-right mt-6">
              <h2 className="text-xl font-bold text-black">
                Cart Total: ₦{grandTotal.toLocaleString()}
              </h2>
              <Link
                href="/checkout"
                className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
