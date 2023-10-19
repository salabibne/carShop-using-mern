


const Bannar = () => {
    return (
        <div className=" hero min-h-screen mt-4 rounded-2xl " style={{ backgroundImage: 'url(/bannar.jpg)'}}>
         
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className=" mt-4  text-6xl shadow-2xl mr-6 text-orange-700 font-bold">S I A T O S</h1>
                    <p className="mb-4 text-yellow-900 font-semibold text-xl">Welcome to our online car dealership! Discover a wide range of quality vehicles, from sleek sedans to rugged SUVs.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Bannar;