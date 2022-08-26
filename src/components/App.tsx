import React from 'react';
import Header from './base/Header';
import Footer from './base/Footer';
import MainPage from './MainPage'
import WorkPage from './WorkPage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import ScrollToTop from './scrolltotop';
import '../assets/css/style.scss'

const theme = createTheme()

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
                    <Routes location={location}>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/works" element={<WorkPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<MainPage />} />
                    </Routes>
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