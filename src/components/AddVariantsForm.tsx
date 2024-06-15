import React, { useState } from "react";

interface AddVariantsFormProps {
  addVariant: (variant: {
    color: string;
    size: string;
    price: string;
    available: string;
  }) => void;
}

const AddVariantsForm: React.FC<AddVariantsFormProps> = ({ addVariant }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleAddVariant = () => {
    addVariant({ color, size, price: "", available: "" });
    setColor("");
    setSize("");
  };

  return (
    <div className="p-4 border border-gray-300 text-black rounded-md mb-4">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Color
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
          <button
            onClick={handleAddVariant}
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
          >
            Add Color
          </button>
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Size
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
          <button
            onClick={handleAddVariant}
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
          >
            Add Size
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVariantsForm;
