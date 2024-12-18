import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Lottie from "lottie-react";
import computer from "../../assets/lottie/computer.json";

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Srinivas Gollapalli</h1>
                <span className="home__education">I'm a Software Engineer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>


                        {/* <Lottie
                    animationData={computer}
                    loop={true}
                    className="max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
                /> */}

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home