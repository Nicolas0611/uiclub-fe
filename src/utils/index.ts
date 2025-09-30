//todo: SOLUCION MOMENTANEA

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
