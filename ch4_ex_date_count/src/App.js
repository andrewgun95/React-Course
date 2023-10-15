import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let currentDate = new Date();

  const buildMessage = function (count) {
    let nextDate = new Date();
    nextDate.setDate(currentDate.getDate() + count);
    if (count < 0) {
      return `${Math.abs(count)} days ago was  ${nextDate
        .toString()
        .slice(0, 15)}`;
    }
    if (count > 0) {
      return `${count} days from today is ${nextDate.toString().slice(0, 15)}`;
    }
    return `Today is ${nextDate.toString().slice(0, 15)}`;
  };

  return (
    <div className="container">
      <div className="step">
        <button className="step__button" onClick={() => setStep((s) => s - 1)}>
          &#8722;
        </button>
        <span>Step : {step}</span>
        <button className="step__button" onClick={() => setStep((s) => s + 1)}>
          &#43;
        </button>
      </div>

      <div className="count">
        <button
          className="count__button"
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          &#8722;
        </button>
        <span>Count : {count}</span>
        <button
          className="count__button"
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          &#43;
        </button>
      </div>

      <div className="message">{buildMessage(count)}</div>
    </div>
  );
}

function Count() {
  return;
}
