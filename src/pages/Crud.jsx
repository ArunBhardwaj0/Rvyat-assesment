import { useState } from "react";

const Crud = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (!text) return;
    setItems([...items, { id: Date.now(), text }]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="font-bold mb-2">
        Total Records: {items.length}
      </h2>

      <div className="flex mb-4">
        <input
          className="border p-2 mr-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={addItem}
          className="bg-blue-600 text-white px-4"
        >
          Add
        </button>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border p-2 mb-2"
        >
          {item.text}
          <button
            onClick={() => deleteItem(item.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Crud;
