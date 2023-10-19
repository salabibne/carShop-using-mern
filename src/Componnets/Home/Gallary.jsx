

const Gallary = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/g1.jpg"  width={300} height={200} alt="Shoes" /></figure>
               
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/g2.jpg" width={300} height={200} alt="Shoes" /></figure>
                
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/g3.jpg" width={300} height={200} alt="Shoes" /></figure>
                

                
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/g4.jpg" width={300} height={200} alt="Shoes" /></figure>
                

                
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/g5.jpg" width={300} height={200} alt="Shoes" /></figure>
                

                
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/g6.jpg" width={300} height={200} alt="Shoes" /></figure>
                

                
            </div>
        </div>
    );
};

export default Gallary;