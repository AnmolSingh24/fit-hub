import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <header className='header'>
            <a href='#' className='logo'><span>FIT</span>HUB</a>
            <i className="bi bi-list" id='menu-btn'></i>
            <section className='home' id='home'>
                <div className='swiper home-slider'>
                    <div className='swiper-wrapper'>
                        <div className='swiper-slide slide' style={{ backgroundImage: "url('/src/images/home-bg-1.jpg')" }}>
                            <div className='content'>
                                <span>Be Strong, Be Fit</span>
                                <h3>Make yourself stronger that your excuses.</h3>
                                <a href='#' className='btn'>Get Started</a>
                            </div>
                        </div>

                        <div className='swiper-slide slide'>
                            <div className='content' style={{ backgroundImage: "url('/src/images/home-bg-2.jpg')" }}>
                                <span>Be Strong, Be Fit</span>
                                <h3>Make yourself stronger that your excuses.</h3>
                                <a href='#' className='btn'>Get Started</a>
                            </div>
                        </div>

                        <div className='swiper-slide slide' style={{ backgroundImage: "url('/src/images/home-bg-3.jpg')" }}>
                            <div className='content'>
                                <span>Be Strong, Be Fit</span>
                                <h3>Make yourself stronger that your excuses.</h3>
                                <a href='#' className='btn'>Get Started</a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Home;