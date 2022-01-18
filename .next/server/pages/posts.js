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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./src/pages/posts/styles.module.scss":
/*!********************************************!*\
  !*** ./src/pages/posts/styles.module.scss ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__h2EFI\",\n\t\"posts\": \"styles_posts__UYuiv\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzP2M3N2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9faDJFRklcIixcblx0XCJwb3N0c1wiOiBcInN0eWxlc19wb3N0c19fVVl1aXZcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Posts({ posts  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Posts | Ignews\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n                __source: {\n                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().posts),\n                    __source: {\n                        fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                            href: \"#\",\n                            __source: {\n                                fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"time\", {\n                                    __source: {\n                                        fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: post.updatedAt\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                                    __source: {\n                                        fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: post.title\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    __source: {\n                                        fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/posts/index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: post.excerpt\n                                })\n                            ]\n                        })\n                    )\n                })\n            })\n        ]\n    }));\n};\nconst getStaticProps = async ()=>{\n    const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_2__.getPrismicClient)();\n    const response = await prismic.query([\n        _prismicio_client__WEBPACK_IMPORTED_MODULE_3___default().predicates.at(\"document.type\", \"post\")\n    ], {\n        fetch: [\n            \"post.title\",\n            \"post.content\"\n        ],\n        pageSize: 100\n    });\n    const posts = response.results.map((post)=>{\n        var ref;\n        return {\n            slug: post.uid,\n            title: prismic_dom__WEBPACK_IMPORTED_MODULE_4__.RichText.asText(post.data.title),\n            excerpt: ((ref = post.data.content.find((content)=>content.type === \"paragraph\"\n            )) === null || ref === void 0 ? void 0 : ref.text) ?? \"\",\n            updatedAt: new Date(post.last_publication_date).toLocaleDateString(\"pt-BR\", {\n                day: \"2-digit\",\n                month: \"long\",\n                year: \"numeric\"\n            })\n        };\n    });\n    console.log(\"po\", posts);\n    return {\n        props: {\n            posts\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRCO0FBQzZCO0FBQ2xCO0FBQ0Q7QUFFRztBQWExQixRQUFRLENBQUNLLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBYSxDQUFDLEVBQUUsQ0FBQztJQUNwRCxNQUFNOztpRkFFRE4sa0RBQUk7Ozs7Ozs7K0ZBQ0ZPLENBQUs7Ozs7Ozs7OEJBQUMsQ0FBYzs7O2lGQUd0QkMsQ0FBSTtnQkFBQ0MsU0FBUyxFQUFFTCxzRUFBZ0I7Ozs7Ozs7K0ZBQzlCTyxDQUFHO29CQUFDRixTQUFTLEVBQUVMLGtFQUFZOzs7Ozs7OzhCQUN6QkUsS0FBSyxDQUFDTSxHQUFHLEVBQUVDLElBQUkseUVBQ2JDLENBQUM7NEJBQUNDLElBQUksRUFBQyxDQUFHOzs7Ozs7OztxR0FDUkMsQ0FBSTs7Ozs7Ozs4Q0FBRUgsSUFBSSxDQUFDSSxTQUFTOztxR0FDcEJDLENBQU07Ozs7Ozs7OENBQUVMLElBQUksQ0FBQ04sS0FBSzs7cUdBQ2xCWSxDQUFDOzs7Ozs7OzhDQUFFTixJQUFJLENBQUNPLE9BQU87Ozs7Ozs7OztBQU85QixDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLGFBQStCLENBQUM7SUFDekQsS0FBSyxDQUFDQyxPQUFPLEdBQUdyQixtRUFBZ0I7SUFFaEMsS0FBSyxDQUFDc0IsUUFBUSxHQUFHLEtBQUssQ0FBQ0QsT0FBTyxDQUFDRSxLQUFLLENBQ2xDLENBQUN0QjtRQUFBQSxzRUFBcUIsQ0FBQyxDQUFlLGdCQUFFLENBQU07SUFBQyxDQUFDLEVBQ2hELENBQUM7UUFDQ3lCLEtBQUssRUFBRSxDQUFDO1lBQUEsQ0FBWTtZQUFFLENBQWM7UUFBQSxDQUFDO1FBQ3JDQyxRQUFRLEVBQUUsR0FBRztJQUNmLENBQUM7SUFHSCxLQUFLLENBQUN0QixLQUFLLEdBQUdpQixRQUFRLENBQUNNLE9BQU8sQ0FBQ2pCLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7WUFLeENBLEdBQWlFO1FBSnJFLE1BQU0sQ0FBQyxDQUFDO1lBQ05pQixJQUFJLEVBQUVqQixJQUFJLENBQUNrQixHQUFHO1lBQ2R4QixLQUFLLEVBQUVKLHdEQUFlLENBQUNVLElBQUksQ0FBQ29CLElBQUksQ0FBQzFCLEtBQUs7WUFDdENhLE9BQU8sSUFDTFAsR0FBaUUsR0FBakVBLElBQUksQ0FBQ29CLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLEVBQUVELE9BQU8sR0FBS0EsT0FBTyxDQUFDRSxJQUFJLEtBQUssQ0FBVzsyQkFBaEV2QixHQUFpRSxLQUFqRUEsSUFBSSxDQUFKQSxDQUNRLEdBRFJBLElBQUksQ0FBSkEsQ0FDUSxHQURSQSxHQUFpRSxDQUM3RHdCLElBQUksS0FBSSxDQUFFO1lBQ2hCcEIsU0FBUyxFQUFFLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQ3pCLElBQUksQ0FBQzBCLHFCQUFxQixFQUFFQyxrQkFBa0IsQ0FDaEUsQ0FBTyxRQUNQLENBQUM7Z0JBQ0NDLEdBQUcsRUFBRSxDQUFTO2dCQUNkQyxLQUFLLEVBQUUsQ0FBTTtnQkFDYkMsSUFBSSxFQUFFLENBQVM7WUFDakIsQ0FBQztRQUVMLENBQUM7SUFDSCxDQUFDO0lBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUksS0FBRXZDLEtBQUs7SUFFdkIsTUFBTSxDQUFDLENBQUM7UUFDTndDLEtBQUssRUFBRSxDQUFDO1lBQUN4QyxLQUFLO1FBQUMsQ0FBQztJQUNsQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9wb3N0cy9pbmRleC50c3g/Zjg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3ByaXNtaWNcIjtcbmltcG9ydCBQcmlzbWljIGZyb20gXCJAcHJpc21pY2lvL2NsaWVudFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1kb21cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQb3N0ID0ge1xuICBzbHVnOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGV4Y2VycHQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgUG9zdHNQcm9wcyB7XG4gIHBvc3RzOiBQb3N0W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMgfTogUG9zdHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvc3RzIHwgSWduZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cbiAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHA+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5xdWVyeTxhbnk+KFxuICAgIFtQcmlzbWljLnByZWRpY2F0ZXMuYXQoXCJkb2N1bWVudC50eXBlXCIsIFwicG9zdFwiKV0sXG4gICAge1xuICAgICAgZmV0Y2g6IFtcInBvc3QudGl0bGVcIiwgXCJwb3N0LmNvbnRlbnRcIl0sXG4gICAgICBwYWdlU2l6ZTogMTAwLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBwb3N0cyA9IHJlc3BvbnNlLnJlc3VsdHMubWFwKChwb3N0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsdWc6IHBvc3QudWlkLFxuICAgICAgdGl0bGU6IFJpY2hUZXh0LmFzVGV4dChwb3N0LmRhdGEudGl0bGUpLFxuICAgICAgZXhjZXJwdDpcbiAgICAgICAgcG9zdC5kYXRhLmNvbnRlbnQuZmluZCgoY29udGVudCkgPT4gY29udGVudC50eXBlID09PSBcInBhcmFncmFwaFwiKVxuICAgICAgICAgID8udGV4dCA/PyBcIlwiLFxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShwb3N0Lmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgICBcInB0LUJSXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICB9O1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhcInBvXCIsIHBvc3RzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3RzIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJnZXRQcmlzbWljQ2xpZW50IiwiUHJpc21pYyIsIlJpY2hUZXh0Iiwic3R5bGVzIiwiUG9zdHMiLCJwb3N0cyIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRpdiIsIm1hcCIsInBvc3QiLCJhIiwiaHJlZiIsInRpbWUiLCJ1cGRhdGVkQXQiLCJzdHJvbmciLCJwIiwiZXhjZXJwdCIsImdldFN0YXRpY1Byb3BzIiwicHJpc21pYyIsInJlc3BvbnNlIiwicXVlcnkiLCJwcmVkaWNhdGVzIiwiYXQiLCJmZXRjaCIsInBhZ2VTaXplIiwicmVzdWx0cyIsInNsdWciLCJ1aWQiLCJhc1RleHQiLCJkYXRhIiwiY29udGVudCIsImZpbmQiLCJ0eXBlIiwidGV4dCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n    const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n        req,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN\n    });\n    return prismic;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsU0FBU0MsZ0JBQWdCLENBQUNDLEdBQWEsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHSCwrREFBYyxDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1REwsR0FBRztRQUNITSxXQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQ04sT0FBTztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3ByaXNtaWMudHM/ZDEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpc21pYyBmcm9tIFwiQHByaXNtaWNpby9jbGllbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXNtaWNDbGllbnQocmVxPzogdW5rbm93bikge1xuICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQocHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCwge1xuICAgIHJlcSxcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU4sXG4gIH0pO1xuXG4gIHJldHVybiBwcmlzbWljO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJnZXRQcmlzbWljQ2xpZW50IiwicmVxIiwicHJpc21pYyIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/index.tsx"));
module.exports = __webpack_exports__;

})();