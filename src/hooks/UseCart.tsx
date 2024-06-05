"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
// import { saveOrder } from '@/redux/actions'; // Adjust the import based on your file structure

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[];
    cartTotalAmount: number;
    handleAddProductTocart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleCartQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider = ({ children }: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);
    // const dispatch = useDispatch();

    useEffect(() => {
        const cartItems = localStorage.getItem('@ShopCartItems');
        if (cartItems) {
            try {
                const parsedCartItems: CartProductType[] = JSON.parse(cartItems);
                setCartProducts(parsedCartItems);
            } catch (error) {
                console.error("Error parsing cart items from localStorage", error);
            }
        }
    }, []);

    useEffect(() => {
        if (cartProducts.length > 0) {
            const getTotals = () => {
                const { total, qty } = cartProducts.reduce(
                    (acc, item) => {
                        const itemTotal = item.new_price * item.quantity;
                        acc.total += itemTotal;
                        acc.qty += item.quantity;
                        return acc;
                    },
                    {
                        total: 0,
                        qty: 0,
                    }
                );
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            };
            getTotals();
        } else {
            setCartTotalQty(0);
            setCartTotalAmount(0);
        }
    }, [cartProducts]);

    const handleAddProductTocart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            const updatedCart = [...prev, product];
            toast.success(`Product added to cart`);
            localStorage.setItem('@ShopCartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            const filteredProducts = prev.filter((item) => item.id !== product.id);
            toast.success(`Product removed from cart`);
            localStorage.setItem('@ShopCartItems', JSON.stringify(filteredProducts));
            return filteredProducts;
        });
    }, []);

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        if (product.quantity === 99) {
            return toast.error('Ooops! Maximum quantity reached');
        }
        setCartProducts((prev) => {
            const updatedCart = prev.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('@ShopCartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        if (product.quantity <= 1) {
            return toast.error('Ooops! Minimum quantity reached');
        }
        setCartProducts((prev) => {
            const updatedCart = prev.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            );
            localStorage.setItem('@ShopCartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    const handleClearCart = useCallback(() => {
        setCartProducts([]);
        setCartTotalQty(0);
        setCartTotalAmount(0);
        localStorage.removeItem('@ShopCartItems');
    }, []);

    const value = {
        cartTotalQty,
        cartProducts,
        cartTotalAmount,
        handleAddProductTocart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }
    return context;
};
