
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UsersPage } from './components/UsersPage/UsersPage';
import { ServicesPage } from './components/ServicesPage/ServicesPage';


function App() {
  return (


    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" render={props => <UsersPage />} />
          <Route exact path="/services" render={props => <ServicesPage />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
