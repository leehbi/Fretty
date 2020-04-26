import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import GuessNoteGame from "./components/GuessNoteGame";

class App extends React.Component {
  render() {
    return <GuessNoteGame></GuessNoteGame>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
