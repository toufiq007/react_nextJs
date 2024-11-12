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
import {
  createContactActions,
  deleteContactAction,
  editContactAction,
} from "./actions/contactsAction.js";
import EditContact from "./EditContact.jsx";

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
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: <div>ooops something went wrong!!</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
