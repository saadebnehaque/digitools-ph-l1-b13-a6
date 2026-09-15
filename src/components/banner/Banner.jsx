import bannerIMG from '../../assets/banner.png';
import heroDot from '../../assets/heroDot.png';
import play from '../../assets/Play.png'



const Banner = () => {


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img
                    alt="Tailwind CSS hero component"
                    src={bannerIMG}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className=' text-center lg:text-left flex flex-col items-center lg:items-start'>
                    <div className='flex gap-1 items-center bg-[#E1E7FF] px-4 py-2 rounded-full w-fit'>
                        <img src={heroDot} />
                        <span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text font-medium'>
                            New: AI-Powered Tools Available
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold lg:leading-21 my-4">Supercharge YourDigital Workflow</h1>
                    <p className=" text-[#627382] lg:text-[18px]">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place.
                        Start creating faster today.
                        Explore Products
                    </p>
                    <div className='mt-8 space-x-4'>
                        <button className="btn btn-primary rounded-full font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-px rounded-full">
                            <div className='bg-white rounded-full'>
                                <span className="btn  rounded-full font-bold text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text"><img src={play} alt="" /> Watch Demo</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;