import "./App.css";

import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

export default function App(props) {

  const {children} = props;

  return (
    <div 
      className="App"
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};