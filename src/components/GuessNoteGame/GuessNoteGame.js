import React from "react";
import SideBar from "./SideBar";
import GameAreaClass from "./GameAreaClass";
import NavBar from "./NavBar";

const ENHARMONIC = {
  ab: "g#",
  bb: "a#",
  db: "c#",
  eb: "d#",
  gb: "f#",
};

class GuessNoteGame extends React.Component {
  state = {
    currentScore: 0,
    key: 1,
    leftHanded: false,
    naturalNote: false,
    showTitle: false,
  };

  onNoteSubmit = (note, rNote, score) => {
    // check note and rNote match, if true increment score
    //this.incrementScore();
    //this.incrementKey();
    this.CheckAnswer(note.toLowerCase(), rNote);
  };

  CheckAnswer = (guess, note) => {
    //Search for between 1 and 2 chars i.e. C or C#
    const myRe = /[abcdefg#]{1,2}/;
    const noteOnly = myRe.exec(note);

    if (guess === noteOnly[0] || ENHARMONIC[guess] === noteOnly[0]) {
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

  leftHandedChanged = (checkbox) => {
    this.setState((state) => {
      return { leftHanded: checkbox.checked };
    });
  };

  naturalNoteChanged = (checkbox) => {
    this.setState((state) => {
      return { naturalNote: checkbox.checked };
    });
  };

  showTitleChanged = (checkbox) => {
    this.setState((state) => {
      return { showTitle: checkbox.checked };
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Fretty - the guitar game</h2>
        <NavBar />
        <div className="row mt-4">
          <SideBar
            gamename="Guess the note"
            leftHandedChanged={this.leftHandedChanged}
            naturalNoteChanged={this.naturalNoteChanged}
            showTitleChanged={this.showTitleChanged}
          />

          <GameAreaClass
            onSubmit={this.onNoteSubmit}
            leftHanded={this.state.leftHanded}
            naturalNote={this.state.naturalNote}
            showTitle={this.state.showTitle}
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

export default GuessNoteGame;
