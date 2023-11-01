import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("70bb5c8c-4091-4581-b1db-84780e2c5b1f");
    const products = await getProducts({ isFeatured: true });

    return ( 
        <Container>
            <div className="space-y-8 pb-5">
                <div className="text-zinc-800">
                    <Billboard data={billboard}/>
                </div>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    {/* ensure products are props into items[] */}
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage