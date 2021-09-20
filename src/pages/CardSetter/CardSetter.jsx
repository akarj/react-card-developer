import "./CardSetter.scss";
import { useState } from "react";

export default function CardSetter() {
  const solidTextLine = "Generate a card with Solid Background...";
  const imageInputTextLine = "Generate a card with Image as Background...";
  const [cardDescText, setCardDescText] = useState("");
  const [inputDiv, setInputDiv] = useState(false);
  const clickHandler = (e) => {
    const name = e.target.className;
    setInputDiv(true);
    return name === "solidColor" ? <SolidModel /> : <ImageModel />;
  };

  return (
    <div
      className="cardSetter"
      style={inputDiv ? { opacity: 0.5, pointerEvents: "none" } : {}}
    >
      <div className="titleDiv">
        <span className="nameCard">Generate Card</span>
      </div>
      <div className="cardInputType">
        <div className="solidDiv">
          <button
            className="solidColor"
            onMouseEnter={() => setCardDescText(solidTextLine)}
            onMouseLeave={() => setCardDescText("")}
            onClick={clickHandler}
          >
            Solid
          </button>
        </div>
        <div className="imageDiv">
          <button
            className="imageInput"
            onMouseEnter={() => setCardDescText(imageInputTextLine)}
            onMouseLeave={() => setCardDescText("")}
            onClick={clickHandler}
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

function SolidModel() {
  return <div className="solidModel">solid Model</div>;
}

function ImageModel() {
  return <div className="imageModel">Image Model</div>;
}
