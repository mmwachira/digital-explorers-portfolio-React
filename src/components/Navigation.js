import React from "react";
import Logo from '../images/logo.png';
import Home from "../pages/Home";
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';

class Navigation extends React.Component {
    render() {
        return(
            <nav id="main-nav">
                    <div class="row">
                    <div class="container">
                        <div class="logo">
                            <a href={Home}><img src={Logo} alt="logo" /></a>
                        </div>

                        <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>

                        <ul class="nav-menu list-unstyled">
                            <li><a href="#header" class="smoothScroll">Home</a></li>
                            <li><a href="#about" class="smoothScroll">About</a></li>
                            <li><a href="#portfolio" class="smoothScroll">Projects</a></li>
                            <li><a href="#interests" class="smoothScroll">Interests</a></li>
                            <li><a href="#contact" class="smoothScroll">Contact</a></li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        );
    }
}

export default Navigation;