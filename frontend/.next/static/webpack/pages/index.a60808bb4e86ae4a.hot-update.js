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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ \"./components/Column.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useCreateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useCreateOptions */ \"./utils/useCreateOptions.js\");\n/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useFetch */ \"./utils/useFetch.js\");\n/* harmony import */ var _utils_useHandleOnDragEnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useHandleOnDragEnd */ \"./utils/useHandleOnDragEnd.js\");\n/* harmony import */ var _utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useUpdateDatabase */ \"./utils/useUpdateDatabase.js\");\n/* harmony import */ var _utils_useCopyArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useCopyArray */ \"./utils/useCopyArray.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import handleOnDragEnd from '../utils/handleOnDragEnd';\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].section(_templateObject());\n_c = Container;\nvar Kanban = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)(), jobsData = ref.jobsData, catsData = ref.catsData, dispatch = ref.dispatch;\n    ///////////////////////////////////////////\n    /////////HANDLE ON DRAG END////////////////\n    ///////////////////////////////////////////\n    var handleOnDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(result) {\n        var destination = result.destination, source = result.source, draggableId = result.draggableId, type = result.type;\n        console.log('result: ', result);\n        var copyArray = function(array) {\n            var arrayString = JSON.stringify(array);\n            var arrayCopy = JSON.parse(arrayString);\n            return arrayCopy;\n        };\n        if (!destination) {\n            return;\n        }\n        if (destination.droppableId === source.droppableId && destination.index === source.index) {\n            return;\n        }\n        /* COLUMNS */ if (type === 'column') {\n            var newColumnOrder = copyArray(catsData);\n            //Update state optimistically\n            //a) reorder columns based on drag\n            newColumnOrder.splice(source.index, 1);\n            newColumnOrder.splice(destination.index, 0, catsData[source.index]);\n            //b) Update index of each category\n            newColumnOrder = newColumnOrder.map(function(col) {\n                col.catIndex = newColumnOrder.indexOf(col);\n                return col;\n            });\n            //c) Update state\n            dispatch({\n                type: 'UPDATE_CATS',\n                payload: newColumnOrder\n            });\n            //update database\n            (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('categories/reorder', newColumnOrder);\n            return;\n        }\n        /* JOBS */ if (type === 'job') {\n            // 1. Moving within the same column\n            if (destination.droppableId === source.droppableId) {\n                var newJobsOrderString = JSON.stringify(jobsData);\n                var newJobsOrder = JSON.parse(newJobsOrderString);\n                //Update state optimistically\n                //a) reorder jobs based on drag\n                newJobsOrder.splice(source.index, 1);\n                newJobsOrder.splice(destination.index, 0, jobsData[source.index]);\n                //b) Update index of each category\n                newJobsOrder.map(function(job) {\n                    job.index = newJobsOrder.indexOf(job);\n                });\n                //c) Update state\n                dispatch({\n                    type: 'UPDATE_JOBS',\n                    payload: newJobsOrder\n                });\n                //update database\n                var body = JSON.stringify({\n                    data: newJobsOrder\n                });\n                (0,_utils_useUpdateDatabase__WEBPACK_IMPORTED_MODULE_7__.useUpdateDatabase)('jobs/reorderColumn', body);\n                return;\n            }\n            if (destination.droppableId !== source.droppableId) {\n            //Reorder indicies of source column\n            //Change category of draggable\n            //Reorder indicies of destination column\n            }\n        }\n    // Moving within the same list\n    // const start = catsData[source.droppableId];\n    // const finish = catsData[destination.droppableId];\n    // if (start === finish) {\n    //   const newTaskIds = Array.from(start.taskIds);\n    //   newTaskIds.splice(source.index, 1);\n    //   newTaskIds.splice(destination.index, 0, draggableId);\n    //   const newColumn = {\n    //     ...start,\n    //     taskIds: newTaskIds,\n    //   };\n    //   const newData = {\n    //     ...data,\n    //     columns: {\n    //       ...data.columns,\n    //       [newColumn.id]: newColumn,\n    //     },\n    //   };\n    //   setData(newData);\n    // }\n    //Moving from one list to another\n    // const startTaskIds = Array.from(start.taskIds);\n    // startTaskIds.splice(source.index, 1);\n    // const newStart = {\n    //   ...start,\n    //   taskIds: startTaskIds,\n    // };\n    // const finishTaskIds = Array.from(finish.taskIds);\n    // finishTaskIds.splice(destination.index, 0, draggableId);\n    // const newFinish = {\n    //   ...finish,\n    //   taskIds: finishTaskIds,\n    // };\n    // const newData = {\n    //   ...data,\n    //   columns: {\n    //     ...data.columns,\n    //     [newStart.id]: newStart,\n    //     [newFinish.id]: newFinish,\n    //   },\n    // };\n    // setData(newData);\n    });\n    ///////////////////////////////////////////\n    ///////////////////////////////////////////\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.Droppable, {\n            droppableId: \"Kanban\",\n            direction: \"horizontal\",\n            type: \"column\",\n            children: function(provided) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread({}, provided.droppableProps, {\n                    ref: provided.innerRef,\n                    children: [\n                        catsData.map(function(cat, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                catId: cat._id,\n                                title: cat.title,\n                                description: cat.description,\n                                index: index\n                            }, cat._id, false, {\n                                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                                lineNumber: 157,\n                                columnNumber: 17\n                            }, _this1));\n                        }),\n                        provided.placeholder\n                    ]\n                }), void 0, true, {\n                    fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                    lineNumber: 154,\n                    columnNumber: 11\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n            lineNumber: 152,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, _this));\n};\n_s(Kanban, \"Y/gdk4bzWhv2HeSxhLKjFlBD9ks=\", false, function() {\n    return [\n        _utils_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c1 = Kanban;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kanban);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Kanban\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRUEsS0FBSzsrQkFKUG1CLEdBQUcsQ0FBQ0UsR0FBRzs7Ozs7d0JBT2xCLENBQUM7d0JBQ0FOLFFBQVEsQ0FBQ1MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDLENBQUM7R0ExSks1QyxNQUFNOztRQUMrQlgsNERBQWdCOzs7TUFEckRXLE1BQU07QUE0SlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0thbmJhbi5qcz83NTFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBoYW5kbGVPbkRyYWdFbmQgZnJvbSAnLi4vdXRpbHMvaGFuZGxlT25EcmFnRW5kJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL0NvbHVtbic7XG5pbXBvcnQgeyBEcm9wcGFibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi91dGlscy9jb250ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ3JlYXRlT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL3VzZUNyZWF0ZU9wdGlvbnMnO1xuaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tICcuLi91dGlscy91c2VGZXRjaCc7XG5pbXBvcnQgeyB1c2VIYW5kbGVPbkRyYWdFbmQgfSBmcm9tICcuLi91dGlscy91c2VIYW5kbGVPbkRyYWdFbmQnO1xuaW1wb3J0IHsgdXNlVXBkYXRlRGF0YWJhc2UgfSBmcm9tICcuLi91dGlscy91c2VVcGRhdGVEYXRhYmFzZSc7XG5pbXBvcnQgdXNlQ29weUFycmF5IGZyb20gJy4uL3V0aWxzL3VzZUNvcHlBcnJheSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgS2FuYmFuID0gKCkgPT4ge1xuICBjb25zdCB7IGpvYnNEYXRhLCBjYXRzRGF0YSwgZGlzcGF0Y2ggfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vL0hBTkRMRSBPTiBEUkFHIEVORC8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBjb25zdCBoYW5kbGVPbkRyYWdFbmQgPSB1c2VDYWxsYmFjaygocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZCwgdHlwZSB9ID0gcmVzdWx0O1xuICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdCk7XG5cbiAgICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuICAgICAgY29uc3QgYXJyYXlDb3B5ID0gSlNPTi5wYXJzZShhcnJheVN0cmluZyk7XG5cbiAgICAgIHJldHVybiBhcnJheUNvcHk7XG4gICAgfTtcblxuICAgIGlmICghZGVzdGluYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogQ09MVU1OUyAqL1xuICAgIGlmICh0eXBlID09PSAnY29sdW1uJykge1xuICAgICAgY29uc3QgbmV3Q29sdW1uT3JkZXIgPSBjb3B5QXJyYXkoY2F0c0RhdGEpO1xuXG4gICAgICAvL1VwZGF0ZSBzdGF0ZSBvcHRpbWlzdGljYWxseVxuICAgICAgLy9hKSByZW9yZGVyIGNvbHVtbnMgYmFzZWQgb24gZHJhZ1xuICAgICAgbmV3Q29sdW1uT3JkZXIuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7XG4gICAgICBuZXdDb2x1bW5PcmRlci5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIGNhdHNEYXRhW3NvdXJjZS5pbmRleF0pO1xuICAgICAgLy9iKSBVcGRhdGUgaW5kZXggb2YgZWFjaCBjYXRlZ29yeVxuICAgICAgbmV3Q29sdW1uT3JkZXIgPSBuZXdDb2x1bW5PcmRlci5tYXAoKGNvbCkgPT4ge1xuICAgICAgICBjb2wuY2F0SW5kZXggPSBuZXdDb2x1bW5PcmRlci5pbmRleE9mKGNvbCk7XG4gICAgICAgIHJldHVybiBjb2w7XG4gICAgICB9KTtcblxuICAgICAgLy9jKSBVcGRhdGUgc3RhdGVcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9DQVRTJywgcGF5bG9hZDogbmV3Q29sdW1uT3JkZXIgfSk7XG5cbiAgICAgIC8vdXBkYXRlIGRhdGFiYXNlXG4gICAgICB1c2VVcGRhdGVEYXRhYmFzZSgnY2F0ZWdvcmllcy9yZW9yZGVyJywgbmV3Q29sdW1uT3JkZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIEpPQlMgKi9cbiAgICBpZiAodHlwZSA9PT0gJ2pvYicpIHtcbiAgICAgIC8vIDEuIE1vdmluZyB3aXRoaW4gdGhlIHNhbWUgY29sdW1uXG4gICAgICBpZiAoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgPT09IHNvdXJjZS5kcm9wcGFibGVJZCkge1xuICAgICAgICBjb25zdCBuZXdKb2JzT3JkZXJTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqb2JzRGF0YSk7XG4gICAgICAgIGNvbnN0IG5ld0pvYnNPcmRlciA9IEpTT04ucGFyc2UobmV3Sm9ic09yZGVyU3RyaW5nKTtcblxuICAgICAgICAvL1VwZGF0ZSBzdGF0ZSBvcHRpbWlzdGljYWxseVxuICAgICAgICAvL2EpIHJlb3JkZXIgam9icyBiYXNlZCBvbiBkcmFnXG4gICAgICAgIG5ld0pvYnNPcmRlci5zcGxpY2Uoc291cmNlLmluZGV4LCAxKTtcbiAgICAgICAgbmV3Sm9ic09yZGVyLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCwgam9ic0RhdGFbc291cmNlLmluZGV4XSk7XG4gICAgICAgIC8vYikgVXBkYXRlIGluZGV4IG9mIGVhY2ggY2F0ZWdvcnlcbiAgICAgICAgbmV3Sm9ic09yZGVyLm1hcCgoam9iKSA9PiB7XG4gICAgICAgICAgam9iLmluZGV4ID0gbmV3Sm9ic09yZGVyLmluZGV4T2Yoam9iKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vYykgVXBkYXRlIHN0YXRlXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9KT0JTJywgcGF5bG9hZDogbmV3Sm9ic09yZGVyIH0pO1xuXG4gICAgICAgIC8vdXBkYXRlIGRhdGFiYXNlXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZGF0YTogbmV3Sm9ic09yZGVyLFxuICAgICAgICB9KTtcbiAgICAgICAgdXNlVXBkYXRlRGF0YWJhc2UoJ2pvYnMvcmVvcmRlckNvbHVtbicsIGJvZHkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCAhPT0gc291cmNlLmRyb3BwYWJsZUlkKSB7XG4gICAgICAgIC8vUmVvcmRlciBpbmRpY2llcyBvZiBzb3VyY2UgY29sdW1uXG4gICAgICAgIC8vQ2hhbmdlIGNhdGVnb3J5IG9mIGRyYWdnYWJsZVxuICAgICAgICAvL1Jlb3JkZXIgaW5kaWNpZXMgb2YgZGVzdGluYXRpb24gY29sdW1uXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTW92aW5nIHdpdGhpbiB0aGUgc2FtZSBsaXN0XG4gICAgLy8gY29uc3Qgc3RhcnQgPSBjYXRzRGF0YVtzb3VyY2UuZHJvcHBhYmxlSWRdO1xuICAgIC8vIGNvbnN0IGZpbmlzaCA9IGNhdHNEYXRhW2Rlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXTtcblxuICAgIC8vIGlmIChzdGFydCA9PT0gZmluaXNoKSB7XG4gICAgLy8gICBjb25zdCBuZXdUYXNrSWRzID0gQXJyYXkuZnJvbShzdGFydC50YXNrSWRzKTtcbiAgICAvLyAgIG5ld1Rhc2tJZHMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7XG4gICAgLy8gICBuZXdUYXNrSWRzLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCwgZHJhZ2dhYmxlSWQpO1xuICAgIC8vICAgY29uc3QgbmV3Q29sdW1uID0ge1xuICAgIC8vICAgICAuLi5zdGFydCxcbiAgICAvLyAgICAgdGFza0lkczogbmV3VGFza0lkcyxcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zdCBuZXdEYXRhID0ge1xuICAgIC8vICAgICAuLi5kYXRhLFxuICAgIC8vICAgICBjb2x1bW5zOiB7XG4gICAgLy8gICAgICAgLi4uZGF0YS5jb2x1bW5zLFxuICAgIC8vICAgICAgIFtuZXdDb2x1bW4uaWRdOiBuZXdDb2x1bW4sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9O1xuICAgIC8vICAgc2V0RGF0YShuZXdEYXRhKTtcbiAgICAvLyB9XG5cbiAgICAvL01vdmluZyBmcm9tIG9uZSBsaXN0IHRvIGFub3RoZXJcbiAgICAvLyBjb25zdCBzdGFydFRhc2tJZHMgPSBBcnJheS5mcm9tKHN0YXJ0LnRhc2tJZHMpO1xuICAgIC8vIHN0YXJ0VGFza0lkcy5zcGxpY2Uoc291cmNlLmluZGV4LCAxKTtcbiAgICAvLyBjb25zdCBuZXdTdGFydCA9IHtcbiAgICAvLyAgIC4uLnN0YXJ0LFxuICAgIC8vICAgdGFza0lkczogc3RhcnRUYXNrSWRzLFxuICAgIC8vIH07XG4gICAgLy8gY29uc3QgZmluaXNoVGFza0lkcyA9IEFycmF5LmZyb20oZmluaXNoLnRhc2tJZHMpO1xuICAgIC8vIGZpbmlzaFRhc2tJZHMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBkcmFnZ2FibGVJZCk7XG4gICAgLy8gY29uc3QgbmV3RmluaXNoID0ge1xuICAgIC8vICAgLi4uZmluaXNoLFxuICAgIC8vICAgdGFza0lkczogZmluaXNoVGFza0lkcyxcbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgbmV3RGF0YSA9IHtcbiAgICAvLyAgIC4uLmRhdGEsXG4gICAgLy8gICBjb2x1bW5zOiB7XG4gICAgLy8gICAgIC4uLmRhdGEuY29sdW1ucyxcbiAgICAvLyAgICAgW25ld1N0YXJ0LmlkXTogbmV3U3RhcnQsXG4gICAgLy8gICAgIFtuZXdGaW5pc2guaWRdOiBuZXdGaW5pc2gsXG4gICAgLy8gICB9LFxuICAgIC8vIH07XG4gICAgLy8gc2V0RGF0YShuZXdEYXRhKTtcbiAgfSk7XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZH0+XG4gICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiS2FuYmFuXCIgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHR5cGU9XCJjb2x1bW5cIj5cbiAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgIDxDb250YWluZXIgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfT5cbiAgICAgICAgICAgIHtjYXRzRGF0YS5tYXAoKGNhdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICAgICAgICBrZXk9e2NhdC5faWR9XG4gICAgICAgICAgICAgICAgICBjYXRJZD17Y2F0Ll9pZH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtjYXQudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y2F0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcHBhYmxlPlxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2FuYmFuO1xuIl0sIm5hbWVzIjpbIkRyYWdEcm9wQ29udGV4dCIsIkNvbHVtbiIsIkRyb3BwYWJsZSIsInVzZUdsb2JhbENvbnRleHQiLCJzdHlsZWQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ3JlYXRlT3B0aW9ucyIsInVzZUZldGNoIiwidXNlSGFuZGxlT25EcmFnRW5kIiwidXNlVXBkYXRlRGF0YWJhc2UiLCJ1c2VDb3B5QXJyYXkiLCJDb250YWluZXIiLCJzZWN0aW9uIiwiS2FuYmFuIiwiam9ic0RhdGEiLCJjYXRzRGF0YSIsImRpc3BhdGNoIiwiaGFuZGxlT25EcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJkcmFnZ2FibGVJZCIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiY29weUFycmF5IiwiYXJyYXkiLCJhcnJheVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcnJheUNvcHkiLCJwYXJzZSIsImRyb3BwYWJsZUlkIiwiaW5kZXgiLCJuZXdDb2x1bW5PcmRlciIsInNwbGljZSIsIm1hcCIsImNvbCIsImNhdEluZGV4IiwiaW5kZXhPZiIsInBheWxvYWQiLCJuZXdKb2JzT3JkZXJTdHJpbmciLCJuZXdKb2JzT3JkZXIiLCJqb2IiLCJib2R5IiwiZGF0YSIsIm9uRHJhZ0VuZCIsImRpcmVjdGlvbiIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImNhdCIsImNhdElkIiwiX2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Kanban.js\n");

/***/ })

});