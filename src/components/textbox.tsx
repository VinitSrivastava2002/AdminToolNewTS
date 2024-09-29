import { TextField } from '@mui/material';

interface TextBoxProps{
    Label: string;
    Id: string;
}

export default function TextBox({Label, Id} : TextBoxProps){
    return(
            <TextField id={Id} label={Label} variant="standard" />
    )
}