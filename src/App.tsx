import { HashRouter, Route, Switch } from 'react-router-dom';

import Number from './pages/Number';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/number' component={Number} />
      </Switch>
    </HashRouter>
  );
}

export default App;
