import clsx from "clsx";

// Define the structure for rows in the table
interface IRow extends Record<string, any> {}

// Define the structure for columns in the table
interface IColumn {
  // The property name of the column in the row data
  name: string;
  // The display title of the column
  title: string;
  // Optional alignment of the column content
  align?: "left" | "center" | "right";
  // Optional width of the column
  width?: number;
  // Optional grow state of the column
  grow?: boolean;
  // Optional custom rendering function for cell content
  render?: (row: IRow) => React.ReactNode;
}

// Props for TableHead component
interface TableHeadProps {
  columns: IColumn[];
}

// Props for TableRow component
interface TableRowProps {
  columns: IColumn[];
  row: IRow;
}

// Props for TableBody and Table components
interface TableProps {
  columns: IColumn[];
  rows: IRow[];
}

// Component to render the table header
function TableHead({ columns }: TableHeadProps) {
  return (
    <div className="flex items-center rounded-t-xl border-t border-x border-secondary-border bg-white">
      {columns.map((column: IColumn, index: number) => (
        <div
          key={index}
          style={{ width: column.width }}
          className={clsx(
            "shrink-0 py-3 px-6 flex font-bold text-center text-xs font-inter leading-5 text-primary-text/80 overflow-hidden",
            column.align === "center"
              ? "justify-center"
              : column.align === "right"
              ? "justify-end"
              : "",
            { grow: column.grow }
          )}
        >
          {column.title}
        </div>
      ))}
    </div>
  );
}

// Component to render a table row, with expandable functionality
function TableRow({ columns, row }: TableRowProps) {
  return (
    <div className="flex items-center border-t border-secondary-border text-primary-text">
      {columns.map((column: IColumn, index: number) => (
        <div
          key={index}
          style={{ width: column.width }}
          className={clsx(
            "shrink-0 py-3 px-6  flex text-sm overflow-hidden",
            column.align === "center"
              ? "justify-center"
              : column.align === "right"
              ? "justify-end"
              : "",
            { grow: column.grow }
          )}
        >
          {column.render ? (
            column.render(row)
          ) : (
            <p
              className={clsx(
                "overflow-x-hidden text-ellipsis text-sm",
                column.align === "center"
                  ? "text-center"
                  : column.align === "right"
                  ? "text-right"
                  : ""
              )}
            >
              {row[column.name]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// Component to render the table body
function TableBody({ rows, columns }: TableProps) {
  return (
    <div className="grow flex flex-col border-x border-b border-secondary-border rounded-b-xl overflow-y-auto bg-white">
      {rows.map((row: IRow, index: number) => (
        <TableRow key={index} columns={columns} row={row} />
      ))}
    </div>
  );
}

// Component to render the entire table, including head and body
function Table({ rows, columns }: TableProps) {
  return (
    <div className="grow flex flex-col overflow-y-auto">
      <TableHead columns={columns} />
      <TableBody columns={columns} rows={rows} />
    </div>
  );
}

export default Table;
export { type IColumn, type IRow };
