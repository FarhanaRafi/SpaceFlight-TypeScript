import { Link } from "react-router-dom";
import logo from "../assets/logo.png"


const Navbar = () => {
    return (
        <header className="bg-violet-800">
      <nav className="mx-auto max-w-8xl px-9 lg:px-10" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-2 lg:border-none">
          <div className="flex items-center">
            <a href="#r">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto logo" src={logo} alt="" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
                <Link to="/">
                    <li className="text-white" style={{listStyle:"none"}}>Home</li>
                </Link>
         
            </div>
          </div>
         
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
      
        </div>
      </nav>
    </header>
    );
};

export default Navbar;