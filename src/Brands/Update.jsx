import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Update = () => {
    const loadedproduct = useLoaderData()
    const handleUpdateProduct = e => {
       
        e.preventDefault()
        const img = e.target.image.value
        const name = e.target.name.value
        const brandname = e.target.brandname.value
        const type = e.target.type.value
        const price = e.target.price.value
        const description = e.target.description.value
        const rating = e.target.rating.value

        const addproducts = { img, name, brandname, type, price, description, rating }
        console.log(addproducts);

        fetch(`https://siatos-serverside-g4ts96eur-salab-ibnes-projects.vercel.app/brands/updates/${loadedproduct._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addproducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire('You have successfully update the product')


                }
            })
        e.target.reset()
    }
    return (
        <div>
           
            <div>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-4xl p-4 font-bold">Update {loadedproduct.name} in System</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleUpdateProduct} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <label className='input-group'>
                                    <input type="text" placeholder="image" name="image" defaultValue={loadedproduct.img}   className="input input-bordered" required />
                                    </label>
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>

                                    <input type="text" placeholder="Name" name="name"  defaultValue={loadedproduct.name} className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Brand Name</span>
                                    </label>
                                    <input type="text" placeholder="All capital letters eg:BMW/TOYOTA" defaultValue={loadedproduct.brandname} name="brandname"   className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Type</span>
                                    </label>
                                    <input type="text" placeholder=" Type" name="type"  defaultValue={loadedproduct.type} className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="price" defaultValue={loadedproduct.price} className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" placeholder="description" name="description" defaultValue={loadedproduct.description} className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" name="rating" defaultValue={loadedproduct.rating}  className="input input-bordered" required />

                                </div>





                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;