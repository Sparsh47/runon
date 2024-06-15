import React, { useState } from "react";

interface Variant {
  size: string;
  color: string;
  price: string;
  available: string;
}

interface GroupedVariantsProps {
  variants: Variant[];
  updateVariant: (index: number, updatedVariant: Variant) => void;
}

const GroupedVariants: React.FC<GroupedVariantsProps> = ({
  variants,
  updateVariant,
}) => {
  const [groupBy, setGroupBy] = useState<"size" | "color">("size");

  const grouped = variants.reduce(
    (acc: { [key: string]: Variant[] }, variant) => {
      const key = variant[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(variant);
      return acc;
    },
    {}
  );

  return (
    <div className="p-4 border border-gray-300 rounded-md mb-4">
      <select
        onChange={(e) => setGroupBy(e.target.value as "size" | "color")}
        value={groupBy}
        className="border p-2 mb-4"
      >
        <option value="size">Size</option>
        <option value="color">Color</option>
      </select>
      {Object.keys(grouped).map((key) => (
        <div key={key} className="mb-4">
          <h3 className="text-lg font-medium mb-2">{key}</h3>
          {grouped[key].map((variant, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={variant.price}
                onChange={(e) =>
                  updateVariant(index, { ...variant, price: e.target.value })
                }
                placeholder="Price"
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                value={variant.available}
                onChange={(e) =>
                  updateVariant(index, {
                    ...variant,
                    available: e.target.value,
                  })
                }
                placeholder="Available"
                className="border p-2 rounded-md"
              />
            </div>
          ))}
        </div>
      ))}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </div>
  );
};

export default GroupedVariants;
