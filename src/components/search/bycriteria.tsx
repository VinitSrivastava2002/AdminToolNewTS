import { Box, Button } from "@mui/material";
import SubHeader from "../subheader";
import DropDown from "../dropdown";
import Table from "../../pages/table";
import { useState } from "react";

interface SearchByFieldNameProps {
  ServiceStatusItems: string[];
  HandlerItems: string[];
}

export default function SearchByFieldName({
  ServiceStatusItems,
  HandlerItems,
}: SearchByFieldNameProps) {
  // Define the field names you want to pass as props
  const fields = [
    { field: "name", headerName: "Name" },
    { field: "prefix", headerName: "Prefix" },
    { field: "suffix", headerName: "Suffix" },
    { field: "digits", headerName: "Digits" },
    { field: "incrementby", headerName: "Increment By" },
    { field: "isenable", headerName: "Is Enabled" },
  ];

  // Define the initial rows in the parent component
  const [rows, setRows] = useState([
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
  ]);

  return (
    <Box mb="1px">
      <SubHeader Title="Search by Criteria"></SubHeader>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="20px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          backgroundColor="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <div>
            Start Date:{" "}
            <input
              type="datetime-local"
              id="startdate"
              name="startdate"
            ></input>
          </div>
          <div className="paddingLeft">
            End Date:{" "}
            <input type="datetime-local" id="enddate" name="enddate"></input>
          </div>
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DropDown
            Label="Service Status"
            Items={ServiceStatusItems}
          ></DropDown>
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DropDown Label="Handlers" Items={HandlerItems}></DropDown>
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            sx={{
              backgroundColor: "#165a72",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Table fields={fields} rows={rows} setRows={setRows} />
    </Box>
  );
}
