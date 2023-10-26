import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductPics from "@/components/product-info";
import ProductInfo from "@/components/product-info/product-info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await getProduct(params.productId);
    const relatedProducts = await getProducts({
        categoryId: product?.category?.id
    })

    return ( 
        <div>
            <Container>
                <div className="py-10 px-5 sm:px 6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-sart lg:gap-x-8">
                        <div>
                            <ProductPics images={product.images}/>
                        </div>
                        <div className="mt-10 px-4 sm:mt-14 sm:px-0 lg:mt-1">
                            <ProductInfo data={product}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title="Related products" items={relatedProducts}/>
                </div>
            </Container>
        </div>
     );
}
 
export default ProductPage;