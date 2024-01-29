import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";

const TITLE = "Skills | " + Config.SITE_TITLE;
const DESC = "Currently acquired Skills.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Skills extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
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