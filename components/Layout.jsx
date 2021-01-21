import React from 'react'
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div className="d-flex flex-column vh-100">
            <Navigation className="flex-1" />
            <Container className="flex-2">{props.children}</Container>
            <Footer className="flex-1" />
        </div>
    )
}

export default Layout;
