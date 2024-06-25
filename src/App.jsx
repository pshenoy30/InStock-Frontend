import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouses from "./pages/warehouses/warehouses";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
