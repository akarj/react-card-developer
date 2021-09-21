import "./CardSetter.scss";
import { useState } from "react";

export function SolidModel() {
  return;
}

export function ImageModel() {
  return <div className="imageModel">Image Model</div>;
}

export default function CardSetter() {
  const solidTextLine = "Generate a card with Solid Background...";
  const imageInputTextLine = "Generate a card with Image as Background...";
  const [cardDescText, setCardDescText] = useState("");
  const [inputDiv, setInputDiv] = useState(true);
  const [textColor, setTextColor] = useState("#00c0cc");
  const [backgroundColor, setBackgroundColor] = useState("#fcba03");
  const hexCheckerHex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
  const clickHandler = (e) => {
    const name = e.target.className;
    console.log(name);
    setInputDiv(true);
    return name === "solidColor" ? <SolidModel /> : <ImageModel />;
  };

  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = "#" + e.target.value;
    const isValid = hexCheckerHex.test(value);
    if (isValid) {
      if (name === "backgroundColorValueInput") {
        setBackgroundColor(value);
      } else if (name === "textColorValueInput") setTextColor(value);
    }
  };

  const submitHandler = (e) => {
    console.log(e.target);
  };

  return (
    <div className="container">
      <div
        className="cardSetter"
        style={inputDiv ? { display: "none", pointerEvents: "none" } : {}}
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

      <div className="solidModelContainer">
        <div className="name">
          <span className="modelName">Solid Card Generator</span>
          <span className="closeModelDiv">x</span>
        </div>
        <div className="values">
          <div className="valueQuantity">
            <div className="valueName">Background Color</div>
            <div className="backgroundColorValueQuantity valueInputDiv">
              <label
                htmlFor="backgroundColorValueInput"
                className="backgroundColorValueInputLabel valueInputLabel"
              >
                Hex Code
              </label>
              <input
                className="valueInput"
                type="text"
                name="backgroundColorValueInput"
                min="3"
                max="6"
                placeholder="#"
                onChange={ChangeHandler}
              />
            </div>
          </div>
          <div className="valueQuantity">
            <div className="valueName">Text Color</div>
            <div className="textColorValueQuantity valueInputDiv">
              <label
                htmlFor="textColorValueInput "
                className="textColorValueInputLabel valueInputLabel"
              >
                Hex Code
              </label>
              <input
                className="valueInput"
                type="text"
                name="textColorValueInput"
                min="3"
                max="6"
                placeholder="#"
                onChange={ChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="valueRepresentation">
          <div
            className="workingDiv"
            style={{ backgroundColor, color: textColor }}
          >
            <span>Text Color</span>
          </div>
        </div>
        <div className="submitButtonDiv">
          <button onClick={submitHandler}> create card</button>
        </div>
      </div>
    </div>
  );
}
