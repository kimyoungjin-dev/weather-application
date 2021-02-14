import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import
import Home from "Routes/Home";
import Nextday from "Routes/Nextday";
import Yesterday from "Routes/Yesterday";
import Status from "Components/Status";

export default ({ weatherIcon, DateArray }) => {
  return (
    <Router>
      <Status />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home weatherIcon={weatherIcon} DateArray={DateArray} />
        </Route>

        <Route exact path="/nextday" component={Nextday}>
          <Nextday weatherIcon={weatherIcon} DateArray={DateArray} />
        </Route>

        <Route exact path="/yesterday" component={Yesterday}>
          <Yesterday weatherIcon={weatherIcon} DateArray={DateArray} />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
