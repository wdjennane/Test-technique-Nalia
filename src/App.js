import React from "react";
import { Message } from "./Components/exercice-one/ExerciceOne";
import { TodoList } from "./Components/exercice-two/TodoList";
import { GroceryApp } from "./Components/exercice-three/GroceryApp";
import { ImageGallery } from "./Components/exercice-four/ImageGallery";
import "./App.css";

function App() {
  const items = [
    { text: "Buy grocery", done: true },
    { text: "Play guitar", done: false },
    { text: "Romantic dinner", done: false },
  ];

  const links = [
    "https://icon-icons.com/icons2/826/PNG/48/number-one_icon-icons.com_66514.png",
    "https://icon-icons.com/icons2/826/PNG/48/number-two_icon-icons.com_66513.png",
  ];

  const products = [
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 },
  ];
  return (
    <>
      <Message />
      <TodoList
        items={items}
        onListClick={(event) => console.log("List clicked!")}
        onItemClick={(item, event) => {
          console.log(item, event);
        }}
      />
      <GroceryApp products={products} />
      <ImageGallery links={links} />
    </>
  );
}

export default App;
