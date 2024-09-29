import { Box, Button } from "@mui/material";
import SubHeader from "../subheader";
import DropDown from "../dropdown";
import Table from "../../pages/table";

interface SearchByFieldNameProps {
  ServiceStatusItems: string[];
  HandlerItems: string[];
}

export default function SearchByFieldName({
  ServiceStatusItems,
  HandlerItems,
}: SearchByFieldNameProps) {
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
      <Table />
    </Box>
  );
}
