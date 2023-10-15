import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  return (
    <>
      <Steps />
      <Steps />
    </>
  );
}

function Steps() {
  // 1. Define a state variable
  //    return an array [value, function],
  //    function to update the value

  const [step, setStep] = useState(1);

  const [person, setPerson] = useState({ name: "Jonas" });

  const [isOpen, setIsOpen] = useState(true); // Even after re-renderer last updated state always remembered

  // React function starting with 'use' is React hooks
  // useState,
  // useReduce
  // useEffect

  // React hooks : only define in the top level of function !

  const handlePrevious = function () {
    // Best Practice : to updated state based on current state using callback function instead of reference to state directly
    if (step > 1) setStep((value) => value - 1);
  };

  // 3. Update state variable
  const handleNext = function () {
    if (step < 3) {
      // Update state only called once
      // setStep(step + 1);
      // setStep(step + 1);

      setStep((value) => value + 1); // 1 + 1 = 2
      // setStep((value) => value + 1); // 2 + 1 = 3
    }

    // Best Practice: to update state without any current state avoid using callback function
    setPerson({ name: "Fred" });

    // NEVER DO THIS !
    // React is about immutability, not directly mutating the state variable

    // Doesn't work
    // if (step < 3) step = step + 1;
    // Working, but readly bad practice
    // person.name = "Fred";
  };

  return (
    // 2. Use state variable in JSX
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="steps__numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <div className="message">
            Step {step}: {messages[step - 1]}
            <br></br>
            {person.name}
          </div>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious} // Event name "onEvent" and a callback function
              // onMouseEnter={() => alert("Test")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("Next")}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
