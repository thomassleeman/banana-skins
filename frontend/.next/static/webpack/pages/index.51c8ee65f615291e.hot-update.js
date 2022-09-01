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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ \"./components/Column.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useCreateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useCreateOptions */ \"./utils/useCreateOptions.js\");\n/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useFetch */ \"./utils/useFetch.js\");\n/* harmony import */ var _utils_useHandleOnDragEnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useHandleOnDragEnd */ \"./utils/useHandleOnDragEnd.js\");\n/* harmony import */ var _utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useUpdateDatabase */ \"./utils/useUpdateDatabase.js\");\n/* harmony import */ var _utils_useCopyArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useCopyArray */ \"./utils/useCopyArray.js\");\n/* harmony import */ var _utils_useOrderJobs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useOrderJobs */ \"./utils/useOrderJobs.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import handleOnDragEnd from '../utils/handleOnDragEnd';\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].section(_templateObject());\n_c = Container;\nvar Kanban = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(), jobsData = ref.jobsData, catsData = ref.catsData, dispatch = ref.dispatch;\n    ///////////////////////////////////////////\n    /////////HANDLE ON DRAG END////////////////\n    ///////////////////////////////////////////\n    var handleOnDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(result) {\n        var destination = result.destination, source = result.source, draggableId = result.draggableId, type = result.type;\n        console.log('result: ', result);\n        var copyArray = function(array) {\n            var arrayString = JSON.stringify(array);\n            var arrayCopy = JSON.parse(arrayString);\n            return arrayCopy;\n        };\n        if (!destination) {\n            return;\n        }\n        if (destination.droppableId === source.droppableId && destination.index === source.index) {\n            return;\n        }\n        /* COLUMNS */ if (type === 'column') {\n            var newColumnOrder = copyArray(catsData);\n            //a) reorder columns based on drag\n            newColumnOrder.splice(source.index, 1);\n            newColumnOrder.splice(destination.index, 0, catsData[source.index]);\n            //b) Update index of each category\n            newColumnOrder = newColumnOrder.map(function(col) {\n                col.catIndex = newColumnOrder.indexOf(col);\n                return col;\n            });\n            //c) Update state optimistically\n            dispatch({\n                type: 'UPDATE_CATS',\n                payload: newColumnOrder\n            });\n            //update database\n            (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('categories/reorder', newColumnOrder);\n            return;\n        }\n        /* JOBS */ if (type === 'job') {\n            var newJobsData = copyArray(jobsData);\n            //Determine what kind of move has happened\n            var jobDragType = '';\n            if (destination.droppableId === source.droppableId) {\n                jobDragType = source.index < destination.index ? 'position_down' : 'position_up';\n            } else jobDragType = 'column_change';\n            //1) Update index of each job that has moved\n            newJobsData = newJobsData.map(function(job) {\n                //i) Change jobIndex of job that moved\n                if (job._id === draggableId) {\n                    job.jobIndex = destination.index;\n                    job.category._id = destination.droppableId;\n                    return job;\n                } else {\n                    switch(jobDragType){\n                        case 'position_down':\n                            if (job.category._id === source.droppableId && job.jobIndex <= destination.index && job.jobIndex > source.index) {\n                                job.jobIndex -= 1;\n                            }\n                            break;\n                        case 'position_up':\n                            if (job.category._id === source.droppableId && job.jobIndex >= destination.index && job.jobIndex < source.index) {\n                                job.jobIndex += 1;\n                            }\n                            break;\n                        case 'column_change':\n                            if (job.category._id === source.droppableId && job.jobIndex > source.index) {\n                                job.jobIndex -= 1;\n                            }\n                            if (job.category._id === destination.droppableId && job.jobIndex >= destination.index) {\n                                job.jobIndex += 1;\n                            }\n                    }\n                }\n                //iii) Return all jobs\n                return job;\n            });\n            newJobsData = (0,_utils_useOrderJobs__WEBPACK_IMPORTED_MODULE_9__.useOrderJobs)(newJobsData);\n            //c) Update state optimistically\n            //BUG Currently the only way that jobs are being ordered by jobIndex is when they are fetched according to category\n            // this is why a refresh is required to get the column orders correct.\n            dispatch({\n                type: 'UPDATE_JOBS',\n                payload: newJobsData\n            });\n            //update database\n            (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('jobs/reorder', newJobsData);\n            return;\n        }\n    });\n    ///////////////////////////////////////////\n    ///////////////////////////////////////////\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.Droppable, {\n            droppableId: \"Kanban\",\n            direction: \"horizontal\",\n            type: \"column\",\n            children: function(provided) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread({}, provided.droppableProps, {\n                    ref: provided.innerRef,\n                    children: [\n                        catsData.map(function(cat, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                catId: cat._id,\n                                title: cat.title,\n                                description: cat.description,\n                                index: index\n                            }, cat._id, false, {\n                                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                                lineNumber: 151,\n                                columnNumber: 17\n                            }, _this1));\n                        }),\n                        provided.placeholder\n                    ]\n                }), void 0, true, {\n                    fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                    lineNumber: 148,\n                    columnNumber: 11\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n            lineNumber: 146,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, _this));\n};\n_s(Kanban, \"Y/gdk4bzWhv2HeSxhLKjFlBD9ks=\", false, function() {\n    return [\n        _utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c1 = Kanban;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kanban);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Kanban\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxDQUFZO1lBQUMxQixJQUFJLEVBQUMsQ0FBUTtzQkFDakUsUUFBUSxDQUFQMkIsUUFBUTs4QkFDUixNQUFNLCtEQUFMdEMsU0FBUyxvQkFBS3NDLFFBQVEsQ0FBQ0MsY0FBYztvQkFBRUMsR0FBRyxFQUFFRixRQUFRLENBQUNHLFFBQVE7O3dCQUMzRHJDLFFBQVEsQ0FBQ3FCLEdBQUcsQ0FBQyxRQUFRLENBQVBpQixHQUFHLEVBQUVwQixLQUFLLEVBQUssQ0FBQzs0QkFDN0IsTUFBTSw2RUFDSGxDLCtDQUFNO2dDQUVMdUQsS0FBSyxFQUFFRCxHQUFHLENBQUNULEdBQUc7Z0NBQ2RXLEtBQUssRUFBRUYsR0FBRyxDQUFDRSxLQUFLO2dDQUNoQkMsV0FBVyxFQUFFSCxHQUFHLENBQUNHLFdBQVc7Z0NBQzVCdkIsS0FBSyxFQUFFQSxLQUFLOytCQUpQb0IsR0FBRyxDQUFDVCxHQUFHOzs7Ozt3QkFPbEIsQ0FBQzt3QkFDQUssUUFBUSxDQUFDUSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakMsQ0FBQztHQW5KSzVDLE1BQU07O1FBQytCWiw0REFBZ0I7OztNQURyRFksTUFBTTtBQXFKWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvS2FuYmFuLmpzPzc1MWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGhhbmRsZU9uRHJhZ0VuZCBmcm9tICcuLi91dGlscy9oYW5kbGVPbkRyYWdFbmQnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vQ29sdW1uJztcbmltcG9ydCB7IERyb3BwYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzL2NvbnRleHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDcmVhdGVPcHRpb25zIH0gZnJvbSAnLi4vdXRpbHMvdXNlQ3JlYXRlT3B0aW9ucyc7XG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gJy4uL3V0aWxzL3VzZUZldGNoJztcbmltcG9ydCB7IHVzZUhhbmRsZU9uRHJhZ0VuZCB9IGZyb20gJy4uL3V0aWxzL3VzZUhhbmRsZU9uRHJhZ0VuZCc7XG5pbXBvcnQgeyB1c2VVcGRhdGVEYXRhYmFzZSB9IGZyb20gJy4uL3V0aWxzL3VzZVVwZGF0ZURhdGFiYXNlJztcbmltcG9ydCB1c2VDb3B5QXJyYXkgZnJvbSAnLi4vdXRpbHMvdXNlQ29weUFycmF5JztcbmltcG9ydCB7IHVzZU9yZGVySm9icyB9IGZyb20gJy4uL3V0aWxzL3VzZU9yZGVySm9icyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgS2FuYmFuID0gKCkgPT4ge1xuICBjb25zdCB7IGpvYnNEYXRhLCBjYXRzRGF0YSwgZGlzcGF0Y2ggfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vL0hBTkRMRSBPTiBEUkFHIEVORC8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBjb25zdCBoYW5kbGVPbkRyYWdFbmQgPSB1c2VDYWxsYmFjaygocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZCwgdHlwZSB9ID0gcmVzdWx0O1xuICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdCk7XG5cbiAgICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuICAgICAgY29uc3QgYXJyYXlDb3B5ID0gSlNPTi5wYXJzZShhcnJheVN0cmluZyk7XG5cbiAgICAgIHJldHVybiBhcnJheUNvcHk7XG4gICAgfTtcblxuICAgIGlmICghZGVzdGluYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogQ09MVU1OUyAqL1xuICAgIGlmICh0eXBlID09PSAnY29sdW1uJykge1xuICAgICAgbGV0IG5ld0NvbHVtbk9yZGVyID0gY29weUFycmF5KGNhdHNEYXRhKTtcblxuICAgICAgLy9hKSByZW9yZGVyIGNvbHVtbnMgYmFzZWQgb24gZHJhZ1xuICAgICAgbmV3Q29sdW1uT3JkZXIuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7XG4gICAgICBuZXdDb2x1bW5PcmRlci5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIGNhdHNEYXRhW3NvdXJjZS5pbmRleF0pO1xuICAgICAgLy9iKSBVcGRhdGUgaW5kZXggb2YgZWFjaCBjYXRlZ29yeVxuICAgICAgbmV3Q29sdW1uT3JkZXIgPSBuZXdDb2x1bW5PcmRlci5tYXAoKGNvbCkgPT4ge1xuICAgICAgICBjb2wuY2F0SW5kZXggPSBuZXdDb2x1bW5PcmRlci5pbmRleE9mKGNvbCk7XG4gICAgICAgIHJldHVybiBjb2w7XG4gICAgICB9KTtcblxuICAgICAgLy9jKSBVcGRhdGUgc3RhdGUgb3B0aW1pc3RpY2FsbHlcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9DQVRTJywgcGF5bG9hZDogbmV3Q29sdW1uT3JkZXIgfSk7XG5cbiAgICAgIC8vdXBkYXRlIGRhdGFiYXNlXG4gICAgICB1c2VVcGRhdGVEYXRhYmFzZSgnY2F0ZWdvcmllcy9yZW9yZGVyJywgbmV3Q29sdW1uT3JkZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIEpPQlMgKi9cbiAgICBpZiAodHlwZSA9PT0gJ2pvYicpIHtcbiAgICAgIGxldCBuZXdKb2JzRGF0YSA9IGNvcHlBcnJheShqb2JzRGF0YSk7XG5cbiAgICAgIC8vRGV0ZXJtaW5lIHdoYXQga2luZCBvZiBtb3ZlIGhhcyBoYXBwZW5lZFxuICAgICAgbGV0IGpvYkRyYWdUeXBlID0gJyc7XG4gICAgICBpZiAoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgPT09IHNvdXJjZS5kcm9wcGFibGVJZCkge1xuICAgICAgICBqb2JEcmFnVHlwZSA9XG4gICAgICAgICAgc291cmNlLmluZGV4IDwgZGVzdGluYXRpb24uaW5kZXggPyAncG9zaXRpb25fZG93bicgOiAncG9zaXRpb25fdXAnO1xuICAgICAgfSBlbHNlIGpvYkRyYWdUeXBlID0gJ2NvbHVtbl9jaGFuZ2UnO1xuXG4gICAgICAvLzEpIFVwZGF0ZSBpbmRleCBvZiBlYWNoIGpvYiB0aGF0IGhhcyBtb3ZlZFxuICAgICAgbmV3Sm9ic0RhdGEgPSBuZXdKb2JzRGF0YS5tYXAoKGpvYikgPT4ge1xuICAgICAgICAvL2kpIENoYW5nZSBqb2JJbmRleCBvZiBqb2IgdGhhdCBtb3ZlZFxuICAgICAgICBpZiAoam9iLl9pZCA9PT0gZHJhZ2dhYmxlSWQpIHtcbiAgICAgICAgICBqb2Iuam9iSW5kZXggPSBkZXN0aW5hdGlvbi5pbmRleDtcbiAgICAgICAgICBqb2IuY2F0ZWdvcnkuX2lkID0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWQ7XG4gICAgICAgICAgcmV0dXJuIGpvYjtcbiAgICAgICAgfVxuICAgICAgICAvL2lpKSBDaGFuZ2Ugam9iSW5kZXggb2YgYW55IG90aGVyIGpvYnMgdGhhdCBoYXZlIG1vdmVkIGFzIGEgcmVzdWx0IG9mIHRoZSBkcmFnXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHN3aXRjaCAoam9iRHJhZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aW9uX2Rvd24nOlxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgam9iLmNhdGVnb3J5Ll9pZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICAgICAgICAgICAgam9iLmpvYkluZGV4IDw9IGRlc3RpbmF0aW9uLmluZGV4ICYmXG4gICAgICAgICAgICAgICAgam9iLmpvYkluZGV4ID4gc291cmNlLmluZGV4XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGpvYi5qb2JJbmRleCAtPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9zaXRpb25fdXAnOlxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgam9iLmNhdGVnb3J5Ll9pZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICAgICAgICAgICAgam9iLmpvYkluZGV4ID49IGRlc3RpbmF0aW9uLmluZGV4ICYmXG4gICAgICAgICAgICAgICAgam9iLmpvYkluZGV4IDwgc291cmNlLmluZGV4XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGpvYi5qb2JJbmRleCArPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29sdW1uX2NoYW5nZSc6XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBqb2IuY2F0ZWdvcnkuX2lkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiZcbiAgICAgICAgICAgICAgICBqb2Iuam9iSW5kZXggPiBzb3VyY2UuaW5kZXhcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgam9iLmpvYkluZGV4IC09IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgam9iLmNhdGVnb3J5Ll9pZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgJiZcbiAgICAgICAgICAgICAgICBqb2Iuam9iSW5kZXggPj0gZGVzdGluYXRpb24uaW5kZXhcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgam9iLmpvYkluZGV4ICs9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2lpaSkgUmV0dXJuIGFsbCBqb2JzXG4gICAgICAgIHJldHVybiBqb2I7XG4gICAgICB9KTtcblxuICAgICAgbmV3Sm9ic0RhdGEgPSB1c2VPcmRlckpvYnMobmV3Sm9ic0RhdGEpO1xuXG4gICAgICAvL2MpIFVwZGF0ZSBzdGF0ZSBvcHRpbWlzdGljYWxseVxuICAgICAgLy9CVUcgQ3VycmVudGx5IHRoZSBvbmx5IHdheSB0aGF0IGpvYnMgYXJlIGJlaW5nIG9yZGVyZWQgYnkgam9iSW5kZXggaXMgd2hlbiB0aGV5IGFyZSBmZXRjaGVkIGFjY29yZGluZyB0byBjYXRlZ29yeVxuICAgICAgLy8gdGhpcyBpcyB3aHkgYSByZWZyZXNoIGlzIHJlcXVpcmVkIHRvIGdldCB0aGUgY29sdW1uIG9yZGVycyBjb3JyZWN0LlxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0pPQlMnLCBwYXlsb2FkOiBuZXdKb2JzRGF0YSB9KTtcblxuICAgICAgLy91cGRhdGUgZGF0YWJhc2VcbiAgICAgIHVzZVVwZGF0ZURhdGFiYXNlKCdqb2JzL3Jlb3JkZXInLCBuZXdKb2JzRGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kfT5cbiAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJLYW5iYW5cIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIgdHlwZT1cImNvbHVtblwiPlxuICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgPENvbnRhaW5lciB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9PlxuICAgICAgICAgICAge2NhdHNEYXRhLm1hcCgoY2F0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgICAgIGtleT17Y2F0Ll9pZH1cbiAgICAgICAgICAgICAgICAgIGNhdElkPXtjYXQuX2lkfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NhdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjYXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9Ecm9wcGFibGU+XG4gICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLYW5iYW47XG4iXSwibmFtZXMiOlsiRHJhZ0Ryb3BDb250ZXh0IiwiQ29sdW1uIiwiRHJvcHBhYmxlIiwidXNlR2xvYmFsQ29udGV4dCIsInN0eWxlZCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDcmVhdGVPcHRpb25zIiwidXNlRmV0Y2giLCJ1c2VIYW5kbGVPbkRyYWdFbmQiLCJ1c2VVcGRhdGVEYXRhYmFzZSIsInVzZUNvcHlBcnJheSIsInVzZU9yZGVySm9icyIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJLYW5iYW4iLCJqb2JzRGF0YSIsImNhdHNEYXRhIiwiZGlzcGF0Y2giLCJoYW5kbGVPbkRyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsImRyYWdnYWJsZUlkIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJjb3B5QXJyYXkiLCJhcnJheSIsImFycmF5U3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImFycmF5Q29weSIsInBhcnNlIiwiZHJvcHBhYmxlSWQiLCJpbmRleCIsIm5ld0NvbHVtbk9yZGVyIiwic3BsaWNlIiwibWFwIiwiY29sIiwiY2F0SW5kZXgiLCJpbmRleE9mIiwicGF5bG9hZCIsIm5ld0pvYnNEYXRhIiwiam9iRHJhZ1R5cGUiLCJqb2IiLCJfaWQiLCJqb2JJbmRleCIsImNhdGVnb3J5Iiwib25EcmFnRW5kIiwiZGlyZWN0aW9uIiwicHJvdmlkZWQiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwiY2F0IiwiY2F0SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Kanban.js\n");

