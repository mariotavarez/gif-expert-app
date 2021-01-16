import React, { useState } from "react";
// Components
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["One Punch Man", "Samurai X", "Dragon Ball Super"];
  const [categories, setCategories] = useState(["One Punch Man"]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "Kimetzy no Yaiba"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
