import Product from "./Product";

const Products = ({ products, handleCartProducts }) => {



    return (
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7.5">
            {
                products.map(product => <Product key={product.id} product={product} handleCartProducts={handleCartProducts}></Product>)
            }
        </div>
    );
};

export default Products;