import Table, { IColumn, IRow } from "@/components/forms/Table";
import clsx from "clsx";

const columns: IColumn[] = [
  {
    name: "client_name",
    title: "Client Name",
    width: 160,
  },
  {
    name: "asset_uri",
    title: "Asset",
    render: (row: IRow) => (
      <img src={row.asset_uri} className="h-14 w-14 rounded-lg" />
    ),
    width: 105,
  },
  {
    name: "design_name",
    title: "Design Name & ID",
    render: (row: IRow) => (
      <div className="flex flex-col">
        <p className="text-sm">{row.design_name}</p>
        <p className="text-[10px]">{row.design_id}</p>
      </div>
    ),
    width: 150,
  },
  {
    name: "design_prompt",
    title: "Design Prompt",
    grow: true,
  },
  {
    name: "status",
    title: "Status",
    width: 115,
    render: (row: IRow) => (
      <p
        className={clsx("font-bold", {
          "text-warning": row.status === "Pending",
          "text-danger": row.status === "Rejected",
          "text-success": row.status === "Approved",
        })}
      >
        {row.status}
      </p>
    ),
  },
  {
    name: "action",
    title: "Action",
    render: () => (
      <p className="underline text-highlight-text font-extrabold">Edit</p>
    ),
    width: 110,
  },
];

const rows: IRow[] = [
  {
    client_name: "BrandPulse",
    asset_uri: "",
    design_name: "Nike Air 888",
    design_id: "#A1B2C1",
    design_prompt:
      "Step into comfort with every stride. Discover the shoes designed to keep you going all day long.",
    status: "Pending",
  },
];

function Dashboard() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default Dashboard;
