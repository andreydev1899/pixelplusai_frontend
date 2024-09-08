import Table, { IColumn, IRow } from "@/components/forms/Table";

const columns: IColumn[] = [
  {
    name: "email",
    title: "Email",
    width: 300,
    render: (row: IRow) => (
      <p className="line-clamp-1 overflow-x-hidden text-ellipsis text-sm">
        {row.email}
      </p>
    ),
  },
  {
    name: "role",
    title: "Role",
    width: 200,
  },
];

const rows: IRow[] = [
  {
    email: "andrewyuan127@gmail.com",
    role: "Admin",
  },
  {
    email: "codedarkhorse1899@gmail.com",
    role: "Agency Admin",
  },
  {
    email: "smartrichardscott220@gmail.com",
    role: "Agency User",
  },
  {
    email: "jacoblee27@gmail.com",
    role: "Client",
  },
];

function UserManagement() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default UserManagement;
