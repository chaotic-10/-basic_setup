import { useState, useEffect } from 'react';
import publicRoute from './path/to/publicRoute'; // Adjust the import path

const useFetch = (url, { method = 'GET', data = null, headers = {}, ...restConfig } = {}, autoFetch = true) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await publicRoute({
        url,
        method,
        headers,
        data,
        ...restConfig,
      });
      setResponse(result.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [url, method, data, headers, autoFetch]);

  return { response, loading, error };
};

export default useFetch;
