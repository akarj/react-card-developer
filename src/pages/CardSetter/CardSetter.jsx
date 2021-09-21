import "./CardSetter.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardSetter() {
  const solidTextLine = "Generate a card with Solid Background...";
  const imageInputTextLine = "Generate a card with Image as Background...";
  const [cardDescText, setCardDescText] = useState("");
  const [containerStyle, setcontainerStyle] = useState({
    backgroundColor: "lightgreen",
  });
  const [imageModelStyle, setImageModelStyle] = useState({ display: "none" });
  const [solidModelStyle, setSolidModelStyle] = useState({ display: "none" });

  const [textColor, setTextColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("#fcba03");
  const [modelContainerStyle, setModelContainerStyle] = useState({
    zIndex: "10",
    display: "none",
  });
  const hexCheckerHex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");

  const clickHandler = (e) => {
    const name = e.target.className;
    console.log(name);
    const newContainerStyle = { ...containerStyle, display: "none" };
    setcontainerStyle(newContainerStyle);

    const newModelStyle = { ...modelContainerStyle, display: "block" };
    setModelContainerStyle(newModelStyle);

    if (name === "solidColor") {
      const newSolidModelStyle = { ...solidModelStyle, display: "block" };
      setSolidModelStyle(newSolidModelStyle);
    } else if (name === "imageInput") {
      const newImageModelStyle = {
        ...imageModelStyle,
        display: "block",
      };
      setImageModelStyle(newImageModelStyle);
    }
    // setInputDiv(true);
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

  const closeModel = (e) => {
    const name = e.target;
    console.log(name);
    const newContainerStyle = { ...containerStyle, display: "block" };
    setcontainerStyle(newContainerStyle);
    const newModelStyle = { ...modelContainerStyle, display: "none" };
    setModelContainerStyle(newModelStyle);
    const newSolidModelStyle = { ...solidModelStyle, display: "none" };
    setSolidModelStyle(newSolidModelStyle);
    const newImageModelStyle = {
      ...imageModelStyle,
      display: "none",
    };
    setImageModelStyle(newImageModelStyle);
  };

  return (
    <div className="container">
      <div className="cardSetter" style={containerStyle}>
        <div className="titleDiv">
          <span className="nameCard">Generate Card</span>
        </div>
        <div className="cardInputType">
          <div className="solidDiv">
            <button
              className="solidColor"
              name
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

      <div className="modelContainer" style={modelContainerStyle}>
        <div className="imageModelContainer" style={imageModelStyle}>
          <div className="name">
            <span className="modelName">Image Generator</span>
            <span className="closeModelDiv" onClick={closeModel}>
              x
            </span>
          </div>
          <div className="info">
            <span>Input image from</span>
          </div>
          <div className="values">
            <div className="webCamDiv">
              <button>Camera</button>
            </div>
            <div className="importFromFilesDiv">
              <button>Files</button>
            </div>
          </div>

          <div className="submitButtonDiv">
            <button onClick={submitHandler}>
              <Link className="link" to="/workplace">
                create card
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div
        className="modelContainer"
        id="SolidCardModel"
        style={modelContainerStyle}
      >
        <div className="solidModelContainer" style={solidModelStyle}>
          <div className="name">
            <span className="modelName">Solid Card Generator</span>
            <span className="closeModelDiv" onClick={closeModel}>
              x
            </span>
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
    </div>
  );
}
