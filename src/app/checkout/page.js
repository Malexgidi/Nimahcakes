// src/app/checkout/page.tsx
// import React from "react";
// import Link from "next/link";
// import Navbar from '@/components/Navbar';


// const CheckoutPage = () => {
//   return (
//     <> 
//     <Navbar />
//     <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT: Forms */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* Delivery / Pickup Info */}
//           <section>
//             <h2 className="text-xl font-semibold mb-4">Delivery / Pickup Information</h2>
//             <form className="space-y-4">
//               <input className="w-full p-3 border rounded" placeholder="Full Name" />
//               <input className="w-full p-3 border rounded" placeholder="Phone Number" />
//               <input className="w-full p-3 border rounded" placeholder="Email Address" />
//               <textarea className="w-full p-3 border rounded" placeholder="Delivery Address (or type 'Pickup')"></textarea>
//             </form>
//           </section>

//           {/* Billing Details */}
//           <section>
//             <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
//             <form className="space-y-4">
//               <input className="w-full p-3 border rounded" placeholder="Cardholder Name" />
//               <input className="w-full p-3 border rounded" placeholder="Card Number" />
//               <div className="flex gap-4">
//                 <input className="w-full p-3 border rounded" placeholder="Expiry Date" />
//                 <input className="w-full p-3 border rounded" placeholder="CVV" />
//               </div>
//             </form>
//           </section>

//           {/* Ship to Different Address */}
//           <section>
//             <h2 className="text-xl font-semibold mb-4">Ship to a Different Address</h2>
//             <form className="space-y-4">
//               <input className="w-full p-3 border rounded" placeholder="Recipient Name" />
//               <input className="w-full p-3 border rounded" placeholder="Phone Number" />
//               <textarea className="w-full p-3 border rounded" placeholder="Alternate Address"></textarea>
//             </form>
//           </section>
//         </div>

//         {/* RIGHT: Order Summary */}
//         <div className="bg-gray-100 p-6 rounded-md shadow-inner h-fit">
//           <h2 className="text-xl font-semibold mb-4">Your Order</h2>
//           <div className="space-y-2">
//             {/* Replace with real cart items */}
//             <div className="flex justify-between">
//               <span>Custom Cake</span>
//               <span>₦30,000</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Small Chops Pack</span>
//               <span>₦12,000</span>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between font-semibold">
//               <span>Total</span>
//               <span>₦42,000</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Actions */}
//       <div className="max-w-6xl mx-auto mt-8 flex flex-col items-center gap-4">
//         <button className="bg-red-600 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-red-700 transition">
//           Place Order
//         </button>
//         <Link href="/cart" className="text-sm text-red-600 hover:underline">
//           ← Back to Cart
//         </Link>
//       </div>

//       {/* Footer */}
//       <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
//         &copy; {new Date().getFullYear()} Nimah's Cakes & Cuisine. All rights reserved.
//       </footer>
//     </div>
//     </>
//   );
// };

// export default CheckoutPage;

// "use client";

// import React from "react";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import { useCart } from "@/context/CartContext"; // ✅ import CartContext hook

// const CheckoutPage = () => {
//   const { cartItems, grandTotal } = useCart(); // ✅ get cart and total

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 p-4 md:p-10">
//         <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* LEFT: Forms */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Delivery / Pickup Info */}
//             <section>
//               <h2 className="text-xl font-semibold mb-4">Delivery / Pickup Information</h2>
//               <form className="space-y-4">
//                 <input className="w-full p-3 border rounded" placeholder="Full Name" />
//                 <input className="w-full p-3 border rounded" placeholder="Phone Number" />
//                 <input className="w-full p-3 border rounded" placeholder="Email Address" />
//                 <textarea className="w-full p-3 border rounded" placeholder="Delivery Address (or type 'Pickup')"></textarea>
//               </form>
//             </section>

//             {/* Billing Details */}
//             <section>
//               <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
//               <form className="space-y-4">
//                 <input className="w-full p-3 border rounded" placeholder="Cardholder Name" />
//                 <input className="w-full p-3 border rounded" placeholder="Card Number" />
//                 <div className="flex gap-4">
//                   <input className="w-full p-3 border rounded" placeholder="Expiry Date" />
//                   <input className="w-full p-3 border rounded" placeholder="CVV" />
//                 </div>
//               </form>
//             </section>

