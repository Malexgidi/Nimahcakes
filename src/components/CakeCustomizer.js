// 'use client';
// import { useState } from 'react';
// import { useContext } from 'react';
// import { CartContext } from '@/context/CartContext';

// export default function CakeCustomizer({ product }) {
//   const { addToCart } = useContext(CartContext);
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);

//   const getBasePrice = () => {
//     const priceList = {
//       '6-1': 15000, '6-2': 26000, '6-3': 38000,
//       '7-1': 17000, '7-2': 32000, '7-3': 46000,
//       '8-1': 22000, '8-2': 40000, '8-3': 56000,
//       '10-1': 40000, '10-2': 75000,
//       '12-1': 50000, '12-2': 95000,
//     };
//     return priceList[`${size}-${layers}`] || 0;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const totalPrice = getBasePrice() + toppingsPrice();

//   const handleAddToCart = () => {
//     if (!size || !layers) return alert("Please select size and layers");
//     addToCart(product, 1, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       totalPrice
//     });
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-2">Customize Your Cake</h2>

//       <div className="mb-2">
//         <label>Size:</label>
//         <select value={size} onChange={(e) => setSize(e.target.value)}>
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       <div className="mb-2">
//         <label>Layers:</label>
//         <select value={layers} onChange={(e) => setLayers(e.target.value)}>
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//         </select>
//       </div>

//       <div className="mb-2">
//         <label>
//           <input type="checkbox" checked={customTopper} onChange={() => setCustomTopper(!customTopper)} />
//           Customized Topper (+₦3000)
//         </label>
//       </div>

//       <div className="mb-2">
//         <label>
//           <input type="checkbox" checked={pictureAdded} onChange={() => setPictureAdded(!pictureAdded)} />
//           Picture Added (+₦1000)
//         </label>
//       </div>

//       <hr className="my-2" />
//       <p>Product Total: ₦{getBasePrice().toLocaleString()}</p>
//       <p>Toppings Total: ₦{toppingsPrice().toLocaleString()}</p>
//       <p className="font-bold">Grand Total: ₦{totalPrice.toLocaleString()}</p>

//       <button onClick={handleAddToCart} className="mt-3 px-4 py-2 bg-pink-600 text-white rounded">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useContext } from 'react';
// import { CartContext } from '@/context/CartContext';

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useContext(CartContext);

//   // If your product.price is something like "₦25,000", parse it once
//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   // price list (budget friendly)
//   const priceList = {
//     '6-1': 15000, '6-2': 26000, '6-3': 38000,
//     '7-1': 17000, '7-2': 32000, '7-3': 46000,
//     '8-1': 22000, '8-2': 40000, '8-3': 56000,
//     '10-1': 40000, '10-2': 75000,
//     '12-1': 50000, '12-2': 95000,
//   };

//   // Base price:
//   // - If size & layers are selected and exist in priceList, use that
//   // - Otherwise fall back to the product's base price so it never shows NaN
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     if (priceList[key]) return priceList[key];
//     return productBasePrice; // default visible price
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const grandTotal = productTotal + toppingsTotal;

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     // Store the computed final price per unit in options
//     addToCart(product, quantity, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,      // price for one cake before toppings
//       toppingsTotal,                // toppings for one unit
//       finalPrice: grandTotal,       // final price for one unit
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* Show the product’s default price (never NaN) */}
//       <p className="mb-3 text-sm">
//         Base Price:&nbsp;
//         <span className="font-semibold">
//           ₦{productBasePrice.toLocaleString()}
//         </span>
//       </p>

//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       <div className="text-sm space-y-1">
//         <p>Product Total: <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings Total: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total: ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useContext } from 'react';
// import { CartContext } from '@/context/CartContext';

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useContext(CartContext);

//   // If your product.price is something like "₦25,000", parse it once
//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   // price list (budget friendly)
//   const priceList = {
//     '6-1': 15000, '6-2': 26000, '6-3': 38000,
//     '7-1': 17000, '7-2': 32000, '7-3': 46000,
//     '8-1': 22000, '8-2': 40000, '8-3': 56000,
//     '10-1': 40000, '10-2': 75000,
//     '12-1': 50000, '12-2': 95000,
//   };

//   // Base price:
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     if (priceList[key]) return priceList[key];
//     return productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal; // one cake
//   const grandTotal = unitTotal * quantity; // all cakes

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,   // base price (size+layer only)
//       toppingsTotal,             // toppings per unit
//       unitTotal,                 // total per unit (base + toppings)
//       grandTotal,                // total for all quantity
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* Show the product’s default price (never NaN) */}
//       <p className="mb-3 text-sm">
//         Base Price:&nbsp;
//         <span className="font-semibold">
//           ₦{productBasePrice.toLocaleString()}
//         </span>
//       </p>

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//         </select>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext'; // ✅ use custom hook instead of useContext

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart(); // ✅ use custom hook

//   // If your product.price is something like "₦25,000", parse it once
//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   // price list (budget friendly)
//   const priceList = {
//     '6-1': 15000, '6-2': 26000, '6-3': 38000,
//     '7-1': 17000, '7-2': 32000, '7-3': 46000,
//     '8-1': 22000, '8-2': 40000, '8-3': 56000,
//     '10-1': 40000, '10-2': 75000,
//     '12-1': 50000, '12-2': 95000,
//   };

//   // Base price:
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     if (priceList[key]) return priceList[key];
//     return productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal; // one cake
//   const grandTotal = unitTotal * quantity; // all cakes

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,   // base price (size+layer only)
//       toppingsTotal,             // toppings per unit
//       unitTotal,                 // total per unit (base + toppings)
//       grandTotal,                // total for all quantity
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* Show the product’s default price (never NaN) */}
//       <p className="mb-3 text-sm">
//         Base Price:&nbsp;
//         <span className="font-semibold">
//           ₦{productBasePrice.toLocaleString()}
//         </span>
//       </p>

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//         </select>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [flavors, setFlavors] = useState([]); // ✅ multiple flavors
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Updated price list (with 1–4 layers where applicable)
//   const priceList = {
//     '6-1': 16000, '6-2': 28000, '6-3': 40000, '6-4': 50000,
//     '7-1': 18000, '7-2': 36000, '7-3': 51000, '7-4': 65000,
//     '8-1': 24000, '8-2': 46000, '8-3': 62000, '8-4': 80000,
//     '10-1': 45000, '10-2': 80000, '10-3': 120000,
//     '12-1': 50000, '12-2': 95000, '12-3': 140000,
//   };

//   // ✅ Enforce min/max price (except for wedding cakes)
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     let price = priceList[key] || product.basePrice || productBasePrice || 16000;

//     if (!product.isWeddingCake) {
//       if (price < 16000) price = 16000;
//       if (price > 140000) price = 140000;
//     }

//     return price;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor)
//         ? prev.filter((f) => f !== flavor)
//         : [...prev, flavor]
//     );
//   };

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       flavors,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="font-bold text-lg">Customize Your Cake</h2>

//       {/* Cake details */}
//       <div className="text-sm text-gray-700 space-y-2">
//         <p>🎉 Every celebration deserves a cake that makes the day even better!</p>
//         <p>At Nimah, our cakes are crafted with love and available in two delightful options:</p>
//         <ul className="list-disc pl-5">
//           <li>Whipped Cream (Ice Cream) Frosting</li>
//           <li>Our Signature Buttercream</li>
//         </ul>
     
//         <p>
//           🎂 A plain “Happy Birthday” topper is included free of charge. <br />
//           ✨ Customized toppers attract an additional fee.
//         </p>
//         <p className="italic">
//           💬 For a custom cake order, kindly send us a message on WhatsApp — let’s bring your dream cake to life!
//         </p>
//       </div>

