import CartCard from "./CartCard";

const CartContainer = ({ catrProducts, handleRemove, handleClearCart }) => {



    return (
        <div className="p-10 rounded-2xl border border-[#f2f2f2] flex flex-col gap-6">
            {
                catrProducts.length === 0
                    ? <div className="text-[#adb5bb] font-medium border p-10 text-3xl rounded-2xl text-center">Your Cart is Empty</div>
                    : <>
                        <h3 className="text-[#101727] font-bold text-2xl">Your Cart</h3>
                        <div className="space-y-4">
                            {
                                catrProducts.map((product, i) => <CartCard
                                    key={i}
                                    product={product}
                                    handleRemove={handleRemove}>
                                </CartCard>)
                            }
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#627382]">Total:</p>
                            <h2 className="text-[#101727] font-bold text-2xl">$78</h2>
                        </div>
                        <button
                            onClick={handleClearCart}
                            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514fa] text-white font-bold rounded-full py-3"
                        >Proceed to Checkout</button>
                    </>
            }

        </div>
    );
};

export default CartContainer;