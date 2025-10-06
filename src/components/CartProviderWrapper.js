"use client";

import { CartProvider } from "@/context/CartContext";

export function CartProviderWrapper({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