//             {/* Ship to Different Address */}
//             <section>
//               <h2 className="text-xl font-semibold mb-4">Ship to a Different Address</h2>
//               <form className="space-y-4">
//                 <input className="w-full p-3 border rounded" placeholder="Recipient Name" />
//                 <input className="w-full p-3 border rounded" placeholder="Phone Number" />
//                 <textarea className="w-full p-3 border rounded" placeholder="Alternate Address"></textarea>
//               </form>
//             </section>
//           </div>

//           {/* RIGHT: Order Summary */}
//           <div className="bg-gray-100 p-6 rounded-md shadow-inner h-fit">
//             <h2 className="text-xl font-semibold mb-4">Your Order</h2>
//             <div className="space-y-2">
//               {cartItems.length === 0 ? (
//                 <p className="text-gray-500">Your cart is empty.</p>
//               ) : (
//                 <>
//                   {cartItems.map((item, index) => (
//                     <div key={index} className="flex justify-between text-sm">
//                       <span>{item.name} × {item.quantity}</span>
//                       <span>₦{item.unitTotal.toLocaleString()}</span>
//                     </div>
//                   ))}
//                   <hr className="my-4" />
//                   <div className="flex justify-between font-semibold text-lg">
//                     <span>Total</span>
//                     <span>₦{grandTotal.toLocaleString()}</span>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Actions */}
//         <div className="max-w-6xl mx-auto mt-8 flex flex-col items-center gap-4">
//           <button className="bg-red-600 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-red-700 transition">
//             Place Order
//           </button>
//           <Link href="/cart" className="text-sm text-red-600 hover:underline">
//             ← Back to Cart
//           </Link>
//         </div>

//         {/* Footer */}
//         <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
//           &copy; {new Date().getFullYear()} Nimah's Cakes & Cuisine. All rights reserved.
//         </footer>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;

// 'use client';

// import React from "react";
// import Link from "next/link";
// import Navbar from '@/components/Navbar';
// import { useCart } from '@/context/CartContext';

// const CheckoutPage = () => {
//   const { cartItems, grandTotal } = useCart();

//   // ✅ Handler for placing an order
//   const handlePlaceOrder = () => {
//     const orderDetails = {
//       items: cartItems,
//       total: grandTotal,
//       createdAt: new Date().toISOString(),
//     };

//     // For now, just log the order
//     console.log("🛒 Order Placed:", orderDetails);

//     // 👉 Later: send this to your backend or payment API
//     // fetch('/api/orders', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(orderDetails),
//     // });
//   };

//   return (
//     <> 
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 p-4 md:p-10">
//         <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* LEFT: Forms */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Delivery / Pickup Info */}
//             <section>
//               <h2 className="text-xl font-semibold mb-4">Delivery / Pickup Information</h2>
//               <form className="space-y-4">
//                 <input className="w-full p-3 border rounded" placeholder="Full Name" />
//                 <input className="w-full p-3 border rounded" placeholder="Phone Number" />
//                 <input className="w-full p-3 border rounded" placeholder="Email Address" />
//                 <textarea className="w-full p-3 border rounded" placeholder="Delivery Address (or type 'Pickup')"></textarea>
//               </form>
//             </section>

//             {/* Billing Details */}
//             <section>
//               <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
//               <form className="space-y-4">
//                 <input className="w-full p-3 border rounded" placeholder="Cardholder Name" />
//                 <input className="w-full p-3 border rounded" placeholder="Card Number" />
//                 <div className="flex gap-4">
//                   <input className="w-full p-3 border rounded" placeholder="Expiry Date" />
//                   <input className="w-full p-3 border rounded" placeholder="CVV" />
//                 </div>
//               </form>
//             </section>

