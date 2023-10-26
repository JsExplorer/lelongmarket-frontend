import getCategory from "@/actions/get-category"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"
import Filter from "./components/filter"
import NoResult from "@/components/ui/no-result"
import ProductCard from "@/components/ui/product-card"

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> =  async ({
    params, searchParams
}) => {
    //filtering fetch
    const products  = await getProducts({
        categoryId: params.categoryId,
        sizeId: searchParams.sizeId,
    })

    const category = await getCategory(params.categoryId);
    const sizes = await getSizes();

    return ( 
        <div>
           <Container>
            <Billboard data={category.billboard}/>
            <div className="px-4 sm:px-6 lg:px-8 pb-22">
                <div className="grid lg:grid-cols-5 lg:gap-x-8">
                    <div className="hidden lg:block">
                        <Filter 
                        valueKey="sizeId"
                        name="Sizes"
                        data={sizes}
                        />
                    </div>
                    <div className="mt-6 lg:col-span-4 lg:mt-0"> 
                        {products.length === 0 && <NoResult />}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {products.map((product) => (
                                <ProductCard 
                                key={product.id}
                                data={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
           </Container>
        </div>
     );
}
 
export default CategoryPage;