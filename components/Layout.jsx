import React from 'react'
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div className="d-flex flex-column vh-100">
            <Navigation className="flex-grow-1" />
            <Container className="flex-grow-3">{props.children}</Container>
            <Footer className="flex-grow-1" />
        </div>
    )
}

export default Layout;
