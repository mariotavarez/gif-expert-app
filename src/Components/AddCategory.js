import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChage = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // Previene el submit al inicio del componente
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      // Inserta la nueva categoria
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChage} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
