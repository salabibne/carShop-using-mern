import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Details = () => {
    const productDetails = useLoaderData()
    const handleAddtocart = ()=>{
        const img = productDetails.img
        const name = productDetails.name
        const brandname = productDetails.brandname
        const price = productDetails.price
        const carts = {img,name,brandname,price}

        fetch('http://localhost:5000/brands/carts',{
            method:"POST",
            headers: {
                'content-type' : 'application/json' 
            },
            body : JSON.stringify(carts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire('You have successfully add the product in carts item')

                
            }
        })

    }
    return (
        <div className="mt-4">
            <p className="text-4xl border-b-4 border-b-yellow-950 font-extrabold text-orange-700 text-center  p-2">Details </p>
            <div className="card w-80 mt-4  mx-auto bg-neutral shadow-xl">
               <div>
               <figure><img  className ="w-full"src={productDetails.img}  height={50} alt="Shoes" /></figure>
               </div>
                <div className="card-body">
                    <h2 className="card-title text-center text-white mt-2 font-semibold justify-center">{productDetails.name}</h2>
                    <p className="text-center text-white mt-2 font-semibold justify-center"> {productDetails.description}</p>
                    <Link><button onClick={handleAddtocart} className="btn text-orange-700 ml-12 ">Add To cart</button></Link>
                </div>
                
            </div>
           
        </div>
    );
};

export default Details;