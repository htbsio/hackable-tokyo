module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/header/index.tsx



const Header = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "text-center",
    "data-testid": "container",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {})
  });
};
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./src/components/logo/index.tsx



const Logo = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
    src: "/icons/nextjs-icon.svg",
    alt: "nextjs",
    width: "96",
    height: "58"
  });
};
// CONCATENATED MODULE: ./src/components/main/index.tsx


const Main = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "text-center font-light py-5 bg-gray-700",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container mx-auto",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "text-lg text-white mb-3",
        children: "\u3044\u3048\u30FC\u3044"
      })
    })
  });
};
// CONCATENATED MODULE: ./src/components/button/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Button = (_ref) => {
  let {
    className = "",
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", _objectSpread(_objectSpread({
    className: `py-2 px-4 rounded bg-green-500 hover:bg-green-600 focus:outline-none ring-opacity-75 ring-green-400 focus:ring text-white text-lg ${className}`
  }, rest), {}, {
    "data-testid": "btn",
    children: children
  }));
};
// CONCATENATED MODULE: ./src/components/footer/index.tsx




const Footer = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "text-center py-5 bg-gray-800",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "https://github.com/pankod",
      target: "_blank",
      className: "block mb-3",
      "data-testid": "pankod-logo",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        src: "/icons/pankod-icon.svg",
        alt: "pankod",
        width: "140",
        height: "28"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      className: "flex justify-center list-none p-0 m-0",
      "data-testid": "icons-container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: "mx-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          src: "/icons/github-icon.svg",
          alt: "github",
          width: "28",
          height: "29"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: "mx-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          src: "/icons/twitter-icon.svg",
          alt: "nextjs",
          width: "28",
          height: "28"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: "mx-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          src: "/icons/youtube-icon.svg",
          alt: "youtube",
          width: "28",
          height: "29"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: "mx-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          src: "/icons/linkedin-icon.svg",
          alt: "linkedin",
          width: "28",
          height: "32"
        })
      })]
    })]
  });
};
// CONCATENATED MODULE: ./src/components/container/index.tsx

const Container = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "min-h-screen flex flex-col",
    children: children
  });
};
// CONCATENATED MODULE: ./src/components/index.ts






// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__("pccx");

// CONCATENATED MODULE: ./src/components/Dropdowns/IndexDropdown.tsx








const IndexDropdownComponent = ({
  t
}) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = external_react_default.a.useState(false);
  const btnDropdownRef = /*#__PURE__*/external_react_default.a.createRef();
  const popoverDropdownRef = /*#__PURE__*/external_react_default.a.createRef();

  const openDropdownPopover = () => {
    Object(core_["createPopper"])(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
      href: "#pablo",
      ref: btnDropdownRef,
      onClick: e => {
        e.preventDefault();
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
      },
      children: t("menu")
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      ref: popoverDropdownRef,
      className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500",
        children: "Admin Layout"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/admin/dashboard",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Dashboard"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/admin/settings",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Settings"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/admin/tables",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Tables"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/admin/maps",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Maps"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "h-0 mx-4 my-2 border border-solid border-gray-200"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500",
        children: "Auth Layout"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/auth/login",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Login"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/auth/register",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Register"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "h-0 mx-4 my-2 border border-solid border-gray-200"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500",
        children: "No Layout"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/landing",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Lading"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
        to: "/profile",
        className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800",
        children: "Profile"
      })]
    })]
  });
};

const IndexDropdown = Object(i18n["withTranslation"])(["common", "home"])(IndexDropdownComponent);
/* harmony default export */ var Dropdowns_IndexDropdown = (IndexDropdown);
// CONCATENATED MODULE: ./src/components/Navbars/IndexNavbar.tsx




/*eslint-disable*/


 // components



