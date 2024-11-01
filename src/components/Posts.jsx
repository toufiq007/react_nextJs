import { useFetchData } from "../hooks/useFetchData";

const Posts = () => {
  const apiLink = `https://jsonplaceholder.typicode.com/posts`;
  const { data, isLoading } = useFetchData(apiLink);
  console.log(data, "this is the data from jsonplaceholder");
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      {data?.map((item) => (
        <p key={item?.id}>{item?.title}</p>
      ))}
    </div>
  );
};

export default Posts;
