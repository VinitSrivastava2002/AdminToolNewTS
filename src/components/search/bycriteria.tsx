import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SubHeader from "../subheader";
import DropDown from "../dropdown";
import Table from "../../pages/table";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePickerComponent } from "../DateTimePickerComponent";

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
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <SubHeader Title="Search by Criteria"></SubHeader>

      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="50px"
        sx={{ gap: "20px", marginBlock: "20px" }} //, backgroundColor: "#ffff"
      >
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
          display="flex"
          // alignItems="start"
          // justifyContent="center"
        >
          <DateTimePickerComponent
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DateTimePickerComponent
            label="End Date"
            value={endDate}
            onChange={setEndDate}
          />
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
