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
  contactFavouriteAction,
  createContactActions,
  deleteContactAction,
  editContactAction,
} from "./actions/contactsAction.js";
import EditContact from "./EditContact.jsx";
import Index from "./Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactActions,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
        action: contactFavouriteAction,
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
