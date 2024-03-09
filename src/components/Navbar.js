import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar(){
    const [isShown, setIsShown] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(null);

    useEffect(() => {
        handleResize();
    }, [])

    const handleResize = () => {
        if(window.innerWidth <= 576){
            setIsSmallScreen(true);
        }
        else{
            setIsSmallScreen(false);
        }
    }

    window.addEventListener("resize", handleResize);

    return (
        <>
            <nav className="d-flex">
                <div className="me-auto d-flex align-items-center justify-content-between position-relative w-100 ps-3">
                    <Link to="/pages/Home" className="site-title">
                        <h1 className="text-white">Wi <span className="lunch">Lunch</span></h1>
                    </Link>
                    <div className="position-absolute menu-btn h-100 d-flex"
                        onClick={() => setIsShown(!isShown)}>
                        <i className="fa-solid fa-bars fs-3 align-self-center"></i>
                    </div>
                </div>
                <div className="me-3 d-flex nav-links"
                    style={{
                        maxHeight: isSmallScreen ? ( isShown ? "200px" : "0px") : "60px",
                        overflowY: isSmallScreen ? ( isShown ? "visible" : "hidden" ) : "visible",
                        transition: "0.3s",
                    }}>
                    <Link to="/pages/Home" className="link">Home</Link>
                    <Link to="/pages/Menu" className="link">Menu</Link>
                    {/*<Link to="/pages/About">About</Link>*/}
                </div>
            </nav>
        </>
    )
}