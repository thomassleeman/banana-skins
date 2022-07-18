import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';
import { useGlobalContext } from './context';

export const useFetch = (newEndPoint) => {
  const { dispatch } = useGlobalContext();
  const router = useRouter();
  const location = router.pathname;

  const call = useCallback(
    async (newEndPoint) => {
      const url = 'http://127.0.0.1:7000/api/v1/';
      try {
        const response = await fetch(`${url}${newEndPoint}`);
        const responseJson = await response.json();
        console.log(responseJson);
        dispatch({
          type: 'DATA_UPDATE',
          payload: responseJson,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, location]
  );

  useEffect(() => {
    call(newEndPoint);
  }, [newEndPoint, call]);
};
