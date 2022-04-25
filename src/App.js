import Home from "./components/Home";
import Login from "./components/Login";
import New from "./components/New";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/Navbar";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/new">
          <New></New>
        </Route>

        <Redirect from="/" to="/home" />

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
