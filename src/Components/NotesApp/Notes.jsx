import { Link } from 'react-router-dom';
import './Notes.css';
import Editor from './Editor';

const Notes = () => {
  return (
    <div className='notes_container'>

      <nav className="notes-navbar">
        <div className="navbar-content">
          <Link to="/" className="logo">
            The Students App
          </Link>
        </div>
      </nav>

      <div className="notes_content">
        <h2 className='notes_heading'>Notes Section</h2>
        <Editor />
        {/* <button className='notes_btn'>Create Notes</button> */}
      </div>
    </div>
  )
}

export default Notes;