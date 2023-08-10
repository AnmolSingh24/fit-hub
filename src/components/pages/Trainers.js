import React from 'react';
import './Trainers.css'

const Trainers = () => {
    return (
        <div className='trainers'>
            <h1>Trainers</h1>

            <div class="box-container">
                <div class="box">
                    <img src="https://vq.pe/creator/frontend/theme_4/images/trainer-1.jpg" alt="" />
                    <div class="content">
                        <span>Expert Trainer</span>
                        <h3>Shaun Stafford</h3>
                    </div>
                </div>

                <div class="box">
                    <img src="https://vq.pe/creator/frontend/theme_4/images/trainer-2.jpg" alt="" />
                    <div class="content">
                        <span>Expert Trainer</span>
                        <h3>Lua Stux</h3>
                    </div>
                </div>

                <div class="box">
                    <img src="https://vq.pe/creator/frontend/theme_4/images/trainer-3.jpg" alt="" />
                    <div class="content">
                        <span>Expert Trainer</span>
                        <h3>Joe Dowdell</h3>
                    </div>
                </div>

                <div class="box">
                    <img src="https://vq.pe/creator/frontend/theme_4/images/trainer-4.jpg" alt="" />
                    <div class="content">
                        <span>Expert Trainer</span>
                        <h3>Alexia Clark</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trainers;