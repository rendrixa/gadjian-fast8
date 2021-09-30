import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Beranda } from "pages/Beranda";
import { DailyAttend } from "pages/DailyAttend";
import { PersonnelList } from "pages/PersonnelList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/beranda" component={Beranda} />
        <Route exact path="/" component={PersonnelList} />
        <Route exact path="/daily" component={DailyAttend} />
      </Switch>
    </Router>
  );
}

export default App;
