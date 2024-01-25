import React from 'react'
import AppWindow from '../AppWindow'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarBig = () => {
  return (
    <AppWindow>
       <div style={{ height: 700 }}>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
    </AppWindow>
  )
}

export default CalendarBig