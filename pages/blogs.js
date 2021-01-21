import React from "react";
import Stack from "../stackConfig/stackinitialize";
import Layout from "../components/Layout";

const blogs = (props) => {
	return <Layout>Blogs Tile Page</Layout>;
};

export const getServerSideProps = async () => {
	const Query = Stack.ContentType("blog_cms_tushar").Query();
	let result = await Query.where("title").toJSON().find();
	// console.log(result[0][0].reference);
	return {
		props: {
			blogs: { ...result },
		},
	};
};

export default blogs;
