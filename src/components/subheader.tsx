import { Box, Typography } from '@mui/material';

interface HeaderProps{
    Title:string
}

export default function SubHeader({Title}: HeaderProps)
{
    return (
        <Box mb="30px">
          <Typography variant="h6" fontWeight="bold" sx={{ m: "0 0 5px 0", color:"#165a72", background:null }}>
            {Title}
          </Typography>
        </Box>
      );
}