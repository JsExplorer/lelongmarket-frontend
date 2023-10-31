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
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const totalPrice = items.reduce((total, item) => { return total + Number(item.price)}, 0)

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed, your order will be processed.");
        }
        if (searchParams.get("canceled")) {
            toast.error("Something went wrong.");
        }
    }, [searchParams, removeAll])

    const onCheckout = async () => {
        const response = await axios.post(`http://localhost:3000/api/6700f4b7-b4c0-4646-a8e9-1a4f18279a30/checkout`, {
            productIds: items.map((item) => item.id)
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