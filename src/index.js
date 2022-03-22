import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import OrderProvider from "./Modules/OrderContext";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <OrderProvider leelar="Hello React"> */}
    <App />
    {/* </OrderProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