//       {/* Size */}
//       <div>
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div>
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Flavors */}
//       <div>
//         <label className="block mb-1 font-medium">Flavors (select multiple):</label>
//         <div className="grid grid-cols-2 gap-2">
//           {['Red Velvet', 'Vanilla', 'Chocolate', 'Coconut', 'Strawberry', 'Marbled'].map((flavor) => (
//             <label key={flavor} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={flavors.includes(flavor)}
//                 onChange={() => toggleFlavor(flavor)}
//               />
//               {flavor}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Cake Color */}
//       <div>
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <label className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={customTopper}
//           onChange={() => setCustomTopper(!customTopper)}
//         />
//         Customized Topper (+₦3,000)
//       </label>

//       <label className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={pictureAdded}
//           onChange={() => setPictureAdded(!pictureAdded)}
//         />
//         Picture Added (+₦1,000)
//       </label>

//       {/* Price Breakdown */}
//       <hr />
//       <div className="text-sm space-y-1">
//         {/* <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p> 
//         */}
//         <p className="font-bold text-black-500 mt-3">
//           ₦{(product.price || product.basePrice || 16000).toLocaleString()}
//         </p>

//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button onClick={decreaseQty} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">-</button>
//           <span className="px-4">{quantity}</span>
//           <button onClick={increaseQty} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [flavors, setFlavors] = useState([]); // ✅ multiple flavors
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Price list
//   const priceList = {
//     '6-1': 16000, '6-2': 28000, '6-3': 40000, '6-4': 50000,
//     '7-1': 18000, '7-2': 36000, '7-3': 51000, '7-4': 65000,
//     '8-1': 24000, '8-2': 46000, '8-3': 62000, '8-4': 80000,
//     '10-1': 45000, '10-2': 80000, '10-3': 120000,
//     '12-1': 50000, '12-2': 95000, '12-3': 140000,
//   };

//   // ✅ Images for each (size-layer) combo
// const imageSets = {
//   "6-1": ["/cakes/6-1a.jpg", "/cakes/6-1b.jpg", "/cakes/6-1c.jpg"],
//   "6-2": ["/cakes/6-2a.jpg", "/cakes/6-2b.jpg"],
//   "7-1": ["/cakes/7-1a.jpg", "/cakes/7-1b.jpg"],
//   "8-3": ["/cakes/8-3a.jpg", "/cakes/8-3b.jpg", "/cakes/8-3c.jpg"],

// };


//   // ✅ Calculate base price
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     let price = priceList[key] || product.basePrice || productBasePrice || 16000;

//     if (!product.isWeddingCake) {
//       if (price < 16000) price = 16000;
//       if (price > 140000) price = 140000;
//     }

//     return price;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor)
//         ? prev.filter((f) => f !== flavor)
//         : [...prev, flavor]
//     );
//   };

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       flavors,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,   // ✅ Correct price stored in cart
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="font-bold text-lg">Customize Your Cake</h2>

//       {/* Cake details */}
//       <div className="text-sm text-gray-700 space-y-2">
//         <p>🎉 Every celebration deserves a cake that makes the day even better!</p>
//         <p>At Nimah, our cakes are crafted with love and available in two delightful options:</p>
//         <ul className="list-disc pl-5">
//           <li>Whipped Cream (Ice Cream) Frosting</li>
//           <li>Our Signature Buttercream</li>
//         </ul>
//         <p>🎂 A plain “Happy Birthday” topper is included free of charge.<br />✨ Customized toppers attract an additional fee.</p>
//         <p className="italic">💬 For a custom cake order, kindly send us a message on WhatsApp — let’s bring your dream cake to life!</p>
//       </div>

//       {/* Size */}
//       <div>
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div>
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Flavors */}
//       <div>
//         <label className="block mb-1 font-medium">Flavors (select multiple):</label>
//         <div className="grid grid-cols-2 gap-2">
//           {['Red Velvet', 'Vanilla', 'Chocolate', 'Coconut', 'Strawberry', 'Marbled'].map((flavor) => (
//             <label key={flavor} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={flavors.includes(flavor)}
//                 onChange={() => toggleFlavor(flavor)}
//               />
//               {flavor}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Cake Color */}
//       <div>
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <label className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={customTopper}
//           onChange={() => setCustomTopper(!customTopper)}
//         />
//         Customized Topper (+₦3,000)
//       </label>

//       <label className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={pictureAdded}
//           onChange={() => setPictureAdded(!pictureAdded)}
//         />
//         Picture Added (+₦1,000)
//       </label>

//       {/* ✅ Correct Price Breakdown */}
//       <hr />
//       <div className="text-sm space-y-1">
//         <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button onClick={decreaseQty} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">-</button>
//           <span className="px-4">{quantity}</span>
//           <button onClick={increaseQty} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { cakeOptions } from "@/data/cakeOptions";
// import { useCart } from '@/context/CartContext';

// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [flavors, setFlavors] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   // Slider
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // ✅ Fetch from cakeOptions
//   const selectedOption =
//     cakeOptions[layers]?.sizes?.[size] || null;

//   const productTotal = selectedOption ? selectedOption.price : parsePrice(product?.price);
//   const currentImages = selectedOption ? selectedOption.images : [];

//   useMemo(() => setCurrentSlide(0), [size, layers]);

//   // --- Toppings logic ---
//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   // --- Quantity controls ---
//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   // --- Flavor toggle ---
//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor) ? prev.filter((f) => f !== flavor) : [...prev, flavor]
//     );
//   };

//   // --- Add to cart ---
//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       flavors,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//       previewImage: currentImages[currentSlide] || null,
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="font-bold text-lg">Customize Your Cake</h2>

//       {/* ✅ Cake Image Slider */}
//       {currentImages.length > 0 && (
//         <div className="relative w-full h-64 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//           <img
//             src={currentImages[currentSlide]}
//             alt={`Cake ${size} inch - ${layers} layer(s)`}
//             className="object-contain h-full"
//           />

//           {/* Prev button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === 0 ? currentImages.length - 1 : prev - 1
//               )
//             }
//             className="absolute left-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ‹
//           </button>

//           {/* Next button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === currentImages.length - 1 ? 0 : prev + 1
//               )
//             }
//             className="absolute right-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ›
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-2 flex gap-2">
//             {currentImages.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentSlide(idx)}
//                 className={`w-2 h-2 rounded-full ${
//                   idx === currentSlide ? 'bg-white' : 'bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Layer Selection */}
//       <div>
//         <label className="block font-semibold">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="border rounded px-2 py-1 w-full"
//         >
//           <option value="">Select layers</option>
//           {Object.keys(cakeOptions).map((layer) => (
//             <option key={layer} value={layer}>
//               {layer} Layer{layer > 1 ? 's' : ''}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Size Selection */}
//       {layers && (
//         <div>
//           <label className="block font-semibold">Size (inches):</label>
//           <select
//             value={size}
//             onChange={(e) => setSize(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           >
//             <option value="">Select size</option>
//             {Object.keys(cakeOptions[layers].sizes).map((s) => (
//               <option key={s} value={s}>
//                 {s} inch
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Flavors */}
//       <div>
//         <label className="block font-semibold">Flavors:</label>
//         <div className="flex gap-2 flex-wrap">
//           {['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry'].map((flavor) => (
//             <button
//               key={flavor}
//               type="button"
//               onClick={() => toggleFlavor(flavor)}
//               className={`px-3 py-1 border rounded ${
//                 flavors.includes(flavor) ? 'bg-red-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {flavor}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Extras */}
//       <div className="flex gap-4">
//         <label>
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />{' '}
//           Add Custom Topper (+₦3,000)
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />{' '}
//           Add Picture (+₦1,000)
//         </label>
//       </div>

//       {/* Message & Color */}
//       <input
//         type="text"
//         placeholder="Cake color"
//         value={cakeColor}
//         onChange={(e) => setCakeColor(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />
//       <input
//         type="text"
//         placeholder="Custom message"
//         value={cakeMessage}
//         onChange={(e) => setCakeMessage(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />

