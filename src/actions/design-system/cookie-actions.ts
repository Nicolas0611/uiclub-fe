import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieSaved = (): { [id: string]: number } => {
  if (hasCookie("saved")) {
    const cookieSaved = JSON.parse((getCookie("saved") as string) ?? "{}");
    return cookieSaved;
  }
  return {};
};

export const addComponentToSaved = (id: number) => {
  const cookieSaved = getCookieSaved();
  cookieSaved[id] = 1;
  setCookie("saved", JSON.stringify(cookieSaved));
};

export const deleteProductFromSaved = (id: number) => {
  const cookieCart = getCookieSaved();
  delete cookieCart[id];
  setCookie("saved", JSON.stringify(cookieCart));
};
