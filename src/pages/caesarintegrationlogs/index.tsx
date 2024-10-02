import Header from "../../components/header";
import SearchByFieldName from "../../components/search/byfieldname";
import { Box, Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import SearchByCriteria from "../../components/search/bycriteria";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CaesarIntegrationLogs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  let serviceStatusItems = ["All", "Success", "Failure"];
  let handlerItems = [
    "All",
    "Sadad Transation Handle",
    "Customer Handler",
    "Subscription Rates Handler",
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Caesar Integration Logs" Text=""></Header>
        <Box>
          <Button
            sx={{
              backgroundColor: "#165a72",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Export Logs
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Search Criteria" {...a11yProps(0)} />
            <Tab label="By Transaction Id" {...a11yProps(1)} />
            <Tab label="By Search Text" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={1}>
          <SearchByFieldName
            Label="Transaction Id"
            onClickEvent={() => {
              console.log("TransactionId");
            }}
          ></SearchByFieldName>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SearchByFieldName
            Label="Search Text"
            onClickEvent={() => {
              console.log("Search Text");
            }}
          ></SearchByFieldName>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={0}>
          <SearchByCriteria
            ServiceStatusItems={serviceStatusItems}
            HandlerItems={handlerItems}
          ></SearchByCriteria>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
