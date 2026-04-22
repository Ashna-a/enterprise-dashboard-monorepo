import { ReactNode } from "react";

interface ColumnDef<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  className?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
  rowKey: keyof T | ((row: T) => string | number);
}
