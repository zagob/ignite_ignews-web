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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.JWT_SIGNING_PRIVATE_KEY,\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            const { email  } = user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n                return true;\n            } catch (err) {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUU2QjtBQUNMO0FBRVI7QUFXL0MsaUVBQWVDLGdEQUFRLENBQUMsQ0FBQztJQUN2QkcsU0FBUyxFQUFFLENBQUM7UUFDVkYsaUVBQWMsQ0FBQyxDQUFDO1lBQ2RHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGFBQWEsRUFBRSxDQUFDO2dCQUNkQyxNQUFNLEVBQUUsQ0FBQztvQkFDUEMsS0FBSyxFQUFFLENBQVc7Z0JBQ3BCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDREMsT0FBTyxFQUFFLENBQUM7UUFBQ0MsUUFBUSxFQUFFLENBQUs7SUFBQyxDQUFDO0lBQzVCQyxNQUFNLEVBQUVWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSx1QkFBdUI7SUFDM0NDLFNBQVMsRUFBRSxDQUFDO2NBQ0pDLE1BQU0sRUFBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEVBQWMsQ0FBQyxFQUFvQixDQUFDO1lBQ3ZFLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEdBQUdILElBQUk7WUFFdEIsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDakIsd0RBQVcsQ0FDZkgsNkNBQVEsQ0FDTkEsOENBQVMsQ0FDUEEsaURBQVksQ0FDVkEsZ0RBQVcsQ0FDVEEsZ0RBQVcsQ0FBQyxDQUFlLGlCQUMzQkEsbURBQWMsQ0FBQ29CLElBQUksQ0FBQ0csS0FBSyxNQUkvQnZCLGlEQUFZLENBQUNBLHFEQUFnQixDQUFDLENBQU8sU0FBRyxDQUFDO29CQUFDZ0MsSUFBSSxFQUFFLENBQUM7d0JBQUNULEtBQUs7b0JBQUMsQ0FBQztnQkFBQyxDQUFDLEdBQzNEdkIsOENBQVMsQ0FDUEEsZ0RBQVcsQ0FDVEEsZ0RBQVcsQ0FBQyxDQUFlLGlCQUMzQkEsbURBQWMsQ0FBQ29CLElBQUksQ0FBQ0csS0FBSztnQkFNakMsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDLENBQUMsS0FBSyxFQUFDVyxHQUFHLEVBQUUsQ0FBQztnQkFDWixNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSB9IGZyb20gXCJmYXVuYWRiXCI7XG5cbmltcG9ydCBOZXh0QXV0aCwgeyBBY2NvdW50LCBQcm9maWxlLCBVc2VyIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xuXG5pbnRlcmZhY2UgU2lnbkluUHJvcHMge1xuICB1c2VyOiBVc2VyO1xuICBhY2NvdW50OiBBY2NvdW50O1xuICBwcm9maWxlOiBQcm9maWxlO1xuICBlbWFpbDoge1xuICAgIHZlcmlmaWNhdGlvblJlcXVlc3Q/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNjb3BlOiBcInJlYWQ6dXNlclwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc2Vzc2lvbjogeyBzdHJhdGVneTogXCJqd3RcIiB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TSUdOSU5HX1BSSVZBVEVfS0VZLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50LCBwcm9maWxlIH06IFNpZ25JblByb3BzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxdWVyeS5JZihcbiAgICAgICAgICAgIHF1ZXJ5Lk5vdChcbiAgICAgICAgICAgICAgcXVlcnkuRXhpc3RzKFxuICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxuICAgICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgcXVlcnkuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxdWVyeS5DcmVhdGUocXVlcnkuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB7IGRhdGE6IHsgZW1haWwgfSB9KSxcbiAgICAgICAgICAgIHF1ZXJ5LkdldChcbiAgICAgICAgICAgICAgcXVlcnkuTWF0Y2goXG4gICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbInF1ZXJ5IiwiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsImZhdW5hIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsIkpXVF9TSUdOSU5HX1BSSVZBVEVfS0VZIiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiZW1haWwiLCJJZiIsIk5vdCIsIkV4aXN0cyIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwiR2V0IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY,\n    domain: \"db.fauna.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0QsMkNBQU0sQ0FBQyxDQUFDO0lBQy9CRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0lBQy9CQyxNQUFNLEVBQUUsQ0FBYztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzPzMyM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcImZhdW5hZGJcIjtcblxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVksXG4gIGRvbWFpbjogXCJkYi5mYXVuYS5jb21cIlxufSk7XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9LRVkiLCJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();