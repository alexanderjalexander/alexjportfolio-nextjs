"use client"

import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import {tableDataType} from "@/src/lib/admin/categories-and-skills";

export default function SkillsTable({skillsData}:{skillsData:tableDataType}) {
    return (
        // TODO: Add modal to edit any and all rows
        <Table classNames={{
            table: "font-black",
            base: "font-black",
            tbody: "font-black",
            th: "bg-primary-800 drop-shadow-md !font-bold",
            td: "bg-transparent",
            wrapper: "bg-transparent",
        }}>
            <TableHeader columns={skillsData.columns}>
                {(column) => <TableColumn key={column.column}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={skillsData.data}>
                {(item) => (
                    <TableRow>
                        {(columnKey) => {
                            return <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                        }}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}