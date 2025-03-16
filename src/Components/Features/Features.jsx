import { useNavigate } from 'react-router-dom';
import './Features.css';
const Features = () => {
    //for routing;
    const route = useNavigate();

    return (
        <div className='features_container'>
            <h2 className='features_heading'>Features To Use</h2>

            <div className="features_cards">
                <div className="card">
                    <h3>Pomodoro Timer</h3>
                    <p>Boost your focus using time blocks.</p>
                    <button onClick={() => route('/pomodoro')}>Open</button>
                </div>


                <div className="card">
                    <h3>Flashcards</h3>
                    <p>Revise smarter with spaced repetition.</p>
                    <button onClick={() => route('/flashcards')}>Open</button>
                </div>

                <div className="card">
                    <h3>Notes Section</h3>
                    <p>Make Your own custome notes.</p>
                    <button onClick={() => route('/notes')}>Open</button>
                </div>

                <div className="card">
                    <h3>Time Scheduler</h3>
                    <p>Plan your whole day and manage your time.</p>
                    <button onClick={() => route('/timeplaner')}>Open</button>
                </div>

                <div className="card">
                    <h3>Pomodoro Timer</h3>
                    <p>Boost your focus using time blocks.</p>
                    <button onClick={() => route('/pomodoro')}>Open</button>
                </div>
                
                <div className="card">
                    <h3>Pomodoro Timer</h3>
                    <p>Boost your focus using time blocks.</p>
                    <button onClick={() => route('/pomodoro')}>Open</button>
                </div>
            </div>
        </div>
    )
}

export default Features;