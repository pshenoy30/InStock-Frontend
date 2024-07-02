import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;
async function getInventoriesData() {
  try {
    const response = await axios.get(`${API_URL}/inventory`);
    return response.data;

  } catch (err) {
    console.log(err);
  }
}
export default getInventoriesData;
