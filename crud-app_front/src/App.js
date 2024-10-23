import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './ItemList';
import MainMenu from './MainMenu';
import CreateItem from './CreateItem'; // Pantalla para crear
import UpdateItem from './UpdateItem'; // Pantalla para actualizar
import { FiPlusCircle, FiEdit2, FiTrash2 } from 'react-icons/fi'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="menu">
          <Link to="/create" className="menu-item">
            <FiPlusCircle size={30} />
            <span> Create </span>
          </Link>
          <Link to="/" className="menu-item">
            <FiTrash2 size={30} />
            <span> Delete </span>
          </Link>
          <Link to="/update/22" className="menu-item">
            <FiEdit2 size={30} />
            <span> Update </span>
          </Link>
          <Link to="/menu" className="menu-item"> 
          <FiPlusCircle size={30} />
            <span> Main Menu </span>
          </Link>
        </nav>

        <Routes>
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/create" element={<CreateItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
