import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, Pagination} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
import {columns, users} from "../app/data/data";

const statusColorMap: Record<string, ChipProps["color"] | undefined> = {
    Cancelado: "danger",
    Realizando: "warning",
    Concluído: "success",
};

type User = typeof users[0];

export default function App() {

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            
            description={user.contact}
            name={cellValue}
          >
            {user.contact}
          </User>
        );
      case "system":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
        case "date":
        return (
            <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.data}</p>
          </div>
        );
        case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn defaultWidth={300}key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={paginatedUsers}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <div className="flex w-full justify-center">
    <Pagination
      total={Math.ceil(users.length / itemsPerPage)}
      initialPage={1}
      onChange={handlePageChange}
    />
    </div>
    </>
  );
  
}

