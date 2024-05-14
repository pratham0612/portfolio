import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-pratham-orange.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='140' />
                <h1 className="home__name">Pratham Panchal</h1>
                <span className="home__education">Web Developer</span>

                <HeaderSocials />
                <br/>
                <a href="#contact" className="btn"> Contact Me</a> 
				
				
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home