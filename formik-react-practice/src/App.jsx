import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyForm from "./components/form";
import Header from "./layouts/header";
import HomePage from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<MyForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
