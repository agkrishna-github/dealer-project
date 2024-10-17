import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
