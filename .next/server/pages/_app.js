(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2649:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__uAgJk",
	"headerContent": "styles_headerContent__h9eUe",
	"active": "styles_active__l7I1o"
};


/***/ }),

/***/ 3952:
/***/ ((module) => {

// Exports
module.exports = {
	"signInButton": "styles_signInButton__byt5_",
	"closeIcon": "styles_closeIcon__yr0aw"
};


/***/ }),

/***/ 574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/SignInButton/styles.module.scss
var styles_module = __webpack_require__(3952);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/components/SignInButton/index.tsx





function SignInButton() {
    const { data: session  } = (0,react_.useSession)();
    return session ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: (styles_module_default()).signInButton,
        onClick: ()=>(0,react_.signOut)()
        ,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                color: "#04d361"
            }),
            session.user.name,
            /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiX, {
                color: "#737380",
                className: (styles_module_default()).closeIcon
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: (styles_module_default()).signInButton,
        onClick: ()=>(0,react_.signIn)("github")
        ,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                color: "#eba417"
            }),
            "Sign in with Github"
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var Header_styles_module = __webpack_require__(2649);
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/ActiveLink/index.tsx




function ActiveLink({ children , activeClassName , ...rest }) {
    const { asPath  } = (0,router_.useRouter)();
    const className = asPath === rest.href ? activeClassName : "";
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        ...rest,
        children: /*#__PURE__*/ (0,external_react_.cloneElement)(children, {
            className
        })
    }));
}

;// CONCATENATED MODULE: ./src/components/Header/index.tsx




function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_styles_module_default()).headerContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Header_styles_module_default()).headerContent,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/logo.svg",
                    alt: "ig.news"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink, {
                            activeClassName: (Header_styles_module_default()).active,
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink, {
                            activeClassName: (Header_styles_module_default()).active,
                            href: "/posts",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Posts"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SignInButton, {
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SessionProvider, {
        session: pageProps.session,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(574)));
module.exports = __webpack_exports__;

})();