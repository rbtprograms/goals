import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';

class App extends PureComponent {
  render() { 
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" render={() => <h2>I am home</h2>}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;