import React from 'react';
import Header from './base/Header';
import Footer from './base/Footer';
import MainPage from './MainPage'
import WorkPage from './WorkPage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ScrollToTop from './scrolltotop';
import './style.scss'

const App = () => {

    // allow turning off of animation

    const timeout = { enter: 800, exit: 800 }

    let location = useLocation()
    // let history = useHistory()
    // const possiblePaths = ['/home', '/works', '/contact']

    const outputClassname = () => {
        return "left"
        // if(history.location.pathname !== "/") {
        //     // const pathFrom = possiblePaths.indexOf(history.location.state.from)
        //     // const currentPath = possiblePaths.indexOf(history.location.pathname)
        //     if(history.location.state.from === "/works") return "left"
        //     if(history.location.state.from === "/contact") return "left"
        //     if(history.location.state.from === "/home") return "left"
        // }
    }

    return (
        <>
            <Header />
            <TransitionGroup>
                <CSSTransition timeout={timeout}
                classNames="pageSlider" 
                key={location.key}
                mountOnEnter={true}
                unmountOnExit
                onEntering={() => {
                    document.body.style.overflow = "hidden"
                    // document.querySelector('.page-container').style.marginTop = "0"
                }}
                onExited={() => {
                    document.body.style.overflow = "initial"
                    // document.querySelector('.page-container').style.marginTop = "2rem"
                }}
                >
                    <div className={
                        outputClassname()
                    }>
                    <Switch location={location}>
                        <Route exact name="home" path="/" component={MainPage} />
                        <Route exact name="about" path="/about" component={AboutPage} />
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