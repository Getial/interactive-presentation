/* eslint-disable react/prop-types */
import "../styles/Timeline.css";

const Timeline = ({ events, onSelect, onNext, onPrevious, selectedIndex }) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div
            className={`event ${
              selectedIndex === index ? "selected-event" : ""
            }`}
            style={{
              backgroundColor: event.color,
              zIndex: events.length - index,
            }}
            key={index}
            onClick={() => onSelect(index)}
          >
            <p className="date">{event.year}</p>
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
