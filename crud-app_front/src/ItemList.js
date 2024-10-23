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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center">Item List</h1>
      </div>
      
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td><strong>{item.name}</strong></td>
              <td>{item.description}</td>
              <td>
                <Link to={`/update/${item.id}`} className="btn btn-warning btn-sm me-2">
                  <i className="bi bi-pencil-square"></i> Update
                </Link>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                  <i className="bi bi-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
