"use client";
import { ComponentType } from "@/interfaces/design-system-interface";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DesignSystemCardProps {
  className: string;
  designSystems: ComponentType["related_design_systems"] | undefined;
  title: string;
  showMore?: boolean;
  moreCount?: number;
}

const DesignSystemCard: React.FC<DesignSystemCardProps> = ({
  designSystems,
  className,
  title,
}) => {
  return (
    <div
      className={clsx(
        "h-full border p-4 border-gray-200 rounded-2xl shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary pb-4">{title}</h3>
      </div>

      {/* Design Systems List */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
      >
        {designSystems?.map((designSystem, index) => (
          <Link key={index} href={`/design-systems/${designSystem.slug}`}>
            <div className="flex items-center transition-colors hover:bg-slate-50">
              <div className="flex w-full justify-between items-center gap-2 border border-gray-200 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={designSystem.thumbnail_image}
                      alt={designSystem.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-900">
                    {designSystem.name}
                  </span>
                </div>

                <ChevronRightIcon className="size-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {designSystems?.length === 0 && (
        <div className="text-center py-8">
          <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            No {title.toLowerCase()} found
          </p>
        </div>
      )}
    </div>
  );
};

export default DesignSystemCard;
