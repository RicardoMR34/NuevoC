import axios from 'axios';

const API_URL = 'http://localhost:5239/api/items'; 
const getItems = () => axios.get(API_URL);
const createItem = (item) => axios.post(API_URL, item);
const updateItem = (id, item) => axios.put(`${API_URL}/${id}`, item);
const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);


export { getItems, createItem, updateItem, deleteItem };
