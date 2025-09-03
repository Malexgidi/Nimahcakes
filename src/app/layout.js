// 'use client';

// import './globals.css';
// import { CartProvider } from '@/context/CartContext';
// // import Navbar from '@/components/Navbar';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>
//           {/* <Navbar /> */}
//           {children}
//         </CartProvider>
//       </body>
//     </html>
//   );
// }

"use client";

import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

