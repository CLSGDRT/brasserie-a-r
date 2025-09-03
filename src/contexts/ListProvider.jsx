import { createContext, useState, useContext } from "react";

export const ListContext = createContext ();

export const useList = () => useContext(ListContext);

export const ListProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (drink) => {
        setCart((prev) => [...prev, drink]);
    };

    const removeFromCart = (index) => {
        setCart((prev) => prev.filter((_, i) => i != index));
    };

    const clearCart = () => {
        setCart([]);
    }

    return (
        <ListContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </ListContext.Provider>
    )
}