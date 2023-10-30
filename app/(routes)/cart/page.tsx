"use client"

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import CartSummary from "./components/summary";

const CartPage = () => {
    // test on hydration error
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const cart = useCart();
    
    if(!isMounted) {
        return null;
    }

    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="font-bold text-3xl" > Shopping Cart </h1>
                    <div className="mt-11 lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7 border-t">
                            {cart.items.length === 0 && <p className="text-neutral-500">No item in cart.</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem 
                                    key = {item.id}
                                    data = {item}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <CartSummary />
                </div>
            </Container>
        </div>
     );
}
 
export default CartPage;