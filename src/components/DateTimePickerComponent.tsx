import React from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, TextField } from "@mui/material";

interface DateTimePickerComponentProps {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

export const DateTimePickerComponent: React.FC<
  DateTimePickerComponentProps
> = ({ label, value, onChange }) => {
  return (
    <Box
      sx={{
        // width: "250px",
        // backgroundColor: "yellow",
        padding: "0px",
        display: "flex",
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          sx={{
            ".MuiInputBase-root": {
              backgroundColor: "#ffff",
              // width: "200px", // You can adjust the width here if needed
            },
          }}
          label={label}
          // sx={{ minWidth: "250px" }}
          slotProps={{ textField: { size: "small" } }}
          value={value}
          onChange={onChange}
        />
      </LocalizationProvider>
    </Box>
  );
};

interface InputFieldComponent {
  label: string;
}

export const InputField: React.FC<InputFieldComponent> = ({ label }) => {
  return (
    <Box sx={{ minWidth: "250px" }}>
      <TextField label={label} id="outlined-size-small" size="small" />
    </Box>
  );
};
