import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="max-w-md mx-auto">
            <img src="/Error page.jpg" width={400} height={200}></img>
            <Link to ='/'><button className="btn btn-accent">Back Home</button></Link>
            
        </div>
    );
};

export default Error;