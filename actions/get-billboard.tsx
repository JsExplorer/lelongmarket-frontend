import { Billboard } from "@/types";

const url = `${process.env.NEXT_API_URL}/billboards`;

//fetch individual billboard id only 
const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${url}/${id}`);
    return res.json();
}

export default getBillboard;