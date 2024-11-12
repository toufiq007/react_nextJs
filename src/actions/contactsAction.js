import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contact";

export const createContactActions = async () => {
  const contact = await createContact();
  return redirect(`contacts/${contact.id}/edit`);
};

// edit action
export async function editContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

// delete action
export const deleteContactAction = async ({ params }) => {
  await deleteContact(params.contactId);
  return redirect("/");
};

// update contact actions
export async function contactFavouriteAction({ request, params }) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}
