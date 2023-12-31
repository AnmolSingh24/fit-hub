import React from 'react';
import './Home.css'

const WorkoutCard = ({ img, title, text, btn }) => {
    return (
        <div className="workout-card" id="card1">
            <img src={img} alt="Workout 1" />
            <h2>{title}</h2>
            <p>{text}.</p>
            <a href='/' className='btn'>{btn}</a>
        </div>
    );
}

const Feedback = ({ text, img, name }) => {
    return (
        <article>
            <p>{text}</p>
            <div className='test-img'>
                <img src={img} />
                <div className='test-name'>
                    <h3>{name}</h3>
                </div>
            </div>
        </article>
    );
}

const Home = () => {

    return (
        <section className='home' id='home' >
            <div className='home-slider'>
                <div className='wrapper'>
                    <div className='slide' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1691568834/home-bg-1_hpznrn.jpg')" }}>
                        <div className='content'>
                            <span>Be Strong, Be Fit</span>
                            <h3>Make yourself stronger that your excuses.</h3>
                            <a href='#' className='btn'>Get Started</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fitness-workout-container'>
                <h1>Fitness Workouts</h1>
                <div className="workout-types">

                    <WorkoutCard img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691645794/cardio_d4gtxf.jpg'} title="Cardio" text="Engage in high-intensity cardio workouts to improve endurance and burn calories." btn="Start Training" />

                    <WorkoutCard img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691646410/strength-training_kdahai.jpg'} title="Strength Training" text="Build muscle and strength through weight lifting and resistance exercises." btn="Start Training" />

                    <WorkoutCard img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691646282/yoga.webp_mkzaqi.webp'} title="Yoga" text="Practice yoga to improve flexibility, balance and mental, physical well-being." btn="Start Training" />

                </div>
            </div>

            <div className='test-container'>
                <h1>Testimonals</h1>
                <div className='test-content'>
                    <div>
                        <h2>What our clients says?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Sed tincidunt leo nec sapien volutpat, at laoreet libero <br /> rhoncus.
                            Nunc at felis at leo faucibus aliquam.
                        </p>
                        <a href='/' className='btn'>Read More</a>
                    </div>

                    <div className='feeds'>
                        <Feedback text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691596402/pic-1_rsvzyy.png'} name="Martin D'Souza" />

                        <Feedback text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691596543/pic-2_ew8mxs.png'} name="Laraya Stafford" />

                        <Feedback text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691596624/pic-3_hm7f8s.png'} name="Lisa Christopher" />
                    </div>
                </div>
            </div>

            <div className='footer-container'>
                <div className='box'>
                    <h3>Quick Links</h3>
                    <div className='social-links'>
                        <img src='' />
                        <img src='' />
                        <img src='' />
                    </div>
                </div>

                <div className='box'>
                    <h3>Opening Hours</h3>
                    <div className='timings'>
                        <p> Monday : <i> 7:00am - 9:00pm </i> </p>
                        <p> Tuesday : <i> 7:00am - 9:00pm </i> </p>
                        <p> Wednesday : <i> 7:00am - 9:00pm </i> </p>
                        <p> Thursday : <i> 7:00am - 9:00pm </i> </p>
                        <p> Friday : <i> 7:00am - 9:00pm </i> </p>
                        <p> Saturday : <i> 7:00am - 9:00pm </i> </p>
                        <p> Sunday : <i> closed </i> </p>
                    </div>
                </div>

                <div className='box'>
                    <h3>Contact Us</h3>
                    <div className='timings'>
                        <p> +111-222-3333 </p>
                        <p> fithub@gmail.com </p>
                        <p> Mumbai, India - 400303 </p>
                    </div>
                </div>

                <div className='box'>
                    <h3>Send Us a Message</h3>
                    <form>
                        <input type="text" name="name" className="name" placeholder="Lisa" /> <br />
                        <input type="email" name="email" className="email" placeholder="Lisa@gmail.com" /> <br />
                        <input type="tel" name="phone" className="email" placeholder="+34681585" /> <br />
                        <textarea type="text" name="message" className="email" placeholder="Your Message"></textarea> <br />
                        <input type="submit" value="Send" className="btn" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Home;