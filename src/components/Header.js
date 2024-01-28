import React from "react";

class Header extends React.Component {
    render() {
        return(
        <header>
        {/*start section header*/}
        <div id="header" class="home" >
            <div class="container">
                <div class="header-content">
                    <h1><span class="typed"></span></h1>
                    <p>web developer, game designer, archer</p>

                    <ul class="list-unstyled list-social">
                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/_martinwachira/"><i class="ion-social-instagram"></i></a></li>
                        <li><a href="https://github.com/mmwachira"><i class="ion-social-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/martin-wachira-3abaa6200/"><i class="ion-social-linkedin"></i></a></li>

                        {/*<li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="https://www.instagram.com/_martinwachira/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="https://github.com/mmwachira"><ion-icon name="logo-github"></ion-icon></a></li>
                        <li><a href="https://www.linkedin.com/in/martin-wachira-3abaa6200/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                        */}
                    </ul>
                </div>
            </div>
        </div>
        {/*end section header*/}
        
        </header>
        );     
        
    }
}

export default Header;