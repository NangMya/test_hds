"use client";
import { useState, useMemo } from "react";

interface UsePaginationSearchOptions<T> {
  data: T[];
  pageSize?: number;
  searchField?: keyof T; 
}

export default function usePaginationSearch<T>({
  data,
  pageSize = 10,
  searchField,
}: UsePaginationSearchOptions<T>) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // filter
  const filtered = useMemo(() => {
    if (!search) return data;
    return data.filter(item => {
      const value = searchField
        ? String(item[searchField])
        : JSON.stringify(item);
      return value.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, data, searchField]);

  // paginate
  const totalPages = Math.ceil(filtered.length / pageSize);
  const currentData = filtered.slice((page - 1) * pageSize, page * pageSize);

  return {
    search,
    setSearch,
    page,
    setPage,
    totalPages,
    currentData,
    filteredCount: filtered.length,
  };
}