//             {/* Ship to Different Address */}
//             <section>
//               <h2 className="text-xl font-semibold mb-4">Ship to a Different Address</h2>
//               <form className="space-y-4">
//                 <input className="w-full p-3 border rounded" placeholder="Recipient Name" />
//                 <input className="w-full p-3 border rounded" placeholder="Phone Number" />
//                 <textarea className="w-full p-3 border rounded" placeholder="Alternate Address"></textarea>
//               </form>
//             </section>
//           </div>

//           {/* RIGHT: Order Summary */}
//           <div className="bg-gray-100 p-6 rounded-md shadow-inner h-fit">
//             <h2 className="text-xl font-semibold mb-4">Your Order</h2>
//             <div className="space-y-2">
//               {cartItems.map((item, index) => (
//                 <div key={index} className="flex justify-between text-sm">
//                   <span>{item.name} × {item.quantity}</span>
//                   <span>₦{item.unitTotal.toLocaleString()}</span>
//                 </div>
//               ))}

//               <hr className="my-4" />
//               <div className="flex justify-between font-semibold">
//                 <span>Total</span>
//                 <span>₦{grandTotal.toLocaleString()}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Actions */}
//         <div className="max-w-6xl mx-auto mt-8 flex flex-col items-center gap-4">
//           <button
//             onClick={handlePlaceOrder}
//             className="bg-red-600 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-red-700 transition"
//           >
//             Place Order
//           </button>
//           <Link href="/cart" className="text-sm text-red-600 hover:underline">
//             ← Back to Cart
//           </Link>
//         </div>

//         {/* Footer */}
//         <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
//           &copy; {new Date().getFullYear()} Nimah's Cakes & Cuisine. All rights reserved.
//         </footer>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;


// "use client";
// import React from "react";
// import { useCart } from "@/context/CartContext";

// export default function CheckoutPage() {
//   const { cartItems, grandTotal, clearCart } = useCart();

//   const handlePlaceOrder = () => {
//     console.log("Order placed (pending bank transfer):", {
//       items: cart,
//       total: grandTotal,
//       method: "bank_transfer",
//     });

//     alert(
//       "✅ Order placed!\n\nPlease transfer the exact amount to the following account:\n\n" +
//         "Bank: GTBank\n" +
//         "Account Name: Nimah Cakes & Cuisine\n" +
//         "Account Number: 0123456789\n\n" +
//         "After transfer, send proof of payment via WhatsApp/Email."
//     );

//     clearCart();
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <>
//           {/* Cart Items */}
//           <ul className="divide-y divide-gray-200 mb-6">
//             {cartItems.map((item, index) => (
//               <li key={index} className="py-4 flex justify-between">
//                 <div>
//                   <h2 className="font-semibold">{item.name}</h2>
//                   <p className="text-sm text-gray-600">{item.description}</p>
//                   <p className="text-sm">Qty: {item.quantity}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm">₦{item.unitPrice.toLocaleString()}</p>
//                   <p className="font-bold">₦{item.unitTotal.toLocaleString()}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* Cart Total */}
//           <div className="flex justify-between items-center border-t pt-4 mb-6">
//             <span className="text-lg font-semibold">Cart Total:</span>
//             <span className="text-xl font-bold text-red-600">
//               ₦{grandTotal.toLocaleString()}
//             </span>
//           </div>

//           {/* Bank Transfer Instructions */}
//           <div className="mb-6 bg-gray-100 p-4 rounded-lg">
//             <h2 className="font-semibold mb-2">Bank Transfer Details</h2>
//             <p><span className="font-semibold">Bank:</span> GTBank</p>
//             <p><span className="font-semibold">Account Name:</span> Nimah Cakes & Cuisine</p>
//             <p><span className="font-semibold">Account Number:</span> 0123456789</p>
//             <p className="text-sm text-gray-600 mt-2">
//               Please send proof of payment via WhatsApp/Email after completing your transfer.
//             </p>
//           </div>

//           {/* Place Order Button */}
//           <button
//             onClick={handlePlaceOrder}
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
//           >
//             Place Order
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation"; // 👈 Add this

// export default function CheckoutPage() {
//   const { cartItems, grandTotal, clearCart } = useCart();
//   const router = useRouter(); // 👈 initialize router

