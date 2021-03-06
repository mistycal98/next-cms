import React from "react";
import Stack from "../stackConfig/stackinitialize";
import Layout from "../components/Layout";
import Blogs from "../components/Blogs";
import Head from "next/head";

const blogs = (props) => {
	return (
		<Layout>
			<Head>
				<title>Blogs | ContentStack Blogs</title>
			</Head>
			{props.blogs.length === "undefined" ? <h1>Loading</h1> : <Blogs blogs={props.blogs} />}
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const Query = Stack.ContentType("blog_cms_tushar").Query();
	let result = await Query.where("title").toJSON().find();
	// console.log(result[0]);
	return {
		props: {
			blogs: [...result[0]],
		},
	};
};

export default blogs;
