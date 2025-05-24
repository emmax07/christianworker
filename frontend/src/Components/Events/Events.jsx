import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Events.css";

import eventsData from "./Events.json";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState([]);

  const selectedDateStr = selectedDate.toISOString().split("T")[0];
  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    // Filter events for selected date AND only if date >= today
    const eventsForDate = eventsData.filter(
      (event) => event.date === selectedDateStr && event.date >= todayStr
    );
    setFilteredEvents(eventsForDate);
  }, [selectedDateStr, todayStr]);

  const getTileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toISOString().split("T")[0];

      if (dateStr === selectedDateStr) {
        return "events-selected";
      }

      // Only highlight dates with events that are today or in the future
      if (
        dateStr >= todayStr &&
        eventsData.some((event) => event.date === dateStr)
      ) {
        return "events-has-event";
      }
    }
    return null;
  };

  return (
    <div className="events-component">
      <h2 className="events-title">📅 Churches Events Calendar</h2>

      <div className="events-calendar-wrapper">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={getTileClassName}
          minDate={new Date()} // Disable past dates selection
        />
      </div>

      <div className="events-list">
        <h3 className="events-subtitle">
          Events on <span>{selectedDate.toDateString()}</span>
        </h3>

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h4 className="event-title">{event.title}</h4>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p className="events-none">No events on this date.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
