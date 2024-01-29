import React, { useEffect, useState } from "react";

function Three() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 1) {
      setMessage("Just Start And Just Do It");
    } else if (count === 2) {
      setMessage("Keep Going");
    } else if (count === 3) {
      setMessage("Almost There");
    } else if (count === 4) {
      setMessage("You Just Finshed");
    }
  }, [count]);

  const handleButtonClick1 = () => {
    setButton1Clicked(!button1Clicked);
    setButton2Clicked(false);
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleButtonClick2 = () => {
    setButton2Clicked(!button2Clicked);
    setButton1Clicked(false);
    setMessage("You Just Finshed");
    if (count < 4) {
      setCount(count + 1);
    }
  };

  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-center underline">{message}</h1>

      <div className="flex justify-center items-center">
        <button
          onClick={handleButtonClick1}
          className={
            count === 1
              ? "bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          }
        >
          Prev
        </button>
        <button
          onClick={handleButtonClick2}
          className={
            count === 4
              ? "bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Three;
