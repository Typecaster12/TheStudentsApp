import "./Planer.css"; // Custom styles

const TimePlaner = () => {
  // Generate 48 blocks = 24 hours split into 30-min intervals
  const timeBlocks = Array.from({ length: 48 }, (_, index) => {
    const hour = Math.floor(index / 2);
    const minute = index % 2 === 0 ? "00" : "30";
    const label = `${hour.toString().padStart(2, "0")}:${minute}`;

    return (
      <div className="time-block" key={index} data-time={label}>
        <span className="time-label">{label}</span>
      </div>
    );
  });

  return (
    <div className="scheduler-container">
      {timeBlocks}
    </div>
  );
};

export default TimePlaner;
