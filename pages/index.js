import Head from "next/head";
import Stack from "../stackConfig/stackinitialize";

const Home = () => {
  return (
    <div>
      <Head>
        <title>ContentStack Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};



export const getStaticProps = async () => {
  const Query = Stack.ContentType("blog_cms_tushar").Query();
  let result = await Query.where().toJSON().find();
  console.log(result);
  return {
    props: {
      blogs: [...result],
    },
  };
};

export default Home;
