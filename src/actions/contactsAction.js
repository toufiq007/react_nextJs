import { redirect } from "react-router-dom";
import { createContact, updateContact } from "../contact";

export const createContactActions = async () => {
  const contact = await createContact();
  return { contact };
};

// edit action
export async function editContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}