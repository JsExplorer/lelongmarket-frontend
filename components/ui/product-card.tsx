"use client"

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { priceFormatter } from "@/lib/utilis";
import PriceFormatter from "./price-format";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import useExpandModal from "@/hooks/use-expand-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
    data: Product,
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const router = useRouter();
    const expandModal = useExpandModal();
    const cart = useCart();

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onExpand: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        expandModal.onOpen(data);
    }

    // const onExpand = (event) => {event.preventDefault (); expandModal.onOpen(d)}

    const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }

    return ( 
        <div className="group cursor-pointer rounded-xl border p-3 space-y-4 space-x-4 bg-netral-100"
            onClick={handleClick}
        >
            {/* {image and actions} */}
            <div className="aspect-square rounded-xl bg-gray-200 relative">
                <Image 
                    src={data?.images?.[0]?.url}
                    fill
                    alt="image"
                    className="aspect-square object-cover rounded-md"

                />
                <div className="opacity-0 group-hover:opacity-100 absolute transition w-full bottom-2">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                        onClick={onExpand}
                        icon={<Expand size={18} className="text-gray-600"/>}
                        />
                        <IconButton 
                        onClick={addToCart}
                        icon={<ShoppingCart size={18} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{data?.name}</p>
                <p className="text-md text-gray-600">{data?.category?.name}</p>
            </div>
            <div className="flex items-center justify-between font-semibold text-neutral-500">
                {priceFormatter.format(Number(data?.price))}
            </div>
        </div>
     );
}
 
export default ProductCard;