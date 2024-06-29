import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

async function getInventoryById(id) {
  try {
    const response = await axios.get(`${API_URL}/inventory/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default getInventoryById;