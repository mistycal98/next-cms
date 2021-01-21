import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Link from "next/link";

const Blogs = (props) => {
    console.log("blogs.jsx", props.blogs);
    return (
        <Container className="d-flex flex-row">
            {props.blogs.map((blog, index) => {
                return (
                    <Card className="m-3 h-auto " style={{ width: "18rem" }} key={index}>
                        <Card.Img variant="top" src={blog.image_url.url} />
                        <Card.Body>
                            <Card.Title>{blog.blog_title}</Card.Title>
                            <Link href={`blogs/${blog.uid}`}>
                                <a><Button variant="primary">Read More</Button></a>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </Container>
    );
};

export default Blogs;
