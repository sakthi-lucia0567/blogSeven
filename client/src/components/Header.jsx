import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mx-4 my-10 flex flex-row items-center justify-between text-2xl text-black shadow-black dark:text-white">
      <Link to="/" className="text-2xl font-bold">
        MyBlog
      </Link>
      <nav className="flex flex-row gap-5">
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
