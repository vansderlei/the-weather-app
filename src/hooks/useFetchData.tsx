import { useState, useEffect } from 'react';
import createAPI from '../api/api';

const useFetchData = (baseURL: string, endpoint: string) => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const api = createAPI(baseURL);

    const fetchData = async () => {
      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (error) {
        setError(error as string | null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseURL, endpoint]);

  return { data, loading, error };
};

export default useFetchData;
