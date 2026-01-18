import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { products } from "./data";

export interface CartItem {
  id: string;
  type: 'box' | 'dozen';
  items?: string[]; // For box: list of product IDs
  productId?: string; // For dozen: single product ID
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load initial cart from localStorage
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (newItem: CartItem) => {
    setCart((prev) => {
      // Check for existing item
      const existingItemIndex = prev.findIndex((item) => {
        if (item.type !== newItem.type) return false;

        if (item.type === 'dozen') {
          return item.productId === newItem.productId;
        }

        if (item.type === 'box') {
          // Compare arrays of items for box equality
          const items1 = item.items || [];
          const items2 = newItem.items || [];
          if (items1.length !== items2.length) return false;
          
          // Simple array comparison (assuming order matters for visual representation, 
          // but if order doesn't matter we should sort. For box builder, order usually matches selection order)
          // Let's sort to be safe for "content" equality
          const sorted1 = [...items1].sort();
          const sorted2 = [...items2].sort();
          return sorted1.every((val, index) => val === sorted2[index]);
        }
        
        return false;
      });

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const newCart = [...prev];
        const existingItem = newCart[existingItemIndex];
        newCart[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + newItem.quantity
        };
        return newCart;
      }

      // Add new item
      return [...prev, newItem];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
