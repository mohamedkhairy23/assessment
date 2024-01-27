import React, { useState } from "react";

const One = () => {
  const [word, setWord] = useState(sessionStorage.getItem("word") || "");
  const [msg, setMsg] = useState(sessionStorage.getItem("msg") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    var re = /[\W_]/g;
    var lowRegStr = word.toLowerCase().replace(re, "");
    var reverseStr = lowRegStr.split("").reverse().join("");
    JSON.stringify(sessionStorage.setItem("word", word));

    if (reverseStr === lowRegStr) {
      setMsg("Palindrome");
      sessionStorage.setItem("msg", msg);
    } else if (reverseStr !== lowRegStr) {
      setMsg("Not Palindrome");
      sessionStorage.setItem("msg", msg);
    }
  };

  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-center underline">{msg}</h1>;
      <div className="flex justify-center items-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="word"
            >
              Word
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="word"
              type="text"
              placeholder="word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default One;
