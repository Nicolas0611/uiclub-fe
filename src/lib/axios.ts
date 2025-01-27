import axios from "axios";

export const https = axios.create({
  baseURL: "http://backend:8000/api/", // Replace with your API base URL
  timeout: 10000, // Optional: Timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});
  