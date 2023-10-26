"use client"

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { priceFormatter } from "@/lib/utilis";
import PriceFormatter from "./price-format";
import { useRouter } from "next/navigation";

interface ProductCard {
    data: Product,
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
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
                        onClick={() => {}}
                        icon={<Expand size={18} className="text-gray-600"/>}
                        />
                        <IconButton 
                        onClick={() => {}}
                        icon={<ShoppingCart size={18} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{data?.name}</p>
                <p className="text-md text-gray-600">{data?.category?.name}</p>
            </div>
            <div className="flex items-center justify-between font-semibold text-neutral-800">
                ${priceFormatter.format(Number(data?.price))}
            </div>
        </div>
     );
}
 
export default ProductCard;