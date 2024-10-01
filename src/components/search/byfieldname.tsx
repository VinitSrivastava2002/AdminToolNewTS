import { Box, Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SubHeader from "../subheader";
import { useState } from "react";
import Table from "../../pages/table";

interface SearchByFieldProps {
  Label: string;
  onClickEvent: () => void;
}

export default function SearchByFieldName({
  Label,
  onClickEvent,
}: SearchByFieldProps) {
  // Define the field names you want to pass as props
  const fields = [
    { field: "name", headerName: "Name" },
    { field: "address", headerName: "address" },
    { field: "phonenumber", headerName: "Phone no." },
    { field: "age", headerName: "Age" },
    { field: "incrementby", headerName: "Increment By" },
    { field: "isenable", headerName: "Is Enabled" },
  ];

  // Define the initial rows in the parent component
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Name1",
      address: "Prefix1",
      phonenumber: "Suffix1",
      age: "1234",
      incrementby: "1",
      isenable: "Yes",
    },
  ]);

  return (
    <>
      <Box mb="20px" sx={{ height: "100%" }}>
        <SubHeader Title={"Search By " + Label}></SubHeader>
        <Paper
          component="form"
          sx={{
            marginBottom: "20px",
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "72.5rem",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={Label}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={onClickEvent}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Table fields={fields} rows={rows} setRows={setRows} />
      </Box>
    </>
  );
}
