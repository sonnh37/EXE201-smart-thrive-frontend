// "use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { useEffect, useState } from "react";
import { getSessionsByStudentId } from "@/services/session-service";
// import { useEffect, useState } from "react";
// import { getSessionsByStudentId } from "@/services/session-service";

const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 22, 7, 0),
    end: new Date(2024, 8, 22, 8, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 22, 10, 0),
    end: new Date(2024, 8, 22, 11, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 22, 15, 0),
    end: new Date(2024, 8, 22, 16, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 23, 7, 0),
    end: new Date(2024, 8, 23, 8, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 23, 10, 0),
    end: new Date(2024, 8, 23, 11, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 23, 15, 0),
    end: new Date(2024, 8, 23, 16, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 24, 8, 30),
    end: new Date(2024, 8, 24, 9, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 24, 13, 0),
    end: new Date(2024, 8, 24, 14, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 24, 16, 0),
    end: new Date(2024, 8, 24, 17, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 25, 7, 0),
    end: new Date(2024, 8, 25, 9, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 25, 13, 0),
    end: new Date(2024, 8, 25, 14, 30),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 25, 16, 0),
    end: new Date(2024, 8, 25, 17, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 26, 10, 0),
    end: new Date(2024, 8, 26, 11, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 26, 13, 0),
    end: new Date(2024, 8, 26, 14, 0),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 27, 14, 0),
    end: new Date(2024, 8, 27, 15, 0),
  },
];

const BigCalendar = ({ selectedDate, studentId }) => {
  const [session, setSession] = useState([]);
  console.log(studentId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSessionsByStudentId(studentId); // Fetch blog data by id
        setSession(data); // Set blog data to state
        console.log(data);
        // Chuyển đổi dữ liệu thành định dạng của react-big-calendar
        const formattedEvents = data
          .map((session) => {
            const startDate = session.startDate
              ? new Date(session.startDate)
              : null;
            const endDate = session.endDate ? new Date(session.endDate) : null; // Giả sử sự kiện kéo dài 1 giờ

            return {
              title: session.courseName, // Dùng courseName làm title
              start: startDate,
              end: endDate,
            };
          })
          .filter((session) => session.startDate !== null); // Loại bỏ sự kiện không có startDate

        setSession(formattedEvents);
        console.log(formattedEvents);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchData();
  }, [studentId]);
  const [view, setView] = useState<View>(Views.WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={session}
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
