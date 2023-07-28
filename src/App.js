import logo from "./logo.svg";
import "./App.css";

function App(props) {
  console.log(props);

  return <p>{props.id}</p>;
}

export default App;
