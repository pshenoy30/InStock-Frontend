import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/Homepage/Homepage.jsx";
import Wearhouse from "../pages/Wearhouse/Wearhouse.jsx";
import Inventory from "../pages/Inventory/Inventory.jsx";
import InventoryItem from "../pages/InventoryItem/InventoryItem.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx"
import './App.scss'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wearhouse/:wearhouseId" element={<Wearhouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:inventoryId" element={<InventoryItem />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
