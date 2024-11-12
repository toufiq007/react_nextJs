import { getContact, getContacts } from "../contact";

// get all contacts loader
export const getContactsLoader = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  // const contacts = await getContacts();
  return { contacts, q };
};

// get a single contact loader
export const getContactLoader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};
