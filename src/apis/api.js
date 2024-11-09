import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(request => {
  console.log("Request:", request);
  return request;
});

apiClient.interceptors.response.use(response => {
  console.log("Response:", response);
  return response;
});

export default apiClient;
