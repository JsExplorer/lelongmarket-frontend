import { Product } from "@/types";
import qs from "query-string";

const url = `${process.env.NEXT_API_URL}/products`;

interface Query {
    categoryId? : string
    sizeId? : string
    isSelling? : boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const formattedurl = qs.stringifyUrl({
        url: url,
        query: {
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isSelling: query.isSelling,
        },
    });
    const res = await fetch(formattedurl);
    return res.json();
}

export default getProducts;