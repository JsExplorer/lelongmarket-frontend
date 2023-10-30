"use client"

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import { priceFormatter } from "@/lib/utilis";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
    data: Product
}

const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCart();
    const onRemove = () => {
        cart.removeItem(data.id);
    }


    return (
        <li className="flex py-5 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image 
                fill
                src={data.images[0].url}
                alt="image"
                className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between">
                <div className="absolute z-10 right-0 top-0 ">
                    <IconButton className="bg-gray-300" onClick={onRemove} icon={<X size={15}/>}/>
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">
                            {data.name}
                        </p>
                    </div>
                    <div className="flex ">
                        {priceFormatter.format(Number(data?.price))}
                    </div>
                    <div className="mt-2 flex text-gray-500">
                        <p>Size: {data.size.name}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem;