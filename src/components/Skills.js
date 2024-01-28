import React from "react";

class Skills extends React.Component {
    render() {
        return(
            <div>
                {/*start section skills*/}
                <div id="services" />
                    <div class="container">

                        <div class="services-carousel owl-theme">

                        <div class="services-block">

                            <i class="ion-ios-game-controller-b-outline"></i>
                            <span>GAME DEVELOPMENT</span>
                            <p class="separator">3D game Design and Development using Unity Platorm </p>

                        </div>

                        <div class="services-block">

                            <i class="ion-ios-cloud-outline"></i>
                            <span>CLOUD SERVICES</span>
                            <p class="separator">Deployment of IT based solutions onto the cloud </p>

                        </div>

                        <div class="services-block">

                            <i class="ion-ios-color-wand-outline"></i>
                            <span>WEB DESIGN</span>
                            <p class="separator">Creation and Design of Websites </p>

                        </div>

                        <div class="services-block">

                            <i class="ion-social-android-outline"></i>
                            <span>MOBILE APPS</span>
                            <p class="separator">Design and Development of Mobile-based applications </p>

                        </div>

                        <div class="services-block">

                            <i class="ion-ios-analytics-outline"></i>
                            <span>Analytics</span>
                            <p class="separator">Deployment of Data collecting tools for analytics on Websites </p>

                        </div>

                    </div>

                </div>
                {/*end section skills*/}
            </div>
      );
    }
}

export default Skills;