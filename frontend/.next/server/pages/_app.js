/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./features/api/apiSlice.js":
/*!**********************************!*\
  !*** ./features/api/apiSlice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiSlice\": () => (/* binding */ apiSlice),\n/* harmony export */   \"useGetCategoriesQuery\": () => (/* binding */ useGetCategoriesQuery),\n/* harmony export */   \"useReorderCategoriesMutation\": () => (/* binding */ useReorderCategoriesMutation)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"http://127.0.0.1:7000/api/v1/\"\n    }),\n    tagTypes: [\n        'categories'\n    ],\n    endpoints: (builder)=>({\n            getCategories: builder.query({\n                query: ()=>'categories/includingJobs'\n                ,\n                transformResponse: (response)=>response.data.data\n                ,\n                providesTags: [\n                    'categories'\n                ]\n            }),\n            reorderCategories: builder.mutation({\n                query: (categories)=>({\n                        url: 'categories/update',\n                        method: 'PATCH',\n                        body: categories\n                    })\n                ,\n                invalidatesTags: [\n                    'categories'\n                ]\n            })\n        })\n});\nconst { useGetCategoriesQuery , useReorderCategoriesMutation  } = apiSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9hcGkvYXBpU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0U7QUFFakUsS0FBSyxDQUFDRSxRQUFRLEdBQUdGLHVFQUFTLENBQUMsQ0FBQztJQUNqQ0csV0FBVyxFQUFFLENBQUs7SUFDbEJDLFNBQVMsRUFBRUgsNEVBQWMsQ0FBQyxDQUFDO1FBQUNJLE9BQU8sRUFBRUMsK0JBQWtCO0lBQUMsQ0FBQztJQUN6REcsUUFBUSxFQUFFLENBQUM7UUFBQSxDQUFZO0lBQUEsQ0FBQztJQUN4QkMsU0FBUyxHQUFHQyxPQUFPLElBQU0sQ0FBQztZQUN4QkMsYUFBYSxFQUFFRCxPQUFPLENBQUNFLEtBQUssQ0FBQyxDQUFDO2dCQUM1QkEsS0FBSyxNQUFRLENBQTBCOztnQkFDdkNDLGlCQUFpQixHQUFHQyxRQUFRLEdBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQSxJQUFJOztnQkFDbkRDLFlBQVksRUFBRSxDQUFDO29CQUFBLENBQVk7Z0JBQUEsQ0FBQztZQUM5QixDQUFDO1lBQ0RDLGlCQUFpQixFQUFFUCxPQUFPLENBQUNRLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQ04sS0FBSyxHQUFHTyxVQUFVLElBQU0sQ0FBQzt3QkFDdkJDLEdBQUcsRUFBRSxDQUFtQjt3QkFDeEJDLE1BQU0sRUFBRSxDQUFPO3dCQUNmQyxJQUFJLEVBQUVILFVBQVU7b0JBQ2xCLENBQUM7O2dCQUNESSxlQUFlLEVBQUUsQ0FBQztvQkFBQSxDQUFZO2dCQUFBLENBQUM7WUFDakMsQ0FBQztRQUNILENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDLENBQUMsQ0FBQ0MscUJBQXFCLEdBQUVDLDRCQUE0QixFQUFDLENBQUMsR0FBR3hCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0ci8uL2ZlYXR1cmVzL2FwaS9hcGlTbGljZS5qcz85OWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGFwaVNsaWNlID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6ICdhcGknLFxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogcHJvY2Vzcy5lbnYuZGV2VXJsIH0pLFxuICB0YWdUeXBlczogWydjYXRlZ29yaWVzJ10sXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgZ2V0Q2F0ZWdvcmllczogYnVpbGRlci5xdWVyeSh7XG4gICAgICBxdWVyeTogKCkgPT4gJ2NhdGVnb3JpZXMvaW5jbHVkaW5nSm9icycsXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhLmRhdGEsXG4gICAgICBwcm92aWRlc1RhZ3M6IFsnY2F0ZWdvcmllcyddLFxuICAgIH0pLFxuICAgIHJlb3JkZXJDYXRlZ29yaWVzOiBidWlsZGVyLm11dGF0aW9uKHtcbiAgICAgIHF1ZXJ5OiAoY2F0ZWdvcmllcykgPT4gKHtcbiAgICAgICAgdXJsOiAnY2F0ZWdvcmllcy91cGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGJvZHk6IGNhdGVnb3JpZXMsXG4gICAgICB9KSxcbiAgICAgIGludmFsaWRhdGVzVGFnczogWydjYXRlZ29yaWVzJ10sXG4gICAgfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldENhdGVnb3JpZXNRdWVyeSwgdXNlUmVvcmRlckNhdGVnb3JpZXNNdXRhdGlvbiB9ID0gYXBpU2xpY2U7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJhcGlTbGljZSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJkZXZVcmwiLCJ0YWdUeXBlcyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRDYXRlZ29yaWVzIiwicXVlcnkiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInJlc3BvbnNlIiwiZGF0YSIsInByb3ZpZGVzVGFncyIsInJlb3JkZXJDYXRlZ29yaWVzIiwibXV0YXRpb24iLCJjYXRlZ29yaWVzIiwidXJsIiwibWV0aG9kIiwiYm9keSIsImludmFsaWRhdGVzVGFncyIsInVzZUdldENhdGVnb3JpZXNRdWVyeSIsInVzZVJlb3JkZXJDYXRlZ29yaWVzTXV0YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/api/apiSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store.js */ \"./store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _store_js__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNLO0FBQ0c7U0FFN0JFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hILGlEQUFRO1FBQUNELEtBQUssRUFBRUEsNENBQUs7OEZBQ25CRyxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsic3RvcmUiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"@reduxjs/toolkit/query\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _features_api_apiSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/api/apiSlice */ \"./features/api/apiSlice.js\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        //reducers go here.\n        [_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_2__.apiSlice.reducerPath]: _features_api_apiSlice__WEBPACK_IMPORTED_MODULE_2__.apiSlice.reducer\n    },\n    // Adding the api middleware enables caching, invalidation, polling,\n    // and other useful features of `rtk-query`.\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_2__.apiSlice.middleware)\n}); // optional, but required for refetchOnFocus/refetchOnReconnect behaviors\n // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization\n // setupListeners(store.dispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDTTtBQUNMO0FBRTNDLEtBQUssQ0FBQ0csS0FBSyxHQUFHSCxnRUFBYyxDQUFDLENBQUM7SUFDbkNJLE9BQU8sRUFBRSxDQUFDO1FBQ1IsRUFBbUI7U0FDbEJGLHdFQUFvQixHQUFHQSxvRUFBZ0I7SUFDMUMsQ0FBQztJQUNELEVBQW9FO0lBQ3BFLEVBQTRDO0lBQzVDSSxVQUFVLEdBQUdDLG9CQUFvQixHQUMvQkEsb0JBQW9CLEdBQUdDLE1BQU0sQ0FBQ04sdUVBQW1CO0FBQ3JELENBQUMsRUFFRCxDQUF5RTtBQUN6RSxDQUEwRjtBQUMxRixDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RyLy4vc3RvcmUuanM/NDBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgc2V0dXBMaXN0ZW5lcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5JztcbmltcG9ydCB7IGFwaVNsaWNlIH0gZnJvbSAnLi9mZWF0dXJlcy9hcGkvYXBpU2xpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICAvL3JlZHVjZXJzIGdvIGhlcmUuXG4gICAgW2FwaVNsaWNlLnJlZHVjZXJQYXRoXTogYXBpU2xpY2UucmVkdWNlcixcbiAgfSxcbiAgLy8gQWRkaW5nIHRoZSBhcGkgbWlkZGxld2FyZSBlbmFibGVzIGNhY2hpbmcsIGludmFsaWRhdGlvbiwgcG9sbGluZyxcbiAgLy8gYW5kIG90aGVyIHVzZWZ1bCBmZWF0dXJlcyBvZiBgcnRrLXF1ZXJ5YC5cbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KGFwaVNsaWNlLm1pZGRsZXdhcmUpLFxufSk7XG5cbi8vIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgZm9yIHJlZmV0Y2hPbkZvY3VzL3JlZmV0Y2hPblJlY29ubmVjdCBiZWhhdmlvcnNcbi8vIHNlZSBgc2V0dXBMaXN0ZW5lcnNgIGRvY3MgLSB0YWtlcyBhbiBvcHRpb25hbCBjYWxsYmFjayBhcyB0aGUgMm5kIGFyZyBmb3IgY3VzdG9taXphdGlvblxuLy8gc2V0dXBMaXN0ZW5lcnMoc3RvcmUuZGlzcGF0Y2gpO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic2V0dXBMaXN0ZW5lcnMiLCJhcGlTbGljZSIsInN0b3JlIiwicmVkdWNlciIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query":
/*!*****************************************!*\
  !*** external "@reduxjs/toolkit/query" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();