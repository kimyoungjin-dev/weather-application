import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import Nextday from "Routes/Nextday";
import Yesterday from "Routes/Yesterday";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nextday" component={Nextday} />
        <Route exact path="/yesterday" component={Yesterday} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
