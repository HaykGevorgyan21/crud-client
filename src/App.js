import "./App.css";
import Getimage from "./form/GetProduct/GetImage";
import UploadAndDisplayImage from "./form/UploadProduct/UploadImage";
import Navigates from "./Navbar/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Search from "./form/SearchProduct/Search";


function App() {
  return (
    <div className="App">
      <Navigates />

      <Routes>
        <Route path="/uploade" element={<UploadAndDisplayImage />} />
        <Route path="/Product" element={<Getimage />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
