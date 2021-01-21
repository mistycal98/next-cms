import React from 'react'
import { Container } from "react-bootstrap";
import Image from "next/image"
import Aside from "./Aside"
import Head from "next/head"

const BlogDetail = (props) => {
    return props.blog.length === 0 ? (
        <h1>Loading</h1>
    ) : (
            props.blog.map((b, index) => {
                // console.log(b);
                return (
                    <Container className="d-flex" key={index} className="m-3">
                        <Head>
                            <title>{b.title}</title>
                            <link rel="icon" href="/medium.png" />
                        </Head>
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
                        <Aside reference={b.reference} />
                    </Container>
                );
            })
        )
}

export default BlogDetail
