"use client";

import { ComponentType } from "@/interfaces/design-system-interface";
import { CircleStackIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Image } from "@heroui/react";
import clsx from "clsx";
import Link from "next/link";

interface DesignSystemCardProps {
  className?: string;
  designSystems?: ComponentType["relatedDesignSystems"];
  title: string;
}

/**
 * DesignSystemCard
 *
 * Displays a list of related design systems with:
 * - A header icon & title
 * - A responsive grid of design system links
 * - An empty state when no items exist
 *
 * Optimizations:
 * - Clear base class separation for maintainability
 * - Early return for empty state to reduce render branching
 */

export default function DesignSystemCard({
  designSystems,
  className,
  title,
}: DesignSystemCardProps) {
  const containerClasses = clsx(
    "h-full border border-gray-200 rounded-2xl shadow-sm p-4",
    className
  );
  const headerClasses = "flex items-center gap-2 pb-4";
  const gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-3";
  const cardItemClasses =
    "flex flex-wrap items-center transition-colors hover:bg-slate-50 border border-gray-200 p-3 rounded-lg";

  const renderEmptyState = () => (
    <div className="text-center py-8">
      <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
        <CircleStackIcon className="size-5 text-gray-400" />
      </div>
      <p className="text-sm text-gray-500">No {title.toLowerCase()} found</p>
    </div>
  );

  if (!designSystems?.length) {
    return <div className={containerClasses}>{renderEmptyState()}</div>;
  }

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className={headerClasses}>
        <LinkIcon className="size-5 text-default-500" />
        <h3 className="text-lg text-default-500">{title}</h3>
      </div>

      {/* List TODO: Fix the Link href when is attlasian*/}
      <div className={gridClasses}>
        {designSystems.map(({ designSystem }, index) => (
          <Link
            key={index}
            href={`/design-systems/${
              designSystem.name === "Design System"
                ? "attlasian"
                : designSystem.name.toLowerCase()
            }`}
          >
            <div className={cardItemClasses}>
              <div className="flex w-full flex-wrap justify-between items-center gap-2">
                <div className="flex items-center gap-2 truncate">
                  <div className="w-8 h-8 overflow-hidden flex-shrink-0">
                    <Image
                      src={designSystem.companyImage.url}
                      alt={designSystem.name}
                      width={32}
                      height={32}
                      radius="sm"
                    />
                  </div>
                  <span className="text-sm text-gray-900">
                    {designSystem.name}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
