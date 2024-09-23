import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from './ItemService';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(response => setItems(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteItem(id).then(() => getItems().then(response => setItems(response.data)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Delete</h1>
      
      <ul className="list-group">
        {items.map(item => (  // Asegúrate de que 'item' esté aquí
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong> - {item.description}
            </div>
            <div>
              <Link to={`/update/${item.id}`} className="btn btn-warning btn-sm me-2">Update</Link>
              <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
