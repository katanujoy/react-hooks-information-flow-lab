// src/components/App.js
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import items from "../data/items";
import "../App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
