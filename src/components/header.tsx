import { Box, Typography } from '@mui/material';

interface HeaderProps{
    Title:string,
    Text:string
}

export default function Header(props: HeaderProps)
{
    return (
        <Box mb="30px">
          <Typography variant="h4" fontWeight="bold" sx={{ m: "0 0 5px 0", color:"#165a72" }}>
            {props.Title}
          </Typography>
          <Typography variant="h6">
            {props.Text}
          </Typography>
        </Box>
      );
}