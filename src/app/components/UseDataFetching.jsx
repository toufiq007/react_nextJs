const getPosts = async () => {
  // this is our own api in the nextjs backend server --> api/blog/posts --> route
  const res = await fetch(`http://localhost:3000/api/blog/posts`);
  return res.json();
};

const UseDataFetching = async () => {
  const posts = await getPosts();
  console.log(posts); // log in server
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">{posts?.message}</h2>
      {posts?.data?.map((post) => (
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
