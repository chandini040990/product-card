
import ProductCard from "./ProductCard";

function ProductList({ products }) {

    return (
        <>
            <div className="product-cards">
                {products.map((product) => (
                    <ProductCard
                        url={product.url}
                        alt={product.alt}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />

                ))
                }
            </div>
        </>
    );
}

export default ProductList