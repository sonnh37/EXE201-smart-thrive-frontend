import {Calendar, momentLocalizer, View, Views} from "react-big-calendar";
import moment from "moment";
import {useEffect, useState} from "react";
import {getSessionsByStudentId} from "@/services/session-service";

const localizer = momentLocalizer(moment);

interface Props {
    selectedDate: Date;
    studentId: string | null;
}

const BigCalendar = ({selectedDate, studentId}: Props) => {
    const [sessions, setSessions] = useState<any[]>([]);
    console.log(studentId);
    useEffect(() => {
        const fetchData = async () => {
            if (studentId) {
                try {
                    const data = await getSessionsByStudentId(studentId); // Fetch blog data by id
                    setSessions(data);
                    const formattedEvents = data
                        .map((session: any) => {
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
                        .filter((session: any) => session.startDate !== null); // Loại bỏ sự kiện không có startDate

                    setSessions(formattedEvents);
                    console.log(formattedEvents);
                } catch (error) {
                    console.error("Error fetching:", error);
                }
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
                events={sessions}
                startAccessor="start"
                endAccessor="end"
                views={["week", "day"]}
                view={view}
                style={{height: 1200}}
                onView={handleOnChangeView}
                min={new Date(2023, 1, 0, 7, 0, 0)}
                max={new Date(2025, 1, 0, 22, 0, 0)}
                date={selectedDate}
            />
        </div>
    );
};

export default BigCalendar;
