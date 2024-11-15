const AddProduct = () => {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl my-2">Add a Product</h2>
      {/* {mutation.isSuccess && <p>Product Added!</p>} */}

      <form className="flex flex-col" onSubmit={submitData}>
        <input
          type="text"
          name="title"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product title"
        />
        <textarea
          name="description"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product description"
        />

        <input
          type="number"
          name="price"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product price"
        />
        <input
          type="text"
          name="thumbnail"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product thumbnail URL"
        />

        <button
          type="submit"
          className="bg-black m-auto text-white p-1 rounded-md px-4"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
