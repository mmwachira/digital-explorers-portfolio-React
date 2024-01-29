import React from "react";
//import {Helmet} from "react-helmet";
//import ScriptTag from 'react-script-tag';
//import mainJS from '../js/main.js';
//import contactForm from '../contactform/contactform.js';

class Home extends React.Component{
    render(){
        return(
        <html>
        <body>
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
        {/*<script src={contactForm}></script>*/}

        {/*Main JavaScript File*/}
        
        {/*<ScriptTag src="../js/main.js" />*/}
        </body>
        </html>     
        
        );
}
}

export default Home;