//       {/* Pricing */}
//       <div className="text-sm text-gray-700 space-y-1">
//         <p>
//           <span className="font-medium">Base (Size + Layers):</span> ₦
//           {productTotal.toLocaleString()}
//         </p>
//         <p>
//           <span className="font-medium">Toppings:</span> ₦
//           {toppingsTotal.toLocaleString()}
//         </p>
//         <p className="font-bold">
//           Unit Total (1 Cake): ₦{unitTotal.toLocaleString()}
//         </p>
//         <p className="font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity controls */}
//       <div className="flex items-center gap-3">
//         <button onClick={decreaseQty} className="px-3 py-1 bg-gray-200 rounded">
//           -
//         </button>
//         <span>{quantity}</span>
//         <button onClick={increaseQty} className="px-3 py-1 bg-gray-200 rounded">
//           +
//         </button>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';

// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [flavors, setFlavors] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   // Slider
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // --- Price logic ---
//   const basePrice = parsePrice(product?.price);
//   const productTotal = basePrice; // you can still link this to cakeOptions later
//   const currentImages = product?.images || [];

//   useMemo(() => setCurrentSlide(0), [size, layers]);

//   // --- Toppings logic ---
//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   // --- Quantity controls ---
//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   // --- Flavor toggle ---
//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor) ? prev.filter((f) => f !== flavor) : [...prev, flavor]
//     );
//   };

//   // --- Add to cart ---
//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       flavors,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//       previewImage: currentImages[currentSlide] || null,
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="font-bold text-lg">Customize Your Cake</h2>

//       {/* ✅ Cake Image Slider */}
//       {currentImages.length > 0 && (
//         <div className="relative w-full h-64 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//           <img
//             src={currentImages[currentSlide]}
//             alt={`Cake ${size} inch - ${layers} layer(s)`}
//             className="object-contain h-full"
//           />

//           {/* Prev button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === 0 ? currentImages.length - 1 : prev - 1
//               )
//             }
//             className="absolute left-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ‹
//           </button>

//           {/* Next button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === currentImages.length - 1 ? 0 : prev + 1
//               )
//             }
//             className="absolute right-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ›
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-2 flex gap-2">
//             {currentImages.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentSlide(idx)}
//                 className={`w-2 h-2 rounded-full ${
//                   idx === currentSlide ? 'bg-white' : 'bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Layer Selection */}
//       <div>
//         <label className="block font-semibold">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="border rounded px-2 py-1 w-full"
//         >
//           <option value="">Select layers</option>
//           {[1, 2, 3, 4].map((layer) => (
//             <option key={layer} value={layer}>
//               {layer} Layer{layer > 1 ? 's' : ''}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Size Selection */}
//       {layers && (
//         <div>
//           <label className="block font-semibold">Size (inches):</label>
//           <select
//             value={size}
//             onChange={(e) => setSize(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           >
//             <option value="">Select size</option>
//             {[6, 7, 8, 9, 10, 11, 12].map((s) => (
//               <option key={s} value={s}>
//                 {s} inches
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Flavors */}
//       <div>
//         <label className="block font-semibold">Flavors:</label>
//         <div className="flex gap-2 flex-wrap">
//           {['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry'].map((flavor) => (
//             <button
//               key={flavor}
//               type="button"
//               onClick={() => toggleFlavor(flavor)}
//               className={`px-3 py-1 border rounded ${
//                 flavors.includes(flavor) ? 'bg-red-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {flavor}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Extras */}
//       <div className="flex gap-4">
//         <label>
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />{' '}
//           Add Custom Topper (+₦3,000)
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />{' '}
//           Add Picture (+₦1,000)
//         </label>
//       </div>

//       {/* Message & Color */}
//       <input
//         type="text"
//         placeholder="Cake color"
//         value={cakeColor}
//         onChange={(e) => setCakeColor(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />
//       <input
//         type="text"
//         placeholder="Custom message"
//         value={cakeMessage}
//         onChange={(e) => setCakeMessage(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />

//       {/* ✅ Cake Info Section */}
//       <div className="p-3 bg-yellow-50 rounded-md text-sm space-y-2">
//         <p className="font-medium">
//           🎂 Every celebration deserves a cake that makes the day even better!
//         </p>
//         <p>
//           At <b>Nimah</b>, our cakes are crafted with love and available in two
//           delightful options:
//         </p>
//         <ul className="list-disc pl-5">
//           <li>Whipped Cream (Ice Cream) Frosting</li>
//           <li>Our Signature Buttercream</li>
//         </ul>
//         <p>Each cake layer measures between 2 – 2.5 inches in height.</p>
//         <ul className="list-disc pl-5">
//           <li>2-layer cakes: 4 – 5 inches tall</li>
//           <li>3-layer cakes: 6 – 7.5 inches tall</li>
//           <li>4-layer cakes: 8 – 10 inches tall</li>
//         </ul>
//         <p>
//           <b>Toppers:</b>
//           <br /> A plain “Happy Birthday” topper is included free of charge if
//           required. Customized toppers attract an additional fee.
//         </p>
//         <p className="text-red-600 font-medium">
//           💬 For a custom cake order, kindly send us a message on WhatsApp — let’s bring
//           your dream cake to life!
//         </p>
//       </div>

//       {/* Pricing */}
//       <div className="text-sm text-gray-700 space-y-1">
//         <p>
//           <span className="font-medium">Base (Size + Layers):</span> ₦
//           {productTotal.toLocaleString()}
//         </p>
//         <p>
//           <span className="font-medium">Toppings:</span> ₦
//           {toppingsTotal.toLocaleString()}
//         </p>
//         <p className="font-bold">
//           Unit Total (1 Cake): ₦{unitTotal.toLocaleString()}
//         </p>
//         <p className="font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity controls */}
//       <div className="flex items-center gap-3">
//         <button onClick={decreaseQty} className="px-3 py-1 bg-gray-200 rounded">
//           -
//         </button>
//         <span>{quantity}</span>
//         <button onClick={increaseQty} className="px-3 py-1 bg-gray-200 rounded">
//           +
//         </button>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';



// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [flavors, setFlavors] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Slider state
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // ✅ Price list
//   const priceList = {
//     '6-1': 16000, '6-2': 28000, '6-3': 40000, '6-4': 50000,
//     '7-1': 18000, '7-2': 36000, '7-3': 51000, '7-4': 65000,
//     '8-1': 24000, '8-2': 46000, '8-3': 62000, '8-4': 80000,
//     '10-1': 45000, '10-2': 80000, '10-3': 120000,
//     '12-1': 50000, '12-2': 95000, '12-3': 140000,
//   };

//   // ✅ Image sets (replace with your own)
//   const imageSets = {
//     '6-1': ['/6-1.jpg', '/6-2.jpg', '/6-3.jpg'],
//     '6-2': ['/6-3.jpg', '/cakes/6-2b.jpg'],
//     '6-3': ['/cakes/6-3a.jpg', '/cakes/6-3b.jpg'],
//     '6-4': ['/cakes/6-4a.jpg', '/cakes/6-4b.jpg'],
//     '7-1': ['/cakes/7-1a.jpg', '/cakes/7-1b.jpg'],
//     '7-2': ['/cakes/7-2a.jpg', '/cakes/7-2b.jpg'],
//     '7-3': ['/cakes/7-3a.jpg', '/cakes/7-3b.jpg'],
//     '7-4': ['/cakes/7-4a.jpg', '/cakes/7-4b.jpg'],
//     '8-1': ['/cakes/8-1a.jpg', '/cakes/8-1b.jpg'],
//     '8-2': ['/cakes/8-2a.jpg', '/cakes/8-2b.jpg'],
//     '8-3': ['/cakes/8-3a.jpg', '/cakes/8-3b.jpg'],
//     '8-4': ['/cakes/8-4a.jpg', '/cakes/8-4b.jpg'],
//     '10-1': ['/cakes/10-1a.jpg', '/cakes/10-1b.jpg'],
//     '10-2': ['/cakes/10-2a.jpg', '/cakes/10-2b.jpg'],
//     '10-3': ['/cakes/10-3a.jpg', '/cakes/10-3b.jpg'],
//     '12-1': ['/cakes/12-1a.jpg', '/cakes/12-1b.jpg'],
//     '12-2': ['/cakes/12-2a.jpg', '/cakes/12-2b.jpg'],
//     '12-3': ['/cakes/12-3a.jpg', '/cakes/12-3b.jpg'],
//   };

