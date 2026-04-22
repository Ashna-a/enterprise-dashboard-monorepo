import { ReactNode } from "react";
import { TableProps } from "../types";

export function Table<T>({ data, columns, onRowClick, rowKey }: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-surface-elevated bg-surface-default">
      <table className="w-full text-left border-collapse">
        <thead className="bg-surface-subtle text-text-secondary uppercase text-xs font-semibold">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className={`px-6 py-4 ${col.className}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-elevated">
          {data?.map((row) => {
            const key =
              typeof rowKey === "function"
                ? rowKey(row)
                : (row[rowKey] as string | number);
            return (
              <tr
                key={key}
                onClick={() => onRowClick?.(row)}
                className={`hover:bg-surface-subtle transition-colors ${onRowClick ? "cursor-pointer" : ""}`}
              >
                {columns.map((col, index) => (
                  <td
                    key={index}
                    className="px-6 py-4 text-text-primary text-sm"
                  >
                    {typeof col.accessor === "function"
                      ? col.accessor(row)
                      : (row[col.accessor] as ReactNode)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
