import React, { useState, useEffect } from 'react';
import Header from './base/Header';
import Footer from './base/Footer';
import MainPage from './MainPage'
import WorkPage from './WorkPage'
import ContactPage from './ContactPage'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ScrollToTop from './scrolltotop';
import './style.scss'

const App = () => {

    const timeout = { enter: 1000, exit: 400 }

    let location = useLocation()
    let history = useHistory()
    const possiblePaths = ['/', '/works', '/contact']

    return (
        <>
            <Header />
            <TransitionGroup>
                <CSSTransition timeout={timeout}
                classNames="pageSlider" 
                key={location.key}
                mountOnEnter={false}
                unmountOnExit={true}
                >
                    <div className={
                        possiblePaths.indexOf(history.location.state.from) > possiblePaths.indexOf(history.location.pathname) ?
                        "right" : "left"
                    }>
                    <Switch location={location}>
                        <Route exact name="home" path="/" component={MainPage} />
                        <Route exact name="works" path="/works" component={WorkPage} />
                        <Route exact name="contact" path="/contact" component={ContactPage} />
                        {/* <Route path="*"><div>Not Found</div></Route> */}
                        {/* <Route name="about" path="/about" component={Content} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} /> */}
                    </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
            <ScrollToTop></ScrollToTop>
        </>
    )
}

export default App