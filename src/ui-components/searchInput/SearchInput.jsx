import styles from "./searchInput.module.scss";
import PropTypes from "prop-types";

function SearchInput({ searchQuery, handleSearchChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="جستجو ..."
    />
  );
}

export default SearchInput;

SearchInput.propTypes = {
  searchQuery: PropTypes.string,
  handleSearchChange: PropTypes.func,
};
