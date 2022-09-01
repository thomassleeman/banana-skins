export const useCreateOptions = (method, body) => {
  const options = {
    method: method || 'GET',
    body: body,
    headers: {
      'Content-type': 'application/json',
    },
  };
};
