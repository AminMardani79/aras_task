import { useState } from "react";

export const useCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (value) => {
    setChecked(value);
  };

  return { checked, handleChange };
};
