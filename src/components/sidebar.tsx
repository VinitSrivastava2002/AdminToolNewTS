import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  HomeOutlined,
  DataObject,
  Newspaper,
  Construction,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Sidebar className="sideBarBackground" collapsed={isCollapsed}>
      <Menu>
        <MenuItem
          icon={!isCollapsed && <MenuOutlinedIcon />}
          className="menuItem"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="Admin Tool"
                width="100px"
                height="100px"
                src={"../../assets/OIP.jpg"}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                fontWeight="bold"
                fontSize={30}
                sx={{ m: "5px 0 0 0" }}
              >
                Admin Tool
              </Typography>
              <Typography variant="h6" fontSize={16}>
                Logs and Configurations
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft="10%">
          <MenuItem
            icon={<HomeOutlined />}
            component={<Link to="/dashboard"></Link>}
          >
            Dashboard
          </MenuItem>
          <SubMenu label="Logs" icon={<Newspaper />}>
            <MenuItem component={<Link to="caesarintegrationlogs"></Link>}>
              Caesar Integration
            </MenuItem>
            <MenuItem component={<Link to="membermanagementlogs"></Link>}>
              Member Management
            </MenuItem>
            <MenuItem>Bulk SMS</MenuItem>
            <MenuItem>IBM API</MenuItem>
            <MenuItem>Integration Service</MenuItem>
            <MenuItem component={<Link to="windows-services"></Link>}>
              Windows Service
            </MenuItem>
            <MenuItem component={<Link to="error-logs"></Link>}>
              Error Logs
            </MenuItem>
            <MenuItem component={<Link to="logs"></Link>}>Logs</MenuItem>
          </SubMenu>
          <SubMenu label="Configuration" icon={<Construction />}>
            <MenuItem>Auto Numbers</MenuItem>
            <MenuItem>Caesar Configuration</MenuItem>
            <MenuItem>CRM Configuration</MenuItem>
            <MenuItem>Caesar Mapping Dictionary</MenuItem>
            <MenuItem>Integration Service</MenuItem>
            <MenuItem>Windows Service</MenuItem>
          </SubMenu>
          <MenuItem icon={<DataObject />}>Master Data</MenuItem>
        </Box>
      </Menu>
    </Sidebar>
  );
}
