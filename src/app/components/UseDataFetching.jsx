const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return res.json();
};

const UseDataFetching = async () => {
  const posts = await getPosts();
  console.log(posts); // log in server
  return (
    <div>
        <h2 className="text-3xl text-center font-bold">Learn Data fetching</h2>
      {posts.map((post) => (
        <div className="p-2 bg-blue-50 text-black my-5 rounded" key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UseDataFetching;
