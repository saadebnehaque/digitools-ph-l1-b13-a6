
const CartCard = ({ product, handleRemove }) => {



    return (
        <div className="bg-[#f9fafc] rounded-2xl p-5 flex items-center justify-between hover:shadow">
            <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-3.5 border border-[#f2f2f2] w-fit">
                    <img src={product.icon} />
                </div>
                <div>
                    <h3 className="text-[#101727] font-semibold text-xl">{product.name}</h3>
                    <p className="text-[#627382] font-medium">${product.price}</p>
                </div>
            </div>
            <button
                onClick={() => handleRemove(product)}
                className="btn btn-error btn-ghost font-bold rounded-full"
            >Remove</button>
        </div>
    );
};

export default CartCard;