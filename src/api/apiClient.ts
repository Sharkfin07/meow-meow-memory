import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": import.meta.env.API_KEY,
  },
});

export default apiClient;
