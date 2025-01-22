import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});


export const getThreads = () => api.get("/threads/");
export const getThreadDetail = (id) => api.get(`/threads/${id}`);
export const getFaqs = () => api.get(`/faqs/`)
