import Product from "./Product";

const Products = ({ products }) => {



    return (
        <div className=" mt-10 grid grid-cols-3 gap-7.5">
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;