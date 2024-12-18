import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/Srinivas.pdf';
import AboutBox from './AboutBox';
import ScrollReveal from '../scrollreveal/ScrollReveal';
import '../scrollreveal/ScrollReveal.css';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />
                <ScrollReveal threshold={0.5}>
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Srinivas, and I'm based in Vijayawada, India. My current focus these days
                            is on expanidng my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Angular</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>HTML</li>
                            <li>Css</li>
                            <li>Bootstap</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
                </ScrollReveal>
            </div>
            
            

            {/* <AboutBox /> */}
        </section>
    )
}

export default About