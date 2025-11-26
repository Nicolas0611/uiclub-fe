"use client";

import {
  addComponentToSaved,
  deleteProductFromSaved,
} from "@/actions/design-system/cookie-actions";
import { ComponentType } from "@/interfaces/design-system-interface";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface Props {
  component: ComponentType;
  saved: Record<string, number>;
}

const HeartButton = ({ component, saved }: Props) => {
  // Keep local reactive state for instant UI updates
  // We only use the `saved` prop for the initial value
  const [isSaved, setIsSaved] = useState<boolean>(
    saved[String(component.id)] !== undefined
  );

  const handleOnSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevents default button behavior
    e.stopPropagation(); // Avoids triggering parent click handlers

    if (isSaved) {
      // Remove from saved → update cookie + local state
      deleteProductFromSaved(component.id);
      setIsSaved(false);
    } else {
      // Add to saved → update cookie + local state
      addComponentToSaved(component.id);
      setIsSaved(true);
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        type="button"
        onClick={handleOnSave}
        className="rounded-full p-1 hover:bg-gray-100"
      >
        {isSaved ? (
          <SolidHeart className="size-7 text-primary" />
        ) : (
          <OutlineHeart className="size-7 text-primary" />
        )}
      </button>
    </div>
  );
};

export default HeartButton;
