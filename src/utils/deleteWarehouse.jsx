import axios from 'axios';

const BASE_URL_API = "http://localhost:8080";

async function deleteWarehouseDetails (warehouseId) {
    try {
        await axios.delete(BASE_URL_API+"/warehouse/"+warehouseId);
    } catch (error) {
        console.log("Couldn't retrieve the data" , error);
    }
}

export default deleteWarehouseDetails;
