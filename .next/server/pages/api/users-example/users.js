"use strict";
(() => {
var exports = {};
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 2020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((request, response)=>{
    const users = [
        {
            id: 1,
            name: "Matheus"
        },
        {
            id: 2,
            name: "Dani"
        },
        {
            id: 3,
            name: "Rafa"
        }, 
    ];
    return response.json(users);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2020));
module.exports = __webpack_exports__;

})();