//   // ✅ Select correct images
//   const key = `${size}-${layers}`;
//   const currentImages = imageSets[key] || [];

//   // ✅ Reset slider when size/layers changes
//   useMemo(() => setCurrentSlide(0), [size, layers]);

//   // --- Pricing logic ---
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     let price = priceList[key] || product.basePrice || productBasePrice || 16000;
//     if (!product.isWeddingCake) {
//       if (price < 16000) price = 16000;
//       if (price > 140000) price = 140000;
//     }
//     return price;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   // --- Quantity controls ---
//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   // --- Flavor toggle ---
//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor) ? prev.filter((f) => f !== flavor) : [...prev, flavor]
//     );
//   };

//   // --- Add to cart ---
//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       flavors,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//       previewImage: currentImages[currentSlide] || null, // ✅ save chosen slide
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="font-bold text-lg">Customize Your Cake</h2>

//       {/* ✅ Cake Image Slider */}
//       {currentImages.length > 0 && (
//         <div className="relative w-full h-64 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//           <img
//             src={currentImages[currentSlide]}
//             alt={`Cake ${key}`}
//             className="object-contain h-full"
//           />

//           {/* Prev button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === 0 ? currentImages.length - 1 : prev - 1
//               )
//             }
//             className="absolute left-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ‹
//           </button>

//           {/* Next button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === currentImages.length - 1 ? 0 : prev + 1
//               )
//             }
//             className="absolute right-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ›
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-2 flex gap-2">
//             {currentImages.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentSlide(idx)}
//                 className={`w-2 h-2 rounded-full ${
//                   idx === currentSlide ? 'bg-white' : 'bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* 🔽 Form controls for size/layers/flavors */}
//       <div>
//         <label className="block font-semibold">Size (inches):</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="border rounded px-2 py-1 w-full"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches </option>
//           <option value="7">7 inches </option>
//           <option value="8">8 inches </option>
//           <option value="10">10 inches </option>
//           <option value="12">12 inches </option>
//         </select>
//       </div>

//       <div>
//         <label className="block font-semibold">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="border rounded px-2 py-1 w-full"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Flavors */}
//       <div>
//         <label className="block font-semibold">Flavors:</label>
//         <div className="flex gap-2 flex-wrap">
//           {['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry'].map((flavor) => (
//             <button
//               key={flavor}
//               type="button"
//               onClick={() => toggleFlavor(flavor)}
//               className={`px-3 py-1 border rounded ${
//                 flavors.includes(flavor) ? 'bg-red-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {flavor}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Extra options */}
//       <div className="flex gap-4">
//         <label>
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />{' '}
//           Add Custom Topper (+₦3,000)
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />{' '}
//           Add Picture (+₦1,000)
//         </label>
//       </div>

//       {/* Message & Color */}
//       <input
//         type="text"
//         placeholder="Cake color"
//         value={cakeColor}
//         onChange={(e) => setCakeColor(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />
//       <input
//         type="text"
//         placeholder="Custom message"
//         value={cakeMessage}
//         onChange={(e) => setCakeMessage(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />

//       {/* Pricing */}
//       <div className="text-sm text-gray-700 space-y-1">
//         <p>
//           <span className="font-medium">Base (Size + Layers):</span> ₦
//           {productTotal.toLocaleString()}
//         </p>
//         <p>
//           <span className="font-medium">Toppings:</span> ₦
//           {toppingsTotal.toLocaleString()}
//         </p>
//         <p className="font-bold">
//           Unit Total (1 Cake): ₦{unitTotal.toLocaleString()}
//         </p>
//         <p className="font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity controls */}
//       <div className="flex items-center gap-3">
//         <button
//           onClick={decreaseQty}
//           className="px-3 py-1 bg-gray-200 rounded"
//         >
//           -
//         </button>
//         <span>{quantity}</span>
//         <button
//           onClick={increaseQty}
//           className="px-3 py-1 bg-gray-200 rounded"
//         >
//           +
//         </button>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';

// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product, selectedImage, setSelectedImage }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [flavors, setFlavors] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   // --- Pricing logic ---
//   const priceList = {
//     '6-1': 16000, '6-2': 28000, '6-3': 40000, '6-4': 50000,
//     '7-1': 18000, '7-2': 36000, '7-3': 51000, '7-4': 65000,
//     '8-1': 24000, '8-2': 46000, '8-3': 62000, '8-4': 80000,
//     '10-1': 45000, '10-2': 80000, '10-3': 120000,
//     '12-1': 50000, '12-2': 95000, '12-3': 140000,
//   };

//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     let price = priceList[key] || productBasePrice || 16000;
//     if (!product.isWeddingCake) {
//       if (price < 16000) price = 16000;
//       if (price > 140000) price = 140000;
//     }
//     return price;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   // --- Quantity controls ---
//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   // --- Flavor toggle ---
//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor) ? prev.filter((f) => f !== flavor) : [...prev, flavor]
//     );
//   };

//   // --- Add to cart ---
//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       flavors,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//       previewImage: selectedImage || product.images?.[0] || null, // ✅ main image from slider
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="font-bold text-lg">Customize Your Cake</h2>

//       {/* Size */}
//       <div>
//         <label className="block font-semibold">Size (inches):</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="border rounded px-2 py-1 w-full"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches </option>
//           <option value="7">7 inches </option>
//           <option value="8">8 inches </option>
//           <option value="10">10 inches </option>
//           <option value="12">12 inches </option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div>
//         <label className="block font-semibold">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="border rounded px-2 py-1 w-full"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Flavors */}
//       <div>
//         <label className="block font-semibold">Flavors:</label>
//         <div className="flex gap-2 flex-wrap">
//           {['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry'].map((flavor) => (
//             <button
//               key={flavor}
//               type="button"
//               onClick={() => toggleFlavor(flavor)}
//               className={`px-3 py-1 border rounded ${
//                 flavors.includes(flavor) ? 'bg-red-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {flavor}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Extra options */}
//       <div className="flex gap-4">
//         <label>
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />{' '}
//           Add Custom Topper (+₦3,000)
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />{' '}
//           Add Picture (+₦1,000)
//         </label>
//       </div>

//       {/* Message & Color */}
//       <input
//         type="text"
//         placeholder="Cake color"
//         value={cakeColor}
//         onChange={(e) => setCakeColor(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />
//       <input
//         type="text"
//         placeholder="Custom message"
//         value={cakeMessage}
//         onChange={(e) => setCakeMessage(e.target.value)}
//         className="border rounded px-2 py-1 w-full"
//       />

//       {/* Pricing */}
//       <div className="text-sm text-gray-700 space-y-1">
//         <p><span className="font-medium">Base (Size + Layers):</span> ₦{productTotal.toLocaleString()}</p>
//         <p><span className="font-medium">Toppings:</span> ₦{toppingsTotal.toLocaleString()}</p>
//         <p className="font-bold">Unit Total (1 Cake): ₦{unitTotal.toLocaleString()}</p>
//         <p className="font-bold">Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}</p>
//       </div>

//       {/* Quantity controls */}
//       <div className="flex items-center gap-3">
//         <button onClick={decreaseQty} className="px-3 py-1 bg-gray-200 rounded">-</button>
//         <span>{quantity}</span>
//         <button onClick={increaseQty} className="px-3 py-1 bg-gray-200 rounded">+</button>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { useCart } from "@/context/CartContext";

