import { createContact } from "../contact";

export const createContactActions = async () => {
  const contact = await createContact();
  return { contact };
};
