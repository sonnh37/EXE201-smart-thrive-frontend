"use client";
import BigCalendar from "@/components/schedule/big-calendar";
import EventCalendar from "@/components/schedule/event-calendar";
import {useState} from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Schedule({
                                     params,
                                 }: {
    params: { studentId: string };
}) {
    const [value, setValue] = useState<Date>(new Date()); // Lưu trữ ngày đã chọn

    const {studentId} = params;

    // Hàm để đồng bộ ngày với lịch nhỏ
    const handleEventCalendarChange = (date: Date) => {
        setValue(date); // Cập nhật ngày khi lịch nhỏ thay đổi
    };
    return (
        <div className="h-full w-full pt-24 p-4 flex flex-col xl:flex-row gap-4">
            <div className="xl:w-1/5">
                <EventCalendar onDateChange={handleEventCalendarChange} studentId={studentId}/>
            </div>
            <div className="xl:w-4/5">
                <div className="h-full bg-white p-4 round-md text-black">
                    <p className="font-bold py-4 pl-4 text-xl">Thời khóa biểu</p>
                    <BigCalendar
                        selectedDate={value} studentId={studentId}// Truyền ngày đã chọn vào lịch lớn
                    />
                </div>
            </div>
        </div>
    );
}
