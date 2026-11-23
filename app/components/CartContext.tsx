"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "./products";

type CartItem = Product & { qty: number };
type CartCtx = {
  items: CartItem[];
  add: (p: Product) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (p: Product) =>
    setItems((prev) =>
      prev.find((i) => i.id === p.id)
        ? prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...p, qty: 1 }]
    );

  const inc = (id: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const dec = (id: string) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
    );

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const total = items.reduce((s, i) => s + i.basePrice * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, inc, dec, remove, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