const NavbarComponent = ({
  t
}) => {
  const [navbarOpen, setNavbarOpen] = external_react_default.a.useState(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
      className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start mr-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
            to: "/",
            className: "digital text-white bg-black text-xl font-bold leading-relaxed inline-block mr-4 py-0 whitespace-no-wrap ",
            children: "　<HackableTokyo />　"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
            type: "button",
            onClick: () => setNavbarOpen(!navbarOpen),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              className: "fas fa-bars"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block" : " hidden"),
          id: "example-navbar-warning",
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: "flex flex-col lg:flex-row list-none mr-auto",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              className: "flex items-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "text-gray-500 fas fa-language text-lg leading-lg mr-2"
              }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "hover:text-gray-600 text-gray-800 px-0 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                href: "/ja",
                children: "\u65E5\u672C\u8A9E\u3000/"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "flex items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "hover:text-gray-600 text-gray-800 px-0 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                href: "/en",
                children: "English"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: "flex flex-col lg:flex-row list-none lg:ml-auto",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "flex items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdowns_IndexDropdown, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "flex items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F",
                target: "_blank",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "text-gray-500 fab fa-facebook text-lg leading-lg "
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "lg:hidden inline-block ml-2",
                  children: "Share"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "flex items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                href: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20",
                target: "_blank",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "text-gray-500 fab fa-twitter text-lg leading-lg "
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "lg:hidden inline-block ml-2",
                  children: "Tweet"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "flex items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                href: "https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar",
                target: "_blank",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "text-gray-500 fab fa-github text-lg leading-lg "
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "lg:hidden inline-block ml-2",
                  children: "Star"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "flex items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                style: {
                  background: "#F50057"
                },
                className: "text-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                type: "button",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fas fa-arrow-alt-circle-down"
                }), " ", t("download_app")]
              })
            })]
          })]
        })]
      })
    })
  });
};

const Navbar = Object(i18n["withTranslation"])(["common", "home"])(NavbarComponent);
/* harmony default export */ var IndexNavbar = (Navbar);
// CONCATENATED MODULE: ./src/components/Footers/Footer.js




function Footer_Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
      className: "relative bg-gray-300 pt-8 pb-6",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",
        style: {
          transform: "translateZ(0)"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "absolute bottom-0 overflow-hidden",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "none",
          version: "1.1",
          viewBox: "0 0 2560 100",
          x: "0",
          y: "0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("polygon", {
            className: "text-gray-300 fill-current",
            points: "2560 0 2560 100 0 100"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container mx-auto px-4",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-wrap text-center lg:text-left",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full lg:w-6/12 px-4",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
              className: "text-lg mt-0 mb-2 text-gray-700",
              children: "Contact: admin@hitobase.io"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "mt-6 lg:mb-0 mb-6",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                target: "_blank",
                href: "https://twitter.com/hackable_cafe",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                  className: "bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                  type: "button",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "fab fa-twitter"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                className: "bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                type: "button",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fab fa-facebook-square"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                className: "bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                type: "button",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fab fa-dribbble"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                className: "bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                type: "button",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fab fa-github"
                })
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full lg:w-6/12 px-4",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex flex-wrap items-top mb-6",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-full lg:w-4/12 px-4 ml-auto",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "block uppercase text-gray-600 text-sm font-semibold mb-2",
                  children: "Useful Links"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                  className: "list-unstyled",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://www.creative-tim.com/presentation?ref=nr-footer",
                      children: "About Us"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://blog.creative-tim.com?ref=nr-footer",
                      children: "Blog"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://www.github.com/creativetimofficial?ref=nr-footer",
                      children: "Github"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer",
                      children: "Free Products"
                    })
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-full lg:w-4/12 px-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "block uppercase text-gray-600 text-sm font-semibold mb-2",
                  children: "Other Resources"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                  className: "list-unstyled",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://github.com/creativetimofficial/notus-react/blob/master/LICENSE.md?ref=nr-footer",
                      children: "MIT License"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://creative-tim.com/terms?ref=nr-footer",
                      children: "Terms & Conditions"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://creative-tim.com/privacy?ref=nr-footer",
                      children: "Privacy Policy"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
                      href: "https://creative-tim.com/contact-us?ref=nr-footer",
                      children: "Contact Us"
                    })
                  })]
                })]
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
          className: "my-6 border-gray-400"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-wrap items-center md:justify-between justify-center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full md:w-4/12 px-4 mx-auto text-center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "text-sm text-gray-600 font-semibold py-1",
              children: ["Copyright \xA9 ", new Date().getFullYear(), " Notus React by", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "https://www.creative-tim.com?ref=nr-footer",
                className: "text-gray-600 hover:text-gray-900",
                children: "Creative Tim"
              }), "."]
            })
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__("tQzz");
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);

