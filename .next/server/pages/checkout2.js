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
exports.id = "pages/checkout2";
exports.ids = ["pages/checkout2"];
exports.modules = {

/***/ "./action/shippingAction.js":
/*!**********************************!*\
  !*** ./action/shippingAction.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addShippingAction\": () => (/* binding */ addShippingAction)\n/* harmony export */ });\n/* harmony import */ var _constant_addressConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/addressConstant */ \"./constant/addressConstant.js\");\n\nconst addShippingAction = (data)=>{\n    return (dispatch)=>{\n        dispatch({\n            type: _constant_addressConstant__WEBPACK_IMPORTED_MODULE_0__.ADD_SHIPPING_ADDRESS,\n            payload: data\n        });\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb24vc2hpcHBpbmdBY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUU7QUFFNUQsTUFBTUMsb0JBQW9CLENBQUNDLE9BQVM7SUFDdkMsT0FBTyxDQUFDQyxXQUFhO1FBQ2pCQSxTQUFTO1lBQ0xDLE1BQUtKLDJFQUFvQkE7WUFDekJLLFNBQVFIO1FBQ1o7SUFDSjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL2FjdGlvbi9zaGlwcGluZ0FjdGlvbi5qcz83NDE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9TSElQUElOR19BRERSRVNTIH0gZnJvbSBcIi4uL2NvbnN0YW50L2FkZHJlc3NDb25zdGFudFwiO1xuXG5leHBvcnQgY29uc3QgYWRkU2hpcHBpbmdBY3Rpb24gPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTpBRERfU0hJUFBJTkdfQUREUkVTUyxcbiAgICAgICAgICAgIHBheWxvYWQ6ZGF0YVxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiQUREX1NISVBQSU5HX0FERFJFU1MiLCJhZGRTaGlwcGluZ0FjdGlvbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./action/shippingAction.js\n");

/***/ }),

