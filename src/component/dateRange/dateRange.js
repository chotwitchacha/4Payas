import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import './Range.css'

const CalendarsDateRangePicker = () => {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <Typography sx={{ mt: 2, mb: 1 }}> </Typography>
                <DateRangePicker
                    calendars={1}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 3 }} style={{ fontSize: 24, color: '#828282' }}> - </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            </div>
        </LocalizationProvider>
    );
}

export default CalendarsDateRangePicker;