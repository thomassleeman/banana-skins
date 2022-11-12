import { useState } from 'react';
// import { useGlobalContext } from '../utils/context';
import { useUpdateDatabase } from '../utils/useUpdateDatabase';
import { v4 as uuidv4 } from 'uuid';
import { useCopyArray } from '../utils/useCopyArray';
import { set } from 'nprogress';
import QuoteWidget from './form-components/QuoteWidget';

export default function AddJobForm() {
  const { dispatch, catsData, newJobCategory, currency } = useGlobalContext();

  const [formData, setFormData] = useState({
    category: newJobCategory.title,
    categoryId: newJobCategory.id,
    title: '',
    description: '',
  });

  const [showInvalid, setShowInvalid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeCat = (e) => {
    const newCategory = catsData.filter((cat) => {
      return cat.title === e.target.value;
    });

    const foundCatId = newCategory[0]._id;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      ['categoryId']: foundCatId,
    });
  };

  /////////////////////////////////////////////////////
  //////////////HANDLE SUBMIT//////////////////////////
  /////////////////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();

    //If formData is empty return.
    if (formData.title === '') {
      setShowInvalid(true);
      return;
    } else {
      setShowInvalid(false);
      dispatch({ type: 'TOGGLE_SHOWADDJOB' });

      //create new job object
      const newJob = {
        _id: uuidv4(),
        title: formData.title,
        description: formData.description,
      };

      //STATE
      //Add new job to relevant cat and update optimistically
      const newCatsData = useCopyArray(catsData);
      const catOfNewJob = newCatsData.find(
        (cat) => cat._id === formData.categoryId
      );
      //The full job including uuid is pushed to state.
      catOfNewJob.jobs.push(newJob);
      newCatsData.splice(newCatsData.indexOf(catOfNewJob), 1, catOfNewJob);
      dispatch({ type: 'UPDATE_CATS', payload: newCatsData });

      //DATABASE
      //Add new Job to database. Mongoose will add a new ID.
      const newJobWithoutId = { ...newJob };
      delete newJobWithoutId._id;
      /* useUpdateDatabase returns the data from the database update fetch call which in this instance
      is the new ID created by the backend for the new job. */
      const newId = await useUpdateDatabase('jobs/', 'POST', newJobWithoutId);
      //Create job object with the above ID.
      const newJobNewId = { ...newJobWithoutId, _id: newId };

      const indexOfNewJob = catOfNewJob.jobs.indexOf(newJob);
      catOfNewJob.jobs[indexOfNewJob] = newJobNewId;

      newCatsData.splice(newCatsData.indexOf(catOfNewJob), 1, catOfNewJob);
      dispatch({ type: 'UPDATE_CATS', payload: newCatsData });
      //reorder does not make sense as a route name for this
      useUpdateDatabase('categories/reorder', 'PUT', newCatsData);

      // console.log(newCatsData);

      // Add new job to jobsData and update state
      // const newJobsData = useCopyArray(jobsData);
      // newJobsData.push(newJob);
      // dispatch({ type: 'UPDATE_JOBS', payload: newJobsData });

      // useUpdateDatabase(`categories/:${newCat._id}`, 'PATCH', newJob);
    }
  };
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////

  return (
    <form
      // onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add Card
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Create a new job here to be added to your project.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div col-span>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              {/* TODO Currently uses native dropdown formatting. Go to Tailwind UI, Select Menus. 
              Need to change from 'Simple native' to 'simple Custom' }
               */}
              <select
                id="category"
                name="category"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={formData.category}
                onChange={(e) => {
                  handleChangeCat(e);
                }}
              >
                <option>{formData.category}</option>
                {catsData.map((cat) => {
                  if (cat.title !== formData.category)
                    return <option key={cat._id}>{cat.title}</option>;
                })}
              </select>
            </div>

            {/* TITLE */}
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                    showInvalid === true ? `required:border-red-500` : null
                  }`}
                  value={formData.title}
                  onChange={(e) => handleChange(e)}
                />
                {showInvalid === true ? (
                  <p class="mt-2 text-pink-600 text-sm">
                    Please provide a title.
                  </p>
                ) : null}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={formData.description}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Describe what needs to be achieved in more detail.
              </p>
            </div>

            {/* BUDGET */}
            <div className="sm:col-span-3">
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Budget
              </label>
              <div className="mt-1">
                <input
                  id="budget"
                  name="budget"
                  type="number"
                  placeholder={currency}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* COST */}
            <div className="sm:col-span-3">
              <label
                htmlFor="cost"
                className="block text-sm font-medium text-gray-700"
              >
                Cost
              </label>
              <div className="mt-1">
                <input
                  id="cost"
                  name="cost"
                  type="number"
                  placeholder={currency}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* FILES */}
            <div className="sm:col-span-6">
              <label
                htmlFor="files"
                className="block text-sm font-medium text-gray-700"
              >
                Files/Images
              </label>
              <div
                id="files"
                className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
              >
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 not-on-touch">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">Up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUOTATIONS */}
        <QuoteWidget job={null} />
      </div>

      {/* BUTTONS */}
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => dispatch({ type: 'TOGGLE_SHOWADDJOB' })}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white 
            shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            ${
              showInvalid === true
                ? `bg-red-400 border-red-500 hover:bg-red-400`
                : null
            }`}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
