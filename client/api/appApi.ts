import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URI;

const appApi = axios.create({
  baseURL: baseURL,
});

export default appApi;
