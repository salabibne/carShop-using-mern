import { useLoaderData } from "react-router-dom";
import SpecificBrand from "./SpecificBrand";


const SpecificBrands = () => {

    const loadedBrands = useLoaderData()
    return (
        <div>
            <div className="max-w-[600px]  mx-auto mt-6">
                <div className="carousel">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="/a1.jpg" height={100} className="w-full" />
                        <div className="absolute flex gap-[500px] justify-between  transform -translate-y-1/2  top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/a2.jpg" height={100} className="w-full" />
                        <div className="absolute flex  gap-[500px] justify-between transform -translate-y-1/2  top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/a3.jpg" height={100} className="w0full" />
                        <div className="absolute flex gap-[500px] justify-between transform -translate-y-1/2 l top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <h2 className="text-4xl border-b-4 border-b-yellow-950 font-extrabold text-orange-700 text-center  p-2">Avaiable Cars</h2>
            </div>
            <div>
                {
                    loadedBrands.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-3">
                        {
                            loadedBrands.map(brand => <SpecificBrand brand={brand} key={brand._id}></SpecificBrand>)
                        }
                    </div> : <p className="text-center font-medium text-red-500 text-4xl">No Avaiable cars</p>
                }
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-3">
                {
                    loadedBrands.map(brand => <SpecificBrand brand={brand} key={brand._id}></SpecificBrand>)
                }
            </div> */}
        </div>
    );
};

export default SpecificBrands;