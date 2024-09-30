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
    <Box sx={{ minWidth: "250px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
          <DateTimePicker
            label={label}
            sx={{ minWidth: 250 }}
            slotProps={{ textField: { size: "small" } }}
            value={value}
            onChange={onChange}
          />
        </DemoContainer>
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
