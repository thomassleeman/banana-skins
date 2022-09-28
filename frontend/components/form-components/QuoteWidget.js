import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import SupplierLookup from './SupplierLookup';
import CostInput from './CostInput';

export default function QuoteWidget({ job }) {
  const [showAddQuoteForm, setShowAddQuoteForm] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    categoryId: '',
    title: '',
    description: '',
  });

  switch (showAddQuoteForm) {
    case false:
      return (
        <div className="text-center py-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mx-auto h-12 w-12 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>

          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No Quotations
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Add quotations for this card.
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setShowAddQuoteForm(true)}
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Quotation
            </button>
          </div>
        </div>
      );

    case true:
      return (
        <form className="py-8">
          {/* <div className="space-y-8"> */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add Quote
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Create a new job here to be added to your project.
            </p>
          </div>
          <div className="my-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <SupplierLookup />
            <CostInput />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Notes
            </label>
            <div className="mt-1">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue={''}
              />
            </div>
          </div>
          {/* <div className="mt-6"> */}
          <button
            type="button"
            className="mt-8 inline-flex items-center rounded-md border border-transparent text-indigo-600 border-indigo-600 px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => setShowAddQuoteForm(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="ml-3 mt-8 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={null}
          >
            Add
          </button>
          {/* </div> */}
          {/* </div> */}
        </form>
      );
  }
}

// my-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6
