

// "use client";
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   FaShoppingCart,
//   FaUser,
//   FaSearch,
//   FaBars,
// } from 'react-icons/fa';
// import { useEffect, useRef, useState } from 'react';

// export default function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDesktopSearchOpen, setDesktopSearchOpen] = useState(false);
//   const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [cartCount] = useState(0);
//   const [isLoggedIn] = useState(true);
//   const desktopSearchRef = useRef(null);
//   const mobileSearchRef = useRef(null);

//   // Close desktop search when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         desktopSearchRef.current &&
//         !desktopSearchRef.current.contains(event.target)
//       ) {
//         setDesktopSearchOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Close mobile search when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         mobileSearchRef.current &&
//         !mobileSearchRef.current.contains(event.target)
//       ) {
//         setMobileSearchOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className="top-0 left-0 w-full border-b border-gray-300 md:border-none  bg-white shadow z-50 px-6 py-1 flex justify-between items-center">

//       {/* Logo */}
//       <div>
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/Nimahhub.jpg"
//             alt="Nimah Logo"
//             width={60}
//             height={30}
//             className="object-contain"
//           />
//         </Link>
//       </div>

//       {/* Desktop Links */}
//       <div className="space-x-8 hidden md:flex items-center ml-16">
//         <a href="#cakes" className="hover:text-red-500">Cakes</a>
//         <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a>
//         <a href="#booking" className="hover:text-red-500">Event Booking</a>
//         <a href="#Footer" className="hover:text-red-500">Contact</a>

//         {/* Desktop Search */}
//         <div className="flex items-center space-x-4">
//           <div className="relative" ref={desktopSearchRef}>
//             <FaSearch
//               className="cursor-pointer hover:text-pink-500"
//               onClick={() => setDesktopSearchOpen(!isDesktopSearchOpen)}
//             />
//             {isDesktopSearchOpen && (
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="absolute right-full top-1/2 transform -translate-y-1/2 border-2 px-3 py-1 mr-1 h-12 rounded-md w-60 shadow placeholder:text-gray-500"
//                 style={{ backgroundColor: "#f9f9f9" }}
//               />
//             )}
//           </div>
//         </div>

//         <FaUser className="cursor-pointer hover:text-pink-500" title="Login" />

//         <div className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-pink-500 w-8 " />
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//             {cartCount}
//           </span>
//         </div>
//       </div>

//       {/* Mobile Icons */}
//       <div className="md:hidden flex items-center space-x-4">
//         <div className="relative" ref={mobileSearchRef}>
//           <FaSearch
//             className="hover:text-pink-500 cursor-pointer"
//             onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}
//           />
//           {isMobileSearchOpen && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="absolute right-full top-1/2 transform -translate-y-1/2 border-2 px-3 py-1 mr-1 h-12 rounded-md w-60 shadow placeholder:text-gray-500"
//               style={{ backgroundColor: "#f9f9f9" }}
//             />
//           )}
//         </div>
//         <FaUser className="hover:text-pink-500" title="Login" />
//         <div className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-pink-500 w-8  " />
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//             {cartCount}
//           </span>
//         </div>
//         <FaBars
//           className="text-xl cursor-pointer hover:text-pink-500"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         />
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//   <div className="fixed top-[60px] left-0 w-full bg-white z-50 shadow-md px-6 py-4 flex flex-col gap-4 md:hidden">
//     <a href="#cakes" className="hover:text-pink-500">Cakes</a>
//     <a href="#smallchops" className="hover:text-pink-500">Chops & Grills</a>
//     <a href="#booking" className="hover:text-pink-500">Event Booking</a>
//     <a href="#Footer" className="hover:text-pink-500">Contact</a>
//   </div>
//       )}
//     </nav>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   FaShoppingCart,
//   FaUser,
//   FaSearch,
//   FaBars,
// } from 'react-icons/fa';

// export default function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDesktopSearchOpen, setDesktopSearchOpen] = useState(false);
//   const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [cartCount] = useState(0);
//   const desktopSearchRef = useRef(null);
//   const mobileSearchRef = useRef(null);

//   // Handle outside click to close desktop search
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         desktopSearchRef.current &&
//         !desktopSearchRef.current.contains(event.target)
//       ) {
//         setDesktopSearchOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Handle outside click to close mobile search
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileSearchRef.current &&
//         !mobileSearchRef.current.contains(event.target)
//       ) {
//         setMobileSearchOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="top-0 left-0 w-full border-b border-gray-300 md:border-none  bg-white shadow z-50 px-6 py-1 flex justify-between items-center">
      
