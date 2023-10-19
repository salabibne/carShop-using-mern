

const Brand = ({ brand }) => {
    const { brand_name, brand_image } = brand
    return (
        <div className="card w-96  bg-neutral  shadow-xl">
            <figure className="px-10 pt-10">
                <img  width={100} height={100} src={brand_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-compact items-center text-center">
                <h2 className="card-title text-center text-white mt-2 font-semibold justify-center ">{brand_name}</h2>
               
            </div>
        </div>
    );
};

export default Brand;