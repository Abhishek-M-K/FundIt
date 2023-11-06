import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { StateContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider
    activeChain="goerli"
    clientId="49dee4f857706624043354e2d0dd3e89"
    secretKey="kQvxK_BFmdEHxetgLTCDfpLWTm-TQKET-4c2R82gBXdaK08GSUQTpAxQXo_-_opl5S2XtU-hiO8CzGLNFl1jGg"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
{
  /* <ThirdwebProvider desiredChainId={ChainId.Goerli}>
  <Router>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </Router>
</ThirdwebProvider>; */
}
