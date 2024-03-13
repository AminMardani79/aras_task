import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./checkbox.module.scss";

function Checkbox({ onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    onChange(!checked);
    setChecked((prev) => !prev);
  };

  return (
    <div className={styles.checkbox}>
      <input type="checkbox" value={checked} onChange={handleChange} />
      {checked ? "عدم نمایش" : "نمایش"}
    </div>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  onChange: PropTypes.func,
};
