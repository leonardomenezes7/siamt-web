import axios from "axios"

export const api = axios.create({
  baseURL: "https://siamt-api.onrender.com"
})