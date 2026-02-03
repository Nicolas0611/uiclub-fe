"use server";

import { v2 as cloudinary } from "cloudinary";
cloudinary.config(process.env.CLOUDINARY_URL || "");

export const uploadImage = async (file: File, folder: string) => {
  try {
    const buffer = await file.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    const result = await cloudinary.uploader
      .upload(`data:image/png;base64,${base64Image}`, {
        folder: folder,
      })
      .then((result) => result.secure_url)
      .catch((error) => {
        console.log(error);
        return null;
      });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
