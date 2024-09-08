import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import AppRoutes from "@/routes";
import store from "@/store";
import config from "@/config";

function App() {
  useEffect(() => {}, []);

  return (
    <GoogleOAuthProvider clientId={config.google.clientId}>
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
        <Toaster containerStyle={{ fontSize: 14 }} />
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
