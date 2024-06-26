import SearchNav from "../../components/SearchNav/SearchNav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Inventory.scss";
import List from "../../components/List/List";

export default function Inventory() {
  return (
    <>
      <Header />
      <main>
        <SearchNav />
        <List />
      </main>
      <Footer />
    </>
  )
}
