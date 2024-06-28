import axios from 'axios';

const BASE_URL_API = "http://localhost:8080";

const getWarehouseById = async (warehouseId) => {
    try {
      const response = await axios.get(BASE_URL_API+"/warehouse/"+warehouseId);
      return response.data;
    } catch (error) {
      console.log("Couldn't fetch the data", error);
    }
}

export default getWarehouseById;