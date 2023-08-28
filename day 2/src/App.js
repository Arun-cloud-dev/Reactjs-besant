import React from "react";
import Button from "./Button"; // Adjust the path based on your folder structure
// import Card from "./card/card";
// import './card/card.css';
// import './counter/Counter';
// import Counter from "./counter/Counter";



// ---------------------------
const App = () => {
  return (
    <div>
      <h1>Welcome to My APP </h1>
      {/* --------------- */}
      <Button />
      <Button />
      {/* No "text" prop provided */}
      <Button text="Submit" /> {/*  "text" prop provided */}
      <Button text="upload" />
      {/* -------------------------- */}
      {/* <h2>Welcome to My Cards</h2>
      <Card
        title="Nature's Beauty"
        content="Explore the breathtaking beauty of nature."
        imageUrl="https://img.freepik.com/premium-photo/flat-art-design-sunset-beautiful-illustration-picture-generative-ai_146671-78211.jpg?w=360"
      />
      <Card
        title="Cityscape"
        content="Discover the vibrant life of the city."
        imageUrl="https://img.freepik.com/premium-photo/flat-art-design-sunset-beautiful-illustration-picture-generative-ai_146671-78211.jpg?w=360"
      /> */}
      {/* ------------------- */}
      <Counter />
    </div>
  );
};

export default App;
