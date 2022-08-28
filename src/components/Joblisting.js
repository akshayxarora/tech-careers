import { Link } from "react-router-dom";

const Joblisting = () => {
    return (
        <div className="m-5
            p-5
            rounded-lg 
            shadow-md  
            text-black 
            cursor-pointer 
            bg-white 
            h-64 w-72 
            flex
            flex-col
            justify-evenly
            hover: transition duration-700 ease-in-out
            ">
            <p className="text-gray-400">Company Name</p>
            <h1 className="text-3xl font-bold">Job Role</h1>
            <Link to="/JobDetails">
                <button className=
                    "bg-indigo-500 hover:bg-indigo-600 text-white font-md py-2 px-3 rounded-md mt-2">
                    Apply
                </button>
            </Link>
        </div>
    )
};

export default Joblisting;