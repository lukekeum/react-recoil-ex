import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';

import Number from './pages/Number';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/number' component={Number} />
      </Switch>
    </HashRouter>
  );
}

export default App;
