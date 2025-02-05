import React from "react"

import about from "../assets/img/about.jpg";

const Intro = () => {
    return (
        <section id="intro">
            <div class="intro__inner">
                <h1 class="intro__title">port developer</h1>
                <div class="intro__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <div class="intro__text">
                    <div class="text">
                        <div>talent is</div>
                        <div>found at the end of the</div>
                        <div>effort</div>
                    </div>
                    <div class="img">
                        <img src={about} alt="어바웃미" />
                    </div>
                </div>
                <div class="intro__lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro
