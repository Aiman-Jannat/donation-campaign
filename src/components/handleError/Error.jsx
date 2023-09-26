import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center">
        <div>
            Ooopss!! Something went wrong
            <br />
            <Link className="bg-red-300" to="/">Go Home</Link>
        </div>
        </div>
    );
};

export default Error;