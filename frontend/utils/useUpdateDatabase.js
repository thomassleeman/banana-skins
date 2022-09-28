import { useEffect, useCallback } from 'react';

export const useUpdateDatabase = async (endPoint, method, data) => {
  const url = process.env.devUrl;

  const body = JSON.stringify({
    data: data,
  });

  const options = {
    //I have changed this from method: 'PUT' to the below. If database updates stop working this is likely to be the reason.
    method: method || 'PUT',
    body: body,
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${url}${endPoint}`, options);
    const responseJson = await response.json();
    return responseJson.data.data;
    // console.log(`${url}${endPoint}`, options);
  } catch (error) {
    console.log(error);
  }
};
