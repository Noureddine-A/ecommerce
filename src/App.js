import "./App.css";

import { useSelector } from "react-redux";

import Navbar from "./components/header/Navbar";
import Product from "./components/body/Product";
import ProductModal from "./components/UI/ProductModal";

function App() {
  const modalClosed = useSelector(state => state.modal.close);

  return (
    <div className="app__container">
        <section id="header">
          <Navbar />
        </section>
        <section id="body">
          <Product />
        </section>
      {modalClosed &&<ProductModal/>}
    </div>
  );
}

export default App;
