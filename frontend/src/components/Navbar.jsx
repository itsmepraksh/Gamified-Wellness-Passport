import { Link, NavLink } from "react-router-dom"

 

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-[99]">
        <h1 className="text-2xl font-extrabold text-blue-600">
          🌱 Wellness Passport
        </h1>
        <nav className="flex gap-6 text-gray-600 font-medium">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/chatbot" className="hover:text-blue-500">
            Chatbot
          </NavLink>
          <NavLink to="/mood_tracker" className="hover:text-blue-500">
            Mood Tracker
          </NavLink>
          <NavLink to="/passport" className="hover:text-blue-500">
            Passport
          </NavLink>
          <NavLink to="/profile" className="hover:text-blue-500">
            Profile
          </NavLink>
        </nav>
      </header>
  )
}

export default Navbar