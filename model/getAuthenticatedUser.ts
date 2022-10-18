import data, { Data } from "../data/data";

export const getAuthenticatedUser = (): Data => {
  return data[0];
};
