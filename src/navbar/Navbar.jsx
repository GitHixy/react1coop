import Logo from "./logo/Logo";
import "./navbar.css";
import NavBtn from "./navBtn/NavBtn";
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
        <NavBtn />
        </nav>
        </>
    )
}

export default Navbar;