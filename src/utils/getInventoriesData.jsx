import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
// const [isLoading, setIsLoading] = useState(true);
// const [error, setError] = useState(false);
// const [inventoriesData, setInventoriesData] = useState(null);
async function getInventoriesData() {
  try {
    const response = await axios.get(`${API_URL}/inventory`);
    //   setInventoriesData(response.data);
    console.log(response.data);
    return response.data;
    //   setIsLoading(false);
  } catch (err) {
    console.log(err);
    //   setError(true);
  }
}
export default getInventoriesData;


//   useEffect(() => {
//     getInventoriesData();
//   }, []);

//   if (isLoading) {
//     return <p> Loading inventory data... </p>;
//   }

//   if (error) {
//     return <p> Something went wrong. Please try refreshing the page</p>;
//   }