// export default function CakeCustomizer({ product, quantity, setQuantity }) {
//   const { addToCart } = useCart();
//   const [customMessage, setCustomMessage] = useState("");
//   const [hasTopper, setHasTopper] = useState(false);
//   const [uploadedPicture, setUploadedPicture] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const images = product.images || [product.image]; // fallback if no images

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (file) setUploadedPicture(URL.createObjectURL(file));
//   };

//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % images.length);

//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

//   const handleAddToCart = () => {
//     addToCart(product, {
//       finalUnitPrice: product.price,
//       size: product.options?.size || "N/A",
//       layers: product.options?.layers || "N/A",
//       flavor: product.options?.flavor || "N/A",
//       color: product.options?.color || "N/A",
//       message: customMessage || "N/A",
//       topper: hasTopper ? "Yes" : "No",
//       picture: uploadedPicture ? "Yes" : "No",
//     });
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow">
//       {/* ✅ Image Slideshow */}
//       <div className="relative w-full h-80 mb-6">
//         <Image
//           src={images[currentSlide]}
//           alt={product.title}
//           fill
//           className="rounded-lg object-cover"
//         />
//         {images.length > 1 && (
//           <>
//             <button
//               onClick={prevSlide}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full"
//             >
//               ‹
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full"
//             >
//               ›
//             </button>
//           </>
//         )}
//       </div>

//       {/* ✅ Product Options (predefined in product data) */}
//       <div className="space-y-2 text-gray-800">
//         <p><strong>Size:</strong> {product.options?.size || "N/A"}</p>
//         <p><strong>Layers:</strong> {product.options?.layers || "N/A"}</p>
//         <p><strong>Flavor:</strong> {product.options?.flavor || "N/A"}</p>
//         {product.options?.color && (
//           <p><strong>Color:</strong> {product.options.color}</p>
//         )}
//       </div>

//       {/* ✅ Custom Message */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Custom Message
//         </label>
//         <input
//           type="text"
//           value={customMessage}
//           onChange={(e) => setCustomMessage(e.target.value)}
//           placeholder="e.g. Happy Birthday!"
//           className="mt-1 p-2 w-full border rounded"
//         />
//       </div>

//       {/* ✅ Topper Checkbox */}
//       <div className="mt-4 flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={hasTopper}
//           onChange={() => setHasTopper(!hasTopper)}
//         />
//         <label>Add a Cake Topper</label>
//       </div>

//       {/* ✅ Upload Picture */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Upload Reference Picture
//         </label>
//         <input type="file" accept="image/*" onChange={handleImageUpload} />
//         {uploadedPicture && (
//           <Image
//             src={uploadedPicture}
//             alt="Uploaded"
//             width={100}
//             height={100}
//             className="mt-2 rounded"
//           />
//         )}
//       </div>

//       {/* ✅ Quantity Selector */}
//       <div className="flex items-center gap-4 mt-6">
//         <label className="text-black">Qty:</label>
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
//             className="px-3 py-1 bg-gray-200 text-black rounded"
//           >
//             -
//           </button>
//           <span className="px-4 py-1 border rounded bg-white">{quantity}</span>
//           <button
//             onClick={() => setQuantity((prev) => prev + 1)}
//             className="px-3 py-1 bg-gray-200 text-black rounded"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* ✅ Price Display */}
//       <p className="mt-4 font-bold text-black text-lg">
//         Unit Price: ₦{Number(product.price).toLocaleString()}
//       </p>
//       <p className="font-semibold text-black text-lg">
//         Total: ₦{(Number(product.price) * quantity).toLocaleString()}
//       </p>

//       {/* ✅ Add to Cart Button */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-6 w-full bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/context/CartContext";

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === "number") return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, "")) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(
//     () => parsePrice(product?.price),
//     [product]
//   );

//   // UI state
//   const [size, setSize] = useState("");
//   const [layers, setLayers] = useState("");
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState("");
//   const [cakeMessage, setCakeMessage] = useState("");
//   const [flavors, setFlavors] = useState([]); // ✅ multiple flavors
//   const [quantity, setQuantity] = useState(1);

//   // Slider state
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // ✅ Price list
//   const priceList = {
//     "6-1": 16000,
//     "6-2": 28000,
//     "6-3": 40000,
//     "6-4": 50000,
//     "7-1": 18000,
//     "7-2": 36000,
//     "7-3": 51000,
//     "7-4": 65000,
//     "8-1": 24000,
//     "8-2": 46000,
//     "8-3": 62000,
//     "8-4": 80000,
//     "10-1": 45000,
//     "10-2": 80000,
//     "10-3": 120000,
//     "12-1": 50000,
//     "12-2": 95000,
//     "12-3": 140000,
//   };

//   // ✅ Images for each (size-layer) combo
//   const imageSets = {
//     "6-1": ["/6-1.jpg", "/6-1b.jpg", "/6-1c.jpg"],
//     "6-2": ["/cakes/6-2a.jpg", "/cakes/6-2b.jpg"],
//     "7-1": ["/cakes/7-1a.jpg", "/cakes/7-1b.jpg"],
//     "8-3": ["/cakes/8-3a.jpg", "/cakes/8-3b.jpg", "/cakes/8-3c.jpg"],
//     // ...add the rest here
//   };

//   // ✅ Get images for selected combo
//   const selectedImages = imageSets[`${size}-${layers}`] || [];

//   // ✅ Calculate base price
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     let price =
//       priceList[key] || product.basePrice || productBasePrice || 16000;

//     if (!product.isWeddingCake) {
//       if (price < 16000) price = 16000;
//       if (price > 140000) price = 140000;
//     }

//     return price;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor)
//         ? prev.filter((f) => f !== flavor)
//         : [...prev, flavor]
//     );
//   };

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert("Please select size and layers");
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       flavors,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//       previewImage: selectedImages[0] || null, // ✅ first image as preview
//     });

//     router.push("/cart");
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="font-bold text-lg">Customize Your Cake</h2>

//       {/* ✅ Slideshow */}
//       {selectedImages.length > 0 && (
//         <div className="relative w-full h-64 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//           <img
//             src={selectedImages[currentSlide]}
//             alt={`Cake ${size} inch - ${layers} layer(s)`}
//             className="object-contain h-full"
//           />

//           {/* Prev button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === 0 ? selectedImages.length - 1 : prev - 1
//               )
//             }
//             className="absolute left-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ‹
//           </button>

//           {/* Next button */}
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) =>
//                 prev === selectedImages.length - 1 ? 0 : prev + 1
//               )
//             }
//             className="absolute right-2 bg-black/50 text-white px-2 py-1 rounded"
//           >
//             ›
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-2 flex gap-2">
//             {selectedImages.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentSlide(idx)}
//                 className={`w-2 h-2 rounded-full ${
//                   idx === currentSlide ? "bg-white" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Size */}
//       <div>
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div>
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Flavors */}
//       <div>
//         <label className="block mb-1 font-medium">
//           Flavors (select multiple):
//         </label>
//         <div className="grid grid-cols-2 gap-2">
//           {[
//             "Red Velvet",
//             "Vanilla",
//             "Chocolate",
//             "Coconut",
//             "Strawberry",
//             "Marbled",
//           ].map((flavor) => (
//             <label key={flavor} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={flavors.includes(flavor)}
//                 onChange={() => toggleFlavor(flavor)}
//               />
//               {flavor}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Cake Color */}
//       <div>
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <label className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={customTopper}
//           onChange={() => setCustomTopper(!customTopper)}
//         />
//         Customized Topper (+₦3,000)
//       </label>

//       <label className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={pictureAdded}
//           onChange={() => setPictureAdded(!pictureAdded)}
//         />
//         Picture Added (+₦1,000)
//       </label>

