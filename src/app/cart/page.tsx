import CartClient from "./CartClient";

const Cart = () => {
    return (
        <div className="pt-8" role="main" aria-labelledby="cart-heading">
            <div>
                <h1 id="cart-heading" className="sr-only">Shopping Cart</h1>
                <CartClient />
            </div>
        </div>
    );
}

export default Cart;
