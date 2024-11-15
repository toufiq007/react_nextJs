import { useEffect, useRef } from "react";
import { useState } from "react";
import Post from "./Post";

const productsPerPage = 10;
const Posts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          page * productsPerPage
        }`
      );
      const data = await response.json();
      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prev) => prev + 1);
      }
    };

    const onIntersecObserver = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };
    const observer = new IntersectionObserver(onIntersecObserver);

    // observe the item
    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [hasMore, page]);

  return (
    <div>
      {/*  loading product */}
      {products.length > 0 &&
        products.map((post) => <Post key={post.id} imgUrl={post.thumbnail} />)}

      {/* this is for api call */}
      {hasMore && <div ref={loaderRef}>loading more products...</div>}
    </div>
  );
};

export default Posts;
