export const useDebug = (variableIn) => {
  const variableToString = (varObj) => Object.keys(varObj)[0];

  const variableNameStr = variableToString({ variableIn });

  return console.log(`${variableNameStr}: ${variableIn}`);
};
