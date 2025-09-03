


// 'use client';

// import { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   // Load from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   /**
//    * Adds an item to the cart.
//    * - If the same item + same options exist, increase quantity
//    * - If it's a different config, treat as new item
//    */
//   const addToCart = (product, quantity = 1, options = {}) => {
//     const newItem = {
//       ...product,
//       quantity,
//       options,
//     };

//     setCartItems((prev) => {
//       // Match by id and options (for cakes with customizations)
//       const existingIndex = prev.findIndex(
//         (item) =>
//           item.id === product.id &&
//           JSON.stringify(item.options) === JSON.stringify(options)
//       );

//       if (existingIndex !== -1) {
//         const updated = [...prev];
//         updated[existingIndex].quantity += quantity;
//         return updated;
//       }

//       return [...prev, newItem];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };



//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// 'use client';

// import { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   // Load from localStorage on mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   // Save to localStorage when cart changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   /**
//    * Adds an item to the cart.
//    * - Supports options (size, layers, topper, etc.)
//    * - If the same item + same options exist, increase quantity
//    */
//   const addToCart = (product, quantity = 1, options = {}) => {
//     const newItem = {
//       ...product,
//       quantity,
//       options, // store customization details here
//     };

//     setCartItems((prevItems) => {
//       const existingIndex = prevItems.findIndex(
//         (item) =>
//           item.id === product.id &&
//           JSON.stringify(item.options) === JSON.stringify(options)
//       );

//       if (existingIndex !== -1) {
//         // Increase quantity if same product & same options exist
//         const updated = [...prevItems];
//         updated[existingIndex].quantity += quantity;
//         return updated;
//       }

//       // Otherwise, add as a new cart entry
//       return [...prevItems, newItem];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// 'use client';

// import { createContext, useState, useEffect, useContext } from 'react';

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   // Load from localStorage on mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   // Save to localStorage when cart changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   /** Adds an item to the cart. */
//   const addToCart = (product, quantity = 1, options = {}) => {
//     const newItem = {
//       ...product,
//       quantity,
//       options, // store customization details here
//     };

//     setCartItems((prevItems) => {
//       const existingIndex = prevItems.findIndex(
//         (item) =>
//           item.id === product.id &&
//           JSON.stringify(item.options) === JSON.stringify(options)
//       );

//       if (existingIndex !== -1) {
//         const updated = [...prevItems];
//         updated[existingIndex].quantity += quantity;
//         return updated;
//       }

//       return [...prevItems, newItem];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => setCartItems([]);

//   // 👇 compute total dynamically
//   const total = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart, total }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// // 👇 custom hook for easier usage
// export function useCart() {
//   return useContext(CartContext);
// }

// 'use client';

// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // Add product with all details
//   const addToCart = (product, quantity = 1, options = {}) => {
//     setCart((prev) => {
//       // Compute totals
//       const unitPrice = options.unitPrice || Number(product.price) || 0;
//       const toppingsTotal = options.toppingsTotal || 0;
//       const finalPrice = options.finalPrice || unitPrice + toppingsTotal;
//       const grandTotal = finalPrice * quantity;

//       const newItem = {
//         id: product.id,
//         name: product.title || product.name,
//         image: product.image,
//         quantity,
//         unitPrice,
//         toppingsTotal,
//         finalPrice,
//         grandTotal,
//         options, // keep customizations like size, layers, topper, etc.
//       };

//       // If same product + same options exist, merge instead of duplicate
//       const existingIndex = prev.findIndex(
//         (item) =>
//           item.id === newItem.id &&
//           JSON.stringify(item.options) === JSON.stringify(newItem.options)
//       );

//       if (existingIndex >= 0) {
//         const updated = [...prev];
//         updated[existingIndex].quantity += quantity;
//         updated[existingIndex].grandTotal =
//           updated[existingIndex].finalPrice * updated[existingIndex].quantity;
//         return updated;
//       }

//       return [...prev, newItem];
//     });
//   };

//   const removeFromCart = (id, options = {}) => {
//     setCart((prev) =>
//       prev.filter(
//         (item) =>
//           !(
//             item.id === id &&
//             JSON.stringify(item.options) === JSON.stringify(options)
//           )
//       )
//     );
//   };

//   const updateQuantity = (id, options = {}, newQty) => {
//     setCart((prev) =>
//       prev.map((item) => {
//         if (
//           item.id === id &&
//           JSON.stringify(item.options) === JSON.stringify(options)
//         ) {
//           const qty = Math.max(newQty, 1);
//           return {
//             ...item,
//             quantity: qty,
//             grandTotal: item.finalPrice * qty,
//           };
//         }
//         return item;
//       })
//     );
//   };

//   const clearCart = () => setCart([]);

//   // Cart summary
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalAmount = cart.reduce((sum, item) => sum + item.grandTotal, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         totalItems,
//         totalAmount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }

// "use client";

// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   // Add item to cart
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//                 unitTotal: (item.quantity + 1) * item.price,
//               }
//             : item
//         );
//       }
//       return [
//         ...prev,
//         { ...product, quantity: 1, unitTotal: product.price },
//       ];
//     });
//   };

//   // Remove item from cart
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Update item quantity
//   const updateQuantity = (id, quantity) => {
//     if (quantity < 1) return;
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, quantity, unitTotal: quantity * item.price }
//           : item
//       )
//     );
//   };

//   // Calculate totals
//   const grandTotal = cartItems.reduce(
//     (total, item) => total + item.unitTotal,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity, grandTotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// // ✅ Custom hook to use the cart
// export function useCart() {
//   return useContext(CartContext);
// }

// "use client";
// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product, quantity = 1, options = {}) => {
//     const newItem = {
//       id: `${product.id}-${options.size || ""}-${options.layers || ""}-${Date.now()}`, // unique ID per customization
//       productId: product.id,
//       name: product.name,
//       image: product.image || product.img || "", // adjust to your product field
//       quantity,
//       ...options, // size, layers, color, message, toppings, prices, etc.
//     };

//     setCart((prev) => [...prev, newItem]);
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1, options = {}) => {
    const newItem = {
      id: `${product.id}-${options.size || ""}-${options.layers || ""}-${Date.now()}`, // unique ID per customization
      productId: product.id,
      name: product.name,
      image: product.image || product.img || "",
      description: product.description || "",
      price: product.price || 0,
      quantity,
      unitTotal: (product.price || 0) * quantity,
      ...options, // size, layers, color, message, topper, etc.
    };

    setCartItems((prev) => [...prev, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity > 0 ? newQuantity : 1,
              unitTotal: item.price * (newQuantity > 0 ? newQuantity : 1),
            }
          : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const grandTotal = cartItems.reduce((sum, item) => sum + item.unitTotal, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, grandTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ custom hook to fix your imports everywhere
export const useCart = () => useContext(CartContext);
