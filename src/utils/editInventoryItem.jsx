import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

async function editInventoryItem({id}) {
  try {
    const response = await axios.put(`${API_URL}/edit-inventory/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default editInventoryItem;
