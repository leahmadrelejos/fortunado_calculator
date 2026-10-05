import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const pressButton = (value) => {
    setDisplay(display + value);
  };

  const clearCalculator = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">

      <div className="w-full max-w-sm">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-5">
          My Calculator
        </h1>

        {/* Calculator */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">

          {/* Display */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <input
              type="text"
              value={display}
              readOnly
              className="w-full text-right text-3xl font-bold outline-none"
              placeholder="0"
            />
          </div>

          {/* Clear */}
          <button
            onClick={clearCalculator}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg mb-3"
          >
            C
          </button>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-3">

            <button
              onClick={() => pressButton("7")}
              className="button"
            >
              7
            </button>

            <button
              onClick={() => pressButton("8")}
              className="button"
            >
              8
            </button>

            <button
              onClick={() => pressButton("9")}
              className="button"
            >
              9
            </button>

            <button
              onClick={() => pressButton("/")}
              className="operator"
            >
              ÷
            </button>

            <button
              onClick={() => pressButton("4")}
              className="button"
            >
              4
            </button>

            <button
              onClick={() => pressButton("5")}
              className="button"
            >
              5
            </button>

            <button
              onClick={() => pressButton("6")}
              className="button"
            >
              6
            </button>

            <button
              onClick={() => pressButton("*")}
              className="operator"
            >
              ×
            </button>

            <button
              onClick={() => pressButton("1")}
              className="button"
            >
              1
            </button>

            <button
              onClick={() => pressButton("2")}
              className="button"
            >
              2
            </button>

            <button
              onClick={() => pressButton("3")}
              className="button"
            >
              3
            </button>

            <button
              onClick={() => pressButton("-")}
              className="operator"
            >
              −
            </button>

            <button
              onClick={() => pressButton("0")}
              className="button"
            >
              0
            </button>

            <button
              onClick={() => pressButton(".")}
              className="button"
            >
              .
            </button>

            <button
              onClick={calculate}
              className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 rounded-lg"
            >
              =
            </button>

            <button
              onClick={() => pressButton("+")}
              className="operator"
            >
              +
            </button>

          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white mt-5 p-5 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-3">
            Instructions
          </h2>

          <p className="text-gray-700">
            Click the number buttons to enter numbers.
            Choose an operator and click the equals button
            to calculate the answer.
          </p>

          <p className="mt-3 text-gray-700">
            Supported operations:
          </p>

          <ul className="list-disc ml-6 text-gray-700">
            <li>Addition (+)</li>
            <li>Subtraction (−)</li>
            <li>Multiplication (×)</li>
            <li>Division (÷)</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default App;