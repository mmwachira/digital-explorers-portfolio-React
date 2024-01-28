import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                {/*start section footer*/}
                <div id="footer" class="text-center">
                    <div class="container">
                    <div class="socials-media text-center">

                        <ul class="list-unstyled">
                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/_martinwachira/"><i class="ion-social-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/martin-wachira-3abaa6200/"><i class="ion-social-linkedin"></i></a></li>
                        <li><a href="https://github.com/mmwachira"><i class="ion-social-github"></i></a></li>
                        </ul>

                    </div>

                    <p>&copy; Copyrights Personal_Portfolio. All rights reserved.</p>

                    <div class="credits">
                        
                    </div>

                    </div>
                </div>
                {/*End section footer*/}

            </footer>
        );
    }
}

export default Footer;