import React from "react";
import "./ball.css";

export default function Ball({ pos }) {
  return (
    <div
      className="ball"
      style={{
        top: `${pos.y}px`,
        left: `${pos.x}px`
      }}
    />
  );
}
