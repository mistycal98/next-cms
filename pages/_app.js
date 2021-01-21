import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

console.log("_app.js",process.env.HELLO);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
