import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black text-white py-4 flex">
            <ul className="flex space-x-3 cursor-pointer pl-2 font-semibold">
                <Link to='/'><li>Home</li></Link>
                <Link to='/contactus'><li>Contact Us</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;