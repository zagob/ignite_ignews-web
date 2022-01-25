"use strict";
(() => {
var exports = {};
exports.id = 857;
exports.ids = [857,540];
exports.modules = {

/***/ 4584:
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9371);
/* harmony import */ var _lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7582);


async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable){
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}
const config = {
    api: {
        bodyParser: false
    }
};
const relevantEvents = new Set([
    "checkout.session.completed",
    "customer.subscription.updated",
    "customer.subscription.deleted", 
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (request, response)=>{
    if (request.method === "POST") {
        const buf = await buffer(request);
        const secret = request.headers["stripe-signature"];
        let event;
        try {
            event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__/* .stripe.webhooks.constructEvent */ .A.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
        } catch (err) {
            return response.status(400).send(`Webhook error: ${err.message}`);
        }
        const { type  } = event;
        if (relevantEvents.has(type)) {
            try {
                switch(type){
                    case "customer.subscription.updated":
                    case "customer.subscription.deleted":
                        const subscription = event.data.object;
                        await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(subscription.id, subscription.customer.toString(), false);
                        break;
                    case "checkout.session.completed":
                        const checkoutSession = event.data.object;
                        await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(checkoutSession.subscription.toString(), checkoutSession.customer.toString(), true);
                        break;
                    default:
                        throw new Error("Unhandled event.");
                }
            } catch (err) {
                return response.json({
                    error: "Webhook handle failed."
                });
            }
        }
        response.json({
            received: true
        });
    } else {
        response.setHeader("Allow", "POST");
        response.status(405).end("Method not allowed");
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [582], () => (__webpack_exec__(8132)));
module.exports = __webpack_exports__;

})();