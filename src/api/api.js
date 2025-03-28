import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});


export const getInboxes = () => api.get("/inboxes/");
export const getInbox = (id) => api.get(`/inbox/${id}`);
export const getThreads = () => api.get("/threads/");
export const getThreadDetail = (id) => api.get(`/threads/${id}`);
export const getFaqs = () => api.get(`/faqs/`)
