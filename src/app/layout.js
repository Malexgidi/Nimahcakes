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

// "use client";

// import "./globals.css";
// import { CartProvider } from "@/context/CartContext";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>
//           {children}
//         </CartProvider>
//       </body>
//     </html>
//   );
// }

// "use client";

// import "./globals.css";
// import { CartProvider } from "@/context/CartContext";

// // ✅ Add metadata export
// export const metadata = {
//   title: "Nimah Hub ",
//   description:
//     "Delicious handcrafted cakes, sizzling grills, and event bookings — Nimah Hub brings flavor and love to every moment.",
//   icons: {
//     icon: "/Nimahhub.jpg", // or "/logo.png"
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>{children}</CartProvider>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { CartProviderWrapper } from "@/components/CartProviderWrapper";

export const metadata = {
  title: "Nimah Hub",
  description:
    "Delicious handcrafted cakes, sizzling grills, cocktails, and event bookings — Nimah Hub brings flavor, style, and love to every celebration.",
  icons: {
    icon: "/Nimahhub.jpg", // replace with /logo.png if you want your logo as favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProviderWrapper>{children}</CartProviderWrapper>
      </body>
    </html>
  );
}
