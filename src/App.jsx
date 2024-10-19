import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { darkTheme, lightTheme } from "./theme";
import { store } from "./store";
import { CssBaseline } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <GoogleOAuthProvider clientId="949967426369-s1qo0durfms7dlh83p485pkga8l8oj0v.apps.googleusercontent.com">
        <Provider store={store}>
          <RouterProvider router={router} />;
        </Provider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
