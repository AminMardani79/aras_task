import PropTypes from "prop-types";
import { useSortableData } from "../../hooks/useSortableData";
import SearchInput from "../../ui-components/searchInput/SearchInput";

import styles from "./table.module.scss";
import Checkbox from "../../ui-components/checkbox/Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";
import { formatter } from "../../helper/functions";

function ImpactIndexTable({ items: tableItems }) {
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
                شاخص
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("time")}
                className={getClassNamesFor("time")}
              >
                زمان انتشار
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("count")}
                className={getClassNamesFor("count")}
              >
                مقدار
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("change")}
                className={getClassNamesFor("change")}
              >
                تغییر
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("percent")}
                className={getClassNamesFor("percent")}
              >
                درصد
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("min")}
                className={getClassNamesFor("min")}
              >
                کمترین
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("max")}
                className={getClassNamesFor("max")}
              >
                بیشترین
              </button>
            </th>
          </tr>
        </thead>
        {checked && (
          <tbody className={styles.tableBody}>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.time}</td>
                <td>{item.count}</td>
                <td>{item.change}</td>
                <td>{item.percent}</td>
                <td>{formatter(item.min, 1)}</td>
                <td>{formatter(item.max, 0)}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default ImpactIndexTable;

ImpactIndexTable.propTypes = {
  sortConfig: PropTypes.object,
  requestSort: PropTypes.func,
  items: PropTypes.array,
};
