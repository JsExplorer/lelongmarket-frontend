"use client"

import { ShoppingCart } from "lucide-react";
import Button from "./ui/custom-button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ui/mode-toggle";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    }, []);
    
    const router = useRouter();
    const cart = useCart();

    if (!isMounted){
        return null;
    }

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full px-4 py-2"
                    onClick={() => router.push("/cart")}
                    >
                <ShoppingCart size={20} color="white"/>
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
            <ModeToggle />
        </div>
     );
}
 
export default NavbarActions;