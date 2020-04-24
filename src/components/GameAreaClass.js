import React from "react";
import { Fretboard, Tunings } from "fretboards";

const GenerateFret = (leftHanded, naturalNote) => {
  const config = {
    frets: 12, // Number of frets to display
    startFret: 0, // Initial fret
    strings: 6, // Strings
    tuning: Tunings.guitar6.standard, // Tuning: default = Standard Guitar
    fretWidth: 50, // Display width of frets in pixels
    fretHeight: 20, // Display heigh of frets in pixels
    leftHanded,
    showTitle: true, // Set the note name as the title, so it will display on hover
    where: "#fret",
  };

  const notes =
    "6:e2 6:f2 6:f#2 6:g2 6:g#2 6:a2 6:a#2 6:b2 6:c3 6:c#3 6:d3 6:d#3 6:e3 " +
    "5:a2 5:a#2 5:b2 5:c3 5:c#3 5:d3 5:d#3 5:e3 5:f3 5:f#3 5:g3 5:g#3 5:a3 " +
    "4:d3 4:d#3 4:e3 4:f3 4:f#3 4:g3 4:g#3 4:a3 4:a#3 4:b3 4:c4 4:c#4 4:d4 " +
    "3:g3 3:g#3 3:a3 3:a#3 3:b3 3:c4 3:c#4 3:d4 3:d#4 3:e4 3:f4 3:f#4 3:g4 " +
    "2:b3 2:c4 2:c#4 2:d4 2:d#4 2:e4 2:f4 2:f#4 2:g4 2:g#4 2:a4 2:a#4 2:b4 " +
    "1:e4 1:f4 1:f#4 1:g4 1:g#4 1:a4 1:a#4 1:b4 1:c5 1:c#5 1:d5 1:d#5 1:e5";

  let noteList = notes.split(" ");

  //Set regex to match #
  const re = /^((?!#).)*$/;
  //Apply to noteList to filter out sharps
  const naturalNotes = noteList.filter((n) => n.match(re));

  let randomNote = "";
  if (naturalNote) {
    randomNote = naturalNotes[Math.floor(Math.random() * naturalNotes.length)];
  } else {
    randomNote = noteList[Math.floor(Math.random() * noteList.length)];
  }

  let board = Fretboard(config);
  board.draw(randomNote);
  return randomNote;
};

class GameAreaClass extends React.Component {
  state = { note: "", rNote: "", score: 0 };

  componentDidMount() {
    this.drawFretboard();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.leftHanded !== this.props.leftHanded ||
      prevProps.naturalNote !== this.props.naturalNote
    ) {
      const fretboard = document.querySelector(".fretboard");
      fretboard.remove();
      this.drawFretboard();
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.note, this.state.rNote, this.state.score);
  };

  drawFretboard() {
    const ranNote = GenerateFret(this.props.leftHanded, this.props.naturalNote);
    this.setState({ rNote: ranNote });
    this.nameInput.focus();
  }

  render() {
    return (
      <div id="fret" className="col- border border-primary pt-3 pl-2">
        <div>
          <form onSubmit={this.onFormSubmit} className="form-inline">
            <label htmlFor="guessednote">Guess the note?</label>
            <div className="col-6">
              <input
                ref={(input) => {
                  this.nameInput = input;
                }}
                type="text"
                value={this.state.note}
                onChange={(e) => this.setState({ note: e.target.value })}
                className="form-control"
                id="guessednote"
              />
              <button type="submit" className="btn btn-primary ml-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default GameAreaClass;
