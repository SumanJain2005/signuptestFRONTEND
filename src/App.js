import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
