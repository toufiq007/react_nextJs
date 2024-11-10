import { getContacts } from "../contact";

export const getContactsLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};
