import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

/*
*    <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location
*    renders inclusively. Consider these routes:
*
*    If the URL is /about, then <About>, <User>, and <NoMatch> will all render because they all match the path. This is
*    by design, allowing us to compose <Route> into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs,
*    etc. Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t want to also
*    match /:user (or show our “404” page). Here’s how to do it with Switch:
*
*    Now, if we’re at /about, <Switch> will start looking for a matching <Route>. <Route path="/about"/> will match and
*    <Switch> will stop looking for matches and render <About>. Similarly, if we’re at /michael then <User> will render.
*    This is also useful for animated transitions since the matched <Route> is rendered in the same position as the
*    previous one.
*/


/*
*
*   Navigation using the history props
*
*    If instead we wanted to use a button and in the on click of our button we would pass it a function that gets called
*    whenever it gets clicked.
*
*    And in this function we would call the history prop right and we would tell it do push and then the string where we
*    want to go.
*
*    <button onClick={() => props.history.push('/contact')}>Contact</button>
*
*    So this is equivalent to using a link but it gives us more dynamic access.
*
* */


class App extends React.Component{
     
     constructor(props){
          super(props);

          this.state = {
               currentUser: null
          };
     }

     unsubscribeFromAuth = null;

     // Check if the user is login with Google account
     componentDidMount() {
          
          this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
               // await createUserProfileDocument(user);

               if(userAuth){
                    const userRef = await createUserProfileDocument(userAuth);

                    await userRef.onSnapshot(snapshot => {
                         this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } }, () => {
                              // console.log(this.state);
                         })
                    });
               }
               this.setState({ currentUser: userAuth });
          });
          
     };

     componentWillUnmount() {
          
          this.unsubscribeFromAuth();
          
     }

     render() {
          
          return (
               <div>
                    {/* nav bar */}
                    <Header currentUser={this.state.currentUser} />
                    
                    <Switch>{/* Renders the first child <Route> or <Redirect> that matches the location. */}
                    
                         {/*<HomePage/>*/}
                         <Route exact path="/" component={HomePage} />
                         
                         <Route path="/shop" component={ShopPage} />
                         
                         <Route path="/signin" component={SignInAndSignUpPage} />
                    </Switch>
               </div>
          );
          
     }
     
}

export default App;
