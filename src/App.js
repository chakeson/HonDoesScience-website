import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
//Page import
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Research from "./pages/Research";
import About from "./pages/About";
import Error from "./pages/Error";
//Component import
import Navbar from "./components/navbar"
import EndAbout from "./components/endAbout"

function App() {
	return (
	  <Router>
		<Navbar />
		<Switch>
		  <Route exact path="/">
			<Home />
		  </Route>
		  <Route exact path="/home">
			<Home />
		  </Route>
		  <Route path="/video">
			<Videos />
		  </Route>
		  <Route path="/videos">
			<Videos />
		  </Route>
		  <Route path="/research">
			<Research />
		  </Route>
		  <Route path="/about">
			<About />
		  </Route>
		  <Route path="*">
			<Error />
		  </Route>
		</Switch>
		<EndAbout />
	  </Router>
	);
  }

export default App;
