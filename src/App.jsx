import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

import "./FirstScreen.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/second" element={<SecondScreen />} />
                <Route path="/third" element={<ThirdScreen />} />

      </Routes>
    </Router>
  );
}

export default App;
