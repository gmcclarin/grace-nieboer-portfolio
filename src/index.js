import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import nightwind from "nightwind/helper";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <script>{nightwind.init()}</script>
    <App />
  </BrowserRouter>,
);
