import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import aiPhoto from '../images/portfolio/1.jpg';
import gameDevPhoto from '../images/portfolio/gamedev.jpeg';
import webDevPhoto from '../images/portfolio/3.jpg';

const TITLE = "Projects | " + Config.SITE_TITLE;
const DESC = "View Martin Wachira's Portfolio.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Projects extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                {/*start section projects*/}
                <div id="portfolio" class="text-center paddsection">

                <div class="container">
                <div class="section-title text-center">
                    <h2>Projects</h2>
                </div>
                </div>

                <div class="container">
                <div class="row">
                    <div class="col-md-12">

                    <div class="portfolio-list">

                        <ul class="nav list-unstyled" id="portfolio-flters">
                        <li class="filter filter-active" data-filter=".all">all</li>
                        <li class="filter" data-filter=".branding">AI</li>
                        <li class="filter" data-filter=".mockups">Game Development</li>
                        <li class="filter" data-filter=".webdesign">Web Design</li>
                        </ul>

                    </div>

                    <div class="portfolio-container">

                        <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
                        <a href="https://github.com/mmwachira/mushroom-classifier-ai">
                            <img src={aiPhoto} alt="img" />
                        </a>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography">
                        <a href="https://github.com/mmwachira/128968">
                            <img src={gameDevPhoto}  alt="img" />
                        </a>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesign photography">
                        <a href="https://github.com/mmwachira/digital-explorers-portfolio">
                            <img src={webDevPhoto} alt="img" />
                        </a>
                        </div>

                    </div>
                    </div>
                </div>
                </div>

                </div>
                {/*End section projects*/}
            </div>
        );
    }
}

export default Projects;