import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

import { useState } from "react";
import Swal from 'sweetalert2'


const Mycart = () => {
    const loadedCart = useLoaderData()
    const [carts, setCarts] = useState(loadedCart)
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure to delete this item?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/brands/carts/delete/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {

                            const remainings = carts.filter(ci => ci._id !== _id)
                            setCarts(remainings)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }


                    })

            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p className="text-4xl border-b-4 border-b-yellow-950 font-extrabold text-orange-700 text-center  p-2">Carts Items</p>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className="bold">Name</th>
                                <th className="bold">BrandName</th>
                                <th className="bold">Price</th>
                                <th className="bold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map(cart => <tr key={cart._id}>

                                    <td>{cart.name}</td>
                                    <td>{cart.brandname}</td>
                                    <td>{cart.price} Lakhs</td>
                                    <td><button  onClick={()=> handleDelete(cart._id)} className="btn btn-error">Delete</button></td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mycart;