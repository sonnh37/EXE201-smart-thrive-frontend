"use client";

import {get4CommingSessionsByStudentId} from "@/services/session-service";
import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Loren ipsum dolor",
        time: "12:00-14:00 - 30 tháng 9, 2024",
        teacher: "Nguyen Thu",
        subject: "Toan cao cap 1",
    },
    {
        id: 2,
        title: "Loren ipsum dolor",
        time: "12:00-14:00 - 30 tháng 9, 2024",
        teacher: "Nguyen Thu",
        subject: "Tieng Anh dat Ielts 7 cham",
    },
    {
        id: 3,
        title: "Loren ipsum dolor",
        time: "12:00-14:00 - 30 tháng 9, 2024",
        teacher: "Nguyen Thu",
        subject: "Chinh phuc vat li",
    },
    {
        id: 4,
        title: "Loren ipsum dolor",
        time: "12:00-14:00 - 30 tháng 9, 2024",
        teacher: "Nguyen Thu",
        subject: "Chinh phuc vat li",
    },
];

interface EventCalendarProps {
    onDateChange: any,
    studentId: string | null,
}

const EventCalendar = ({onDateChange, studentId = null}: EventCalendarProps) => {
    const [value, onChange] = useState<Value>(new Date());
    const [sessions, setSession] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            if (studentId) {
                try {
                    const data = await get4CommingSessionsByStudentId(studentId); // Fetch upcoming sessions by studentId
                    setSession(data); // Set session data to state
                    console.log(data);
                } catch (error) {
                    console.error("Error fetching:", error);
                }
            }
        };
        fetchData();
    }, [studentId]);

    return (
        <div className="w-full h-full text-black bg-white p-4 rounded-md text-sm">
            <Calendar
                onChange={(value) => {
                    onChange(value);
                    onDateChange(value); // Gọi hàm để cập nhật ngày cho BigCalendar
                }}
                value={value}
            />
            <p className="pt-6 pb-4 font-bold">Coming lesson</p>
            <div className="flex flex-col gap-4">
                {sessions.map((session) => {
                    const startDate = new Date(session.startDate); // Tạo đối tượng Date từ startDate
                    const endDate = new Date(session.endDate); // Tạo đối tượng Date từ endDate

                    // Lấy giờ và phút
                    const startHour = startDate.getHours();
                    const startMinute = startDate.getMinutes();
                    const endHour = endDate.getHours();
                    const endMinute = endDate.getMinutes();

                    // Lấy ngày, tháng, năm
                    const day = startDate.getDate();
                    const month = startDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
                    const year = startDate.getFullYear();

                    // Định dạng thời gian
                    const time = `${startHour}:${startMinute
                        .toString()
                        .padStart(2, "0")}-${endHour}:${endMinute
                        .toString()
                        .padStart(2, "0")} - ${day} tháng ${month}, ${year}`;

                    return (
                        <div
                            className="p-4 rounded-md border-t-4 odd:border-blue-300 even:border-pink-300 shadow-md"
                            key={session}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <p className="text-base font-medium text-gray-900">{time}</p>
                                </div>
                            </div>
                            <h6 className="text-md font-semibold text-black">
                                {session!.courseName} {/* Sử dụng session.subject */}
                            </h6>
                            <p className="text-sm font-normal text-gray-600">
                                Giáo viên: {session.teacherName} {/* Sử dụng session.teacher */}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventCalendar;
