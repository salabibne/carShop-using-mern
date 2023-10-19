import { Link } from "react-router-dom";


const SpecificBrand = ({ brand }) => {
    const { _id, img, name,
        brandname, type, price, rating
    } = brand
    return (
        <div className="card card-compact w-80 bg-neutral shadow-xl h-full">
            <figure className="">
                <img src={img} alt="Shoes" width={200} height={80} className="rounded-xl" />
            </figure>
            <div className="card-body card-compact ">
                <h2 className="card-title text-white font-semibold ">Name : {name}</h2>
                <h2 className="card-title text-white font-semibold">BrandName: {brandname}</h2>
                <h2 className="card-title text-white font-semibold">Type : {type}</h2>
                <h2 className="card-title text-white font-semibold">Price : {price} Lakhs</h2>
                <h2 className="card-title text-white font-semibold">Rating : {rating}</h2>
               <div className="flex gap-8 items-center text-white font-semibold">
               <Link to ={`/brands/details/${_id}`}><button className="btn">Details</button></Link>
                <Link to ={`/brands/updates/${_id}`}><button className="btn"> Update</button></Link>
               </div>
               
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default SpecificBrand;