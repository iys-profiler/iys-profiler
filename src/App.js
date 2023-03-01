
import './App.css';

import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SerachApiCop from './components/maincomponents/SerachApiCop';
import SkillCatApi from './components/maincomponents/SkillCatApi';
import SkillPopCatApi from './components/maincomponents/SkillPopCatApi';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/popular-category">
            <SkillPopCatApi />
          </Route>
          <Route path="/category">
            <SkillCatApi />
          </Route>
          <Route path="/">
            <SerachApiCop />
          </Route>
        </Switch>

    </Router >
  );
}

export default App;
