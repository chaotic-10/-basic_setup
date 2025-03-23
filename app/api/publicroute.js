import axios from "axios";

// Create the Axios instance
const mainURL = process.env.BASE_URL;
const publicRoute = axios.create({
  baseURL: mainURL,
  headers: { 'Content-Type': 'application/json' },
});

// Utility function for dynamic API calls
publicRoute.call = async (url, { method = 'GET', data = null, headers = {}, ...config } = {}) => {
  try {
    const response = await publicRoute({
      url,
      method,
      data,
      headers: {
        ...publicRoute.defaults.headers, // Merge default headers
        ...headers,
      },
      ...config,
    });
    return response.data; // Return response data
  } catch (error) {
    throw error.response?.data || error.message || 'Something went wrong!';
  }
};

export default publicRoute;
