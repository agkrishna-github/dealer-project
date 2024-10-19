import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />

      {/*  <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="details" element={<Details />} />
      </Routes> */}
    </div>
  );
}

export default App;
