import React, { useState, } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarComp = () => {
    const [value, setValue] = useState(new Date())

    return (
        <div className="CalendarWrapper">
            <Calendar onChange={setValue} value={value} />
        </div>
    )

}

export default CalendarComp;