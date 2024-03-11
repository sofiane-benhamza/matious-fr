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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js":
/*!******************************************************************************************!*\
  !*** __barrel_optimize__?names=Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Nav: () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Navbar: () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1OYXYsTmF2YmFyIT0hLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNzQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcm91dGluZy1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vaW5kZXguanM/MGU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2IH0gZnJvbSBcIi4vTmF2XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FullContext: () => (/* binding */ FullContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.js\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const params = {\n        isConnected,\n        token\n    };\n    const setConnected = (value)=>{\n        setIsConnected(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isConnected: isConnected,\n                token: token\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FullContext.Provider, {\n                value: params,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    setConnected: setConnected,\n                    setToken: setToken,\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/sofiane/Documents/matious/frontend/pages/_app.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst FullContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ2U7QUFDVDtBQUNjO0FBQ0k7QUFHbEQsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1XLFNBQVM7UUFBRUo7UUFBYUU7SUFBTTtJQUVwQyxNQUFNRyxlQUFlLENBQUNDO1FBQVlMLGVBQWVLO0lBQU87SUFFeEQscUJBQ0U7OzBCQUNFLDhEQUFDViwwREFBTUE7Z0JBQUNJLGFBQWFBO2dCQUFhRSxPQUFPQTs7Ozs7OzBCQUN6Qyw4REFBQ0ssWUFBWUMsUUFBUTtnQkFBQ0YsT0FBT0Y7MEJBQzNCLDRFQUFDTjtvQkFBVU8sY0FBY0E7b0JBQWNGLFVBQVVBO29CQUFXLEdBQUdKLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEY7QUFDTyxNQUFNUSw0QkFBY1osMERBQW1CLENBQUMsQ0FBQyxHQUFHO0FBRW5ELGlFQUFlRSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1yb3V0aW5nLWV4YW1wbGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC1pY29ucy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3NcIjtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgcGFyYW1zID0geyBpc0Nvbm5lY3RlZCwgdG9rZW4gfTtcblxuICBjb25zdCBzZXRDb25uZWN0ZWQgPSAodmFsdWUpID0+IHsgc2V0SXNDb25uZWN0ZWQodmFsdWUpIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciBpc0Nvbm5lY3RlZD17aXNDb25uZWN0ZWR9IHRva2VuPXt0b2tlbn0vPlxuICAgICAgPEZ1bGxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwYXJhbXN9PlxuICAgICAgICA8Q29tcG9uZW50IHNldENvbm5lY3RlZD17c2V0Q29ubmVjdGVkfSBzZXRUb2tlbj17c2V0VG9rZW59IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Z1bGxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGNvbnN0IEZ1bGxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0IiwiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwidG9rZW4iLCJzZXRUb2tlbiIsInBhcmFtcyIsInNldENvbm5lY3RlZCIsInZhbHVlIiwiRnVsbENvbnRleHQiLCJQcm92aWRlciIsImNyZWF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Nav,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Header({ isConnected, token }) {\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getName = async ()=>{\n            if (!token) {\n                return;\n            }\n            try {\n                const form = new FormData();\n                form.append(\"token\", token);\n                const response = await fetch(`http://${\"127.0.0.1\"}:8000/users/get/`, {\n                    method: \"POST\",\n                    body: form\n                });\n                if (response.ok) {\n                    const data = await response.json();\n                    setUserName(data.name.substring(0, data.name.indexOf(\" \")));\n                } else {\n                    const errorData = await response.json();\n                    console.error(\"Authentication failed:\", errorData.error);\n                }\n            } catch (error) {\n                console.error(\"Error during authentication:\", error.message);\n            }\n        };\n        getName();\n    }, [\n        token\n    ]);\n    return isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n        collapseOnSelect: true,\n        expand: \"lg\",\n        variant: \"dark\",\n        className: \"text-light\",\n        style: {\n            backgroundColor: \"black\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Brand, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/home\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"title fw-bolder m-2 p-2 headerChild \",\n                        children: \"Matious\"\n                    }, void 0, false, {\n                        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                \"aria-controls\": \"responsive-navbar-nav\"\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                id: \"responsive-navbar-nav\",\n                className: \"justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                    className: \"ml-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            passHref: true,\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                className: \"fw-bold m-2 p-2 headerChild text-light \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"bi bi-person-circle\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, this),\n                                    \"\\xa0\\xa0\",\n                                    userName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/login?code=48593215\",\n                            passHref: true,\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                className: \"fw-bold m-2 p-2 headerChild text-light \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"bi bi-box-arrow-right\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this),\n                                    \"\\xa0\\xa0Disconnect\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n        collapseOnSelect: true,\n        expand: \"lg\",\n        variant: \"dark\",\n        className: \"text-light\",\n        style: {\n            backgroundColor: \"black\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Brand, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"title fw-bolder m-2 p-2 headerChild \",\n                        children: \"Matious\"\n                    }, void 0, false, {\n                        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                \"aria-controls\": \"responsive-navbar-nav\"\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                id: \"responsive-navbar-nav\",\n                className: \"justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                    className: \"ml-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/login\",\n                            passHref: true,\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                className: \"fw-bold m-2 p-2 headerChild text-light \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"bi bi-box-arrow-in-right\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 29\n                                    }, this),\n                                    \"\\xa0\\xa0Connect\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/signup\",\n                            passHref: true,\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                className: \"fw-bold m-2 p-2 headerChild text-light \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"bi bi-person-plus\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, this),\n                                    \"\\xa0\\xa0Join us\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sofiane/Documents/matious/frontend/pages/components/Header.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTtnQkFBQ0MsSUFBRztnQkFBd0JYLFdBQVU7MEJBQ2xELDRFQUFDaEMsa0ZBQUdBO29CQUFDZ0MsV0FBVTs7c0NBQ1gsOERBQUNsQyxrREFBSUE7NEJBQUNzQyxNQUFLOzRCQUFTQyxRQUFROzRCQUFDQyxjQUFjO3NDQUN2Qyw0RUFBQ3RDLGtGQUFHQSxDQUFDRixJQUFJO2dDQUFDa0MsV0FBVTs7a0RBQ2hCLDhEQUFDWTt3Q0FBRVosV0FBVTs7Ozs7O29DQUErQjs7Ozs7Ozs7Ozs7O3NDQUVwRCw4REFBQ2xDLGtEQUFJQTs0QkFBQ3NDLE1BQUs7NEJBQVVDLFFBQVE7NEJBQUNDLGNBQWM7c0NBQ3hDLDRFQUFDdEMsa0ZBQUdBLENBQUNGLElBQUk7Z0NBQUNrQyxXQUFVOztrREFDaEIsOERBQUNZO3dDQUFFWixXQUFVOzs7Ozs7b0NBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcm91dGluZy1leGFtcGxlLy4vcGFnZXMvY29tcG9uZW50cy9IZWFkZXIuanM/MzE1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgaXNDb25uZWN0ZWQsIHRva2VuIH0pIHtcbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0TmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKFwidG9rZW5cIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgICAgIGBodHRwOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX0lQX0FERFJ9OjgwMDAvdXNlcnMvZ2V0L2AsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyTmFtZShkYXRhLm5hbWUuc3Vic3RyaW5nKDAsIGRhdGEubmFtZS5pbmRleE9mKFwiIFwiKSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dGhlbnRpY2F0aW9uIGZhaWxlZDpcIiwgZXJyb3JEYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgYXV0aGVudGljYXRpb246XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfTtcblxuICAgICAgICBnZXROYW1lKCk7XG4gICAgfSwgW3Rva2VuXSk7XG4gICAgcmV0dXJuIChpc0Nvbm5lY3RlZCA/XG4gICAgICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIn19PlxuICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWVcIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGUgZnctYm9sZGVyIG0tMiBwLTIgaGVhZGVyQ2hpbGQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRpb3VzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiZnctYm9sZCBtLTIgcC0yIGhlYWRlckNoaWxkIHRleHQtbGlnaHQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktcGVyc29uLWNpcmNsZVwiPjwvaT4mbmJzcDsmbmJzcDt7dXNlck5hbWV9PC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luP2NvZGU9NDg1OTMyMTVcIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmdy1ib2xkIG0tMiBwLTIgaGVhZGVyQ2hpbGQgdGV4dC1saWdodCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1ib3gtYXJyb3ctcmlnaHRcIj48L2k+Jm5ic3A7Jm5ic3A7RGlzY29ubmVjdDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj4gOlxuICAgICAgICA8TmF2YmFyIGNvbGxhcHNlT25TZWxlY3QgZXhwYW5kPVwibGdcIiB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcImJsYWNrXCJ9fT5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGUgZnctYm9sZGVyIG0tMiBwLTIgaGVhZGVyQ2hpbGQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRpb3VzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZ3LWJvbGQgbS0yIHAtMiBoZWFkZXJDaGlsZCB0ZXh0LWxpZ2h0IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWJveC1hcnJvdy1pbi1yaWdodFwiPjwvaT4mbmJzcDsmbmJzcDtDb25uZWN0PC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZ3LWJvbGQgbS0yIHAtMiBoZWFkZXJDaGlsZCB0ZXh0LWxpZ2h0IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXBlcnNvbi1wbHVzXCI+PC9pPiZuYnNwOyZuYnNwO0pvaW4gdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZiYXIiLCJOYXYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsImlzQ29ubmVjdGVkIiwidG9rZW4iLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiZ2V0TmFtZSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9JUF9BRERSIiwibWV0aG9kIiwiYm9keSIsIm9rIiwiZGF0YSIsImpzb24iLCJuYW1lIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImVycm9yRGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb2xsYXBzZU9uU2VsZWN0IiwiZXhwYW5kIiwidmFyaWFudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiQnJhbmQiLCJocmVmIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Header.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@restart/hooks/useBreakpoint":
/*!***********************************************!*\
  !*** external "@restart/hooks/useBreakpoint" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useBreakpoint");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/ui/Anchor":
/*!*************************************!*\
  !*** external "@restart/ui/Anchor" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ "@restart/ui/Modal":
/*!************************************!*\
  !*** external "@restart/ui/Modal" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ "@restart/ui/ModalManager":
/*!*******************************************!*\
  !*** external "@restart/ui/ModalManager" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ "@restart/ui/Nav":
/*!**********************************!*\
  !*** external "@restart/ui/Nav" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ "@restart/ui/NavItem":
/*!**************************************!*\
  !*** external "@restart/ui/NavItem" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ "@restart/ui/SelectableContext":
/*!************************************************!*\
  !*** external "@restart/ui/SelectableContext" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addClass":
/*!***************************************!*\
  !*** external "dom-helpers/addClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeClass":
/*!******************************************!*\
  !*** external "dom-helpers/removeClass" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-extra/lib/all":
/*!*******************************************!*\
  !*** external "prop-types-extra/lib/all" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types-extra/lib/all");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/bootstrap","vendor-chunks/bootstrap-icons"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();