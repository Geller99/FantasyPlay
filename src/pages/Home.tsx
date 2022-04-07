import React from "react";

export const Home = () => {
  return (
    <div>
      <section>
        <p>Welcome to Fantasy Play! </p>
        <p> Enter your name </p>
        <input type="text" required />
        <select>select sport </select>
        <button>Continue</button>
      </section>
    </div>
  );
};
