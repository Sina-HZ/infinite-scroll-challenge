import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store";
import router from "@routes/routes";

const App = () => {
  return (
    <div id="app">
      <React.StrictMode>
        <Provider store={store}>
          <Suspense fallback={<h1>loading ...</h1>}>
            <RouterProvider router={router} />
          </Suspense>
        </Provider>
      </React.StrictMode>
    </div>
  );
};

export default App;