//       {/* ✅ Price Breakdown */}
//       <hr />
//       <div className="text-sm space-y-1">
//         <p>
//           Base (Size + Layers):{" "}
//           <strong>₦{productTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Toppings per Cake:{" "}
//           <strong>₦{toppingsTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Unit Total (1 Cake):{" "}
//           <strong>₦{unitTotal.toLocaleString()}</strong>
//         </p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import Slider from 'react-slick';
// import Image from 'next/image';

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   const priceList = {
//     '6-1': 15000, '6-2': 26000, '6-3': 38000,
//     '7-1': 17000, '7-2': 32000, '7-3': 46000,
//     '8-1': 22000, '8-2': 40000, '8-3': 56000,
//     '10-1': 40000, '10-2': 75000,
//     '12-1': 50000, '12-2': 95000,
//   };

//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     if (priceList[key]) return priceList[key];
//     return productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//     });

//     router.push('/cart');
//   };

//   // ✅ Slider settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* ✅ Image Slider */}
//       {product.images && product.images.length > 0 && (
//         <div className="mb-4">
//           <Slider {...sliderSettings}>
//             {product.images.map((img, index) => (
//               <div key={index} className="flex justify-center">
//                 <Image
//                   src={img}
//                   alt={product.title || 'Cake'}
//                   width={500}
//                   height={400}
//                   className="rounded-lg object-cover"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       )}

//       <p className="mb-3 text-sm">
//         Base Price:&nbsp;
//         <span className="font-semibold">
//           ₦{productBasePrice.toLocaleString()}
//         </span>
//       </p>

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//         </select>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext'; // ✅ use custom hook instead of useContext

// // Helper: turns "₦15,000" or "15000" into 15000
// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }


// export default function CakeCustomizer({ product }: { product: any }) {
//   const router = useRouter();
//   const { addToCart } = useCart(); // ✅ use custom hook

//   // If your product.price is something like "₦25,000", parse it once
//   const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   // Image slide state
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productImages: string[] = product?.images || [product?.image];

//   const nextImage = () =>
//     setCurrentImageIndex((prev) =>
//       prev === productImages.length - 1 ? 0 : prev + 1
//     );

//   const prevImage = () =>
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? productImages.length - 1 : prev - 1
//     );

//   // price list (budget friendly)
//   const priceList: Record<string, number> = {
//     '6-1': 15000, '6-2': 26000, '6-3': 38000,
//     '7-1': 17000, '7-2': 32000, '7-3': 46000,
//     '8-1': 22000, '8-2': 40000, '8-3': 56000,
//     '10-1': 40000, '10-2': 75000,
//     '12-1': 50000, '12-2': 95000,
//   };

//   // Base price:
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     if (priceList[key]) return priceList[key];
//     return productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal; // one cake
//   const grandTotal = unitTotal * quantity; // all cakes

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }

//     addToCart(product, quantity, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,   // base price (size+layer only)
//       toppingsTotal,             // toppings per unit
//       unitTotal,                 // total per unit (base + toppings)
//       grandTotal,                // total for all quantity
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       {/* ✅ Image Slideshow */}
//       {productImages && productImages.length > 0 && (
//         <div className="relative mb-4">
//           <img
//             src={productImages[currentImageIndex]}
//             alt={product.title}
//             className="w-full h-64 object-cover rounded"
//           />
//           {productImages.length > 1 && (
//             <>
//               <button
//                 onClick={prevImage}
//                 className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded"
//               >
//                 ◀
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded"
//               >
//                 ▶
//               </button>
//             </>
//           )}
//         </div>
//       )}

//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* Show the product’s default price (never NaN) */}
//       <p className="mb-3 text-sm">
//         Base Price:&nbsp;
//         <span className="font-semibold">
//           ₦{productBasePrice.toLocaleString()}
//         </span>
//       </p>

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//         </select>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext'; // ✅ use custom hook instead of useContext

// //Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   // ✅ Parse product price once
//   // const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);
//   const productBasePrice = useMemo(() => {
//     const parsed = parsePrice(product?.price);
//     return parsed > 0 ? parsed : 16000; // fallback for cakes
//   }, [product]);
  
//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Price list
//   const priceList = {
//     '6-1': 15000, '6-2': 26000, '6-3': 38000,
//     '7-1': 17000, '7-2': 32000, '7-3': 46000,
//     '8-1': 22000, '8-2': 40000, '8-3': 56000,
//     '10-1': 40000, '10-2': 75000,
//     '12-1': 50000, '12-2': 95000,
//   };

//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     return priceList[key] || productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal; // price of 1 cake
//   const grandTotal = unitTotal * quantity; // all cakes

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }
      
//     addToCart(product, quantity, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       unitPrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* ✅ Show parsed base price */}
//       <p className="mb-3 text-sm">
//         Base Price:&nbsp;
//         <span className="font-semibold">
//           ₦{productBasePrice.toLocaleString()}
//         </span>
//       </p>

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="3">4 Layers</option>
//         </select>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* ✅ Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext'; 

// // Helper: turns "₦15,000" or "15000" into 15000
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   // ✅ Parse product price once, fallback ₦16,000
//   const productBasePrice = useMemo(() => {
//     const parsed = parsePrice(product?.price);
//     return parsed > 0 ? parsed : 16000;
//   }, [product]);
  
//   // UI state
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Price list
//   const priceList = {
//     '6-1': 15000, '6-2': 26000, '6-3': 38000,
//     '7-1': 17000, '7-2': 32000, '7-3': 46000,
//     '8-1': 22000, '8-2': 40000, '8-3': 56000,
//     '10-1': 40000, '10-2': 75000,
//     '12-1': 50000, '12-2': 95000,
//   };

//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     return priceList[key] || productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal; // price of 1 cake
//   const grandTotal = unitTotal * quantity; // all cakes

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers) {
//       alert('Please select size and layers');
//       return;
//     }
    
//     // ✅ Always send both a `price` and `grandTotal`
//     addToCart(product, quantity, {
//       size,
//       layers,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       basePrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       grandTotal,
//       price: grandTotal, // 👈 ensures Cart can always use `price`
//     });

//     router.push('/cart');
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* ✅ Show parsed base price */}
//       <p className="mb-3 text-sm">
//         Base Price:&nbsp;
//         <span className="font-semibold">
//           ₦{productBasePrice.toLocaleString()}
//         </span>
//       </p>

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* ✅ Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
//         <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
//         <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useState, useMemo } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';

// // Helper to parse price string into number
// function parsePrice(val) {
//   if (typeof val === 'number') return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   // ✅ Parse product price once, fallback ₦16,000
//   const productBasePrice = useMemo(() => {
//     const parsed = parsePrice(product?.price);
//     return parsed > 0 ? parsed : 16000;
//   }, [product]);

//   // UI states
//   const [size, setSize] = useState('');
//   const [layers, setLayers] = useState('');
//   const [flavor, setFlavor] = useState('');
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Expanded Price List (covers all combos up to 12 inches, 4 layers)
//   const priceList = {
//     '6-1': 16000, '6-2': 28000, '6-3': 40000, '6-4': 50000,
//     '7-1': 18000, '7-2': 36000, '7-3': 51000, '7-4': 65000,
//     '8-1': 24000, '8-2': 46000, '8-3': 62000, '8-4': 80000,
//     '10-1': 45000, '10-2': 80000, '10-3': 120000, 
//     '12-1': 50000, '12-2': 95000, '12-3': 140000, 
//   };

//   // ✅ Calculate Base Prices
//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     return priceList[key] || productBasePrice;
//   };

//   // ✅ Toppings (extras)
//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   // Totals
//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   // Quantity controls
//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));



//   // ✅ Handle Add to Cart
// const handleAddToCart = () => {
//   if (!size || !layers || !flavor) {
//     alert("Please select size, layers, and flavor");
//     return;
//   }

//   addToCart(product, {
//     size,
//     layers,
//     flavor,
//     customTopper,
//     pictureAdded,
//     color: cakeColor,
//     message: cakeMessage,
//     basePrice: productTotal,
//     toppingsTotal,
//     unitTotal,
//     unitPrice: unitTotal, // ✅ normalized price
//     finalUnitPrice: unitTotal, // ✅ explicit for CartContext
//     grandTotal,
//     quantity, // ✅ pass chosen quantity
//   });

