import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
// import { useWindowSize } from "@react-hook/window-size";
// import Confetti from "react-confetti";
// import AnimatedText from "react-animated-text-content";

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
      <h1 style={{ fontSize: "clamp(20px, 4vw, 50px)", color: "#ffc2d1" }}>
        Will you be my Valentine?
      </h1>
      {/* <AnimatedText
        type="words"
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        animationType="lights"
        interval={0.2}
        duration={1.2}
        tag="h1"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Will you be my Valentine?
      </AnimatedText> */}
      {answer ? (
        <>
          <h1 style={{ fontSize: "clamp(30px, 3vw, 50px)", color: "white" }}>
            Yeay! Thank you!
          </h1>
          <ConfettiExplosion
            force={0.5}
            duration={10000}
            particleCount={500}
            width={2000}
            height={2000}
            colors={["#ffc2d1", "#fb6f92", "#a155b9", "#f9d1d1"]}
          />
        </>
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
                height: "85px",
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
                height: "85px",
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
