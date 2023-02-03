import "./Layout.css";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout(props) {

  const {children} = props;

  return (
    <div className="layout" >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};