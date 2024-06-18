"use client";
import React from 'react';
import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded focus:outline-none hover:bg-gray-200';

const SetQuantity: React.FC<SetQtyProps> = ({
    cartCounter,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease,
}) => {
    return (
        <div className="flex gap-8 items-center">
            {cartCounter ? null : <div className="font-semibold">QUANTITY</div>}
            <div className="flex gap-4 items-center text-base">
                <button
                    onClick={handleQtyDecrease}
                    className={`${btnStyles} ${cartProduct.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="Decrease Quantity"
                    disabled={cartProduct.quantity === 1}
                >
                    -
                </button>
                <div>{cartProduct.quantity}</div>
                <button
                    onClick={handleQtyIncrease}
                    className={`${btnStyles}`}
                    aria-label="Increase Quantity"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default SetQuantity;
