"use client";
import { ComponentType } from "@/interfaces/design-system-interface";
import { LinkIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DesignSystemCardProps {
  className: string;
  designSystems: ComponentType["related_design_systems"] | undefined;
  title: string;
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
      <div className="flex items-center gap-2 mb-4">
        <div className="pb-4">
          <LinkIcon className="size-5" color="text-default-500" />
        </div>
        <h3 className="text-lg  text-default-500 pb-4">{title}</h3>
      </div>

      {/* Design Systems List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {designSystems?.map((designSystem, index) => (
          <Link key={index} href={`/design-systems/${designSystem.slug}`}>
            <div className="flex flex-wrap items-center transition-colors hover:bg-slate-50 border border-gray-200 p-3 rounded-lg">
              <div className="flex w-full flex-wrap justify-between items-center gap-2">
                <div className="flex items-center gap-2 truncate">
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
