import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

async function getInventoryById(id) {
  try {
    const url = `${API_URL}/inventory/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default getInventoryById;
