
const Stats = () => {



    return (
        <div className="stats shadow bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full py-6">
            <div className="stat place-items-center">
                <div className="stat-value text-4xl lg:text-5xl font-ext580">50K+</div>
                <div className="stat-title text-gray-200 text-sm lg:text-base">Active Users</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-value text-4xl lg:text-5xl font-extrabold">200+</div>
                <div className="stat-title text-gray-200 text-sm lg:text-base">Premium Tools</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-value text-4xl lg:text-5xl font-extrabold">4.9</div>
                <div className="stat-title text-gray-200 text-sm lg:text-base">Rating</div>
            </div>
        </div>
    );
};

export default Stats;