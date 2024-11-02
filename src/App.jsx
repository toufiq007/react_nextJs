import { useState } from "react";
import Page from "./components/Page";
import { ShoppingCartContext } from "./context/shoppingContext";

const items = [
  {
    id: 1,
    title: "product 1",
  },

  {
    id: 2,
    title: "product 2",
  },
];

const App = () => {
  const [page, setPage] = useState("/home");
  const [cartItems, setCartItems] = useState(items);
  const handlePageChange = () => {
    setPage(page === "/home" ? "/cart" : "/home");
  };
  const handleAddProduct = () => {
    setCartItems((prev) => [...prev, { id: 3, title: "product 3" }]);
  };
  return (
    <div>
      <ShoppingCartContext.Provider value={items}>
        <Page
          url={page}
          onPageChange={handlePageChange}
          cartItems={cartItems}
          onAddProduct={handleAddProduct}
        />
      </ShoppingCartContext.Provider>
    </div>
  );
};

export default App;
