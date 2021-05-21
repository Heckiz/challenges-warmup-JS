import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import './styles/App.scss'

//Components
import Navigation from './components/Navigation';
import Home from './views/Home';

//Redux
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import EditPost from './components/EditPost';

function App() {

  const store = generateStore();
  return (
    <Provider store={store}>

        <Router>
          <Navigation/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </Router>

    </Provider>
  );
}

export default App;
