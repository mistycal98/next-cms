import React from 'react'
import { Container, Card, Button } from "react-bootstrap";

const BlogDetail = (props) => {
    return props.blog.length === 0 ? (
        <h1>Loading</h1>
    ) : (
            props.blog.map((b, index) => {
                // console.log(b);
                return (
                    <Container className="d-flex" key={index} className="m-3">
                        <Container className="shadow p-3 w-auto">
                            <h3 className="text-center my-3 p-2">{b.blog_author}</h3>
                            <Image
                                className="rounded"
                                src={b.image_url.url}
                                alt={b.blog_title}
                                height={900}
                                width={1600}
                                quality={100}
                            />
                            <h4 className="m-2">{b.blog_title}</h4>
                            <p className="m-2 text-justify">{b.blog_content}</p>
                        </Container>
                        <Container>
                            {b.reference.map((ref, index) => {
                                // console.log(b.url);
                                return (
                                    <Link href={`${ref.uid}`} key={index}>
                                        <a>
                                            <Container className="shadow m-3 p-3 text-center">{ref.uid}</Container>
                                        </a>
                                    </Link>
                                );
                            })}
                        </Container>
                    </Container>
                );
            })
        )
}

export default BlogDetail
