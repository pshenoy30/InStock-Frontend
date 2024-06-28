import axios from 'axios';

const BASE_URL_API = "http://localhost:8080";

async function getAllWarehouseDetails () {
    try {
        const response = await axios.get(BASE_URL_API+"/warehouse/");
        return response.data;
    } catch (error) {
        console.log("Couldn't retrieve the data" , error);
    }
}

export default getAllWarehouseDetails;
