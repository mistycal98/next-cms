import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Container, Nav, Navbar } from 'react-bootstrap';
import style from "../styles/Icon.module.scss"

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link href="/">
                <a>
                    <Navbar.Brand>
                        <Image
                            alt="Official logo"
                            src="/50001008.5332ba36.png"
                            width={300}
                            height={70}
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </a>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.burger} />
            <Navbar.Collapse className="justify-content-end mr-0">
                {/* Blogs NavBar */}
                <Nav.Item className="mx-3">
                    <Link href="/blogs">
                        <a className="text-white">Blogs</a>
                    </Link>
                </Nav.Item>

                {/* AboutUs NavBar */}
                <Nav.Item className="mx-3">
                    <Link href="/about">
                        <a className="text-white">About US</a>
                    </Link>
                </Nav.Item>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
