import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";

//import '../lib/jquery/jquery.min.js';
//import '../lib/jquery/jquery-migrate.min.js';
//import '../lib/typed/typed.js';
//import '../lib/owlcarousel/owl.carousel.min.js';
//import '../lib/magnific-popup/magnific-popup.min.js';
//import '../lib/isotope/isotope.pkgd.min.js';
//import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
//import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
//import '../js/main.js';

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "View Martin Wachira's Portfolio.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends React.Component{
    render(){
        return(
        <html>
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC} />
                <meta name="theme-color" content={Config.THEME_COLOR} />
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
                <script src="../js/main.js" />
                
                {/*<script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script> */}
                
            </Helmet>
            <body>
            
            
            </body>
        </html>     
        
        );
}
}

export default Home;