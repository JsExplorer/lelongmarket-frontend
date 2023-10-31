"use client"

import { Product } from "@/types";
import { priceFormatter } from "@/lib/utilis";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface ProductInfoProps {
    data: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({
    data
}) => {
    const cart = useCart();

    const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }


    return ( 
        <div>
            <h1 className="text-4xl font-semibold text-gray-800">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl">
                ${priceFormatter.format(Number(data?.price))}
                </p>
            </div>
            <Separator className="my-4"/>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-1xl"> Size: </h3>
                <p>{data?.size?.value}</p>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-1xl"> Colour: </h3>
                <p>Colour</p>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-1" onClick={addToCart}>
                    Add to Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
     );
}
 
export default ProductInfo;