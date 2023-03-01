import React, {useEffect, useRef, useState} from 'react';
import './Header.css';
import {BurgerMenu} from "../BurgerMenu/Index";

const Header = () => {
    const [isMenu, setMenu] = useState(false);
    const comingSoonRef = useRef(null);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(10);
    const clickHandler = () => {
        comingSoonRef.current.classList.add('coming-soon-active');
    }
    useEffect(() => {
        if (headerRef.current !== null){
            setHeaderHeight(headerRef.current.clientHeight);
        }
    }, []);
    console.log(headerHeight)
    return (
        <header ref={headerRef} className={`header ${isMenu ? "active" : ""}`}>
            <div className="bone">
                <div className="header_net __flex-center">
                    <div className="header_left __flex-align">
                        <a href="/" className="header_logo">
                            <svg width="147" height="52" viewBox="0 0 147 52" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.0201 10H24.2471V38.38L19.0874 41.3599H5.15971L0 38.38V10H6.22696V35.5767H18.0153L18.0201 10Z"
                                    fill="var(--color)"/>
                                <path
                                    d="M31.6908 25.5698V12.9799L36.8521 10H48.106L53.2657 12.9799V18.8959H47.0388V15.333H37.9194V22.7616H48.106L53.2657 25.7431V38.5987L48.106 41.5785H36.4068L31.2471 38.5987V32.681H37.474V36.2439H47.0388V28.5448H36.8521L31.6908 25.5698Z"
                                    fill="var(--color)"/>
                                <path
                                    d="M84.508 38.1566L79.3483 41.1364H60.2657V10H79.3483L84.508 12.9799V38.1566ZM66.4927 15.3379V35.7986H78.2794V15.3379H66.4927Z"
                                    fill="var(--color)"/>
                                <path
                                    d="M108.19 32.2421H114.417V38.6035L109.258 41.5834H96.6693L91.5079 38.6035V12.9799L96.6693 10H109.258L114.417 12.9799V19.3413H108.19V15.3379H97.7365V36.2456H108.19V32.2421Z"
                                    fill="var(--color)"/>
                                <path
                                    d="M127.8 10H137.287L133.292 23.0515H136.223L137.287 19.6587H146.975L143.755 29.2898L126.765 52L134.189 29.3173H121.417L127.8 10Z"
                                    fill="var(--color)"/>
                            </svg>
                        </a>
                        <div className="header_nav __flex-align">
                            <a href="/exchange.html" className="header_nav_li">Home</a>
                        </div>
                    </div>
                    <div className="header_right __flex-align">
                        <div className="header_btn" onClick={clickHandler}>
                            <div className="__btn-blue"> Launch App</div>
                            <p className="coming-soon" ref={comingSoonRef}>Coming Soon</p>
                        </div>
                        <div className="bar">
                            <div className={`bar_burger${isMenu ? " active" : ""}`}
                                 onClick={() => setMenu(prev => !prev)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <BurgerMenu heightH={headerHeight} isOpen={isMenu} close={() => setMenu(false)}/>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;