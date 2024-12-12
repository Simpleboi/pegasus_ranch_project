import React from "react";
import "../styles/summer.scss";
import summerBanner from "/assets/images/schedule-mini-banner.jpg";

export const Summer: React.FC = () => {
  return (
    <aside className="summer">
      <div className="summer-container">
        <h1>Summer Schedule</h1>
        <h3>Cowboys & Cowgirls ages 6 - 15</h3>
        <div className="summerDates-container">
          <button>Session 1: May 26th - 31st</button>
          <button>Session 2: June 2nd - 7th</button>
          <button>Session 3: June 9th - 14th</button>
          <button>Session 4: June 16th - 21st</button>
          <button>Session 5: June 23rd - 28th</button>
          <button>Session 6: July 7th - 12th</button>
          <button>Session 7: July 14th - 19th</button>
          <button>Session 8: July 21st - 26th</button>
          <button id="payment">Payment Plans Available. To learn more, click <a href="#">here</a></button>
        </div>
      </div>
      <div className="summer-right-container">
        <figure className="summer-image">
            <img src={summerBanner} alt="#" />
        </figure>
        <h3>We are confident that your child will love their stay at the Pegasus Ranch where they will learn many new things as well as make life long friends!</h3>
      </div>
    </aside>
  );
};
