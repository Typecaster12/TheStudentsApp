import { Link } from "react-router-dom";
import './Layout.css';

const PomodoroNav = () => {
    return (
        <nav className="pomodoro-navbar">
            <div className="logo">
                <Link to="/" className="nav-logo">The Students App</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/pomodoro/work" className="nav-link">Work Timer</Link></li>
                <li><Link to="/pomodoro/short" className="nav-link">Short Break</Link></li>
                <li><Link to="/pomodoro/long" className="nav-link">Long Break</Link></li>
            </ul>
        </nav>
    );
};

export default PomodoroNav;
