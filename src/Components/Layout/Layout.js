import "./Layout.css";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout(props) {

  const {children} = props;

  return (
    <div 
      className="layout"
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};