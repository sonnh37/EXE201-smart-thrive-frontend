"use client";

import { useState } from "react";
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
const EventCalendar = ({onDateChange}) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-full h-full text-black bg-white p-4 rounded-md text-sm">
      <Calendar onChange={(value) => {
          onChange(value);
          onDateChange(value); // Gọi hàm để cập nhật ngày cho BigCalendar
        }}
        value={value} />
      <p className="pt-6 pb-4 font-bold">Coming lesson</p>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-4 rounded-md border-t-4 odd:border-blue-300 even:border-pink-300 shadow-md"
            key={event.id}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <p className="text-base font-medium text-gray-900">
                  {event.time}
                </p>
              </div>
            </div>
            <h6 className="text-md font-semibold text-black">
              {event.subject}
            </h6>
            <p className="text-sm font-normal text-gray-600">
              Giáo viên: {event.teacher}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
