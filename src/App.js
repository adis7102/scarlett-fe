import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/index.jsx";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
