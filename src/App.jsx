import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import reactLogo from "./assets/react.svg";
// eslint-disable-next-line no-unused-vars
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