//   router.push("/cart");
// };


//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

    

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//         {/* Flavor */}
//         <div className="mb-3">
//         <label className="block mb-1 font-medium">Flavor:</label>
//         <select
//           value={flavor}
//           onChange={(e) => setFlavor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select flavor</option>
//           <option value="Vanilla">Vanilla</option>
//           <option value="Chocolate">Chocolate</option>
//           <option value="Red Velvet">Red Velvet</option>
//           <option value="Fruit">Fruit</option>
//           <option value="Butterscotch">Butterscotch</option>
//           <option value="Carrot">Carrot</option>
//         </select>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* ✅ Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>
//           Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong>
//         </p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/context/CartContext";

// function parsePrice(val) {
//   if (typeof val === "number") return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, "")) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(() => {
//     const parsed = parsePrice(product?.price);
//     return parsed > 0 ? parsed : 16000;
//   }, [product]);

//   // States
//   const [size, setSize] = useState("");
//   const [layers, setLayers] = useState("");
//   const [flavor, setFlavor] = useState([]); // ✅ multiple flavors
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState("");
//   const [cakeMessage, setCakeMessage] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const priceList = {
//     "6-1": 16000,
//     "6-2": 28000,
//     "6-3": 40000,
//     "6-4": 50000,
//     "7-1": 18000,
//     "7-2": 36000,
//     "7-3": 51000,
//     "7-4": 65000,
//     "8-1": 24000,
//     "8-2": 46000,
//     "8-3": 62000,
//     "8-4": 80000,
//     "10-1": 45000,
//     "10-2": 80000,
//     "10-3": 120000,
//     "12-1": 50000,
//     "12-2": 95000,
//     "12-3": 140000,
//   };

//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     return priceList[key] || productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers || flavor.length === 0) {
//       alert("Please select size, layers, and at least one flavor");
//       return;
//     }

//     addToCart(product, {
//       size,
//       layers,
//       flavor,
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       basePrice: productTotal,
//       toppingsTotal,
//       unitTotal,
//       unitPrice: unitTotal,
//       finalUnitPrice: unitTotal,
//       grandTotal,
//       quantity,
//     });

//     router.push("/cart");
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Flavors */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Flavors (select multiple):</label>
//         <div className="grid grid-cols-2 gap-2">
//           {[
//             "Vanilla",
//             "Chocolate",
//             "Red Velvet",
//             "Fruit",
//             "Butterscotch",
//             "Carrot",
//           ].map((f) => (
//             <label key={f} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={flavor.includes(f)}
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     setFlavor([...flavor, f]);
//                   } else {
//                     setFlavor(flavor.filter((fl) => fl !== f));
//                   }
//                 }}
//               />
//               {f}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>
//           Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Toppings per Cake:{" "}
//           <strong>₦{toppingsTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong>
//         </p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/context/CartContext";

// function parsePrice(val) {
//   if (typeof val === "number") return val;
//   if (!val) return 0;
//   return Number(String(val).replace(/[^\d.-]/g, "")) || 0;
// }

