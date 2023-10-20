import Swal from 'sweetalert2'

const Cartitem = ({ cart,carts,setCarts }) => {
    const {_id,img,name,brandname,price} = cart
   
    

    const handleDelete =()=>{
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

                fetch(`http://localhost:5000/brands/carts/delete/${_id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount){
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
        <div className="card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>BrandName : {brandname}</p>
                <p>price : {price}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;