import { Link } from "react-router-dom";
import LogoutButton from "./logout";

export default function Navbar() {
  const isLoggedIn=localStorage.getItem("isLoggedIn")
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            CareerAI
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/advisor-section"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Advisor
                </Link>
                <LogoutButton/>

              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* Implement mobile menu toggle here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}
