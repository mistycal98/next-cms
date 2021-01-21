import React from "react";
import Stack from "../../stackConfig/stackinitialize";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import BlogDetail from "../../components/BlogDetail";

const EachBlog = (props) => {
	return (
		<Layout>
			<BlogDetail blog={props.blog} />
		</Layout>
	);
};

export const getServerSideProps = async (context) => {
	const Query = Stack.ContentType("blog_cms_tushar").Query();
	console.log(context.params.hook);
	let result = await Query.where("uid", `${context.params.hook}`)
		// .includeReference(["reference_field_uid"])
		.toJSON()
		.find();
	console.log(result[0]);
	return {
		props: {
			blog: result[0],
		},
	};
};

export default EachBlog;
