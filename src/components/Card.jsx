import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import "../styles/Card.css";

const Card = ({ event }) => {
  return (
    <Slide direction="up" triggerOnce>
      <div className="card">
        <div className="img-container">
          <img src={event.image} alt={event.title} />
        </div>
        <h2>{event.title}</h2>
        <p>
          {event.description}
          <p className="comment">{event.comment}</p>
        </p>
      </div>
    </Slide>
  );
};

export default Card;
