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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9hMGQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/MjhhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            console.log(err);\n            alert(err.message);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        __source: {\n            fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/components/SubscribeButton/index.tsx\",\n            lineNumber: 33,\n            columnNumber: 5\n        },\n        __self: this,\n        children: \"Subscribe now\"\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDWjtBQUNjO0FBQ2I7QUFNbEMsU0FBU0ssZUFBZSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxFQUF1QixDQUFDLEVBQUUsQ0FBQztJQUNsRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdSLDJEQUFVO21CQUVyQlMsZUFBZSxHQUFHLENBQUM7UUFDaEMsRUFBRSxHQUFHRCxPQUFPLEVBQUUsQ0FBQztZQUNiLE1BQU0sQ0FBQ1AsdURBQU0sQ0FBQyxDQUFRO1FBQ3hCLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ1MsUUFBUSxHQUFHLEtBQUssQ0FBQ1IsbURBQVEsQ0FBQyxDQUFZO1lBRTVDLEtBQUssQ0FBQyxDQUFDLENBQUNVLFNBQVMsRUFBQyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0gsSUFBSTtZQUVuQyxLQUFLLENBQUNNLE1BQU0sR0FBRyxLQUFLLENBQUNWLGdFQUFXO1lBRWhDLEtBQUssQ0FBQ1UsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUFDRixTQUFTO1lBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsS0FBSyxFQUFFRyxHQUFHLEVBQUUsQ0FBQztZQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztZQUNmRyxLQUFLLENBQUNILEdBQUcsQ0FBQ0ksT0FBTztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sc0VBQ0hDLENBQU07UUFDTEMsSUFBSSxFQUFDLENBQVE7UUFDYkMsU0FBUyxFQUFFbEIsNEVBQXNCO1FBQ2pDb0IsT0FBTyxFQUFFZixlQUFlOzs7Ozs7O2tCQUN6QixDQUVEOztBQUVKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4PzkwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgZ2V0U3RyaXBlSnMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHMge1xuICBwcmljZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oeyBwcmljZUlkIH06IFN1YnNjcmliZUJ1dHRvblByb3BzKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHJldHVybiBzaWduSW4oXCJnaXRodWJcIik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvc3Vic2NyaWJlXCIpO1xuXG4gICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlSnMoKTtcblxuICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZCB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlQnV0dG9ufVxuICAgICAgb25DbGljaz17aGFuZGxlU3Vic2NyaWJlfVxuICAgID5cbiAgICAgIFN1YnNjcmliZSBub3dcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwiYXBpIiwiZ2V0U3RyaXBlSnMiLCJzdHlsZXMiLCJTdWJzY3JpYmVCdXR0b24iLCJwcmljZUlkIiwiZGF0YSIsInNlc3Npb24iLCJoYW5kbGVTdWJzY3JpYmUiLCJyZXNwb25zZSIsInBvc3QiLCJzZXNzaW9uSWQiLCJzdHJpcGUiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJtZXNzYWdlIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInN1YnNjcmliZUJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home | ig.news\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                __source: {\n                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        __source: {\n                            fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"👏️ Hey, welcome\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                                __source: {\n                                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    \"News about \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 24\n                                        },\n                                        __self: this\n                                    }),\n                                    \" the \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 35\n                                        },\n                                        __self: this,\n                                        children: \"React\"\n                                    }),\n                                    \" world.\"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 48\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId,\n                                __source: {\n                                    fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\",\n                        __source: {\n                            fileName: \"/home/matheus/www/rocketseat/React.JS/ignews/src/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1KEdL0CElG9LhuZtdSaPoZ3h\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRCO0FBQ21DO0FBQ3BCO0FBRUo7QUFheEIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEVBQVksQ0FBQyxFQUFFLENBQUM7SUFDcEQsTUFBTTs7aUZBRURMLGtEQUFJOzs7Ozs7OytGQUNGTSxDQUFLOzs7Ozs7OzhCQUFDLENBQWM7OztrRkFHdEJDLENBQUk7Z0JBQUNDLFNBQVMsRUFBRUwsMkVBQXVCOzs7Ozs7OzswRkFDckNPLENBQU87d0JBQUNGLFNBQVMsRUFBRUwsK0RBQVc7Ozs7Ozs7O2lHQUM1QlMsQ0FBSTs7Ozs7OzswQ0FBQyxDQUFlOztrR0FDcEJDLENBQUU7Ozs7Ozs7O29DQUFDLENBQ1M7eUdBQUNDLENBQUU7Ozs7Ozs7O29DQUFHLENBQUs7eUdBQUNGLENBQUk7Ozs7Ozs7a0RBQUMsQ0FBSzs7b0NBQU8sQ0FDMUM7OztrR0FDQ0csQ0FBQzs7Ozs7Ozs7b0NBQUMsQ0FDa0M7eUdBQUNELENBQUU7Ozs7Ozs7OzBHQUNyQ0YsQ0FBSTs7Ozs7Ozs7NENBQUMsQ0FBSTs0Q0FBQ1AsT0FBTyxDQUFDVyxNQUFNOzRDQUFDLENBQU07Ozs7O2lHQUVqQ2Ysd0VBQWU7Z0NBQUNnQixPQUFPLEVBQUVaLE9BQU8sQ0FBQ1ksT0FBTzs7Ozs7Ozs7Ozt5RkFHMUNDLENBQUc7d0JBQUNDLEdBQUcsRUFBQyxDQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLENBQWE7Ozs7Ozs7Ozs7OztBQUl2RCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLGFBQStCLENBQUM7SUFDekQsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDcEIsb0VBQXNCLENBQUMsQ0FBZ0M7SUFFM0UsS0FBSyxDQUFDRyxPQUFPLEdBQUcsQ0FBQztRQUNmWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0csRUFBRTtRQUNqQlQsTUFBTSxFQUFFLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBTyxRQUFFLENBQUM7WUFDdENDLEtBQUssRUFBRSxDQUFVO1lBQ2pCQyxRQUFRLEVBQUUsQ0FBSztRQUNqQixDQUFDLEVBQUVDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDUyxXQUFXLEdBQUcsR0FBRztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTjNCLE9BQU87UUFDVCxDQUFDO1FBQ0Q0QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQzFCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RyaXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG4vLyBDbGllbnQtc2lkZVxuLy8gU2VydmVyLXNpZGVcbi8vIFN0YXRpYyBTaXRlIEdlbmVyYXRpb25cblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0IH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWUgfCBpZy5uZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgIDxzcGFuPvCfkY/vuI8gSGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIE5ld3MgYWJvdXQgPGJyIC8+IHRoZSA8c3Bhbj5SZWFjdDwvc3Bhbj4gd29ybGQuXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdpcmwgY29kaW5nXCIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKFwicHJpY2VfMUtFZEwwQ0VsRzlMaHVadGRTYVBvWjNoXCIpO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgcHJpY2VJZDogcHJpY2UuaWQsXG4gICAgYW1vdW50OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50IC8gMTAwKSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3Vyc1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiU3Vic2NyaWJlQnV0dG9uIiwic3RyaXBlIiwic3R5bGVzIiwiSG9tZSIsInByb2R1Y3QiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250ZW50Q29udGFpbmVyIiwic2VjdGlvbiIsImhlcm8iLCJzcGFuIiwiaDEiLCJiciIsInAiLCJhbW91bnQiLCJwcmljZUlkIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInByaWNlcyIsInJldHJpZXZlIiwiaWQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInVuaXRfYW1vdW50IiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUVsQixLQUFLLENBQUNDLEdBQUcsR0FBR0QsbURBQVksQ0FBQyxDQUFDO0lBQy9CRyxPQUFPLEVBQUUsQ0FBTTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxufSk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51KEdHhCElG9LhuZtVM9Fluuhg7nmyZRlXKwnsfnfJbiywXnrIvyGv4m6biX6FiOamQKLjAbUfnQglplChRImQnXZ0018QzL6Y9\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxlQUFlQyxXQUFXLEdBQUcsQ0FBQztJQUNuQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNGLDZEQUFVLENBQUNHLDZHQUF5QztJQUUzRSxNQUFNLENBQUNELFFBQVE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUtanMudHM/NTk4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJpcGVKcygpIHtcbiAgY29uc3Qgc3RyaXBlSnMgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKTtcblxuICByZXR1cm4gc3RyaXBlSnM7XG59XG4iXSwibmFtZXMiOlsibG9hZFN0cmlwZSIsImdldFN0cmlwZUpzIiwic3RyaXBlSnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: 'Ignews',\n        version: '0.1.0'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVwQixLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNELCtDQUFNLENBQzlCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQixDQUFDO0lBQ0NDLFVBQVUsRUFBRSxDQUFZO0lBQ3hCQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxJQUFJLEVBQUUsQ0FBUTtRQUNkQyxPQUFPLEVBQUUsQ0FBTztJQUNsQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHM/YWI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKFxuICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcbiAge1xuICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcbiAgICBhcHBJbmZvOiB7XG4gICAgICBuYW1lOiAnSWduZXdzJyxcbiAgICAgIHZlcnNpb246ICcwLjEuMCdcbiAgICB9XG4gIH1cbikiXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();