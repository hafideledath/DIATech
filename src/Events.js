import './Events.css';

function Events() {
  return (
    <div className="Events">
        <h2 style={{marginTop: '120px'}}>Events</h2>
        <div className="calendar">
          <div className="event">
            <h2>October</h2>
            <div className="event-details">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <caption>mBot Robotics Workshop</caption>
            </div>
          </div>
          <div className="event">
            <h2>November</h2>
            <div className="event-details">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <caption>Robotics University Visit</caption>
            </div>
          </div>
          <div className="event">
            <h2>January</h2>
            <div className="event-details">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <caption>DI@BYTE</caption>
            </div>
          </div>
          <div className="event">
            <h2>February</h2>
            <div className="event-details">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <caption>Hour of Code</caption>
            </div>
          </div>
          <div className="event">
            <h2>April</h2>
            <div className="event-details">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <caption>Innovents Robotics</caption>
            </div>
          </div>
        </div>
        <div className="final event">
            <h2>June</h2>
            <img src="https://placehold.co/300x100" alt="placeholder" />
            <caption>DI@TECH</caption>
        </div>
    </div>
  );
}

export default Events;