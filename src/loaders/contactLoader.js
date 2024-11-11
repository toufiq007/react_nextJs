import { getContact, getContacts } from "../contact";

// get all contacts loader
export const getContactsLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

// get a single contact loader
export const getContactLoader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};
