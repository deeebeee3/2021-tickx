import axios from "axios";

const apiUrl = "https://images-api.nasa.gov";

export const api = axios.create({
  baseURL: apiUrl,
});
