
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UsersPage } from './components/UsersPage/UsersPage';
import { ServicesPage } from './components/ServicesPage/ServicesPage';
import React, { useState } from 'react';


function App() {

  const [users, setUsers] = useState(
    [
      { id: 0, name: 'AutoDesk', type: 'License', price: '15' },
      { id: 1, name: 'Cloud', type: 'Service', price: '100' },
      { id: 2, name: 'Adobe', type: 'License', price: '200' },
      { id: 3, name: 'Store', type: 'Service', price: '25' },
      { id: 4, name: 'Processing', type: 'Service', price: '50' },
      { id: 5, name: 'IBM', type: 'License', price: '23' },
    ]
  )

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
            balance={balance}
            onAddBalance={input => { setBalance(balance + input) }}
            onAddService={newService => { setUsers([...users, newService]) }}
          />} />
          {/* админка не реализована */}
          <Route exact path="/services" render={props => <ServicesPage />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
