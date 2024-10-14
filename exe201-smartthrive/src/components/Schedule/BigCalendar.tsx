import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { useEffect, useState } from "react";
import { getSessionsByStudentId } from "@/services/session-service";

const localizer = momentLocalizer(moment);

const BigCalendar = ({ selectedDate, studentId }: { selectedDate: Date; studentId: string }) => {
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
