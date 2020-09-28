import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h4 className="App_subheader">Book Name</h4>
        <h1 className="App_header">Understanding React-Redux</h1>
      </header>

      <section className="Counter">
        <h4 className="App_subheader">Total Time Spent on thr Project</h4>

        <main className="Counter--main">
          <div className="Counter--main_session">
            <span className="Counter_text--grey">Active Session:</span>
            <select className="Counter_text--grey">
              <option>Days</option>
              <option>Hours</option>
              <option>Minutes</option>
              <option>Seconds</option>
            </select>
          </div>

          <div className="Counter--main_values">
            <div>
              <span className="App_text--white Counter_text--large">{23}</span>
              <span className="Counter_text--grey">Days</span>
            </div>
          </div>

          <div className="Counter_separator">:</div>

          <div className="Counter--main_values">
            <div>
              <span className="App_text--white Counter_text--large">{54}</span>
              <span className="Counter_text--grey">Hours</span>
            </div>
          </div>

          <div className="Counter_separator">:</div>

          <div className="Counter--main_values">
            <div>
              <span className="App_text--white Counter_text--large">{876}</span>
              <span className="Counter_text--grey">Minutes</span>
            </div>
          </div>

          <div className="Counter_separator">:</div>

          <div className="Counter--main_values">
            <div>
              <span className="App_text--white Counter_text--large">
                {1235}
              </span>
              <span className="Counter_text--grey">Seconds</span>
            </div>
          </div>
        </main>

        <div className="App_buttons">
          <button className="App_text--white" data-type="INCREASE_COUNTER">
            Increase
          </button>
          <button className="App_text--white" data-type="DECREASE_COUNTER">
            Decrease
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
