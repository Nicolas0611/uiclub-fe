//todo: SOLUCION MOMENTANEA

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function replaceBackendWithLocalhost(url: string) {
  // Check if the URL contains 'backend' and replace it with 'localhost'
  if (url.includes("backend")) {
    return url.replace("backend", "localhost");
  }
  return url;
}

export function handleSearch(
  term: string,
  router: AppRouterInstance,
  pathname: string,
  searchParams: URLSearchParams
) {
  const params = new URLSearchParams(searchParams);
  if (term) {
    params.set("search", term);
  } else {
    params.delete("search");
  }
  router.replace(`${pathname}?${params.toString()}`);
}
