import { useMemo, useState } from "react";

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const [searchQuery, setSearchQuery] = useState("");

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    // Filter based on search query
    if (searchQuery) {
      sortableItems = sortableItems.filter((item) =>
        item.name.includes(searchQuery)
      );
    }

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig, searchQuery]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return {
    items: sortedItems,
    requestSort,
    sortConfig,
    searchQuery,
    handleSearchChange,
  };
};
