/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "../styles/Card.css";

const Card = ({ event }) => {
  const cardRef = useRef(null);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Array con las animaciones disponibles
    const animations = [
      "flip-scale-hor-top",
      "rotate-center",
      "rotate-top",
      "rotate-hor-top",
      "rotate-scale-up",
      "rotate-scale-down-diag-2",
    ];

    //seleccionar una animacion aleatoria del array
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];
    setAnimationClass(randomAnimation);
    console.log(randomAnimation);

    const cardElement = cardRef.current;

    if (cardElement) {
      // Quitar cualquier animacion previamente aplicada
      cardElement.classList.remove(...animations);

      // Usar un pequeño retraso para asegurar que la clase se quite antes de volver a agregarla
      setTimeout(() => {
        cardElement.classList.add(randomAnimation);
      }, 10); // El retraso puede ajustarse si es necesario
    }

    return () => {
      // Limpiar la clase cuando el componente se desmonte o el evento cambie
      if (cardElement) {
        setTimeout(() => {
          cardElement.classList.remove(randomAnimation);
        }, 5); // El retraso puede ajustarse si es necesario
      }
    };
  }, [event]);

  useEffect(() => {
    // Animación para el contenido de la card con retraso
    const contentElements = cardRef.current?.querySelectorAll(
      ".content-animation-delay"
    );

    if (contentElements) {
      contentElements.forEach((element, index) => {
        element.style.animation = ""; // Reiniciar animación eliminando la clase anterior
        setTimeout(() => {
          element.style.animation = `fade-in 0.5s ease forwards`;
          element.style.animationDelay = `${0.5 + index * 0.2}s`; // Incrementar retraso
        }, 10);
      });
    }
  }, [event]);

  return (
    <div className="card" ref={cardRef}>
      <div className="img-container content-animation-delay">
        <img src={event.image} alt={event.title} />
      </div>
      <h2 className="content-animation-delay">{event.title}</h2>
      <p className="content-animation-delay">
        {event.description}
        <p className="comment">{event.comment}</p>
      </p>
    </div>
  );
};

export default Card;
