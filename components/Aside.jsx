import React from 'react'
import { Container } from "react-bootstrap";
import Link from "next/link";

const Aside = (props) => {
    return (
        <Container className="w-50">
            {props.reference.map((ref, index) => {
                console.log(ref);
                return (
                    <Link href={`${ref.uid}`} key={index}>
                        <a className="text-dark text-decoration-none">
                            <Container className="shadow m-3 p-3 text-center">{ref.blog_title}</Container>
                        </a>
                    </Link>
                );
            })}
        </Container>
    )
}

export default Aside
