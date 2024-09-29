import { Box, Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SubHeader from "../subheader";

interface SearchByFieldProps {
  Label: string;
  onClickEvent: () => void;
}

export default function SearchByFieldName({
  Label,
  onClickEvent,
}: SearchByFieldProps) {
  return (
    <>
      <Box mb="20px">
        <SubHeader Title={"Search By " + Label}></SubHeader>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "max",
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
      </Box>
    </>
  );
}
