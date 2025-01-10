import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Auth from "./pages/Auth/Auth";
import Chat from "./pages/Chat/Chat";

import { rootPath, chatPath } from "./constants/paths";

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to={rootPath} />
      <Route path={rootPath} exact component={Auth} />
      <Layout>
        <Route path={chatPath} component={Chat} />
      </Layout>
    </Switch>
  </Router>
);

export default App;
