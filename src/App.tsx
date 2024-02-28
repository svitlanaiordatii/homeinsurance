import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Page404 from "./components/Page404/Page404";
import Terms from "./components/Terms/Terms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
