import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import { CartProvider } from './components/CartContext';
 
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>
);