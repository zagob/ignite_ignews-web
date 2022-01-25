"use strict";
(() => {
var exports = {};
exports.id = 761;
exports.ids = [761,540];
exports.modules = {

/***/ 4584:
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ subscribe)
});

;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
// EXTERNAL MODULE: ./src/services/fauna.ts
var fauna = __webpack_require__(751);
// EXTERNAL MODULE: external "faunadb"
var external_faunadb_ = __webpack_require__(4584);
// EXTERNAL MODULE: ./src/services/stripe.ts
var stripe = __webpack_require__(9371);
;// CONCATENATED MODULE: ./src/pages/api/subscribe.ts




/* harmony default export */ const subscribe = (async (request, response)=>{
    if (request.method === "POST") {
        const session = await (0,react_namespaceObject.getSession)({
            req: request
        });
        const user = await fauna/* fauna.query */.r.query(external_faunadb_.query.Get(external_faunadb_.query.Match(external_faunadb_.query.Index("user_by_email"), external_faunadb_.query.Casefold(session.user.email))));
        let customerId = user.data.stripe_customer_id;
        if (!customerId) {
            // criando cliente no painel do STRIPE
            const stripeCustomer = await stripe/* stripe.customers.create */.A.customers.create({
                email: session.user.email
            });
            await fauna/* fauna.query */.r.query(external_faunadb_.query.Update(external_faunadb_.query.Ref(external_faunadb_.query.Collection("users"), user.ref.id), {
                data: {
                    stripe_customer_id: stripeCustomer.id
                }
            }));
            customerId = stripeCustomer.id;
        }
        const stripeCheckoutSession = await stripe/* stripe.checkout.sessions.create */.A.checkout.sessions.create({
            customer: customerId,
            payment_method_types: [
                "card"
            ],
            billing_address_collection: "required",
            line_items: [
                {
                    price: "price_1KEdL0CElG9LhuZtdSaPoZ3h",
                    quantity: 1
                }
            ],
            mode: "subscription",
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        });
        return response.status(200).json({
            sessionId: stripeCheckoutSession.id
        });
    } else {
        response.setHeader("Allow", "POST");
        response.status(405).end("Method not allowed");
    }
});


/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ fauna)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);

const fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({
    secret: process.env.FAUNADB_KEY,
    domain: "db.fauna.com"
});


/***/ }),

/***/ 9371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ stripe)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8174);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {
    apiVersion: '2020-08-27',
    appInfo: {
        name: 'Ignews',
        version: '0.1.0'
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3631));
module.exports = __webpack_exports__;

})();