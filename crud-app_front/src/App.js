import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './ItemList';
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
            <FiPlusCircle size={40} />
            <span>Create</span>
          </Link>
          <Link to="/" className="menu-item">
            <FiTrash2 size={40} />
            <span>Delete</span>
          </Link>
          <Link to="/update" className="menu-item">
            <FiEdit2 size={40} />
            <span>Update</span>
          </Link>
        </nav>

        <Routes>
          <Route path="/create" element={<CreateItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
