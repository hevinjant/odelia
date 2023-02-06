import { useState } from "react";

const questions = ["Will you be my Valentine?"];

const Questions = () => {
  const [answer, setAnswer] = useState<boolean>(false);

  const handleClick = (buttonId: string) => {
    if (buttonId === "yes") {
      setAnswer(true);
    }
  };

  return (
    <div>
      <h1>{questions[0]}</h1>
      {answer ? (
        <h1>Thank you!!! Let's dance!</h1>
      ) : (
        <div>
          <button
            id="yes"
            onClick={(e) => {
              handleClick(e.currentTarget.id);
            }}
          >
            Yes
          </button>
          <button
            id="no"
            onClick={(e) => {
              handleClick(e.currentTarget.id);
            }}
          >
            No
          </button>
          <h1>Please say yes!</h1>
        </div>
      )}
    </div>
  );
};

export default Questions;
