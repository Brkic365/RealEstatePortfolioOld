import "../styles/globals.css";

import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
