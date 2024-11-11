import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./Error.jsx";
import Contact from "./Contact.jsx";
import {
  getContactLoader,
  getContactsLoader,
} from "./loaders/contactLoader.js";
import { createContactActions } from "./actions/contactsAction.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactActions,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
