import "./App.scss";
import { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./Components/topbar/Topbar";
import WorkPlace from "./pages/WorkPlace/WorkPlace";
import CardSetter from "./pages/CardSetter/CardSetter";
import { CardContext } from "./Context/Context";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  const [file, setFile] = useState(null);

  const providerValue = useMemo(
    () => ({
      backgroundColor,
      color,
      file,
      setBackgroundColor,
      setColor,
      setFile,
    }),
    [backgroundColor, color, file, setBackgroundColor, setColor, setFile]
  );

  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          {/* <Route path="/" exact component ={Home}>*/}
          <CardContext.Provider value={providerValue}>
            <Route path="/" exact component={CardSetter} />
            <Route path="/workplace" component={WorkPlace} />
          </CardContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
