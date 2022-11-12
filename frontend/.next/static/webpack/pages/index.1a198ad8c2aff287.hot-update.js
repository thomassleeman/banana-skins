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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _features_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/api/apiSlice */ \"./features/api/apiSlice.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ \"./components/Column.js\");\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading */ \"./node_modules/react-loading/dist/react-loading.js\");\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Kanban = function() {\n    _s();\n    var ref = (0,_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.useGetCategoriesQuery)(), categories = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess, isError = ref.isError, error = ref.error;\n    var ref1 = _slicedToArray((0,_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.useReorderCategoriesMutation)(), 2), reorderCategories = ref1[0], reOrderCategoriesMetaData = ref1[1];\n    var catsData = categories;\n    console.log(categories);\n    // if (isError) {\n    //   console.log(error);\n    // }\n    console.log(typeof categories === \"undefined\" ? \"undefined\" : _typeof(categories));\n    ///////////////////////////////////////////\n    /////////HANDLE ON DRAG END////////////////\n    ///////////////////////////////////////////\n    var handleOnDragEnd = function(result) {\n        var destination = result.destination, source = result.source, draggableId = result.draggableId, type = result.type;\n        if (!destination) {\n            return;\n        }\n        if (destination.droppableId === source.droppableId && destination.index === source.index) {\n            return;\n        }\n        /* COLUMNS */ if (type === 'column') {\n            var newColumnOrder = JSON.parse(JSON.stringify(categories));\n            // a) reorder columns based on drag\n            newColumnOrder.splice(source.index, 1);\n            newColumnOrder.splice(destination.index, 0, categories[source.index]);\n            // b) Update index of each category\n            newColumnOrder = newColumnOrder.map(function(col) {\n                col.catIndex = newColumnOrder.indexOf(col);\n                return col;\n            });\n            console.log(newColumnOrder);\n            return;\n        }\n        /* JOBS */ if (type === 'job') {\n            var start = source.droppableId;\n            var finish = destination.droppableId;\n            var sourceCat = catsData.find(function(cat) {\n                return cat._id === start;\n            });\n            var destinationCat = catsData.find(function(cat) {\n                return cat._id === finish;\n            });\n            var sourceCatIndex = catsData.indexOf(sourceCat);\n            var destinationCatIndex = catsData.indexOf(destinationCat);\n            var newSourceJobs = sourceCat.jobs;\n            var newDestinationJobs = destinationCat.jobs;\n            var movingJob = sourceCat.jobs[source.index];\n            newSourceJobs.splice(source.index, 1);\n            if (start === finish) {\n                newSourceJobs.splice(destination.index, 0, movingJob);\n            } else {\n                newDestinationJobs.splice(destination.index, 0, movingJob);\n            }\n            var newSourceCat = _objectSpread({}, sourceCat, {\n                jobs: newSourceJobs\n            });\n            var newDestinationCat = _objectSpread({}, destinationCat, {\n                jobs: newDestinationJobs\n            });\n            //update catsData by replacing original with updated source column\n            var newCatsData = _toConsumableArray(catsData);\n            newCatsData.splice(sourceCatIndex, 1, newSourceCat);\n            newCatsData.splice(destinationCatIndex, 1, newDestinationCat);\n            dispatch({\n                type: 'UPDATE_CATS',\n                payload: newCatsData\n            });\n            // useUpdateDatabase('categories/reorder', 'PUT', newCatsData);\n            return;\n        }\n    };\n    ///////////////////////////////////////////\n    ///////////////////////////////////////////\n    switch(isSuccess){\n        case false:\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loading__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                    fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false));\n        case true:\n            var _this1 = _this;\n            // let newColumnOrder = JSON.parse(JSON.stringify(categories));\n            // newColumnOrder = newColumnOrder.map((column) => {\n            //   column.writeable = true;\n            //   return column;\n            // });\n            // a) reorder columns based on drag\n            // newColumnOrder.splice(0, 1);\n            // newColumnOrder.splice(1, 0, categories[0]);\n            // console.log('after true 2: ', newColumnOrder);\n            // b) Update index of each category\n            // newColumnOrder = newColumnOrder.map((col) => {\n            //   col.catIndex = newColumnOrder.indexOf(col);\n            //   console.log(col);\n            // });\n            // newColumnOrder.map((col) => {\n            //   if (col.readOnly) {\n            //     console.log('readOnly');\n            //   } else {\n            //     console.log(col.catIndex.readOnly);\n            //   }\n            // });\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {\n                onDragEnd: handleOnDragEnd,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, {\n                    droppableId: \"Kanban\",\n                    direction: \"horizontal\",\n                    type: \"column\",\n                    children: function(provided) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", _objectSpread({\n                            className: \" flex flex-nowrap gap-x-8 overflow-x-scroll snap-x snap-mandatory pt-2 px-2 sm:px-6 md:px-8\"\n                        }, provided.droppableProps, {\n                            ref: provided.innerRef,\n                            children: [\n                                categories.map(function(cat, index) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        catId: cat._id,\n                                        title: cat.title,\n                                        description: cat.description,\n                                        jobs: cat.jobs,\n                                        index: index\n                                    }, cat._id, false, {\n                                        fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 21\n                                    }, _this1));\n                                }),\n                                provided.placeholder\n                            ]\n                        }), void 0, true, {\n                            fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                            lineNumber: 146,\n                            columnNumber: 15\n                        }, _this1);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                    lineNumber: 144,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/thomassleeman/Documents/projects/banana-skins-app/frontend/components/Kanban.js\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, _this));\n    }\n};\n_s(Kanban, \"7DMjoAgzbmhMUq7FzZ0nPYIVJ80=\", false, function() {\n    return [\n        _features_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.useGetCategoriesQuery,\n        _features_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__.useReorderCategoriesMutation\n    ];\n});\n_c = Kanban;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kanban);\nvar _c;\n$RefreshReg$(_c, \"Kanban\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0thbmJhbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBSXBCO0FBQ0o7QUFDa0I7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLEdBQUssQ0FBQ00sTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7SUFDcEIsR0FBSyxDQU1ETCxHQUF1QixHQUF2QkEsNkVBQXFCLElBTGpCTSxVQUFVLEdBS2ROLEdBQXVCLENBTHpCTyxJQUFJLEVBQ0pDLFNBQVMsR0FJUFIsR0FBdUIsQ0FKekJRLFNBQVMsRUFDVEMsU0FBUyxHQUdQVCxHQUF1QixDQUh6QlMsU0FBUyxFQUNUQyxPQUFPLEdBRUxWLEdBQXVCLENBRnpCVSxPQUFPLEVBQ1BDLEtBQUssR0FDSFgsR0FBdUIsQ0FEekJXLEtBQUs7SUFHUCxHQUFLLENBQ0hWLElBQThCLGtCQUE5QkEsb0ZBQTRCLFFBRHZCVyxpQkFBaUIsR0FDdEJYLElBQThCLEtBRE5ZLHlCQUF5QixHQUNqRFosSUFBOEI7SUFFaEMsR0FBSyxDQUFDYSxRQUFRLEdBQUdSLFVBQVU7SUFDM0JTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixVQUFVO0lBRXRCLEVBQWlCO0lBQ2pCLEVBQXdCO0lBQ3hCLEVBQUk7SUFFSlMsT0FBTyxDQUFDQyxHQUFHLFFBQVFWLFVBQVUsaUNBQWpCLE9BQWlCLENBQVZBLFVBQVU7SUFDN0IsRUFBMkM7SUFDM0MsRUFBMkM7SUFDM0MsRUFBMkM7SUFDM0MsR0FBSyxDQUFDVyxlQUFlLEdBQUcsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQztRQUNuQyxHQUFLLENBQUdDLFdBQVcsR0FBZ0NELE1BQU0sQ0FBakRDLFdBQVcsRUFBRUMsTUFBTSxHQUF3QkYsTUFBTSxDQUFwQ0UsTUFBTSxFQUFFQyxXQUFXLEdBQVdILE1BQU0sQ0FBNUJHLFdBQVcsRUFBRUMsSUFBSSxHQUFLSixNQUFNLENBQWZJLElBQUk7UUFFOUMsRUFBRSxHQUFHSCxXQUFXLEVBQUUsQ0FBQztZQUNqQixNQUFNO1FBQ1IsQ0FBQztRQUVELEVBQUUsRUFDQUEsV0FBVyxDQUFDSSxXQUFXLEtBQUtILE1BQU0sQ0FBQ0csV0FBVyxJQUM5Q0osV0FBVyxDQUFDSyxLQUFLLEtBQUtKLE1BQU0sQ0FBQ0ksS0FBSyxFQUNsQyxDQUFDO1lBQ0QsTUFBTTtRQUNSLENBQUM7UUFFRCxFQUFhLFlBQ2IsRUFBRSxFQUFFRixJQUFJLEtBQUssQ0FBUSxTQUFFLENBQUM7WUFDdEIsR0FBRyxDQUFDRyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ3RCLFVBQVU7WUFFekQsRUFBbUM7WUFDbkNtQixjQUFjLENBQUNJLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDSSxLQUFLLEVBQUUsQ0FBQztZQUNyQ0MsY0FBYyxDQUFDSSxNQUFNLENBQUNWLFdBQVcsQ0FBQ0ssS0FBSyxFQUFFLENBQUMsRUFBRWxCLFVBQVUsQ0FBQ2MsTUFBTSxDQUFDSSxLQUFLO1lBRW5FLEVBQW1DO1lBQ25DQyxjQUFjLEdBQUdBLGNBQWMsQ0FBQ0ssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7Z0JBQzVDQSxHQUFHLENBQUNDLFFBQVEsR0FBR1AsY0FBYyxDQUFDUSxPQUFPLENBQUNGLEdBQUc7Z0JBQ3pDLE1BQU0sQ0FBQ0EsR0FBRztZQUNaLENBQUM7WUFFRGhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxjQUFjO1lBRTFCLE1BQU07UUFDUixDQUFDO1FBRUQsRUFBVSxTQUNWLEVBQUUsRUFBRUgsSUFBSSxLQUFLLENBQUssTUFBRSxDQUFDO1lBQ25CLEdBQUssQ0FBQ1ksS0FBSyxHQUFHZCxNQUFNLENBQUNHLFdBQVc7WUFDaEMsR0FBSyxDQUFDWSxNQUFNLEdBQUdoQixXQUFXLENBQUNJLFdBQVc7WUFDdEMsR0FBSyxDQUFDYSxTQUFTLEdBQUd0QixRQUFRLENBQUN1QixJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO2dCQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsR0FBRyxLQUFLTCxLQUFLOztZQUMxRCxHQUFLLENBQUNNLGNBQWMsR0FBRzFCLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7Z0JBQUtBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxHQUFHLEtBQUtKLE1BQU07O1lBQ2hFLEdBQUssQ0FBQ00sY0FBYyxHQUFHM0IsUUFBUSxDQUFDbUIsT0FBTyxDQUFDRyxTQUFTO1lBQ2pELEdBQUssQ0FBQ00sbUJBQW1CLEdBQUc1QixRQUFRLENBQUNtQixPQUFPLENBQUNPLGNBQWM7WUFFM0QsR0FBSyxDQUFDRyxhQUFhLEdBQUdQLFNBQVMsQ0FBQ1EsSUFBSTtZQUNwQyxHQUFLLENBQUNDLGtCQUFrQixHQUFHTCxjQUFjLENBQUNJLElBQUk7WUFDOUMsR0FBSyxDQUFDRSxTQUFTLEdBQUdWLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDeEIsTUFBTSxDQUFDSSxLQUFLO1lBRTdDbUIsYUFBYSxDQUFDZCxNQUFNLENBQUNULE1BQU0sQ0FBQ0ksS0FBSyxFQUFFLENBQUM7WUFFcEMsRUFBRSxFQUFFVSxLQUFLLEtBQUtDLE1BQU0sRUFBRSxDQUFDO2dCQUNyQlEsYUFBYSxDQUFDZCxNQUFNLENBQUNWLFdBQVcsQ0FBQ0ssS0FBSyxFQUFFLENBQUMsRUFBRXNCLFNBQVM7WUFDdEQsQ0FBQyxNQUFNLENBQUM7Z0JBQ05ELGtCQUFrQixDQUFDaEIsTUFBTSxDQUFDVixXQUFXLENBQUNLLEtBQUssRUFBRSxDQUFDLEVBQUVzQixTQUFTO1lBQzNELENBQUM7WUFFRCxHQUFLLENBQUNDLFlBQVkscUJBQ2JYLFNBQVM7Z0JBQ1pRLElBQUksRUFBRUQsYUFBYTs7WUFHckIsR0FBSyxDQUFDSyxpQkFBaUIscUJBQ2xCUixjQUFjO2dCQUNqQkksSUFBSSxFQUFFQyxrQkFBa0I7O1lBRzFCLEVBQWtFO1lBQ2xFLEdBQUssQ0FBQ0ksV0FBVyxzQkFBT25DLFFBQVE7WUFDaENtQyxXQUFXLENBQUNwQixNQUFNLENBQUNZLGNBQWMsRUFBRSxDQUFDLEVBQUVNLFlBQVk7WUFDbERFLFdBQVcsQ0FBQ3BCLE1BQU0sQ0FBQ2EsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFTSxpQkFBaUI7WUFFNURFLFFBQVEsQ0FBQyxDQUFDO2dCQUFDNUIsSUFBSSxFQUFFLENBQWE7Z0JBQUU2QixPQUFPLEVBQUVGLFdBQVc7WUFBQyxDQUFDO1lBQ3RELEVBQStEO1lBQy9ELE1BQU07UUFDUixDQUFDO0lBQ0gsQ0FBQztJQUNELEVBQTJDO0lBQzNDLEVBQTJDO0lBRTNDLE1BQU0sQ0FBRXhDLFNBQVM7UUFDZixJQUFJLENBQUMsS0FBSztZQUNSLE1BQU07c0dBRURMLHNEQUFPOzs7Ozs7UUFHZCxJQUFJLENBQUMsSUFBSTs7WUFDUCxFQUErRDtZQUMvRCxFQUFvRDtZQUNwRCxFQUE2QjtZQUM3QixFQUFtQjtZQUNuQixFQUFNO1lBRU4sRUFBbUM7WUFDbkMsRUFBK0I7WUFDL0IsRUFBOEM7WUFDOUMsRUFBaUQ7WUFFakQsRUFBbUM7WUFDbkMsRUFBaUQ7WUFDakQsRUFBZ0Q7WUFDaEQsRUFBc0I7WUFDdEIsRUFBTTtZQUNOLEVBQWdDO1lBQ2hDLEVBQXdCO1lBQ3hCLEVBQStCO1lBQy9CLEVBQWE7WUFDYixFQUEwQztZQUMxQyxFQUFNO1lBQ04sRUFBTTtZQUVOLE1BQU0sNkVBQ0hMLGdFQUFlO2dCQUFDcUQsU0FBUyxFQUFFbkMsZUFBZTtzR0FDeENkLDBEQUFTO29CQUFDb0IsV0FBVyxFQUFDLENBQVE7b0JBQUM4QixTQUFTLEVBQUMsQ0FBWTtvQkFBQy9CLElBQUksRUFBQyxDQUFROzhCQUNqRSxRQUFRLENBQVBnQyxRQUFRO3NDQUNSLE1BQ2IsQ0FBQyw4REFEYUMsQ0FBRzs0QkFDRkMsU0FBUyxFQUFDLENBQTZGOzJCQUNuR0YsUUFBUSxDQUFDRyxjQUFjOzRCQUMzQkMsR0FBRyxFQUFFSixRQUFRLENBQUNLLFFBQVE7O2dDQUVyQnJELFVBQVUsQ0FBQ3dCLEdBQUcsQ0FBQyxRQUFRLENBQVBRLEdBQUcsRUFBRWQsS0FBSyxFQUFLLENBQUM7b0NBQy9CLE1BQU0sNkVBQ0h0QiwrQ0FBTTt3Q0FFTDBELEtBQUssRUFBRXRCLEdBQUcsQ0FBQ0MsR0FBRzt3Q0FDZHNCLEtBQUssRUFBRXZCLEdBQUcsQ0FBQ3VCLEtBQUs7d0NBQ2hCQyxXQUFXLEVBQUV4QixHQUFHLENBQUN3QixXQUFXO3dDQUM1QmxCLElBQUksRUFBRU4sR0FBRyxDQUFDTSxJQUFJO3dDQUNkcEIsS0FBSyxFQUFFQSxLQUFLO3VDQUxQYyxHQUFHLENBQUNDLEdBQUc7Ozs7O2dDQVFsQixDQUFDO2dDQUNBZSxRQUFRLENBQUNTLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckMsQ0FBQztHQWhLSzFELE1BQU07O1FBT05MLHlFQUFxQjtRQUd2QkMsZ0ZBQTRCOzs7S0FWMUJJLE1BQU07QUFrS1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0thbmJhbi5qcz83NTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHtcbiAgdXNlR2V0Q2F0ZWdvcmllc1F1ZXJ5LFxuICB1c2VSZW9yZGVyQ2F0ZWdvcmllc011dGF0aW9uLFxufSBmcm9tICcuLi9mZWF0dXJlcy9hcGkvYXBpU2xpY2UnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL0NvbHVtbic7XG5pbXBvcnQgeyBEcm9wcGFibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3JlYWN0LWxvYWRpbmcnO1xuXG5jb25zdCBLYW5iYW4gPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBjYXRlZ29yaWVzLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc1N1Y2Nlc3MsXG4gICAgaXNFcnJvcixcbiAgICBlcnJvcixcbiAgfSA9IHVzZUdldENhdGVnb3JpZXNRdWVyeSgpO1xuXG4gIGNvbnN0IFtyZW9yZGVyQ2F0ZWdvcmllcywgcmVPcmRlckNhdGVnb3JpZXNNZXRhRGF0YV0gPVxuICAgIHVzZVJlb3JkZXJDYXRlZ29yaWVzTXV0YXRpb24oKTtcblxuICBjb25zdCBjYXRzRGF0YSA9IGNhdGVnb3JpZXM7XG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuXG4gIC8vIGlmIChpc0Vycm9yKSB7XG4gIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyB9XG5cbiAgY29uc29sZS5sb2codHlwZW9mIGNhdGVnb3JpZXMpO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vL0hBTkRMRSBPTiBEUkFHIEVORC8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBjb25zdCBoYW5kbGVPbkRyYWdFbmQgPSAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZCwgdHlwZSB9ID0gcmVzdWx0O1xuXG4gICAgaWYgKCFkZXN0aW5hdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiZcbiAgICAgIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXhcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBDT0xVTU5TICovXG4gICAgaWYgKHR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICBsZXQgbmV3Q29sdW1uT3JkZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcblxuICAgICAgLy8gYSkgcmVvcmRlciBjb2x1bW5zIGJhc2VkIG9uIGRyYWdcbiAgICAgIG5ld0NvbHVtbk9yZGVyLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpO1xuICAgICAgbmV3Q29sdW1uT3JkZXIuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBjYXRlZ29yaWVzW3NvdXJjZS5pbmRleF0pO1xuXG4gICAgICAvLyBiKSBVcGRhdGUgaW5kZXggb2YgZWFjaCBjYXRlZ29yeVxuICAgICAgbmV3Q29sdW1uT3JkZXIgPSBuZXdDb2x1bW5PcmRlci5tYXAoKGNvbCkgPT4ge1xuICAgICAgICBjb2wuY2F0SW5kZXggPSBuZXdDb2x1bW5PcmRlci5pbmRleE9mKGNvbCk7XG4gICAgICAgIHJldHVybiBjb2w7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2cobmV3Q29sdW1uT3JkZXIpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogSk9CUyAqL1xuICAgIGlmICh0eXBlID09PSAnam9iJykge1xuICAgICAgY29uc3Qgc3RhcnQgPSBzb3VyY2UuZHJvcHBhYmxlSWQ7XG4gICAgICBjb25zdCBmaW5pc2ggPSBkZXN0aW5hdGlvbi5kcm9wcGFibGVJZDtcbiAgICAgIGNvbnN0IHNvdXJjZUNhdCA9IGNhdHNEYXRhLmZpbmQoKGNhdCkgPT4gY2F0Ll9pZCA9PT0gc3RhcnQpO1xuICAgICAgY29uc3QgZGVzdGluYXRpb25DYXQgPSBjYXRzRGF0YS5maW5kKChjYXQpID0+IGNhdC5faWQgPT09IGZpbmlzaCk7XG4gICAgICBjb25zdCBzb3VyY2VDYXRJbmRleCA9IGNhdHNEYXRhLmluZGV4T2Yoc291cmNlQ2F0KTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uQ2F0SW5kZXggPSBjYXRzRGF0YS5pbmRleE9mKGRlc3RpbmF0aW9uQ2F0KTtcblxuICAgICAgY29uc3QgbmV3U291cmNlSm9icyA9IHNvdXJjZUNhdC5qb2JzO1xuICAgICAgY29uc3QgbmV3RGVzdGluYXRpb25Kb2JzID0gZGVzdGluYXRpb25DYXQuam9icztcbiAgICAgIGNvbnN0IG1vdmluZ0pvYiA9IHNvdXJjZUNhdC5qb2JzW3NvdXJjZS5pbmRleF07XG5cbiAgICAgIG5ld1NvdXJjZUpvYnMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7XG5cbiAgICAgIGlmIChzdGFydCA9PT0gZmluaXNoKSB7XG4gICAgICAgIG5ld1NvdXJjZUpvYnMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBtb3ZpbmdKb2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RGVzdGluYXRpb25Kb2JzLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCwgbW92aW5nSm9iKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3U291cmNlQ2F0ID0ge1xuICAgICAgICAuLi5zb3VyY2VDYXQsXG4gICAgICAgIGpvYnM6IG5ld1NvdXJjZUpvYnMsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXdEZXN0aW5hdGlvbkNhdCA9IHtcbiAgICAgICAgLi4uZGVzdGluYXRpb25DYXQsXG4gICAgICAgIGpvYnM6IG5ld0Rlc3RpbmF0aW9uSm9icyxcbiAgICAgIH07XG5cbiAgICAgIC8vdXBkYXRlIGNhdHNEYXRhIGJ5IHJlcGxhY2luZyBvcmlnaW5hbCB3aXRoIHVwZGF0ZWQgc291cmNlIGNvbHVtblxuICAgICAgY29uc3QgbmV3Q2F0c0RhdGEgPSBbLi4uY2F0c0RhdGFdO1xuICAgICAgbmV3Q2F0c0RhdGEuc3BsaWNlKHNvdXJjZUNhdEluZGV4LCAxLCBuZXdTb3VyY2VDYXQpO1xuICAgICAgbmV3Q2F0c0RhdGEuc3BsaWNlKGRlc3RpbmF0aW9uQ2F0SW5kZXgsIDEsIG5ld0Rlc3RpbmF0aW9uQ2F0KTtcblxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0NBVFMnLCBwYXlsb2FkOiBuZXdDYXRzRGF0YSB9KTtcbiAgICAgIC8vIHVzZVVwZGF0ZURhdGFiYXNlKCdjYXRlZ29yaWVzL3Jlb3JkZXInLCAnUFVUJywgbmV3Q2F0c0RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgc3dpdGNoIChpc1N1Y2Nlc3MpIHtcbiAgICBjYXNlIGZhbHNlOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgY2FzZSB0cnVlOlxuICAgICAgLy8gbGV0IG5ld0NvbHVtbk9yZGVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG4gICAgICAvLyBuZXdDb2x1bW5PcmRlciA9IG5ld0NvbHVtbk9yZGVyLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAvLyAgIGNvbHVtbi53cml0ZWFibGUgPSB0cnVlO1xuICAgICAgLy8gICByZXR1cm4gY29sdW1uO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vIGEpIHJlb3JkZXIgY29sdW1ucyBiYXNlZCBvbiBkcmFnXG4gICAgICAvLyBuZXdDb2x1bW5PcmRlci5zcGxpY2UoMCwgMSk7XG4gICAgICAvLyBuZXdDb2x1bW5PcmRlci5zcGxpY2UoMSwgMCwgY2F0ZWdvcmllc1swXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgdHJ1ZSAyOiAnLCBuZXdDb2x1bW5PcmRlcik7XG5cbiAgICAgIC8vIGIpIFVwZGF0ZSBpbmRleCBvZiBlYWNoIGNhdGVnb3J5XG4gICAgICAvLyBuZXdDb2x1bW5PcmRlciA9IG5ld0NvbHVtbk9yZGVyLm1hcCgoY29sKSA9PiB7XG4gICAgICAvLyAgIGNvbC5jYXRJbmRleCA9IG5ld0NvbHVtbk9yZGVyLmluZGV4T2YoY29sKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29sKTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gbmV3Q29sdW1uT3JkZXIubWFwKChjb2wpID0+IHtcbiAgICAgIC8vICAgaWYgKGNvbC5yZWFkT25seSkge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZWFkT25seScpO1xuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNvbC5jYXRJbmRleC5yZWFkT25seSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kfT5cbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiS2FuYmFuXCIgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHR5cGU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtbm93cmFwIGdhcC14LTggb3ZlcmZsb3cteC1zY3JvbGwgc25hcC14IHNuYXAtbWFuZGF0b3J5IHB0LTIgcHgtMiBzbTpweC02IG1kOnB4LThcIlxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbiAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXQuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGNhdElkPXtjYXQuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjYXQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NhdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBqb2JzPXtjYXQuam9ic31cbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IC8vV2lsbCBjYXRlZ29yeSBvcmRlciBwZXJzaXN0IHVzaW5nIHRoaXM/IElmIHNvIGRvIHdlIG5lZWQgY2F0SW5kZXg/XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEthbmJhbjtcbiJdLCJuYW1lcyI6WyJEcmFnRHJvcENvbnRleHQiLCJ1c2VHZXRDYXRlZ29yaWVzUXVlcnkiLCJ1c2VSZW9yZGVyQ2F0ZWdvcmllc011dGF0aW9uIiwiQ29sdW1uIiwiRHJvcHBhYmxlIiwiTG9hZGluZyIsIkthbmJhbiIsImNhdGVnb3JpZXMiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwiaXNFcnJvciIsImVycm9yIiwicmVvcmRlckNhdGVnb3JpZXMiLCJyZU9yZGVyQ2F0ZWdvcmllc01ldGFEYXRhIiwiY2F0c0RhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJkcmFnZ2FibGVJZCIsInR5cGUiLCJkcm9wcGFibGVJZCIsImluZGV4IiwibmV3Q29sdW1uT3JkZXIiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzcGxpY2UiLCJtYXAiLCJjb2wiLCJjYXRJbmRleCIsImluZGV4T2YiLCJzdGFydCIsImZpbmlzaCIsInNvdXJjZUNhdCIsImZpbmQiLCJjYXQiLCJfaWQiLCJkZXN0aW5hdGlvbkNhdCIsInNvdXJjZUNhdEluZGV4IiwiZGVzdGluYXRpb25DYXRJbmRleCIsIm5ld1NvdXJjZUpvYnMiLCJqb2JzIiwibmV3RGVzdGluYXRpb25Kb2JzIiwibW92aW5nSm9iIiwibmV3U291cmNlQ2F0IiwibmV3RGVzdGluYXRpb25DYXQiLCJuZXdDYXRzRGF0YSIsImRpc3BhdGNoIiwicGF5bG9hZCIsIm9uRHJhZ0VuZCIsImRpcmVjdGlvbiIsInByb3ZpZGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImNhdElkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Kanban.js\n");

/***/ })

});