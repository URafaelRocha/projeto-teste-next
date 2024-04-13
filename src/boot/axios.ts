import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 60000,
});
