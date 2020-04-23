import React from "react";
import { Fretboard, Tunings } from "fretboards";

const Fretboardd = () => {
  const config = {
    frets: 12, // Number of frets to display
    startFret: 0, // Initial fret
    strings: 6, // Strings
    tuning: Tunings.guitar6.standard, // Tuning: default = Standard Guitar
    fretWidth: 50, // Display width of frets in pixels
    fretHeight: 20, // Display heigh of frets in pixels
    leftHanded: false, // Show mirror image for left handed players
    showTitle: false, // Set the note name as the title, so it will display on hover
  };

  let board = Fretboard(config);
  board.draw();
};

export default Fretboardd;
