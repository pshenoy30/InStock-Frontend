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


// //

// // const [isLoading, setIsLoading] = useState(true);
// // const [error, setError] = useState(false);
// // const [inventoriesData, setInventoriesData] = useState(null);
// export async function getInventoriesData() {
// // const getInventoriesData = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL_API}/inventory`);
//     //   setInventoriesData(response.data);
//     //   console.log(response.data);
//       return response.data;
//     //   setIsLoading(false);
//     } catch (err) {
//       console.log(err);
//     //   setError(true);
//     }
//   }

// //   useEffect(() => {
// //     getInventoriesData();
// //   }, []);

// //   if (isLoading) {
// //     return <p> Loading inventory data... </p>;
// //   }

// //   if (error) {
// //     return <p> Something went wrong. Please try refreshing the page</p>;
// //   }
