import "./App.css";
import MyAreaChart from "./components/MyAreaChart/MyAreaChart";
import MyLineChart from "./components/MyLineChart/MyLineChart";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, set] = useState(false);
  return (
    <div className="App">
      <animated.div
        style={useSpring({
          to: { opacity: 1 },
          reset: true,
          reverse: flip,
          delay: 200,
          onRest: () => set(!flip),
          from: { opacity: 0 },
        })}
      >
        I am some text
      </animated.div>
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
    </div>
  );
}

export default App;
