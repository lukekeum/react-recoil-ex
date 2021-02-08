import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';

import Number from './pages/Number';
import Todo from './pages/Todo';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/number' component={Number} />
        <Route exact path='/todo' component={Todo} />
      </Switch>
    </HashRouter>
  );
}

export default App;
