import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/Homepage/Homepage.jsx";
// import Warehouse from "../src/pages/Warehouse/Warehouse.jsx";
import Inventory from "../src/pages/Inventory/Inventory.jsx";
import AddWarehouse from "../src/pages/AddWarehouse/AddWarehouse.jsx";
import InventoryItem from "../src/pages/InventoryItem/InventoryItem.jsx";
import InventoryByWarehouse from "./pages/InventoryByWarehouse/InventoryByWarehouse.jsx";
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage.jsx";
import "./App.scss";
import EditWarehouse from "../src/pages/EditWarehouse/EditWarehouse.jsx";
import EditInventory from "../src/pages/EditInventory/EditInventory.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventories" element={<Inventory />} />
        <Route path="/inventories/:inventoryId" element={<InventoryItem />} />
        <Route path="/warehouse/:warehouseId" element={<InventoryByWarehouse />} />
        <Route path="/edit-inventory/:inventoryId" element={<EditInventory />} /> 
        <Route path="/add-warehouse" element={<AddWarehouse />} />
        <Route path="/edit-warehouse/:warehouseId" element={<EditWarehouse />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;