// import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';
import { useGlobalContext } from './context';

export const useFetch = (newEndPoint) => {
  const { dispatch } = useGlobalContext();

  const call = useCallback(
    async (newEndPoint) => {
      const url = process.env.devUrl;
      try {
        const response = await fetch(`${url}${newEndPoint}`);
        const responseJson = await response.json();
        if (newEndPoint === 'categories/') {
          dispatch({ type: 'FETCH_CATS', payload: responseJson });
        } else if (newEndPoint === 'jobs/') {
          dispatch({ type: 'FETCH_JOBS', payload: responseJson });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    call(newEndPoint);
  }, [newEndPoint, call]);
};
