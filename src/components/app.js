import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import store from './../store/Store';

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
      <Provider store={store}>
        <div id="app">
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
        </div>
      </Provider>
		);
	}
}