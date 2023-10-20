import { Link } from "react-router-dom";




const Brand = ({ brand }) => {
    const { brand_name, brand_image } = brand

   
    return (
        
        <Link to ={`/brands/${brand_name}`}>
            <div className="card card-compact w-80  bg-neutral h-full  shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        width={80}
                        height={80}
                        src={brand_image}
                        alt="Shoes"
                        className="rounded-xl"
                    />
                </figure>
                <div className=" card card-compact items-center text-center">
                    <h2 className="card-title text-center text-white mt-2 font-semibold justify-center ">
                        {brand_name}
                    </h2>
                </div>
            </div>
        </Link>


    );
};

export default Brand;