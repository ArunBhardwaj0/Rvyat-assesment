import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
} from "../features/products/productSlice";
import { logout } from "../features/auth/authSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s.products);
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addHandler = () => {
    if (!title) return;
    dispatch(
      addProduct({
        id: Date.now(),
        title,
        price: 100,
      })
    );
    setTitle("");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        
      </div>

      <p className="mb-2">Total Records: {products.length}</p>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded w-60"
          placeholder="New Product"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addHandler}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between border p-2 rounded"
          >
            {p.title}
            <button
              onClick={() => dispatch(deleteProduct(p.id))}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
