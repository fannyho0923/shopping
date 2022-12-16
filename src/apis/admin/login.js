import { get } from "..";

export const login = async ({ accountId, accountPw }) => {
  return get(`/admin/login?accountId=${accountId}&accountPw=${accountPw}`);
};
