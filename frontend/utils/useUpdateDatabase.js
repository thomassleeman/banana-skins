import { useEffect, useCallback } from 'react';

export const useUpdateDatabase = async (endPoint, data) => {
  const url = process.env.devUrl;

  const body = JSON.stringify({
    data: data,
  });

  const options = {
    method: 'PUT',
    body: body,
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    await fetch(`${url}${endPoint}`, options);
  } catch (error) {
    console.log(error);
  }
};
