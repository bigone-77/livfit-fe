import store from "@redux/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Error from "@commons/Error.jsx";
import ErrorBoundary from "@commons/ErrorBoundary.jsx";
import Loader from "@commons/Loader.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ErrorBoundary fallbackUI={<Error />}>
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </ErrorBoundary>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
