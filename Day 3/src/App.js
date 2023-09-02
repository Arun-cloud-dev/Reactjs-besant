import React from "react";
import BookList from "./BookList";
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to BookStore </h1>
      </header>
      <main className="App-main">
        <BookList />
      </main>
    </div>
  );
};


export default App;