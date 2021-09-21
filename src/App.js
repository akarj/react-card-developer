import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./Components/topbar/Topbar";
import WorkPlace from "./pages/WorkPlace/WorkPlace";
import CardSetter from "./pages/CardSetter/CardSetter";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          {/* <Route path="/" exact>
          <Home />
            <CardSetter /> */}
          <Route path="/" exact>
            {/* <CardSetter /> */}
            <WorkPlace />
          </Route>
          <Route path="/workplace">
            <WorkPlace />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
