import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl my-2">Add a Product</h2>
      {/* {mutation.isSuccess && <p>Product Added!</p>} */}

      <form className="flex flex-col" onSubmit={submitData}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product title"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product description"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product price"
        />
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
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
