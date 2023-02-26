import { ADMIN_LOGIN, LOOKUP_USER, SIGN_UP } from "../../constants/endpoints";
import apiService from "../../services/ApiService";

export async function LoginUser(params) {
  const response = await apiService.post(ADMIN_LOGIN, { body: params });
  return response;
}

export async function SignUpUser(payload) {
  const response = await apiService.post(SIGN_UP, { body: payload });
  return response;
}

export async function LookupUser(params) {
  const response = await apiService.get(LOOKUP_USER);

  return response;
}
