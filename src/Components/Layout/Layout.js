import "./Layout.css";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Layout(props) {

  const {children} = props;

  return (
    <div className="layout" >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};