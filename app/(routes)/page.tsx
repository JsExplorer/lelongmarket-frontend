import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("ae45c5ec-73e7-4b74-a9ad-a71c4cabfba6");
    const products = await getProducts({ isSelling: true });

    return ( 
        <Container>
            <div className="space-y-10 pb-5">
                <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    {/* ensure products are props into items[] */}
                    <ProductList title="Products on sale" items={products}/>
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage