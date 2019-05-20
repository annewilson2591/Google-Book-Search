import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route exact path="/books" component={Saved} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;