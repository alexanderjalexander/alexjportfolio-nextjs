"use client"

import {
    Button,
    Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    useDisclosure
} from "@heroui/react";
import {tableDataType} from "@/src/lib/admin/categories-and-skills";
import {EditIcon, DeleteIcon} from "@/components/icons";
import React, {useState} from "react";
import {Input} from "@heroui/input";

export default function ActionableDataTable({inputData}: { inputData: tableDataType }) {
    // Add an "Actions" column with the buttons needed
    const inpdata = {
        columns: [...inputData.columns, {column:"actions", label:"ACTIONS"}],
        data: inputData.data,
    }

    // State to control data autofilling
    const [editModalData, setEditModalData] = useState({
        ...inputData.data[0]
    })

    // Modal Control
    const editModal = useDisclosure();
    const openEditModal = (row:{}) => {
        setEditModalData(row);
        editModal.onOpen();
    }
    const deleteModal = useDisclosure();
    const openDeleteModal = (row:{}) => {
        setEditModalData(row);
        deleteModal.onOpen();
    }

    // Cell Rendering Table
    type Data = typeof inputData.data[0];
    const renderCell = React.useCallback((data: Data, columnKey: React.Key) => {
        const cellValue = data[columnKey as keyof Data];

        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2 w-min m-auto">
                        <Tooltip content="Edit">
                            <Button onPress={() => openEditModal(data)} type={"button"} color="primary" variant={"flat"}>
                                <EditIcon/>
                            </Button>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete">
                            <Button onPress={() => openDeleteModal(data)} type={"button"} color="danger" variant={"flat"}>
                                <DeleteIcon/>
                            </Button>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        // TODO: Make generic server action, which requires the table object to be passed back and forth
        <div>
            <Modal isOpen={editModal.isOpen}
                   className="bg-background w-full"
                   backdrop="blur"
                   size="5xl"
                   onOpenChange={editModal.onOpenChange}
                   placement="center">
                <ModalContent className="">
                    {(onClose) => (<>
                        <ModalHeader>Edit Row</ModalHeader>
                        <ModalBody className="justify-center content-center rounded-xl px-2 md:px-6">
                            {
                                inputData.columns.filter(
                                    (item) =>
                                    (item.column.toLowerCase() !== "id" && !item.column.toLowerCase().includes("id"))
                                ).map((col_obj, index) => {
                                    return <Input key={col_obj.column}
                                                  isRequired
                                                  variant="bordered"
                                                  label={col_obj.label}
                                                  // @ts-ignore
                                                  value={editModalData[col_obj.column]}
                                                  onValueChange={(val) =>
                                                      setEditModalData({...editModalData, [col_obj.column]: val})}
                                                  autoFocus={index === 0}
                                                  type={col_obj.type ?? "text"}
                                    />
                                })
                            }
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" variant="solid" onPress={onClose}>
                                Submit Edit
                            </Button>
                            <Button color="danger" variant="solid" onPress={onClose}>
                                Discard Changes
                            </Button>
                        </ModalFooter>
                    </>)}
                </ModalContent>
            </Modal>
            <Modal isOpen={deleteModal.isOpen}
                   className="bg-background w-full"
                   backdrop="blur"
                   size="5xl"
                   onOpenChange={deleteModal.onOpenChange}
                   placement="center">
                <ModalContent className="">
                    {(onClose) => (<>
                        <ModalHeader>Delete Row</ModalHeader>
                        <ModalBody className="justify-center content-center rounded-xl px-2 md:px-6">
                            Are you sure you want to delete this row?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" variant="solid" onPress={onClose}>
                                Yes
                            </Button>
                            <Button color="danger" variant="solid" onPress={onClose}>
                                No
                            </Button>
                        </ModalFooter>
                    </>)}
                </ModalContent>
            </Modal>
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
                        // @ts-ignore
                        return (<TableRow key={Object.hasOwn(item, "id") ? item.id : JSON.stringify(item)}>
                            {(columnKey) => {
                                return <TableCell>{renderCell(item, columnKey)}</TableCell>
                            }}
                        </TableRow>)
                    }}
                </TableBody>
            </Table>
        </div>
    )
}