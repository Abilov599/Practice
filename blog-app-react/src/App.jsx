import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layouts/header";
import BlogDetails from "./pages/blog-details";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";
import NewBlog from "./pages/new-blog";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
