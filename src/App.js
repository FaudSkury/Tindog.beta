//React and react utilities imports
import { Routes, Route } from "react-router-dom";

//Pages imports
import WelcomePage from "./user/pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
