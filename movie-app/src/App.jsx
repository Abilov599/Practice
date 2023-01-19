import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Routing from "./routing";

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
