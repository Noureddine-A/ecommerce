import "./App.css";

import Navbar from "./components/header/Navbar";
import Product from "./components/body/Product";

function App() {
  return (
    <div className="app__container">
      <section id="header">
        <Navbar />
      </section>
      <section id="body">
        <Product />
      </section>
    </div>
  );
}

export default App;
