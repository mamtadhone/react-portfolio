import React from "react";
import "./css/reset.css";
import "./css/style.css";
import "./App.css";
import Home from "./pages/Home";
import LiquidEther from "./components/LiquidEther";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "600vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <Home />
    </>
  );
}

export default App;
