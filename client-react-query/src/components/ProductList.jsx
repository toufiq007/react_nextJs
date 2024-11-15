import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// updated link for pagination
// const link = `http://localhost:3000/products?_page=2&_per_page=6`
// this function is for loading data
const retriveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=6`
  );
  return response.data;
};

const ProductList = ({ setProductId }) => {
  const [page, setPage] = useState(1);
  const {
    data: productsList,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retriveProducts,
    // retry: false, // try to fetch data again
    // refetchInterval:1000 // fetch data after some times of interval
  });

  if (isLoading) return <div>fetching data...</div>;
  if (error) return <div>an error occured {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {productsList &&
          productsList?.data?.map((product) => (
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
              <button
                onClick={() => setProductId(product.id)}
                className="bg-purple-500 px-4 my-2 rounded text-white hover:bg-purple-800 cursor-pointer"
              >
                see details
              </button>
            </li>
          ))}
      </ul>
      <div>
        {productsList.prev && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(productsList.prev)}
          >
            Prev
          </button>
        )}
        {productsList.next && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(productsList.next)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
