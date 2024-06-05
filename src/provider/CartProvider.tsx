" use client"

import { CartContextProvider } from "@/hooks/UseCart"; // Assuming this is the correct import path

interface CartProviderProps {
    children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
};

export default CartProvider;
