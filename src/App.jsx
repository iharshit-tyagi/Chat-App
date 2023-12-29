import { useState } from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TrackAuthStatus from "./components/TrackAuthStatus";
import Home from "./components/Home";
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
    {
      path: "/home",
      element: <Home />,
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
