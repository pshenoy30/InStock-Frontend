// getWarehouseById.jsx
export const BASE_URL_API = "http://localhost:8080";

const getWarehouseById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL_API}/warehouse/${id}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching warehouse by ID:", error);
        throw error;
    }
};

export default getWarehouseById;
