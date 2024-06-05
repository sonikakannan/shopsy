'use client';

import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import Image from "next/image";
import SetQuantity from "@/components/SetQuantity";
import { useCart } from "@/hooks/UseCart";

interface ItemContentProps {
    item: CartProductType,
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease } = useCart();
    return (
        <div className='grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-400 py-4 items-center'>
            <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[100px] aspect-square">
                        <Image src={item.images} alt={item.name} className="object-cover" fill />
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link href={`/`}>{item.name}</Link>
                    <div className="w-[10px]">
                        <button className="text-slate-500 underline" onClick={() => handleRemoveProductFromCart(item)}>Remove</button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">
                <p><del>${item.old_price}</del> ${item.new_price}</p>
            </div>
            <div className="justify-self-center">
                <SetQuantity cartCounter={true} cartProduct={item} handleQtyIncrease={() => handleCartQtyIncrease(item)} handleQtyDecrease={() => handleCartQtyDecrease(item)} />
            </div>
            <div className="justify-self-end font-semibold">{item.new_price * item.quantity}</div>
        </div>
    )
}

export default ItemContent;
