import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/panel" element={<Dashboard />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
