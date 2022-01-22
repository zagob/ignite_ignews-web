"use strict";
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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts?da1c\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (request, response)=>{\n    if (request.method === \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n            req: request\n        });\n        const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(session.user.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            // criando cliente no painel do STRIPE\n            const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n                email: session.user.email\n            });\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection(\"users\"), user.ref.id), {\n                data: {\n                    stripe_customer_id: stripeCustomer.id\n                }\n            }));\n            customerId = stripeCustomer.id;\n        }\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1KEdL0CElG9LhuZtdSaPoZ3h\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return response.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        response.setHeader(\"Allow\", \"POST\");\n        response.status(405).end(\"Method not allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDYjtBQUNlO0FBVzlDLGlFQUFNLE9BQWdCSSxPQUF1QixFQUFFQyxRQUF5QixHQUFLLENBQUM7SUFDNUUsRUFBRSxFQUFFRCxPQUFPLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUM5QixLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNQLDJEQUFVLENBQUMsQ0FBQztZQUFDUSxHQUFHLEVBQUVKLE9BQU87UUFBQyxDQUFDO1FBRWpELEtBQUssQ0FBQ0ssSUFBSSxHQUFHLEtBQUssQ0FBQ1Isd0RBQVcsQ0FDNUJDLDhDQUFTLENBQ1BBLGdEQUFXLENBQ1RBLGdEQUFXLENBQUMsQ0FBZSxpQkFDM0JBLG1EQUFjLENBQUNLLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDSyxLQUFLO1FBS3ZDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHTixJQUFJLENBQUNPLElBQUksQ0FBQ0Msa0JBQWtCO1FBRTdDLEVBQUUsR0FBR0YsVUFBVSxFQUFFLENBQUM7WUFDaEIsRUFBc0M7WUFDdEMsS0FBSyxDQUFDRyxjQUFjLEdBQUcsS0FBSyxDQUFDZixxRUFBdUIsQ0FBQyxDQUFDO2dCQUNwRFcsS0FBSyxFQUFFUCxPQUFPLENBQUNFLElBQUksQ0FBQ0ssS0FBSztZQUUzQixDQUFDO1lBRUQsS0FBSyxDQUFDYix3REFBVyxDQUNmQyxpREFBWSxDQUFDQSw4Q0FBUyxDQUFDQSxxREFBZ0IsQ0FBQyxDQUFPLFNBQUdPLElBQUksQ0FBQ2UsR0FBRyxDQUFDQyxFQUFFLEdBQUcsQ0FBQztnQkFDL0RULElBQUksRUFBRSxDQUFDO29CQUNMQyxrQkFBa0IsRUFBRUMsY0FBYyxDQUFDTyxFQUFFO2dCQUN2QyxDQUFDO1lBQ0gsQ0FBQztZQUdIVixVQUFVLEdBQUdHLGNBQWMsQ0FBQ08sRUFBRTtRQUNoQyxDQUFDO1FBRUQsS0FBSyxDQUFDQyxxQkFBcUIsR0FBRyxLQUFLLENBQUN2Qiw2RUFBK0IsQ0FBQyxDQUFDO1lBQ25FMEIsUUFBUSxFQUFFZCxVQUFVO1lBQ3BCZSxvQkFBb0IsRUFBRSxDQUFDO2dCQUFBLENBQU07WUFBQSxDQUFDO1lBQzlCQywwQkFBMEIsRUFBRSxDQUFVO1lBQ3RDQyxVQUFVLEVBQUUsQ0FBQztnQkFBQSxDQUFDO29CQUFDQyxLQUFLLEVBQUUsQ0FBZ0M7b0JBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUFDLENBQUM7WUFBQSxDQUFDO1lBQ3RFQyxJQUFJLEVBQUUsQ0FBYztZQUNwQkMscUJBQXFCLEVBQUUsSUFBSTtZQUMzQkMsV0FBVyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtCO1lBQzNDQyxVQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxpQkFBaUI7UUFDM0MsQ0FBQztRQUVELE1BQU0sQ0FBQ3JDLFFBQVEsQ0FBQ3NDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLFNBQVMsRUFBRW5CLHFCQUFxQixDQUFDRCxFQUFFO1FBQUMsQ0FBQztJQUMxRSxDQUFDLE1BQU0sQ0FBQztRQUNOcEIsUUFBUSxDQUFDeUMsU0FBUyxDQUFDLENBQU8sUUFBRSxDQUFNO1FBQ2xDekMsUUFBUSxDQUFDc0MsTUFBTSxDQUFDLEdBQUcsRUFBRUksR0FBRyxDQUFDLENBQW9CO0lBQy9DLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9zdWJzY3JpYmUudHM/MDU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xuaW1wb3J0IHsgcXVlcnkgfSBmcm9tIFwiZmF1bmFkYlwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiO1xuXG50eXBlIFVzZXIgPSB7XG4gIHJlZjoge1xuICAgIGlkOiBzdHJpbmc7XG4gIH07XG4gIGRhdGE6IHtcbiAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IHJlcXVlc3QgfSk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZmF1bmEucXVlcnk8VXNlcj4oXG4gICAgICBxdWVyeS5HZXQoXG4gICAgICAgIHF1ZXJ5Lk1hdGNoKFxuICAgICAgICAgIHF1ZXJ5LkluZGV4KFwidXNlcl9ieV9lbWFpbFwiKSxcbiAgICAgICAgICBxdWVyeS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gICAgbGV0IGN1c3RvbWVySWQgPSB1c2VyLmRhdGEuc3RyaXBlX2N1c3RvbWVyX2lkO1xuXG4gICAgaWYgKCFjdXN0b21lcklkKSB7XG4gICAgICAvLyBjcmlhbmRvIGNsaWVudGUgbm8gcGFpbmVsIGRvIFNUUklQRVxuICAgICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgICAgIC8vbWV0YWRhdGFcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgcXVlcnkuVXBkYXRlKHF1ZXJ5LlJlZihxdWVyeS5Db2xsZWN0aW9uKFwidXNlcnNcIiksIHVzZXIucmVmLmlkKSwge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaXBlQ3VzdG9tZXIuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGN1c3RvbWVySWQgPSBzdHJpcGVDdXN0b21lci5pZFxuICAgIH1cblxuICAgIGNvbnN0IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgY3VzdG9tZXI6IGN1c3RvbWVySWQsXG4gICAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiBcInJlcXVpcmVkXCIsXG4gICAgICBsaW5lX2l0ZW1zOiBbeyBwcmljZTogXCJwcmljZV8xS0VkTDBDRWxHOUxodVp0ZFNhUG9aM2hcIiwgcXVhbnRpdHk6IDEgfV0sXG4gICAgICBtb2RlOiBcInN1YnNjcmlwdGlvblwiLFxuICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLFxuICAgICAgc3VjY2Vzc191cmw6IHByb2Nlc3MuZW52LlNUUklQRV9TVUNDRVNTX1VSTCxcbiAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uSWQ6IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbi5pZCB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXNwb25zZS5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIlBPU1RcIik7XG4gICAgcmVzcG9uc2Uuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJmYXVuYSIsInF1ZXJ5Iiwic3RyaXBlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwic2Vzc2lvbiIsInJlcSIsInVzZXIiLCJHZXQiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJlbWFpbCIsImN1c3RvbWVySWQiLCJkYXRhIiwic3RyaXBlX2N1c3RvbWVyX2lkIiwic3RyaXBlQ3VzdG9tZXIiLCJjdXN0b21lcnMiLCJjcmVhdGUiLCJVcGRhdGUiLCJSZWYiLCJDb2xsZWN0aW9uIiwicmVmIiwiaWQiLCJzdHJpcGVDaGVja291dFNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3VzdG9tZXIiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY,\n    domain: \"db.fauna.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0QsMkNBQU0sQ0FBQyxDQUFDO0lBQy9CRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0lBQy9CQyxNQUFNLEVBQUUsQ0FBYztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzPzMyM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcImZhdW5hZGJcIjtcblxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVksXG4gIGRvbWFpbjogXCJkYi5mYXVuYS5jb21cIlxufSk7XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9LRVkiLCJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts?da1c":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: 'Ignews',\n        version: '0.1.0'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2RhMWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBRXBCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0QsK0NBQU0sQ0FDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCLENBQUM7SUFDQ0MsVUFBVSxFQUFFLENBQVk7SUFDeEJDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLElBQUksRUFBRSxDQUFRO1FBQ2RDLE9BQU8sRUFBRSxDQUFPO0lBQ2xCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxuICB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgIGFwcEluZm86IHtcbiAgICAgIG5hbWU6ICdJZ25ld3MnLFxuICAgICAgdmVyc2lvbjogJzAuMS4wJ1xuICAgIH1cbiAgfVxuKSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts?da1c\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();