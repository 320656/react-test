import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationSelectionPage from './LocationSelectionPage';
import WeatherDisplayPage from './WeatherDisplayPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LocationSelectionPage} />
          <Route path="/weather/:location" component={WeatherDisplayPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
