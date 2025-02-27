'use client';

import { FC } from 'react';

interface Column {
  header: string;
  accessor: string;
}

interface DataTableProps {
  title?: string;
  data: Record<string, string | number>[];
  columns: Column[];
}

const DataTable: FC<DataTableProps> = ({ title, data, columns }) => {
  return (
    <div className="overflow-x-auto">
      {title && (
        <h3 className="text-base font-medium text-gray-900 mb-4">{title}</h3>
      )}
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    {column.header}
                  </th>
                ))}
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.length > 0 ? (
                data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button
                        type="button"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="py-4 px-3 text-center text-sm text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable; 