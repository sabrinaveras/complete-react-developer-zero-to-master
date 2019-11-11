import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

/*
*    <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively. Consider these routes:
*
*    If the URL is /about, then <About>, <User>, and <NoMatch> will all render because they all match the path. This is by design, allowing us to compose <Route>s
*    into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs, etc.Occasionally, however, we want to pick only one <Route> to render. If we’re at
*    /about we don’t want to also match /:user (or show our “404” page). Here’s how to do it with Switch:
*
*    Now, if we’re at /about, <Switch> will start looking for a matching <Route>. <Route path="/about"/> will match and <Switch> will stop looking for matches and
*    render <About>. Similarly, if we’re at /michael then <User> will render.This is also useful for animated transitions since the matched <Route> is rendered in
*    the same position as the previous one.
*/


function App() {
     return (
          <div>
               <Switch>{/* Renders the first child <Route> or <Redirect> that matches the location. */}
                    {/*<HomePage/>*/}
                    <Route exact path="/" component={HomePage} />

                    <Route path="/shop" component={ShopPage} />
               </Switch>
          </div>
     );
}

export default App;
