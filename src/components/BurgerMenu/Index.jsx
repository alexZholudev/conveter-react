import React, {useEffect} from 'react';
import "./BurgerMenu.css";

export const BurgerMenu = ({isOpen, close, heightH}) => {
    console.log(heightH)
    // const closeMenu = () => {
    //     close();
    // }
    const wrapperRef = React.useRef(null);

    useEffect(() => {
        if (isOpen) {
            wrapperRef.current.transform = 'translateY(0)';
            wrapperRef.current.style.paddingTop = heightH;
            wrapperRef.current.style.maxHeight = '100vh';
            wrapperRef.current.style.opacity = '1';
            wrapperRef.current.style.visibility = 'visible';
            wrapperRef.current.classList.remove('bar-anim');
        } else {
            wrapperRef.current.classList.add('bar-anim');
            wrapperRef.current.transform = 'translateY(-120%)';
            wrapperRef.current.style.paddingTop = '0';
            wrapperRef.current.style.maxHeight = '0';
            wrapperRef.current.style.opacity = '0';
            wrapperRef.current.style.visibility = 'hidden';
        }

    }, [isOpen]);

    return (
        <>
            <div className="bar_veil"></div>
            <div ref={wrapperRef} className="bar_wrapper bar-anim">
                <div className="bar_net __flex">
                    <div className="bar_nav">
                        <a href="/" className="bar_nav_li">Home</a>
                    </div>
                </div>
            </div>
        </>
    );
};