import { Suspense, use, useState } from "react";
import Products from "./Products/Products";
import { productsPromise } from "../../fetchData";
import CartContainer from "./cart/CartContainer";
import Loanding from "../loading/Loanding";

const PremiumDigitalTools = ({ handleCartProducts, catrProducts, handleRemove, handleClearCart, isCart, setIsCart }) => {

    const products = use(productsPromise);



    return (

        <div className="container mx-auto py-30">
            <div
                className="text-center flex flex-col gap-4 items-center"
            >
                <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                <div className=" p-1 rounded-full border border-[#f6f6f6] w-fit">
                    <button
                        onClick={() => setIsCart(false)}
                        className={`btn rounded-full ${!isCart ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold' : 'btn-ghost text-[#25065D] font-medium'}`}>Products</button>
                    <button
                        onClick={() => setIsCart(true)}
                        className={`btn rounded-full ${isCart ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold' : 'btn-ghost text-[#25065D] font-medium'}`}>Cart({catrProducts.length})</button>
                </div>
            </div>
            <div className="mt-10">
                {
                    !isCart
                        ? <Suspense fallback={<Loanding></Loanding>}>
                            <Products
                                products={products}
                                handleCartProducts={handleCartProducts}>
                            </Products>
                        </Suspense>
                        : <CartContainer
                            catrProducts={catrProducts}
                            handleRemove={handleRemove}
                            handleClearCart={handleClearCart}
                        >
                        </CartContainer>
                }

            </div>
        </div >


    );
};

export default PremiumDigitalTools;