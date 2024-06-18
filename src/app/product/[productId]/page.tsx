"use client"
import ProductDetails from "./ProductDetails";
import { new_products } from "@/utils/newCollections";

interface IPrams {
    productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
    const selectedProduct = new_products.find(p => p.id.toString() === params.productId);

    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    return (

        <div className="p-3">
            <ProductDetails new_products={selectedProduct} />
        </div>

    )
}

export default Product