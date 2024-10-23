import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './xpStyle.css'; 

function MainMenu() {
  return (
    <div className="xp-container">
      <div className="xp-window">
        <div className="xp-header">
          <h2>CRUD</h2>
        </div>
        <div className="xp-content">
          <p>Select an action:</p>
          <div className="xp-buttons">
            <Link to="/create" className="btn xp-btn-create">
              Create
            </Link>
            <Link to="/update/22" className="btn xp-btn-update">
              Update
            </Link>
            <Link to="/" className="btn xp-btn-delete">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
