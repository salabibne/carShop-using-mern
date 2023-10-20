import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { context_siatos } from "../Providers/Context";
import { FcGoogle } from "react-icons/fc";



const Login = () => {


    const [error, setError] = useState('')
    const [showpassword, setshowpassword] = useState(false)
    const { signIn, GoogleLogin,loading} = useContext(context_siatos)
    const navigate =useNavigate()
    const location=useLocation()

    const handleLogin = e => {

        setError('')
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        



        signIn(email, password)
            .then(userCredintial => {
                const user = userCredintial.user
                console.log(user)
               

                toast.success('Login Successful;', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 3000); 
            })

            .catch(error => {
                console.error(error)
                setError(error)

            })



    }

    const handleGoogleSignIn = () => {
        GoogleLogin()
            .then(result => {


                const user = result.user
                toast.success('Login Successful;', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 3000); 

                console.log("guser", user)
                
                
            })
            .catch(error => {
                console.log(error)
                setError(error)
            })
    }


    return (

        <div className="hero min-h-screen ">

            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showpassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered"

                                required />
                            <button className="absolute top-44 right-10 font-bold text-violet-600" onClick={() => setshowpassword(!showpassword)}>{showpassword ? "hidden" : "show"}</button>


                        </div>
                        <div className="form-control mt-6">

                            <button className="btn btn-primary">Login</button>
                            {
                                error && <p className="text-red-600 font-bold m-2">{error.message}</p>
                            }
                            <p className="text-red-600 mt-2 text-lg">Not Register ? <Link className="btn" to="/register">Register</Link></p>

                        </div>
                        <p className="text-center text-lg mt-2 "> Or Continue With </p>
                        <button onClick={handleGoogleSignIn} className="mx-auto text-4xl"><FcGoogle></FcGoogle></button>



                    </form>

                </div>

            </div>

            <ToastContainer></ToastContainer>

        </div>






    );
};

export default Login;