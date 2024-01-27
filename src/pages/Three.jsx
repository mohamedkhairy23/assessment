import React, { useState } from "react";

function Three() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [message, setMessage] = useState();

  const handleButtonClick1 = () => {
    setButton1Clicked(!button1Clicked);
    setButton2Clicked(false);
    setMessage("Just Start And Just Do It");
  };

  const handleButtonClick2 = () => {
    setButton2Clicked(!button2Clicked);
    setButton1Clicked(false);
    setMessage("You Just Finshed");
  };

  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-center underline">{message}</h1>

      <div className="flex justify-center items-center">
        <button
          onClick={handleButtonClick1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={handleButtonClick2}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Three;