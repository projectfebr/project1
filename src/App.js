
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UsersPage } from './components/UsersPage/UsersPage';
import { ServicesPage } from './components/ServicesPage/ServicesPage';
import React, { useState } from 'react';


function App() {

  const [users, setUsers] = useState(
    [
      { id: 0, name: 'Afdf', type: 'License', price: '123' },
      { id: 1, name: 'Fdfdr', type: 'Service', price: '43' },
      { id: 2, name: 'Qdfdf', type: 'License', price: '76' },
      { id: 3, name: 'Dsfl', type: 'Service', price: '345' },
      { id: 4, name: 'Elfdv', type: 'Service', price: '27' },
      { id: 5, name: 'Sdld', type: 'License', price: '74' },
      { id: 6, name: 'Sdldf', type: 'License', price: '234' },
    ]
  )

  const [services, setServices] = useState([
    { id: 0, name: "Cloud" },
    { id: 1, name: "Processing" },
    { id: 2, name: "Store" },
  ])
  const [licenses, setLicenses] = useState([
    { id: 0, name: "Autodesk" },
    { id: 1, name: "Adobe" },
    { id: 2, name: "IBM" },
  ])

  const [balance, setBalance] = useState(0);
  // const BalanceContext = React.createContext();
  // <BalanceContext.Provider balance={balance} onAddBalance={setBalance}>
  //   <AnyComponent>
  // </BalanceContext.Provider>


  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {/* c redux глобальным стейтом не разобрался, приходится прокидывать состояния вниз по иерархии компонентов, и колбеками получать изменения состояний */}
          {/* upd: Можно еще прокидывать через контекст */}
          <Route exact path="/" render={props => <UsersPage
            users={users}
            services={services}
            license={licenses}
            balance={balance}
            onAddBalance={input => { setBalance(balance + input); console.log(`new balance: ${balance}`) }}
          />} />
          {/* админка не реализована */}
          <Route exact path="/services" render={props => <ServicesPage />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
