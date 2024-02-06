import Logo from "./logo/Logo";
import "./navbar.css";
import NavBtn from "../btn/Btn";
import NavLink from "./navLinks/NavLink";
const Navbar = () => {
    return(
        <>
        <nav className="navbar">
        <Logo />
        <div className="navLinks">
         <NavLink name="About Us"/>
         <NavLink name="Our World"/>
         <NavLink name="Experiences"/>
         <NavLink name="Gallery"/>
         <NavLink name="Contact"/>
        </div>
        <NavBtn className="navBtn" text="Sign In"/>
        </nav>
        </>
    )
}

export default Navbar;