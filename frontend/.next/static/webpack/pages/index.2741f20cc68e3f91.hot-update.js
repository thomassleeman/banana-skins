"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Kanban.js":
/*!******************************!*\
  !*** ./components/Kanban.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ \"./components/Column.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useCreateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useCreateOptions */ \"./utils/useCreateOptions.js\");\n/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useFetch */ \"./utils/useFetch.js\");\n/* harmony import */ var _utils_useHandleOnDragEnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useHandleOnDragEnd */ \"./utils/useHandleOnDragEnd.js\");\n/* harmony import */ var _utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useUpdateDatabase */ \"./utils/useUpdateDatabase.js\");\n/* harmony import */ var _utils_useCopyArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useCopyArray */ \"./utils/useCopyArray.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import handleOnDragEnd from '../utils/handleOnDragEnd';\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].section(_templateObject());\n_c = Container;\nvar Kanban = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(), jobsData = ref.jobsData, catsData = ref.catsData, dispatch = ref.dispatch;\n    ///////////////////////////////////////////\n    /////////HANDLE ON DRAG END////////////////\n    ///////////////////////////////////////////\n    var handleOnDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(result) {\n        var destination = result.destination, source = result.source, draggableId = result.draggableId, type = result.type;\n        console.log('result: ', result);\n        var copyArray = function(array) {\n            var arrayString = JSON.stringify(array);\n            var arrayCopy = JSON.parse(arrayString);\n            return arrayCopy;\n        };\n        if (!destination) {\n            return;\n        }\n        if (destination.droppableId === source.droppableId && destination.index === source.index) {\n            return;\n        }\n        /* COLUMNS */ if (type === 'column') {\n            var newColumnOrder = copyArray(catsData);\n            //Update state optimistically\n            //a) reorder columns based on drag\n            newColumnOrder.splice(source.index, 1);\n            newColumnOrder.splice(destination.index, 0, catsData[source.index]);\n            //b) Update index of each category\n            newColumnOrder = newColumnOrder.map(function(col) {\n                col.catIndex = newColumnOrder.indexOf(col);\n                return col;\n            });\n            //c) Update state\n            dispatch({\n                type: 'UPDATE_CATS',\n                payload: newColumnOrder\n            });\n            //update database\n            (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('categories/reorder', newColumnOrder);\n            return;\n        }\n        /* JOBS */ if (type === 'job') {\n            var newJobsData = copyArray(jobsData);\n            //Determine what kind of move has happened\n            var move = '';\n            if (destination.droppableId === source.droppableId) {\n                move = source.index > destination.index ? 'position_down' : 'position_up';\n            } else move = 'column_change';\n            //1) Update index of each job that has moved\n            newJobsData = newJobsData.map(function(job) {\n                //i) Change jobIndex of job that moved\n                if (job._id === draggableId) {\n                    job.jobIndex = destination.index;\n                    job.category._id = destination.droppableId;\n                    return job;\n                }\n                switch(move){\n                    case 'position_down':\n                        if (job.category._id === source.droppableId && job.jobIndex <= destination.index && job.jobIndex > source.index) {\n                            job.jobIndex -= 1;\n                        }\n                        break;\n                    case 'position_up':\n                        if (job.category._id === source.droppableId && job.jobIndex >= destination.index && job.jobIndex < source.index) {\n                            job.jobIndex += 1;\n                        }\n                        break;\n                    case 'column_change':\n                        if (job.category._id === source.droppableId && job.jobIndex > source.index) {\n                            job.jobIndex -= 1;\n                        }\n                        if (job.category._id === destination.droppableId && job.jobIndex >= destination.index) {\n                            job.jobIndex += 1;\n                        }\n                }\n                //Reorder indicies of source column\n                //Change category of draggable\n                //Reorder indicies of destination column\n                //iii) Return all jobs\n                return job;\n            });\n            //c) Update state\n            dispatch({\n                type: 'UPDATE_JOBS',\n                payload: newJobsData\n            });\n            //update database\n            (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('jobs/reorderColumn', newJobsData);\n            return;\n        }\n    });\n    ///////////////////////////////////////////\n    ///////////////////////////////////////////\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.Droppable, {\n            droppableId: \"Kanban\",\n            direction: \"horizontal\",\n            type: \"column\",\n            children: function(provided) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread({}, provided.droppableProps, {\n                    ref: provided.innerRef,\n                    children: [\n                        catsData.map(function(cat, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                catId: cat._id,\n                                title: cat.title,\n                                description: cat.description,\n                                index: index\n                            }, cat._id, false, {\n                                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                                lineNumber: 149,\n                                columnNumber: 17\n                            }, _this1));\n                        }),\n                        provided.placeholder\n                    ]\n                }), void 0, true, {\n                    fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                    lineNumber: 146,\n                    columnNumber: 11\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n            lineNumber: 144,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, _this));\n};\n_s(Kanban, \"Y/gdk4bzWhv2HeSxhLKjFlBD9ks=\", false, function() {\n    return [\n        _utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c1 = Kanban;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kanban);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Kanban\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pFLFFBQVEsQ0FBUDJCLFFBQVE7OEJBQ1IsTUFBTSwrREFBTHRDLFNBQVMsb0JBQUtzQyxRQUFRLENBQUNDLGNBQWM7b0JBQUVDLEdBQUcsRUFBRUYsUUFBUSxDQUFDRyxRQUFROzt3QkFDM0RyQyxRQUFRLENBQUNxQixHQUFHLENBQUMsUUFBUSxDQUFQaUIsR0FBRyxFQUFFcEIsS0FBSyxFQUFLLENBQUM7NEJBQzdCLE1BQU0sNkVBQ0hqQywrQ0FBTTtnQ0FFTHNELEtBQUssRUFBRUQsR0FBRyxDQUFDVCxHQUFHO2dDQUNkVyxLQUFLLEVBQUVGLEdBQUcsQ0FBQ0UsS0FBSztnQ0FDaEJDLFdBQVcsRUFBRUgsR0FBRyxDQUFDRyxXQUFXO2dDQUM1QnZCLEtBQUssRUFBRUEsS0FBSzsrQkFKUG9CLEdBQUcsQ0FBQ1QsR0FBRzs7Ozs7d0JBT2xCLENBQUM7d0JBQ0FLLFFBQVEsQ0FBQ1EsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDLENBQUM7R0FsSks1QyxNQUFNOztRQUMrQlgsNERBQWdCOzs7TUFEckRXLE1BQU07QUFvSlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0thbmJhbi5qcz83NTFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBoYW5kbGVPbkRyYWdFbmQgZnJvbSAnLi4vdXRpbHMvaGFuZGxlT25EcmFnRW5kJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL0NvbHVtbic7XG5pbXBvcnQgeyBEcm9wcGFibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi91dGlscy9jb250ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ3JlYXRlT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL3VzZUNyZWF0ZU9wdGlvbnMnO1xuaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tICcuLi91dGlscy91c2VGZXRjaCc7XG5pbXBvcnQgeyB1c2VIYW5kbGVPbkRyYWdFbmQgfSBmcm9tICcuLi91dGlscy91c2VIYW5kbGVPbkRyYWdFbmQnO1xuaW1wb3J0IHsgdXNlVXBkYXRlRGF0YWJhc2UgfSBmcm9tICcuLi91dGlscy91c2VVcGRhdGVEYXRhYmFzZSc7XG5pbXBvcnQgdXNlQ29weUFycmF5IGZyb20gJy4uL3V0aWxzL3VzZUNvcHlBcnJheSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgS2FuYmFuID0gKCkgPT4ge1xuICBjb25zdCB7IGpvYnNEYXRhLCBjYXRzRGF0YSwgZGlzcGF0Y2ggfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vL0hBTkRMRSBPTiBEUkFHIEVORC8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBjb25zdCBoYW5kbGVPbkRyYWdFbmQgPSB1c2VDYWxsYmFjaygocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZCwgdHlwZSB9ID0gcmVzdWx0O1xuICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdCk7XG5cbiAgICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuICAgICAgY29uc3QgYXJyYXlDb3B5ID0gSlNPTi5wYXJzZShhcnJheVN0cmluZyk7XG5cbiAgICAgIHJldHVybiBhcnJheUNvcHk7XG4gICAgfTtcblxuICAgIGlmICghZGVzdGluYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogQ09MVU1OUyAqL1xuICAgIGlmICh0eXBlID09PSAnY29sdW1uJykge1xuICAgICAgbGV0IG5ld0NvbHVtbk9yZGVyID0gY29weUFycmF5KGNhdHNEYXRhKTtcblxuICAgICAgLy9VcGRhdGUgc3RhdGUgb3B0aW1pc3RpY2FsbHlcbiAgICAgIC8vYSkgcmVvcmRlciBjb2x1bW5zIGJhc2VkIG9uIGRyYWdcbiAgICAgIG5ld0NvbHVtbk9yZGVyLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpO1xuICAgICAgbmV3Q29sdW1uT3JkZXIuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBjYXRzRGF0YVtzb3VyY2UuaW5kZXhdKTtcbiAgICAgIC8vYikgVXBkYXRlIGluZGV4IG9mIGVhY2ggY2F0ZWdvcnlcbiAgICAgIG5ld0NvbHVtbk9yZGVyID0gbmV3Q29sdW1uT3JkZXIubWFwKChjb2wpID0+IHtcbiAgICAgICAgY29sLmNhdEluZGV4ID0gbmV3Q29sdW1uT3JkZXIuaW5kZXhPZihjb2wpO1xuICAgICAgICByZXR1cm4gY29sO1xuICAgICAgfSk7XG5cbiAgICAgIC8vYykgVXBkYXRlIHN0YXRlXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfQ0FUUycsIHBheWxvYWQ6IG5ld0NvbHVtbk9yZGVyIH0pO1xuXG4gICAgICAvL3VwZGF0ZSBkYXRhYmFzZVxuICAgICAgdXNlVXBkYXRlRGF0YWJhc2UoJ2NhdGVnb3JpZXMvcmVvcmRlcicsIG5ld0NvbHVtbk9yZGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBKT0JTICovXG4gICAgaWYgKHR5cGUgPT09ICdqb2InKSB7XG4gICAgICBsZXQgbmV3Sm9ic0RhdGEgPSBjb3B5QXJyYXkoam9ic0RhdGEpO1xuXG4gICAgICAvL0RldGVybWluZSB3aGF0IGtpbmQgb2YgbW92ZSBoYXMgaGFwcGVuZWRcbiAgICAgIGxldCBtb3ZlID0gJyc7XG4gICAgICBpZiAoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgPT09IHNvdXJjZS5kcm9wcGFibGVJZCkge1xuICAgICAgICBtb3ZlID1cbiAgICAgICAgICBzb3VyY2UuaW5kZXggPiBkZXN0aW5hdGlvbi5pbmRleCA/ICdwb3NpdGlvbl9kb3duJyA6ICdwb3NpdGlvbl91cCc7XG4gICAgICB9IGVsc2UgbW92ZSA9ICdjb2x1bW5fY2hhbmdlJztcblxuICAgICAgLy8xKSBVcGRhdGUgaW5kZXggb2YgZWFjaCBqb2IgdGhhdCBoYXMgbW92ZWRcbiAgICAgIG5ld0pvYnNEYXRhID0gbmV3Sm9ic0RhdGEubWFwKChqb2IpID0+IHtcbiAgICAgICAgLy9pKSBDaGFuZ2Ugam9iSW5kZXggb2Ygam9iIHRoYXQgbW92ZWRcbiAgICAgICAgaWYgKGpvYi5faWQgPT09IGRyYWdnYWJsZUlkKSB7XG4gICAgICAgICAgam9iLmpvYkluZGV4ID0gZGVzdGluYXRpb24uaW5kZXg7XG4gICAgICAgICAgam9iLmNhdGVnb3J5Ll9pZCA9IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkO1xuICAgICAgICAgIHJldHVybiBqb2I7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG1vdmUpIHtcbiAgICAgICAgICBjYXNlICdwb3NpdGlvbl9kb3duJzpcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgam9iLmNhdGVnb3J5Ll9pZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICAgICAgICAgIGpvYi5qb2JJbmRleCA8PSBkZXN0aW5hdGlvbi5pbmRleCAmJlxuICAgICAgICAgICAgICBqb2Iuam9iSW5kZXggPiBzb3VyY2UuaW5kZXhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBqb2Iuam9iSW5kZXggLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Bvc2l0aW9uX3VwJzpcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgam9iLmNhdGVnb3J5Ll9pZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICAgICAgICAgIGpvYi5qb2JJbmRleCA+PSBkZXN0aW5hdGlvbi5pbmRleCAmJlxuICAgICAgICAgICAgICBqb2Iuam9iSW5kZXggPCBzb3VyY2UuaW5kZXhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBqb2Iuam9iSW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbHVtbl9jaGFuZ2UnOlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBqb2IuY2F0ZWdvcnkuX2lkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiZcbiAgICAgICAgICAgICAgam9iLmpvYkluZGV4ID4gc291cmNlLmluZGV4XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgam9iLmpvYkluZGV4IC09IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgam9iLmNhdGVnb3J5Ll9pZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgJiZcbiAgICAgICAgICAgICAgam9iLmpvYkluZGV4ID49IGRlc3RpbmF0aW9uLmluZGV4XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgam9iLmpvYkluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1Jlb3JkZXIgaW5kaWNpZXMgb2Ygc291cmNlIGNvbHVtblxuICAgICAgICAvL0NoYW5nZSBjYXRlZ29yeSBvZiBkcmFnZ2FibGVcbiAgICAgICAgLy9SZW9yZGVyIGluZGljaWVzIG9mIGRlc3RpbmF0aW9uIGNvbHVtblxuXG4gICAgICAgIC8vaWlpKSBSZXR1cm4gYWxsIGpvYnNcbiAgICAgICAgcmV0dXJuIGpvYjtcbiAgICAgIH0pO1xuXG4gICAgICAvL2MpIFVwZGF0ZSBzdGF0ZVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0pPQlMnLCBwYXlsb2FkOiBuZXdKb2JzRGF0YSB9KTtcblxuICAgICAgLy91cGRhdGUgZGF0YWJhc2VcbiAgICAgIHVzZVVwZGF0ZURhdGFiYXNlKCdqb2JzL3Jlb3JkZXJDb2x1bW4nLCBuZXdKb2JzRGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kfT5cbiAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJLYW5iYW5cIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIgdHlwZT1cImNvbHVtblwiPlxuICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgPENvbnRhaW5lciB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9PlxuICAgICAgICAgICAge2NhdHNEYXRhLm1hcCgoY2F0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgICAgIGtleT17Y2F0Ll9pZH1cbiAgICAgICAgICAgICAgICAgIGNhdElkPXtjYXQuX2lkfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NhdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjYXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9Ecm9wcGFibGU+XG4gICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLYW5iYW47XG4iXSwibmFtZXMiOlsiRHJhZ0Ryb3BDb250ZXh0IiwiQ29sdW1uIiwiRHJvcHBhYmxlIiwidXNlR2xvYmFsQ29udGV4dCIsInN0eWxlZCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDcmVhdGVPcHRpb25zIiwidXNlRmV0Y2giLCJ1c2VIYW5kbGVPbkRyYWdFbmQiLCJ1c2VVcGRhdGVEYXRhYmFzZSIsInVzZUNvcHlBcnJheSIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJLYW5iYW4iLCJqb2JzRGF0YSIsImNhdHNEYXRhIiwiZGlzcGF0Y2giLCJoYW5kbGVPbkRyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsImRyYWdnYWJsZUlkIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJjb3B5QXJyYXkiLCJhcnJheSIsImFycmF5U3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImFycmF5Q29weSIsInBhcnNlIiwiZHJvcHBhYmxlSWQiLCJpbmRleCIsIm5ld0NvbHVtbk9yZGVyIiwic3BsaWNlIiwibWFwIiwiY29sIiwiY2F0SW5kZXgiLCJpbmRleE9mIiwicGF5bG9hZCIsIm5ld0pvYnNEYXRhIiwibW92ZSIsImpvYiIsIl9pZCIsImpvYkluZGV4IiwiY2F0ZWdvcnkiLCJvbkRyYWdFbmQiLCJkaXJlY3Rpb24iLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJjYXQiLCJjYXRJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Kanban.js\n");

/***/ })

});