import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [productId, setProductId] = useState(1);

  return (
    <div className="flex gap-3 px-2 py-2">
      <AddProduct />
      <ProductList setProductId={setProductId} />
      <ProductDetails id={productId} />
    </div>
  );
}

export default App;
