import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import archeryimg from '../images/archery.jpg';
import formula1img from '../images/Formula.jpg';
import gameImg from '../images/Game.jpg';

const TITLE = "Interests | " + Config.SITE_TITLE;
const DESC = "Some of my personal interests";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Interests extends React.Component{
    render() {
        return(
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                {/*start section interests*/}
                    <div id="interests" class="text-left paddsection">

                    <div class="container">
                    <div class="section-title text-center">
                        <h2>interests</h2>
                    </div>
                    </div>

                    <div class="container">
                    <div class="interests-block">
                        <div class="row">

                        <div class="col-lg-4 col-md-6">
                            <div class="interests-info">

                            <a><img src= {archeryimg} class="img-responsive" alt="img" /></a>

                            <div class="interests-txt">

                                <h4><a>ARCHERY</a></h4>
                                <p class="separator">I practice archery as a hobby. I am also in the Strathmore archery team.
                                </p>

                            </div>

                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="interests-info">

                            <a><img src={formula1img} class="img-responsive" alt="img" /></a>

                            <div class="interests-txt">

                                <h4><a>FORMULA 1</a></h4>
                                <p class="separator">I like to watch Formula 1.
                                </p>

                            </div>

                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="interests-info">

                            <a><img src={gameImg} class="img-responsive" alt="img" /></a>

                            <div class="interests-txt">

                                <h4><a>GAMES</a></h4>
                                <p class="separator">Aside from developing games, I am also interested in playing said videogames.
                                </p>

                            </div>

                            </div>
                        </div>

                        </div>
                    </div>
                    </div>

                    </div>
                {/*End section interests*/}
            </div>
        );
    }
}

export default Interests;