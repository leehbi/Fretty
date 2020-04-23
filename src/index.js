import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameAreaClass from "./components/GameAreaClass";

class App extends React.Component {
  state = { currentScore: 0, key: 1 };

  onNoteSubmit = (note, rNote, score) => {
    // check note and rNote match, if true increment score
    //this.incrementScore();
    //this.incrementKey();
    this.CheckAnswer(note, rNote);
  };

  CheckAnswer = (guess, note) => {
    //Search for between 1 and 2 chars i.e. C or C#
    const myRe = /[abcdefg#]{1,2}/;
    const noteOnly = myRe.exec(note);

    if (guess.toLowerCase() === noteOnly[0]) {
      this.incrementScore();
    } else {
      this.decrementScore();
    }

    this.incrementKey();
  };

  incrementKey() {
    this.setState((state) => {
      return { key: state.key + 1 };
    });
  }

  incrementScore() {
    this.setState((state) => {
      return { currentScore: state.currentScore + 1 };
    });
  }

  decrementScore() {
    this.setState((state) => {
      return { currentScore: state.currentScore - 1 };
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Fretty - the guitar game</h2>
        <NavBar />

        <div className="row mt-4">
          <SideBar gamename="Guess the note" />

          <GameAreaClass
            onSubmit={this.onNoteSubmit}
            key={this.state.key}
          ></GameAreaClass>
          <div className="row col-4 pt-5">
            <div className="alert alert-primary">
              Score : {this.state.currentScore}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
