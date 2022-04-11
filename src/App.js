import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./Components/Styles/App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      {/* <footer className="footer">Footer</footer> */}
    </div>
  );
}

export default App;
