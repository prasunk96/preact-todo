import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home/Home';
import Notes from '../routes/notes/Notes';
import store from './../store/Store';


const client = new ApolloClient({
  uri: "http://localhost:3100/graphql"
});


export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div id="app">
            <Header />
            <div class="container content">
            <Router onChange={this.handleRoute}>
              <Home path="/" />
              <Notes path="/notes" />
            </Router>
            </div>
          </div>
        </Provider>
      </ApolloProvider>
		);
	}
}
