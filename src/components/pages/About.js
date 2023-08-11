import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <img src='https://res.cloudinary.com/djdblxcxt/image/upload/v1691650697/about-img_rkwpqt.jpg' />
                <div className='info'>
                    <h2>About Us</h2>
                    <h1>Everyday is a chance to become better</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla <br /> facilisi. Curabitur id tellus ac libero lacinia vestibulum.
                        Fusce<br />quis justo vitae  magna laoreet tristique. Aenean auctor, risus<br /> non fringilla placerat, turpis velit tincidunt odio.
                    </p>
                </div>
            </div>

            <div className='info-container'>
                <div className='info-items'>
                    <div className='info-name'>
                        <b>Body and Mind</b>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi.</p>
                    </div>

                    <div className='info-name'>
                        <b>Healthy Life</b>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi.</p>
                    </div>
                </div>

                <div className='info-items'>
                    <div className='info-name'>
                        <b>Strategies</b>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi.</p>
                    </div>

                    <div className='info-name'>
                        <b>Workout</b>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;