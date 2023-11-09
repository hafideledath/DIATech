import mBotRobotics from './events/mbot_robotics.webp';
import primaryRobotics from './events/primary_robotics.webp';
import diabyte from './events/diabyte.webp';
import hourOfCode from './events/hour_of_code.webp';
import innoventsRobotics from './events/innovents_robotics.webp';

import './Events.css';

function Events() {
  return (
    <div className="Events">
        <h2 style={{marginTop: '120px'}}>Events</h2>
        <div className="calendar">
          <h2>October</h2>
          <div className="event">
            <div className="event-details">
              <caption>mBot Robotics Workshop</caption>
              <img src={mBotRobotics} alt="mBot Robotics" />
            </div>
          </div>
          <h2>November</h2>
          <div className="event">
            <div className="event-details">
              <caption>Primary School Assembly</caption>
              <img src={primaryRobotics} alt="placeholder" />
            </div>
          </div>
          <h2>January</h2>
          <div className="event">
            <div className="event-details">
              <caption>DI@BYTE</caption>
              <img src={diabyte} alt="placeholder" />
            </div>
          </div>
          <h2>February</h2>
          <div className="event">
            <div className="event-details">
              <caption>Hour of Code</caption>
              <img src={hourOfCode} alt="placeholder" />
            </div>
          </div>
          <h2>April</h2>
          <div className="event">
            <div className="event-details">
              <caption>Innovents Robotics</caption>
              <img src={innoventsRobotics} alt="placeholder" />
            </div>
          </div>
        </div>
        <h2>June</h2>
        <div className="event">
          <div className="event-details">
            <caption>DI@TECH</caption>
              <img src="https://placehold.co/300x100" alt="placeholder" />
                    </div>
          </div>
    </div>
  );
}

export default Events;