// export default function CakeCustomizer({ product }) {
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const productBasePrice = useMemo(() => {
//     const parsed = parsePrice(product?.price);
//     return parsed > 0 ? parsed : 16000;
//   }, [product]);

//   // States
//   const [size, setSize] = useState("");
//   const [layers, setLayers] = useState("");
//   const [flavors, setFlavors] = useState([]); // ✅ renamed to `flavors`
//   const [customTopper, setCustomTopper] = useState(false);
//   const [pictureAdded, setPictureAdded] = useState(false);
//   const [cakeColor, setCakeColor] = useState("");
//   const [cakeMessage, setCakeMessage] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const priceList = {
//     "6-1": 16000,
//     "6-2": 28000,
//     "6-3": 40000,
//     "6-4": 50000,
//     "7-1": 18000,
//     "7-2": 36000,
//     "7-3": 51000,
//     "7-4": 65000,
//     "8-1": 24000,
//     "8-2": 46000,
//     "8-3": 62000,
//     "8-4": 80000,
//     "10-1": 45000,
//     "10-2": 80000,
//     "10-3": 120000,
//     "12-1": 50000,
//     "12-2": 95000,
//     "12-3": 140000,
//   };

//   const getBasePrice = () => {
//     const key = `${size}-${layers}`;
//     return priceList[key] || productBasePrice;
//   };

//   const toppingsPrice = () => {
//     let extra = 0;
//     if (customTopper) extra += 3000;
//     if (pictureAdded) extra += 1000;
//     return extra;
//   };

//   const productTotal = getBasePrice();
//   const toppingsTotal = toppingsPrice();
//   const unitTotal = productTotal + toppingsTotal;
//   const grandTotal = unitTotal * quantity;

//   const increaseQty = () => setQuantity((q) => q + 1);
//   const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   const handleAddToCart = () => {
//     if (!size || !layers || flavors.length === 0) {
//       alert("Please select size, layers, and at least one flavor");
//       return;
//     }

//     addToCart(product, {
//       size,
//       layers,
//       flavors, // ✅ renamed field
//       customTopper,
//       pictureAdded,
//       color: cakeColor,
//       message: cakeMessage,
//       basePrice: productTotal,
//       toppingsTotal,
//       unitPrice: unitTotal,
//       finalUnitPrice: unitTotal,
//       grandTotal,
//       quantity,
//     });

//     router.push("/cart");
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">

      
      
// <div className="p-4 shadow-md bg-white">
//   <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

//   <div className="bg-red-50 p-4 rounded-lg mb-4 ">
//     <p className="text-gray-800 text-sm leading-relaxed">
//       🎉 <span className="font-semibold">Every celebration deserves a cake that makes the day even better!</span> ✨
//       <br /><br />
//       At <span className="font-semibold text-red-600">Nimah's Hub</span>, our cakes are crafted with love and available in two delightful frosting options:
//       <br />
//       <strong>• Whipped Cream (Ice Cream) Frosting</strong> or <strong>• Our Signature Buttercream</strong>.
//       <br /><br />
//       Each cake layer measures between <strong>2 to 2.5 inches</strong> in height:
//       <ul className="list-disc ml-5 mt-1">
//         <li>2-layer cakes: 4–5 inches tall</li>
//         <li>3-layer cakes: 6–7.5 inches tall</li>
//         <li>4-layer cakes: 8–10 inches tall</li>
//       </ul>
//       <br />
//       💬 For a <strong>custom cake order</strong>, kindly send us a message on WhatsApp — let’s bring your dream cake to life!
//     </p>
//   </div>

//   {/* Continue with your other customizer form inputs here... */}
// </div>


//       {/* Size */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Size:</label>
//         <select
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select size</option>
//           <option value="6">6 inches</option>
//           <option value="7">7 inches</option>
//           <option value="8">8 inches</option>
//           <option value="10">10 inches</option>
//           <option value="12">12 inches</option>
//         </select>
//       </div>

//       {/* Layers */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Layers:</label>
//         <select
//           value={layers}
//           onChange={(e) => setLayers(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select layers</option>
//           <option value="1">1 Layer</option>
//           <option value="2">2 Layers</option>
//           <option value="3">3 Layers</option>
//           <option value="4">4 Layers</option>
//         </select>
//       </div>

//       {/* Flavors */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Flavors (select multiple):</label>
//         <div className="grid grid-cols-2 gap-2">
//           {[
//             "Vanilla",
//             "Chocolate",
//             "Red Velvet",
//             "Strawberry",
//             "Coconut",
//             "Marbled",
//           ].map((f) => (
//             <label key={f} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={flavors.includes(f)}
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     setFlavors([...flavors, f]);
//                   } else {
//                     setFlavors(flavors.filter((fl) => fl !== f));
//                   }
//                 }}
//               />
//               {f}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Cake Color */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Cake Color:</label>
//         <select
//           value={cakeColor}
//           onChange={(e) => setCakeColor(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select color</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Pink">Pink</option>
//           <option value="White">White</option>
//           <option value="Green">Green</option>
//           <option value="Gold">Gold</option>
//           <option value="Purple">Purple</option>
//         </select>
//       </div>

//       {/* Cake Message */}
//       <div className="mb-3">
//         <label className="block mb-1 font-medium">Message on Cake:</label>
//         <input
//           type="text"
//           value={cakeMessage}
//           onChange={(e) => setCakeMessage(e.target.value)}
//           placeholder="e.g., Happy Birthday Ada!"
//           className="w-full p-2 border rounded"
//           maxLength={40}
//         />
//       </div>

//       {/* Extras */}
//       <div className="mb-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={customTopper}
//             onChange={() => setCustomTopper(!customTopper)}
//           />
//           Customized Topper (+₦3,000)
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={pictureAdded}
//             onChange={() => setPictureAdded(!pictureAdded)}
//           />
//           Picture Added (+₦1,000)
//         </label>
//       </div>

//       <hr className="my-3" />

//       {/* Price Breakdown */}
//       <div className="text-sm space-y-1">
//         <p>
//           Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong>
//         </p>
//         <p>
//           Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong>
//         </p>
//         <p className="text-base font-bold">
//           Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* Quantity */}
//       <div className="mt-4 flex items-center gap-3">
//         <span className="font-medium">Quantity:</span>
//         <div className="flex items-center border rounded">
//           <button
//             onClick={decreaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             onClick={increaseQty}
//             className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart */}
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

// Helper to parse numeric prices
function parsePrice(val) {
  if (typeof val === "number") return val;
  if (!val) return 0;
  return Number(String(val).replace(/[^\d.-]/g, "")) || 0;
}

export default function CakeCustomizer({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  // ✅ Detect if the current product is a Bento Cake
  const isBentoCake = product?.title?.toLowerCase().includes("bento");

  // ✅ Base price depending on cake type
  const productBasePrice = useMemo(() => {
    if (isBentoCake) return 12000; // Bento cakes start at ₦12,000
    const parsed = parsePrice(product?.price);
    return parsed > 0 ? parsed : 16000; // Default for others
  }, [product, isBentoCake]);

  // States
  const [size, setSize] = useState("");
  const [layers, setLayers] = useState("");
  const [flavors, setFlavors] = useState([]);
  const [customTopper, setCustomTopper] = useState(false);
  const [pictureAdded, setPictureAdded] = useState(false);
  const [cakeColor, setCakeColor] = useState("");
  const [cakeMessage, setCakeMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  // ✅ Normal cake price list
  const priceList = {
    "6-1": 16000,
    "6-2": 28000,
    "6-3": 40000,
    "6-4": 50000,
    "7-1": 18000,
    "7-2": 36000,
    "7-3": 51000,
    "7-4": 65000,
    "8-1": 24000,
    "8-2": 46000,
    "8-3": 62000,
    "8-4": 80000,
    "10-1": 45000,
    "10-2": 80000,
    "10-3": 120000,
    "12-1": 50000,
    "12-2": 95000,
    "12-3": 140000,
  };

  // ✅ Special Bento Cake pricing
  const bentoPriceList = {
    "1-1": 12000,
    "2-1": 13000,
    "3-1": 14000,
    "4-1": 15000,
  };

  // ✅ Decide which price list to use
  const getBasePrice = () => {
    if (isBentoCake) {
      const key = `${layers || "1"}-1`;
      return bentoPriceList[key] || 12000;
    }
    const key = `${size}-${layers}`;
    return priceList[key] || productBasePrice;
  };

  const toppingsPrice = () => {
    let extra = 0;
    if (customTopper) extra += 3000;
    if (pictureAdded) extra += 1000;
    return extra;
  };

  const productTotal = getBasePrice();
  const toppingsTotal = toppingsPrice();
  const unitTotal = productTotal + toppingsTotal;
  const grandTotal = unitTotal * quantity;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (!isBentoCake && (!size || !layers || flavors.length === 0)) {
      alert("Please select size, layers, and at least one flavor");
      return;
    }

    addToCart(product, {
      size,
      layers,
      flavors,
      customTopper,
      pictureAdded,
      color: cakeColor,
      message: cakeMessage,
      basePrice: productTotal,
      toppingsTotal,
      unitPrice: unitTotal,
      finalUnitPrice: unitTotal,
      grandTotal,
      quantity,
    });

    router.push("/cart");
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="font-bold text-lg mb-3">
        {isBentoCake ? "Customize Your Bento Cake" : "Customize Your Cake"}
      </h2>

      {/* Info section */}
      <div className="bg-red-50 p-4 rounded-lg mb-4">
        <p className="text-gray-800 text-sm leading-relaxed">
          🎂 <span className="font-semibold">Crafted with love and perfection!</span>
          <br /><br />
          {isBentoCake
            ? "Our Bento Cakes are compact, cute, and perfect for gifting or personal treats. Small size, big flavor — and budget-friendly too!"
            : "At Nimah's Hub, our cakes are baked with passion and care. Choose your size, layers, and flavors to make it truly yours."}
        </p>
      </div>

      {/* Bento cakes don’t need size selection */}
      {!isBentoCake && (
        <>
          {/* Size */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Size:</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select size</option>
              <option value="6">6 inches</option>
              <option value="7">7 inches</option>
              <option value="8">8 inches</option>
              <option value="10">10 inches</option>
              <option value="12">12 inches</option>
            </select>
          </div>
        </>
      )}

      {/* Layers */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">
          {isBentoCake ? "Size Option:" : "Layers:"}
        </label>
        <select
          value={layers}
          onChange={(e) => setLayers(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select {isBentoCake ? "size" : "layers"}</option>
          {isBentoCake ? (
            <>
              <option value="1">Mini (₦12,000)</option>
              <option value="2">Small (₦13,000)</option>
              <option value="3">Medium (₦14,000)</option>
              <option value="4">Large (₦15,000)</option>
            </>
          ) : (
            <>
              <option value="1">1 Layer</option>
              <option value="2">2 Layers</option>
              <option value="3">3 Layers</option>
              <option value="4">4 Layers</option>
            </>
          )}
        </select>
      </div>

      {/* Flavors */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Flavors:</label>
        <div className="grid grid-cols-2 gap-2">
          {["Vanilla", "Chocolate", "Red Velvet", "Strawberry", "Coconut", "Marbled"].map(
            (f) => (
              <label key={f} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={flavors.includes(f)}
                  onChange={(e) => {
                    if (e.target.checked) setFlavors([...flavors, f]);
                    else setFlavors(flavors.filter((fl) => fl !== f));
                  }}
                />
                {f}
              </label>
            )
          )}
        </div>
      </div>

      {/* Cake color */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Cake Color (optional):</label>
        <input
          type="text"
          value={cakeColor}
          onChange={(e) => setCakeColor(e.target.value)}
          placeholder="e.g. Pink, Blue, White"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Message */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Cake Message (optional):</label>
        <input
          type="text"
          value={cakeMessage}
          onChange={(e) => setCakeMessage(e.target.value)}
          placeholder="Happy Birthday!"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Extras */}
      <div className="mb-3 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={customTopper}
            onChange={() => setCustomTopper(!customTopper)}
          />
          Add Custom Topper (+₦3,000)
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={pictureAdded}
            onChange={() => setPictureAdded(!pictureAdded)}
          />
          Add Picture (+₦1,000)
        </label>
      </div>

      {/* Quantity */}
      <div className="mb-3 flex items-center gap-3">
        <button
          onClick={decreaseQty}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="font-medium">{quantity}</span>
        <button
          onClick={increaseQty}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Total */}
      <div className="mb-4">
        <p className="font-semibold text-gray-800">
          Total: ₦{grandTotal.toLocaleString()}
        </p>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

