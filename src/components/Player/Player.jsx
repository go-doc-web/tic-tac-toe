import { useState } from "react";

function Player({ initialName, symbol, isActive }) {
  const [isEditing, setEdititng] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setEdititng((prevSatte) => !prevSatte);
  };

  const handleChange = (e) => {
    console.log(e);
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
