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
                <Col className="p-3">
                    <a href="">
                        <FontAwesomeIcon className="text-white" icon={["fab", "github"]} size="3x" />
                    </a>
                </Col>
                <Col className="p-3 text-white">
                    <a href="">
                        <FontAwesomeIcon className="text-white" icon={["fab", "whatsapp"]} size="3x" />
                    </a>
                </Col>
                <Col className="p-3 text-white">
                    <a href="">
                        <FontAwesomeIcon className="text-white" icon={["far", "envelope"]} size="3x"  />
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
