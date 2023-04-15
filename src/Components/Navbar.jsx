import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCloseCircle, FiMenu } from "react-icons/all";

const Navbar = () => {
  const [navbar, setNavbar] = useState("navlinks");
  const [menu, setMenu] = useState(false);

  const toggleNav = () => {
    if (navbar == "navlinks") {
      setMenu(true);
      setNavbar("navlinks activeNavlinks");
    } else {
      setNavbar("navlinks");
      setMenu(false);
    }
  };

  const productNum = useSelector((state) => {
    return state.cart;
  });

  return (
    <div className="Navbar">
      <Link to={"/"} className="logo">
        <h1>Redux's Store</h1>
      </Link>
      <div className={navbar}>
        <Link to={"/"} onClick={() => toggleNav()}>
          Home
        </Link>
        <Link to={"/AboutUs"} onClick={() => toggleNav()}>
          About Us
        </Link>
        <Link to={"/OurFounder"} onClick={() => toggleNav()}>
          Our Founder
        </Link>
        <Link to={"/Cart"} onClick={() => toggleNav()}>
          Cart
        </Link>
        <Link to={"/LikedProducts"} onClick={() => toggleNav()}>
          Liked Product
        </Link>

        <span>Cart Items:{productNum.length}</span>
      </div>
      <button onClick={() => toggleNav()}>
        {menu ? <IoCloseCircle /> : <FiMenu />}
      </button>
    </div>
  );
};

export default Navbar;
