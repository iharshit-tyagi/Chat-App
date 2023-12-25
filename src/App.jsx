import { useState } from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute}></RouterProvider>
      {/* <RegisterPage /> */}
    </div>
  );
}

export default App;
