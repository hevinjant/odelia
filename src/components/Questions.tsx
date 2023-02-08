import { useState } from "react";

const Questions = () => {
  const [answer, setAnswer] = useState<boolean>(false);
  const [please, setPlease] = useState<string>("Please");
  const [showPlease, setShowPlease] = useState<boolean>(false);

  const handleClick = (buttonId: string) => {
    if (buttonId === "yes") {
      setAnswer(true);
    } else {
      setShowPlease(true);
      setPlease((prevPlease) => prevPlease + "!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "25vh",
      }}
    >
      <h1 style={{ fontSize: "clamp(30px, 3vw, 50px)", color: "white" }}>
        Will you be my Valentine?
      </h1>
      {answer ? (
        <h1 style={{ fontSize: "clamp(30px, 3vw, 50px)", color: "white" }}>
          Thank you!!! Let's dance!
        </h1>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              height: "10vh",
            }}
          >
            <button
              id="yes"
              onClick={(e) => {
                handleClick(e.currentTarget.id);
              }}
              style={{
                width: "100px",
                border: "none",
                borderRadius: "10%",
                color: "white",
                fontSize: "25px",
                backgroundColor: "green",
                marginRight: "10px",
              }}
            >
              Yes
            </button>
            <button
              id="no"
              onClick={(e) => {
                handleClick(e.currentTarget.id);
              }}
              style={{
                width: "100px",
                border: "none",
                borderRadius: "10%",
                color: "white",
                fontSize: "25px",
                backgroundColor: "red",
                marginLeft: "10px",
              }}
            >
              No
            </button>
          </div>
          {showPlease && (
            <h1 style={{ fontSize: "clamp(30px, 3vw, 50px)", color: "white" }}>
              {please}
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Questions;
