import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Brand from "./Brand";
import Accordian from "./Accordian";
import Gallary from "./Gallary";


const Home = () => {
    const loadedbrands = useLoaderData()
    return (
        <div>

            <Navbar></Navbar>
            <Bannar></Bannar>
            <div>
                <h2 className="text-4xl border-b-4 border-b-yellow-950 font-extrabold text-orange-700 text-center  p-2 "> Popular Brands </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-4">
                {
                    loadedbrands.map(brand => <Brand brand={brand}></Brand>)
                }
            </div>

            <div>
            <h2 className="text-4xl border-b-4 border-b-yellow-950 font-extrabold text-orange-700 text-center  p-2">At a Glance</h2>
            <Gallary></Gallary>
            </div>

          <div>
            <h2 className="text-4xl border-b-4 border-b-yellow-950 font-extrabold text-orange-700 text-center  p-2"> FAQ</h2>
          <Accordian></Accordian>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;