//       {/* Logo */}
//       <Link href="/" className="flex items-center">
//         <Image
//           src="/Nimahhub.jpg"
//           alt="Nimah Logo"
//           width={60}
//           height={30}
//           className="object-contain"
//         />
//       </Link>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-8 ml-10">
//         <a href="#cakes" className="hover:text-pink-500">Cakes</a>
//         <a href="#smallchops" className="hover:text-pink-500">Chops & Grills</a>
//         <a href="#booking" className="hover:text-pink-500">Event Booking</a>
//         <a href="#Footer" className="hover:text-pink-500">Contact</a>

//         {/* Desktop Search */}
//         <div ref={desktopSearchRef} className="relative">
//           <FaSearch
//             className="cursor-pointer hover:text-pink-500"
//             onClick={() => setDesktopSearchOpen(!isDesktopSearchOpen)}
//             aria-label="Toggle Search"
//           />
//           {isDesktopSearchOpen && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-60 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
//             />
//           )}
//         </div>

//         <FaUser className="cursor-pointer hover:text-pink-500" title="Login" />

//         {/* Cart Icon */}
//         <div className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-pink-500 w-6 h-6" />
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//             {cartCount}
//           </span>
//         </div>
//       </div>

//       {/* Mobile Icons */}
//       <div className="md:hidden flex items-center space-x-4">
//         <div ref={mobileSearchRef} className="relative">
//           <FaSearch
//             className="cursor-pointer hover:text-pink-500"
//             onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}
//           />
//           {isMobileSearchOpen && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-56 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
//             />
//           )}
//         </div>
//         <FaUser className="cursor-pointer hover:text-pink-500" title="Login" />
//         <div className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-pink-500 w-6 h-6" />
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//             {cartCount}
//           </span>
//         </div>
//         <FaBars
//           className="text-xl cursor-pointer hover:text-pink-500"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         />
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed top-[64px] left-0 w-full bg-white z-40 shadow-md px-6 py-4 flex flex-col gap-4 md:hidden">
//           <a href="#cakes" className="hover:text-pink-500">Cakes</a>
//           <a href="#smallchops" className="hover:text-pink-500">Chops & Grills</a>
//           <a href="#booking" className="hover:text-pink-500">Event Booking</a>
//           <a href="#Footer" className="hover:text-pink-500">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// }
// "use client";

// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   FaShoppingCart,
//   FaUser,
//   FaSearch, 
//   FaBars,
// } from 'react-icons/fa';
// import { useContext } from 'react';
// import { CartContext } from '@/context/CartContext';




// export default function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDesktopSearchOpen, setDesktopSearchOpen] = useState(false);
//   const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const desktopSearchRef = useRef(null);
//   const mobileSearchRef = useRef(null);
//   const { cartItems } = useContext(CartContext); // ← useContext hook
//   const cartCount = cartItems.length;

//   // Handle outside click to close desktop search
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         desktopSearchRef.current &&
//         !desktopSearchRef.current.contains(event.target)
//       ) {
//         setDesktopSearchOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Handle outside click to close mobile search
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileSearchRef.current &&
//         !mobileSearchRef.current.contains(event.target)
//       ) {
//         setMobileSearchOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="top-0 left-0 w-full border-b border-gray-300 md:border-none bg-white shadow z-50 px-6 py-1 flex justify-between items-center">

//       {/* Logo */}
//       <Link href="/" className="flex items-center">
//         <Image
//           src="/Nimahhub.jpg"
//           alt="Nimah Logo"
//           width={60}
//           height={30}
//           className="object-contain"
//         />
//       </Link>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-8 ml-10">
//         <a href="#cakes" className="hover:text-red-500">Cakes</a>
//         <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a>
//         <a href="#booking" className="hover:text-red-500">Event Booking</a>
//         <a href="#Footer" className="hover:text-red-500">Contact</a>

//         {/* Desktop Search */}
//         <div ref={desktopSearchRef} className="relative">
//           <FaSearch
//             className="cursor-pointer hover:text-red-500"
//             onClick={() => setDesktopSearchOpen(!isDesktopSearchOpen)}
//             aria-label="Toggle Search"
//           />
//           {isDesktopSearchOpen && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-60 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
//             />
//           )}
//         </div>

//         <FaUser className="cursor-pointer hover:text-red-500" title="Login" />

