"use client";

import useExpandModal from "@/hooks/use-expand-modal";
import Modal from "./ui/modal";
import ProductPics from "./product-info";
import ProductInfo from "./product-info/product-info";

const ExpandModal = () => {
    const expandModal = useExpandModal();
    const product = useExpandModal((state) => state.data)

    if(!product){
        return null;
    }

    return (
        <Modal open={expandModal.isOpen} onClose={expandModal.onClose}>
            <div className="grid items-start grid-cols-1 sm:grid-cols-12 lg:gap-x-8 gap-x-6 gap-y-8">
                <div className="sm:col-span-4 lg:col-span-6">
                    <ProductPics images={product?.images}/>
                </div>
                <div className="sm:col-span-6 lg:col-span-4">
                    <ProductInfo data={product}/>
                </div>
            </div>
        </Modal>
    )
}

export default ExpandModal;