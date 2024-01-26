import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import { Calendar, View, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppWindow from '../AppWindow';
import Toolbar from './Toolbar';
import './Calendar.scss';

const messages = {
  allDay: 'Cały dzień',
  previous: '<',
  next: '>',
  today: 'Dziś',
  month: 'Miesiąc',
  week: 'Tydzień',
  day: 'Dzień',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Czas',
  event: 'Wydarzenie',
};

moment.locale('pl');
const localizer = momentLocalizer(moment);

const CalendarBig = () => {
  
  const [currentView, setCurrentView] = useState<View>('month'); // Inicjalizuj domyślny widok

  const events = [
    {
      id: 1,
      title: 'Spotkanie z klientem',
      start: new Date(2024, 0, 28, 10, 0), // Data i godzina rozpoczęcia zdarzenia
      end: new Date(2024, 0, 28, 12, 0),   // Data i godzina zakończenia zdarzenia
    },
    {
      id: 2,
      title: 'Przyjęcie urodzinowe',
      start: new Date(2024, 1, 15, 15, 0),
      end: new Date(2024, 1, 15, 18, 0),
    },
    // Dodaj więcej zdarzeń według potrzeb
  ];

  const handleViewChange = (newView: View) => {
    setCurrentView(newView);
  };

  return (
    <AppWindow>
      <div style={{ height: 700 }}>
        <Calendar
          events={events}
          messages={messages}
          views={['month', 'week', 'day']}
          localizer={localizer}
          startAccessor="start"
          view={currentView}
          endAccessor="end"
          components={{
            toolbar: (props) => (
              <Toolbar
                {...props}
                currentView={currentView} // Przekaż aktualny widok
                onViewChange={handleViewChange} // Przekaż funkcję do obsługi zmiany widoku
              />
            ),
          }}
        />
      </div>
    </AppWindow>
  );
};

export default CalendarBig;