//         {/* Cart Icon */}
//         <Link href="/cart" className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-red-500 w-6 h-6" />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </div>

//       {/* Mobile Icons */}
//       <div className="md:hidden flex items-center space-x-4">
//         <div ref={mobileSearchRef} className="relative">
//           <FaSearch
//             className="cursor-pointer hover:text-red-500"
//             onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}
//           />
//           {isMobileSearchOpen && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-56 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
//             />
//           )}
//         </div>
//         <FaUser className="cursor-pointer hover:text-red-500" title="Login" />
//         <Link href="/cart" className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-red-500 w-6 h-6" />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//         <FaBars
//           className="text-xl cursor-pointer hover:text-red-500"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         />
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed top-[58px] left-0 w-full bg-white z-40 shadow-md px-6 py-4 flex flex-col gap-4 md:hidden">
//           <a href="#cakes" className="hover:text-red-500">Cakes</a>
//           <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a>
//           <a href="#booking" className="hover:text-red-500">Event Booking</a>
//           <a href="#Footer" className="hover:text-red-500">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   FaShoppingCart,
//   FaUser,
//   FaSearch, 
//   FaBars,
// } from 'react-icons/fa';
// import { useCart } from '@/context/CartContext'; // ✅ use custom hook

// export  default function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDesktopSearchOpen, setDesktopSearchOpen] = useState(false);
//   const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const desktopSearchRef = useRef(null);
//   const mobileSearchRef = useRef(null);

//   // ✅ use the custom hook
//   const { cartItems } = useCart();  
//   const cartCount = cartItems?.length || 0; // safe fallback

//   // Handle outside click to close desktop search
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         desktopSearchRef.current &&
//         !desktopSearchRef.current.contains(event.target)
//       ) {
//         setDesktopSearchOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Handle outside click to close mobile search
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileSearchRef.current &&
//         !mobileSearchRef.current.contains(event.target)
//       ) {
//         setMobileSearchOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="top-0 left-0 w-full border-b border-gray-300 md:border-none bg-white shadow z-50 px-6 py-1 flex justify-between items-center">
//       {/* Logo */}
//       <Link href="/" className="flex items-center">
//         <Image
//           src="/Nimahhub.jpg"
//           alt="Nimah Logo"
//           width={60}
//           height={30}
//           className="object-contain"
//         />
//       </Link>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-8 ml-10">
//         <a href="#cakes" className="hover:text-red-500">Cakes</a>
//         <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a>
//         <a href="#booking" className="hover:text-red-500">Event Booking</a>
//         <a href="#Footer" className="hover:text-red-500">Contact</a>

//         {/* Desktop Search */}
//         <div ref={desktopSearchRef} className="relative">
//           <FaSearch
//             className="cursor-pointer hover:text-red-500"
//             onClick={() => setDesktopSearchOpen(!isDesktopSearchOpen)}
//             aria-label="Toggle Search"
//           />
//           {isDesktopSearchOpen && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-60 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
//             />
//           )}
//         </div>

//         <FaUser className="cursor-pointer hover:text-red-500" title="Login" />

//         {/* Cart Icon */}
//         <Link href="/cart" className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-red-500 w-6 h-6" />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </div>

//       {/* Mobile Icons */}
//       <div className="md:hidden flex items-center space-x-4">
//         <div ref={mobileSearchRef} className="relative">
//           <FaSearch
//             className="cursor-pointer hover:text-red-500"
//             onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}
//           />
//           {isMobileSearchOpen && (
//             <input
//               type="text"
//               placeholder="Search..."
//               className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-56 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
//             />
//           )}
//         </div>
//         <FaUser className="cursor-pointer hover:text-red-500" title="Login" />
//         <Link href="/cart" className="relative cursor-pointer">
//           <FaShoppingCart className="hover:text-red-500 w-6 h-6" />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//         <FaBars
//           className="text-xl cursor-pointer hover:text-red-500"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         />
//       </div>

//       {/* Mobile Navigation Menu */}
//       {/* {isMobileMenuOpen && (
//         <div className="fixed top-[58px] left-0 w-full bg-white z-40 shadow-md px-6 py-4 flex flex-col gap-4 md:hidden">
//           <a href="#cakes" className="hover:text-red-500">Cakes</a>
//           <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a>
//           <a href="#booking" className="hover:text-red-500">Event Booking</a>
//           <a href="#Footer" className="hover:text-red-500">Contact</a>
//         </div>
//       )} */}
     
