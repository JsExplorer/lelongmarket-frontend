import { priceFormatter } from "@/lib/utilis";

interface PriceProps {
    value?: string | number
}

const PriceFormatter: React.FC<PriceProps> = ({
    value
}) => {
    return ( 
        <div className="font-semibold">
         {priceFormatter.format(Number(value))}
        </div>
     );
}
 
export default PriceFormatter;