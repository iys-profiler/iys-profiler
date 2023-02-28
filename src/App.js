
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
          <Route path="/iys-profile/popular-category">
            <SkillPopCatApi />
          </Route>
          <Route path="/iys-profile/category">
            <SkillCatApi />
          </Route>
          <Route path="/iys-profile/">
            <SerachApiCop />
          </Route>
        </Switch>

    </Router >
  );
}

export default App;