/***/ }),

/***/ "./utils/useOrderJobs.js":
/*!*******************************!*\
  !*** ./utils/useOrderJobs.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useOrderJobs\": function() { return /* binding */ useOrderJobs; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar useOrderJobs = function(unorderedJobsArray) {\n    var jobsByOrderedCat = unorderedJobsArray.sort(function(a, b) {\n        return a.category.catIndex - b.category.catIndex;\n    });\n    var orderedJobsArray = jobsByOrderedCat.sort(function(a, b) {\n        if (a.category._id === b.category._id) {\n            return a.jobIndex - b.jobIndex;\n        }\n    });\n    return orderedJobsArray;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy91c2VPcmRlckpvYnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxHQUFLLENBQUNBLFlBQVksR0FBRyxRQUFRLENBQVBDLGtCQUFrQixFQUFLLENBQUM7SUFDbkQsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0Qsa0JBQWtCLENBQUNFLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQyxFQUFLLENBQUM7UUFDMUQsTUFBTSxDQUFDRCxDQUFDLENBQUNFLFFBQVEsQ0FBQ0MsUUFBUSxHQUFHRixDQUFDLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUNsRCxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR04sZ0JBQWdCLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQyxFQUFLLENBQUM7UUFDeEQsRUFBRSxFQUFFRCxDQUFDLENBQUNFLFFBQVEsQ0FBQ0csR0FBRyxLQUFLSixDQUFDLENBQUNDLFFBQVEsQ0FBQ0csR0FBRyxFQUFFLENBQUM7WUFDdEMsTUFBTSxDQUFDTCxDQUFDLENBQUNNLFFBQVEsR0FBR0wsQ0FBQyxDQUFDSyxRQUFRO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDRixnQkFBZ0I7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy91c2VPcmRlckpvYnMuanM/YjBjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXNlT3JkZXJKb2JzID0gKHVub3JkZXJlZEpvYnNBcnJheSkgPT4ge1xuICBjb25zdCBqb2JzQnlPcmRlcmVkQ2F0ID0gdW5vcmRlcmVkSm9ic0FycmF5LnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5jYXRlZ29yeS5jYXRJbmRleCAtIGIuY2F0ZWdvcnkuY2F0SW5kZXg7XG4gIH0pO1xuICBjb25zdCBvcmRlcmVkSm9ic0FycmF5ID0gam9ic0J5T3JkZXJlZENhdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuY2F0ZWdvcnkuX2lkID09PSBiLmNhdGVnb3J5Ll9pZCkge1xuICAgICAgcmV0dXJuIGEuam9iSW5kZXggLSBiLmpvYkluZGV4O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcmRlcmVkSm9ic0FycmF5O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VPcmRlckpvYnMiLCJ1bm9yZGVyZWRKb2JzQXJyYXkiLCJqb2JzQnlPcmRlcmVkQ2F0Iiwic29ydCIsImEiLCJiIiwiY2F0ZWdvcnkiLCJjYXRJbmRleCIsIm9yZGVyZWRKb2JzQXJyYXkiLCJfaWQiLCJqb2JJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/useOrderJobs.js\n");

/***/ })

});