import React from "react";

interface Variant {
  size: string;
  color: string;
  price: string;
  available: string;
}

interface VariantsTableProps {
  variants: Variant[];
}

const VariantsTable: React.FC<VariantsTableProps> = ({ variants }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-700 px-4 py-2">Size</th>
            <th className="border border-gray-700 px-4 py-2">Color</th>
            <th className="border border-gray-700 px-4 py-2">Price</th>
            <th className="border border-gray-700 px-4 py-2">Available</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, index) => (
            <tr key={index} className="bg-white text-gray-900">
              <td className="border border-gray-700 px-4 py-2">
                {variant.size}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                {variant.color}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                {variant.price}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                {variant.available}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VariantsTable;
