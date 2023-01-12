import "./App.css";
import Header from "./layouts/header";
import Routing from "./routes";
import Footer from "./layouts/footer";

function App() {
  return (
    <main className="App">
      <Header />
      <Routing />
      <Footer />
    </main>
  );
}

export default App;
