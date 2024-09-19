import React, { useState, useEffect } from 'react';
import { getItems, createItem, updateItem, deleteItem } from './ItemService';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
      } catch (err) {
        setError('Error fetching items');
      }
    };

    fetchItems();
  }, []);

  const handleCreate = async () => {
    try {
      await createItem(newItem);
      setNewItem({ name: '', description: '' });
      const response = await getItems();
      setItems(response.data);
    } catch (err) {
      setError('Error creating item');
    }
  };

  const handleUpdate = async (id, updatedItem) => {
    try {
      if (!updatedItem.name || !updatedItem.description) {
        setError('Name and Description are required');
        return;
      }
  
      await updateItem(id, updatedItem);
      
      const response = await getItems();
      setItems(response.data);
  
      setError(null);
    } catch (err) {
      // Manejo de errores detallado
      console.error('Error details:', err.response ? err.response.data : err.message);
      setError('Error updating item');
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      const response = await getItems();
      setItems(response.data);
    } catch (err) {
      setError('Error deleting item');
    }
  };

  return (
    <div className="app-container">
      <h1 className="header">CRUD Application</h1>
      {error && <p className="error">{error}</p>}
      <div className="item-list">
        {items.length > 0 ? (
          <ul>
            {items.map(item => (
              <li key={item.id} className="item">
                <span className="item-name">{item.name}</span> - <span className="item-description">{item.description}</span>
                <button className="btn btn-update" onClick={() => handleUpdate(item.id, { name: 'Updated', description: 'Updated' })}>Update</button>
                <button className="btn btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items available.</p>
        )}
      </div>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={e => setNewItem({ ...newItem, name: e.target.value })}
          className="input"
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={e => setNewItem({ ...newItem, description: e.target.value })}
          className="input"
        />
        <button className="btn btn-add" onClick={handleCreate}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
