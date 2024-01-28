import React from "react";

class Home extends React.Component{
    render(){
        return( 
        <body>
        <nav id="main-nav">
            <div class="row">
                <div class="container">
                    <div class="logo">
                        <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
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

        {/*JavaScript Libraries*/}
        <script src="lib/jquery/jquery.min.js"></script>
        <script src="lib/jquery/jquery-migrate.min.js"></script>
        {/*<script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script> */}
        <script src="lib/typed/typed.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/magnific-popup/magnific-popup.min.js"></script>
        <script src="lib/isotope/isotope.pkgd.min.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        {/* Contact Form JavaScript File */}
        <script src="contactform/contactform.js"></script>

        {/*Main JavaScript File*/}
        <script src="js/main.js"></script>
    </body>
        );
}
}

export default Home;