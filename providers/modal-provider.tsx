"use client"

import ExpandModal from "@/components/expand-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return ( 
        <>
            <ExpandModal />
        </>
     );
}
 
export default ModalProvider;