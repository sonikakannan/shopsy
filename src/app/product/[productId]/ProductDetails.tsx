'use client';

import { useCallback, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import SetQuantity from '@/components/SetQuantity';
import { useCart } from '@/hooks/UseCart';
import { MdCheckCircle } from 'react-icons/md';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
    new_products: {
        id: number;
        name: string;
        image: StaticImageData;
        old_price: number;
        new_price: number;
        breif_name: string;
        description: string;
    };
}

export type CartProductType = {
    id: number;
    name: string;
    images: StaticImageData;
    old_price: number;
    new_price: number;
    quantity: number;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ new_products }) => {
    const { cartTotalQty, cartProducts, handleAddProductTocart } = useCart();
    
    const [isProductInCart, setIsProductInCart] = useState(false);

    const [CartProduct, setCartProduct] = useState<CartProductType>({
        id: new_products.id,
        name: new_products.name,
        images: new_products.image,
        old_price: new_products.old_price,
        new_price: new_products.new_price,
        quantity: 1,
    });

    const router = useRouter();

    useEffect(() => {
        setIsProductInCart(false);

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === new_products.id);

            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts, new_products.id]);

    const handleQtyIncrease = useCallback(() => {
        setCartProduct((prevProduct) => {
            if (prevProduct.quantity === 99) {
                return prevProduct;
            }
            return { ...prevProduct, quantity: prevProduct.quantity + 1 };
        });
    }, []);

    const handleQtyDecrease = useCallback(() => {
        setCartProduct((prevProduct) => {
            if (prevProduct.quantity === 1) {
                return prevProduct;
            }
            return { ...prevProduct, quantity: prevProduct.quantity - 1 };
        });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 place-items-center container mx-auto pt-5">
            <div>
                <Image src={new_products.image} alt={new_products.name} className="rounded-md w-80 hover:scale-105 border border-slate-500" />
            </div>
            <div className="px-7">
                <h2 className="text-4xl font-medium mb-7 text-gray-800">{new_products.breif_name}</h2>
                <p className="text-justify text-gray-700 mb-9">{new_products.description}</p>
                {isProductInCart ? (
                    <>
                        <p className="mb-2 text-slate-500 flex items-center gap-1">
                            <MdCheckCircle className="text-teal-400" size={20} />
                            <span>Product added to cart</span>
                        </p>
                        <div>
                            <button className="bg-teal-500 text-white py-2 px-4 rounded" onClick={() => router.push('/cart')}>View Cart</button>
                        </div>
                    </>
                ) : (
                    <>
                        <SetQuantity cartProduct={CartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} />
                        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handleAddProductTocart(CartProduct)}>Add to cart</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductDetails;
