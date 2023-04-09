import { getCookie } from "./cookies";
import { setCookie } from "./cookies"; 

export const logoutUser = () => {
  setCookie("isAuthUser", "false"); 
};

export const isAuthUser = () => {
	return getCookie("isAuthUser") === "true";
};
