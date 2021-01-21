import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../fontawesome";
import { Col, Row } from 'react-bootstrap';
import style from "../styles/Icon.module.scss";

function Footer() {
    return (
        <div className=" justify-content-around text-center d-flex p-2 h-auto bg-dark">
            <div className="mx-4 text-white ">
                <h1>Get in Touch ➜</h1>
                <h4>CopyRight @ Tushar Mistry</h4>
            </div>
            <Row className={[style.icon]}>
                <Col>
                    <a href="">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </Col>
                <Col>
                    <a href="">
                        <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                    </a>
                </Col>
                <Col>
                    <a href="">
                        <FontAwesomeIcon icon={["far", "envelope"]} />
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
