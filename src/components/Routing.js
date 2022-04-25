import { Route } from "react-router-dom";
import React from "react";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function HomeSpecial() {
  return <div>Home Special</div>;
}

function Login() {
  return <div>Login</div>;
}
function PageNotFound() {
  return <div>PageNotFound</div>;
}

function Routing() {
  return (
    <>
      <div>Routing Example</div>
      {/*we may face problem in routing like matching of two routes ---> 
      /abc and /Home/abc will show both Home and abc component so to avoid this we use Switch , Switch is generally used to execute the first matched route
      */}
      <Switch>
        <Route path="/Home" exact>
          <Home></Home>
        </Route>

        <Route path="/Home/special">
          <HomeSpecial></HomeSpecial>
        </Route>

        <Route path="/Login">
          <Login></Login>
        </Route>
        {/* it redirects the user to another page , which causes rendering of redirected page --> Home in this case */}
        <Redirect from="/" to="/home"></Redirect>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </>
  );
}

export default Routing;
