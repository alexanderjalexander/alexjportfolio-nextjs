"use client"

import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip} from "@heroui/react";
import {tableDataType} from "@/src/lib/admin/categories-and-skills";
import {EditIcon, DeleteIcon} from "@/components/icons";
import React from "react";

export default function ActionableDataTable({inputData}: { inputData: tableDataType }) {
    // Add an "Actions" column with the buttons needed
    const inpdata = {
        columns: [...inputData.columns, {column:"actions", label:"ACTIONS"}],
        data: inputData.data,
    }
    type Data = (typeof inputData.data)[0];

    // Cell Rendering Table
    const renderCell = React.useCallback((data: Data, columnKey: React.Key) => {
        const cellValue = data[columnKey as keyof Data];

        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2 w-min m-auto">
                        <Tooltip content="Edit">
                            <span className="text-lg text-default-500 cursor-pointer active:opacity-50">
                                <EditIcon/>
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon/>
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        // TODO: Add modal to edit any and all rows
        // TODO: Make generic server action, which requires the table object to be passed back and forth
        // TODO: Figure out chip support for joined tables (might require specialized table)
        <Table classNames={{
            table: "font-black",
            base: "font-black",
            tbody: "font-black",
            th: "bg-primary-800 drop-shadow-md !font-bold",
            td: "bg-transparent",
            wrapper: "bg-transparent",
        }}>
            <TableHeader columns={inpdata.columns}>
                {(column) => {
                    return <TableColumn align={"center"} key={column.column}>{column.label}</TableColumn>
                }}
            </TableHeader>
            <TableBody items={inpdata.data}>
                {(item) => {
                    // Weird workaround to get *every* table to render properly.
                    // Not having a TableRow key for some values can cause it to not render properly.
                    return (<TableRow key={JSON.stringify(item)}>
                        {(columnKey) => {
                            return <TableCell>{renderCell(item, columnKey)}</TableCell>
                        }}
                    </TableRow>)
                }}
            </TableBody>
        </Table>
    )
}