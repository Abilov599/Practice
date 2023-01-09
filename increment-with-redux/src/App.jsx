import { useSelector } from "react-redux";
import "./App.css";
import ClearBtn from "./components/clear";
import Decrement from "./components/decrement";
import Increment from "./components/increment";
import IncrementByInputValue from "./components/increment-by-input-value";
import Input from "./components/input";

function App() {
  const count = useSelector((el) => el.counterReducer.count);
  return (
    <main className="App">
      <Increment />
      <span>{count}</span>
      <Decrement />
      <br />
      <Input />
      <br />
      <IncrementByInputValue />
      <br />
      <ClearBtn />
    </main>
  );
}

export default App;
