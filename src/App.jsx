import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage.jsx";
import Warehouse from "./pages/Warehouse/Warehouse.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
import InventoryItem from "./pages/InventoryItem/InventoryItem.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import HomePage from "../src/pages/Homepage/Homepage.jsx";
import Warehouse from "../src/pages/Warehouse/Warehouse.jsx";
// import Inventory from "../src/pages/Inventory/Inventory.jsx";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse.jsx";

import InventoryItem from "../src/pages/InventoryItem/InventoryItem.jsx";
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage.jsx";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/warehouse/:warehouseId" element={<Warehouse />} />
        <Route path="/inventories" element={<Inventory />} />
        <Route path="/inventories/:inventoryId" element={<InventoryItem />} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}
        <Route path="/inventory/:inventoryId" element={<InventoryItem />} />
        <Route path="/add-warehouse" element={<AddWarehouse />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
