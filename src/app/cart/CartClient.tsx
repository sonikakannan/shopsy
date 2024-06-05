'use client'
import { loadStripe } from "@stripe/stripe-js";
import React from 'react'; // Removed unnecessary import of useState
import { useCart } from '@/hooks/UseCart';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import ItemContent from './ItemContent';

const CartClient: React.FC = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } =useCart();
  
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartProducts,
        email: session?.user?.email,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id });
      handleClearCart(); // Clearing the cart after successful checkout
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };
      
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your Cart is Empty</div>
        <div>
          <Link href="/" className="text-slate-500 flex items-center gap-1 mt-1">
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-slate-900">Shopping Cart</h1>
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 text-base font-medium">PRODUCT</div>
        <div className="justify-self-center text-base font-medium">PRICE</div>
        <div className="justify-self-center text-base font-medium">QUANTITY</div>
        <div className="justify-self-end text-base font-medium">TOTAL</div>
      </div>
      <div>
        {cartProducts.map((item) => (
          <ItemContent key={item.id} item={item} />
        ))}
      </div>
      <div className="border-t-[1.5px] border-slate-400 py-4 flex justify-between gap-4">
        <div className="w-[150px]">
          <button onClick={handleClearCart} className="border-[1.7px] border-slate-600 py-2 px-3 rounded-md">
            Clear Cart
          </button>
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-bold">
            <span>Subtotal</span>
            <span>{cartTotalAmount}</span>
          </div>
          <p className="text-slate-800 text-base mt-2">Taxes and shipping calculated at checkout</p>
          <button
            onClick={handleCheckout}
            className="bg-slate-800 w-full py-2 rounded-md text-white text-base font-medium"
          >
            Checkout
          </button>
          <Link href="/" className="text-slate-700 text-base flex items-center gap-1 mt-1">
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
