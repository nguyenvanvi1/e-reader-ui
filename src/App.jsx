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
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <RouterProvider router={router} />;
        </Provider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
