import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"
import Nav from "./components/Nav.jsx";
import Users from "./pages/Users.jsx"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/users/:username" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
