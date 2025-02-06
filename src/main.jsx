import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ExercisesContextProvider } from "./Utils/ExercisesContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ExercisesContextProvider>
      <App />
    </ExercisesContextProvider>
  </BrowserRouter>
);