//      {/* Mobile Navigation Menu */}
// {/* {isMobileMenuOpen && (
//   <div
//     className="fixed inset-0 bg-black/40  z-40 md:hidden"
//     onClick={() => setMobileMenuOpen(false)} // close when clicking overlay
//   >
//     <div
//       className="absolute top-[58px] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4"
//       onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside menu
//     >
//       <a href="#cakes" className="hover:text-red-500">Cakes</a>
//       <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a>
//       <a href="#booking" className="hover:text-red-500">Event Booking</a>
//       <a href="#Footer" className="hover:text-red-500">Contact</a>
//     </div>
//   </div>
// )} */}

// {isMobileMenuOpen && (
//   <div
//     className="fixed inset-0 bg-black/40 z-40 md:hidden"
//     onClick={() => setMobileMenuOpen(false)} // close on backdrop click
//   >
//     <div
//       className="absolute top-[58px] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4"
//       onClick={(e) => e.stopPropagation()} // prevent backdrop closing on menu clicks
//     >
//       <a
//         href="#ProductFilter"
//         className="hover:text-red-500"
//         onClick={() => setMobileMenuOpen(false)}
//       >
//         Cakes
//       </a>
//       <a
//         href="#smallchops"
//         className="hover:text-red-500"
//         onClick={() => setMobileMenuOpen(false)}
//       >
//         Chops & Grills
//       </a>
//       <a
//         href="#booking"
//         className="hover:text-red-500"
//         onClick={() => setMobileMenuOpen(false)}
//       >
//         Event Booking
//       </a>
//       <a
//         href="#Footer"
//         className="hover:text-red-500"
//         onClick={() => setMobileMenuOpen(false)}
//       >
//         Contact
//       </a>
//     </div>
//   </div>
// )}

    
//     </nav>
//   );
// }


"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // ✅ router navigation
import {
  FaShoppingCart,
  // FaUser,
  FaSearch, 
  FaBars,
} from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
// import your product data
import { products } from "@/data/products"; // make sure you have this file

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const router = useRouter();

  const { cartItems } = useCart();  
  const cartCount = cartItems?.length || 0;

  // ✅ handle search
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      const product = products.find((p) =>
        p.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (product) {
        router.push(`/product/${product.id}`);
      } else {
        alert("Product not found!");
      }
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(event.target)
      ) {
        setDesktopSearchOpen(false);
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target)
      ) {
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="top-0 left-0 w-full border-b border-gray-300 md:border-none bg-white shadow z-50 px-6 py-1 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/Nimahhub.jpg"
          alt="Nimah Logo"
          width={60}
          height={30}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 ml-10">
        {/* <a href="#cakes" className="hover:text-red-500">Cakes</a>
        <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a> */}
        <a href="#booking" className="hover:text-red-500">Event Booking</a>
        <a href="#Footer" className="hover:text-red-500">Contact</a>

        {/* Desktop Search */}
        <div ref={desktopSearchRef} className="relative">
          <FaSearch
            className="cursor-pointer hover:text-red-500"
            onClick={() => setDesktopSearchOpen(!isDesktopSearchOpen)}
            aria-label="Toggle Search"
          />
          {isDesktopSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-60 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
            />
          )}
        </div>

        {/* <FaUser className="cursor-pointer hover:text-red-500" title="Login" /> */}

        {/* Cart Icon */}
        <Link href="/cart" className="relative cursor-pointer">
          <FaShoppingCart className="hover:text-red-500 w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Icons */}
      <div className="md:hidden flex items-center space-x-4">
        <div ref={mobileSearchRef} className="relative">
          <FaSearch
            className="cursor-pointer hover:text-red-500"
            onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}
          />
          {isMobileSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="absolute right-full top-1/2 transform -translate-y-1/2 border px-3 py-1 h-10 w-56 rounded shadow-md bg-gray-50 placeholder:text-gray-500"
            />
          )}
        </div>
        {/* <FaUser className="cursor-pointer hover:text-red-500" title="Login" /> */}
        <Link href="/cart" className="relative cursor-pointer">
          <FaShoppingCart className="hover:text-red-500 w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        <FaBars
          className="text-xl cursor-pointer hover:text-red-500"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-[58px] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <a href="#cakes" className="hover:text-red-500">Cakes</a>
            <a href="#smallchops" className="hover:text-red-500">Chops & Grills</a> */}
            <a href="#booking" className="hover:text-red-500">Event Booking</a>
            <a href="#Footer" className="hover:text-red-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
