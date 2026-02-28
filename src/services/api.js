import axios from "axios";

const api = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;