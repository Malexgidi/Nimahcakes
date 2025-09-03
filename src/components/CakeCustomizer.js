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

'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext'; // ✅ use custom hook instead of useContext

// Helper: turns "₦15,000" or "15000" into 15000
function parsePrice(val) {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  return Number(String(val).replace(/[^\d.-]/g, '')) || 0;
}

export default function CakeCustomizer({ product }) {
  const router = useRouter();
  const { addToCart } = useCart(); // ✅ use custom hook

  // If your product.price is something like "₦25,000", parse it once
  const productBasePrice = useMemo(() => parsePrice(product?.price), [product]);

  // UI state
  const [size, setSize] = useState('');
  const [layers, setLayers] = useState('');
  const [customTopper, setCustomTopper] = useState(false);
  const [pictureAdded, setPictureAdded] = useState(false);
  const [cakeColor, setCakeColor] = useState('');
  const [cakeMessage, setCakeMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  // price list (budget friendly)
  const priceList = {
    '6-1': 15000, '6-2': 26000, '6-3': 38000,
    '7-1': 17000, '7-2': 32000, '7-3': 46000,
    '8-1': 22000, '8-2': 40000, '8-3': 56000,
    '10-1': 40000, '10-2': 75000,
    '12-1': 50000, '12-2': 95000,
  };

  // Base price:
  const getBasePrice = () => {
    const key = `${size}-${layers}`;
    if (priceList[key]) return priceList[key];
    return productBasePrice;
  };

  const toppingsPrice = () => {
    let extra = 0;
    if (customTopper) extra += 3000;
    if (pictureAdded) extra += 1000;
    return extra;
  };

  const productTotal = getBasePrice();
  const toppingsTotal = toppingsPrice();
  const unitTotal = productTotal + toppingsTotal; // one cake
  const grandTotal = unitTotal * quantity; // all cakes

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (!size || !layers) {
      alert('Please select size and layers');
      return;
    }

    addToCart(product, quantity, {
      size,
      layers,
      customTopper,
      pictureAdded,
      color: cakeColor,
      message: cakeMessage,
      unitPrice: productTotal,   // base price (size+layer only)
      toppingsTotal,             // toppings per unit
      unitTotal,                 // total per unit (base + toppings)
      grandTotal,                // total for all quantity
    });

    router.push('/cart');
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="font-bold text-lg mb-3">Customize Your Cake</h2>

      {/* Show the product’s default price (never NaN) */}
      <p className="mb-3 text-sm">
        Base Price:&nbsp;
        <span className="font-semibold">
          ₦{productBasePrice.toLocaleString()}
        </span>
      </p>

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

      {/* Layers */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Layers:</label>
        <select
          value={layers}
          onChange={(e) => setLayers(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select layers</option>
          <option value="1">1 Layer</option>
          <option value="2">2 Layers</option>
          <option value="3">3 Layers</option>
        </select>
      </div>

      {/* Cake Color */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Cake Color:</label>
        <select
          value={cakeColor}
          onChange={(e) => setCakeColor(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Pink">Pink</option>
          <option value="White">White</option>
          <option value="Green">Green</option>
          <option value="Gold">Gold</option>
          <option value="Purple">Purple</option>
        </select>
      </div>

      {/* Cake Message */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Message on Cake:</label>
        <input
          type="text"
          value={cakeMessage}
          onChange={(e) => setCakeMessage(e.target.value)}
          placeholder="e.g., Happy Birthday Ada!"
          className="w-full p-2 border rounded"
          maxLength={40}
        />
      </div>

      {/* Extras */}
      <div className="mb-3">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={customTopper}
            onChange={() => setCustomTopper(!customTopper)}
          />
          Customized Topper (+₦3,000)
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={pictureAdded}
            onChange={() => setPictureAdded(!pictureAdded)}
          />
          Picture Added (+₦1,000)
        </label>
      </div>

      <hr className="my-3" />

      {/* Price Breakdown */}
      <div className="text-sm space-y-1">
        <p>Base (Size + Layers): <strong>₦{productTotal.toLocaleString()}</strong></p>
        <p>Toppings per Cake: <strong>₦{toppingsTotal.toLocaleString()}</strong></p>
        <p>Unit Total (1 Cake): <strong>₦{unitTotal.toLocaleString()}</strong></p>
        <p className="text-base font-bold">
          Grand Total ({quantity} pcs): ₦{grandTotal.toLocaleString()}
        </p>
      </div>

      {/* Quantity */}
      <div className="mt-4 flex items-center gap-3">
        <span className="font-medium">Quantity:</span>
        <div className="flex items-center border rounded">
          <button
            onClick={decreaseQty}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={increaseQty}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

