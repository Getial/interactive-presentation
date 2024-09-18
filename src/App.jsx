import { useState } from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import Timeline from "./components/Timeline";
import { events } from "./data/events";
import "./App.css";

const App = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleSelect = (index) => {
    setCurrentEventIndex(index);
  };

  const handlePrevious = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <Title text="Moments That Shaped Me" />
      <Card event={events[currentEventIndex]} />
      <Timeline
        events={events}
        onSelect={handleSelect}
        onPrevious={handlePrevious}
        onNext={handleNext}
        selectedIndex={currentEventIndex}
      />
      {/* <NavigationButtons onPrevious={handlePrevious} onNext={handleNext} /> */}
    </div>
  );
};

export default App;
