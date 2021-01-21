import React from "react";
import { Card, Button } from "react-bootstrap";

const Blogs = (props) => {
  console.log("blogs.jsx", props.blogs);
  return (
    <div>
      {props.blogs.map((blog) => {
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={blog.image_url.url} />
          <Card.Body>
            <Card.Title>{blog.blog_title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>;
      })}
    </div>
  );
};

export default Blogs;
