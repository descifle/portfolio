import React from 'react';
import Header from './base/Header';
import Footer from './base/Footer';
import MainPage from './MainPage'
import WorkPage from './WorkPage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ScrollToTop from './scrolltotop';
import './style.scss'

const theme = createMuiTheme()


const App = () => {

    const timeout = { enter: 800, exit: 800 }

    let location = useLocation()

    const outputClassname = () => "left"

    return (
        <ThemeProvider theme={theme}>
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
                }}
                onExited={() => {
                    document.body.style.overflow = "initial"
                }}
                >
                    <div className={
                        outputClassname()
                    }>
                    <Switch location={location}>
                        <Route exact def name="home" path="/" component={MainPage} />
                        <Route exact name="about" path="/about" component={AboutPage} />
                        <Route exact name="works" path="/works" component={WorkPage} />
                        <Route exact name="contact" path="/contact" component={ContactPage} />
                        <Route path="*" component={MainPage} />
                    </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
            <ScrollToTop></ScrollToTop>
            </>
        </ThemeProvider>
    )
}

export default App