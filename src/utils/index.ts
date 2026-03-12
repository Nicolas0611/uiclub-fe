import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function handleSearch(
  term: string,
  router: AppRouterInstance,
  pathname: string,
  searchParams: URLSearchParams,
) {
  const params = new URLSearchParams(searchParams);
  if (term) {
    params.set("search", term);
  } else {
    params.delete("search");
  }
  router.replace(`${pathname}?${params.toString()}`);
}

export function optionsMapper<T extends { name: string; id: string }>(
  data: T[],
) {
  return data.map((item) => ({
    label: item.name,
    value: item.id,
  }));
}
