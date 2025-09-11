import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import ShoppingList from "./pages/ShoppingList.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutConfirm from "./pages/CheckoutConfirm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ShoppingList /> },
      { path: "/checkout", element: <CheckoutConfirm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
