/* eslint-disable react/prop-types */
import {
  useContext,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import { logVisit } from "../utils/logVisit";
// import { ShoppingCartContext } from "../context/shoppingContext";

const Page = ({ url, onPageChange, cartItems, onAddProduct }) => {
  //   const items = useContext(ShoppingCartContext);

  const onVisit = useEffectEvent((url) => {
    logVisit(url, cartItems.length);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]);
  return (
    <div>
      <h2>this is page</h2>
      <button onClick={onPageChange}>change page</button>
      <button onClick={onAddProduct}>add product</button>
      <h2>the user is added {cartItems.length} items in the cart</h2>
    </div>
  );
};

export default Page;
