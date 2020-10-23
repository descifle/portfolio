import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Contact from './Contact';
import Content from './Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './scrolltotop';

const App = () => {

    return (
        <Router>
            <Header />
            <Switch>
                <Route name="home" path="/" exact component={Content} />
                <Route name="about" path="/about" component={Content} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
            <ScrollToTop></ScrollToTop>
        </Router>
    )
}

export default App