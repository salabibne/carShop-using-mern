import Navbar from "./Navbar";


const AddProducts = () => {
    const handleAddProduct = e =>{
        e.preventDefault()
        const img = e.target.image.value
        const name = e.target.name.value
        const brandname = e.target.brandname.value
        const type = e.target.type.value
        const price = e.target.price.value
        const description = e.target.description.value
        const rating = e.target.rating.value
       
        const addproducts ={img,name,brandname,type,price,description,rating}
        console.log(addproducts);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold">Add Products in System</h1>
                          
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleAddProduct} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" placeholder="image" name="image" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name"  name ="name"className="input input-bordered" required />
                                   
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Brand Name</span>
                                    </label>
                                    <input type="text" placeholder=" Brand Name" name="brandname" className="input input-bordered" required />
                                   
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Type</span>
                                    </label>
                                    <input type="text" placeholder=" Type"  name="type" className="input input-bordered" required />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Price</span>
                                    </label>
                                    <input type="text" placeholder="Price"  name="price" className="input input-bordered" required />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" placeholder="description" name="description" className="input input-bordered" required />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating"  name="rating"className="input input-bordered" required />
                                   
                                </div>





                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;