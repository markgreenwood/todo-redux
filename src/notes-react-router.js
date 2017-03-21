// Routing!

// Front-side routing refers to changing the location in the url bar in the browser
// routes are the entry points to different points of app

/* React Router
    Routes are also state (which changes), and need to be kept in sync with your app 
    routes are typically imperative - we say, go to this route, and the app changes 
    if you reload a page, you want your app to be able to load the correct view
    router goes against React a bit, since it is imperative and React is declarative

    React router v4 is very declarative, you say where the routes are, and it resolves them
    but it's still in beta, so we're likely to run into some problems with it
*/

/* Front side routing libraries are helpful because they allow us to overwrite
    the default behavior of the browser - the browser wants to reload a page
    when you give it a new url, we're preventing this behavior and injecting a fake
    history in the browsers history (using push state to history)
*/


// Getting react router working

// Let's set up a new index.js file which uses react, redux, and router

// npm i -D react-router-dom

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';    // this brings in our redux store
import { Provider } from 'react-redux';   // wrap the app in a provide to connect to redux
import { BrowserRouter, Link, Route } from 'react-router-dom';


// Provider
/*  This top level component we pull in from react-dom to connect react to 
    react-redux. It should basically be the outermost tag in your entire app, 
    because this is what gives your app access to Redux.
*/
    <Provider>{ /*entire App goes in here*/ }</Provider>

// BrowserRouter
/*  this provides context to the app so that it can use the react-router-dom 
    without having to pass in props
*/    
    <BrowserRouter>{ /*inside Provider, all Routes in here*/ }</BrowserRouter>

// Link
/*  the "Link" tag is used to make what used to be an <a href="">
    * It prevents the default behavior to change the page
    * It changes our url bar displayed address 
    * It does the push state to create history for us
*/
    <Link to="somewhere"></Link>  // http://localhost:3000/somewhere

 /* Route 
    The "Route" tag tells the router what are valid routes to use - defines what gets rendered
    Route tags are the map between what route url should load which component
    They can be "exact" matches of a path, or not (fuzzy)

    Routes should be thought about as links to components, NOT links to a page

    All Route tags need to be nested inside a single component (like a div)
 */

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route exact path='/somewhere' component={Somewhere} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)


// If we create a fuzzy matching link, we need to write our own component to deal
// with 'matching' the subroutes

const Topic = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <Link to={`${match.url}/rendering`}>Rendering</Link>
        <Link to={`${match.url}/components`}>Components</Link>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

// The first link creates a link to a sub-url for topics/rendering
// The second link creates a link to topics/components
// The first route does a match for a topic id and then loads the correct component 
// The second route is the default display text for hitting topics/


/* React router gives us access to: history, match, and location props

    When we change our state related to view, we now also want to change the history bar:
*/

selectView = selectedView => {
    this.props.history.push(selectedView);
    this.setState({ selectedView });
}

// we could move this part of the state out of the main react component, and just keep
// it in the router / url bar

<Route path='/:filter(active|completed|all)' component={App} />

// this uses the /: to say the next thing is a param and grab what follows
// if you pass in (), anything inside the params is a 'white list' separated by pipes