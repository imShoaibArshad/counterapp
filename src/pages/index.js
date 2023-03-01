import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount((prevCount) => prevCount + 1);
    document.getElementById("status").innerHTML = "Increment successfully!";
  };

  const handleDecrementClick = () => {
    if (count === 0) {
      document.getElementById("status").innerHTML = "Can't decrement when zero";
    } else {
      setCount(count - 1);
      document.getElementById("status").innerHTML = "Decrement successfully! ";
    }
    }
  

    
  return (
    <div className="container">
      <div className="counter">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
      </div>
      <div id="status"></div>
    </div>
  );

  }