import axios from 'axios';

const API_URL = 'http://localhost:5239/api/items';

const getItems = () => axios.get(API_URL);
const createItem = (item) => axios.post(API_URL, item);
const updateItem = (id, item) => {
    return axios.put(`${API_URL}/${id}`, item, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
const getItem = (id) => axios.get(`${API_URL}/${id}`); // Asegúrate de usar API_URL aquí

export { getItems, createItem, updateItem, deleteItem, getItem }; // Exporta todo en una sola línea
