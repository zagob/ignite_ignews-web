"use strict";
(() => {
var exports = {};
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 9187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((request, response)=>{
    console.log(request.query);
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
var __webpack_exports__ = (__webpack_exec__(9187));
module.exports = __webpack_exports__;

})();