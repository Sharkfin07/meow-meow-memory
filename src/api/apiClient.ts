import axios from "axios";

const base = import.meta.env.VITE_API_BASE || "https://api.thecatapi.com/v1";
const apiKey = import.meta.env.VITE_API_KEY || "";

const apiClient = axios.create({
  baseURL: base,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    ...(apiKey ? { "x-api-key": apiKey } : {}),
  },
});

export default apiClient;
