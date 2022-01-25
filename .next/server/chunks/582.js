"use strict";
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 7582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveSubscription": () => (/* binding */ saveSubscription)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9371);



async function saveSubscription(subscriptionId, customerId, createAction = false) {
    // Buscar o usuario no bando do FaunaDB com o ID {customerId}
    const userRef = await _services_fauna__WEBPACK_IMPORTED_MODULE_1__/* .fauna.query */ .r.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select("ref", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index("user_by_stripe_customer_id"), customerId))));
    const subscription = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__/* .stripe.subscriptions.retrieve */ .A.subscriptions.retrieve(subscriptionId);
    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id
    };
    if (createAction) {
        // Salvar os dados da subscription no FaunaDB
        await _services_fauna__WEBPACK_IMPORTED_MODULE_1__/* .fauna.query */ .r.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection("subscriptions"), {
            data: subscriptionData
        }));
    } else {
        await _services_fauna__WEBPACK_IMPORTED_MODULE_1__/* .fauna.query */ .r.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Replace(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select("ref", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index("subscription_by_id"), subscriptionId))), {
            data: subscriptionData
        }));
    }
}


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