import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card } from "./InfiniteCardScroll";
import EventsListingCard from "./EventsListingcard";

interface CalendarProp {
  arrEvents: Card[];
}

function CustomCalendar({ arrEvents }: CalendarProp) {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const macedonianMonths = [
    "Јануари",
    "Февруари",
    "Март",
    "Април",
    "Мај",
    "Јуни",
    "Јули",
    "Август",
    "Септември",
    "Октомври",
    "Ноември",
    "Декември",
  ];
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, []);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const generateCalendar = () => {
    const calendar = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(null);
        } else if (dayCounter > daysInMonth) {
          break;
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }
      calendar.push(week);
      if (dayCounter > daysInMonth) break;
    }
    return calendar;
  };

  const getEventsForDay = (day: number) => {
    return arrEvents.filter(
      (event) =>
        event.day === day &&
        event.month === currentMonth + 1 &&
        event.year === currentYear
    );
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  const calendar = generateCalendar();
  return (
    <div className="wrapperCalendarAndEvents">
      <div className="eventsListing">
        {selectedDay && (
          <div className="eventsForSelectedDay">
            {getEventsForDay(selectedDay).map((event) => (
              <EventsListingCard
                key={event.id}
                id={event.id}
                category={event.category}
                text={event.text}
              />
            ))}
          </div>
        )}
      </div>
      <div className="calendarContainer">
        <h2>Изберете Дата</h2>

        <div className="calendarHeader">
          <button onClick={prevMonth}>{`<`}</button>
          <h2>
            {macedonianMonths[currentMonth]} {currentYear}
          </h2>
          <button onClick={nextMonth}>{`>`}</button>
        </div>

        <table className="calendarTable">
          <thead>
            <tr>
              <th>НЕД</th>
              <th>ПОН</th>
              <th>ВТО</th>
              <th>СРЕ</th>
              <th>ЧЕТ</th>
              <th>ПЕТ</th>
              <th>САБ</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, i) => (
              <tr key={i}>
                {week.map((day, j) => {
                  if (!day)
                    return <td className="emptyCell" key={`${i}-${j}`}></td>;

                  const dayEvents = getEventsForDay(day);
                  const isSelected = selectedDay === day;

                  return (
                    <td
                      key={`${i}-${j}`}
                      className={`dayCell ${isSelected ? "selectedDay" : ""}`}
                      onClick={
                        dayEvents.length > 0
                          ? () => handleDayClick(day)
                          : undefined
                      }
                    >
                      <div className="dayNumber">{day}</div>
                      {dayEvents.length > 0 && (
                        <div className="notificationDot"></div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomCalendar;
