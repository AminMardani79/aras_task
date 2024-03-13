import PropTypes from "prop-types";
import { useSortableData } from "../../hooks/useSortableData";
import SearchInput from "../../ui-components/searchInput/SearchInput";

function SelectedIndicatorTable({ items: tableItems }) {
  const { items, requestSort, sortConfig, searchQuery, handleSearchChange } =
    useSortableData(tableItems);
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
      <table>
        <caption>شاخص های منتخب</caption>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("price")}
                className={getClassNamesFor("price")}
              >
                Price
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("stock")}
                className={getClassNamesFor("stock")}
              >
                In Stock
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SelectedIndicatorTable;

SelectedIndicatorTable.propTypes = {
  items: PropTypes.array,
};
