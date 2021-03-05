import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Form from '../pages/Form';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/contato" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