// CONCATENATED MODULE: ./src/views/Index.tsx




/*eslint-disable*/







const AdminBase = ({
  t
}) => {
  const changeLanguage = () => {
    i18n["i18n"].changeLanguage(i18n["i18n"].language === "ja" ? "en" : "ja");
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IndexNavbar, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: "header relative pt-16 items-center flex h-screen",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container mx-auto items-center flex flex-wrap",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "pt-32 sm:pt-0 TerminalMock",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: "font-semibold text-5xl text-white bg-black py-2",
              id: "typing",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_typist_default.a, {
                cursor: {
                  blink: true,
                  element: '_'
                },
                children: "$ hack city -t Tokyo"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "mt-4 text-lg leading-relaxed text-gray-400 py-4 bg-black",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_typist_default.a, {
                cursor: {
                  blink: true,
                  element: '_'
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_typist_default.a.Delay, {
                  ms: 2000
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                  children: t('concept_sub_1')
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_typist_default.a.Delay, {
                  ms: 500
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                  children: t('concept_sub_2')
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_typist_default.a.Delay, {
                  ms: 500
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "mt-12",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index",
                target: "_blank",
                style: {
                  background: '#F50057'
                },
                className: "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fas fa-arrow-alt-circle-down"
                }), " ", t('download_app')]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "https://github.com/creativetimofficial/notus-react?ref=nr-index",
                className: "github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-800 active:bg-pink-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150",
                style: {
                  background: '#444'
                },
                target: "_blank",
                children: t('hack_me_on_github')
              })]
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "https://cdna.artstation.com/p/assets/images/images/024/408/272/large/jean-nicolas-racicot-wd2-hackerspace-00.jpg?1582308883",
        alt: "...",
        className: "absolute b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 TopImage"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: "mt-48 md:mt-40 pb-40 relative bg-gray-200",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20",
        style: {
          transform: "translateZ(0)"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "absolute bottom-0 overflow-hidden",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "none",
          version: "1.1",
          viewBox: "0 0 2560 100",
          x: "0",
          y: "0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("polygon", {
            className: "text-gray-200 fill-current",
            points: "2560 0 2560 100 0 100"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-wrap items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "CWCardWrap w-10/12 md:w-6/12 lg:w-4/12 px-4 md:px-4 mr-auto ml-auto -mt-32",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-900",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                src: "https://thinklab.jins.com/jp/ja/home/assets/images/detail/detail_home_002.jpg",
                className: "w-full align-middle rounded-t-lg"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("blockquote", {
                className: "relative p-8 mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                  preserveAspectRatio: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 583 95",
                  className: "absolute left-0 w-full block h-95-px -top-94-px",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("polygon", {
                    points: "-30,95 583,95 583,65",
                    className: "text-gray-900 fill-current"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                  className: "text-xl font-bold text-white",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "fas fa-coffee text-xl"
                  }), " " + t('coworking_space')]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                  className: "text-md font-light mt-2 text-white",
                  children: [t('coworking_space_desc'), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), t('coworking_space_address')]
                })]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "block pb-6",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "\u9AD8\u901FWi-Fi"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Reserve"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Watch Broadcast"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Create Project"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Send Gifts"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Chat"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Online Talk"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full md:w-6/12 px-4 FeatureCards",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex flex-wrap",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-full md:w-6/12 px-4 ",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "relative flex flex-col mt-4 FeatureCard",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "px-4 py-5 flex-auto",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "https://thinklab.jins.com/jp/ja/home/assets/images/detail/detail_home_007.jpg"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                      className: "text-xl mb-1 mt3 font-semibold",
                      children: t('cafe_feature_1_title')
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "mb-4 text-gray-600",
                      children: t('cafe_feature_1_desc')
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "relative flex flex-col min-w-0 FeatureCard",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "px-4 py-5 flex-auto",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "https://crea.bunshun.jp/mwimgs/f/8/-/img_f84e5b944bdfd12793e7d7761853bfb5223392.jpg"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                      className: "text-xl mb-1 font-semibold",
                      children: t('cafe_feature_3_title')
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "mb-4 text-gray-600",
                      children: t('cafe_feature_3_desc')
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-full md:w-6/12 px-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "relative flex flex-col min-w-0 mt-4 FeatureCard",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "px-4 py-5 flex-auto",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "https://izilook.com/izilook/uploads/2017/06/room-up01.gif"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                      className: "text-xl mb-1 font-semibold",
                      children: t('cafe_feature_2_title')
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "mb-4 text-gray-600",
                      children: t('cafe_feature_2_desc')
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "relative flex flex-col min-w-0 FeatureCard",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "px-4 py-5 flex-auto",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "data:image/jpeg;base64,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"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                      className: "text-xl mb-1 font-semibold",
                      children: t('cafe_feature_4_title')
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "mb-4 text-gray-600",
                      children: t('cafe_feature_4_desc')
                    })]
                  })
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container mx-auto overflow-hidden pb-20",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-wrap items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full md:w-4/12 px-4 md:px-4 ml-auto mr-auto mt-48",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fas fa-mobile text-xl"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "text-3xl mb-2 font-semibold leading-normal",
              children: t('connect_by_the_app')
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: "text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700",
              children: [t('connect_by_the_app_desc'), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), t('connect_by_the_app_desc2')]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              href: "#",
              target: "_blank",
              className: "font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150",
              children: [t('view_detail'), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fa fa-angle-double-right ml-1 leading-relaxed"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full md:w-5/12 px-4 mr-auto ml-auto mt-32",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                src: "/img/component-btn.png",
                className: "w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                src: "/img/component-profile-card.png",
                className: "w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                src: "/img/component-info-card.png",
                className: "w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                src: "/img/component-info-2.png",
                className: "w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                src: "/img/component-menu.png",
                className: "w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                src: "/img/component-btn-pink.png",
                className: "w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-wrap items-center pt-32",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full md:w-6/12 px-4 mr-auto ml-auto mt-32",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "justify-center flex flex-wrap relative",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                alt: "...",
                style: {
                  borderRadius: 12
                },
                src: "/img/virtual.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full md:w-4/12 px-4 md:px-4 ml-auto mr-auto mt-48",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "text-3xl mb-2 font-semibold leading-normal",
              children: t('virtual_space')
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700",
              children: t('virtual_space_desc')
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700",
              children: t('virtual_space_desc2')
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "block pb-6",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "WEB"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "iOS"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Android"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "MacOS"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "Windows"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2",
                children: "YouTube Live"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              href: "#",
              target: "_blank",
              className: "font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150",
              children: [t('view_detail'), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fa fa-angle-double-right ml-1 leading-relaxed"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container mx-auto px-4 pb-32 pt-48 OnTheCode",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "items-center flex flex-wrap",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full md:w-5/12 ml-auto px-4 md:px-4",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "md:pr-12",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fas fa-file-alt text-xl"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "text-3xl font-semibold",
                children: t('everything_on_the_code')
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-4 text-lg leading-relaxed text-gray-600",
                children: t('everything_on_the_code_desc')
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                className: "list-none mt-6",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  className: "py-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fas fa-fingerprint"
                        })
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                        className: "text-gray-600",
                        children: t('everything_on_the_code_subtitle1')
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  className: "py-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "far fa-paper-plane"
                        })
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                        className: "text-gray-600",
                        children: t('everything_on_the_code_subtitle2')
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  className: "py-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fab fa-html5"
                        })
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                        className: "text-gray-600",
                        children: t('everything_on_the_code_subtitle3')
                      })
                    })]
                  })
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "...",
              className: "max-w-full rounded-lg shadow-xl",
              style: {
                transform: "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"
              },
              src: "/img/documentation.png"
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "justify-center text-center flex flex-wrap mt-24",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-full md:w-6/12 px-4 md:px-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            className: "font-semibold text-4xl",
            children: t('more_projects')
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-lg leading-relaxed mt-4 mb-4 text-gray-600"
          })]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "block relative z-1 bg-gray-700",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "justify-center flex flex-wrap",
          style: {
            marginTop: -40
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full lg:w-12/12 px-4  -mt-24",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex flex-wrap",
              style: {
                alignItems: 'center'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-full lg:w-4/12 px-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                  className: "text-xl font-semibold pb-4 text-center",
                  children: "Hackable Bar"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
                  to: "/auth/login",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      alt: "...",
                      className: "align-middle border-none max-w-full h-auto rounded-lg",
                      src: "http://www.thedrinksbusiness.com/wordpress/wp-content/uploads/2015/01/photo_others-640x410.jpg"
                    })
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-full lg:w-4/12 px-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                  className: "text-xl font-semibold pb-4 text-center",
                  children: "Hackable Inn"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
                  to: "/profile",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      alt: "...",
                      className: "align-middle border-none max-w-full h-auto rounded-lg",
                      src: "https://idecoration.co/wp-content/uploads/2019/06/Futuristic-houses-2.jpg"
                    })
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-full lg:w-4/12 px-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                  className: "text-xl font-semibold pb-4 text-center",
                  children: "Hackable Hotel"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"], {
                  to: "/landing",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      alt: "...",
                      className: "align-middle border-none max-w-full h-auto rounded-lg",
                      src: "https://specials-images.forbesimg.com/imageserve/5f6cd669c0e512578a581ae8/960x0.jpg?fit=scale"
                    })
                  })
                })]
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "py-20 bg-gray-700 overflow-hidden",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container mx-auto pb-64",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-wrap justify-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full md:w-5/12 px-4 md:px-4 ml-auto mr-auto md:mt-64",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fas fa-code-branch text-xl"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "text-3xl mb-2 font-semibold leading-normal text-white",
              children: t('open_source')
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: "text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "https://tailwindcss.com/?ref=creativetim",
                className: "text-gray-400",
                target: "_blank",
                children: "Hackable"
              }), " ", t('coming_soon')]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500",
              children: "Please Star!"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://github.com/creativetimofficial/notus-react?ref=nr-index",
              target: "_blank",
              className: "github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg",
              children: "Github Star"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              className: "fab fa-github text-gray-800 absolute -top-150-px -right-100 left-auto opacity-80 text-55"
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: "pb-16 bg-gray-300 relative pt-32",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20",
        style: {
          transform: "translateZ(0)"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "absolute bottom-0 overflow-hidden",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "none",
          version: "1.1",
          viewBox: "0 0 2560 100",
          x: "0",
          y: "0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("polygon", {
            className: "text-gray-300 fill-current",
            points: "2560 0 2560 100 0 100"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-4 relative z-10",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full text-center lg:w-8/12",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-4xl text-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                role: "img",
                "aria-label": "love",
                children: "\uD83D\uDE0D"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "font-semibold text-3xl",
              children: t('do_you_interested')
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-gray-600 text-lg leading-relaxed mt-4 mb-4",
              children: t('we_have_discord_community')
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "sm:block flex flex-col mt-10",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "https://discord.gg/6fKnQq9cPH",
                target: "_blank",
                className: "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150",
                children: t('join_discord')
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "https://github.com/creativetimofficial/notus-react?ref=nr-index",
                target: "_blank",
                className: "github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fab fa-github text-lg mr-1"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "Help With a Star"
                })]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "text-center mt-16"
            })]
          })
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Footer, {})]
  });
};

const Admin = Object(i18n["withTranslation"])(["common", "home"])(AdminBase);
// CONCATENATED MODULE: ./pages/index.tsx









const Home = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity: "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;900&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=DotGothic16&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;800&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["StaticRouter"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_router_dom_["Switch"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Route"], {
            path: "/about"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Route"], {
            path: "/users"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Route"], {
            path: "/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Admin, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = widths.map((w, i) => i === last ? `${w}px` : `(max-width: ${w}px) ${w}px`).join(', ');
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

const {
  localeSubpaths
} = __webpack_require__("KNus").default().publicRuntimeConfig;

const path = __webpack_require__("oyvS");

module.exports = new NextI18Next({
  otherLanguages: ["ja", "en"],
  defaultLanguage: "ja",
  localeSubpaths,
  localePath: path.resolve("./public/locales")
});

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "pccx":
/***/ (function(module, exports) {

module.exports = require("@popperjs/core");

/***/ }),

/***/ "tQzz":
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });