import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>

  // </StrictMode>,
);
