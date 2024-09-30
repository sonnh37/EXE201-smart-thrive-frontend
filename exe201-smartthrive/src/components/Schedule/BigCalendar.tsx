"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";

const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,22, 7, 0),
    end: new Date(2024, 8,22, 8, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,22, 10,0),
    end: new Date(2024, 8,22, 11, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,22, 15, 0),
    end: new Date(2024, 8,22, 16, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,23, 7, 0),
    end: new Date(2024, 8,23, 8, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,23, 10,0),
    end: new Date(2024, 8,23, 11, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,23, 15, 0),
    end: new Date(2024, 8,23, 16, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,24, 8, 30),
    end: new Date(2024, 8,24, 9, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,24, 13,0),
    end: new Date(2024, 8,24, 14, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,24, 16, 0),
    end: new Date(2024, 8,24, 17, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,25, 7, 0),
    end: new Date(2024, 8,25, 9, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,25, 13,0),
    end: new Date(2024, 8,25, 14, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,25, 16, 0),
    end: new Date(2024, 8,25, 17, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,26, 10, 0),
    end: new Date(2024, 8,26, 11, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,26, 13,0),
    end: new Date(2024, 8,26, 14, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8,27, 14,0),
    end: new Date(2024, 8,27, 15, 0),
  },
 
];

const BigCalendar = ({selectedDate}:{selectedDate: Date}) => {
  const [view, setView] = useState<View>(Views.WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  }
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["week", "day"]}
        view={view}
        style={{ height: 1200 }}
        onView={handleOnChangeView}
        min={new Date(2023, 1, 0, 7, 0, 0)}
        max={new Date(2025, 1, 0, 22, 0, 0)}
        date={selectedDate}
      />
    </div>
  );
};

export default BigCalendar;
