(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5848:
/***/ ((module) => {

// Exports
module.exports = {
	"subscribeButton": "styles_subscribeButton__52c6u"
};


/***/ }),

/***/ 919:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "home_contentContainer__HYuN8",
	"hero": "home_hero__lhpWS"
};


/***/ }),

/***/ 7319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/services/api.ts

const api = external_axios_default().create({
    baseURL: "/api"
});

;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: ./src/services/stripe-js.ts

async function getStripeJs() {
    const stripeJs = await (0,stripe_js_namespaceObject.loadStripe)("pk_test_51KEdHhCElG9LhuZtVM9Fluuhg7nmyZRlXKwnsfnfJbiywXnrIvyGv4m6biX6FiOamQKLjAbUfnQglplChRImQnXZ0018QzL6Y9");
    return stripeJs;
}

// EXTERNAL MODULE: ./src/components/SubscribeButton/styles.module.scss
var styles_module = __webpack_require__(5848);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/SubscribeButton/index.tsx






function SubscribeButton({ priceId  }) {
    const { data: session  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    async function handleSubscribe() {
        if (!session) {
            return (0,react_.signIn)("github");
        }
        if (session.activeSubscription.data.status === 'active') {
            return router.push("/posts");
        }
        try {
            const response = await api.post("/subscribe");
            const { sessionId  } = response.data;
            const stripe = await getStripeJs();
            await stripe.redirectToCheckout({
                sessionId
            });
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: (styles_module_default()).subscribeButton,
        onClick: handleSubscribe,
        children: "Subscribe now"
    }));
}

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./src/services/stripe.ts

const stripe = new (external_stripe_default())(process.env.STRIPE_API_KEY, {
    apiVersion: '2020-08-27',
    appInfo: {
        name: 'Ignews',
        version: '0.1.0'
    }
});

// EXTERNAL MODULE: ./src/pages/home.module.scss
var home_module = __webpack_require__(919);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
;// CONCATENATED MODULE: ./src/pages/index.tsx





function Home({ product  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Home | ig.news"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (home_module_default()).contentContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (home_module_default()).hero,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "👏️ Hey, welcome"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                children: [
                                    "News about ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    }),
                                    " the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "React"
                                    }),
                                    " world."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Get access to all the publications ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "for ",
                                            product.amount,
                                            " month"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SubscribeButton, {
                                priceId: product.priceId
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/avatar.svg",
                        alt: "Girl coding"
                    })
                ]
            })
        ]
    }));
};
const getStaticProps = async ()=>{
    const price = await stripe.prices.retrieve("price_1KEdL0CElG9LhuZtdSaPoZ3h");
    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(price.unit_amount / 100)
    };
    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    };
};


/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 997:
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
var __webpack_exports__ = (__webpack_exec__(7319));
module.exports = __webpack_exports__;

})();