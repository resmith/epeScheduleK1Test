import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

// Components
import Header from './pages/Header';
import ScheduleK1s2 from './pages/ScheduleK1s2';
import ScheduleK1s3 from './pages/ScheduleK1s3';
import { _getScheduleK1s } from './utils/_DATA';

// Styling
import './App.css';

/**
 * Book App
 * Kept the App thin to decrease load time
 * and prevent unloading unneccessary items (e.g. Books for Bookshelves when doing search)
 * @abstract   Highest level of the application
 * @param {void}  No parameters are passed in (URL only)
 */
class scheduleK1App extends Component {
  componentWillMount() {
    this.setState(() => ({
      scheduleK1s: [],
      step: 1,
    }));

    _getScheduleK1s()
      .then((scheduleK1s) => {
        this.setState(() => ({
          scheduleK1s,
        }));
      });
  }

  render() {
    return (
      <div>

        <Route exact path="/" render={() => (
          <div>
            <Header step={this.state.step} />
            <ScheduleK1s2
              scheduleK1s={this.state.scheduleK1s}
            />
          </div>
        )}/>

        <Route exact path="/step2" render={() => (
          <div>
            <Header step={this.state.step} />
            <ScheduleK1s2
              scheduleK1s={this.state.scheduleK1s}
            />
          </div>
        )}/>

        <Route exact path="/step3" render={() => (
          <div>
            <Header step={this.state.step} />
            <ScheduleK1s3
              scheduleK1s={this.state.scheduleK1s}
            />
          </div>
        )}/>

        <ReactTooltip />
      </div>
    );
  }
}

export default scheduleK1App;
