import React, { Component } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import '../../scss/navbar.scss'

export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        style: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
            },
            {
                id: 2,
                path: '/tours',
                text: 'tours'
            },
            {
                id: 3,
                path: '/blog',
                text: 'blog'
            },
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({ navbarOpen: false, style: 'collapse navbar-collapse' }) : this.setState({ navbarOpen: true, style: 'collapse navbar-collapse show' })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let activeClass = 'dark-nav';
            if (window.scrollY === 0) {
                activeClass = '';
            }
            this.setState({ activeClass });
        });
    }

    render() {
        return (
            <nav className={`navbar navbar-expand-md fixed-top ${this.state.activeClass}`}>
                <div className="container">
                    <AniLink to="/" fade className="navbar-brand">V<span>-Travel</span></AniLink>
                    <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                        <span className="menu-custom"></span>
                    </button>
                    <div className={this.state.style}>
                        <div className="navbar-nav">
                            {
                                this.state.links.map((link) => {
                                    return (
                                        <li key={link.id} className="nav-item">
                                            <AniLink fade to={link.path} className="nav-link text-capitalize">
                                                {link.text}
                                            </AniLink>
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