//   const [orderType, setOrderType] = useState("delivery");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const [pickupTime, setPickupTime] = useState("");
//   const [deliveryDate, setDeliveryDate] = useState("");
//   const [deliveryTime, setDeliveryTime] = useState("");

//   const nimahsShopAddress = "123 Nimah Street, Lagos, Nigeria";

//   const handlePlaceOrder = () => {
//     const orderDetails = {
//       type: orderType,
//       address: orderType === "delivery" ? deliveryAddress : nimahsShopAddress,
//       date: orderType === "delivery" ? deliveryDate : pickupDate,
//       time: orderType === "delivery" ? deliveryTime : pickupTime,
//       items: cartItems,
//       total: grandTotal,
//       paymentMethod: "Bank Transfer",
//     };

//     console.log("✅ Order Placed:", orderDetails);

//     clearCart();
//     router.push("/thank-you"); // 👈 redirect instead of alert
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="w-full bg-white shadow-sm p-4 flex">
//         <Image
//           src="/Nimahhub.jpg"
//           alt="Nimah Logo"
//           width={60}
//           height={50}
//           className="object-contain"
//         />
//       </nav>

//       {/* Main Content */}
//       <main className="flex-grow max-w-4xl mx-auto p-6 py-10">
//         <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//         {/* Order Type Selection */}
//         <div className="mb-4">
//           <label className="mr-4">
//             <input
//               type="radio"
//               value="delivery"
//               checked={orderType === "delivery"}
//               onChange={() => setOrderType("delivery")}
//             />{" "}
//             Delivery
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="pickup"
//               checked={orderType === "pickup"}
//               onChange={() => setOrderType("pickup")}
//             />{" "}
//             Pickup
//           </label>
//         </div>

//         {/* Conditional Forms */}
//         {orderType === "delivery" && (
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold">Delivery Details</h2>
//             <textarea
//               placeholder="Enter your delivery address"
//               value={deliveryAddress}
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               className="w-full border p-2 rounded my-2"
//             />
//             <div className="flex gap-4">
//               <input
//                 type="date"
//                 value={deliveryDate}
//                 onChange={(e) => setDeliveryDate(e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="time"
//                 value={deliveryTime}
//                 onChange={(e) => setDeliveryTime(e.target.value)}
//                 className="border p-2 rounded"
//               />
//             </div>
//           </div>
//         )}

//         {orderType === "pickup" && (
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold">Pickup Details</h2>
//             <p className="mb-2">
//               Pickup Address: <strong>{nimahsShopAddress}</strong>
//             </p>
//             <div className="flex gap-4">
//               <input
//                 type="date"
//                 value={pickupDate}
//                 onChange={(e) => setPickupDate(e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="time"
//                 value={pickupTime}
//                 onChange={(e) => setPickupTime(e.target.value)}
//                 className="border p-2 rounded"
//               />
//             </div>
//           </div>
//         )}

//         {/* Payment Section */}
//         <div className="border p-4 rounded mb-4 bg-gray-50">
//           <h2 className="text-lg font-semibold mb-2">Pay with Bank Transfer</h2>
//           <p className="mb-1">
//             <strong>Bank Name:</strong> GTBank
//           </p>
//           <p className="mb-1">
//             <strong>Account Name:</strong> Nimah Cakes & Cuisine
//           </p>
//           <p className="mb-3">
//             <strong>Account Number:</strong> 0123456789
//           </p>
//           <p className="text-red-600 font-medium">
//             ⚠️ Please make sure you have made payments before clicking on Place
//             Order.
//           </p>
//         </div>

//         {/* Order Summary */}
//         <div className="border p-4 rounded mb-4">
//           <h2 className="text-lg font-semibold mb-2">Your Order</h2>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <div>
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex justify-between mb-2">
//                   <span>
//                     {item.name} (x{item.quantity})
//                   </span>
//                   <span>₦{item.unitTotal.toLocaleString()}</span>
//                 </div>
//               ))}
//               <hr className="my-2" />
//               <div className="flex justify-between font-bold">
//                 <span>Total</span>
//                 <span>₦{grandTotal.toLocaleString()}</span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Actions */}
//         <div className="py-4 mt-7">
//           <button
//             onClick={handlePlaceOrder}
//             disabled={cartItems.length === 0}
//             className="bg-red-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 w-full"
//           >
//             Place Order
//           </button>
//         </div>
//         <div>
//           <Link
//             href="/cart"
//             className="text-red-600 items-center justify-center flex underline"
//           >
//             ← Back to Cart
//           </Link>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
//         &copy; {new Date().getFullYear()} Nimah&apos;s Cakes & Cuisine. All
//         rights reserved.
//       </footer>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // 👈 Add this

