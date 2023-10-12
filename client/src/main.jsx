import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-x1fsrddfrqy3reqg.us.auth0.com"
    clientId="h9t1I1h3MkBMZf1ijNx2R5NAIms9dIm2"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
