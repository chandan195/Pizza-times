import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/Header.css";
import "./assets/css/Hero.css";
import "./assets/css/WelcomeArticle.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store/Store";

// export default withRouter(connect(
//   mapStateToProps,
// )(App))

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="602749244947-4j0jt6siug024f7mcvjdppi6gf9tb375.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
