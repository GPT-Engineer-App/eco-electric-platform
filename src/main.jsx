import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SupabaseProvider } from "./integrations/supabase/index.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </React.StrictMode>,
);
