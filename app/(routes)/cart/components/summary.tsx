"use client"

import axios from "axios"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Button from "@/components/ui/button"
import { toast } from "react-hot-toast"
import { priceFormatter } from "@/lib/utilis"
import useCart from "@/hooks/use-cart"

const CartSummary = () => {
    const searchParams = useSearchParams();
    const cartItems = useCart((state) => state.items);
    const removeAllItems = useCart((state) => state.removeAll);

    const totalPrice = cartItems.reduce((total, item) => { return total + Number(item.price)}, 0)

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed, your order will be processed.");
        }
        if (searchParams.get("cancelled")) {
            toast.error("Something went wrong.");
        }
    }, [searchParams, removeAllItems])

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_API_URL}/checkout`, {
            productIds: cartItems.map((item) => item.id)
        });
        window.location = response.data.url;
    }

    return ( 
        <div className="rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-serif text-gray-800">Order Summary</h2>
            <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-t pt-3">
                    <div className="font-serif text-gray-800">
                        Order total
                    </div>
                    {priceFormatter.format(Number(totalPrice))}
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="mt-8" onClick={onCheckout}>
                    Checkout
                </Button>
            </div>
        </div>
     );
}
 
export default CartSummary;