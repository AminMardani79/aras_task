import PropTypes from "prop-types";
import { useSortableData } from "../../hooks/useSortableData";
import SearchInput from "../../ui-components/searchInput/SearchInput";
import styles from "./table.module.scss";
import Checkbox from "../../ui-components/checkbox/Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";

function TransactionSymbolTable({ items: tableItems }) {
  const { items, requestSort, sortConfig, searchQuery, handleSearchChange } =
    useSortableData(tableItems);
  const { checked, handleChange } = useCheckbox();

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div>
      <SearchInput
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <table className={styles.table}>
        <caption className={styles.tableCaption}>
          <span>شاخص های منتخب </span>
          <Checkbox onChange={handleChange} />
        </caption>
        <thead className={styles.tableHead}>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                نماد
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("final")}
                className={getClassNamesFor("final")}
              >
                قیمت پایانی
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("effect")}
                className={getClassNamesFor("effect")}
              >
                تاثیر
              </button>
            </th>
          </tr>
        </thead>
        {checked && (
          <tbody className={styles.tableBody}>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.final}</td>
                <td>{item.effect}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default TransactionSymbolTable;

TransactionSymbolTable.propTypes = {
  sortConfig: PropTypes.object,
  requestSort: PropTypes.func,
  items: PropTypes.array,
};
