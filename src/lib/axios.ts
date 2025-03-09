import axios from "axios";

export const https = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
  timeout: 10000, // Optional: Timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("API URL", process.env.NEXT_PUBLIC_API_URL);
