import axios from 'axios';

const BASE_URL_API = "http://localhost:8080";

async function deleteInventoryDetails (inventoryId) {
    try {
        await axios.delete(BASE_URL_API+"/inventory/"+inventoryId);
    } catch (error) {
        console.log("Couldn't retrieve the data" , error);
    }
}

export default deleteInventoryDetails;