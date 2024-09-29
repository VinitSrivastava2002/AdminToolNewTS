import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  DataGrid,
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
} from "@mui/x-data-grid";

// Define the initial data structure with new fields
const initialRows: GridRowsProp = [
  {
    id: 1,
    name: "Name1",
    prefix: "Prefix1",
    suffix: "Suffix1",
    digits: "1234",
    incrementby: "1",
    isenable: "Yes",
  },
  {
    id: 2,
    name: "Name2",
    prefix: "Prefix2",
    suffix: "Suffix2",
    digits: "5678",
    incrementby: "2",
    isenable: "No",
  },
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;
  // const {nextId, set}

  const handleClick = () => {
    setRows((oldRows) => {
      const nextId = Math.max(...oldRows.map((row) => row.id)) + 1; // Calculate next ID
      console.log(nextId);
      return [
        ...oldRows,
        {
          _id: nextId,

          name: "",
          prefix: "",
          suffix: "",
          digits: "",
          incrementby: "",
          isenable: "",
          isNew: true,
        },
      ];
    });
    // setRowModesModel((oldModel) => ({
    //   ...oldModel,
    //   [nextId]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    // }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function Table() {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  // Process row updates and validate fields
  const processRowUpdate = (newRow: GridRowModel) => {
    const { name, prefix, suffix, digits, incrementby, isenable } = newRow;

    // Check for mandatory fields
    if (!name || !prefix || !suffix || !digits || !incrementby || !isenable) {
      alert("All fields are mandatory. Please fill in all details.");
      throw new Error("Validation error: Missing mandatory fields.");
    }

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      type: "string",
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      type: "string",
      editable: true,
    },
    {
      field: "prefix",
      headerName: "Prefix",
      width: 150,
      type: "string",
      editable: true,
    },
    {
      field: "suffix",
      headerName: "Suffix",
      width: 150,
      type: "string",
      editable: true,
    },
    {
      field: "digits",
      headerName: "Digits",
      width: 150,
      type: "number",
      editable: true,
    },
    {
      field: "incrementby",
      headerName: "Increment By",
      width: 150,
      type: "number",
      editable: true,
    },
    { field: "isenable", headerName: "Is Enabled", width: 150, editable: true },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon color="primary" />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon color="primary" />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon color="primary" />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
