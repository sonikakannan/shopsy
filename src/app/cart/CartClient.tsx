'use client';
import React from 'react';
import { useCart } from '@/hooks/UseCart';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import ItemContent from './ItemContent';
import { CartProductType } from "../product/[productId]/ProductDetails";
import { loadStripe } from '@stripe/stripe-js';

interface ItemContentProps {
  item: CartProductType,
}



const CartClient: React.FC<ItemContentProps> = ({item}) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center" role="main">
        <h1 className="text-2xl" tabIndex={0}>Your Cart is Empty</h1>
        <div>
          <Link href="/" className="text-slate-500 flex items-center gap-1 mt-1" aria-label="Start Shopping">
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div role="main">
      <h1 className="text-center text-3xl font-bold text-slate-900" tabIndex={0}>Shopping Cart</h1>
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
          <button 
            onClick={handleClearCart} 
            className="border-[1.7px] border-slate-600 py-2 px-3 rounded-md" 
            aria-label="Clear Cart"
          >
            Clear Cart
          </button>
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-bold">
            <span>Subtotal</span>
            <span>${cartTotalAmount}</span>
          </div>
          <p className="text-slate-800 text-base mt-2">Taxes and shipping calculated at checkout</p>

          <button
            className="bg-slate-800 w-full py-2 rounded-md text-white text-base font-medium"
            aria-label="Proceed to Checkout"
          >
            Checkout
          </button>
          
          <Link href="/" className="text-slate-700 text-base flex items-center gap-1 mt-1" aria-label="Continue Shopping">
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
