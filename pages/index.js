import Head from "next/head";
import Layout from "../components/Layout";
import { Card } from "react-bootstrap";

const Home = (props) => {
	return (
		<Layout>
			<Head>
				<title>Home | ContentStack Blogs</title>
				<link rel="icon" href="/medium.png" />
			</Head>
			<Card className="w-50 h-auto  my-4 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
				<h3 className="text-center m-3">Instruction</h3>
				<ul>
					<li>NextJS ContentStack-Blog Server Side Rendering</li>
					<li>Individual Pages of Each Blog (Get started by clicking Blogs in Navbar)</li>
					<li>Styling done using React-Bootstrap Components and SCSS</li>
					<li>On Clicking to logo you will be redirected to home page </li>
				</ul>
			</Card>
		</Layout>
	);
};

export default Home;
