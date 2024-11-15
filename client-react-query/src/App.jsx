import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [productId, setProductId] = useState(null);

  return (
    <div className="flex gap-3">
      <ProductList setProductId={setProductId} />
      <ProductDetails id={productId || 1} />
    </div>
  );
}

export default App;
