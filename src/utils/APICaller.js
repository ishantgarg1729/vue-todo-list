import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = `${error?.message}`.toLowerCase();
    if (
      status.includes("503") ||
      status.includes("502") ||
      status.includes("500")
    ) {
      // navigate to server error screen
    }
    if (
      status.includes("401") ||
      status.includes("402") ||
      status.includes("403")
    ) {
      // navigate to signin screen + clear store
    }
    return error;
  }
);

export default async function APICaller({
  url,
  data = {},
  method = "GET",
  headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
}) {
  try {
    const options = {
      url: `${process.env.VUE_APP_SERVER_URL}${url}`,
      data,
      method,
      headers,
    };
    if (method === "get" || method === "GET") {
      delete options.data;
    }
    const response = await axios({ ...options });
    return response && response?.data;
  } catch (error) {
    console.log("error ------------", error);
    throw error;
  }
}
