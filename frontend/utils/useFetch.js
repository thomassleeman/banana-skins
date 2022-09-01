import { useEffect, useCallback } from 'react';
import { useGlobalContext } from './context';

export const useFetch = (endPoint, options) => {
  const { dispatch } = useGlobalContext();

  const call = useCallback(
    async (endPoint) => {
      const url = process.env.devUrl;
      try {
        const response = await fetch(`${url}${endPoint}`, options);

        // if (options.method === 'GET' || !options.method) {
        const responseJson = await response.json();
        if (endPoint === 'categories/') {
          const catsData = responseJson.data.data;
          dispatch({ type: 'UPDATE_CATS', payload: catsData });
        }
        if (endPoint === 'jobs/byCategory') {
          const jobsData = responseJson.data.data;
          dispatch({ type: 'UPDATE_JOBS', payload: jobsData });
        }
        // }
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    call(endPoint);
  }, [endPoint, call]);
};
