import axios from "axios";

const authToken = sessionStorage.getItem("token") || null;

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  },
});
