import React, { useState } from "react";
import "./style.css";

type CalendarProps = {
  date: Date;
};

function Calendar({ date }: CalendarProps) {
  const monthYear = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [selectedDate, setSelectedDate] = useState<number | null>(
    date.getDate()
  );

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  const dayHeaders = daysOfWeek.map((day) => (
    <div key={day} className="weekday">
      {day}
    </div>
  ));
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const dateNumbers = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dateNumbers.push(
      <div key={`empty-${i}`} className="date-number empty"></div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isHighlighted = day === selectedDate;
    dateNumbers.push(
      <div
        key={day}
        className={`date-number ${isHighlighted ? "highlighted" : ""}`}
        onClick={() => handleDateClick(day)}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div>{monthYear}</div>
      </div>

      <div className="weekdays">{dayHeaders}</div>

      <div className="dates">{dateNumbers}</div>
    </div>
  );
}

export default Calendar;
