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
            {/* <p className="date">{event.year}</p>
            <p className="date">{event.month}</p> */}
            <p className="date">{event.year}</p>
            {/* <p className="date month">{event.month}</p> */}
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="btn btn-previous" onClick={onPrevious}>
          <span>❮</span> Previous
        </button>
        <button className="btn btn-next" onClick={onNext}>
          Next <span>❯</span>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
