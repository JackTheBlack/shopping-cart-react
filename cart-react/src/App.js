import "./App.css";
import PRODUCTS from "./components/products";

function App({ products }) {
  return (
    <div className="App">
      <section>
        <PRODUCTS products={products} />
      </section>
    </div>
  );
}

export default App;
