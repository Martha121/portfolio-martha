import React, { Component } from 'react';
import classes from './NavBar.module.css';
import hamIcon from './hamburgericon.png';
import { Route, HashRouter, NavLink } from 'react-router-dom';

import Home from '../../contents/Home';
import About from '../../contents/About';
import Education from '../../contents/Education';
import Projects from '../../contents/Projects';
import Skills from '../../contents/Skills';
import Contact from '../../contents/Contact';

export default class NavBar extends Component {

    state = {
        drawer: false,
    };

    toggleMenuHandler = () => {
        this.setState({ drawer: !this.state.drawer });
    }

    componentDidMount() {
        window.addEventListener("resize", (e) => {
            if (e.target.innerWidth >= 930) {
                this.setState({ drawer: false });
            }
        })
    }

    render() {

        let assignedClasses = [];
        assignedClasses.push(classes.menuCont);

        if (this.state.drawer === true) {
            assignedClasses.push(classes.open);
        };

        return (
            <HashRouter className="nav">
                <div className={classes.rootCont} >
                    <div className={classes.navBarCont}>

                        <div className={classes.hamburgerCont}>
                            <img className={classes.hamLogo} onClick={this.toggleMenuHandler} src={hamIcon} alt="Hamburger-Icon" />
                        </div>

                        <div className={classes.logoCont}>
                            <p className={classes.logoTextFirst}>Martha</p>
                            <p className={classes.logoTextLast}>Gamez</p>
                        </div>

                        <div className={classes.navListCont}>
                            <div className={classes.navList}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/">Home</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/about">About</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/education">Education</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/projects">Projects</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/skills">Skills</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/contact">Contact</NavLink>
                            </div>
                        </div>

                    </div>

                    <div className={assignedClasses.join(' ')}>
                        <div className={classes.mobileNavList}>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/">Home</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/about">About</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/education">Education</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/projects">Projects</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/skills">Skills</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
            </HashRouter>
        );
    }
}   