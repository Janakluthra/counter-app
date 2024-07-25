// map JSX to DOM
//app component render div
//app component --jsx --vdom -- reactdom ---dom
// DOM render HTML
import App from "./App";
import ReactDOM from "react-dom";

const div = document.getElementById("root"); //DOM
const root = ReactDOM.createRoot(div);
root.render(<App />);
