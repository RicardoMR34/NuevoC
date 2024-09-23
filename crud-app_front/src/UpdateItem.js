import React, { useState, useEffect } from 'react';
import { getItems, getItem, updateItem } from './ItemService';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateItem() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
      } catch (err) {
        console.error('Error loading items:', err);
      }
    };

    const fetchItem = async () => {
      try {
        const response = await getItem(id);
        setUpdatedItem({
          name: response.data.name || '',
          description: response.data.description || ''
        });
      } catch (err) {
        console.error('Error loading item:', err);
        setError('Error loading item');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
    fetchItem();
  }, [id]);

  const handleUpdate = async () => {
    const itemToUpdate = { ...updatedItem, id };
    try {
      await updateItem(id, itemToUpdate);
      navigate('/');
    } catch (err) {
      console.error('Error updating item:', err);
      setError('Error updating item');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Update Item</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button className="btn btn-primary" onClick={() => navigate(`/update/${item.id}`)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Edit Selected Item</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={updatedItem.name}
          onChange={e => setUpdatedItem({ ...updatedItem, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={updatedItem.description}
          onChange={e => setUpdatedItem({ ...updatedItem, description: e.target.value })}
        />
      </div>
      <button onClick={handleUpdate} className="btn btn-success">Update</button>
    </div>
  );
}

export default UpdateItem;
