import "../styles/Timeline.css";

// eslint-disable-next-line react/prop-types
const Timeline = ({ events, onSelect, onNext, onPrevious }) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div
            className="event"
            style={{
              backgroundColor: event.color,
              zIndex: events.length - index,
            }}
            key={index}
            onClick={() => onSelect(index)}
          >
            <p className="date">{event.date}</p>
            <p className="no-date">{event.year}</p>
            <p className="no-date">{event.month}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Timeline;
