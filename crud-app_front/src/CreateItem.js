import React, { useState } from 'react';
import { createItem } from './ItemService';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateItem() {
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  const handleCreate = () => {
    createItem(newItem).then(() => {
      setNewItem({ name: '', description: '' });
      navigate('/');
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Create Item</h1>
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={newItem.name}
              onChange={e => setNewItem({ ...newItem, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={newItem.description}
              onChange={e => setNewItem({ ...newItem, description: e.target.value })}
            />
          </div>
          <button onClick={handleCreate} className="btn btn-success w-100">Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default CreateItem;