export default function CheckoutPage() {
  const { cartItems, grandTotal, clearCart } = useCart();
  const router = useRouter(); // 👈 initialize router

  const [orderType, setOrderType] = useState("delivery");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const nimahsShopAddress = "123 Nimah Street, Lagos, Nigeria";

  // ✅ Updated async function with email sending
  const handlePlaceOrder = async () => {
    const orderDetails = {
      type: orderType,
      address: orderType === "delivery" ? deliveryAddress : nimahsShopAddress,
      date: orderType === "delivery" ? deliveryDate : pickupDate,
      time: orderType === "delivery" ? deliveryTime : pickupTime,
      items: cartItems,
      total: grandTotal,
      paymentMethod: "Bank Transfer",
    };

    try {
      const res = await fetch("/api/sendOrderEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: "", // 👉 later you can collect from form input
          customerEmail: "alagbadamalik@email.com", // 👉 replace with real input later
          orderDetails,
        }),
      });

      if (res.ok) {
        console.log("✅ Order Email Sent:", orderDetails);

        clearCart(); // clear cart after successful send
        router.push("/thank-you"); // redirect after placing order
      } else {
        alert("⚠️ Failed to send order. Try again.");
      }
    } catch (err) {
      console.error("❌ Error sending order:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm p-4 flex">
        <Image
          src="/Nimahhub.jpg"
          alt="Nimah Logo"
          width={60}
          height={50}
          className="object-contain"
        />
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto p-6 py-10">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        {/* Order Type Selection */}
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="delivery"
              checked={orderType === "delivery"}
              onChange={() => setOrderType("delivery")}
            />{" "}
            Delivery
          </label>
          <label>
            <input
              type="radio"
              value="pickup"
              checked={orderType === "pickup"}
              onChange={() => setOrderType("pickup")}
            />{" "}
            Pickup
          </label>
        </div>

        {/* Conditional Forms */}
        {orderType === "delivery" && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Delivery Details</h2>
            <textarea
              placeholder="Enter your delivery address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="w-full border p-2 rounded my-2"
            />
            <div className="flex gap-4">
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="time"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          </div>
        )}

        {orderType === "pickup" && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Pickup Details</h2>
            <p className="mb-2">
              Pickup Address: <strong>{nimahsShopAddress}</strong>
            </p>
            <div className="flex gap-4">
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          </div>
        )}

        {/* Payment Section */}
        <div className="border p-4 rounded mb-4 bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Pay with Bank Transfer</h2>
          <p className="mb-1">
            <strong>Bank Name:</strong> GTBank
          </p>
          <p className="mb-1">
            <strong>Account Name:</strong> Nimah Cakes & Cuisine
          </p>
          <p className="mb-3">
            <strong>Account Number:</strong> 0123456789
          </p>
          <p className="text-red-600 font-medium">
            ⚠️ Please make sure you have made payments before clicking on Place
            Order.
          </p>
        </div>

        {/* Order Summary */}
        <div className="border p-4 rounded mb-4">
          <h2 className="text-lg font-semibold mb-2">Your Order</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>₦{item.unitTotal.toLocaleString()}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₦{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="py-4 mt-7">
          <button
            onClick={handlePlaceOrder}
            disabled={cartItems.length === 0}
            className="bg-red-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 w-full"
          >
            Place Order
          </button>
        </div>
        <div>
          <Link
            href="/cart"
            className="text-red-600 items-center justify-center flex underline"
          >
            ← Back to Cart
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
        &copy; {new Date().getFullYear()} Nimah&apos;s Cakes & Cuisine. All
        rights reserved.
      </footer>
    </div>
  );
}
