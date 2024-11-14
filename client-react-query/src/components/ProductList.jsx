import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// this function is for loading data
const retriveProducts = async () => {
  const response = await axios.get(`http://localhost:3000/products`);
  return response.data;
};

const ProductList = () => {
  const {
    data: productsList,
    error,
    isLoading,
  } = useQuery({ queryKey: ["products"], queryFn: retriveProducts });

  if (isLoading) return <div>fetching data...</div>;
  if (error) return <div>an error occured {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {productsList &&
          productsList.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border rounded-sm"
            >
              <img
                className="object-cover h-64 w-96 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl my-3">{product.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
