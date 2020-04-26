import React from "react";

const SideBar = (props) => {
  return (
    <div className="col-4">
      <p>The game currently has the following game types</p>
      <ul>
        <li>{props.gamename}</li>
      </ul>
      <p>You are able to adjust the settings below to customise the game.</p>

      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="lefthand"
          checked={props.leftHanded}
          onChange={(e) => props.leftHandedChanged(e.target)}
        />
        <label className="custom-control-label" htmlFor="lefthand">
          Left Handed
        </label>
      </div>

      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="natural"
          checked={props.naturalNote}
          onChange={(e) => props.naturalNoteChanged(e.target)}
        />
        <label className="custom-control-label" htmlFor="natural">
          Natural Notes Only
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="showtitle"
          checked={props.showTitle}
          onChange={(e) => props.showTitleChanged(e.target)}
        />
        <label className="custom-control-label" htmlFor="showtitle">
          Get Help (Hover note name)
        </label>
      </div>
    </div>
  );
};

export default SideBar;
