export const useCopyArray = (array) => {
  const arrayString = JSON.stringify(array);
  const arrayCopy = JSON.parse(arrayString);

  return arrayCopy;
};
