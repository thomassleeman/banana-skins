export const useOrderJobs = (unorderedJobsArray) => {
  const jobsByOrderedCat = unorderedJobsArray.sort((a, b) => {
    return a.category.catIndex - b.category.catIndex;
  });
  const orderedJobsArray = jobsByOrderedCat.sort((a, b) => {
    if (a.category._id === b.category._id) {
      return a.jobIndex - b.jobIndex;
    }
  });
  return orderedJobsArray;
};
