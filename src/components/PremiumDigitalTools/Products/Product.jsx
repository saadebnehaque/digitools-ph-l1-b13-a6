
const Product = ({ product, handleCartProducts }) => {



    return (
        <div className="p-6 flex flex-col justify-between gap-4 border-2 border-[#f2f2f2] rounded-2xl hover:shadow">
            <div className="flex justify-between items-start">
                <div className=" rounded-full p-3.5 border border-[#f2f2f2] w-fit" >
                    <img src={product.icon} alt="" />
                </div>
                <span className={`font-medium text-sm px-3 py-1.5 rounded-full ${product.tagClass}`}>{product.tag}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#101727]">{product.name}</h3>
            <p className="text-[#627382]">{product.description}</p>
            <h3 className="text-2xl font-bold text-[#101727]">${product.price}<span className="font-normal text-[#627382] text-[16px]">/{product.period}</span></h3>
            <ul className="space-y-2">
                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                        <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => handleCartProducts(product)}
                className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white rounded-full"
            >
                Buy Now
            </button>
        </div>
    );
};

export default Product;