import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {

    const [show,handleShow] = useState(false);

    const transitionNavBar = ()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(() =>{
        window.addEventListener('scroll', transitionNavBar);
        return() => window.removeEventListener('scroll', transitionNavBar);
    },[])
    return (
        <div className={`nav ${show && `nav_black`}`}>
            <div className="nav_contents">
                <img 
                className = "nav_logo"
                src="./Filmzzmainicon.png"
                alt = "Filmzz"
                />

                <img
                className = "nav_avatar"
                src="avatar2.png"
                alt="Avatar"
                />
            </div>
        </div>
    )
}

export default Nav;