/***/ "./constant/addressConstant.js":
/*!*************************************!*\
  !*** ./constant/addressConstant.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_SHIPPING_ADDRESS\": () => (/* binding */ ADD_SHIPPING_ADDRESS)\n/* harmony export */ });\nconst ADD_SHIPPING_ADDRESS = \"ADD_SHIPPING_ADDRESS\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudC9hZGRyZXNzQ29uc3RhbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLHVCQUF1Qix1QkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL2NvbnN0YW50L2FkZHJlc3NDb25zdGFudC5qcz80NDE5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkdfQUREUkVTUyA9IFwiQUREX1NISVBQSU5HX0FERFJFU1NcIiJdLCJuYW1lcyI6WyJBRERfU0hJUFBJTkdfQUREUkVTUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constant/addressConstant.js\n");

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = ({ children , className =\"\"  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `w-full h-full inline-block z-0 bg-light dark:bg-dark p-24\n    xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/components/Layout.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLFNBQVMsQ0FBQyxFQUFDQyxTQUFRLEVBQUVDLFdBQVcsR0FBRSxFQUFDLEdBQUs7SUFDNUMscUJBQ0UsOERBQUNDO1FBQUlELFdBQVcsQ0FBQzttQ0FDYyxFQUFFQSxVQUFVLENBQUM7a0JBQ3ZDRDs7Ozs7O0FBR1Q7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVsb3Blci1wb3J0Zm9saW8tc3RhcnRlci1jb2RlLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzP2ZlNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUgPVwiXCJ9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgaC1mdWxsIGlubGluZS1ibG9jayB6LTAgYmctbGlnaHQgZGFyazpiZy1kYXJrIHAtMjRcbiAgICB4bDpwLTI0IGxnOnAtMTYgbWQ6cC0xMiBzbTpwLTggJHtjbGFzc05hbWV9YH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ }),

/***/ "./src/components/TransitionEffect.js":
/*!********************************************!*\
  !*** ./src/components/TransitionEffect.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst TransitionEffect = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen z-30 bg-primary\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                exit: {\n                    x: [\n                        \"0%\",\n                        \"100%\"\n                    ],\n                    width: [\n                        \"0%\",\n                        \"100%\"\n                    ]\n                },\n                transition: {\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/components/TransitionEffect.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen z-20 bg-light\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/components/TransitionEffect.js\",\n                lineNumber: 13,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen z-10 bg-dark\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.4,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/components/TransitionEffect.js\",\n                lineNumber: 18,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionEffect);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDVztBQUVwQyxNQUFNRSxtQkFBbUIsSUFBTTtJQUM3QixxQkFDRTs7MEJBQ0UsOERBQUNELHFEQUFVO2dCQUFDRyxXQUFVO2dCQUN0QkMsU0FBVTtvQkFBQ0MsR0FBRTtvQkFBUUMsT0FBTTtnQkFBTTtnQkFDakNDLFNBQVM7b0JBQUNGLEdBQUU7b0JBQU1DLE9BQU07Z0JBQUk7Z0JBQzVCRSxNQUFNO29CQUFDSCxHQUFFO3dCQUFDO3dCQUFNO3FCQUFPO29CQUFFQyxPQUFNO3dCQUFDO3dCQUFNO3FCQUFPO2dCQUFBO2dCQUM3Q0csWUFBWTtvQkFBQ0MsVUFBUztvQkFBS0MsTUFBSztnQkFBVzs7Ozs7OzBCQUU1Qyw4REFBQ1gscURBQVU7Z0JBQUNHLFdBQVU7Z0JBQ3JCQyxTQUFVO29CQUFDQyxHQUFFO29CQUFRQyxPQUFNO2dCQUFNO2dCQUNqQ0MsU0FBUztvQkFBQ0YsR0FBRTtvQkFBTUMsT0FBTTtnQkFBSTtnQkFDNUJHLFlBQVk7b0JBQUNHLE9BQU07b0JBQUtGLFVBQVM7b0JBQUtDLE1BQUs7Z0JBQVc7Ozs7OzswQkFFdkQsOERBQUNYLHFEQUFVO2dCQUFDRyxXQUFVO2dCQUNyQkMsU0FBVTtvQkFBQ0MsR0FBRTtvQkFBUUMsT0FBTTtnQkFBTTtnQkFDakNDLFNBQVM7b0JBQUNGLEdBQUU7b0JBQU1DLE9BQU07Z0JBQUk7Z0JBQzVCRyxZQUFZO29CQUFDRyxPQUFNO29CQUFLRixVQUFTO29CQUFLQyxNQUFLO2dCQUFXOzs7Ozs7OztBQUc1RDtBQUVBLGlFQUFlVixnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL3NyYy9jb21wb25lbnRzL1RyYW5zaXRpb25FZmZlY3QuanM/MTYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgVHJhbnNpdGlvbkVmZmVjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIHotMzAgYmctcHJpbWFyeSdcbiAgICAgIGluaXRpYWw9IHt7eDpcIjEwMCVcIiwgd2lkdGg6XCIxMDAlXCJ9fVxuICAgICAgYW5pbWF0ZT17e3g6XCIwJVwiLCB3aWR0aDpcIjAlXCJ9fVxuICAgICAgZXhpdD17e3g6W1wiMCVcIiwgXCIxMDAlXCJdLCB3aWR0aDpbXCIwJVwiLCBcIjEwMCVcIl19fVxuICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuOCwgZWFzZTpcImVhc2VJbk91dFwifX0vPlxuXG4gICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiB6LTIwIGJnLWxpZ2h0J1xuICAgICAgaW5pdGlhbD0ge3t4OlwiMTAwJVwiLCB3aWR0aDpcIjEwMCVcIn19XG4gICAgICBhbmltYXRlPXt7eDpcIjAlXCIsIHdpZHRoOlwiMCVcIn19XG4gICAgICB0cmFuc2l0aW9uPXt7ZGVsYXk6MC4yLCBkdXJhdGlvbjowLjgsIGVhc2U6XCJlYXNlSW5PdXRcIn19Lz5cblxuICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J2ZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gei0xMCBiZy1kYXJrJ1xuICAgICAgaW5pdGlhbD0ge3t4OlwiMTAwJVwiLCB3aWR0aDpcIjEwMCVcIn19XG4gICAgICBhbmltYXRlPXt7eDpcIjAlXCIsIHdpZHRoOlwiMCVcIn19XG4gICAgICB0cmFuc2l0aW9uPXt7ZGVsYXk6MC40LCBkdXJhdGlvbjowLjgsIGVhc2U6XCJlYXNlSW5PdXRcIn19Lz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uRWZmZWN0Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiVHJhbnNpdGlvbkVmZmVjdCIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ4Iiwid2lkdGgiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TransitionEffect.js\n");

/***/ }),

