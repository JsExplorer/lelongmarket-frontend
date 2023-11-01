"use client";

import { useEffect, useState } from "react";

import { priceFormatter } from "@/lib/utilis";

interface PriceFormatterProps {
    value?: string | number
}

const PriceFormatter: React.FC<PriceFormatterProps> = ({
    value = 0
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
      }, []);
    
      if (!isMounted) {
        return null;
      }
      
    return ( 
        <div className="font-semibold">
         {priceFormatter.format(Number(value))}
        </div>
     );
}
 
export default PriceFormatter;