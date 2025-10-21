import "./App.css";
import "es6-promise/auto";
import "intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/components/About";
import ReasonForPawning from "./pages/components/ReasonsForPawning";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter basename="/gopuramfinancewebsite">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ReasonsforPawning" element={<ReasonForPawning />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
