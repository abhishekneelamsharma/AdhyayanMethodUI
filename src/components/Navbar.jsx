import { Link } from "react-router-dom";
import logo from "../images/AdhyayanMethodLogo.png";
import { useContext } from "react";
import { UserContext } from "../App";
import { useState } from "react";




function Navbar() {

    const { state, dispatch } = useContext(UserContext);

    const ToggleMenu = () => {
        if (state) {
            return (
                <>
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/coachings">Coachings</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item mx-1 my-auto">
                        <Link class="nav-link btn btn-outline-success btn-sm p-1 px-2 login" to="/logout">Logout</Link>
                    </li>

                </>
            )
        } else {
            return (
                <>

                    <li class="nav-item" onClick={handleLinkClick}>
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item" onClick={handleLinkClick}>
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item" onClick={handleLinkClick}>
                        <Link class="nav-link" to="/coachings">Coachings</Link>
                    </li>
                    <li class="nav-item" onClick={handleLinkClick}>
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item my-auto" onClick={handleLinkClick}>
                        <Link class="nav-link btn btn-success btn-sm p-1 px-2 m-1 " to="/login">Login</Link>
                    </li>
                    <li class="nav-item mx-1 my-auto" onClick={handleLinkClick}>
                        <Link class="nav-link btn btn-outline-success btn-sm p-1 px-2 login" to="/signup">Sign up</Link>
                    </li>

                </>
            )
        }
    }

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleLinkClick = () => {
        setIsNavOpen(false); // Close the navigation bar when a link is clicked
    };

    return (
        <>
            <nav class={`navbar ${isNavOpen ? 'open' : ''} navbar-expand-lg bg-color`} onClick={toggleNav}>
                <div class="container-fluid">
                    <img className="logo" src={logo} alt="logo img :)" />

                    <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <ToggleMenu />

                        </ul>
                    </div>


                </div>
            </nav>

        </>
    )
}

export default Navbar;