/***/ "./src/pages/checkout2.js":
/*!********************************!*\
  !*** ./src/pages/checkout2.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _components_TransitionEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TransitionEffect */ \"./src/components/TransitionEffect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _action_shippingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../action/shippingAction */ \"./action/shippingAction.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_2__]);\n_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst checkout2 = ()=>{\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [postalCode, setPostalCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const submitHandler = ()=>{\n        const data = {\n            address,\n            city,\n            postalCode,\n            country\n        };\n        dispatch((0,_action_shippingAction__WEBPACK_IMPORTED_MODULE_5__.addShippingAction)(data));\n        router.push(\"/placeorder\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CheckOut\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/images/assets/Cherrypops_logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"checkout2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"checkout-heading\",\n                            children: \"Fill Your Address Details:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"\",\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Address\",\n                                    value: address,\n                                    onChange: (e)=>setAddress(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"\",\n                                    children: \"City\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"City\",\n                                    value: city,\n                                    onChange: (e)=>setCity(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"\",\n                                    children: \"Postal Code\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Postal Code\",\n                                    value: postalCode,\n                                    onChange: (e)=>setPostalCode(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"\",\n                                    children: \"Country\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Country\",\n                                    value: country,\n                                    onChange: (e)=>setCountry(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: submitHandler,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/manojbose/Desktop/Arghya_Work/CherrypopsFrontend/src/pages/checkout2.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkout2);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hlY2tvdXQyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNvQjtBQUN4QjtBQUNpQjtBQUNVO0FBQzFCO0FBQ1Q7QUFFNUIsTUFBTVMsWUFBWSxJQUFNO0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNTLE1BQUtDLFFBQVEsR0FBR1YsK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxDQUFDVyxZQUFXQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzVDLE1BQU0sQ0FBQ2EsU0FBUUMsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV0QyxNQUFNZSxXQUFXYix3REFBV0E7SUFDNUIsTUFBTWMsU0FBU1osc0RBQVNBO0lBRXhCLE1BQU1hLGdCQUFnQixJQUFNO1FBQzFCLE1BQU1DLE9BQU87WUFDWFg7WUFDQUU7WUFDQUU7WUFDQUU7UUFDRjtRQUNBRSxTQUFTWix5RUFBaUJBLENBQUNlO1FBQzNCRixPQUFPRyxJQUFJLENBQUM7SUFDZDtJQUNBLHFCQUNFOzswQkFDSSw4REFBQ2Qsa0RBQUlBOztrQ0FDTCw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDNUIsb0VBQWdCQTs7Ozs7MEJBQ2pCLDhEQUFDRCwwREFBTUE7MEJBQ0wsNEVBQUM4QjtvQkFBS0MsV0FBVTs7c0NBQ2QsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFtQjs7Ozs7O3NDQUVqQyw4REFBQ0U7OzhDQUNDLDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FBRzs7Ozs7OzhDQUNsQiw4REFBQ0M7b0NBQ0RDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU83QjtvQ0FDUDhCLFVBQVUsQ0FBQ0MsSUFBTTlCLFdBQVc4QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztzQ0FJNUMsOERBQUNOOzs4Q0FDQyw4REFBQ0M7b0NBQU1DLFNBQVE7OENBQUc7Ozs7Ozs4Q0FDbEIsOERBQUNDO29DQUNEQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPM0I7b0NBQ1A0QixVQUFVLENBQUNDLElBQU01QixRQUFRNEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7c0NBSXpDLDhEQUFDTjs7OENBQ0MsOERBQUNDO29DQUFNQyxTQUFROzhDQUFHOzs7Ozs7OENBQ2xCLDhEQUFDQztvQ0FDREMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT3pCO29DQUNQMEIsVUFBVSxDQUFDQyxJQUFNMUIsY0FBYzBCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUkvQyw4REFBQ047OzhDQUNDLDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FBRzs7Ozs7OzhDQUNsQiw4REFBQ0M7b0NBQ0RDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU92QjtvQ0FDUHdCLFVBQVUsQ0FBQ0MsSUFBTXhCLFdBQVd3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztzQ0FJNUMsOERBQUNJOzRCQUNEQyxTQUFTeEI7c0NBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtBQUVBLGlFQUFlWCxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZWxvcGVyLXBvcnRmb2xpby1zdGFydGVyLWNvZGUvLi9zcmMvcGFnZXMvY2hlY2tvdXQyLmpzPzlhY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRyYW5zaXRpb25FZmZlY3QgZnJvbSAnQC9jb21wb25lbnRzL1RyYW5zaXRpb25FZmZlY3QnXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRTaGlwcGluZ0FjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbi9zaGlwcGluZ0FjdGlvbidcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgY2hlY2tvdXQyID0gKCkgPT4ge1xuICBjb25zdCBbYWRkcmVzcyxzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjaXR5LHNldENpdHldID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3Bvc3RhbENvZGUsc2V0UG9zdGFsQ29kZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY291bnRyeSxzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpXG4gIFxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBhZGRyZXNzLFxuICAgICAgY2l0eSxcbiAgICAgIHBvc3RhbENvZGUsXG4gICAgICBjb3VudHJ5XG4gICAgfVxuICAgIGRpc3BhdGNoKGFkZFNoaXBwaW5nQWN0aW9uKGRhdGEpKVxuICAgIHJvdXRlci5wdXNoKFwiL3BsYWNlb3JkZXJcIilcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hlY2tPdXQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiYW55IGRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2Fzc2V0cy9DaGVycnlwb3BzX2xvZ28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICA8VHJhbnNpdGlvbkVmZmVjdCAvPlxuICAgIDxMYXlvdXQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2NoZWNrb3V0Mic+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J2NoZWNrb3V0LWhlYWRpbmcnPkZpbGwgWW91ciBBZGRyZXNzIERldGFpbHM6PC9oMj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+QWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0FkZHJlc3MnXG4gICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q2l0eTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0NpdHknXG4gICAgICAgICAgdmFsdWU9e2NpdHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+UG9zdGFsIENvZGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1Bvc3RhbCBDb2RlJ1xuICAgICAgICAgIHZhbHVlPXtwb3N0YWxDb2RlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zdGFsQ29kZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkNvdW50cnk8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdDb3VudHJ5J1xuICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q291bnRyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgb25DbGljaz17c3VibWl0SGFuZGxlcn1cbiAgICAgICAgPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrb3V0MiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJUcmFuc2l0aW9uRWZmZWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJhZGRTaGlwcGluZ0FjdGlvbiIsInVzZVJvdXRlciIsIkhlYWQiLCJjaGVja291dDIiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImNpdHkiLCJzZXRDaXR5IiwicG9zdGFsQ29kZSIsInNldFBvc3RhbENvZGUiLCJjb3VudHJ5Iiwic2V0Q291bnRyeSIsImRpc3BhdGNoIiwicm91dGVyIiwic3VibWl0SGFuZGxlciIsImRhdGEiLCJwdXNoIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMiIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/checkout2.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/checkout2.js"));
module.exports = __webpack_exports__;

})();