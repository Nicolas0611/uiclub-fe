import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const usePagination = (totalPages: number) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const currentPage = Number(params.get("page")) || 1;

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", totalPages.toString());
      router.push(`${pathName}?${newParams.toString()}`);
    }
  }, [currentPage, totalPages, pathName, router, searchParams]);

  const createPageUrl = (pageNumber: number | string) => {
    if (+pageNumber <= 0) {
      return `${pathName}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathName}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  return {
    currentPage,
    router,
    createPageUrl,
  };
};
