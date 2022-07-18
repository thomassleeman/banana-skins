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

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext),\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./reducer.js\");\n\n\n\nconst defaultState = {\n    loading: true,\n    user: null,\n    userData: [],\n    catData: [],\n    jobsData: []\n};\nconst AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst AppProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], defaultState);\n    const endPoints = {\n        user: {\n            projects: '',\n            amend: ''\n        },\n        projects: {\n            all: '',\n            create: '',\n            delete: '',\n            amend: ''\n        },\n        columns: {\n            all: '',\n            create: '',\n            delete: '',\n            amend: ''\n        },\n        jobs: {\n            all: '',\n            create: '',\n            delete: '',\n            amend: ''\n        }\n    };\n    const hello = 'hello World';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            ...state,\n            endPoints,\n            dispatch,\n            hello\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/context.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined));\n};\nconst useGlobalContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxRDtBQUN0QjtBQUUvQixLQUFLLENBQUNJLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxPQUFPLEVBQUUsSUFBSTtJQUNiQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ1pDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDWEMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUM7QUFFRCxLQUFLLENBQUNDLFVBQVUsaUJBQUdWLDBEQUFtQjtBQUV0QyxLQUFLLENBQUNZLFdBQVcsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNyQyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJYixpREFBVSxDQUFDQyxnREFBTyxFQUFFQyxZQUFZO0lBRTFELEtBQUssQ0FBQ1ksU0FBUyxHQUFHLENBQUM7UUFDakJWLElBQUksRUFBRSxDQUFDO1lBQ0xXLFFBQVEsRUFBRSxDQUFFO1lBQ1pDLEtBQUssRUFBRSxDQUFFO1FBQ1gsQ0FBQztRQUNERCxRQUFRLEVBQUUsQ0FBQztZQUNURSxHQUFHLEVBQUUsQ0FBRTtZQUNQQyxNQUFNLEVBQUUsQ0FBRTtZQUNWQyxNQUFNLEVBQUUsQ0FBRTtZQUNWSCxLQUFLLEVBQUUsQ0FBRTtRQUNYLENBQUM7UUFDREksT0FBTyxFQUFFLENBQUM7WUFDUkgsR0FBRyxFQUFFLENBQUU7WUFDUEMsTUFBTSxFQUFFLENBQUU7WUFDVkMsTUFBTSxFQUFFLENBQUU7WUFDVkgsS0FBSyxFQUFFLENBQUU7UUFDWCxDQUFDO1FBQ0RLLElBQUksRUFBRSxDQUFDO1lBQ0xKLEdBQUcsRUFBRSxDQUFFO1lBQ1BDLE1BQU0sRUFBRSxDQUFFO1lBQ1ZDLE1BQU0sRUFBRSxDQUFFO1lBQ1ZILEtBQUssRUFBRSxDQUFFO1FBQ1gsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNNLEtBQUssR0FBRyxDQUFhO0lBRTNCLE1BQU0sNkVBQ0hkLFVBQVUsQ0FBQ2UsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztlQUFJWixLQUFLO1lBQUVFLFNBQVM7WUFBRUQsUUFBUTtZQUFFUyxLQUFLO1FBQUMsQ0FBQztrQkFDakVYLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFTSxLQUFLLENBQUNjLGdCQUFnQixPQUFTLENBQUM7SUFDckMsTUFBTSxDQUFDMUIsaURBQVUsQ0FBQ1MsVUFBVTtBQUM5QixDQUFDO0FBQ2tDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHIvLi9jb250ZXh0LmpzPzAxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGxvYWRpbmc6IHRydWUsXG4gIHVzZXI6IG51bGwsXG4gIHVzZXJEYXRhOiBbXSxcbiAgY2F0RGF0YTogW10sXG4gIGpvYnNEYXRhOiBbXSxcbn07XG5cbmNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgZGVmYXVsdFN0YXRlKTtcblxuICBjb25zdCBlbmRQb2ludHMgPSB7XG4gICAgdXNlcjoge1xuICAgICAgcHJvamVjdHM6ICcnLFxuICAgICAgYW1lbmQ6ICcnLFxuICAgIH0sXG4gICAgcHJvamVjdHM6IHtcbiAgICAgIGFsbDogJycsXG4gICAgICBjcmVhdGU6ICcnLFxuICAgICAgZGVsZXRlOiAnJyxcbiAgICAgIGFtZW5kOiAnJyxcbiAgICB9LFxuICAgIGNvbHVtbnM6IHtcbiAgICAgIGFsbDogJycsXG4gICAgICBjcmVhdGU6ICcnLFxuICAgICAgZGVsZXRlOiAnJyxcbiAgICAgIGFtZW5kOiAnJyxcbiAgICB9LFxuICAgIGpvYnM6IHtcbiAgICAgIGFsbDogJycsXG4gICAgICBjcmVhdGU6ICcnLFxuICAgICAgZGVsZXRlOiAnJyxcbiAgICAgIGFtZW5kOiAnJyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGhlbGxvID0gJ2hlbGxvIFdvcmxkJztcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCBlbmRQb2ludHMsIGRpc3BhdGNoLCBoZWxsbyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG59O1xuZXhwb3J0IHsgQXBwQ29udGV4dCwgQXBwUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImRlZmF1bHRTdGF0ZSIsImxvYWRpbmciLCJ1c2VyIiwidXNlckRhdGEiLCJjYXREYXRhIiwiam9ic0RhdGEiLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwiZW5kUG9pbnRzIiwicHJvamVjdHMiLCJhbWVuZCIsImFsbCIsImNyZWF0ZSIsImRlbGV0ZSIsImNvbHVtbnMiLCJqb2JzIiwiaGVsbG8iLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_1__.AppProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDVjtTQUVyQkMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDSEgsaURBQVc7OEZBQ1RFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0ci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcHBQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXBwUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case 'LOADING':\n            return {\n                ...state,\n                loading: true\n            };\n        case 'DATA_UPDATE':\n            return {\n                ...state,\n                jobsData: action.payload,\n                loading: false\n            };\n        default:\n            return {\n                ...state\n            };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLE9BQU8sSUFBSUMsS0FBSyxFQUFFQyxNQUFNLEdBQUssQ0FBQztJQUNsQyxNQUFNLENBQUVBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixJQUFJLENBQUMsQ0FBUztZQUNaLE1BQU0sQ0FBQyxDQUFDO21CQUNIRixLQUFLO2dCQUNSRyxPQUFPLEVBQUUsSUFBSTtZQUNmLENBQUM7UUFDSCxJQUFJLENBQUMsQ0FBYTtZQUNoQixNQUFNLENBQUMsQ0FBQzttQkFDSEgsS0FBSztnQkFDUkksUUFBUSxFQUFFSCxNQUFNLENBQUNJLE9BQU87Z0JBQ3hCRixPQUFPLEVBQUUsS0FBSztZQUNoQixDQUFDOztZQUVELE1BQU0sQ0FBQyxDQUFDO21CQUFJSCxLQUFLO1lBQUMsQ0FBQzs7QUFFekIsQ0FBQztBQUVELGlFQUFlRCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0ci8uL3JlZHVjZXIuanM/N2RjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURJTkcnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ0RBVEFfVVBEQVRFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBqb2JzRGF0YTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9hZGluZyIsImpvYnNEYXRhIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducer.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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