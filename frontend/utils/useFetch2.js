// import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';
import { useGlobalContext } from './context';
import { useSortByIndex } from '../components/useSortByIndex';

export const useFetch2 = () => {
  const { dispatch, endPoint } = useGlobalContext();

  const call = useCallback(
    async (endPoint) => {
      const url = process.env.devUrl;
      try {
        console.log('Fire in the hole!');
        const response = await fetch(`${url}${endPoint}`, options);

        // if (options.method === 'GET' || !options.method) {
        const responseJson = await response.json();
        if (endPoint === 'categories/reorder') {
          console.log(responseJson);
        }
        if (endPoint === 'jobs/') {
          const jobsData = responseJson.data.data;
          dispatch({ type: 'UPDATE_JOBS', payload: jobsData });
        }
        // }
      } catch (error) {
        console.log(error);
      }
    },
    [endPoint]
  );

  useEffect(() => {
    call(endPoint);
  }, [endPoint, call]);
};
