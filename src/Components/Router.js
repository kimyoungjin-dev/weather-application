import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import Nextday from "Routes/Nextday";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nextday" component={Nextday} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
