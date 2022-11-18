import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartContext = {
  addItemsQuantity: (
    id: number,
    title: string,
    price: number,
    slug: string,
    photos: {
      title: string,
      url: string,
    },
    quantity: number
  ) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

type CartItem = {
  id: number,
  quantity: number,
  title: string,
  photos: {
    title: string,
    url: string,
  },
  price: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: { children: JSX.Element }) {

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])

  function addItemsQuantity(
    id: number,
    title: string,
    price: number,
    slug: string,
    photos: {
      title: string,
      url: string,
    },
    quantity: number
  ) {
    setCartItems(curItems => {
      if (curItems.find(item => item.id === id) == null) {
        return [...curItems, { id, title, price, slug, photos, quantity }]
      }
      else {
        return curItems.map(item => {
          if (item.id === id) {
            return { ...item, title, price, slug, photos, quantity: item.quantity + quantity }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  return <ShoppingCartContext.Provider value={{ addItemsQuantity, removeFromCart, cartItems, cartQuantity }}>
    {children}
  </ShoppingCartContext.Provider>
}