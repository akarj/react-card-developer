import "./CardSetter.scss";
import { useState } from "react";

export default function CardSetter() {
  const solidTextLine = "Generate a card with Solid Background...";
  const imageInputTextLine = "Generate a card with Image as Background...";
  const [cardDescText, setCardDescText] = useState("");

  return (
    <div className="cardSetter">
      <div className="titleDiv">
        <span className="nameCard">Generate Card</span>
      </div>
      <div className="cardInputType">
        <div className="solidDiv">
          <button
            className="solidColor"
            onMouseEnter={() => setCardDescText(solidTextLine)}
            onMouseLeave={() => setCardDescText("")}
          >
            Solid
          </button>
        </div>
        <div className="imageDiv">
          <button
            className="imageInput"
            onMouseEnter={() => setCardDescText(imageInputTextLine)}
            onMouseLeave={() => setCardDescText("")}
          >
            Image
          </button>
        </div>
      </div>
      <div className="cardDesc">
        <span className="cardDescText">{cardDescText}</span>
      </div>
    </div>
  );
}
