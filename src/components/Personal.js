import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import personalPhoto from '../images/Me-here.jpeg';

const TITLE = "Personal Info | " + Config.SITE_TITLE;
const DESC = "Here is some info about me.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Personal extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                {/*start section about me*/}
                <div id="about" class="paddsection">
                    <div class="container">
                    <div class="row justify-content-between">
                
                        <div class="col-lg-4 ">
                        <div class="div-img-bg">
                            <div class="about-img">
                            <img src={personalPhoto} class="img-responsive" alt="me" />
                            </div>
                        </div>
                        </div>
                
                        <div class="col-lg-7">
                        <div class="about-descr">
                
                            <p class="p-heading">I am a 4th year student at Strathmore University undertaking a Bachelor's degree in Business and Information Technology & specializing in Networking. I love designing & working with IT based solutions. I also love to participate in outdoor activities during my free time.  </p>
                            <p class="separator">I am widely knowleagable in coding with languages such as HTML/CSS, C++, C#, Unity3D, MySQL and PHP under my belt.</p>
                
                        </div>
                
                        </div>
                    </div>
                    </div>
                </div>
                {/*end section about us*/}
            </div>
        );
    }
}

export default Personal;