import React from "react";

class Projects extends React.Component {
    render() {
        return(
            <div>
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
                            <img src="../images/portfolio/1.jpg" alt="img" />
                        </a>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography">
                        <a href="https://github.com/mmwachira/128968">
                            <img src="../images/portfolio/gamedev.jpeg"  alt="img" />
                        </a>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesign photography">
                        <a href="https://github.com/mmwachira/digital-explorers-portfolio">
                            <img src="../images/portfolio/3.jpg" alt="img" />
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