import { useState } from "react";

function Drop({ word, choices }) {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (selected) => {
    setSelectedChoice(selected);
    if (selected === word) {
      setButtonColor("btn-success");
      setOpen(false);
      // updateScore(true);
    } else {
      setButtonColor("btn-danger");
      setOpen(false);
      // updateScore(false);
    }
  };

  const options = [...choices, word];
  const shuffledChoices = shuffleArray(options);

  return (
    <div className="dropdown d-inline drop">
      <button
        className={`btn dropdown-toggle ${buttonColor}`}
        type="button"
        id={word}
        data-bs-toggle="dropdown"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {selectedChoice ? selectedChoice : "............."}
      </button>
      <ul className={`dropdown-menu ${open ? "show" : ""}`} aria-labelledby="dropdownMenuButton1">
        {shuffledChoices.map((optionName) => (
          <li key={optionName}>
            <a
              className="dropdown-item"
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleSelect(optionName);
              }}
            >
              {optionName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default Drop;
