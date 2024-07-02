import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

async function getInventoriesItemData (inventoryId) {
    try {
        const response = await axios.get(`${API_URL}/inventory/${inventoryId}`);
        return response.data;
    } catch (err) {
        console.log("Couldn't fetch the data", err);
    }
}

export default getInventoriesItemData;