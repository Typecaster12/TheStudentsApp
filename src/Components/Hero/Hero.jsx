import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero_Container'>
            <div className="hero_left">
                <h1 className='big_text'>
                    Welcome, Student..
                </h1>

                <h2 className="typewriter_text">
                    <Typewriter
                        words={[
                            'This app contains the Pomodoro timer',
                            'FlashCards',
                            'To-Do Lists',
                            'Motivation Section',
                            'and many more...'
                        ]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </h2>
                <button className="hero_button">Get Started</button>
            </div>


            <div className="hero_rigth">
                <img src="public/image/5326273.jpg" alt="illustration" className="hero_img" />
            </div>
        </div>
    )
}

export default Hero
