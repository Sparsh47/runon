"use client";

import React, { useState } from "react";
import VariantsTable from "../components/VariantsTable";
import AddVariantsForm from "../components/AddVariantsForm";
import GroupedVariants from "../components/GroupedVariants";

interface Variant {
  size: string;
  color: string;
  price: string;
  available: string;
}

const Home: React.FC = () => {
  const [variants, setVariants] = useState<Variant[]>([]);

  const addVariant = (variant: Variant) => {
    setVariants([...variants, variant]);
  };

  const updateVariant = (index: number, updatedVariant: Variant) => {
    const newVariants = [...variants];
    newVariants[index] = updatedVariant;
    setVariants(newVariants);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Variants</h1>
      <VariantsTable variants={variants} />
      <AddVariantsForm addVariant={addVariant} />
      <GroupedVariants variants={variants} updateVariant={updateVariant} />
    </div>
  );
};

export default Home;
