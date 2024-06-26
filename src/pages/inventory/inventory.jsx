import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";

export default function Inventory() {
  return (
    <>
      <Header />
      <main>
        <SearchNav />
        <InventoryList />
      </main>
      <Footer />
    </>
  )
}
