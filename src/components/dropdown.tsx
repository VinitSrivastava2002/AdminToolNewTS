import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {FormControl, Box} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface DropDownProps{
    Label:string,
    Items:string[]
}

export default function({Label, Items}: DropDownProps) {
    const [itemValue, setItemValue] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setItemValue(event.target.value);
      };
    return(
        <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth sx={{ minWidth: 250 }} size="small">
                    <InputLabel>{Label}</InputLabel>
                    <Select value={itemValue} label={Label} onChange={handleChange}>
                        {Items.map((Item, index) => <MenuItem value={index}>{Item}</MenuItem>)}
                    </Select>
                </FormControl>
        </Box>
    )
}