import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentList from "./Student";
import FavouriteStudents from "./Favourite";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="text-center mt-9">
        <Link to="/">Students</Link> |{" "}
        <Link to="/favourites">Favourites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/favourites" element={<FavouriteStudents />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
