import axios from "axios";
import { useState, useEffect } from "react";
import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryList from "../../components/InventoryList/InventoryList";
import "./Inventory.scss";

function Inventory() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inventoriesData, setInventoriesData] = useState(null);

  const getInventoriesData = async () => {
    try {
      const response = await axios.get(`${API_URL}/inventory`);
      setInventoriesData(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    getInventoriesData();
  }, []);

  if (isLoading) {
    return <p> Loading inventory data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  return (
    <>
      <Header />
      <main>
        <SearchNav />
        <InventoryList inventoryData={inventoriesData} />
      </main>
      <Footer />
    </>
  );
}

export default Inventory;
