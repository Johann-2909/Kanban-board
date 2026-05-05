import "./App.css";
import Todo from "./components/Todo";
import InProgress from "./components/InProgress";
import Examination from "./components/Examination";
import Done from "./components/Done";

function App() {
  return (
    <>
      <Todo />
      <InProgress />
      <Examination />
      <Done />
    </>
  );
}

export default App;
