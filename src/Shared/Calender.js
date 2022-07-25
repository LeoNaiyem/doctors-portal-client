import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import isWeekend from 'date-fns/isWeekend';
import React from 'react';


const Calender = ({date, setDate}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            orientation="landscape"
            value={date}
            shouldDisableDate = {isWeekend}
            onChange={(newValue) => {
                setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
      </LocalizationProvider>
    );
};

export default Calender;