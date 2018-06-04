(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["G6Editor"] = factory();
	else
		root["G6Editor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};function n(r) {
      if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) {
        n.d(r, i, function (e) {
          return t[e];
        }.bind(null, i));
      }return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 372);
  }([,,,,,,,, function (t, e, n) {
    var r = {},
        i = n(182),
        o = n(230),
        a = n(30),
        u = n(138),
        s = n(229),
        c = n(228),
        f = n(224);a.mix(r, a, s, c, u, o, i, f), t.exports = r;
  },,,,, function (t, e) {
    var n = Array.isArray;t.exports = n;
  }, function (t, e) {
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };t.exports = function (t) {
      var e = void 0 === t ? "undefined" : n(t);return null != t && ("object" == e || "function" == e);
    };
  }, function (t, e) {
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };t.exports = function (t) {
      return null != t && "object" == (void 0 === t ? "undefined" : n(t));
    };
  }, function (t, e, n) {
    (function (t) {
      var n,
          r,
          i,
          o,
          a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      };o = function o() {
        return function (t) {
          var e = {};function n(r) {
            if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
          }return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
          }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
              return t.default;
            } : function () {
              return t;
            };return n.d(e, "a", e), e;
          }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, n.p = "", n(n.s = 114);
        }([function (t, e, n) {
          var r = n(17),
              i = n(88),
              o = {};r.merge(o, r, i, { mixin: function mixin(t, e) {
              var n = t.CFG ? "CFG" : "ATTRS";if (t && e) {
                t._mixins = e, t[n] = t[n] || {};var r = {};o.each(e, function (e) {
                  o.augment(t, e);var i = e[n];i && o.merge(r, i);
                }), t[n] = o.merge(r, t[n]);
              }
            } }), t.exports = o;
        }, function (t, e, n) {
          var r = n(0),
              i = n(91),
              o = n(2),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.ATTRS = {}, r.extend(a, i), r.augment(a, { isShape: !0, createPath: function createPath() {}, afterPath: function afterPath() {}, drawInner: function drawInner(t) {
              var e = this.__attrs;this.createPath(t);var n = t.globalAlpha;if (this.hasFill()) {
                var i = e.fillOpacity;r.isNil(i) || 1 === i ? t.fill() : (t.globalAlpha = i, t.fill(), t.globalAlpha = n);
              }if (this.hasStroke() && this.__attrs.lineWidth > 0) {
                var o = e.strokeOpacity;r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke();
              }this.afterPath(t);
            }, isPointInPath: function isPointInPath() {
              return !1;
            }, isHitBox: function isHitBox() {
              return !0;
            }, isHit: function isHit(t, e) {
              var n = [t, e, 1];if (this.invert(n), this.isHitBox()) {
                var r = this.getBBox();if (r && !o.box(r.minX, r.maxX, r.minY, r.maxY, n[0], n[1])) return !1;
              }var i = this.__attrs.clip;return i ? !!i.inside(t, e) && this.isPointInPath(n[0], n[1]) : this.isPointInPath(n[0], n[1]);
            }, calculateBox: function calculateBox() {
              return null;
            }, getHitLineWidth: function getHitLineWidth() {
              var t = this.__attrs,
                  e = t.lineAppendWidth || 0;return (t.lineWidth || 0) + e;
            }, clearTotalMatrix: function clearTotalMatrix() {
              this.__cfg.totalMatrix = null, this.__cfg.region = null;
            }, clearBBox: function clearBBox() {
              this.__cfg.box = null, this.__cfg.region = null;
            }, getBBox: function getBBox() {
              var t = this.__cfg.box;return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this.__cfg.box = t), t;
            } }), t.exports = a;
        }, function (t, e, n) {
          var r = n(52),
              i = n(53),
              o = n(32),
              a = n(54);t.exports = { line: function line(t, e, n, i, o, a, u) {
              var s = r.box(t, e, n, i, o);if (!this.box(s.minX, s.maxX, s.minY, s.maxY, a, u)) return !1;var c = r.pointDistance(t, e, n, i, a, u);return !isNaN(c) && c <= o / 2;
            }, polyline: function polyline(t, e, n, r) {
              var i = t.length - 1;if (i < 1) return !1;for (var o = 0; o < i; o++) {
                var a = t[o][0],
                    u = t[o][1],
                    s = t[o + 1][0],
                    c = t[o + 1][1];if (this.line(a, u, s, c, e, n, r)) return !0;
              }return !1;
            }, cubicline: function cubicline(t, e, n, r, i, a, u, s, c, f, h) {
              return o.pointDistance(t, e, n, r, i, a, u, s, f, h) <= c / 2;
            }, quadraticline: function quadraticline(t, e, n, r, o, a, u, s, c) {
              return i.pointDistance(t, e, n, r, o, a, s, c) <= u / 2;
            }, arcline: function arcline(t, e, n, r, i, o, u, s, c) {
              return a.pointDistance(t, e, n, r, i, o, s, c) <= u / 2;
            }, rect: function rect(t, e, n, r, i, o) {
              return t <= i && i <= t + n && e <= o && o <= e + r;
            }, circle: function circle(t, e, n, r, i) {
              return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2);
            }, box: function box(t, e, n, r, i, o) {
              return t <= i && i <= e && n <= o && o <= r;
            } };
        }, function (t, e, n) {
          var r = n(17),
              i = n(231),
              o = n(232),
              a = n(233);a.angle = function (t, e) {
            var n = a.dot(t, e) / (a.length(t) * a.length(e));return Math.acos(r.clamp(n, -1, 1));
          }, a.direction = function (t, e) {
            return t[0] * e[1] - e[0] * t[1];
          }, a.angleTo = function (t, e, n) {
            var r = a.angle(t, e),
                i = a.direction(t, e) >= 0;return n ? i ? 2 * Math.PI - r : r : i ? r : 2 * Math.PI - r;
          }, a.vertical = function (t, e, n) {
            return n ? (t[0] = e[1], t[1] = -1 * e[0]) : (t[0] = -1 * e[1], t[1] = e[0]), t;
          }, i.translate = function (t, e, n) {
            var r = new Array(9);return i.fromTranslation(r, n), i.multiply(t, r, e);
          }, i.rotate = function (t, e, n) {
            var r = new Array(9);return i.fromRotation(r, n), i.multiply(t, r, e);
          }, i.scale = function (t, e, n) {
            var r = new Array(9);return i.fromScaling(r, n), i.multiply(t, r, e);
          }, t.exports = { mat3: i, vec2: a, vec3: o, transform: function transform(t, e) {
              return t = r.clone(t), r.each(e, function (e) {
                switch (e[0]) {case "t":
                    i.translate(t, t, [e[1], e[2]]);break;case "s":
                    i.scale(t, t, [e[1], e[2]]);break;case "r":
                    i.rotate(t, t, e[1]);break;case "m":
                    i.multiply(t, t, e[1]);break;default:
                    return !1;}
              }), t;
            } };
        }, function (t, e) {
          var n = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          };t.exports = function (t) {
            return null != t && "object" == (void 0 === t ? "undefined" : n(t));
          };
        }, function (t, e, n) {
          var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          },
              i = n(57),
              o = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
              u = i || o || Function("return this")();t.exports = u;
        }, function (t, e) {
          var n = Array.isArray;t.exports = n;
        }, function (t, e, n) {
          var r = n(11),
              i = n(117),
              o = n(118),
              a = "[object Null]",
              u = "[object Undefined]",
              s = r ? r.toStringTag : void 0;t.exports = function (t) {
            return null == t ? void 0 === t ? u : a : s && s in Object(t) ? i(t) : o(t);
          };
        }, function (t, e) {
          var n = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          };t.exports = function (t) {
            var e = void 0 === t ? "undefined" : n(t);return null != t && ("object" == e || "function" == e);
          };
        }, function (t, e, n) {
          var r = n(22),
              i = n(62);t.exports = function (t) {
            return null != t && i(t.length) && !r(t);
          };
        }, function (t, e, n) {
          var r = n(125),
              i = n(128);t.exports = function (t, e) {
            var n = i(t, e);return r(n) ? n : void 0;
          };
        }, function (t, e, n) {
          var r = n(5).Symbol;t.exports = r;
        }, function (t, e, n) {
          var r = n(124),
              i = n(33),
              o = n(129),
              a = n(130),
              u = n(131),
              s = n(7),
              c = n(61),
              f = c(r),
              h = c(i),
              l = c(o),
              p = c(a),
              d = c(u),
              v = s;(r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || i && "[object Map]" != v(new i()) || o && "[object Promise]" != v(o.resolve()) || a && "[object Set]" != v(new a()) || u && "[object WeakMap]" != v(new u())) && (v = function v(t) {
            var e = s(t),
                n = "[object Object]" == e ? t.constructor : void 0,
                r = n ? c(n) : "";if (r) switch (r) {case f:
                return "[object DataView]";case h:
                return "[object Map]";case l:
                return "[object Promise]";case p:
                return "[object Set]";case d:
                return "[object WeakMap]";}return e;
          }), t.exports = v;
        }, function (t, e, n) {
          var r = n(39),
              i = n(40);t.exports = function (t, e, n, o) {
            var a = !n;n || (n = {});for (var u = -1, s = e.length; ++u < s;) {
              var c = e[u],
                  f = o ? o(n[c], t[c], c, n, t) : void 0;void 0 === f && (f = t[c]), a ? i(n, c, f) : r(n, c, f);
            }return n;
          };
        }, function (t, e, n) {
          var r = n(67),
              i = n(59),
              o = n(9);t.exports = function (t) {
            return o(t) ? r(t) : i(t);
          };
        }, function (t, e, n) {
          "use strict";
          var r = n(49);n.d(e, "a", function () {
            return r.e;
          }), n.d(e, "f", function () {
            return r.g;
          }), n.d(e, "d", function () {
            return r.f;
          });var i = n(250);n.d(e, "e", function () {
            return i.a;
          }), n.d(e, "c", function () {
            return i.b;
          });var o = n(251);n.d(e, "b", function () {
            return o.a;
          });
        }, function (t, e, n) {
          var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          },
              i = n(56),
              o = n(0),
              u = Math.PI,
              s = Math.sin,
              c = Math.cos,
              f = Math.atan2,
              h = 10,
              l = u / 3;function p(t, e, n, r, i, o) {
            var a = void 0,
                p = void 0,
                d = void 0,
                v = void 0,
                g = void 0,
                y = void 0,
                m = void 0;if (!e.fill) {
              var x = e.arrowLength || h,
                  b = e.arrowAngle ? e.arrowAngle * u / 180 : l;m = f(o - r, i - n), m -= u, g = e.lineWidth * c(m), y = e.lineWidth * s(m), a = i + x * c(m + b / 2), p = o + x * s(m + b / 2), d = i + x * c(m - b / 2), v = o + x * s(m - b / 2), t.beginPath(), t.moveTo(a - g, p - y), t.lineTo(i - g, o - y), t.lineTo(d - g, v - y), t.moveTo(i - g, o - y), t.lineTo(i + g, o + y), t.moveTo(i, o), t.stroke();
            }
          }function d(t, e, n, r, a, u, s) {
            var c = s.__attrs,
                f = c.symbol,
                h = c.x || a,
                l = c.y || u,
                p = c.r || e.lineWidth;o.isFunction(f) || (f = i.Symbols[f || "triangle"]);var d = 0,
                v = n - a,
                g = r - u;0 === g ? d = v < 0 ? Math.PI / 2 : 270 * Math.PI / 180 : v >= 0 && g > 0 ? d = -Math.atan(v / g) : v <= 0 && g < 0 ? d = Math.PI - Math.atan(v / g) : v > 0 && g < 0 ? d = Math.PI + Math.atan(-v / g) : v < 0 && g > 0 && (d = Math.atan(v / -g)), t.save(), t.beginPath(), t.translate(h, l), t.rotate(d), t.translate(-h, -l), f(h, l, p, t, s), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = s.attr("fill") || t.strokeStyle, t.fill(), t.restore();
          }t.exports = { addStartArrow: function addStartArrow(t, e, n, i, o, a) {
              "object" === r(e.startArrow) ? d(t, e, n, i, o, a, e.startArrow) : e.startArrow && p(t, e, n, i, o, a);
            }, addEndArrow: function addEndArrow(t, e, n, i, o, a) {
              "object" === r(e.endArrow) ? d(t, e, n, i, o, a, e.endArrow) : e.endArrow && p(t, e, n, i, o, a);
            } };
        }, function (t, e, n) {
          var r = Math.PI / 180,
              i = 180 / Math.PI;t.exports = { isFunction: n(22), isObject: n(8), isBoolean: n(119), isNil: n(120), isString: n(58), isArray: n(6), isNumber: n(121), isEmpty: n(122), uniqueId: n(135), clone: n(138), assign: n(181), merge: n(189), upperFirst: n(196), remove: n(202), each: n(210), isEqual: n(215), toArray: n(225), extend: function extend(t, e, n, r) {
              this.isFunction(e) || (n = e, e = t, t = function t() {});var i = Object.create ? function (t, e) {
                return Object.create(t, { constructor: { value: e } });
              } : function (t, e) {
                function n() {}n.prototype = t;var r = new n();return r.constructor = e, r;
              },
                  o = i(e.prototype, t);return t.prototype = this.merge(o, t.prototype), t.superclass = i(e.prototype, e), this.merge(o, n), this.merge(t, r), t;
            }, augment: function augment(t) {
              for (var e = this.toArray(arguments), n = 1; n < e.length; n++) {
                var r = e[n];this.isFunction(r) && (r = r.prototype), this.merge(t.prototype, r);
              }
            }, isNumberEqual: function isNumberEqual(t, e) {
              return Math.abs(t - e) < 1e-5;
            }, toRadian: function toRadian(t) {
              return r * t;
            }, toDegree: function toDegree(t) {
              return i * t;
            }, mod: function mod(t, e) {
              return (t % e + e) % e;
            }, clamp: function clamp(t, e, n) {
              return t < e ? e : t > n ? n : t;
            } };
        }, function (t, e) {
          var n = Object.prototype;t.exports = function (t) {
            var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || n);
          };
        }, function (t, e, n) {
          (function (t) {
            var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
              return void 0 === t ? "undefined" : a(t);
            } : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
            },
                i = n(5),
                o = n(133),
                u = "object" == r(e) && e && !e.nodeType && e,
                s = u && "object" == r(t) && t && !t.nodeType && t,
                c = s && s.exports === u ? i.Buffer : void 0,
                f = (c ? c.isBuffer : void 0) || o;t.exports = f;
          }).call(e, n(35)(t));
        }, function (t, e) {
          t.exports = function (t, e) {
            return t === e || t != t && e != e;
          };
        }, function (t, e, n) {
          "use strict";
          e.c = function (t, e) {
            var n = e - t;return n ? i(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Object(r.a)(isNaN(t) ? e : t);
          }, e.b = function (t) {
            return 1 == (t = +t) ? o : function (e, n) {
              return n - e ? function (t, e, n) {
                return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
                  return Math.pow(t + r * e, n);
                };
              }(e, n, t) : Object(r.a)(isNaN(e) ? n : e);
            };
          }, e.a = o;var r = n(95);function i(t, e) {
            return function (n) {
              return t + n * e;
            };
          }function o(t, e) {
            var n = e - t;return n ? i(t, n) : Object(r.a)(isNaN(t) ? e : t);
          }
        }, function (t, e, n) {
          var r = n(7),
              i = n(8),
              o = "[object AsyncFunction]",
              a = "[object Function]",
              u = "[object GeneratorFunction]",
              s = "[object Proxy]";t.exports = function (t) {
            if (!i(t)) return !1;var e = r(t);return e == a || e == u || e == o || e == s;
          };
        }, function (t, e, n) {
          var r = n(134),
              i = n(24),
              o = n(36),
              a = o && o.isTypedArray,
              u = a ? i(a) : r;t.exports = u;
        }, function (t, e) {
          t.exports = function (t) {
            return function (e) {
              return t(e);
            };
          };
        }, function (t, e, n) {
          var r = n(140),
              i = n(141),
              o = n(142),
              a = n(143),
              u = n(144);function s(t) {
            var e = -1,
                n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
              var r = t[e];this.set(r[0], r[1]);
            }
          }s.prototype.clear = r, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = u, t.exports = s;
        }, function (t, e, n) {
          var r = n(20);t.exports = function (t, e) {
            for (var n = t.length; n--;) {
              if (r(t[n][0], e)) return n;
            }return -1;
          };
        }, function (t, e, n) {
          var r = n(10)(Object, "create");t.exports = r;
        }, function (t, e, n) {
          var r = n(158);t.exports = function (t, e) {
            var n = t.__data__;return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
          };
        }, function (t, e, n) {
          var r = n(67),
              i = n(165),
              o = n(9);t.exports = function (t) {
            return o(t) ? r(t, !0) : i(t);
          };
        }, function (t, e) {
          t.exports = function (t, e) {
            var n = -1,
                r = t.length;for (e || (e = Array(r)); ++n < r;) {
              e[n] = t[n];
            }return e;
          };
        }, function (t, e, n) {
          "use strict";
          e.a = function (t, e) {
            return e -= t = +t, function (n) {
              return t + e * n;
            };
          };
        }, function (t, e, n) {
          var r = n(0),
              i = n(3).vec2;function o(t, e, n, r, i) {
            var o = 1 - i;return o * o * (o * r + 3 * i * n) + i * i * (i * t + 3 * o * e);
          }function a(t, e, n, r, a, u, s, c, f, h, l) {
            var p = void 0,
                d = .005,
                v = 1 / 0,
                g = void 0,
                y = void 0,
                m = void 0,
                x = void 0,
                b = void 0,
                _ = void 0,
                w = void 0,
                M = [f, h];for (g = 0; g < 1; g += .05) {
              y = [o(t, n, a, s, g), o(e, r, u, c, g)], (m = i.squaredDistance(M, y)) < v && (p = g, v = m);
            }v = 1 / 0;for (var S = 0; S < 32 && !(d < 1e-4); S++) {
              w = p + d, y = [o(t, n, a, s, _ = p - d), o(e, r, u, c, _)], m = i.squaredDistance(M, y), _ >= 0 && m < v ? (p = _, v = m) : (b = [o(t, n, a, s, w), o(e, r, u, c, w)], x = i.squaredDistance(M, b), w <= 1 && x < v ? (p = w, v = x) : d *= .5);
            }return l && (l.x = o(t, n, a, s, p), l.y = o(e, r, u, c, p)), Math.sqrt(v);
          }function u(t, e, n, r, i) {
            return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n;
          }t.exports = { at: o, derivativeAt: function derivativeAt(t, e, n, r, i) {
              var o = 1 - i;return 3 * (((e - t) * o + 2 * (n - e) * i) * o + (r - n) * i * i);
            }, projectPoint: function projectPoint(t, e, n, r, i, o, u, s, c, f) {
              var h = {};return a(t, e, n, r, i, o, u, s, c, f, h), h;
            }, pointDistance: a, extrema: function extrema(t, e, n, i) {
              var o = 3 * t - 9 * e + 9 * n - 3 * i,
                  a = 6 * e - 12 * n + 6 * i,
                  u = 3 * n - 3 * i,
                  s = [],
                  c = void 0,
                  f = void 0,
                  h = void 0;if (r.isNumberEqual(o, 0)) r.isNumberEqual(a, 0) || (c = -u / a) >= 0 && c <= 1 && s.push(c);else {
                var l = a * a - 4 * o * u;r.isNumberEqual(l, 0) ? s.push(-a / (2 * o)) : l > 0 && (f = (-a - (h = Math.sqrt(l))) / (2 * o), (c = (-a + h) / (2 * o)) >= 0 && c <= 1 && s.push(c), f >= 0 && f <= 1 && s.push(f));
              }return s;
            }, len: function len(t, e, n, i, o, a, s, c, f) {
              r.isNil(f) && (f = 1);for (var h = (f = f > 1 ? 1 : f < 0 ? 0 : f) / 2, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, v = 0; v < 12; v++) {
                var g = h * l[v] + h,
                    y = u(g, t, n, o, s),
                    m = u(g, e, i, a, c),
                    x = y * y + m * m;d += p[v] * Math.sqrt(x);
              }return h * d;
            } };
        }, function (t, e, n) {
          var r = n(10)(n(5), "Map");t.exports = r;
        }, function (t, e, n) {
          var r = n(132),
              i = n(4),
              o = Object.prototype,
              a = o.hasOwnProperty,
              u = o.propertyIsEnumerable,
              s = r(function () {
            return arguments;
          }()) ? r : function (t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee");
          };t.exports = s;
        }, function (t, e) {
          t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
                return t.l;
              } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
                return t.i;
              } }), t.webpackPolyfill = 1), t;
          };
        }, function (t, e, n) {
          (function (t) {
            var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
              return void 0 === t ? "undefined" : a(t);
            } : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
            },
                i = n(57),
                o = "object" == r(e) && e && !e.nodeType && e,
                u = o && "object" == r(t) && t && !t.nodeType && t,
                s = u && u.exports === o && i.process,
                c = function () {
              try {
                var t = u && u.require && u.require("util").types;return t || s && s.binding && s.binding("util");
              } catch (t) {}
            }();t.exports = c;
          }).call(e, n(35)(t));
        }, function (t, e) {
          t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) {
              i[n] = e(t[n], n, t);
            }return i;
          };
        }, function (t, e, n) {
          var r = n(25),
              i = n(145),
              o = n(146),
              a = n(147),
              u = n(148),
              s = n(149);function c(t) {
            var e = this.__data__ = new r(t);this.size = e.size;
          }c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = u, c.prototype.set = s, t.exports = c;
        }, function (t, e, n) {
          var r = n(40),
              i = n(20),
              o = Object.prototype.hasOwnProperty;t.exports = function (t, e, n) {
            var a = t[e];o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n);
          };
        }, function (t, e, n) {
          var r = n(66);t.exports = function (t, e, n) {
            "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n;
          };
        }, function (t, e, n) {
          var r = n(168),
              i = n(70),
              o = Object.prototype.propertyIsEnumerable,
              a = Object.getOwnPropertySymbols,
              u = a ? function (t) {
            return null == t ? [] : (t = Object(t), r(a(t), function (e) {
              return o.call(t, e);
            }));
          } : i;t.exports = u;
        }, function (t, e, n) {
          var r = n(60)(Object.getPrototypeOf, Object);t.exports = r;
        }, function (t, e, n) {
          var r = n(75);t.exports = function (t) {
            var e = new t.constructor(t.byteLength);return new r(e).set(new r(t)), e;
          };
        }, function (t, e) {
          t.exports = function (t) {
            return t;
          };
        }, function (t, e) {
          var n = { EPSILON: 1e-6 };n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random, n.ENABLE_SIMD = !1, n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && "SIMD" in this, n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE, n.setMatrixArrayType = function (t) {
            n.ARRAY_TYPE = t;
          };var r = Math.PI / 180;n.toRadian = function (t) {
            return t * r;
          }, n.equals = function (t, e) {
            return Math.abs(t - e) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(e));
          }, t.exports = n;
        }, function (t, e, n) {
          var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          },
              i = n(17),
              o = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029",
              u = new RegExp("([a-z])[" + o + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + o + "]*,?[" + o + "]*)+)", "ig"),
              s = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + o + "]*,?[" + o + "]*", "ig"),
              c = function c(t) {
            if (!t) return null;if ((void 0 === t ? "undefined" : r(t)) === r([])) return t;var e = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                n = [];return String(t).replace(u, function (t, r, i) {
              var o = [],
                  a = r.toLowerCase();if (i.replace(s, function (t, e) {
                e && o.push(+e);
              }), "m" === a && o.length > 2 && (n.push([r].concat(o.splice(0, 2))), a = "l", r = "m" === r ? "l" : "L"), "o" === a && 1 === o.length && n.push([r, o[0]]), "r" === a) n.push([r].concat(o));else for (; o.length >= e[a] && (n.push([r].concat(o.splice(0, e[a]))), e[a]);) {}
            }), n;
          },
              f = function f(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
              var o = [{ x: +t[r - 2], y: +t[r - 1] }, { x: +t[r], y: +t[r + 1] }, { x: +t[r + 2], y: +t[r + 3] }, { x: +t[r + 4], y: +t[r + 5] }];e ? r ? i - 4 === r ? o[3] = { x: +t[0], y: +t[1] } : i - 2 === r && (o[2] = { x: +t[0], y: +t[1] }, o[3] = { x: +t[2], y: +t[3] }) : o[0] = { x: +t[i - 2], y: +t[i - 1] } : i - 4 === r ? o[3] = o[2] : r || (o[0] = { x: +t[r], y: +t[r + 1] }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y]);
            }return n;
          },
              h = function h(t, e, n, r, i) {
            var o = [];if (null === i && null === r && (r = n), t = +t, e = +e, n = +n, r = +r, null !== i) {
              var a = Math.PI / 180,
                  u = t + n * Math.cos(-r * a),
                  s = t + n * Math.cos(-i * a);o = [["M", u, e + n * Math.sin(-r * a)], ["A", n, n, 0, +(i - r > 180), 0, s, e + n * Math.sin(-i * a)]];
            } else o = [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];return o;
          },
              l = function l(t) {
            if (!(t = c(t)) || !t.length) return [["M", 0, 0]];var e = [],
                n = 0,
                r = 0,
                i = 0,
                o = 0,
                a = 0,
                u = void 0,
                s = void 0;"M" === t[0][0] && (i = n = +t[0][1], o = r = +t[0][2], a++, e[0] = ["M", n, r]);for (var l, p, d = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), v = a, g = t.length; v < g; v++) {
              if (e.push(l = []), (u = (p = t[v])[0]) !== u.toUpperCase()) switch (l[0] = u.toUpperCase(), l[0]) {case "A":
                  l[1] = p[1], l[2] = p[2], l[3] = p[3], l[4] = p[4], l[5] = p[5], l[6] = +p[6] + n, l[7] = +p[7] + r;break;case "V":
                  l[1] = +p[1] + r;break;case "H":
                  l[1] = +p[1] + n;break;case "R":
                  for (var y = 2, m = (s = [n, r].concat(p.slice(1))).length; y < m; y++) {
                    s[y] = +s[y] + n, s[++y] = +s[y] + r;
                  }e.pop(), e = e.concat(f(s, d));break;case "O":
                  e.pop(), (s = h(n, r, p[1], p[2])).push(s[0]), e = e.concat(s);break;case "U":
                  e.pop(), e = e.concat(h(n, r, p[1], p[2], p[3])), l = ["U"].concat(e[e.length - 1].slice(-2));break;case "M":
                  i = +p[1] + n, o = +p[2] + r;break;default:
                  for (var x = 1, b = p.length; x < b; x++) {
                    l[x] = +p[x] + (x % 2 ? n : r);
                  }} else if ("R" === u) s = [n, r].concat(p.slice(1)), e.pop(), e = e.concat(f(s, d)), l = ["R"].concat(p.slice(-2));else if ("O" === u) e.pop(), (s = h(n, r, p[1], p[2])).push(s[0]), e = e.concat(s);else if ("U" === u) e.pop(), e = e.concat(h(n, r, p[1], p[2], p[3])), l = ["U"].concat(e[e.length - 1].slice(-2));else for (var _ = 0, w = p.length; _ < w; _++) {
                l[_] = p[_];
              }if ("O" !== (u = u.toUpperCase())) switch (l[0]) {case "Z":
                  n = +i, r = +o;break;case "H":
                  n = l[1];break;case "V":
                  r = l[1];break;case "M":
                  i = l[l.length - 2], o = l[l.length - 1];break;default:
                  n = l[l.length - 2], r = l[l.length - 1];}
            }return e;
          },
              p = function p(t, e, n, r) {
            return [t, e, n, r, n, r];
          },
              d = function d(t, e, n, r, i, o) {
            return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o];
          },
              v = function v(t, e) {
            var n = l(t),
                r = e && l(e),
                i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                a = [],
                u = [],
                s = "",
                c = "",
                f = void 0,
                h = function h(t, e, n) {
              var r = void 0,
                  i = void 0;if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];switch (!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0]) {case "M":
                  e.X = t[1], e.Y = t[2];break;case "A":
                  t = ["C"].concat(function t(e, n, r, i, o, a, u, s, c, f) {
                    r === i && (r += 1);var h = 120 * Math.PI / 180,
                        l = Math.PI / 180 * (+o || 0),
                        p = [],
                        d = void 0,
                        v = void 0,
                        g = void 0,
                        y = void 0,
                        m = void 0,
                        x = function x(t, e, n) {
                      return { x: t * Math.cos(n) - e * Math.sin(n), y: t * Math.sin(n) + e * Math.cos(n) };
                    };if (f) v = f[0], g = f[1], y = f[2], m = f[3];else {
                      e = (d = x(e, n, -l)).x, n = d.y, s = (d = x(s, c, -l)).x, c = d.y, e === s && n === c && (s += 1, c += 1);var b = (e - s) / 2,
                          _ = (n - c) / 2,
                          w = b * b / (r * r) + _ * _ / (i * i);w > 1 && (r *= w = Math.sqrt(w), i *= w);var M = r * r,
                          S = i * i,
                          E = (a === u ? -1 : 1) * Math.sqrt(Math.abs((M * S - M * _ * _ - S * b * b) / (M * _ * _ + S * b * b)));y = E * r * _ / i + (e + s) / 2, m = E * -i * b / r + (n + c) / 2, v = Math.asin(((n - m) / i).toFixed(9)), g = Math.asin(((c - m) / i).toFixed(9)), v = e < y ? Math.PI - v : v, g = s < y ? Math.PI - g : g, v < 0 && (v = 2 * Math.PI + v), g < 0 && (g = 2 * Math.PI + g), u && v > g && (v -= 2 * Math.PI), !u && g > v && (g -= 2 * Math.PI);
                    }var j = g - v;if (Math.abs(j) > h) {
                      var A = g,
                          O = s,
                          P = c;g = v + h * (u && g > v ? 1 : -1), p = t(s = y + r * Math.cos(g), c = m + i * Math.sin(g), r, i, o, 0, u, O, P, [g, A, y, m]);
                    }j = g - v;var I = Math.cos(v),
                        T = Math.sin(v),
                        C = Math.cos(g),
                        k = Math.sin(g),
                        F = Math.tan(j / 4),
                        N = 4 / 3 * r * F,
                        L = 4 / 3 * i * F,
                        B = [e, n],
                        R = [e + N * T, n - L * I],
                        D = [s + N * k, c - L * C],
                        Y = [s, c];if (R[0] = 2 * B[0] - R[0], R[1] = 2 * B[1] - R[1], f) return [R, D, Y].concat(p);for (var X = [], G = 0, z = (p = [R, D, Y].concat(p).join().split(",")).length; G < z; G++) {
                      X[G] = G % 2 ? x(p[G - 1], p[G], l).y : x(p[G], p[G + 1], l).x;
                    }return X;
                  }.apply(0, [e.x, e.y].concat(t.slice(1))));break;case "S":
                  "C" === n || "S" === n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));break;case "T":
                  "Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(d(e.x, e.y, e.qx, e.qy, t[1], t[2]));break;case "Q":
                  e.qx = t[1], e.qy = t[2], t = ["C"].concat(d(e.x, e.y, t[1], t[2], t[3], t[4]));break;case "L":
                  t = ["C"].concat(p(e.x, e.y, t[1], t[2]));break;case "H":
                  t = ["C"].concat(p(e.x, e.y, t[1], e.y));break;case "V":
                  t = ["C"].concat(p(e.x, e.y, e.x, t[1]));break;case "Z":
                  t = ["C"].concat(p(e.x, e.y, e.X, e.Y));}return t;
            },
                v = function v(t, e) {
              if (t[e].length > 7) {
                t[e].shift();for (var i = t[e]; i.length;) {
                  a[e] = "A", r && (u[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                }t.splice(e, 1), f = Math.max(n.length, r && r.length || 0);
              }
            },
                g = function g(t, e, i, o, a) {
              t && e && "M" === t[a][0] && "M" !== e[a][0] && (e.splice(a, 0, ["M", o.x, o.y]), i.bx = 0, i.by = 0, i.x = t[a][1], i.y = t[a][2], f = Math.max(n.length, r && r.length || 0));
            };f = Math.max(n.length, r && r.length || 0);for (var y = 0; y < f; y++) {
              n[y] && (s = n[y][0]), "C" !== s && (a[y] = s, y && (c = a[y - 1])), n[y] = h(n[y], i, c), "A" !== a[y] && "C" === s && (a[y] = "C"), v(n, y), r && (r[y] && (s = r[y][0]), "C" !== s && (u[y] = s, y && (c = u[y - 1])), r[y] = h(r[y], o, c), "A" !== u[y] && "C" === s && (u[y] = "C"), v(r, y)), g(n, r, i, o, y), g(r, n, o, i, y);var m = n[y],
                  x = r && r[y],
                  b = m.length,
                  _ = r && x.length;i.x = m[b - 2], i.y = m[b - 1], i.bx = parseFloat(m[b - 4]) || i.x, i.by = parseFloat(m[b - 3]) || i.y, o.bx = r && (parseFloat(x[_ - 4]) || o.x), o.by = r && (parseFloat(x[_ - 3]) || o.y), o.x = r && x[_ - 2], o.y = r && x[_ - 1];
            }return r ? [n, r] : n;
          },
              g = /,?([a-z]),?/gi,
              y = function y(t) {
            return t.join(",").replace(g, "$1");
          },
              m = function m(t, e, n, r, i) {
            return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n;
          },
              x = function x(t, e, n, r, i, o, a, u, s) {
            null === s && (s = 1);for (var c = (s = s > 1 ? 1 : s < 0 ? 0 : s) / 2, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], l = 0, p = 0; p < 12; p++) {
              var d = c * f[p] + c,
                  v = m(d, t, n, i, a),
                  g = m(d, e, r, o, u),
                  y = v * v + g * g;l += h[p] * Math.sqrt(y);
            }return c * l;
          },
              b = function b(t, e, n, r, i, o, a, u) {
            if (!(Math.max(t, n) < Math.min(i, a) || Math.min(t, n) > Math.max(i, a) || Math.max(e, r) < Math.min(o, u) || Math.min(e, r) > Math.max(o, u))) {
              var s = (t - n) * (o - u) - (e - r) * (i - a);if (s) {
                var c = ((t * r - e * n) * (i - a) - (t - n) * (i * u - o * a)) / s,
                    f = ((t * r - e * n) * (o - u) - (e - r) * (i * u - o * a)) / s,
                    h = +c.toFixed(2),
                    l = +f.toFixed(2);if (!(h < +Math.min(t, n).toFixed(2) || h > +Math.max(t, n).toFixed(2) || h < +Math.min(i, a).toFixed(2) || h > +Math.max(i, a).toFixed(2) || l < +Math.min(e, r).toFixed(2) || l > +Math.max(e, r).toFixed(2) || l < +Math.min(o, u).toFixed(2) || l > +Math.max(o, u).toFixed(2))) return { x: c, y: f };
              }
            }
          },
              _ = function _(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height;
          },
              w = function w(t, e, n, r, i) {
            if (i) return [["M", +t + +i, e], ["l", n - 2 * i, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - 2 * i], ["a", i, i, 0, 0, 1, -i, i], ["l", 2 * i - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, 2 * i - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]];var o = [["M", t, e], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]];return o.parsePathArray = y, o;
          },
              M = function M(t, e, n, r) {
            return null === t && (t = e = n = r = 0), null === e && (e = t.y, n = t.width, r = t.height, t = t.x), { x: t, y: e, width: n, w: n, height: r, h: r, x2: t + n, y2: e + r, cx: t + n / 2, cy: e + r / 2, r1: Math.min(n, r) / 2, r2: Math.max(n, r) / 2, r0: Math.sqrt(n * n + r * r) / 2, path: w(t, e, n, r), vb: [t, e, n, r].join(" ") };
          },
              S = function S(t, e, n, r, o, a, u, s) {
            i.isArray(t) || (t = [t, e, n, r, o, a, u, s]);var c = function (t, e, n, r, i, o, a, u) {
              for (var s = [], c = [[], []], f = void 0, h = void 0, l = void 0, p = void 0, d = 0; d < 2; ++d) {
                if (0 === d ? (h = 6 * t - 12 * n + 6 * i, f = -3 * t + 9 * n - 9 * i + 3 * a, l = 3 * n - 3 * t) : (h = 6 * e - 12 * r + 6 * o, f = -3 * e + 9 * r - 9 * o + 3 * u, l = 3 * r - 3 * e), Math.abs(f) < 1e-12) {
                  if (Math.abs(h) < 1e-12) continue;(p = -l / h) > 0 && p < 1 && s.push(p);
                } else {
                  var v = h * h - 4 * l * f,
                      g = Math.sqrt(v);if (!(v < 0)) {
                    var y = (-h + g) / (2 * f);y > 0 && y < 1 && s.push(y);var m = (-h - g) / (2 * f);m > 0 && m < 1 && s.push(m);
                  }
                }
              }for (var x = s.length, b = x, _ = void 0; x--;) {
                _ = 1 - (p = s[x]), c[0][x] = _ * _ * _ * t + 3 * _ * _ * p * n + 3 * _ * p * p * i + p * p * p * a, c[1][x] = _ * _ * _ * e + 3 * _ * _ * p * r + 3 * _ * p * p * o + p * p * p * u;
              }return c[0][b] = t, c[1][b] = e, c[0][b + 1] = a, c[1][b + 1] = u, c[0].length = c[1].length = b + 2, { min: { x: Math.min.apply(0, c[0]), y: Math.min.apply(0, c[1]) }, max: { x: Math.max.apply(0, c[0]), y: Math.max.apply(0, c[1]) } };
            }.apply(null, t);return M(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y);
          },
              E = function E(t, e, n, r, i, o, a, u, s) {
            var c = 1 - s,
                f = Math.pow(c, 3),
                h = Math.pow(c, 2),
                l = s * s,
                p = l * s,
                d = t + 2 * s * (n - t) + l * (i - 2 * n + t),
                v = e + 2 * s * (r - e) + l * (o - 2 * r + e),
                g = n + 2 * s * (i - n) + l * (a - 2 * i + n),
                y = r + 2 * s * (o - r) + l * (u - 2 * o + r);return { x: f * t + 3 * h * s * n + 3 * c * s * s * i + p * a, y: f * e + 3 * h * s * r + 3 * c * s * s * o + p * u, m: { x: d, y: v }, n: { x: g, y: y }, start: { x: c * t + s * n, y: c * e + s * r }, end: { x: c * i + s * a, y: c * o + s * u }, alpha: 90 - 180 * Math.atan2(d - g, v - y) / Math.PI };
          },
              j = function j(t, e, n) {
            if (!function (t, e) {
              return t = M(t), e = M(e), _(e, t.x, t.y) || _(e, t.x2, t.y) || _(e, t.x, t.y2) || _(e, t.x2, t.y2) || _(t, e.x, e.y) || _(t, e.x2, e.y) || _(t, e.x, e.y2) || _(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y);
            }(S(t), S(e))) return n ? 0 : [];for (var r = ~~(x.apply(0, t) / 8), i = ~~(x.apply(0, e) / 8), o = [], a = [], u = {}, s = n ? 0 : [], c = 0; c < r + 1; c++) {
              var f = E.apply(0, t.concat(c / r));o.push({ x: f.x, y: f.y, t: c / r });
            }for (var h = 0; h < i + 1; h++) {
              var l = E.apply(0, e.concat(h / i));a.push({ x: l.x, y: l.y, t: h / i });
            }for (var p = 0; p < r; p++) {
              for (var d = 0; d < i; d++) {
                var v = o[p],
                    g = o[p + 1],
                    y = a[d],
                    m = a[d + 1],
                    w = Math.abs(g.x - v.x) < .001 ? "y" : "x",
                    j = Math.abs(m.x - y.x) < .001 ? "y" : "x",
                    A = b(v.x, v.y, g.x, g.y, y.x, y.y, m.x, m.y);if (A) {
                  if (u[A.x.toFixed(4)] === A.y.toFixed(4)) continue;u[A.x.toFixed(4)] = A.y.toFixed(4);var O = v.t + Math.abs((A[w] - v[w]) / (g[w] - v[w])) * (g.t - v.t),
                      P = y.t + Math.abs((A[j] - y[j]) / (m[j] - y[j])) * (m.t - y.t);O >= 0 && O <= 1 && P >= 0 && P <= 1 && (n ? s++ : s.push({ x: A.x, y: A.y, t1: O, t2: P }));
                }
              }
            }return s;
          };t.exports = { parsePathString: c, parsePathArray: y, pathTocurve: v, pathToAbsolute: l, catmullRomToBezier: f, rectPath: w, intersection: function intersection(t, e) {
              return function (t, e, n) {
                t = v(t), e = v(e);for (var r = void 0, i = void 0, o = void 0, a = void 0, u = void 0, s = void 0, c = void 0, f = void 0, h = void 0, l = void 0, p = n ? 0 : [], d = 0, g = t.length; d < g; d++) {
                  var y = t[d];if ("M" === y[0]) r = u = y[1], i = s = y[2];else {
                    "C" === y[0] ? (r = (h = [r, i].concat(y.slice(1)))[6], i = h[7]) : (h = [r, i, r, i, u, s, u, s], r = u, i = s);for (var m = 0, x = e.length; m < x; m++) {
                      var b = e[m];if ("M" === b[0]) o = c = b[1], a = f = b[2];else {
                        "C" === b[0] ? (o = (l = [o, a].concat(b.slice(1)))[6], a = l[7]) : (l = [o, a, o, a, c, f, c, f], o = c, a = f);var _ = j(h, l, n);if (n) p += _;else {
                          for (var w = 0, M = _.length; w < M; w++) {
                            _[w].segment1 = d, _[w].segment2 = m, _[w].bez1 = h, _[w].bez2 = l;
                          }p = p.concat(_);
                        }
                      }
                    }
                  }
                }return p;
              }(t, e);
            } };
        }, function (t, e, n) {
          "use strict";
          e.b = g, e.a = m, e.c = x, e.d = b;var r,
              i,
              o = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          },
              u = 0,
              s = 0,
              c = 0,
              f = 1e3,
              h = 0,
              l = 0,
              p = 0,
              d = "object" === ("undefined" == typeof performance ? "undefined" : o(performance)) && performance.now ? performance : Date,
              v = "object" === ("undefined" == typeof window ? "undefined" : o(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
            setTimeout(t, 17);
          };function g() {
            return l || (v(y), l = d.now() + p);
          }function y() {
            l = 0;
          }function m() {
            this._call = this._time = this._next = null;
          }function x(t, e, n) {
            var r = new m();return r.restart(t, e, n), r;
          }function b() {
            g(), ++u;for (var t, e = r; e;) {
              (t = l - e._time) >= 0 && e._call.call(null, t), e = e._next;
            }--u;
          }function _() {
            l = (h = d.now()) + p, u = s = 0;try {
              b();
            } finally {
              u = 0, function () {
                var t,
                    e,
                    n = r,
                    o = 1 / 0;for (; n;) {
                  n._call ? (o > n._time && (o = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : r = e);
                }i = t, M(o);
              }(), l = 0;
            }
          }function w() {
            var t = d.now(),
                e = t - h;e > f && (p -= e, h = t);
          }function M(t) {
            u || (s && (s = clearTimeout(s)), t - l > 24 ? (t < 1 / 0 && (s = setTimeout(_, t - d.now() - p)), c && (c = clearInterval(c))) : (c || (h = d.now(), c = setInterval(w, f)), u = 1, v(_)));
          }m.prototype = x.prototype = { constructor: m, restart: function restart(t, e, n) {
              if ("function" != typeof t) throw new TypeError("callback is not a function");n = (null == n ? g() : +n) + (null == e ? 0 : +e), this._next || i === this || (i ? i._next = this : r = this, i = this), this._call = t, this._time = n, M();
            }, stop: function stop() {
              this._call && (this._call = null, this._time = 1 / 0, M());
            } };
        }, function (t, e, n) {
          "use strict";
          var r = n(15),
              i = n(93),
              o = n(96),
              u = n(97),
              s = n(31),
              c = n(98),
              f = n(99),
              h = n(95),
              l = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          };e.a = function (t, e) {
            var n,
                a = void 0 === e ? "undefined" : l(e);return null == e || "boolean" === a ? Object(h.a)(e) : ("number" === a ? s.a : "string" === a ? (n = Object(r.a)(e)) ? (e = n, i.a) : f.a : e instanceof r.a ? i.a : e instanceof Date ? u.a : Array.isArray(e) ? o.a : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? c.a : s.a)(t, e);
          };
        }, function (t, e, n) {
          "use strict";
          e.a = i, n.d(e, "d", function () {
            return o;
          }), n.d(e, "c", function () {
            return a;
          }), e.e = x, e.h = w, e.g = M, e.b = S, e.f = A;var r = n(50);function i() {}var o = .7,
              a = 1 / o,
              u = "\\s*([+-]?\\d+)\\s*",
              s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
              c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
              f = /^#([0-9a-f]{3})$/,
              h = /^#([0-9a-f]{6})$/,
              l = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
              p = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
              d = new RegExp("^rgba\\(" + [u, u, u, s] + "\\)$"),
              v = new RegExp("^rgba\\(" + [c, c, c, s] + "\\)$"),
              g = new RegExp("^hsl\\(" + [s, c, c] + "\\)$"),
              y = new RegExp("^hsla\\(" + [s, c, c, s] + "\\)$"),
              m = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };function x(t) {
            var e;return t = (t + "").trim().toLowerCase(), (e = f.exec(t)) ? new S((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = h.exec(t)) ? b(parseInt(e[1], 16)) : (e = l.exec(t)) ? new S(e[1], e[2], e[3], 1) : (e = p.exec(t)) ? new S(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = d.exec(t)) ? _(e[1], e[2], e[3], e[4]) : (e = v.exec(t)) ? _(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = g.exec(t)) ? j(e[1], e[2] / 100, e[3] / 100, 1) : (e = y.exec(t)) ? j(e[1], e[2] / 100, e[3] / 100, e[4]) : m.hasOwnProperty(t) ? b(m[t]) : "transparent" === t ? new S(NaN, NaN, NaN, 0) : null;
          }function b(t) {
            return new S(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
          }function _(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN), new S(t, e, n, r);
          }function w(t) {
            return t instanceof i || (t = x(t)), t ? new S((t = t.rgb()).r, t.g, t.b, t.opacity) : new S();
          }function M(t, e, n, r) {
            return 1 === arguments.length ? w(t) : new S(t, e, n, null == r ? 1 : r);
          }function S(t, e, n, r) {
            this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
          }function E(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16);
          }function j(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new O(t, e, n, r);
          }function A(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
              if (t instanceof O) return new O(t.h, t.s, t.l, t.opacity);if (t instanceof i || (t = x(t)), !t) return new O();if (t instanceof O) return t;var e = (t = t.rgb()).r / 255,
                  n = t.g / 255,
                  r = t.b / 255,
                  o = Math.min(e, n, r),
                  a = Math.max(e, n, r),
                  u = NaN,
                  s = a - o,
                  c = (a + o) / 2;return s ? (u = e === a ? (n - r) / s + 6 * (n < r) : n === a ? (r - e) / s + 2 : (e - n) / s + 4, s /= c < .5 ? a + o : 2 - a - o, u *= 60) : s = c > 0 && c < 1 ? 0 : u, new O(u, s, c, t.opacity);
            }(t) : new O(t, e, n, null == r ? 1 : r);
          }function O(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
          }function P(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
          }Object(r.a)(i, x, { displayable: function displayable() {
              return this.rgb().displayable();
            }, hex: function hex() {
              return this.rgb().hex();
            }, toString: function toString() {
              return this.rgb() + "";
            } }), Object(r.a)(S, M, Object(r.b)(i, { brighter: function brighter(t) {
              return t = null == t ? a : Math.pow(a, t), new S(this.r * t, this.g * t, this.b * t, this.opacity);
            }, darker: function darker(t) {
              return t = null == t ? o : Math.pow(o, t), new S(this.r * t, this.g * t, this.b * t, this.opacity);
            }, rgb: function rgb() {
              return this;
            }, displayable: function displayable() {
              return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
            }, hex: function hex() {
              return "#" + E(this.r) + E(this.g) + E(this.b);
            }, toString: function toString() {
              var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
            } })), Object(r.a)(O, A, Object(r.b)(i, { brighter: function brighter(t) {
              return t = null == t ? a : Math.pow(a, t), new O(this.h, this.s, this.l * t, this.opacity);
            }, darker: function darker(t) {
              return t = null == t ? o : Math.pow(o, t), new O(this.h, this.s, this.l * t, this.opacity);
            }, rgb: function rgb() {
              var t = this.h % 360 + 360 * (this.h < 0),
                  e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                  n = this.l,
                  r = n + (n < .5 ? n : 1 - n) * e,
                  i = 2 * n - r;return new S(P(t >= 240 ? t - 240 : t + 120, i, r), P(t, i, r), P(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
            }, displayable: function displayable() {
              return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
            } }));
        }, function (t, e, n) {
          "use strict";
          e.b = function (t, e) {
            var n = Object.create(t.prototype);for (var r in e) {
              n[r] = e[r];
            }return n;
          }, e.a = function (t, e, n) {
            t.prototype = e.prototype = n, n.constructor = t;
          };
        }, function (t, e, n) {
          "use strict";
          function r(t, e, n, r, i) {
            var o = t * t,
                a = o * t;return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
          }e.a = r, e.b = function (t) {
            var e = t.length - 1;return function (n) {
              var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                  o = t[i],
                  a = t[i + 1],
                  u = i > 0 ? t[i - 1] : 2 * o - a,
                  s = i < e - 1 ? t[i + 2] : 2 * a - o;return r((n - i / e) * e, u, o, a, s);
            };
          };
        }, function (t, e, n) {
          var r = n(3).vec2;t.exports = { at: function at(t, e, n) {
              return (e - t) * n + t;
            }, pointDistance: function pointDistance(t, e, n, i, o, a) {
              var u = [n - t, i - e];if (r.exactEquals(u, [0, 0])) return NaN;var s = [-u[1], u[0]];r.normalize(s, s);var c = [o - t, a - e];return Math.abs(r.dot(c, s));
            }, box: function box(t, e, n, r, i) {
              var o = i / 2,
                  a = Math.min(t, n),
                  u = Math.max(t, n);return { minX: a - o, minY: Math.min(e, r) - o, maxX: u + o, maxY: Math.max(e, r) + o };
            }, len: function len(t, e, n, r) {
              return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e));
            } };
        }, function (t, e, n) {
          var r = n(0),
              i = n(3).vec2;function o(t, e, n, r) {
            var i = 1 - r;return i * (i * t + 2 * r * e) + r * r * n;
          }function a(t, e, n, r, a, u, s, c, f) {
            var h = void 0,
                l = .005,
                p = 1 / 0,
                d = void 0,
                v = void 0,
                g = void 0,
                y = void 0,
                m = void 0,
                x = void 0,
                b = [s, c];for (y = 0; y < 1; y += .05) {
              v = [o(t, n, a, y), o(e, r, u, y)], (d = i.squaredDistance(b, v)) < p && (h = y, p = d);
            }for (p = 1 / 0, x = 0; x < 32 && !(l < 1e-4); x++) {
              var _ = h - l,
                  w = h + l;v = [o(t, n, a, _), o(e, r, u, _)], d = i.squaredDistance(b, v), _ >= 0 && d < p ? (h = _, p = d) : (g = [o(t, n, a, w), o(e, r, u, w)], m = i.squaredDistance(b, g), w <= 1 && m < p ? (h = w, p = m) : l *= .5);
            }return f && (f.x = o(t, n, a, h), f.y = o(e, r, u, h)), Math.sqrt(p);
          }t.exports = { at: o, projectPoint: function projectPoint(t, e, n, r, i, o, u, s) {
              var c = {};return a(t, e, n, r, i, o, u, s, c), c;
            }, pointDistance: a, extrema: function extrema(t, e, n) {
              var i = t + n - 2 * e;if (r.isNumberEqual(i, 0)) return [.5];var o = (t - e) / i;return o <= 1 && o >= 0 ? [o] : [];
            } };
        }, function (t, e, n) {
          var r = n(0),
              i = n(3).vec2;function o(t, e, n, r) {
            return { x: Math.cos(r) * n + t, y: Math.sin(r) * n + e };
          }function a(t, e, n, r) {
            var i = void 0,
                o = void 0;return r ? t < e ? (i = e - t, o = 2 * Math.PI - n + t) : t > n && (i = 2 * Math.PI - t + e, o = t - n) : (i = t - e, o = n - t), i > o ? n : e;
          }function u(t, e, n, i) {
            var o = 0;return n - e >= 2 * Math.PI && (o = 2 * Math.PI), e = r.mod(e, 2 * Math.PI), n = r.mod(n, 2 * Math.PI) + o, t = r.mod(t, 2 * Math.PI), i ? e >= n ? t > n && t < e ? t : a(t, n, e, !0) : t < e || t > n ? t : a(t, e, n) : e <= n ? e < t && t < n ? t : a(t, e, n, !0) : t > e || t < n ? t : a(t, n, e);
          }function s(t, e, n, r, o, a, s, c, f) {
            var h = [s, c],
                l = [t, e],
                p = i.subtract([], h, l),
                d = i.angleTo([1, 0], p);d = u(d, r, o, a);var v = [n * Math.cos(d) + t, n * Math.sin(d) + e];return f && (f.x = v[0], f.y = v[1]), i.distance(v, h);
          }t.exports = { nearAngle: u, projectPoint: function projectPoint(t, e, n, r, i, o, a, u) {
              var c = {};return s(t, e, n, r, i, o, a, u, c), c;
            }, pointDistance: s, box: function box(t, e, n, i, a, s) {
              var c = Math.PI / 2,
                  f = Math.PI,
                  h = 3 * Math.PI / 2,
                  l = [],
                  p = u(0, i, a, s);0 === p && l.push(o(t, e, n, 0)), (p = u(c, i, a, s)) === c && l.push(o(t, e, n, c)), (p = u(f, i, a, s)) === f && l.push(o(t, e, n, f)), (p = u(h, i, a, s)) === h && l.push(o(t, e, n, h)), l.push(o(t, e, n, i)), l.push(o(t, e, n, a));var d = 1 / 0,
                  v = -1 / 0,
                  g = 1 / 0,
                  y = -1 / 0;return r.each(l, function (t) {
                d > t.x && (d = t.x), v < t.x && (v = t.x), g > t.y && (g = t.y), y < t.y && (y = t.y);
              }), { minX: d, minY: g, maxX: v, maxY: y };
            } };
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.ATTRS = { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 1 }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "rect", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1, radius: 0 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y,
                  r = t.width,
                  i = t.height,
                  o = this.getHitLineWidth() / 2;return { minX: e - o, minY: n - o, maxX: e + r + o, maxY: n + i + o };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.hasFill(),
                  r = this.hasStroke();return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e);
            }, __isPointInFill: function __isPointInFill(t, e) {
              var n = this.get("context");return !!n && (this.createPath(), n.isPointInPath(t, e));
            }, __isPointInStroke: function __isPointInStroke(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  a = n.width,
                  u = n.height,
                  s = n.radius,
                  c = this.getHitLineWidth();if (0 === s) {
                var f = c / 2;return o.line(r - f, i, r + a + f, i, c, t, e) || o.line(r + a, i - f, r + a, i + u + f, c, t, e) || o.line(r + a + f, i + u, r - f, i + u, c, t, e) || o.line(r, i + u + f, r, i - f, c, t, e);
              }return o.line(r + s, i, r + a - s, i, c, t, e) || o.line(r + a, i + s, r + a, i + u - s, c, t, e) || o.line(r + a - s, i + u, r + s, i + u, c, t, e) || o.line(r, i + u - s, r, i + s, c, t, e) || o.arcline(r + a - s, i + s, s, 1.5 * Math.PI, 2 * Math.PI, !1, c, t, e) || o.arcline(r + a - s, i + u - s, s, 0, .5 * Math.PI, !1, c, t, e) || o.arcline(r + s, i + u - s, s, .5 * Math.PI, Math.PI, !1, c, t, e) || o.arcline(r + s, i + s, s, Math.PI, 1.5 * Math.PI, !1, c, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.x,
                  r = e.y,
                  i = e.width,
                  o = e.height,
                  a = e.radius;(t = t || this.get("context")).beginPath(), 0 === a ? t.rect(n, r, i, o) : (t.moveTo(n + a, r), t.lineTo(n + i - a, r), t.arc(n + i - a, r + a, a, -Math.PI / 2, 0, !1), t.lineTo(n + i, r + o - a), t.arc(n + i - a, r + o - a, a, 0, Math.PI / 2, !1), t.lineTo(n + a, r + o), t.arc(n + a, r + o - a, a, Math.PI / 2, Math.PI, !1), t.lineTo(n, r + a), t.arc(n + a, r + a, a, Math.PI, 3 * Math.PI / 2, !1), t.closePath());
            } }), t.exports = a;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.Symbols = { circle: function circle(t, e, n, r) {
              r.arc(t, e, n, 0, 2 * Math.PI, !1);
            }, square: function square(t, e, n, r) {
              r.moveTo(t - n, e - n), r.lineTo(t + n, e - n), r.lineTo(t + n, e + n), r.lineTo(t - n, e + n), r.closePath();
            }, diamond: function diamond(t, e, n, r) {
              r.moveTo(t - n, e), r.lineTo(t, e - n), r.lineTo(t + n, e), r.lineTo(t, e + n), r.closePath();
            }, triangle: function triangle(t, e, n, r) {
              var i = n * Math.sin(1 / 3 * Math.PI);r.moveTo(t - n, e + i), r.lineTo(t, e - i), r.lineTo(t + n, e + i), r.closePath();
            }, "triangle-down": function triangleDown(t, e, n, r) {
              var i = n * Math.sin(1 / 3 * Math.PI);r.moveTo(t - n, e - i), r.lineTo(t + n, e - i), r.lineTo(t, e + i), r.closePath();
            } }, a.ATTRS = { path: null, lineWidth: 1 }, r.extend(a, i), r.augment(a, { type: "marker", canFill: !0, canStroke: !0, getDefaultAttrs: function getDefaultAttrs() {
              return { x: 0, y: 0, lineWidth: 1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y,
                  r = t.radius,
                  i = this.getHitLineWidth() / 2 + r;return { minX: e - i, minY: n - i, maxX: e + i, maxY: n + i };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  a = n.radius,
                  u = this.getHitLineWidth();return o.circle(r, i, a + u / 2, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.x,
                  i = e.y,
                  o = e.radius,
                  u = e.symbol || "circle",
                  s = void 0;s = r.isFunction(u) ? u : a.Symbols[u], t.beginPath(), s(n, i, o, t, this);
            } }), t.exports = a;
        }, function (t, e, n) {
          (function (e) {
            var n = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
              return void 0 === t ? "undefined" : a(t);
            } : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
            },
                r = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e;t.exports = r;
          }).call(e, n(116));
        }, function (t, e, n) {
          var r = n(7),
              i = n(6),
              o = n(4),
              a = "[object String]";t.exports = function (t) {
            return "string" == typeof t || !i(t) && o(t) && r(t) == a;
          };
        }, function (t, e, n) {
          var r = n(18),
              i = n(123),
              o = Object.prototype.hasOwnProperty;t.exports = function (t) {
            if (!r(t)) return i(t);var e = [];for (var n in Object(t)) {
              o.call(t, n) && "constructor" != n && e.push(n);
            }return e;
          };
        }, function (t, e) {
          t.exports = function (t, e) {
            return function (n) {
              return t(e(n));
            };
          };
        }, function (t, e) {
          var n = Function.prototype.toString;t.exports = function (t) {
            if (null != t) {
              try {
                return n.call(t);
              } catch (t) {}try {
                return t + "";
              } catch (t) {}
            }return "";
          };
        }, function (t, e) {
          var n = 9007199254740991;t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
          };
        }, function (t, e, n) {
          var r = n(136);t.exports = function (t) {
            return null == t ? "" : r(t);
          };
        }, function (t, e, n) {
          var r = n(150),
              i = n(157),
              o = n(159),
              a = n(160),
              u = n(161);function s(t) {
            var e = -1,
                n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
              var r = t[e];this.set(r[0], r[1]);
            }
          }s.prototype.clear = r, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = u, t.exports = s;
        }, function (t, e) {
          t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);) {}return t;
          };
        }, function (t, e, n) {
          var r = n(10),
              i = function () {
            try {
              var t = r(Object, "defineProperty");return t({}, "", {}), t;
            } catch (t) {}
          }();t.exports = i;
        }, function (t, e, n) {
          var r = n(163),
              i = n(34),
              o = n(6),
              a = n(19),
              u = n(68),
              s = n(23),
              c = Object.prototype.hasOwnProperty;t.exports = function (t, e) {
            var n = o(t),
                f = !n && i(t),
                h = !n && !f && a(t),
                l = !n && !f && !h && s(t),
                p = n || f || h || l,
                d = p ? r(t.length, String) : [],
                v = d.length;for (var g in t) {
              !e && !c.call(t, g) || p && ("length" == g || h && ("offset" == g || "parent" == g) || l && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, v)) || d.push(g);
            }return d;
          };
        }, function (t, e) {
          var n = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          },
              r = 9007199254740991,
              i = /^(?:0|[1-9]\d*)$/;t.exports = function (t, e) {
            var o = void 0 === t ? "undefined" : n(t);return !!(e = null == e ? r : e) && ("number" == o || "symbol" != o && i.test(t)) && t > -1 && t % 1 == 0 && t < e;
          };
        }, function (t, e, n) {
          (function (t) {
            var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
              return void 0 === t ? "undefined" : a(t);
            } : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
            },
                i = n(5),
                o = "object" == r(e) && e && !e.nodeType && e,
                u = o && "object" == r(t) && t && !t.nodeType && t,
                s = u && u.exports === o ? i.Buffer : void 0,
                c = s ? s.allocUnsafe : void 0;t.exports = function (t, e) {
              if (e) return t.slice();var n = t.length,
                  r = c ? c(n) : new t.constructor(n);return t.copy(r), r;
            };
          }).call(e, n(35)(t));
        }, function (t, e) {
          t.exports = function () {
            return [];
          };
        }, function (t, e, n) {
          var r = n(72),
              i = n(42),
              o = n(41),
              a = n(70),
              u = Object.getOwnPropertySymbols ? function (t) {
            for (var e = []; t;) {
              r(e, o(t)), t = i(t);
            }return e;
          } : a;t.exports = u;
        }, function (t, e) {
          t.exports = function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r;) {
              t[i + n] = e[n];
            }return t;
          };
        }, function (t, e, n) {
          var r = n(74),
              i = n(41),
              o = n(14);t.exports = function (t) {
            return r(t, o, i);
          };
        }, function (t, e, n) {
          var r = n(72),
              i = n(6);t.exports = function (t, e, n) {
            var o = e(t);return i(t) ? o : r(o, n(t));
          };
        }, function (t, e, n) {
          var r = n(5).Uint8Array;t.exports = r;
        }, function (t, e, n) {
          var r = n(43);t.exports = function (t, e) {
            var n = e ? r(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.length);
          };
        }, function (t, e, n) {
          var r = n(176),
              i = n(42),
              o = n(18);t.exports = function (t) {
            return "function" != typeof t.constructor || o(t) ? {} : r(i(t));
          };
        }, function (t, e, n) {
          var r = n(79),
              i = n(188);t.exports = function (t) {
            return r(function (e, n) {
              var r = -1,
                  o = n.length,
                  a = o > 1 ? n[o - 1] : void 0,
                  u = o > 2 ? n[2] : void 0;for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, u && i(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;) {
                var s = n[r];s && t(e, s, r, a);
              }return e;
            });
          };
        }, function (t, e, n) {
          var r = n(44),
              i = n(182),
              o = n(184);t.exports = function (t, e) {
            return o(i(t, e, r), t + "");
          };
        }, function (t, e, n) {
          var r = n(40),
              i = n(20);t.exports = function (t, e, n) {
            (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n);
          };
        }, function (t, e, n) {
          var r = n(191)();t.exports = r;
        }, function (t, e) {
          t.exports = function (t, e) {
            return "__proto__" == e ? void 0 : t[e];
          };
        }, function (t, e) {
          var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports = function (t) {
            return n.test(t);
          };
        }, function (t, e, n) {
          var r = n(200),
              i = n(83),
              o = n(201);t.exports = function (t) {
            return i(t) ? o(t) : r(t);
          };
        }, function (t, e, n) {
          var r = n(218),
              i = n(221),
              o = n(222),
              a = 1,
              u = 2;t.exports = function (t, e, n, s, c, f) {
            var h = n & a,
                l = t.length,
                p = e.length;if (l != p && !(h && p > l)) return !1;var d = f.get(t);if (d && f.get(e)) return d == e;var v = -1,
                g = !0,
                y = n & u ? new r() : void 0;for (f.set(t, e), f.set(e, t); ++v < l;) {
              var m = t[v],
                  x = e[v];if (s) var b = h ? s(x, m, v, e, t, f) : s(m, x, v, t, e, f);if (void 0 !== b) {
                if (b) continue;g = !1;break;
              }if (y) {
                if (!i(e, function (t, e) {
                  if (!o(y, e) && (m === t || c(m, t, n, s, f))) return y.push(e);
                })) {
                  g = !1;break;
                }
              } else if (m !== x && !c(m, x, n, s, f)) {
                g = !1;break;
              }
            }return f.delete(t), f.delete(e), g;
          };
        }, function (t, e) {
          t.exports = function (t) {
            var e = -1,
                n = Array(t.size);return t.forEach(function (t, r) {
              n[++e] = [r, t];
            }), n;
          };
        }, function (t, e) {
          t.exports = function (t) {
            var e = -1,
                n = Array(t.size);return t.forEach(function (t) {
              n[++e] = t;
            }), n;
          };
        }, function (t, e, n) {
          var r = n(17),
              i = document.createElement("table"),
              o = document.createElement("tr"),
              a = /^\s*<(\w+|!)[^>]*>/,
              u = { tr: document.createElement("tbody"), tbody: i, thead: i, tfoot: i, td: o, th: o, "*": document.createElement("div") };t.exports = { getBoundingClientRect: function getBoundingClientRect(t, e) {
              if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect(),
                    r = document.documentElement.clientTop,
                    i = document.documentElement.clientLeft;return { top: n.top - r, bottom: n.bottom - r, left: n.left - i, right: n.right - i };
              }return e || null;
            }, getStyle: function getStyle(t, e, n) {
              try {
                return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e];
              } catch (t) {
                return r.isNil(n) ? null : n;
              }
            }, modifyCSS: function modifyCSS(t, e) {
              if (t) for (var n in e) {
                e.hasOwnProperty(n) && (t.style[n] = e[n]);
              }return t;
            }, createDom: function createDom(t) {
              var e = a.test(t) && RegExp.$1;e in u || (e = "*");var n = u[e];t = t.replace(/(^\s*)|(\s*$)/g, ""), n.innerHTML = "" + t;var r = n.childNodes[0];return n.removeChild(r), r;
            }, getRatio: function getRatio() {
              return window.devicePixelRatio ? window.devicePixelRatio : 2;
            }, getWidth: function getWidth(t, e) {
              var n = this.getStyle(t, "width", e);return "auto" === n && (n = t.offsetWidth), parseFloat(n);
            }, getHeight: function getHeight(t, e) {
              var n = this.getStyle(t, "height", e);return "auto" === n && (n = t.offsetHeight), parseFloat(n);
            }, getOuterHeight: function getOuterHeight(t, e) {
              var n = this.getHeight(t, e),
                  r = parseFloat(this.getStyle(t, "borderTopWidth")) || 0,
                  i = parseFloat(this.getStyle(t, "paddingTop")) || 0,
                  o = parseFloat(this.getStyle(t, "paddingBottom")) || 0;return n + r + (parseFloat(this.getStyle(t, "borderBottomWidth")) || 0) + i + o;
            }, getOuterWidth: function getOuterWidth(t, e) {
              var n = this.getWidth(t, e),
                  r = parseFloat(this.getStyle(t, "borderLeftWidth")) || 0,
                  i = parseFloat(this.getStyle(t, "paddingLeft")) || 0,
                  o = parseFloat(this.getStyle(t, "paddingRight")) || 0;return n + r + (parseFloat(this.getStyle(t, "borderRightWidth")) || 0) + i + o;
            }, addEventListener: function addEventListener(t, e, n) {
              if (t) {
                if (t.addEventListener) return t.addEventListener(e, n, !1), { remove: function remove() {
                    t.removeEventListener(e, n, !1);
                  } };if (t.attachEvent) return t.attachEvent("on" + e, n), { remove: function remove() {
                    t.detachEvent("on" + e, n);
                  } };
              }
            }, requestAnimationFrame: function requestAnimationFrame(t) {
              return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                return setTimeout(t, 16);
              })(t);
            } };
        }, function (t, e, n) {
          var r = n(0),
              i = function i(t, e, n, r) {
            this.type = t, this.target = null, this.currentTarget = null, this.bubbles = n, this.cancelable = r, this.timeStamp = new Date().getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.removed = !1, this.event = e;
          };r.augment(i, { preventDefault: function preventDefault() {
              this.defaultPrevented = this.cancelable && !0;
            }, stopPropagation: function stopPropagation() {
              this.propagationStopped = !0;
            }, remove: function remove() {
              this.remove = !0;
            }, clone: function clone() {
              return r.clone(this);
            }, toString: function toString() {
              return "[Event (type=" + this.type + ")]";
            } }), t.exports = i;
        }, function (t, e, n) {
          var r = n(0),
              i = n(91),
              o = n(263),
              a = {},
              u = "_INDEX";function s(t, e, n) {
            for (var r = void 0, i = t.length - 1; i >= 0; i--) {
              var o = t[i];if (o.__cfg.visible && o.__cfg.capture && (o.isGroup ? r = o.getShape(e, n) : o.isHit(e, n) && (r = o)), r) break;
            }return r;
          }var c = function t(e) {
            t.superclass.constructor.call(this, e), this.set("children", []), this._beforeRenderUI(), this._renderUI(), this._bindUI();
          };r.extend(c, i), r.augment(c, { isGroup: !0, canFill: !0, canStroke: !0, getDefaultCfg: function getDefaultCfg() {
              return function t(e) {
                if (!e.__cfg && e !== c) {
                  var n = e.superclass.constructor;n && !n.__cfg && t(n), e.__cfg = {}, r.merge(e.__cfg, n.__cfg), r.merge(e.__cfg, e.CFG);
                }
              }(this.constructor), r.merge({}, this.constructor.__cfg);
            }, _beforeRenderUI: function _beforeRenderUI() {}, _renderUI: function _renderUI() {}, _bindUI: function _bindUI() {}, addShape: function addShape(t, e) {
              var n = this.get("canvas");e = e || {};var i = a[t];if (i || (i = r.upperFirst(t), a[t] = i), e.attrs) {
                var u = e.attrs;if ("text" === t) {
                  var s = n.get("fontFamily");s && (u.fontFamily = u.fontFamily ? u.fontFamily : s);
                }
              }e.canvas = n, e.type = t;var c = new o[i](e);return this.add(c), c;
            }, addGroup: function addGroup(t, e) {
              var n = this.get("canvas"),
                  i = void 0;if (e = r.merge({}, e), r.isFunction(t)) e ? (e.canvas = n, e.parent = this, i = new t(e)) : i = new t({ canvas: n, parent: this }), this.add(i);else if (r.isObject(t)) t.canvas = n, i = new c(t), this.add(i);else {
                if (void 0 !== t) return !1;i = new c(), this.add(i);
              }return i;
            }, renderBack: function renderBack(t, e) {
              var n = this.get("backShape"),
                  i = this.getBBox();return r.merge(e, { x: i.minX - t[3], y: i.minY - t[0], width: i.width + t[1] + t[3], height: i.height + t[0] + t[2] }), n ? n.attr(e) : n = this.addShape("rect", { zIndex: -1, attrs: e }), this.set("backShape", n), this.sort(), n;
            }, removeChild: function removeChild(t, e) {
              if (arguments.length >= 2) this.contain(t) && t.remove(e);else {
                if (1 === arguments.length) {
                  if (!r.isBoolean(t)) return this.contain(t) && t.remove(!0), this;e = t;
                }0 === arguments.length && (e = !0), c.superclass.remove.call(this, e);
              }return this;
            }, add: function add(t) {
              var e = this,
                  n = e.get("children");if (r.isArray(t)) r.each(t, function (t) {
                var n = t.get("parent");n && n.removeChild(t, !1), e.__setEvn(t);
              }), n.push.apply(n, t);else {
                var i = t,
                    o = i.get("parent");o && o.removeChild(i, !1), e.__setEvn(i), n.push(i);
              }return e;
            }, contain: function contain(t) {
              return this.get("children").indexOf(t) > -1;
            }, getChildByIndex: function getChildByIndex(t) {
              return this.get("children")[t];
            }, getFirst: function getFirst() {
              return this.getChildByIndex(0);
            }, getLast: function getLast() {
              var t = this.get("children").length - 1;return this.getChildByIndex(t);
            }, __setEvn: function __setEvn(t) {
              t.__cfg.parent = this, t.__cfg.context = this.__cfg.context, t.__cfg.canvas = this.__cfg.canvas;var e = t.__attrs.clip;e && (e.setSilent("parent", this), e.setSilent("context", this.get("context")));var n = t.__cfg.children;n && r.each(n, function (e) {
                t.__setEvn(e);
              });
            }, getBBox: function getBBox() {
              var t = 1 / 0,
                  e = -1 / 0,
                  n = 1 / 0,
                  i = -1 / 0,
                  o = this.get("children");r.each(o, function (r) {
                if (r.get("visible")) {
                  var o = r.getBBox();if (!o) return !0;var a = [o.minX, o.minY, 1],
                      u = [o.minX, o.maxY, 1],
                      s = [o.maxX, o.minY, 1],
                      c = [o.maxX, o.maxY, 1];r.apply(a), r.apply(u), r.apply(s), r.apply(c);var f = Math.min(a[0], u[0], s[0], c[0]),
                      h = Math.max(a[0], u[0], s[0], c[0]),
                      l = Math.min(a[1], u[1], s[1], c[1]),
                      p = Math.max(a[1], u[1], s[1], c[1]);f < t && (t = f), h > e && (e = h), l < n && (n = l), p > i && (i = p);
                }
              });var a = { minX: t, minY: n, maxX: e, maxY: i };return a.x = a.minX, a.y = a.minY, a.width = a.maxX - a.minX, a.height = a.maxY - a.minY, a;
            }, drawInner: function drawInner(t) {
              for (var e = this.get("children"), n = 0; n < e.length; n++) {
                e[n].draw(t);
              }return this;
            }, getCount: function getCount() {
              return this.get("children").length;
            }, sort: function sort() {
              var t,
                  e = this.get("children");return r.each(e, function (t, e) {
                return t[u] = e, t;
              }), e.sort((t = function t(_t, e) {
                return _t.get("zIndex") - e.get("zIndex");
              }, function (e, n) {
                var r = t(e, n);return 0 === r ? e[u] - n[u] : r;
              })), this;
            }, find: function find(t) {
              return this.findBy(function (e) {
                return e.get("id") === t;
              });
            }, findBy: function findBy(t) {
              var e = this.get("children"),
                  n = null;return r.each(e, function (e) {
                if (t(e) ? n = e : e.findBy && (n = e.findBy(t)), n) return !1;
              }), n;
            }, findAllBy: function findAllBy(t) {
              var e = this.get("children"),
                  n = [],
                  i = [];return r.each(e, function (e) {
                t(e) && n.push(e), e.findAllBy && (i = e.findAllBy(t), n = n.concat(i));
              }), n;
            }, getShape: function getShape(t, e) {
              var n = this.__attrs.clip,
                  r = this.__cfg.children,
                  i = void 0;return n ? n.inside(t, e) && (i = s(r, t, e)) : i = s(r, t, e), i;
            }, clearTotalMatrix: function clearTotalMatrix() {
              if (this.get("totalMatrix")) {
                this.setSilent("totalMatrix", null);for (var t = this.__cfg.children, e = 0; e < t.length; e++) {
                  t[e].clearTotalMatrix();
                }
              }
            }, clear: function clear() {
              for (var t = this.get("children"); 0 !== t.length;) {
                t[t.length - 1].remove();
              }return this;
            }, destroy: function destroy() {
              this.get("destroyed") || (this.clear(), c.superclass.destroy.call(this));
            } }), t.exports = c;
        }, function (t, e, n) {
          var r = n(0),
              i = n(229),
              o = n(230),
              a = n(234),
              u = n(100),
              s = n(262),
              c = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "lineDashOffset"],
              f = function f(t) {
            this.__cfg = { zIndex: 0, capture: !0, visible: !0, destroyed: !1 }, r.assign(this.__cfg, this.getDefaultCfg(), t), this.initAttrs(this.__cfg.attrs), this.initTransform(), this.init();
          };f.CFG = { id: null, zIndex: 0, canvas: null, parent: null, capture: !0, context: null, visible: !0, destroyed: !1 }, r.augment(f, i, o, s, a, { init: function init() {
              this.setSilent("animable", !0), this.setSilent("animating", !1);var t = this.__attrs;t && t.rotate && this.rotateAtStart(t.rotate);
            }, getParent: function getParent() {
              return this.get("parent");
            }, getDefaultCfg: function getDefaultCfg() {
              return {};
            }, set: function set(t, e) {
              var n = "__set" + r.upperFirst(t);return this[n] && (e = this[n](e)), this.__cfg[t] = e, this;
            }, setSilent: function setSilent(t, e) {
              this.__cfg[t] = e;
            }, get: function get(t) {
              return this.__cfg[t];
            }, draw: function draw(t) {
              this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), this.restoreContext(t));
            }, setContext: function setContext(t) {
              var e = this.__attrs.clip;t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), this.resetTransform(t);
            }, restoreContext: function restoreContext(t) {
              t.restore();
            }, resetContext: function resetContext(t) {
              var e = this.__attrs;if (!this.isGroup) for (var n in e) {
                if (c.indexOf(n) > -1) {
                  var i = e[n];"fillStyle" === n && (i = u.parseStyle(i, this)), "strokeStyle" === n && (i = u.parseStyle(i, this)), "lineDash" === n && t.setLineDash ? r.isArray(i) ? t.setLineDash(i) : r.isString(i) && t.setLineDash(i.split(" ")) : t[n] = i;
                }
              }
            }, drawInner: function drawInner() {}, show: function show() {
              return this.set("visible", !0), this;
            }, hide: function hide() {
              return this.set("visible", !1), this;
            }, remove: function remove(t) {
              if (void 0 === t && (t = !0), this.get("parent")) {
                var e = this.get("parent").get("children");r.remove(e, this);
              }return t && this.destroy(), this;
            }, destroy: function destroy() {
              if (!this.get("destroyed")) {
                if (this.get("animating")) {
                  var t = this.get("animateTimer");t && t.stop();
                }this.__cfg = {}, this.__attrs = null, this.removeEvent(), this.set("destroyed", !0);
              }
            }, __setZIndex: function __setZIndex(t) {
              return this.__cfg.zIndex = t, r.isNil(this.get("parent")) || this.get("parent").sort(), t;
            }, __setAttrs: function __setAttrs(t) {
              return this.attr(t), t;
            }, setZIndex: function setZIndex(t) {
              return this.__cfg.zIndex = t, t;
            }, clone: function clone() {
              return r.clone(this);
            }, getBBox: function getBBox() {
              return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
            } }), t.exports = f;
        }, function (t, e, n) {
          "use strict";
          n.d(e, "a", function () {
            return r;
          }), n.d(e, "b", function () {
            return i;
          });var r = Math.PI / 180,
              i = 180 / Math.PI;
        }, function (t, e, n) {
          "use strict";
          n.d(e, "b", function () {
            return s;
          }), n.d(e, "c", function () {
            return c;
          });var r = n(15),
              i = n(51),
              o = n(94),
              a = n(21);function u(t) {
            return function (e) {
              var n,
                  i,
                  o = e.length,
                  a = new Array(o),
                  u = new Array(o),
                  s = new Array(o);for (n = 0; n < o; ++n) {
                i = Object(r.f)(e[n]), a[n] = i.r || 0, u[n] = i.g || 0, s[n] = i.b || 0;
              }return a = t(a), u = t(u), s = t(s), i.opacity = 1, function (t) {
                return i.r = a(t), i.g = u(t), i.b = s(t), i + "";
              };
            };
          }e.a = function t(e) {
            var n = Object(a.b)(e);function i(t, e) {
              var i = n((t = Object(r.f)(t)).r, (e = Object(r.f)(e)).r),
                  o = n(t.g, e.g),
                  u = n(t.b, e.b),
                  s = Object(a.a)(t.opacity, e.opacity);return function (e) {
                return t.r = i(e), t.g = o(e), t.b = u(e), t.opacity = s(e), t + "";
              };
            }return i.gamma = t, i;
          }(1);var s = u(i.b),
              c = u(o.a);
        }, function (t, e, n) {
          "use strict";
          var r = n(51);e.a = function (t) {
            var e = t.length;return function (n) {
              var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                  o = t[(i + e - 1) % e],
                  a = t[i % e],
                  u = t[(i + 1) % e],
                  s = t[(i + 2) % e];return Object(r.a)((n - i / e) * e, o, a, u, s);
            };
          };
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return function () {
              return t;
            };
          };
        }, function (t, e, n) {
          "use strict";
          var r = n(48);e.a = function (t, e) {
            var n,
                i = e ? e.length : 0,
                o = t ? Math.min(i, t.length) : 0,
                a = new Array(o),
                u = new Array(i);for (n = 0; n < o; ++n) {
              a[n] = Object(r.a)(t[n], e[n]);
            }for (; n < i; ++n) {
              u[n] = e[n];
            }return function (t) {
              for (n = 0; n < o; ++n) {
                u[n] = a[n](t);
              }return u;
            };
          };
        }, function (t, e, n) {
          "use strict";
          e.a = function (t, e) {
            var n = new Date();return e -= t = +t, function (r) {
              return n.setTime(t + e * r), n;
            };
          };
        }, function (t, e, n) {
          "use strict";
          var r = n(48),
              i = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          };e.a = function (t, e) {
            var n,
                o = {},
                a = {};for (n in null !== t && "object" === (void 0 === t ? "undefined" : i(t)) || (t = {}), null !== e && "object" === (void 0 === e ? "undefined" : i(e)) || (e = {}), e) {
              n in t ? o[n] = Object(r.a)(t[n], e[n]) : a[n] = e[n];
            }return function (t) {
              for (n in o) {
                a[n] = o[n](t);
              }return a;
            };
          };
        }, function (t, e, n) {
          "use strict";
          var r = n(31),
              i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
              o = new RegExp(i.source, "g");e.a = function (t, e) {
            var n,
                a,
                u,
                s = i.lastIndex = o.lastIndex = 0,
                c = -1,
                f = [],
                h = [];for (t += "", e += ""; (n = i.exec(t)) && (a = o.exec(e));) {
              (u = a.index) > s && (u = e.slice(s, u), f[c] ? f[c] += u : f[++c] = u), (n = n[0]) === (a = a[0]) ? f[c] ? f[c] += a : f[++c] = a : (f[++c] = null, h.push({ i: c, x: Object(r.a)(n, a) })), s = o.lastIndex;
            }return s < e.length && (u = e.slice(s), f[c] ? f[c] += u : f[++c] = u), f.length < 2 ? h[0] ? function (t) {
              return function (e) {
                return t(e) + "";
              };
            }(h[0].x) : function (t) {
              return function () {
                return t;
              };
            }(e) : (e = h.length, function (t) {
              for (var n, r = 0; r < e; ++r) {
                f[(n = h[r]).i] = n.x(t);
              }return f.join("");
            });
          };
        }, function (t, e, n) {
          var r = n(0),
              i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
              o = /[^\s\,]+/gi,
              a = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
              u = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
              s = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
              c = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
              f = {};function h(t, e) {
            var n = t.match(c);r.each(n, function (t) {
              t = t.split(":"), e.addColorStop(t[0], t[1]);
            });
          }t.exports = { parsePath: function parsePath(t) {
              return t = t || [], r.isArray(t) ? t : r.isString(t) ? (t = t.match(i), r.each(t, function (e, n) {
                if ((e = e.match(o))[0].length > 1) {
                  var i = e[0].charAt(0);e.splice(1, 0, e[0].substr(1)), e[0] = i;
                }r.each(e, function (t, n) {
                  isNaN(t) || (e[n] = +t);
                }), t[n] = e;
              }), t) : void 0;
            }, parseStyle: function parseStyle(t, e) {
              if (r.isString(t)) {
                if ("(" === t[1] || "(" === t[2]) {
                  if ("l" === t[0]) return function (t, e) {
                    var n = a.exec(t),
                        i = r.mod(r.toRadian(parseFloat(n[1])), 2 * Math.PI),
                        o = n[2],
                        u = e.getBBox(),
                        s = void 0,
                        c = void 0;i >= 0 && i < .5 * Math.PI ? (s = { x: u.minX, y: u.minY }, c = { x: u.maxX, y: u.maxY }) : .5 * Math.PI <= i && i < Math.PI ? (s = { x: u.maxX, y: u.minY }, c = { x: u.minX, y: u.maxY }) : Math.PI <= i && i < 1.5 * Math.PI ? (s = { x: u.maxX, y: u.maxY }, c = { x: u.minX, y: u.minY }) : (s = { x: u.minX, y: u.maxY }, c = { x: u.maxX, y: u.minY });var f = Math.tan(i),
                        l = f * f,
                        p = (c.x - s.x + f * (c.y - s.y)) / (l + 1) + s.x,
                        d = f * (c.x - s.x + f * (c.y - s.y)) / (l + 1) + s.y,
                        v = e.get("context").createLinearGradient(s.x, s.y, p, d);return h(o, v), v;
                  }(t, e);if ("r" === t[0]) return function (t, e) {
                    var n = u.exec(t),
                        r = parseFloat(n[1]),
                        i = parseFloat(n[2]),
                        o = parseFloat(n[3]),
                        a = n[4],
                        s = e.getBBox(),
                        c = e.get("context"),
                        f = s.maxX - s.minX,
                        l = s.maxY - s.minY,
                        p = Math.sqrt(f * f + l * l) / 2,
                        d = c.createRadialGradient(s.minX + f * r, s.minY + l * i, o * p, s.minX + f / 2, s.minY + l / 2, p);return h(a, d), d;
                  }(t, e);if ("p" === t[0]) return function (t, e) {
                    if (e.get("patternSource") && e.get("patternSource") === t) return e.get("pattern");var n = void 0,
                        r = void 0,
                        i = s.exec(t),
                        o = i[1],
                        a = i[2];function u() {
                      var i = e.get("context");n = i.createPattern(r, o), e.setSilent("pattern", n), e.setSilent("patternSource", t);
                    }switch (o) {case "a":
                        o = "repeat";break;case "x":
                        o = "repeat-x";break;case "y":
                        o = "repeat-y";break;case "n":
                        o = "no-repeat";break;default:
                        o = "no-repeat";}return r = new Image(), a.match(/^data:/i) || (r.crossOrigin = "Anonymous"), r.src = a, r.complete ? u() : (r.onload = u, r.src = r.src), n;
                  }(t, e);
                }return t;
              }
            }, numberToColor: function numberToColor(t) {
              var e = f[t];if (!e) {
                for (var n = t.toString(16), r = n.length; r < 6; r++) {
                  n = "0" + n;
                }e = "#" + n, f[t] = e;
              }return e;
            } };
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.ATTRS = { x: 0, y: 0, r: 0, lineWidth: 1 }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "circle", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y,
                  r = t.r,
                  i = this.getHitLineWidth() / 2 + r;return { minX: e - i, minY: n - i, maxX: e + i, maxY: n + i };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.hasFill(),
                  r = this.hasStroke();return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e);
            }, __isPointInFill: function __isPointInFill(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  a = n.r;return o.circle(r, i, a, t, e);
            }, __isPointInStroke: function __isPointInStroke(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  a = n.r,
                  u = this.getHitLineWidth();return o.arcline(r, i, a, 0, 2 * Math.PI, !1, u, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.x,
                  r = e.y,
                  i = e.r;(t = t || self.get("context")).beginPath(), t.arc(n, r, i, 0, 2 * Math.PI, !1);
            } }), t.exports = a;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = n(3).mat3,
              u = n(3).vec3,
              s = function t(e) {
            t.superclass.constructor.call(this, e);
          };s.ATTRS = { x: 0, y: 0, rx: 1, ry: 1, lineWidth: 1 }, r.extend(s, i), r.augment(s, { canFill: !0, canStroke: !0, type: "ellipse", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y,
                  r = t.rx,
                  i = t.ry,
                  o = this.getHitLineWidth(),
                  a = r + o / 2,
                  u = i + o / 2;return { minX: e - a, minY: n - u, maxX: e + a, maxY: n + u };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.hasFill(),
                  r = this.hasStroke();return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e);
            }, __isPointInFill: function __isPointInFill(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  s = n.rx,
                  c = n.ry,
                  f = s > c ? s : c,
                  h = s > c ? 1 : s / c,
                  l = s > c ? c / s : 1,
                  p = [t, e, 1],
                  d = [1, 0, 0, 0, 1, 0, 0, 0, 1];a.scale(d, d, [h, l]), a.translate(d, d, [r, i]);var v = a.invert([], d);return u.transformMat3(p, p, v), o.circle(0, 0, f, p[0], p[1]);
            }, __isPointInStroke: function __isPointInStroke(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  s = n.rx,
                  c = n.ry,
                  f = this.getHitLineWidth(),
                  h = s > c ? s : c,
                  l = s > c ? 1 : s / c,
                  p = s > c ? c / s : 1,
                  d = [t, e, 1],
                  v = [1, 0, 0, 0, 1, 0, 0, 0, 1];a.scale(v, v, [l, p]), a.translate(v, v, [r, i]);var g = a.invert([], v);return u.transformMat3(d, d, g), o.arcline(0, 0, h, 0, 2 * Math.PI, !1, f, d[0], d[1]);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.x,
                  r = e.y,
                  i = e.rx,
                  o = e.ry;t = t || self.get("context");var u = i > o ? i : o,
                  s = i > o ? 1 : i / o,
                  c = i > o ? o / i : 1,
                  f = [1, 0, 0, 0, 1, 0, 0, 0, 1];a.scale(f, f, [s, c]), a.translate(f, f, [n, r]), t.beginPath(), t.save(), t.transform(f[0], f[1], f[3], f[4], f[6], f[7]), t.arc(0, 0, u, 0, 2 * Math.PI), t.restore(), t.closePath();
            } }), t.exports = s;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(104),
              a = n(100),
              u = n(16),
              s = n(46),
              c = n(32),
              f = function t(e) {
            t.superclass.constructor.call(this, e);
          };f.ATTRS = { path: null, lineWidth: 1, curve: null, tCache: null, startArrow: !1, endArrow: !1 }, r.extend(f, i), r.augment(f, { canFill: !0, canStroke: !0, type: "path", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1, startArrow: !1, endArrow: !1 };
            }, __afterSetAttrPath: function __afterSetAttrPath(t) {
              if (r.isNil(t)) return this.setSilent("segments", null), void this.setSilent("box", void 0);var e = a.parsePath(t),
                  n = void 0,
                  i = [];if (r.isArray(e) && 0 !== e.length && ("M" === e[0][0] || "m" === e[0][0])) {
                for (var u = e.length, s = 0; s < e.length; s++) {
                  var c = e[s];n = new o(c, n, s === u - 1), i.push(n);
                }this.setSilent("segments", i), this.set("tCache", null), this.setSilent("box", null);
              }
            }, __afterSetAttrAll: function __afterSetAttrAll(t) {
              t.path && this.__afterSetAttrPath(t.path);
            }, calculateBox: function calculateBox() {
              var t = this.get("segments");if (!t) return null;var e = this.getHitLineWidth(),
                  n = 1 / 0,
                  i = -1 / 0,
                  o = 1 / 0,
                  a = -1 / 0;return r.each(t, function (t) {
                t.getBBox(e);var r = t.box;r && (r.minX < n && (n = r.minX), r.maxX > i && (i = r.maxX), r.minY < o && (o = r.minY), r.maxY > a && (a = r.maxY));
              }), { minX: n, minY: o, maxX: i, maxY: a };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.hasFill(),
                  r = this.hasStroke();return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e);
            }, __isPointInFill: function __isPointInFill(t, e) {
              var n = this.get("context");if (n) return this.createPath(), n.isPointInPath(t, e);
            }, __isPointInStroke: function __isPointInStroke(t, e) {
              var n = this.get("segments");if (!r.isEmpty(n)) for (var i = this.getHitLineWidth(), o = 0, a = n.length; o < a; o++) {
                if (n[o].isInside(t, e, i)) return !0;
              }return !1;
            }, __setTcache: function __setTcache() {
              var t = 0,
                  e = 0,
                  n = [],
                  i = void 0,
                  o = void 0,
                  a = void 0,
                  u = void 0,
                  s = this.curve;s && (r.each(s, function (e, n) {
                a = s[n + 1], u = e.length, a && (t += c.len(e[u - 2], e[u - 1], a[1], a[2], a[3], a[4], a[5], a[6]));
              }), r.each(s, function (r, f) {
                a = s[f + 1], u = r.length, a && ((i = [])[0] = e / t, o = c.len(r[u - 2], r[u - 1], a[1], a[2], a[3], a[4], a[5], a[6]), e += o, i[1] = e / t, n.push(i));
              }), this.tCache = n);
            }, __calculateCurve: function __calculateCurve() {
              var t = this.__attrs.path;this.curve = s.pathTocurve(t);
            }, getPoint: function getPoint(t) {
              var e = this.tCache,
                  n = void 0,
                  i = void 0;e || (this.__calculateCurve(), this.__setTcache(), e = this.tCache);var o = this.curve;if (!e) return o ? { x: o[0][1], y: o[0][2] } : null;r.each(e, function (e, r) {
                t >= e[0] && t <= e[1] && (n = (t - e[0]) / (e[1] - e[0]), i = r);
              });var a = o[i];if (r.isNil(a) || r.isNil(i)) return null;var u = a.length,
                  s = o[i + 1];return { x: c.at(a[u - 2], s[1], s[3], s[5], 1 - n), y: c.at(a[u - 1], s[2], s[4], s[6], 1 - n) };
            }, createPath: function createPath(t) {
              var e = this.get("segments");if (r.isArray(e)) {
                (t = t || this.get("context")).beginPath();for (var n = e.length, i = 0; i < n; i++) {
                  e[i].draw(t);
                }
              }
            }, _addArrow: function _addArrow(t, e, n, i, o) {
              var a = this.__attrs;if (r.isFunction(n)) {
                var s = n();o ? u.addStartArrow(i, a, t.x - s[0], t.y - s[1], t.x, t.y) : u.addEndArrow(i, a, e.x - s[0], e.y - s[1], e.x, e.y);
              } else o ? u.addStartArrow(i, a, e.x, e.y, t.x, t.y) : u.addEndArrow(i, a, t.x, t.y, e.x, e.y);
            }, afterPath: function afterPath(t) {
              var e = this.__attrs,
                  n = this.get("segments"),
                  i = e.path;if (t = t || this.get("context"), r.isArray(n) && (e.startArrow || e.endArrow) && "z" !== i[i.length - 1] && "Z" !== i[i.length - 1] && !e.fill) {
                var o = n.length;o > 1 && this._addArrow(n[0].endPoint, n[1].endPoint, n[1].startTangent, t, !0), o > 1 && this._addArrow(n[o - 2].endPoint, n[o - 1].endPoint, n[o - 1].endTangent, t, !1);
              }
            } }), t.exports = f;
        }, function (t, e, n) {
          var r = n(0),
              i = n(2),
              o = n(32),
              a = n(53),
              u = n(264),
              s = n(3).vec3,
              c = n(3).mat3,
              f = ["m", "l", "c", "a", "q", "h", "v", "t", "s", "z"];function h(t, e, n) {
            return { x: n.x + t, y: n.y + e };
          }function l(t, e) {
            return { x: e.x + (e.x - t.x), y: e.y + (e.y - t.y) };
          }function p(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
          }function d(t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(function (t, e) {
              return (t[0] * e[0] + t[1] * e[1]) / (p(t) * p(e));
            }(t, e));
          }var v = function v(t, e, n) {
            this.preSegment = e, this.isLast = n, this.init(t, e);
          };r.augment(v, { init: function init(t, e) {
              var n = t[0];e = e || { endPoint: { x: 0, y: 0 } };var i = f.indexOf(n) >= 0,
                  o = i ? n.toUpperCase() : n,
                  a = t,
                  u = void 0,
                  s = void 0,
                  c = void 0,
                  p = void 0,
                  v = e.endPoint,
                  g = a[1],
                  y = a[2];switch (o) {default:
                  break;case "M":
                  p = i ? h(g, y, v) : { x: g, y: y }, this.command = "M", this.params = [v, p], this.subStart = p, this.endPoint = p;break;case "L":
                  p = i ? h(g, y, v) : { x: g, y: y }, this.command = "L", this.params = [v, p], this.subStart = e.subStart, this.endPoint = p, this.endTangent = function () {
                    return [p.x - v.x, p.y - v.y];
                  }, this.startTangent = function () {
                    return [v.x - p.x, v.y - p.y];
                  };break;case "H":
                  p = i ? h(g, 0, v) : { x: g, y: v.y }, this.command = "L", this.params = [v, p], this.subStart = e.subStart, this.endPoint = p, this.endTangent = function () {
                    return [p.x - v.x, p.y - v.y];
                  }, this.startTangent = function () {
                    return [v.x - p.x, v.y - p.y];
                  };break;case "V":
                  p = i ? h(0, g, v) : { x: v.x, y: g }, this.command = "L", this.params = [v, p], this.subStart = e.subStart, this.endPoint = p, this.endTangent = function () {
                    return [p.x - v.x, p.y - v.y];
                  }, this.startTangent = function () {
                    return [v.x - p.x, v.y - p.y];
                  };break;case "Q":
                  i ? (u = h(g, y, v), s = h(a[3], a[4], v)) : (u = { x: g, y: y }, s = { x: a[3], y: a[4] }), this.command = "Q", this.params = [v, u, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function () {
                    return [s.x - u.x, s.y - u.y];
                  }, this.startTangent = function () {
                    return [v.x - u.x, v.y - u.y];
                  };break;case "T":
                  s = i ? h(g, y, v) : { x: g, y: y }, "Q" === e.command ? (u = l(e.params[1], v), this.command = "Q", this.params = [v, u, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function () {
                    return [s.x - u.x, s.y - u.y];
                  }, this.startTangent = function () {
                    return [v.x - u.x, v.y - u.y];
                  }) : (this.command = "TL", this.params = [v, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function () {
                    return [s.x - v.x, s.y - v.y];
                  }, this.startTangent = function () {
                    return [v.x - s.x, v.y - s.y];
                  });break;case "C":
                  i ? (u = h(g, y, v), s = h(a[3], a[4], v), c = h(a[5], a[6], v)) : (u = { x: g, y: y }, s = { x: a[3], y: a[4] }, c = { x: a[5], y: a[6] }), this.command = "C", this.params = [v, u, s, c], this.subStart = e.subStart, this.endPoint = c, this.endTangent = function () {
                    return [c.x - s.x, c.y - s.y];
                  }, this.startTangent = function () {
                    return [v.x - u.x, v.y - u.y];
                  };break;case "S":
                  i ? (s = h(g, y, v), c = h(a[3], a[4], v)) : (s = { x: g, y: y }, c = { x: a[3], y: a[4] }), "C" === e.command ? (u = l(e.params[2], v), this.command = "C", this.params = [v, u, s, c], this.subStart = e.subStart, this.endPoint = c, this.endTangent = function () {
                    return [c.x - s.x, c.y - s.y];
                  }, this.startTangent = function () {
                    return [v.x - u.x, v.y - u.y];
                  }) : (this.command = "SQ", this.params = [v, s, c], this.subStart = e.subStart, this.endPoint = c, this.endTangent = function () {
                    return [c.x - s.x, c.y - s.y];
                  }, this.startTangent = function () {
                    return [v.x - s.x, v.y - s.y];
                  });break;case "A":
                  var m = g,
                      x = y,
                      b = a[3],
                      _ = a[4],
                      w = a[5];p = i ? h(a[6], a[7], v) : { x: a[6], y: a[7] }, this.command = "A";var M = function (t, e, n, i, o, a, u) {
                    var s = r.mod(r.toRadian(u), 2 * Math.PI),
                        c = t.x,
                        f = t.y,
                        h = e.x,
                        l = e.y,
                        p = Math.cos(s) * (c - h) / 2 + Math.sin(s) * (f - l) / 2,
                        v = -1 * Math.sin(s) * (c - h) / 2 + Math.cos(s) * (f - l) / 2,
                        g = p * p / (o * o) + v * v / (a * a);g > 1 && (o *= Math.sqrt(g), a *= Math.sqrt(g));var y = o * o * (v * v) + a * a * (p * p),
                        m = Math.sqrt((o * o * (a * a) - y) / y);n === i && (m *= -1), isNaN(m) && (m = 0);var x = m * o * v / a,
                        b = m * -a * p / o,
                        _ = (c + h) / 2 + Math.cos(s) * x - Math.sin(s) * b,
                        w = (f + l) / 2 + Math.sin(s) * x + Math.cos(s) * b,
                        M = d([1, 0], [(p - x) / o, (v - b) / a]),
                        S = d([(p - x) / o, (v - b) / a], [(-1 * p - x) / o, (-1 * v - b) / a]);return 0 === i && S > 0 && (S -= 2 * Math.PI), 1 === i && S < 0 && (S += 2 * Math.PI), [t, _, w, o, a, M, S, s, i];
                  }(v, p, _, w, m, x, b);this.params = M;var S = e.subStart;this.subStart = S, this.endPoint = p;var E = M[5] % (2 * Math.PI);r.isNumberEqual(E, 2 * Math.PI) && (E = 0);var j = M[6] % (2 * Math.PI);r.isNumberEqual(j, 2 * Math.PI) && (j = 0);var A = .001;this.startTangent = function () {
                    0 === w && (A *= -1);var t = M[3] * Math.cos(E - A) + M[1],
                        e = M[4] * Math.sin(E - A) + M[2];return [t - S.x, e - S.y];
                  }, this.endTangent = function () {
                    var t = M[6];t - 2 * Math.PI < 1e-4 && (t = 0);var e = M[3] * Math.cos(E + t + A) + M[1],
                        n = M[4] * Math.sin(E + t - A) + M[2];return [v.x - e, v.y - n];
                  };break;case "Z":
                  this.command = "Z", this.params = [v, e.subStart], this.subStart = e.subStart, this.endPoint = e.subStart;}
            }, isInside: function isInside(t, e, n) {
              var r = this.command,
                  o = this.params,
                  a = this.box;if (a && !i.box(a.minX, a.maxX, a.minY, a.maxY, t, e)) return !1;switch (r) {default:
                  break;case "M":
                  return !1;case "TL":case "L":case "Z":
                  return i.line(o[0].x, o[0].y, o[1].x, o[1].y, n, t, e);case "SQ":case "Q":
                  return i.quadraticline(o[0].x, o[0].y, o[1].x, o[1].y, o[2].x, o[2].y, n, t, e);case "C":
                  return i.cubicline(o[0].x, o[0].y, o[1].x, o[1].y, o[2].x, o[2].y, o[3].x, o[3].y, n, t, e);case "A":
                  var u = o,
                      f = u[1],
                      h = u[2],
                      l = u[3],
                      p = u[4],
                      d = u[5],
                      v = u[6],
                      g = u[7],
                      y = u[8],
                      m = l > p ? l : p,
                      x = l > p ? 1 : l / p,
                      b = l > p ? p / l : 1;u = [t, e, 1];var _ = [1, 0, 0, 0, 1, 0, 0, 0, 1];return c.translate(_, _, [-f, -h]), c.rotate(_, _, -g), c.scale(_, _, [1 / x, 1 / b]), s.transformMat3(u, u, _), i.arcline(0, 0, m, d, d + v, 1 - y, n, u[0], u[1]);}return !1;
            }, draw: function draw(t) {
              var e = this.command,
                  n = this.params,
                  r = void 0,
                  i = void 0,
                  o = void 0;switch (e) {default:
                  break;case "M":
                  t.moveTo(n[1].x, n[1].y);break;case "TL":case "L":
                  t.lineTo(n[1].x, n[1].y);break;case "SQ":case "Q":
                  r = n[1], i = n[2], t.quadraticCurveTo(r.x, r.y, i.x, i.y);break;case "C":
                  r = n[1], i = n[2], o = n[3], t.bezierCurveTo(r.x, r.y, i.x, i.y, o.x, o.y);break;case "A":
                  var a = n,
                      u = a[1],
                      s = a[2],
                      c = a[3],
                      f = a[4],
                      h = a[5],
                      l = a[6],
                      p = a[7],
                      d = a[8],
                      v = c > f ? c : f,
                      g = c > f ? 1 : c / f,
                      y = c > f ? f / c : 1;t.translate(u, s), t.rotate(p), t.scale(g, y), t.arc(0, 0, v, h, h + l, 1 - d), t.scale(1 / g, 1 / y), t.rotate(-p), t.translate(-u, -s);break;case "Z":
                  t.closePath();}
            }, getBBox: function getBBox(t) {
              var e = t / 2,
                  n = this.params,
                  r = void 0,
                  i = void 0,
                  s = void 0,
                  c = void 0;switch (this.command) {default:case "M":case "Z":
                  break;case "TL":case "L":
                  this.box = { minX: Math.min(n[0].x, n[1].x) - e, maxX: Math.max(n[0].x, n[1].x) + e, minY: Math.min(n[0].y, n[1].y) - e, maxY: Math.max(n[0].y, n[1].y) + e };break;case "SQ":case "Q":
                  for (s = 0, c = (i = a.extrema(n[0].x, n[1].x, n[2].x)).length; s < c; s++) {
                    i[s] = a.at(n[0].x, n[1].x, n[2].x, i[s]);
                  }for (i.push(n[0].x, n[2].x), s = 0, c = (r = a.extrema(n[0].y, n[1].y, n[2].y)).length; s < c; s++) {
                    r[s] = a.at(n[0].y, n[1].y, n[2].y, r);
                  }r.push(n[0].y, n[2].y), this.box = { minX: Math.min.apply(Math, i) - e, maxX: Math.max.apply(Math, i) + e, minY: Math.min.apply(Math, r) - e, maxY: Math.max.apply(Math, r) + e };break;case "C":
                  for (s = 0, c = (i = o.extrema(n[0].x, n[1].x, n[2].x, n[3].x)).length; s < c; s++) {
                    i[s] = o.at(n[0].x, n[1].x, n[2].x, n[3].x, i[s]);
                  }for (s = 0, c = (r = o.extrema(n[0].y, n[1].y, n[2].y, n[3].y)).length; s < c; s++) {
                    r[s] = o.at(n[0].y, n[1].y, n[2].y, n[3].y, r[s]);
                  }i.push(n[0].x, n[3].x), r.push(n[0].y, n[3].y), this.box = { minX: Math.min.apply(Math, i) - e, maxX: Math.max.apply(Math, i) + e, minY: Math.min.apply(Math, r) - e, maxY: Math.max.apply(Math, r) + e };break;case "A":
                  var f = n,
                      h = f[1],
                      l = f[2],
                      p = f[3],
                      d = f[4],
                      v = f[5],
                      g = f[6],
                      y = f[7],
                      m = f[8],
                      x = v,
                      b = v + g,
                      _ = u.xExtrema(y, p, d),
                      w = 1 / 0,
                      M = -1 / 0,
                      S = [x, b];for (s = 2 * -Math.PI; s <= 2 * Math.PI; s += Math.PI) {
                    var E = _ + s;1 === m ? x < E && E < b && S.push(E) : b < E && E < x && S.push(E);
                  }for (s = 0, c = S.length; s < c; s++) {
                    var j = u.xAt(y, p, d, h, S[s]);j < w && (w = j), j > M && (M = j);
                  }var A = u.yExtrema(y, p, d),
                      O = 1 / 0,
                      P = -1 / 0,
                      I = [x, b];for (s = 2 * -Math.PI; s <= 2 * Math.PI; s += Math.PI) {
                    var T = A + s;1 === m ? x < T && T < b && I.push(T) : b < T && T < x && I.push(T);
                  }for (s = 0, c = I.length; s < c; s++) {
                    var C = u.yAt(y, p, d, l, I[s]);C < O && (O = C), C > P && (P = C);
                  }this.box = { minX: w - e, maxX: M + e, minY: O - e, maxY: P + e };}
            } }), t.exports = v;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.ATTRS = { x: 0, y: 0, text: null, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom", lineHeight: null, textArr: null }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "text", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1, lineCount: 1, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom" };
            }, initTransform: function initTransform() {
              this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]);var t = this.__attrs.fontSize;t && +t < 12 && this.transform([["t", -1 * this.__attrs.x, -1 * this.__attrs.y], ["s", +t / 12, +t / 12], ["t", this.__attrs.x, this.__attrs.y]]);
            }, __assembleFont: function __assembleFont() {
              var t = this.__attrs,
                  e = t.fontSize,
                  n = t.fontFamily,
                  r = t.fontWeight,
                  i = t.fontStyle,
                  o = t.fontVariant;t.font = [i, o, r, e + "px", n].join(" ");
            }, __afterSetAttrFontSize: function __afterSetAttrFontSize() {
              this.__assembleFont();
            }, __afterSetAttrFontFamily: function __afterSetAttrFontFamily() {
              this.__assembleFont();
            }, __afterSetAttrFontWeight: function __afterSetAttrFontWeight() {
              this.__assembleFont();
            }, __afterSetAttrFontStyle: function __afterSetAttrFontStyle() {
              this.__assembleFont();
            }, __afterSetAttrFontVariant: function __afterSetAttrFontVariant() {
              this.__assembleFont();
            }, __afterSetAttrFont: function __afterSetAttrFont() {}, __afterSetAttrText: function __afterSetAttrText() {
              var t = this.__attrs,
                  e = t.text,
                  n = void 0;if (r.isString(e) && -1 !== e.indexOf("\n")) {
                var i = (n = e.split("\n")).length;t.lineCount = i, t.textArr = n;
              }
            }, __getTextHeight: function __getTextHeight() {
              var t = this.__attrs,
                  e = t.lineCount,
                  n = 1 * t.fontSize;return e > 1 ? n * e + this.__getSpaceingY() * (e - 1) : n;
            }, __afterSetAttrAll: function __afterSetAttrAll(t) {
              ("fontSize" in t || "fontWeight" in t || "fontStyle" in t || "fontVariant" in t || "fontFamily" in t) && this.__assembleFont(), "text" in t && this.__afterSetAttrText(t.text);
            }, isHitBox: function isHitBox() {
              return !1;
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y,
                  r = this.measureText();if (!r) return { minX: e, minY: n, maxX: e, maxY: n };var i = this.__getTextHeight(),
                  o = t.textAlign,
                  a = t.textBaseline,
                  u = this.getHitLineWidth(),
                  s = { x: e, y: n - i };o && ("end" === o || "right" === o ? s.x -= r : "center" === o && (s.x -= r / 2)), a && ("top" === a ? s.y += i : "middle" === a && (s.y += i / 2)), this.set("startPoint", s);var c = u / 2;return { minX: s.x - c, minY: s.y - c, maxX: s.x + r + c, maxY: s.y + i + c };
            }, __getSpaceingY: function __getSpaceingY() {
              var t = this.__attrs,
                  e = t.lineHeight,
                  n = 1 * t.fontSize;return e ? e - n : .14 * n;
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.getBBox();if (this.hasFill() || this.hasStroke()) return o.box(n.minX, n.maxX, n.minY, n.maxY, t, e);
            }, drawInner: function drawInner(t) {
              var e = this.__attrs,
                  n = e.text;if (n) {
                var i = e.textArr,
                    o = e.x,
                    a = e.y;if (t.beginPath(), this.hasStroke() && (i ? this.__drawTextArr(t, !1) : t.strokeText(n, o, a)), this.hasFill()) {
                  var u = e.fillOpacity;r.isNil(u) || 1 === u || (t.globalAlpha = u), i ? this.__drawTextArr(t, !0) : t.fillText(n, o, a);
                }
              }
            }, __drawTextArr: function __drawTextArr(t, e) {
              var n = this.__attrs.textArr,
                  i = this.__attrs.textBaseline,
                  o = 1 * this.__attrs.fontSize,
                  a = this.__getSpaceingY(),
                  u = this.__attrs.x,
                  s = this.__attrs.y,
                  c = this.getBBox(),
                  f = c.maxY - c.minY,
                  h = void 0;r.each(n, function (n, r) {
                h = s + r * (a + o) - f + o, "middle" === i && (h += f - o - (f - o) / 2), "top" === i && (h += f - o), e ? t.fillText(n, u, h) : t.strokeText(n, u, h);
              });
            }, measureText: function measureText() {
              var t = this.__attrs,
                  e = t.text,
                  n = t.font,
                  i = t.textArr,
                  o = void 0,
                  a = 0;if (!r.isNil(e)) {
                var u = document.createElement("canvas").getContext("2d");return u.save(), u.font = n, i ? r.each(i, function (t) {
                  o = u.measureText(t).width, a < o && (a = o), u.restore();
                }) : (a = u.measureText(e).width, u.restore()), a;
              }
            } }), t.exports = a;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = n(16),
              u = n(52),
              s = function t(e) {
            t.superclass.constructor.call(this, e);
          };s.ATTRS = { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1, startArrow: !1, endArrow: !1 }, r.extend(s, i), r.augment(s, { canStroke: !0, type: "line", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1, startArrow: !1, endArrow: !1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x1,
                  n = t.y1,
                  r = t.x2,
                  i = t.y2,
                  o = this.getHitLineWidth();return u.box(e, n, r, i, o);
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.__attrs,
                  r = n.x1,
                  i = n.y1,
                  a = n.x2,
                  u = n.y2,
                  s = this.getHitLineWidth();return !!this.hasStroke() && o.line(r, i, a, u, s, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.x1,
                  r = e.y1,
                  i = e.x2,
                  o = e.y2;(t = t || self.get("context")).beginPath(), t.moveTo(n, r), t.lineTo(i, o);
            }, afterPath: function afterPath(t) {
              var e = this.__attrs,
                  n = e.x1,
                  r = e.y1,
                  i = e.x2,
                  o = e.y2;t = t || this.get("context"), e.startArrow && a.addStartArrow(t, e, i, o, n, r), e.endArrow && a.addEndArrow(t, e, n, r, i, o);
            }, getPoint: function getPoint(t) {
              var e = this.__attrs;return { x: u.at(e.x1, e.x2, t), y: u.at(e.y1, e.y2, t) };
            } }), t.exports = s;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.ATTRS = { x: 0, y: 0, img: void 0, width: 0, height: 0, sx: null, sy: null, swidth: null, sheight: null }, r.extend(a, i), r.augment(a, { type: "image", __afterSetAttrImg: function __afterSetAttrImg(t) {
              this.__setAttrImg(t);
            }, __afterSetAttrAll: function __afterSetAttrAll(t) {
              t.img && this.__setAttrImg(t.img);
            }, isHitBox: function isHitBox() {
              return !1;
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y;return { minX: e, minY: n, maxX: e + t.width, maxY: n + t.height };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.__attrs;if (this.get("toDraw") || !n.img) return !1;var r = n.x,
                  i = n.y,
                  a = n.width,
                  u = n.height;return o.rect(r, i, a, u, t, e);
            }, __setLoading: function __setLoading(t) {
              var e = this.get("canvas");return !1 === t && !0 === this.get("toDraw") && (this.__cfg.loading = !1, e.draw()), t;
            }, __setAttrImg: function __setAttrImg(t) {
              var e = this,
                  n = e.__attrs;if (!r.isString(t)) return t instanceof Image ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : t instanceof HTMLElement && r.isString(t.nodeName) && "CANVAS" === t.nodeName.toUpperCase() ? (n.width || e.attr("width", Number(t.getAttribute("width"))), n.height || e.attr("height", Number(t.getAttribute("height"))), t) : t instanceof ImageData ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : null;var i = new Image();i.onload = function () {
                if (e.get("destroyed")) return !1;e.attr("imgSrc", t), e.attr("img", i);var n = e.get("callback");n && n.call(e), e.set("loading", !1);
              }, i.src = t, e.set("loading", !0);
            }, drawInner: function drawInner(t) {
              this.get("loading") ? this.set("toDraw", !0) : this.__drawImage(t);
            }, __drawImage: function __drawImage(t) {
              var e = this.__attrs,
                  n = e.x,
                  i = e.y,
                  o = e.img,
                  a = e.width,
                  u = e.height,
                  s = e.sx,
                  c = e.sy,
                  f = e.swidth,
                  h = e.sheight;if (this.set("toDraw", !1), o instanceof Image || o instanceof HTMLElement && r.isString(o.nodeName) && "CANVAS" === o.nodeName.toUpperCase()) {
                if (r.isNil(s) || r.isNil(c) || r.isNil(f) || r.isNil(h)) return void t.drawImage(o, n, i, a, u);if (!(r.isNil(s) || r.isNil(c) || r.isNil(f) || r.isNil(h))) return void t.drawImage(o, s, c, f, h, n, i, a, u);
              } else if (o instanceof ImageData) return void t.putImageData(o, n, i, s || 0, c || 0, f || a, h || u);
            } }), t.exports = a;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.ATTRS = { points: null, lineWidth: 1 }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "polygon", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs.points,
                  e = this.getHitLineWidth();if (!t || 0 === t.length) return null;var n = 1 / 0,
                  i = 1 / 0,
                  o = -1 / 0,
                  a = -1 / 0;r.each(t, function (t) {
                var e = t[0],
                    r = t[1];e < n && (n = e), e > o && (o = e), r < i && (i = r), r > a && (a = r);
              });var u = e / 2;return { minX: n - u, minY: i - u, maxX: o + u, maxY: a + u };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.hasFill(),
                  r = this.hasStroke();return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e);
            }, __isPointInFill: function __isPointInFill(t, e) {
              var n = this.get("context");return this.createPath(), n.isPointInPath(t, e);
            }, __isPointInStroke: function __isPointInStroke(t, e) {
              var n = this.__attrs.points;if (n.length < 2) return !1;var r = this.getHitLineWidth(),
                  i = n.slice(0);return n.length >= 3 && i.push(n[0]), o.polyline(i, r, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs.points;e.length < 2 || ((t = t || this.get("context")).beginPath(), r.each(e, function (e, n) {
                0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1]);
              }), t.closePath());
            } }), t.exports = a;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = n(16),
              u = n(52),
              s = function t(e) {
            t.superclass.constructor.call(this, e);
          };s.ATTRS = { points: null, lineWidth: 1, startArrow: !1, endArrow: !1, tCache: null }, r.extend(s, i), r.augment(s, { canStroke: !0, type: "polyline", tCache: null, getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1, startArrow: !1, endArrow: !1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = this.getHitLineWidth(),
                  n = t.points;if (!n || 0 === n.length) return null;var i = 1 / 0,
                  o = 1 / 0,
                  a = -1 / 0,
                  u = -1 / 0;r.each(n, function (t) {
                var e = t[0],
                    n = t[1];e < i && (i = e), e > a && (a = e), n < o && (o = n), n > u && (u = n);
              });var s = e / 2;return { minX: i - s, minY: o - s, maxX: a + s, maxY: u + s };
            }, __setTcache: function __setTcache() {
              var t = this.__attrs.points,
                  e = 0,
                  n = 0,
                  i = [],
                  o = void 0,
                  a = void 0;t && 0 !== t.length && (r.each(t, function (n, r) {
                t[r + 1] && (e += u.len(n[0], n[1], t[r + 1][0], t[r + 1][1]));
              }), e <= 0 || (r.each(t, function (r, s) {
                t[s + 1] && ((o = [])[0] = n / e, a = u.len(r[0], r[1], t[s + 1][0], t[s + 1][1]), n += a, o[1] = n / e, i.push(o));
              }), this.tCache = i));
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.__attrs;if (this.hasStroke()) {
                var r = n.points;if (r.length < 2) return !1;var i = n.lineWidth;return o.polyline(r, i, t, e);
              }return !1;
            }, createPath: function createPath(t) {
              var e,
                  n = this.__attrs.points,
                  r = void 0;if (!(n.length < 2)) {
                for ((t = t || this.get("context")).beginPath(), t.moveTo(n[0][0], n[0][1]), r = 1, e = n.length - 1; r < e; r++) {
                  t.lineTo(n[r][0], n[r][1]);
                }t.lineTo(n[e][0], n[e][1]);
              }
            }, afterPath: function afterPath(t) {
              var e = this.__attrs,
                  n = e.points,
                  r = n.length - 1;t = t || this.get("context"), e.startArrow && a.addStartArrow(t, e, n[1][0], n[1][1], n[0][0], n[0][1]), e.endArrow && a.addEndArrow(t, e, n[r - 1][0], n[r - 1][1], n[r][0], n[r][1]);
            }, getPoint: function getPoint(t) {
              var e = this.__attrs.points,
                  n = this.tCache,
                  i = void 0,
                  o = void 0;return n || (this.__setTcache(), n = this.tCache), r.each(n, function (e, n) {
                t >= e[0] && t <= e[1] && (i = (t - e[0]) / (e[1] - e[0]), o = n);
              }), { x: u.at(e[o][0], e[o + 1][0], i), y: u.at(e[o][1], e[o + 1][1], i) };
            } }), t.exports = s;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = n(54),
              u = n(16);function s(t, e, n) {
            return t + e * Math.cos(n);
          }function c(t, e, n) {
            return t + e * Math.sin(n);
          }var f = function t(e) {
            t.superclass.constructor.call(this, e);
          };f.ATTRS = { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1, startArrow: !1, endArrow: !1 }, r.extend(f, i), r.augment(f, { canStroke: !0, type: "arc", getDefaultAttrs: function getDefaultAttrs() {
              return { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1, startArrow: !1, endArrow: !1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y,
                  r = t.r,
                  i = t.startAngle,
                  o = t.endAngle,
                  u = t.clockwise,
                  s = this.getHitLineWidth() / 2,
                  c = a.box(e, n, r, i, o, u);return c.minX -= s, c.minY -= s, c.maxX += s, c.maxY += s, c;
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  a = n.r,
                  u = n.startAngle,
                  s = n.endAngle,
                  c = n.clockwise,
                  f = this.getHitLineWidth();return !!this.hasStroke() && o.arcline(r, i, a, u, s, c, f, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.x,
                  r = e.y,
                  i = e.r,
                  o = e.startAngle,
                  a = e.endAngle,
                  u = e.clockwise;(t = t || self.get("context")).beginPath(), t.arc(n, r, i, o, a, u);
            }, afterPath: function afterPath(t) {
              var e = this.__attrs,
                  n = e.x,
                  r = e.y,
                  i = e.r,
                  o = e.startAngle,
                  a = e.endAngle,
                  f = e.clockwise;t = t || this.get("context");var h = void 0,
                  l = void 0,
                  p = void 0,
                  d = void 0,
                  v = void 0;e.startArrow && (h = Math.PI / 180, f && (h *= -1), l = s(n, i, o + h), p = c(r, i, o + h), d = s(n, i, o), v = c(r, i, o), u.addStartArrow(t, e, l, p, d, v)), e.endArrow && (h = Math.PI / 180, f && (h *= -1), l = s(n, i, a + h), p = c(r, i, a + h), d = s(n, i, a), v = c(r, i, a), u.addEndArrow(t, e, d, v, l, p));
            } }), t.exports = f;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = n(54),
              u = n(3).vec2,
              s = function t(e) {
            t.superclass.constructor.call(this, e);
          };s.ATTRS = { x: 0, y: 0, rs: 0, re: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1 }, r.extend(s, i), r.augment(s, { canFill: !0, canStroke: !0, type: "fan", getDefaultAttrs: function getDefaultAttrs() {
              return { clockwise: !1, lineWidth: 1, rs: 0, re: 0 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.x,
                  n = t.y,
                  r = t.rs,
                  i = t.re,
                  o = t.startAngle,
                  u = t.endAngle,
                  s = t.clockwise,
                  c = this.getHitLineWidth(),
                  f = a.box(e, n, r, o, u, s),
                  h = a.box(e, n, i, o, u, s),
                  l = c / 2;return { minX: Math.min(f.minX, h.minX) - l, minY: Math.min(f.minY, h.minY) - l, maxX: Math.max(f.maxX, h.maxX) + l, maxY: Math.max(f.maxY, h.maxY) + l };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.hasFill(),
                  r = this.hasStroke();return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e);
            }, __isPointInFill: function __isPointInFill(t, e) {
              var n = this.__attrs,
                  i = n.x,
                  o = n.y,
                  s = n.rs,
                  c = n.re,
                  f = n.startAngle,
                  h = n.endAngle,
                  l = n.clockwise,
                  p = [t - i, e - o],
                  d = u.angleTo([1, 0], p),
                  v = a.nearAngle(d, f, h, l);if (r.isNumberEqual(d, v)) {
                var g = u.squaredLength(p);if (s * s <= g && g <= c * c) return !0;
              }return !1;
            }, __isPointInStroke: function __isPointInStroke(t, e) {
              var n = this.__attrs,
                  r = n.x,
                  i = n.y,
                  a = n.rs,
                  u = n.re,
                  s = n.startAngle,
                  c = n.endAngle,
                  f = n.clockwise,
                  h = this.getHitLineWidth(),
                  l = { x: Math.cos(s) * a + r, y: Math.sin(s) * a + i },
                  p = { x: Math.cos(s) * u + r, y: Math.sin(s) * u + i },
                  d = { x: Math.cos(c) * a + r, y: Math.sin(c) * a + i },
                  v = { x: Math.cos(c) * u + r, y: Math.sin(c) * u + i };return !!o.line(l.x, l.y, p.x, p.y, h, t, e) || !!o.line(d.x, d.y, v.x, v.y, h, t, e) || !!o.arcline(r, i, a, s, c, f, h, t, e) || !!o.arcline(r, i, u, s, c, f, h, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.x,
                  r = e.y,
                  i = e.rs,
                  o = e.re,
                  a = e.startAngle,
                  u = e.endAngle,
                  s = e.clockwise,
                  c = { x: Math.cos(a) * i + n, y: Math.sin(a) * i + r },
                  f = { x: Math.cos(a) * o + n, y: Math.sin(a) * o + r },
                  h = { x: Math.cos(u) * i + n, y: Math.sin(u) * i + r };(t = t || self.get("context")).beginPath(), t.moveTo(c.x, c.y), t.lineTo(f.x, f.y), t.arc(n, r, o, a, u, s), t.lineTo(h.x, h.y), t.arc(n, r, i, u, a, !s), t.closePath();
            } }), t.exports = s;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = n(16),
              u = n(32),
              s = function t(e) {
            t.superclass.constructor.call(this, e);
          };s.ATTRS = { p1: null, p2: null, p3: null, p4: null, lineWidth: 1, startArrow: !1, endArrow: !1 }, r.extend(s, i), r.augment(s, { canStroke: !0, type: "cubic", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1, startArrow: !1, endArrow: !1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.p1,
                  n = t.p2,
                  i = t.p3,
                  o = t.p4,
                  a = this.getHitLineWidth(),
                  s = void 0,
                  c = void 0;if (r.isNil(e) || r.isNil(n) || r.isNil(i) || r.isNil(o)) return null;var f = a / 2,
                  h = u.extrema(e[0], n[0], i[0], o[0]);for (s = 0, c = h.length; s < c; s++) {
                h[s] = u.at(e[0], n[0], i[0], o[0], h[s]);
              }var l = u.extrema(e[1], n[1], i[1], o[1]);for (s = 0, c = l.length; s < c; s++) {
                l[s] = u.at(e[1], n[1], i[1], o[1], l[s]);
              }return h.push(e[0], o[0]), l.push(e[1], o[1]), { minX: Math.min.apply(Math, h) - f, maxX: Math.max.apply(Math, h) + f, minY: Math.min.apply(Math, l) - f, maxY: Math.max.apply(Math, l) + f };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.__attrs,
                  r = n.p1,
                  i = n.p2,
                  a = n.p3,
                  u = n.p4,
                  s = this.getHitLineWidth();return o.cubicline(r[0], r[1], i[0], i[1], a[0], a[1], u[0], u[1], s, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.p1,
                  i = e.p2,
                  o = e.p3,
                  a = e.p4;t = t || self.get("context"), r.isNil(n) || r.isNil(i) || r.isNil(o) || r.isNil(a) || (t.beginPath(), t.moveTo(n[0], n[1]), t.bezierCurveTo(i[0], i[1], o[0], o[1], a[0], a[1]));
            }, afterPath: function afterPath(t) {
              var e = this.__attrs,
                  n = e.p1,
                  r = e.p2,
                  i = e.p3,
                  o = e.p4;t = t || this.get("context"), e.startArrow && a.addStartArrow(t, e, r[0], r[1], n[0], n[1]), e.endArrow && a.addEndArrow(t, e, i[0], i[1], o[0], o[1]);
            }, getPoint: function getPoint(t) {
              var e = this.__attrs;return { x: u.at(e.p4[0], e.p3[0], e.p2[0], e.p1[0], t), y: u.at(e.p4[1], e.p3[1], e.p2[1], e.p1[1], t) };
            } }), t.exports = s;
        }, function (t, e, n) {
          var r = n(0),
              i = n(1),
              o = n(2),
              a = n(16),
              u = n(53),
              s = function t(e) {
            t.superclass.constructor.call(this, e);
          };s.ATTRS = { p1: null, p2: null, p3: null, lineWidth: 1, startArrow: !1, endArrow: !1 }, r.extend(s, i), r.augment(s, { canStroke: !0, type: "quadratic", getDefaultAttrs: function getDefaultAttrs() {
              return { lineWidth: 1, startArrow: !1, endArrow: !1 };
            }, calculateBox: function calculateBox() {
              var t = this.__attrs,
                  e = t.p1,
                  n = t.p2,
                  i = t.p3,
                  o = this.getHitLineWidth(),
                  a = void 0,
                  s = void 0;if (r.isNil(e) || r.isNil(n) || r.isNil(i)) return null;var c = o / 2,
                  f = u.extrema(e[0], n[0], i[0]);for (a = 0, s = f.length; a < s; a++) {
                f[a] = u.at(e[0], n[0], i[0], f[a]);
              }f.push(e[0], i[0]);var h = u.extrema(e[1], n[1], i[1]);for (a = 0, s = h.length; a < s; a++) {
                h[a] = u.at(e[1], n[1], i[1], h[a]);
              }return h.push(e[1], i[1]), { minX: Math.min.apply(Math, f) - c, maxX: Math.max.apply(Math, f) + c, minY: Math.min.apply(Math, h) - c, maxY: Math.max.apply(Math, h) + c };
            }, isPointInPath: function isPointInPath(t, e) {
              var n = this.__attrs,
                  r = n.p1,
                  i = n.p2,
                  a = n.p3,
                  u = this.getHitLineWidth();return o.quadraticline(r[0], r[1], i[0], i[1], a[0], a[1], u, t, e);
            }, createPath: function createPath(t) {
              var e = this.__attrs,
                  n = e.p1,
                  i = e.p2,
                  o = e.p3;r.isNil(n) || r.isNil(i) || r.isNil(o) || ((t = t || this.get("context")).beginPath(), t.moveTo(n[0], n[1]), t.quadraticCurveTo(i[0], i[1], o[0], o[1]));
            }, afterPath: function afterPath(t) {
              var e = this.__attrs,
                  n = e.p1,
                  r = e.p2,
                  i = e.p3;t = t || this.get("context"), e.startArrow && a.addStartArrow(t, e, r[0], r[1], n[0], n[1]), e.endArrow && a.addEndArrow(t, e, r[0], r[1], i[0], i[1]);
            }, getPoint: function getPoint(t) {
              var e = this.__attrs;return { x: u.at(e.p1[0], e.p2[0], e.p3[0], t), y: u.at(e.p1[1], e.p2[1], e.p3[1], t) };
            } }), t.exports = s;
        }, function (t, e, n) {
          t.exports = { Canvas: n(115), Group: n(90), Shape: n(1), Rect: n(55), Circle: n(101), Ellipse: n(102), Path: n(103), Text: n(105), Line: n(106), Image: n(107), Polygon: n(108), Polyline: n(109), Arc: n(110), Fan: n(111), Cubic: n(112), Quadratic: n(113), Marker: n(56), PathUtil: n(46), PathSegment: n(104), MatrixUtil: n(3), CommonUtil: n(17), DomUtil: n(88), Event: n(89), version: "2.0.7-beta.6" };
        }, function (t, e, n) {
          var r = n(0),
              i = n(89),
              o = n(90),
              a = function t(e) {
            t.superclass.constructor.call(this, e);
          };a.CFG = { eventEnable: !0, width: null, height: null, widthCanvas: null, heightCanvas: null, widthStyle: null, heightStyle: null, containerDOM: null, canvasDOM: null, pixelRatio: null }, r.extend(a, o), r.augment(a, { init: function init() {
              a.superclass.init.call(this), this._setGlobalParam(), this._setDOM(), this._setInitSize(), this._setCanvas(), this._scale(), this.get("eventEnable") && this._registEvents();
            }, getEmitter: function getEmitter(t, e) {
              if (t) {
                if (!r.isEmpty(t._getEvents())) return t;var n = t.get("parent");if (n && !e.propagationStopped) return this.getEmitter(n, e);
              }
            }, _getEventObj: function _getEventObj(t, e, n, r) {
              var o = new i(t, e, !0, !0);return o.x = n.x, o.y = n.y, o.clientX = e.clientX, o.clientY = e.clientY, o.currentTarget = r, o.target = r, o;
            }, _triggerEvent: function _triggerEvent(t, e) {
              var n = this.getPointByClient(e.clientX, e.clientY),
                  r = this.getShape(n.x, n.y),
                  i = void 0;if ("mousemove" === t) {
                var o = this._getEventObj("mousemove", e, n, this);this.emit("mousemove", o);var a = this.get("preShape");if (a && a !== r) {
                  var u = this._getEventObj("mouseleave", e, n, a);(i = this.getEmitter(a, e)) && i.emit("mouseleave", u);
                }if (r) {
                  var s = this._getEventObj("mousemove", e, n, r);if ((i = this.getEmitter(r, e)) && i.emit("mousemove", s), a !== r) {
                    var c = this._getEventObj("mouseenter", e, n, r);i && i.emit("mouseenter", c, e);
                  }
                }this.set("preShape", r);
              } else {
                var f = this._getEventObj(t, e, n, r || this);(i = this.getEmitter(r, e)) && i !== this && i.emit(t, f), this.emit(t, f);
              }var h = this.get("el");r && !r.get("destroyed") && (h.style.cursor = r.attr("cursor") || "default");
            }, _registEvents: function _registEvents() {
              var t = this,
                  e = t.get("el");e.addEventListener("mouseout", function (e) {
                t._triggerEvent("mouseleave", e);
              }, !1), e.addEventListener("mouseover", function (e) {
                t._triggerEvent("mouseenter", e);
              }, !1), e.addEventListener("mousemove", function (e) {
                t._triggerEvent("mousemove", e);
              }, !1), e.addEventListener("mousedown", function (e) {
                t._triggerEvent("mousedown", e);
              }, !1), e.addEventListener("mouseup", function (e) {
                t._triggerEvent("mouseup", e);
              }, !1), e.addEventListener("click", function (e) {
                t._triggerEvent("click", e);
              }, !1), e.addEventListener("dblclick", function (e) {
                t._triggerEvent("dblclick", e);
              }, !1), e.addEventListener("touchstart", function (e) {
                r.isEmpty(e.touches) || t._triggerEvent("touchstart", e.touches[0]);
              }, !1), e.addEventListener("touchmove", function (e) {
                r.isEmpty(e.touches) || t._triggerEvent("touchmove", e.touches[0]);
              }, !1), e.addEventListener("touchend", function (e) {
                r.isEmpty(e.changedTouches) || t._triggerEvent("touchend", e.changedTouches[0]);
              }, !1);
            }, _scale: function _scale() {
              var t = this.get("pixelRatio");this.scale(t, t);
            }, _setCanvas: function _setCanvas() {
              var t = this.get("canvasDOM");this.set("el", t), this.set("context", t.getContext("2d")), this.set("canvas", this);
            }, _setGlobalParam: function _setGlobalParam() {
              this.get("pixelRatio") || this.set("pixelRatio", r.getRatio());
            }, _setDOM: function _setDOM() {
              this._setContainer(), this._setLayer();
            }, _setContainer: function _setContainer() {
              var t = this.get("containerId"),
                  e = this.get("containerDOM");e || (e = document.getElementById(t), this.set("containerDOM", e)), r.modifyCSS(e, { position: "relative" });
            }, _setLayer: function _setLayer() {
              var t = this.get("containerDOM"),
                  e = r.uniqueId("canvas_");if (t) {
                var n = r.createDom('<canvas id="' + e + '"></canvas>');t.appendChild(n), this.set("canvasDOM", n);
              }
            }, _setInitSize: function _setInitSize() {
              this.changeSize(this.get("width"), this.get("height"));
            }, _reSize: function _reSize() {
              var t = this.get("canvasDOM"),
                  e = this.get("widthCanvas"),
                  n = this.get("heightCanvas"),
                  r = this.get("widthStyle"),
                  i = this.get("heightStyle");t.style.width = r, t.style.height = i, t.setAttribute("width", e), t.setAttribute("height", n);
            }, getWidth: function getWidth() {
              var t = this.get("pixelRatio");return this.get("width") * t;
            }, getHeight: function getHeight() {
              var t = this.get("pixelRatio");return this.get("height") * t;
            }, changeSize: function changeSize(t, e) {
              var n = this.get("pixelRatio"),
                  r = t * n,
                  i = e * n;this.set("widthCanvas", r), this.set("heightCanvas", i), this.set("widthStyle", t + "px"), this.set("heightStyle", e + "px"), this.set("width", t), this.set("height", e), this._reSize();
            }, getPointByClient: function getPointByClient(t, e) {
              var n = this.get("el"),
                  r = n.getBoundingClientRect(),
                  i = r.right - r.left,
                  o = r.bottom - r.top;return { x: (t - r.left) * (n.width / i), y: (e - r.top) * (n.height / o) };
            }, getClientByPoint: function getClientByPoint(t, e) {
              var n = this.get("el"),
                  r = n.getBoundingClientRect(),
                  i = r.right - r.left,
                  o = r.bottom - r.top;return { clientX: t / (n.width / i) + r.left, clientY: e / (n.height / o) + r.top };
            }, beforeDraw: function beforeDraw() {
              var t = this.get("context"),
                  e = this.get("el");t && t.clearRect(0, 0, e.width, e.height);
            }, _beginDraw: function _beginDraw() {
              this.setSilent("toDraw", !0);
            }, _endDraw: function _endDraw() {
              this.setSilent("toDraw", !1);
            }, draw: function draw() {
              var t = this;t.get("destroyed") || (t.get("animateHandler") ? this._beginDraw() : function e() {
                t.setSilent("animateHandler", r.requestAnimationFrame(function () {
                  t.setSilent("animateHandler", void 0), t.get("toDraw") && e();
                })), t.beforeDraw();try {
                  var n = t.get("context");a.superclass.draw.call(t, n);
                } catch (e) {
                  console.warn("error in draw canvas, detail as:"), console.warn(e), t._endDraw();
                }t._endDraw();
              }());
            }, destroy: function destroy() {
              var t = this.get("containerDOM"),
                  e = this.get("canvasDOM");e && t && t.removeChild(e), a.superclass.destroy.call(this);
            } }), t.exports = a;
        }, function (t, e) {
          var n,
              r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          };n = function () {
            return this;
          }();try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window);
          }t.exports = n;
        }, function (t, e, n) {
          var r = n(11),
              i = Object.prototype,
              o = i.hasOwnProperty,
              a = i.toString,
              u = r ? r.toStringTag : void 0;t.exports = function (t) {
            var e = o.call(t, u),
                n = t[u];try {
              t[u] = void 0;var r = !0;
            } catch (t) {}var i = a.call(t);return r && (e ? t[u] = n : delete t[u]), i;
          };
        }, function (t, e) {
          var n = Object.prototype.toString;t.exports = function (t) {
            return n.call(t);
          };
        }, function (t, e, n) {
          var r = n(7),
              i = n(4),
              o = "[object Boolean]";t.exports = function (t) {
            return !0 === t || !1 === t || i(t) && r(t) == o;
          };
        }, function (t, e) {
          t.exports = function (t) {
            return null == t;
          };
        }, function (t, e, n) {
          var r = n(7),
              i = n(4),
              o = "[object Number]";t.exports = function (t) {
            return "number" == typeof t || i(t) && r(t) == o;
          };
        }, function (t, e, n) {
          var r = n(59),
              i = n(12),
              o = n(34),
              a = n(6),
              u = n(9),
              s = n(19),
              c = n(18),
              f = n(23),
              h = "[object Map]",
              l = "[object Set]",
              p = Object.prototype.hasOwnProperty;t.exports = function (t) {
            if (null == t) return !0;if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || s(t) || f(t) || o(t))) return !t.length;var e = i(t);if (e == h || e == l) return !t.size;if (c(t)) return !r(t).length;for (var n in t) {
              if (p.call(t, n)) return !1;
            }return !0;
          };
        }, function (t, e, n) {
          var r = n(60)(Object.keys, Object);t.exports = r;
        }, function (t, e, n) {
          var r = n(10)(n(5), "DataView");t.exports = r;
        }, function (t, e, n) {
          var r = n(22),
              i = n(126),
              o = n(8),
              a = n(61),
              u = /^\[object .+?Constructor\]$/,
              s = Function.prototype,
              c = Object.prototype,
              f = s.toString,
              h = c.hasOwnProperty,
              l = RegExp("^" + f.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");t.exports = function (t) {
            return !(!o(t) || i(t)) && (r(t) ? l : u).test(a(t));
          };
        }, function (t, e, n) {
          var r,
              i = n(127),
              o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";t.exports = function (t) {
            return !!o && o in t;
          };
        }, function (t, e, n) {
          var r = n(5)["__core-js_shared__"];t.exports = r;
        }, function (t, e) {
          t.exports = function (t, e) {
            return null == t ? void 0 : t[e];
          };
        }, function (t, e, n) {
          var r = n(10)(n(5), "Promise");t.exports = r;
        }, function (t, e, n) {
          var r = n(10)(n(5), "Set");t.exports = r;
        }, function (t, e, n) {
          var r = n(10)(n(5), "WeakMap");t.exports = r;
        }, function (t, e, n) {
          var r = n(7),
              i = n(4),
              o = "[object Arguments]";t.exports = function (t) {
            return i(t) && r(t) == o;
          };
        }, function (t, e) {
          t.exports = function () {
            return !1;
          };
        }, function (t, e, n) {
          var r = n(7),
              i = n(62),
              o = n(4),
              a = {};a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
            return o(t) && i(t.length) && !!a[r(t)];
          };
        }, function (t, e, n) {
          var r = n(63),
              i = 0;t.exports = function (t) {
            var e = ++i;return r(t) + e;
          };
        }, function (t, e, n) {
          var r = n(11),
              i = n(37),
              o = n(6),
              a = n(137),
              u = 1 / 0,
              s = r ? r.prototype : void 0,
              c = s ? s.toString : void 0;t.exports = function t(e) {
            if ("string" == typeof e) return e;if (o(e)) return i(e, t) + "";if (a(e)) return c ? c.call(e) : "";var n = e + "";return "0" == n && 1 / e == -u ? "-0" : n;
          };
        }, function (t, e, n) {
          var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          },
              i = n(7),
              o = n(4),
              u = "[object Symbol]";t.exports = function (t) {
            return "symbol" == (void 0 === t ? "undefined" : r(t)) || o(t) && i(t) == u;
          };
        }, function (t, e, n) {
          var r = n(139),
              i = 4;t.exports = function (t) {
            return r(t, i);
          };
        }, function (t, e, n) {
          var r = n(38),
              i = n(65),
              o = n(39),
              a = n(162),
              u = n(164),
              s = n(69),
              c = n(30),
              f = n(167),
              h = n(169),
              l = n(73),
              p = n(170),
              d = n(12),
              v = n(171),
              g = n(172),
              y = n(77),
              m = n(6),
              x = n(19),
              b = n(177),
              _ = n(8),
              w = n(179),
              M = n(14),
              S = 1,
              E = 2,
              j = 4,
              A = "[object Arguments]",
              O = "[object Function]",
              P = "[object GeneratorFunction]",
              I = "[object Object]",
              T = {};T[A] = T["[object Array]"] = T["[object ArrayBuffer]"] = T["[object DataView]"] = T["[object Boolean]"] = T["[object Date]"] = T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Map]"] = T["[object Number]"] = T[I] = T["[object RegExp]"] = T["[object Set]"] = T["[object String]"] = T["[object Symbol]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T["[object Error]"] = T[O] = T["[object WeakMap]"] = !1, t.exports = function t(e, n, C, k, F, N) {
            var L,
                B = n & S,
                R = n & E,
                D = n & j;if (C && (L = F ? C(e, k, F, N) : C(e)), void 0 !== L) return L;if (!_(e)) return e;var Y = m(e);if (Y) {
              if (L = v(e), !B) return c(e, L);
            } else {
              var X = d(e),
                  G = X == O || X == P;if (x(e)) return s(e, B);if (X == I || X == A || G && !F) {
                if (L = R || G ? {} : y(e), !B) return R ? h(e, u(L, e)) : f(e, a(L, e));
              } else {
                if (!T[X]) return F ? e : {};L = g(e, X, B);
              }
            }N || (N = new r());var z = N.get(e);if (z) return z;if (N.set(e, L), w(e)) return e.forEach(function (r) {
              L.add(t(r, n, C, r, e, N));
            }), L;if (b(e)) return e.forEach(function (r, i) {
              L.set(i, t(r, n, C, i, e, N));
            }), L;var q = D ? R ? p : l : R ? keysIn : M,
                U = Y ? void 0 : q(e);return i(U || e, function (r, i) {
              U && (r = e[i = r]), o(L, i, t(r, n, C, i, e, N));
            }), L;
          };
        }, function (t, e) {
          t.exports = function () {
            this.__data__ = [], this.size = 0;
          };
        }, function (t, e, n) {
          var r = n(26),
              i = Array.prototype.splice;t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
          };
        }, function (t, e, n) {
          var r = n(26);t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);return n < 0 ? void 0 : e[n][1];
          };
        }, function (t, e, n) {
          var r = n(26);t.exports = function (t) {
            return r(this.__data__, t) > -1;
          };
        }, function (t, e, n) {
          var r = n(26);t.exports = function (t, e) {
            var n = this.__data__,
                i = r(n, t);return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
          };
        }, function (t, e, n) {
          var r = n(25);t.exports = function () {
            this.__data__ = new r(), this.size = 0;
          };
        }, function (t, e) {
          t.exports = function (t) {
            var e = this.__data__,
                n = e.delete(t);return this.size = e.size, n;
          };
        }, function (t, e) {
          t.exports = function (t) {
            return this.__data__.get(t);
          };
        }, function (t, e) {
          t.exports = function (t) {
            return this.__data__.has(t);
          };
        }, function (t, e, n) {
          var r = n(25),
              i = n(33),
              o = n(64),
              a = 200;t.exports = function (t, e) {
            var n = this.__data__;if (n instanceof r) {
              var u = n.__data__;if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;n = this.__data__ = new o(u);
            }return n.set(t, e), this.size = n.size, this;
          };
        }, function (t, e, n) {
          var r = n(151),
              i = n(25),
              o = n(33);t.exports = function () {
            this.size = 0, this.__data__ = { hash: new r(), map: new (o || i)(), string: new r() };
          };
        }, function (t, e, n) {
          var r = n(152),
              i = n(153),
              o = n(154),
              a = n(155),
              u = n(156);function s(t) {
            var e = -1,
                n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
              var r = t[e];this.set(r[0], r[1]);
            }
          }s.prototype.clear = r, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = u, t.exports = s;
        }, function (t, e, n) {
          var r = n(27);t.exports = function () {
            this.__data__ = r ? r(null) : {}, this.size = 0;
          };
        }, function (t, e) {
          t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];return this.size -= e ? 1 : 0, e;
          };
        }, function (t, e, n) {
          var r = n(27),
              i = "__lodash_hash_undefined__",
              o = Object.prototype.hasOwnProperty;t.exports = function (t) {
            var e = this.__data__;if (r) {
              var n = e[t];return n === i ? void 0 : n;
            }return o.call(e, t) ? e[t] : void 0;
          };
        }, function (t, e, n) {
          var r = n(27),
              i = Object.prototype.hasOwnProperty;t.exports = function (t) {
            var e = this.__data__;return r ? void 0 !== e[t] : i.call(e, t);
          };
        }, function (t, e, n) {
          var r = n(27),
              i = "__lodash_hash_undefined__";t.exports = function (t, e) {
            var n = this.__data__;return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this;
          };
        }, function (t, e, n) {
          var r = n(28);t.exports = function (t) {
            var e = r(this, t).delete(t);return this.size -= e ? 1 : 0, e;
          };
        }, function (t, e) {
          var n = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          };t.exports = function (t) {
            var e = void 0 === t ? "undefined" : n(t);return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
          };
        }, function (t, e, n) {
          var r = n(28);t.exports = function (t) {
            return r(this, t).get(t);
          };
        }, function (t, e, n) {
          var r = n(28);t.exports = function (t) {
            return r(this, t).has(t);
          };
        }, function (t, e, n) {
          var r = n(28);t.exports = function (t, e) {
            var n = r(this, t),
                i = n.size;return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
          };
        }, function (t, e, n) {
          var r = n(13),
              i = n(14);t.exports = function (t, e) {
            return t && r(e, i(e), t);
          };
        }, function (t, e) {
          t.exports = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t;) {
              r[n] = e(n);
            }return r;
          };
        }, function (t, e, n) {
          var r = n(13),
              i = n(29);t.exports = function (t, e) {
            return t && r(e, i(e), t);
          };
        }, function (t, e, n) {
          var r = n(8),
              i = n(18),
              o = n(166),
              a = Object.prototype.hasOwnProperty;t.exports = function (t) {
            if (!r(t)) return o(t);var e = i(t),
                n = [];for (var u in t) {
              ("constructor" != u || !e && a.call(t, u)) && n.push(u);
            }return n;
          };
        }, function (t, e) {
          t.exports = function (t) {
            var e = [];if (null != t) for (var n in Object(t)) {
              e.push(n);
            }return e;
          };
        }, function (t, e, n) {
          var r = n(13),
              i = n(41);t.exports = function (t, e) {
            return r(t, i(t), e);
          };
        }, function (t, e) {
          t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
              var a = t[n];e(a, n, t) && (o[i++] = a);
            }return o;
          };
        }, function (t, e, n) {
          var r = n(13),
              i = n(71);t.exports = function (t, e) {
            return r(t, i(t), e);
          };
        }, function (t, e, n) {
          var r = n(74),
              i = n(71),
              o = n(29);t.exports = function (t) {
            return r(t, o, i);
          };
        }, function (t, e) {
          var n = Object.prototype.hasOwnProperty;t.exports = function (t) {
            var e = t.length,
                r = new t.constructor(e);return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r;
          };
        }, function (t, e, n) {
          var r = n(43),
              i = n(173),
              o = n(174),
              a = n(175),
              u = n(76),
              s = "[object Boolean]",
              c = "[object Date]",
              f = "[object Map]",
              h = "[object Number]",
              l = "[object RegExp]",
              p = "[object Set]",
              d = "[object String]",
              v = "[object Symbol]",
              g = "[object ArrayBuffer]",
              y = "[object DataView]",
              m = "[object Float32Array]",
              x = "[object Float64Array]",
              b = "[object Int8Array]",
              _ = "[object Int16Array]",
              w = "[object Int32Array]",
              M = "[object Uint8Array]",
              S = "[object Uint8ClampedArray]",
              E = "[object Uint16Array]",
              j = "[object Uint32Array]";t.exports = function (t, e, n) {
            var A = t.constructor;switch (e) {case g:
                return r(t);case s:case c:
                return new A(+t);case y:
                return i(t, n);case m:case x:case b:case _:case w:case M:case S:case E:case j:
                return u(t, n);case f:
                return new A();case h:case d:
                return new A(t);case l:
                return o(t);case p:
                return new A();case v:
                return a(t);}
          };
        }, function (t, e, n) {
          var r = n(43);t.exports = function (t, e) {
            var n = e ? r(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.byteLength);
          };
        }, function (t, e) {
          var n = /\w*$/;t.exports = function (t) {
            var e = new t.constructor(t.source, n.exec(t));return e.lastIndex = t.lastIndex, e;
          };
        }, function (t, e, n) {
          var r = n(11),
              i = r ? r.prototype : void 0,
              o = i ? i.valueOf : void 0;t.exports = function (t) {
            return o ? Object(o.call(t)) : {};
          };
        }, function (t, e, n) {
          var r = n(8),
              i = Object.create,
              o = function () {
            function t() {}return function (e) {
              if (!r(e)) return {};if (i) return i(e);t.prototype = e;var n = new t();return t.prototype = void 0, n;
            };
          }();t.exports = o;
        }, function (t, e, n) {
          var r = n(178),
              i = n(24),
              o = n(36),
              a = o && o.isMap,
              u = a ? i(a) : r;t.exports = u;
        }, function (t, e, n) {
          var r = n(12),
              i = n(4),
              o = "[object Map]";t.exports = function (t) {
            return i(t) && r(t) == o;
          };
        }, function (t, e, n) {
          var r = n(180),
              i = n(24),
              o = n(36),
              a = o && o.isSet,
              u = a ? i(a) : r;t.exports = u;
        }, function (t, e, n) {
          var r = n(12),
              i = n(4),
              o = "[object Set]";t.exports = function (t) {
            return i(t) && r(t) == o;
          };
        }, function (t, e, n) {
          var r = n(39),
              i = n(13),
              o = n(78),
              a = n(9),
              u = n(18),
              s = n(14),
              c = Object.prototype.hasOwnProperty,
              f = o(function (t, e) {
            if (u(e) || a(e)) i(e, s(e), t);else for (var n in e) {
              c.call(e, n) && r(t, n, e[n]);
            }
          });t.exports = f;
        }, function (t, e, n) {
          var r = n(183),
              i = Math.max;t.exports = function (t, e, n) {
            return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
              for (var o = arguments, a = -1, u = i(o.length - e, 0), s = Array(u); ++a < u;) {
                s[a] = o[e + a];
              }a = -1;for (var c = Array(e + 1); ++a < e;) {
                c[a] = o[a];
              }return c[e] = n(s), r(t, this, c);
            };
          };
        }, function (t, e) {
          t.exports = function (t, e, n) {
            switch (n.length) {case 0:
                return t.call(e);case 1:
                return t.call(e, n[0]);case 2:
                return t.call(e, n[0], n[1]);case 3:
                return t.call(e, n[0], n[1], n[2]);}return t.apply(e, n);
          };
        }, function (t, e, n) {
          var r = n(185),
              i = n(187)(r);t.exports = i;
        }, function (t, e, n) {
          var r = n(186),
              i = n(66),
              o = n(44),
              a = i ? function (t, e) {
            return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 });
          } : o;t.exports = a;
        }, function (t, e) {
          t.exports = function (t) {
            return function () {
              return t;
            };
          };
        }, function (t, e) {
          var n = 800,
              r = 16,
              i = Date.now;t.exports = function (t) {
            var e = 0,
                o = 0;return function () {
              var a = i(),
                  u = r - (a - o);if (o = a, u > 0) {
                if (++e >= n) return arguments[0];
              } else e = 0;return t.apply(void 0, arguments);
            };
          };
        }, function (t, e, n) {
          var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          },
              i = n(20),
              o = n(9),
              u = n(68),
              s = n(8);t.exports = function (t, e, n) {
            if (!s(n)) return !1;var a = void 0 === e ? "undefined" : r(e);return !!("number" == a ? o(n) && u(e, n.length) : "string" == a && e in n) && i(n[e], t);
          };
        }, function (t, e, n) {
          var r = n(190),
              i = n(78)(function (t, e, n) {
            r(t, e, n);
          });t.exports = i;
        }, function (t, e, n) {
          var r = n(38),
              i = n(80),
              o = n(81),
              a = n(192),
              u = n(8),
              s = n(29),
              c = n(82);t.exports = function t(e, n, f, h, l) {
            e !== n && o(n, function (o, s) {
              if (u(o)) l || (l = new r()), a(e, n, s, f, t, h, l);else {
                var p = h ? h(c(e, s), o, s + "", e, n, l) : void 0;void 0 === p && (p = o), i(e, s, p);
              }
            }, s);
          };
        }, function (t, e) {
          t.exports = function (t) {
            return function (e, n, r) {
              for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var s = a[t ? u : ++i];if (!1 === n(o[s], s, o)) break;
              }return e;
            };
          };
        }, function (t, e, n) {
          var r = n(80),
              i = n(69),
              o = n(76),
              a = n(30),
              u = n(77),
              s = n(34),
              c = n(6),
              f = n(193),
              h = n(19),
              l = n(22),
              p = n(8),
              d = n(194),
              v = n(23),
              g = n(82),
              y = n(195);t.exports = function (t, e, n, m, x, b, _) {
            var w = g(t, n),
                M = g(e, n),
                S = _.get(M);if (S) r(t, n, S);else {
              var E = b ? b(w, M, n + "", t, e, _) : void 0,
                  j = void 0 === E;if (j) {
                var A = c(M),
                    O = !A && h(M),
                    P = !A && !O && v(M);E = M, A || O || P ? c(w) ? E = w : f(w) ? E = a(w) : O ? (j = !1, E = i(M, !0)) : P ? (j = !1, E = o(M, !0)) : E = [] : d(M) || s(M) ? (E = w, s(w) ? E = y(w) : (!p(w) || m && l(w)) && (E = u(M))) : j = !1;
              }j && (_.set(M, E), x(E, M, m, b, _), _.delete(M)), r(t, n, E);
            }
          };
        }, function (t, e, n) {
          var r = n(9),
              i = n(4);t.exports = function (t) {
            return i(t) && r(t);
          };
        }, function (t, e, n) {
          var r = n(7),
              i = n(42),
              o = n(4),
              a = "[object Object]",
              u = Function.prototype,
              s = Object.prototype,
              c = u.toString,
              f = s.hasOwnProperty,
              h = c.call(Object);t.exports = function (t) {
            if (!o(t) || r(t) != a) return !1;var e = i(t);if (null === e) return !0;var n = f.call(e, "constructor") && e.constructor;return "function" == typeof n && n instanceof n && c.call(n) == h;
          };
        }, function (t, e, n) {
          var r = n(13),
              i = n(29);t.exports = function (t) {
            return r(t, i(t));
          };
        }, function (t, e, n) {
          var r = n(197)("toUpperCase");t.exports = r;
        }, function (t, e, n) {
          var r = n(198),
              i = n(83),
              o = n(84),
              a = n(63);t.exports = function (t) {
            return function (e) {
              e = a(e);var n = i(e) ? o(e) : void 0,
                  u = n ? n[0] : e.charAt(0),
                  s = n ? r(n, 1).join("") : e.slice(1);return u[t]() + s;
            };
          };
        }, function (t, e, n) {
          var r = n(199);t.exports = function (t, e, n) {
            var i = t.length;return n = void 0 === n ? i : n, !e && n >= i ? t : r(t, e, n);
          };
        }, function (t, e) {
          t.exports = function (t, e, n) {
            var r = -1,
                i = t.length;e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;for (var o = Array(i); ++r < i;) {
              o[r] = t[r + e];
            }return o;
          };
        }, function (t, e) {
          t.exports = function (t) {
            return t.split("");
          };
        }, function (t, e) {
          var n = "[\\ud800-\\udfff]",
              r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
              i = "\\ud83c[\\udffb-\\udfff]",
              o = "[^\\ud800-\\udfff]",
              a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              s = "(?:" + r + "|" + i + ")" + "?",
              c = "[\\ufe0e\\ufe0f]?" + s + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + s + ")*"),
              f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
              h = RegExp(i + "(?=" + i + ")|" + f + c, "g");t.exports = function (t) {
            return t.match(h) || [];
          };
        }, function (t, e, n) {
          var r = n(79)(n(203));t.exports = r;
        }, function (t, e, n) {
          var r = n(204);t.exports = function (t, e) {
            return t && t.length && e && e.length ? r(t, e) : t;
          };
        }, function (t, e, n) {
          var r = n(37),
              i = n(205),
              o = n(209),
              a = n(24),
              u = n(30),
              s = Array.prototype.splice;t.exports = function (t, e, n, c) {
            var f = c ? o : i,
                h = -1,
                l = e.length,
                p = t;for (t === e && (e = u(e)), n && (p = r(t, a(n))); ++h < l;) {
              for (var d = 0, v = e[h], g = n ? n(v) : v; (d = f(p, g, d, c)) > -1;) {
                p !== t && s.call(p, d, 1), s.call(t, d, 1);
              }
            }return t;
          };
        }, function (t, e, n) {
          var r = n(206),
              i = n(207),
              o = n(208);t.exports = function (t, e, n) {
            return e == e ? o(t, e, n) : r(t, i, n);
          };
        }, function (t, e) {
          t.exports = function (t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {
              if (e(t[o], o, t)) return o;
            }return -1;
          };
        }, function (t, e) {
          t.exports = function (t) {
            return t != t;
          };
        }, function (t, e) {
          t.exports = function (t, e, n) {
            for (var r = n - 1, i = t.length; ++r < i;) {
              if (t[r] === e) return r;
            }return -1;
          };
        }, function (t, e) {
          t.exports = function (t, e, n, r) {
            for (var i = n - 1, o = t.length; ++i < o;) {
              if (r(t[i], e)) return i;
            }return -1;
          };
        }, function (t, e, n) {
          var r = n(65),
              i = n(211),
              o = n(214),
              a = n(6);t.exports = function (t, e) {
            return (a(t) ? r : i)(t, o(e));
          };
        }, function (t, e, n) {
          var r = n(212),
              i = n(213)(r);t.exports = i;
        }, function (t, e, n) {
          var r = n(81),
              i = n(14);t.exports = function (t, e) {
            return t && r(t, e, i);
          };
        }, function (t, e, n) {
          var r = n(9);t.exports = function (t, e) {
            return function (n, i) {
              if (null == n) return n;if (!r(n)) return t(n, i);for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);) {}return n;
            };
          };
        }, function (t, e, n) {
          var r = n(44);t.exports = function (t) {
            return "function" == typeof t ? t : r;
          };
        }, function (t, e, n) {
          var r = n(216);t.exports = function (t, e) {
            return r(t, e);
          };
        }, function (t, e, n) {
          var r = n(217),
              i = n(4);t.exports = function t(e, n, o, a, u) {
            return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u));
          };
        }, function (t, e, n) {
          var r = n(38),
              i = n(85),
              o = n(223),
              a = n(224),
              u = n(12),
              s = n(6),
              c = n(19),
              f = n(23),
              h = 1,
              l = "[object Arguments]",
              p = "[object Array]",
              d = "[object Object]",
              v = Object.prototype.hasOwnProperty;t.exports = function (t, e, n, g, y, m) {
            var x = s(t),
                b = s(e),
                _ = x ? p : u(t),
                w = b ? p : u(e),
                M = (_ = _ == l ? d : _) == d,
                S = (w = w == l ? d : w) == d,
                E = _ == w;if (E && c(t)) {
              if (!c(e)) return !1;x = !0, M = !1;
            }if (E && !M) return m || (m = new r()), x || f(t) ? i(t, e, n, g, y, m) : o(t, e, _, n, g, y, m);if (!(n & h)) {
              var j = M && v.call(t, "__wrapped__"),
                  A = S && v.call(e, "__wrapped__");if (j || A) {
                var O = j ? t.value() : t,
                    P = A ? e.value() : e;return m || (m = new r()), y(O, P, n, g, m);
              }
            }return !!E && (m || (m = new r()), a(t, e, n, g, y, m));
          };
        }, function (t, e, n) {
          var r = n(64),
              i = n(219),
              o = n(220);function a(t) {
            var e = -1,
                n = null == t ? 0 : t.length;for (this.__data__ = new r(); ++e < n;) {
              this.add(t[e]);
            }
          }a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a;
        }, function (t, e) {
          var n = "__lodash_hash_undefined__";t.exports = function (t) {
            return this.__data__.set(t, n), this;
          };
        }, function (t, e) {
          t.exports = function (t) {
            return this.__data__.has(t);
          };
        }, function (t, e) {
          t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
              if (e(t[n], n, t)) return !0;
            }return !1;
          };
        }, function (t, e) {
          t.exports = function (t, e) {
            return t.has(e);
          };
        }, function (t, e, n) {
          var r = n(11),
              i = n(75),
              o = n(20),
              a = n(85),
              u = n(86),
              s = n(87),
              c = 1,
              f = 2,
              h = "[object Boolean]",
              l = "[object Date]",
              p = "[object Error]",
              d = "[object Map]",
              v = "[object Number]",
              g = "[object RegExp]",
              y = "[object Set]",
              m = "[object String]",
              x = "[object Symbol]",
              b = "[object ArrayBuffer]",
              _ = "[object DataView]",
              w = r ? r.prototype : void 0,
              M = w ? w.valueOf : void 0;t.exports = function (t, e, n, r, w, S, E) {
            switch (n) {case _:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case b:
                return !(t.byteLength != e.byteLength || !S(new i(t), new i(e)));case h:case l:case v:
                return o(+t, +e);case p:
                return t.name == e.name && t.message == e.message;case g:case m:
                return t == e + "";case d:
                var j = u;case y:
                var A = r & c;if (j || (j = s), t.size != e.size && !A) return !1;var O = E.get(t);if (O) return O == e;r |= f, E.set(t, e);var P = a(j(t), j(e), r, w, S, E);return E.delete(t), P;case x:
                if (M) return M.call(t) == M.call(e);}return !1;
          };
        }, function (t, e, n) {
          var r = n(73),
              i = 1,
              o = Object.prototype.hasOwnProperty;t.exports = function (t, e, n, a, u, s) {
            var c = n & i,
                f = r(t),
                h = f.length;if (h != r(e).length && !c) return !1;for (var l = h; l--;) {
              var p = f[l];if (!(c ? p in e : o.call(e, p))) return !1;
            }var d = s.get(t);if (d && s.get(e)) return d == e;var v = !0;s.set(t, e), s.set(e, t);for (var g = c; ++l < h;) {
              var y = t[p = f[l]],
                  m = e[p];if (a) var x = c ? a(m, y, p, e, t, s) : a(y, m, p, t, e, s);if (!(void 0 === x ? y === m || u(y, m, n, a, s) : x)) {
                v = !1;break;
              }g || (g = "constructor" == p);
            }if (v && !g) {
              var b = t.constructor,
                  _ = e.constructor;b != _ && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (v = !1);
            }return s.delete(t), s.delete(e), v;
          };
        }, function (t, e, n) {
          var r = n(11),
              i = n(30),
              o = n(12),
              a = n(9),
              u = n(58),
              s = n(226),
              c = n(86),
              f = n(87),
              h = n(84),
              l = n(227),
              p = "[object Map]",
              d = "[object Set]",
              v = r ? r.iterator : void 0;t.exports = function (t) {
            if (!t) return [];if (a(t)) return u(t) ? h(t) : i(t);if (v && t[v]) return s(t[v]());var e = o(t);return (e == p ? c : e == d ? f : l)(t);
          };
        }, function (t, e) {
          t.exports = function (t) {
            for (var e, n = []; !(e = t.next()).done;) {
              n.push(e.value);
            }return n;
          };
        }, function (t, e, n) {
          var r = n(228),
              i = n(14);t.exports = function (t) {
            return null == t ? [] : r(t, i(t));
          };
        }, function (t, e, n) {
          var r = n(37);t.exports = function (t, e) {
            return r(e, function (e) {
              return t[e];
            });
          };
        }, function (t, e, n) {
          var r = n(0),
              i = ["strokeStyle", "fillStyle", "globalAlpha"],
              o = ["circle", "ellipse", "fan", "polygon", "rect", "path"],
              a = { r: "R", opacity: "Opacity", lineWidth: "LineWidth", clip: "Clip", stroke: "Stroke", fill: "Fill", strokeOpacity: "Stroke", fillOpacity: "Fill", x: "X", y: "Y", rx: "Rx", ry: "Ry", re: "Re", rs: "Rs", width: "Width", height: "Height", img: "Img", x1: "X1", x2: "X2", y1: "Y1", y2: "Y2", points: "Points", p1: "P1", p2: "P2", p3: "P3", p4: "P4", text: "Text", radius: "Radius", textAlign: "TextAlign", textBaseline: "TextBaseline", font: "Font", fontSize: "FontSize", fontStyle: "FontStyle", fontVariant: "FontVariant", fontWeight: "FontWeight", fontFamily: "FontFamily", clockwise: "Clockwise", startAngle: "StartAngle", endAngle: "EndAngle", path: "Path" },
              u = { stroke: "strokeStyle", fill: "fillStyle", opacity: "globalAlpha" };t.exports = { canFill: !1, canStroke: !1, initAttrs: function initAttrs(t) {
              return this.__attrs = { opacity: 1, fillOpacity: 1, strokeOpacity: 1 }, this.attr(r.assign(this.getDefaultAttrs(), t)), this;
            }, getDefaultAttrs: function getDefaultAttrs() {
              return {};
            }, attr: function attr(t, e) {
              if (0 === arguments.length) return this.__attrs;if (r.isObject(t)) {
                for (var n in t) {
                  if (-1 === i.indexOf(n)) {
                    var o = t[n];this._setAttr(n, o);
                  }
                }return this.__afterSetAttrAll && this.__afterSetAttrAll(t), this.clearBBox(), this;
              }if (2 === arguments.length) {
                if (!1 !== this._setAttr(t, e)) {
                  var u = "__afterSetAttr" + a[t];this[u] && this[u](e);
                }return this.clearBBox(), this;
              }return this._getAttr(t);
            }, clearBBox: function clearBBox() {
              this.setSilent("box", null);
            }, __afterSetAttrAll: function __afterSetAttrAll() {}, _getAttr: function _getAttr(t) {
              return this.__attrs[t];
            }, _setAttr: function _setAttr(t, e) {
              if ("clip" === t) this.__setAttrClip(e), this.__attrs.clip = e;else if ("transform" === t) this.__setAttrTrans(e);else {
                this.__attrs[t] = e;var n = u[t];n && (this.__attrs[n] = e);
              }return this;
            }, hasFill: function hasFill() {
              return this.canFill && this.__attrs.fillStyle;
            }, hasStroke: function hasStroke() {
              return this.canStroke && this.__attrs.strokeStyle;
            }, __setAttrOpacity: function __setAttrOpacity(t) {
              return this.__attrs.globalAlpha = t, t;
            }, __setAttrClip: function __setAttrClip(t) {
              var e = this;return t && o.indexOf(t.type) > -1 ? (null === t.get("canvas") && (t = r.clone(t)), t.set("parent", e.get("parent")), t.set("context", e.get("context")), t.inside = function (n, r) {
                var i = [n, r, 1];return t.invert(i, e.get("canvas")), t.__isPointInFill(i[0], i[1]);
              }, t) : null;
            }, __setAttrTrans: function __setAttrTrans(t) {
              return this.transform(t);
            } };
        }, function (t, e, n) {
          var r = n(0),
              i = n(3).mat3,
              o = n(3).vec3;function a(t) {
            return 1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7];
          }function u(t) {
            return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7];
          }function s(t, e) {
            a(e) || (u(e) ? (t[0] *= e[0], t[4] *= e[4]) : i.multiply(t, t, e));
          }t.exports = { initTransform: function initTransform() {
              this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]);
            }, translate: function translate(t, e) {
              var n = this.attr("matrix");return i.translate(n, n, [t, e]), this.clearTotalMatrix(), this.attr("matrix", n), this;
            }, rotate: function rotate(t) {
              var e = this.attr("matrix");return i.rotate(e, e, t), this.clearTotalMatrix(), this.attr("matrix", e), this;
            }, scale: function scale(t, e) {
              var n = this.attr("matrix");return i.scale(n, n, [t, e]), this.clearTotalMatrix(), this.attr("matrix", n), this;
            }, rotateAtStart: function rotateAtStart(t) {
              var e = this.attr("x"),
                  n = this.attr("y");Math.abs(t) > 2 * Math.PI && (t = t / 180 * Math.PI), this.transform([["t", -e, -n], ["r", t], ["t", e, n]]);
            }, move: function move(t, e) {
              var n = this.get("x") || 0,
                  r = this.get("y") || 0;this.translate(t - n, e - r), this.set("x", t), this.set("y", e);
            }, transform: function transform(t) {
              var e = this,
                  n = e.attr("matrix");return r.each(t, function (t) {
                switch (t[0]) {case "t":
                    e.translate(t[1], t[2]);break;case "s":
                    e.scale(t[1], t[2]);break;case "r":
                    e.rotate(t[1]);break;case "m":
                    e.attr("matrix", i.multiply([], n, t[1])), e.clearTotalMatrix();}
              }), e;
            }, setTransform: function setTransform(t) {
              return this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]), this.transform(t);
            }, getMatrix: function getMatrix() {
              return this.attr("matrix");
            }, setMatrix: function setMatrix(t) {
              return this.attr("matrix", t), this.clearTotalMatrix(), this;
            }, apply: function apply(t, e) {
              var n = void 0;return n = e ? this._getMatrixByRoot(e) : this.attr("matrix"), o.transformMat3(t, t, n), this;
            }, _getMatrixByRoot: function _getMatrixByRoot(t) {
              t = t || this;for (var e = this, n = []; e !== t;) {
                n.unshift(e), e = e.get("parent");
              }n.unshift(e);var o = [1, 0, 0, 0, 1, 0, 0, 0, 1];return r.each(n, function (t) {
                i.multiply(o, t.attr("matrix"), o);
              }), o;
            }, getTotalMatrix: function getTotalMatrix() {
              var t = this.__cfg.totalMatrix;if (!t) {
                t = [1, 0, 0, 0, 1, 0, 0, 0, 1];var e = this.__cfg.parent;if (e) s(t, e.getTotalMatrix());s(t, this.attr("matrix")), this.__cfg.totalMatrix = t;
              }return t;
            }, clearTotalMatrix: function clearTotalMatrix() {}, invert: function invert(t) {
              var e = this.getTotalMatrix();if (u(e)) t[0] /= e[0], t[1] /= e[4];else {
                var n = i.invert([], e);n && o.transformMat3(t, t, n);
              }return this;
            }, resetTransform: function resetTransform(t) {
              var e = this.attr("matrix");a(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7]);
            } };
        }, function (t, e, n) {
          var r = n(45),
              i = { create: function create() {
              var t = new r.ARRAY_TYPE(9);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
            }, fromMat4: function fromMat4(t, e) {
              return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t;
            }, clone: function clone(t) {
              var e = new r.ARRAY_TYPE(9);return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
            }, copy: function copy(t, e) {
              return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
            }, fromValues: function fromValues(t, e, n, i, o, a, u, s, c) {
              var f = new r.ARRAY_TYPE(9);return f[0] = t, f[1] = e, f[2] = n, f[3] = i, f[4] = o, f[5] = a, f[6] = u, f[7] = s, f[8] = c, f;
            }, set: function set(t, e, n, r, i, o, a, u, s, c) {
              return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = u, t[7] = s, t[8] = c, t;
            }, identity: function identity(t) {
              return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
            }, transpose: function transpose(t, e) {
              if (t === e) {
                var n = e[1],
                    r = e[2],
                    i = e[5];t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = i;
              } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];return t;
            }, invert: function invert(t, e) {
              var n = e[0],
                  r = e[1],
                  i = e[2],
                  o = e[3],
                  a = e[4],
                  u = e[5],
                  s = e[6],
                  c = e[7],
                  f = e[8],
                  h = f * a - u * c,
                  l = -f * o + u * s,
                  p = c * o - a * s,
                  d = n * h + r * l + i * p;return d ? (d = 1 / d, t[0] = h * d, t[1] = (-f * r + i * c) * d, t[2] = (u * r - i * a) * d, t[3] = l * d, t[4] = (f * n - i * s) * d, t[5] = (-u * n + i * o) * d, t[6] = p * d, t[7] = (-c * n + r * s) * d, t[8] = (a * n - r * o) * d, t) : null;
            }, adjoint: function adjoint(t, e) {
              var n = e[0],
                  r = e[1],
                  i = e[2],
                  o = e[3],
                  a = e[4],
                  u = e[5],
                  s = e[6],
                  c = e[7],
                  f = e[8];return t[0] = a * f - u * c, t[1] = i * c - r * f, t[2] = r * u - i * a, t[3] = u * s - o * f, t[4] = n * f - i * s, t[5] = i * o - n * u, t[6] = o * c - a * s, t[7] = r * s - n * c, t[8] = n * a - r * o, t;
            }, determinant: function determinant(t) {
              var e = t[0],
                  n = t[1],
                  r = t[2],
                  i = t[3],
                  o = t[4],
                  a = t[5],
                  u = t[6],
                  s = t[7],
                  c = t[8];return e * (c * o - a * s) + n * (-c * i + a * u) + r * (s * i - o * u);
            }, multiply: function multiply(t, e, n) {
              var r = e[0],
                  i = e[1],
                  o = e[2],
                  a = e[3],
                  u = e[4],
                  s = e[5],
                  c = e[6],
                  f = e[7],
                  h = e[8],
                  l = n[0],
                  p = n[1],
                  d = n[2],
                  v = n[3],
                  g = n[4],
                  y = n[5],
                  m = n[6],
                  x = n[7],
                  b = n[8];return t[0] = l * r + p * a + d * c, t[1] = l * i + p * u + d * f, t[2] = l * o + p * s + d * h, t[3] = v * r + g * a + y * c, t[4] = v * i + g * u + y * f, t[5] = v * o + g * s + y * h, t[6] = m * r + x * a + b * c, t[7] = m * i + x * u + b * f, t[8] = m * o + x * s + b * h, t;
            } };i.mul = i.multiply, i.translate = function (t, e, n) {
            var r = e[0],
                i = e[1],
                o = e[2],
                a = e[3],
                u = e[4],
                s = e[5],
                c = e[6],
                f = e[7],
                h = e[8],
                l = n[0],
                p = n[1];return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = u, t[5] = s, t[6] = l * r + p * a + c, t[7] = l * i + p * u + f, t[8] = l * o + p * s + h, t;
          }, i.rotate = function (t, e, n) {
            var r = e[0],
                i = e[1],
                o = e[2],
                a = e[3],
                u = e[4],
                s = e[5],
                c = e[6],
                f = e[7],
                h = e[8],
                l = Math.sin(n),
                p = Math.cos(n);return t[0] = p * r + l * a, t[1] = p * i + l * u, t[2] = p * o + l * s, t[3] = p * a - l * r, t[4] = p * u - l * i, t[5] = p * s - l * o, t[6] = c, t[7] = f, t[8] = h, t;
          }, i.scale = function (t, e, n) {
            var r = n[0],
                i = n[1];return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
          }, i.fromTranslation = function (t, e) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t;
          }, i.fromRotation = function (t, e) {
            var n = Math.sin(e),
                r = Math.cos(e);return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
          }, i.fromScaling = function (t, e) {
            return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
          }, i.fromMat2d = function (t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t;
          }, i.fromQuat = function (t, e) {
            var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = n + n,
                u = r + r,
                s = i + i,
                c = n * a,
                f = r * a,
                h = r * u,
                l = i * a,
                p = i * u,
                d = i * s,
                v = o * a,
                g = o * u,
                y = o * s;return t[0] = 1 - h - d, t[3] = f - y, t[6] = l + g, t[1] = f + y, t[4] = 1 - c - d, t[7] = p - v, t[2] = l - g, t[5] = p + v, t[8] = 1 - c - h, t;
          }, i.normalFromMat4 = function (t, e) {
            var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4],
                u = e[5],
                s = e[6],
                c = e[7],
                f = e[8],
                h = e[9],
                l = e[10],
                p = e[11],
                d = e[12],
                v = e[13],
                g = e[14],
                y = e[15],
                m = n * u - r * a,
                x = n * s - i * a,
                b = n * c - o * a,
                _ = r * s - i * u,
                w = r * c - o * u,
                M = i * c - o * s,
                S = f * v - h * d,
                E = f * g - l * d,
                j = f * y - p * d,
                A = h * g - l * v,
                O = h * y - p * v,
                P = l * y - p * g,
                I = m * P - x * O + b * A + _ * j - w * E + M * S;return I ? (I = 1 / I, t[0] = (u * P - s * O + c * A) * I, t[1] = (s * j - a * P - c * E) * I, t[2] = (a * O - u * j + c * S) * I, t[3] = (i * O - r * P - o * A) * I, t[4] = (n * P - i * j + o * E) * I, t[5] = (r * j - n * O - o * S) * I, t[6] = (v * M - g * w + y * _) * I, t[7] = (g * b - d * M - y * x) * I, t[8] = (d * w - v * b + y * m) * I, t) : null;
          }, i.str = function (t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
          }, i.frob = function (t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
          }, i.add = function (t, e, n) {
            return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t;
          }, i.subtract = function (t, e, n) {
            return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t;
          }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
            return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t;
          }, i.multiplyScalarAndAdd = function (t, e, n, r) {
            return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t;
          }, i.exactEquals = function (t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8];
          }, i.equals = function (t, e) {
            var n = t[0],
                i = t[1],
                o = t[2],
                a = t[3],
                u = t[4],
                s = t[5],
                c = t[6],
                f = t[7],
                h = t[8],
                l = e[0],
                p = e[1],
                d = e[2],
                v = e[3],
                g = e[4],
                y = e[5],
                m = t[6],
                x = e[7],
                b = e[8];return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(i - p) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(o - d) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(a - v) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(u - g) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(g)) && Math.abs(s - y) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(y)) && Math.abs(c - m) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(f - x) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(x)) && Math.abs(h - b) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(b));
          }, t.exports = i;
        }, function (t, e, n) {
          var r,
              i = n(45),
              o = {};o.create = function () {
            var t = new i.ARRAY_TYPE(3);return t[0] = 0, t[1] = 0, t[2] = 0, t;
          }, o.clone = function (t) {
            var e = new i.ARRAY_TYPE(3);return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
          }, o.fromValues = function (t, e, n) {
            var r = new i.ARRAY_TYPE(3);return r[0] = t, r[1] = e, r[2] = n, r;
          }, o.copy = function (t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
          }, o.set = function (t, e, n, r) {
            return t[0] = e, t[1] = n, t[2] = r, t;
          }, o.add = function (t, e, n) {
            return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t;
          }, o.subtract = function (t, e, n) {
            return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t;
          }, o.sub = o.subtract, o.multiply = function (t, e, n) {
            return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t;
          }, o.mul = o.multiply, o.divide = function (t, e, n) {
            return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t;
          }, o.div = o.divide, o.ceil = function (t, e) {
            return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t;
          }, o.floor = function (t, e) {
            return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t;
          }, o.min = function (t, e, n) {
            return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t;
          }, o.max = function (t, e, n) {
            return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t;
          }, o.round = function (t, e) {
            return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t;
          }, o.scale = function (t, e, n) {
            return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t;
          }, o.scaleAndAdd = function (t, e, n, r) {
            return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t;
          }, o.distance = function (t, e) {
            var n = e[0] - t[0],
                r = e[1] - t[1],
                i = e[2] - t[2];return Math.sqrt(n * n + r * r + i * i);
          }, o.dist = o.distance, o.squaredDistance = function (t, e) {
            var n = e[0] - t[0],
                r = e[1] - t[1],
                i = e[2] - t[2];return n * n + r * r + i * i;
          }, o.sqrDist = o.squaredDistance, o.length = function (t) {
            var e = t[0],
                n = t[1],
                r = t[2];return Math.sqrt(e * e + n * n + r * r);
          }, o.len = o.length, o.squaredLength = function (t) {
            var e = t[0],
                n = t[1],
                r = t[2];return e * e + n * n + r * r;
          }, o.sqrLen = o.squaredLength, o.negate = function (t, e) {
            return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
          }, o.inverse = function (t, e) {
            return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t;
          }, o.normalize = function (t, e) {
            var n = e[0],
                r = e[1],
                i = e[2],
                o = n * n + r * r + i * i;return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t;
          }, o.dot = function (t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
          }, o.cross = function (t, e, n) {
            var r = e[0],
                i = e[1],
                o = e[2],
                a = n[0],
                u = n[1],
                s = n[2];return t[0] = i * s - o * u, t[1] = o * a - r * s, t[2] = r * u - i * a, t;
          }, o.lerp = function (t, e, n, r) {
            var i = e[0],
                o = e[1],
                a = e[2];return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t;
          }, o.hermite = function (t, e, n, r, i, o) {
            var a = o * o,
                u = a * (2 * o - 3) + 1,
                s = a * (o - 2) + o,
                c = a * (o - 1),
                f = a * (3 - 2 * o);return t[0] = e[0] * u + n[0] * s + r[0] * c + i[0] * f, t[1] = e[1] * u + n[1] * s + r[1] * c + i[1] * f, t[2] = e[2] * u + n[2] * s + r[2] * c + i[2] * f, t;
          }, o.bezier = function (t, e, n, r, i, o) {
            var a = 1 - o,
                u = a * a,
                s = o * o,
                c = u * a,
                f = 3 * o * u,
                h = 3 * s * a,
                l = s * o;return t[0] = e[0] * c + n[0] * f + r[0] * h + i[0] * l, t[1] = e[1] * c + n[1] * f + r[1] * h + i[1] * l, t[2] = e[2] * c + n[2] * f + r[2] * h + i[2] * l, t;
          }, o.random = function (t, e) {
            e = e || 1;var n = 2 * i.RANDOM() * Math.PI,
                r = 2 * i.RANDOM() - 1,
                o = Math.sqrt(1 - r * r) * e;return t[0] = Math.cos(n) * o, t[1] = Math.sin(n) * o, t[2] = r * e, t;
          }, o.transformMat4 = function (t, e, n) {
            var r = e[0],
                i = e[1],
                o = e[2],
                a = n[3] * r + n[7] * i + n[11] * o + n[15];return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t;
          }, o.transformMat3 = function (t, e, n) {
            var r = e[0],
                i = e[1],
                o = e[2];return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t;
          }, o.transformQuat = function (t, e, n) {
            var r = e[0],
                i = e[1],
                o = e[2],
                a = n[0],
                u = n[1],
                s = n[2],
                c = n[3],
                f = c * r + u * o - s * i,
                h = c * i + s * r - a * o,
                l = c * o + a * i - u * r,
                p = -a * r - u * i - s * o;return t[0] = f * c + p * -a + h * -s - l * -u, t[1] = h * c + p * -u + l * -a - f * -s, t[2] = l * c + p * -s + f * -u - h * -a, t;
          }, o.rotateX = function (t, e, n, r) {
            var i = [],
                o = [];return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0], o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
          }, o.rotateY = function (t, e, n, r) {
            var i = [],
                o = [];return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), o[1] = i[1], o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
          }, o.rotateZ = function (t, e, n, r) {
            var i = [],
                o = [];return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), o[2] = i[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
          }, o.forEach = (r = o.create(), function (t, e, n, i, o, a) {
            var u, s;for (e || (e = 3), n || (n = 0), s = i ? Math.min(i * e + n, t.length) : t.length, u = n; u < s; u += e) {
              r[0] = t[u], r[1] = t[u + 1], r[2] = t[u + 2], o(r, r, a), t[u] = r[0], t[u + 1] = r[1], t[u + 2] = r[2];
            }return t;
          }), o.angle = function (t, e) {
            var n = o.fromValues(t[0], t[1], t[2]),
                r = o.fromValues(e[0], e[1], e[2]);o.normalize(n, n), o.normalize(r, r);var i = o.dot(n, r);return i > 1 ? 0 : Math.acos(i);
          }, o.str = function (t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
          }, o.exactEquals = function (t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
          }, o.equals = function (t, e) {
            var n = t[0],
                r = t[1],
                o = t[2],
                a = e[0],
                u = e[1],
                s = e[2];return Math.abs(n - a) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - u) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(o - s) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(s));
          }, t.exports = o;
        }, function (t, e, n) {
          var r,
              i = n(45),
              o = {};o.create = function () {
            var t = new i.ARRAY_TYPE(2);return t[0] = 0, t[1] = 0, t;
          }, o.clone = function (t) {
            var e = new i.ARRAY_TYPE(2);return e[0] = t[0], e[1] = t[1], e;
          }, o.fromValues = function (t, e) {
            var n = new i.ARRAY_TYPE(2);return n[0] = t, n[1] = e, n;
          }, o.copy = function (t, e) {
            return t[0] = e[0], t[1] = e[1], t;
          }, o.set = function (t, e, n) {
            return t[0] = e, t[1] = n, t;
          }, o.add = function (t, e, n) {
            return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
          }, o.subtract = function (t, e, n) {
            return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
          }, o.sub = o.subtract, o.multiply = function (t, e, n) {
            return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
          }, o.mul = o.multiply, o.divide = function (t, e, n) {
            return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
          }, o.div = o.divide, o.ceil = function (t, e) {
            return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t;
          }, o.floor = function (t, e) {
            return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t;
          }, o.min = function (t, e, n) {
            return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
          }, o.max = function (t, e, n) {
            return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
          }, o.round = function (t, e) {
            return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t;
          }, o.scale = function (t, e, n) {
            return t[0] = e[0] * n, t[1] = e[1] * n, t;
          }, o.scaleAndAdd = function (t, e, n, r) {
            return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t;
          }, o.distance = function (t, e) {
            var n = e[0] - t[0],
                r = e[1] - t[1];return Math.sqrt(n * n + r * r);
          }, o.dist = o.distance, o.squaredDistance = function (t, e) {
            var n = e[0] - t[0],
                r = e[1] - t[1];return n * n + r * r;
          }, o.sqrDist = o.squaredDistance, o.length = function (t) {
            var e = t[0],
                n = t[1];return Math.sqrt(e * e + n * n);
          }, o.len = o.length, o.squaredLength = function (t) {
            var e = t[0],
                n = t[1];return e * e + n * n;
          }, o.sqrLen = o.squaredLength, o.negate = function (t, e) {
            return t[0] = -e[0], t[1] = -e[1], t;
          }, o.inverse = function (t, e) {
            return t[0] = 1 / e[0], t[1] = 1 / e[1], t;
          }, o.normalize = function (t, e) {
            var n = e[0],
                r = e[1],
                i = n * n + r * r;return i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t;
          }, o.dot = function (t, e) {
            return t[0] * e[0] + t[1] * e[1];
          }, o.cross = function (t, e, n) {
            var r = e[0] * n[1] - e[1] * n[0];return t[0] = t[1] = 0, t[2] = r, t;
          }, o.lerp = function (t, e, n, r) {
            var i = e[0],
                o = e[1];return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t;
          }, o.random = function (t, e) {
            e = e || 1;var n = 2 * i.RANDOM() * Math.PI;return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t;
          }, o.transformMat2 = function (t, e, n) {
            var r = e[0],
                i = e[1];return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t;
          }, o.transformMat2d = function (t, e, n) {
            var r = e[0],
                i = e[1];return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t;
          }, o.transformMat3 = function (t, e, n) {
            var r = e[0],
                i = e[1];return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t;
          }, o.transformMat4 = function (t, e, n) {
            var r = e[0],
                i = e[1];return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t;
          }, o.forEach = (r = o.create(), function (t, e, n, i, o, a) {
            var u, s;for (e || (e = 2), n || (n = 0), s = i ? Math.min(i * e + n, t.length) : t.length, u = n; u < s; u += e) {
              r[0] = t[u], r[1] = t[u + 1], o(r, r, a), t[u] = r[0], t[u + 1] = r[1];
            }return t;
          }), o.str = function (t) {
            return "vec2(" + t[0] + ", " + t[1] + ")";
          }, o.exactEquals = function (t, e) {
            return t[0] === e[0] && t[1] === e[1];
          }, o.equals = function (t, e) {
            var n = t[0],
                r = t[1],
                o = e[0],
                a = e[1];return Math.abs(n - o) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - a) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(a));
          }, t.exports = o;
        }, function (t, e, n) {
          var r = n(3),
              i = n(46),
              o = n(0),
              a = n(235),
              u = n(246),
              s = n(249),
              c = s.interpolate,
              f = s.interpolateArray,
              h = { delay: "delay" };t.exports = { stopAnimate: function stopAnimate() {
              var t = this.get("canvas");if (!this.get("destroyed") && this.get("animating")) {
                var e = this.attr("clip");e && e.get("animating") && e.stopAnimate();var n = this.get("animateTimer");n && (n.stop(), this.setSilent("animateTimer", null));var r = this.get("animateCfg");r && (this.attr(r.toAttrs), r.toM && this.setMatrix(r.toM), r.callback && r.callback(), this.setSilent("animateCfg", null)), this.setSilent("animating", !1), t.draw();
              }
            }, animate: function animate(t, e, n, s) {
              var l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                  p = this,
                  d = p.get("canvas"),
                  v = function (t) {
                var e = { M: null, attrs: {} };for (var n in t) {
                  "transform" === n ? e.M = r.transform(p.getMatrix(), t[n]) : "matrix" === n ? e.M = t[n] : h[n] || (e.attrs[n] = t[n]);
                }return e;
              }(t),
                  g = v.attrs,
                  y = v.M,
                  m = function (t) {
                var e = {};for (var n in t) {
                  e[n] = p.attr(n);
                }return e;
              }(g),
                  x = o.clone(p.getMatrix()),
                  b = t.repeat,
                  _ = p.get("animateTimer");function w(t) {
                var e = {};if (!p.get("destroyed")) {
                  var n = void 0;for (var r in g) {
                    if (!o.isEqual(m[r], g[r])) if ("path" === r) {
                      var a = i.parsePathString(g[r]),
                          u = i.parsePathString(m[r]);e[r] = [];for (var s = 0; s < a.length; s++) {
                        for (var h = a[s], l = u[s], v = [], b = 0; b < h.length; b++) {
                          o.isNumber(h[b]) && l ? (n = c(l[b], h[b]), v.push(n(t))) : v.push(h[b]);
                        }e[r].push(v);
                      }
                    } else n = c(m[r], g[r]), e[r] = n(t);
                  }if (y) {
                    var _ = f(x, y)(t);p.setMatrix(_);
                  }p.attr(e), d.draw();
                }
              }_ && _.stop(), o.isNumber(s) && (l = s, s = null), o.isFunction(n) ? (s = n, n = "easeLinear") : n = n || "easeLinear", p.setSilent("animating", !0), p.setSilent("animateCfg", { toAttrs: g, toM: y, callback: s }), _ = u.timer(function (t) {
                b ? function (t) {
                  var r = t % e / e;w(r = a[n](r));
                }(t) : function (t) {
                  var r = t / e;r < 1 ? w(r = a[n](r)) : (w(1), s && s(), p.setSilent("animating", !1), p.setSilent("animateCfg", null), p.setSilent("animateTimer", null), _.stop());
                }(t);
              }, l), p.setSilent("animateTimer", _);
            } };
        }, function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });var r = n(236);n.d(e, "easeLinear", function () {
            return r.a;
          });var i = n(237);n.d(e, "easeQuad", function () {
            return i.b;
          }), n.d(e, "easeQuadIn", function () {
            return i.a;
          }), n.d(e, "easeQuadOut", function () {
            return i.c;
          }), n.d(e, "easeQuadInOut", function () {
            return i.b;
          });var o = n(238);n.d(e, "easeCubic", function () {
            return o.b;
          }), n.d(e, "easeCubicIn", function () {
            return o.a;
          }), n.d(e, "easeCubicOut", function () {
            return o.c;
          }), n.d(e, "easeCubicInOut", function () {
            return o.b;
          });var a = n(239);n.d(e, "easePoly", function () {
            return a.b;
          }), n.d(e, "easePolyIn", function () {
            return a.a;
          }), n.d(e, "easePolyOut", function () {
            return a.c;
          }), n.d(e, "easePolyInOut", function () {
            return a.b;
          });var u = n(240);n.d(e, "easeSin", function () {
            return u.b;
          }), n.d(e, "easeSinIn", function () {
            return u.a;
          }), n.d(e, "easeSinOut", function () {
            return u.c;
          }), n.d(e, "easeSinInOut", function () {
            return u.b;
          });var s = n(241);n.d(e, "easeExp", function () {
            return s.b;
          }), n.d(e, "easeExpIn", function () {
            return s.a;
          }), n.d(e, "easeExpOut", function () {
            return s.c;
          }), n.d(e, "easeExpInOut", function () {
            return s.b;
          });var c = n(242);n.d(e, "easeCircle", function () {
            return c.b;
          }), n.d(e, "easeCircleIn", function () {
            return c.a;
          }), n.d(e, "easeCircleOut", function () {
            return c.c;
          }), n.d(e, "easeCircleInOut", function () {
            return c.b;
          });var f = n(243);n.d(e, "easeBounce", function () {
            return f.c;
          }), n.d(e, "easeBounceIn", function () {
            return f.a;
          }), n.d(e, "easeBounceOut", function () {
            return f.c;
          }), n.d(e, "easeBounceInOut", function () {
            return f.b;
          });var h = n(244);n.d(e, "easeBack", function () {
            return h.b;
          }), n.d(e, "easeBackIn", function () {
            return h.a;
          }), n.d(e, "easeBackOut", function () {
            return h.c;
          }), n.d(e, "easeBackInOut", function () {
            return h.b;
          });var l = n(245);n.d(e, "easeElastic", function () {
            return l.c;
          }), n.d(e, "easeElasticIn", function () {
            return l.a;
          }), n.d(e, "easeElasticOut", function () {
            return l.c;
          }), n.d(e, "easeElasticInOut", function () {
            return l.b;
          });
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return +t;
          };
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return t * t;
          }, e.c = function (t) {
            return t * (2 - t);
          }, e.b = function (t) {
            return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
          };
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return t * t * t;
          }, e.c = function (t) {
            return --t * t * t + 1;
          }, e.b = function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
          };
        }, function (t, e, n) {
          "use strict";
          n.d(e, "a", function () {
            return r;
          }), n.d(e, "c", function () {
            return i;
          }), n.d(e, "b", function () {
            return o;
          });var r = function t(e) {
            function n(t) {
              return Math.pow(t, e);
            }return e = +e, n.exponent = t, n;
          }(3),
              i = function t(e) {
            function n(t) {
              return 1 - Math.pow(1 - t, e);
            }return e = +e, n.exponent = t, n;
          }(3),
              o = function t(e) {
            function n(t) {
              return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
            }return e = +e, n.exponent = t, n;
          }(3);
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return 1 - Math.cos(t * i);
          }, e.c = function (t) {
            return Math.sin(t * i);
          }, e.b = function (t) {
            return (1 - Math.cos(r * t)) / 2;
          };var r = Math.PI,
              i = r / 2;
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return Math.pow(2, 10 * t - 10);
          }, e.c = function (t) {
            return 1 - Math.pow(2, -10 * t);
          }, e.b = function (t) {
            return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
          };
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return 1 - Math.sqrt(1 - t * t);
          }, e.c = function (t) {
            return Math.sqrt(1 - --t * t);
          }, e.b = function (t) {
            return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
          };
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            return 1 - p(1 - t);
          }, e.c = p, e.b = function (t) {
            return ((t *= 2) <= 1 ? 1 - p(1 - t) : p(t - 1) + 1) / 2;
          };var r = 4 / 11,
              i = 6 / 11,
              o = 8 / 11,
              a = .75,
              u = 9 / 11,
              s = 10 / 11,
              c = .9375,
              f = 21 / 22,
              h = 63 / 64,
              l = 1 / r / r;function p(t) {
            return (t = +t) < r ? l * t * t : t < o ? l * (t -= i) * t + a : t < s ? l * (t -= u) * t + c : l * (t -= f) * t + h;
          }
        }, function (t, e, n) {
          "use strict";
          n.d(e, "a", function () {
            return r;
          }), n.d(e, "c", function () {
            return i;
          }), n.d(e, "b", function () {
            return o;
          });var r = function t(e) {
            function n(t) {
              return t * t * ((e + 1) * t - e);
            }return e = +e, n.overshoot = t, n;
          }(1.70158),
              i = function t(e) {
            function n(t) {
              return --t * t * ((e + 1) * t + e) + 1;
            }return e = +e, n.overshoot = t, n;
          }(1.70158),
              o = function t(e) {
            function n(t) {
              return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2;
            }return e = +e, n.overshoot = t, n;
          }(1.70158);
        }, function (t, e, n) {
          "use strict";
          n.d(e, "a", function () {
            return i;
          }), n.d(e, "c", function () {
            return o;
          }), n.d(e, "b", function () {
            return a;
          });var r = 2 * Math.PI,
              i = function t(e, n) {
            var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);function o(t) {
              return e * Math.pow(2, 10 * --t) * Math.sin((i - t) / n);
            }return o.amplitude = function (e) {
              return t(e, n * r);
            }, o.period = function (n) {
              return t(e, n);
            }, o;
          }(1, .3),
              o = function t(e, n) {
            var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);function o(t) {
              return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / n);
            }return o.amplitude = function (e) {
              return t(e, n * r);
            }, o.period = function (n) {
              return t(e, n);
            }, o;
          }(1, .3),
              a = function t(e, n) {
            var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= r);function o(t) {
              return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((i - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((i + t) / n)) / 2;
            }return o.amplitude = function (e) {
              return t(e, n * r);
            }, o.period = function (n) {
              return t(e, n);
            }, o;
          }(1, .3);
        }, function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });var r = n(47);n.d(e, "now", function () {
            return r.b;
          }), n.d(e, "timer", function () {
            return r.c;
          }), n.d(e, "timerFlush", function () {
            return r.d;
          });var i = n(247);n.d(e, "timeout", function () {
            return i.a;
          });var o = n(248);n.d(e, "interval", function () {
            return o.a;
          });
        }, function (t, e, n) {
          "use strict";
          var r = n(47);e.a = function (t, e, n) {
            var i = new r.a();return e = null == e ? 0 : +e, i.restart(function (n) {
              i.stop(), t(n + e);
            }, e, n), i;
          };
        }, function (t, e, n) {
          "use strict";
          var r = n(47);e.a = function (t, e, n) {
            var i = new r.a(),
                o = e;return null == e ? (i.restart(t, e, n), i) : (e = +e, n = null == n ? Object(r.b)() : +n, i.restart(function r(a) {
              a += o, i.restart(r, o += e, n), t(a);
            }, e, n), i);
          };
        }, function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });var r = n(48);n.d(e, "interpolate", function () {
            return r.a;
          });var i = n(96);n.d(e, "interpolateArray", function () {
            return i.a;
          });var o = n(51);n.d(e, "interpolateBasis", function () {
            return o.b;
          });var a = n(94);n.d(e, "interpolateBasisClosed", function () {
            return a.a;
          });var u = n(97);n.d(e, "interpolateDate", function () {
            return u.a;
          });var s = n(31);n.d(e, "interpolateNumber", function () {
            return s.a;
          });var c = n(98);n.d(e, "interpolateObject", function () {
            return c.a;
          });var f = n(252);n.d(e, "interpolateRound", function () {
            return f.a;
          });var h = n(99);n.d(e, "interpolateString", function () {
            return h.a;
          });var l = n(253);n.d(e, "interpolateTransformCss", function () {
            return l.a;
          }), n.d(e, "interpolateTransformSvg", function () {
            return l.b;
          });var p = n(256);n.d(e, "interpolateZoom", function () {
            return p.a;
          });var d = n(93);n.d(e, "interpolateRgb", function () {
            return d.a;
          }), n.d(e, "interpolateRgbBasis", function () {
            return d.b;
          }), n.d(e, "interpolateRgbBasisClosed", function () {
            return d.c;
          });var v = n(257);n.d(e, "interpolateHsl", function () {
            return v.a;
          }), n.d(e, "interpolateHslLong", function () {
            return v.b;
          });var g = n(258);n.d(e, "interpolateLab", function () {
            return g.a;
          });var y = n(259);n.d(e, "interpolateHcl", function () {
            return y.a;
          }), n.d(e, "interpolateHclLong", function () {
            return y.b;
          });var m = n(260);n.d(e, "interpolateCubehelix", function () {
            return m.b;
          }), n.d(e, "interpolateCubehelixLong", function () {
            return m.a;
          });var x = n(261);n.d(e, "quantize", function () {
            return x.a;
          });
        }, function (t, e, n) {
          "use strict";
          e.a = d, e.b = _;var r = n(50),
              i = n(49),
              o = n(92),
              a = .96422,
              u = 1,
              s = .82521,
              c = 4 / 29,
              f = 6 / 29,
              h = 3 * f * f,
              l = f * f * f;function p(t) {
            if (t instanceof v) return new v(t.l, t.a, t.b, t.opacity);if (t instanceof w) {
              if (isNaN(t.h)) return new v(t.l, 0, 0, t.opacity);var e = t.h * o.a;return new v(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
            }t instanceof i.b || (t = Object(i.h)(t));var n,
                r,
                c = x(t.r),
                f = x(t.g),
                h = x(t.b),
                l = g((.2225045 * c + .7168786 * f + .0606169 * h) / u);return c === f && f === h ? n = r = l : (n = g((.4360747 * c + .3850649 * f + .1430804 * h) / a), r = g((.0139322 * c + .0971045 * f + .7141733 * h) / s)), new v(116 * l - 16, 500 * (n - l), 200 * (l - r), t.opacity);
          }function d(t, e, n, r) {
            return 1 === arguments.length ? p(t) : new v(t, e, n, null == r ? 1 : r);
          }function v(t, e, n, r) {
            this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
          }function g(t) {
            return t > l ? Math.pow(t, 1 / 3) : t / h + c;
          }function y(t) {
            return t > f ? t * t * t : h * (t - c);
          }function m(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
          }function x(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
          }function b(t) {
            if (t instanceof w) return new w(t.h, t.c, t.l, t.opacity);if (t instanceof v || (t = p(t)), 0 === t.a && 0 === t.b) return new w(NaN, 0, t.l, t.opacity);var e = Math.atan2(t.b, t.a) * o.b;return new w(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
          }function _(t, e, n, r) {
            return 1 === arguments.length ? b(t) : new w(t, e, n, null == r ? 1 : r);
          }function w(t, e, n, r) {
            this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
          }Object(r.a)(v, d, Object(r.b)(i.a, { brighter: function brighter(t) {
              return new v(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
            }, darker: function darker(t) {
              return new v(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
            }, rgb: function rgb() {
              var t = (this.l + 16) / 116,
                  e = isNaN(this.a) ? t : t + this.a / 500,
                  n = isNaN(this.b) ? t : t - this.b / 200;return e = a * y(e), t = u * y(t), n = s * y(n), new i.b(m(3.1338561 * e - 1.6168667 * t - .4906146 * n), m(-.9787684 * e + 1.9161415 * t + .033454 * n), m(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity);
            } })), Object(r.a)(w, _, Object(r.b)(i.a, { brighter: function brighter(t) {
              return new w(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
            }, darker: function darker(t) {
              return new w(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
            }, rgb: function rgb() {
              return p(this).rgb();
            } }));
        }, function (t, e, n) {
          "use strict";
          e.a = d;var r = n(50),
              i = n(49),
              o = n(92),
              a = -.14861,
              u = 1.78277,
              s = -.29227,
              c = -.90649,
              f = 1.97294,
              h = f * c,
              l = f * u,
              p = u * s - c * a;function d(t, e, n, r) {
            return 1 === arguments.length ? function (t) {
              if (t instanceof v) return new v(t.h, t.s, t.l, t.opacity);t instanceof i.b || (t = Object(i.h)(t));var e = t.r / 255,
                  n = t.g / 255,
                  r = t.b / 255,
                  a = (p * r + h * e - l * n) / (p + h - l),
                  u = r - a,
                  d = (f * (n - a) - s * u) / c,
                  g = Math.sqrt(d * d + u * u) / (f * a * (1 - a)),
                  y = g ? Math.atan2(d, u) * o.b - 120 : NaN;return new v(y < 0 ? y + 360 : y, g, a, t.opacity);
            }(t) : new v(t, e, n, null == r ? 1 : r);
          }function v(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
          }Object(r.a)(v, d, Object(r.b)(i.a, { brighter: function brighter(t) {
              return t = null == t ? i.c : Math.pow(i.c, t), new v(this.h, this.s, this.l * t, this.opacity);
            }, darker: function darker(t) {
              return t = null == t ? i.d : Math.pow(i.d, t), new v(this.h, this.s, this.l * t, this.opacity);
            }, rgb: function rgb() {
              var t = isNaN(this.h) ? 0 : (this.h + 120) * o.a,
                  e = +this.l,
                  n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                  r = Math.cos(t),
                  h = Math.sin(t);return new i.b(255 * (e + n * (a * r + u * h)), 255 * (e + n * (s * r + c * h)), 255 * (e + n * (f * r)), this.opacity);
            } }));
        }, function (t, e, n) {
          "use strict";
          e.a = function (t, e) {
            return e -= t = +t, function (n) {
              return Math.round(t + e * n);
            };
          };
        }, function (t, e, n) {
          "use strict";
          n.d(e, "a", function () {
            return a;
          }), n.d(e, "b", function () {
            return u;
          });var r = n(31),
              i = n(254);function o(t, e, n, i) {
            function o(t) {
              return t.length ? t.pop() + " " : "";
            }return function (a, u) {
              var s = [],
                  c = [];return a = t(a), u = t(u), function (t, i, o, a, u, s) {
                if (t !== o || i !== a) {
                  var c = u.push("translate(", null, e, null, n);s.push({ i: c - 4, x: Object(r.a)(t, o) }, { i: c - 2, x: Object(r.a)(i, a) });
                } else (o || a) && u.push("translate(" + o + e + a + n);
              }(a.translateX, a.translateY, u.translateX, u.translateY, s, c), function (t, e, n, a) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), a.push({ i: n.push(o(n) + "rotate(", null, i) - 2, x: Object(r.a)(t, e) })) : e && n.push(o(n) + "rotate(" + e + i);
              }(a.rotate, u.rotate, s, c), function (t, e, n, a) {
                t !== e ? a.push({ i: n.push(o(n) + "skewX(", null, i) - 2, x: Object(r.a)(t, e) }) : e && n.push(o(n) + "skewX(" + e + i);
              }(a.skewX, u.skewX, s, c), function (t, e, n, i, a, u) {
                if (t !== n || e !== i) {
                  var s = a.push(o(a) + "scale(", null, ",", null, ")");u.push({ i: s - 4, x: Object(r.a)(t, n) }, { i: s - 2, x: Object(r.a)(e, i) });
                } else 1 === n && 1 === i || a.push(o(a) + "scale(" + n + "," + i + ")");
              }(a.scaleX, a.scaleY, u.scaleX, u.scaleY, s, c), a = u = null, function (t) {
                for (var e, n = -1, r = c.length; ++n < r;) {
                  s[(e = c[n]).i] = e.x(t);
                }return s.join("");
              };
            };
          }var a = o(i.a, "px, ", "px)", "deg)"),
              u = o(i.b, ", ", ")", ")");
        }, function (t, e, n) {
          "use strict";
          e.a = function (t) {
            if ("none" === t) return u.b;r || (r = document.createElement("DIV"), i = document.documentElement, o = document.defaultView);return r.style.transform = t, t = o.getComputedStyle(i.appendChild(r), null).getPropertyValue("transform"), i.removeChild(r), t = t.slice(7, -1).split(","), Object(u.a)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]);
          }, e.b = function (t) {
            if (null == t) return u.b;a || (a = document.createElementNS("http://www.w3.org/2000/svg", "g"));return a.setAttribute("transform", t), (t = a.transform.baseVal.consolidate()) ? (t = t.matrix, Object(u.a)(t.a, t.b, t.c, t.d, t.e, t.f)) : u.b;
          };var r,
              i,
              o,
              a,
              u = n(255);
        }, function (t, e, n) {
          "use strict";
          n.d(e, "b", function () {
            return i;
          });var r = 180 / Math.PI,
              i = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };e.a = function (t, e, n, i, o, a) {
            var u, s, c;return (u = Math.sqrt(t * t + e * e)) && (t /= u, e /= u), (c = t * n + e * i) && (n -= t * c, i -= e * c), (s = Math.sqrt(n * n + i * i)) && (n /= s, i /= s, c /= s), t * i < e * n && (t = -t, e = -e, c = -c, u = -u), { translateX: o, translateY: a, rotate: Math.atan2(e, t) * r, skewX: Math.atan(c) * r, scaleX: u, scaleY: s };
          };
        }, function (t, e, n) {
          "use strict";
          var r = Math.SQRT2;function i(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2;
          }e.a = function (t, e) {
            var n,
                o,
                a = t[0],
                u = t[1],
                s = t[2],
                c = e[0],
                f = e[1],
                h = e[2],
                l = c - a,
                p = f - u,
                d = l * l + p * p;if (d < 1e-12) o = Math.log(h / s) / r, n = function n(t) {
              return [a + t * l, u + t * p, s * Math.exp(r * t * o)];
            };else {
              var v = Math.sqrt(d),
                  g = (h * h - s * s + 4 * d) / (2 * s * 2 * v),
                  y = (h * h - s * s - 4 * d) / (2 * h * 2 * v),
                  m = Math.log(Math.sqrt(g * g + 1) - g),
                  x = Math.log(Math.sqrt(y * y + 1) - y);o = (x - m) / r, n = function n(t) {
                var e,
                    n = t * o,
                    c = i(m),
                    f = s / (2 * v) * (c * (e = r * n + m, ((e = Math.exp(2 * e)) - 1) / (e + 1)) - function (t) {
                  return ((t = Math.exp(t)) - 1 / t) / 2;
                }(m));return [a + f * l, u + f * p, s * c / i(r * n + m)];
              };
            }return n.duration = 1e3 * o, n;
          };
        }, function (t, e, n) {
          "use strict";
          n.d(e, "b", function () {
            return a;
          });var r = n(15),
              i = n(21);function o(t) {
            return function (e, n) {
              var o = t((e = Object(r.d)(e)).h, (n = Object(r.d)(n)).h),
                  a = Object(i.a)(e.s, n.s),
                  u = Object(i.a)(e.l, n.l),
                  s = Object(i.a)(e.opacity, n.opacity);return function (t) {
                return e.h = o(t), e.s = a(t), e.l = u(t), e.opacity = s(t), e + "";
              };
            };
          }e.a = o(i.c);var a = o(i.a);
        }, function (t, e, n) {
          "use strict";
          e.a = function (t, e) {
            var n = Object(i.a)((t = Object(r.e)(t)).l, (e = Object(r.e)(e)).l),
                o = Object(i.a)(t.a, e.a),
                a = Object(i.a)(t.b, e.b),
                u = Object(i.a)(t.opacity, e.opacity);return function (e) {
              return t.l = n(e), t.a = o(e), t.b = a(e), t.opacity = u(e), t + "";
            };
          };var r = n(15),
              i = n(21);
        }, function (t, e, n) {
          "use strict";
          n.d(e, "b", function () {
            return a;
          });var r = n(15),
              i = n(21);function o(t) {
            return function (e, n) {
              var o = t((e = Object(r.c)(e)).h, (n = Object(r.c)(n)).h),
                  a = Object(i.a)(e.c, n.c),
                  u = Object(i.a)(e.l, n.l),
                  s = Object(i.a)(e.opacity, n.opacity);return function (t) {
                return e.h = o(t), e.c = a(t), e.l = u(t), e.opacity = s(t), e + "";
              };
            };
          }e.a = o(i.c);var a = o(i.a);
        }, function (t, e, n) {
          "use strict";
          n.d(e, "a", function () {
            return a;
          });var r = n(15),
              i = n(21);function o(t) {
            return function e(n) {
              function o(e, o) {
                var a = t((e = Object(r.b)(e)).h, (o = Object(r.b)(o)).h),
                    u = Object(i.a)(e.s, o.s),
                    s = Object(i.a)(e.l, o.l),
                    c = Object(i.a)(e.opacity, o.opacity);return function (t) {
                  return e.h = a(t), e.s = u(t), e.l = s(Math.pow(t, n)), e.opacity = c(t), e + "";
                };
              }return n = +n, o.gamma = e, o;
            }(1);
          }e.b = o(i.c);var a = o(i.a);
        }, function (t, e, n) {
          "use strict";
          e.a = function (t, e) {
            for (var n = new Array(e), r = 0; r < e; ++r) {
              n[r] = t(r / (e - 1));
            }return n;
          };
        }, function (t, e, n) {
          var r,
              i = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (t) {
            return void 0 === t ? "undefined" : a(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
          };!function (e) {
            "use strict";
            function o() {}var a = o.prototype,
                u = e.EventEmitter;function s(t, e) {
              for (var n = t.length; n--;) {
                if (t[n].listener === e) return n;
              }return -1;
            }function c(t) {
              return function () {
                return this[t].apply(this, arguments);
              };
            }a.getListeners = function (t) {
              var e,
                  n,
                  r = this._getEvents();if (t instanceof RegExp) for (n in e = {}, r) {
                r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
              } else e = r[t] || (r[t] = []);return e;
            }, a.flattenListeners = function (t) {
              var e,
                  n = [];for (e = 0; e < t.length; e += 1) {
                n.push(t[e].listener);
              }return n;
            }, a.getListenersAsObject = function (t) {
              var e,
                  n = this.getListeners(t);return n instanceof Array && ((e = {})[t] = n), e || n;
            }, a.addListener = function (t, e) {
              if (!function t(e) {
                return "function" == typeof e || e instanceof RegExp || !(!e || "object" !== (void 0 === e ? "undefined" : i(e))) && t(e.listener);
              }(e)) throw new TypeError("listener must be a function");var n,
                  r = this.getListenersAsObject(t),
                  o = "object" === (void 0 === e ? "undefined" : i(e));for (n in r) {
                r.hasOwnProperty(n) && -1 === s(r[n], e) && r[n].push(o ? e : { listener: e, once: !1 });
              }return this;
            }, a.on = c("addListener"), a.addOnceListener = function (t, e) {
              return this.addListener(t, { listener: e, once: !0 });
            }, a.once = c("addOnceListener"), a.defineEvent = function (t) {
              return this.getListeners(t), this;
            }, a.defineEvents = function (t) {
              for (var e = 0; e < t.length; e += 1) {
                this.defineEvent(t[e]);
              }return this;
            }, a.removeListener = function (t, e) {
              var n,
                  r,
                  i = this.getListenersAsObject(t);for (r in i) {
                i.hasOwnProperty(r) && -1 !== (n = s(i[r], e)) && i[r].splice(n, 1);
              }return this;
            }, a.off = c("removeListener"), a.addListeners = function (t, e) {
              return this.manipulateListeners(!1, t, e);
            }, a.removeListeners = function (t, e) {
              return this.manipulateListeners(!0, t, e);
            }, a.manipulateListeners = function (t, e, n) {
              var r,
                  o,
                  a = t ? this.removeListener : this.addListener,
                  u = t ? this.removeListeners : this.addListeners;if ("object" !== (void 0 === e ? "undefined" : i(e)) || e instanceof RegExp) for (r = n.length; r--;) {
                a.call(this, e, n[r]);
              } else for (r in e) {
                e.hasOwnProperty(r) && (o = e[r]) && ("function" == typeof o ? a.call(this, r, o) : u.call(this, r, o));
              }return this;
            }, a.removeEvent = function (t) {
              var e,
                  n = void 0 === t ? "undefined" : i(t),
                  r = this._getEvents();if ("string" === n) delete r[t];else if (t instanceof RegExp) for (e in r) {
                r.hasOwnProperty(e) && t.test(e) && delete r[e];
              } else delete this._events;return this;
            }, a.removeAllListeners = c("removeEvent"), a.emitEvent = function (t, e) {
              var n,
                  r,
                  i,
                  o,
                  a = this.getListenersAsObject(t);for (o in a) {
                if (a.hasOwnProperty(o)) for (n = a[o].slice(0), i = 0; i < n.length; i++) {
                  !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                }
              }return this;
            }, a.trigger = c("emitEvent"), a.emit = function (t) {
              var e = Array.prototype.slice.call(arguments, 1);return this.emitEvent(t, e);
            }, a.setOnceReturnValue = function (t) {
              return this._onceReturnValue = t, this;
            }, a._getOnceReturnValue = function () {
              return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
            }, a._getEvents = function () {
              return this._events || (this._events = {});
            }, o.noConflict = function () {
              return e.EventEmitter = u, o;
            }, void 0 === (r = function () {
              return o;
            }.call(e, n, e, t)) || (t.exports = r);
          }(this || {});
        }, function (t, e, n) {
          var r = n(1);r.Rect = n(55), r.Rect = n(55), r.Circle = n(101), r.Ellipse = n(102), r.Path = n(103), r.Text = n(105), r.Line = n(106), r.Image = n(107), r.Polygon = n(108), r.Polyline = n(109), r.Arc = n(110), r.Fan = n(111), r.Cubic = n(112), r.Quadratic = n(113), r.Marker = n(56), t.exports = r;
        }, function (t, e) {
          t.exports = { xAt: function xAt(t, e, n, r, i) {
              return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r;
            }, yAt: function yAt(t, e, n, r, i) {
              return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r;
            }, xExtrema: function xExtrema(t, e, n) {
              return Math.atan(-n / e * Math.tan(t));
            }, yExtrema: function yExtrema(t, e, n) {
              return Math.atan(n / (e * Math.tan(t)));
            } };
        }]);
      }, "object" === a(e) && "object" === a(t) ? t.exports = o() : (r = [], void 0 === (i = "function" == typeof (n = o) ? n.apply(e, r) : n) || (t.exports = i));
    }).call(this, n(20)(t));
  }, function (t, e, n) {
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        i = n(177),
        o = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
        a = i || o || Function("return this")();t.exports = a;
  },, function (t, e, n) {
    var r = n(25),
        i = n(365),
        o = n(364),
        a = "[object Null]",
        u = "[object Undefined]",
        s = r ? r.toStringTag : void 0;t.exports = function (t) {
      return null == t ? void 0 === t ? u : a : s && s in Object(t) ? i(t) : o(t);
    };
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
          return t.l;
        } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
          return t.i;
        } }), t.webpackPolyfill = 1), t;
    };
  },, function (t, e) {
    t.exports = { trackable: !0, defaultNodeSize: 40, nodeStyle: { lineWidth: 1 }, labelStyle: { fill: "#595959", textAlign: "center", textBaseline: "middle" }, groupStyle: { stroke: "#CED4D9", fill: "#F2F4F5", radius: 2 }, groupBackgroundPadding: [40, 10, 10, 10], updateDuration: 450, enterDuration: 450, leaveDuration: 450, updateEasing: "easeQuadOut", enterEasing: "easeQuadOut", leaveEasing: "easeQuadOut", version: "2.0.0-beta.86" };
  }, function (t, e, n) {
    var r = n(354),
        i = n(351);t.exports = function (t, e) {
      var n = i(t, e);return r(n) ? n : void 0;
    };
  }, function (t, e, n) {
    var r = n(59),
        i = n(131);t.exports = function (t) {
      return null != t && i(t.length) && !r(t);
    };
  }, function (t, e, n) {
    var r = n(17).Symbol;t.exports = r;
  },, function (t, e, n) {
    var r = n(343);t.exports = function (t) {
      return null == t ? "" : r(t);
    };
  }, function (t, e, n) {
    var r = n(355),
        i = n(128),
        o = n(350),
        a = n(172),
        u = n(349),
        s = n(19),
        c = n(173),
        f = c(r),
        h = c(i),
        l = c(o),
        p = c(a),
        d = c(u),
        v = s;(r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || i && "[object Map]" != v(new i()) || o && "[object Promise]" != v(o.resolve()) || a && "[object Set]" != v(new a()) || u && "[object WeakMap]" != v(new u())) && (v = function v(t) {
      var e = s(t),
          n = "[object Object]" == e ? t.constructor : void 0,
          r = n ? c(n) : "";if (r) switch (r) {case f:
          return "[object DataView]";case h:
          return "[object Map]";case l:
          return "[object Promise]";case p:
          return "[object Set]";case d:
          return "[object WeakMap]";}return e;
    }), t.exports = v;
  }, function (t, e, n) {
    var r = n(178),
        i = n(176),
        o = n(24);t.exports = function (t) {
      return o(t) ? r(t) : i(t);
    };
  }, function (t, e, n) {
    var r = 5,
        i = n(16),
        o = { each: n(371), isObject: n(14), isNumber: n(358), isString: n(174), isFunction: n(59), isBoolean: n(357), isEmpty: n(356), lowerFirst: n(348), upperFirst: n(342), upperCase: n(341), isNil: n(331), isArray: n(13), isPlainObject: n(167), toArray: n(330), indexOf: n(326), clone: n(321), cloneDeep: n(281), merge: n(280), round: n(268), filter: n(266), throttle: n(243), debounce: n(140), isEqualWith: n(241), isEqual: n(240), replace: n(239), union: n(238), uniq: n(231), extend: i.CommonUtil.extend, augment: i.CommonUtil.augment, traverseTree: function traverseTree(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = n(t);r && e(t, null, null), i && o.each(i, function (r, i) {
          e(r, t, i), o.traverseTree(r, e, n);
        });
      }, toAllPadding: function toAllPadding(t) {
        var e = 0,
            n = 0,
            r = 0,
            i = 0;return o.isNumber(t) || o.isString(t) ? e = n = r = i = t : o.isArray(t) && (e = t[0], r = o.isNil(t[1]) ? t[0] : t[1], i = o.isNil(t[2]) ? t[0] : t[2], n = o.isNil(t[3]) ? r : t[3]), [e, r, i, n];
      }, guid: function guid() {
        return "xxxxxxxx".replace(/[xy]/g, function (t) {
          var e = 16 * Math.random() | 0;return ("x" === t ? e : 3 & e | 8).toString(16);
        });
      }, mix: function mix() {
        var t = o.toArray(arguments),
            e = t[0],
            n = void 0,
            r = void 0;if (!0 === e) for (e = t[1], r = 2; r < t.length; r++) {
          a(e, n = t[r]);
        } else for (r = 1; r < t.length; r++) {
          for (var i in n = t[r]) {
            n.hasOwnProperty(i) && "constructor" !== i && (e[i] = n[i]);
          }
        }return e;
      }, mixin: function mixin(t, e) {
        if (t && e) {
          t._mixins = e, t.ATTRS = t.ATTRS || {};o.each(e, function (e) {
            o.augment(t, e);
          }), t.ATTRS = o.mix({}, t.ATTRS);
        }
      } };function a(t, e, n) {
      for (var i in n = n || 0, e) {
        if (e.hasOwnProperty(i)) {
          var u = e[i];null !== u && o.isPlainObject(u) ? (o.isPlainObject(t[i]) || (t[i] = {}), n < r ? a(t[i], e[i], n + 1) : t[i] = e[i]) : o.isArray(u) ? (t[i] = [], t[i] = t[i].concat(u)) : void 0 !== u && (t[i] = e[i]);
        }
      }
    }o.Array = { remove: function remove(t, e) {
        var n = o.indexOf(t, e);-1 !== n && t.splice(n, 1);
      } }, t.exports = o;
  }, function (t, e, n) {
    var r = n(8),
        i = {},
        o = { draw: function draw() {} },
        a = { defaultShapeType: null, getShape: function getShape(t, e) {
        return this[t] || this[e] || this[this.defaultShapeType] || o;
      }, getExtendShape: function getExtendShape(t, e) {
        var n = this;if (r.isArray(t)) {
          var i = {};return t.forEach(function (t) {
            i = r.mix({}, i, n.getShape(t, e));
          }), i;
        }return this.getShape(t, e);
      } };i.registerShapeManager = function (t, e) {
      var n = r.mix({}, a, e),
          o = r.upperFirst(t);return i[o] = n, i["register" + o] = function (t, e, i, o) {
        r.isNil(i) && r.isNil(o) && (i = t);var a = n.getExtendShape(i, o),
            u = r.mix({}, a, e);return u.type = t, n[t] = u, u;
      }, n;
    }, t.exports = i;
  },,,,,,,,, function (t, e, n) {
    var r = n(162),
        i = n(123);t.exports = function (t, e, n, o) {
      var a = !n;n || (n = {});for (var u = -1, s = e.length; ++u < s;) {
        var c = e[u],
            f = o ? o(n[c], t[c], c, n, t) : void 0;void 0 === f && (f = t[c]), a ? i(n, c, f) : r(n, c, f);
      }return n;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return t === e || t != t && e != e;
    };
  }, function (t, e, n) {
    (function (t) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = n(17),
          o = n(363),
          a = "object" == r(e) && e && !e.nodeType && e,
          u = a && "object" == r(t) && t && !t.nodeType && t,
          s = u && u.exports === a ? i.Buffer : void 0,
          c = (s ? s.isBuffer : void 0) || o;t.exports = c;
    }).call(this, n(20)(t));
  }, function (t, e) {
    var n,
        r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window);
    }t.exports = n;
  }, function (t, e, n) {
    var r = n(366),
        i = n(15),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        s = r(function () {
      return arguments;
    }()) ? r : function (t) {
      return i(t) && a.call(t, "callee") && !u.call(t, "callee");
    };t.exports = s;
  }, function (t, e, n) {
    var r = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var r = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this));return r.options = n, r;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype.execute = function () {
        var t = this,
            e = this.options;this.roots.forEach(function (n) {
          t.layout(n, e).eachNode(function (t) {
            t.data.x = t.x + t.data.width / 2 + t.hgap, t.data.y = t.y + t.data.height / 2 + t.vgap;
          });
        });
      }, e;
    }(n(133));t.exports = r;
  }, function (t, e, n) {
    (function (t) {
      var n,
          r,
          i,
          o,
          a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      };"undefined" != typeof self && self, o = function o() {
        return function (t) {
          var e = {};function n(r) {
            if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
          }return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
          }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
              return t.default;
            } : function () {
              return t;
            };return n.d(e, "a", e), e;
          }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, n.p = "", n(n.s = 4);
        }([function (t, e, n) {
          var r = n(2),
              i = function () {
            function t(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};!function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              }(this, t);this.options = n, this.rootNode = r(e, n);
            }return t.prototype.execute = function () {
              throw new Error("please override this method");
            }, t;
          }();t.exports = i;
        }, function (t, e, n) {
          var r = n(3),
              i = ["LR", "RL", "TB", "BT", "H", "V"],
              o = ["LR", "RL", "H"],
              a = i[0];t.exports = function (t, e, n) {
            var u = e.direction || a;if (e.isHorizontal = function (t) {
              return o.indexOf(t) > -1;
            }(u), u && -1 === i.indexOf(u)) throw new TypeError("Invalid direction: " + u);if (u === i[0]) n(t, e);else if (u === i[1]) n(t, e), t.right2left();else if (u === i[2]) n(t, e);else if (u === i[3]) n(t, e), t.bottom2top();else if (u === i[4] || u === i[5]) {
              var s = r(t, e),
                  c = s.left,
                  f = s.right;n(c, e), n(f, e), e.isHorizontal ? c.right2left() : c.bottom2top(), f.translate(c.x - f.x, c.y - f.y), t.x = c.x, t.y = f.y;var h = t.getBoundingBox();e.isHorizontal ? h.top < 0 && t.translate(0, -h.top) : h.left < 0 && t.translate(-h.left, 0);
            }return t.translate(-(t.x + t.width / 2 + t.hgap), -(t.y + t.height / 2 + t.vgap)), t;
          };
        }, function (t, e) {
          var n = { getId: function getId(t) {
              return t.id || t.name;
            }, getHGap: function getHGap(t) {
              return t.hgap || 18;
            }, getVGap: function getVGap(t) {
              return t.vgap || 18;
            }, getChildren: function getChildren(t) {
              return t.children;
            }, getHeight: function getHeight(t) {
              return t.height || 36;
            }, getWidth: function getWidth(t) {
              var e = t.name || " ";return t.width || 18 * e.split("").length;
            } };function r(t, e) {
            var n = this;if (n.vgap = n.hgap = 0, t instanceof r) return t;n.data = t;var i = e.getHGap(t),
                o = e.getVGap(t);return n.width = e.getWidth(t), n.height = e.getHeight(t), n.id = e.getId(t), n.x = n.y = 0, n.depth = 0, n.children || (n.children = []), n.addGap(i, o), n;
          }Object.assign(r.prototype, { isRoot: function isRoot() {
              return 0 === this.depth;
            }, isLeaf: function isLeaf() {
              return 0 === this.children.length;
            }, addGap: function addGap(t, e) {
              this.hgap += t, this.vgap += e, this.width += 2 * t, this.height += 2 * e;
            }, eachNode: function eachNode(t) {
              for (var e = [this], n = void 0; n = e.pop();) {
                t(n), e = e.concat(n.children);
              }
            }, DFTraverse: function DFTraverse(t) {
              this.eachNode(t);
            }, BFTraverse: function BFTraverse(t) {
              for (var e = [this], n = void 0; n = e.shift();) {
                t(n), e = e.concat(n.children);
              }
            }, getBoundingBox: function getBoundingBox() {
              var t = { left: Number.MAX_VALUE, top: Number.MAX_VALUE, width: 0, height: 0 };return this.eachNode(function (e) {
                t.left = Math.min(t.left, e.x), t.top = Math.min(t.top, e.y), t.width = Math.max(t.width, e.x + e.width), t.height = Math.max(t.height, e.y + e.height);
              }), t;
            }, translate: function translate() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;this.eachNode(function (n) {
                n.x += t, n.y += e;
              });
            }, right2left: function right2left() {
              var t = this.getBoundingBox();this.eachNode(function (e) {
                e.x = e.x - 2 * (e.x - t.left) - e.width;
              }), this.translate(t.width, 0);
            }, bottom2top: function bottom2top() {
              var t = this.getBoundingBox();this.eachNode(function (e) {
                e.y = e.y - 2 * (e.y - t.top) - e.height;
              }), this.translate(0, t.height);
            } }), t.exports = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments[2],
                o = new r(t, e = Object.assign({}, n, e)),
                a = [o],
                u = void 0;if (!i && !t.collapsed) for (; u = a.pop();) {
              if (!u.data.collapsed) {
                var s = e.getChildren(u.data),
                    c = s ? s.length : 0;if (u.children = new Array(c), s && c) for (var f = 0; f < c; f++) {
                  var h = new r(s[f], e);u.children[f] = h, a.push(h), h.parent = u, h.depth = u.depth + 1;
                }
              }
            }return o;
          };
        }, function (t, e, n) {
          var r = n(2);t.exports = function (t, e) {
            for (var n = r(t.data, e, !0), i = r(t.data, e, !0), o = t.children.length, a = Math.round(o / 2), u = e.getSide || function (t, e) {
              return e < a ? "right" : "left";
            }, s = 0; s < o; s++) {
              var c = t.children[s];"right" === u(c, s) ? i.children.push(c) : n.children.push(c);
            }return n.eachNode(function (t) {
              t.isRoot() || (t.side = "left");
            }), i.eachNode(function (t) {
              t.isRoot() || (t.side = "right");
            }), { left: n, right: i };
          };
        }, function (t, e, n) {
          var r = { compactBox: n(5), dendrogram: n(7), indented: n(9), mindmap: n(11) };t.exports = r;
        }, function (t, e, n) {
          var r = n(0),
              i = n(6),
              o = n(1),
              u = function (t) {
            function e() {
              return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e;
              }(this, t.apply(this, arguments));
            }return function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(e, t), e.prototype.execute = function () {
              return o(this.rootNode, this.options, i);
            }, e;
          }(r),
              s = {};t.exports = function (t, e) {
            return e = Object.assign({}, s, e), new u(t, e).execute();
          };
        }, function (t, e) {
          function n(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                i = this;i.w = t || 0, i.h = e || 0, i.y = n || 0, i.x = 0, i.c = r || [], i.cs = r.length, i.prelim = 0, i.mod = 0, i.shift = 0, i.change = 0, i.tl = null, i.tr = null, i.el = null, i.er = null, i.msel = 0, i.mser = 0;
          }function r(t, e) {
            !function t(e, n, r) {
              r ? e.y += n : e.x += n, e.children.forEach(function (e) {
                t(e, n, r);
              });
            }(t, -function t(e, n) {
              var r = n ? e.y : e.x;return e.children.forEach(function (e) {
                r = Math.min(t(e, n), r);
              }), r;
            }(t, e), e);
          }n.fromNode = function (t, e) {
            if (!t) return null;var r = [];return t.children.forEach(function (t) {
              r.push(n.fromNode(t, e));
            }), e ? new n(t.height, t.width, t.x, r) : new n(t.width, t.height, t.y, r);
          }, t.exports = function (t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isHorizontal;function i(t) {
              0 === t.cs ? (t.el = t, t.er = t, t.msel = t.mser = 0) : (t.el = t.c[0].el, t.msel = t.c[0].msel, t.er = t.c[t.cs - 1].er, t.mser = t.c[t.cs - 1].mser);
            }function o(t, e, n) {
              for (var r = t.c[e - 1], i = r.mod, o = t.c[e], f = o.mod; null !== r && null !== o;) {
                c(r) > n.low && (n = n.nxt);var h = i + r.prelim + r.w - (f + o.prelim);h > 0 && (f += h, a(t, e, n.index, h));var l = c(r),
                    p = c(o);l <= p && null !== (r = s(r)) && (i += r.mod), l >= p && null !== (o = u(o)) && (f += o.mod);
              }!r && o ? function (t, e, n, r) {
                var i = t.c[0].el;i.tl = n;var o = r - n.mod - t.c[0].msel;i.mod += o, i.prelim -= o, t.c[0].el = t.c[e].el, t.c[0].msel = t.c[e].msel;
              }(t, e, o, f) : r && !o && function (t, e, n, r) {
                var i = t.c[e].er;i.tr = n;var o = r - n.mod - t.c[e].mser;i.mod += o, i.prelim -= o, t.c[e].er = t.c[e - 1].er, t.c[e].mser = t.c[e - 1].mser;
              }(t, e, r, i);
            }function a(t, e, n, r) {
              t.c[e].mod += r, t.c[e].msel += r, t.c[e].mser += r, function (t, e, n, r) {
                if (n !== e - 1) {
                  var i = e - n;t.c[n + 1].shift += r / i, t.c[e].shift -= r / i, t.c[e].change -= r - r / i;
                }
              }(t, e, n, r);
            }function u(t) {
              return 0 === t.cs ? t.tl : t.c[0];
            }function s(t) {
              return 0 === t.cs ? t.tr : t.c[t.cs - 1];
            }function c(t) {
              return t.y + t.h;
            }function f(t, e, n) {
              for (; null !== n && t >= n.low;) {
                n = n.nxt;
              }return { low: t, index: e, nxt: n };
            }!function t(e, n) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;n ? (e.x = r, r += e.width) : (e.y = r, r += e.height), e.children.forEach(function (e) {
                t(e, n, r);
              });
            }(t, e);var h = n.fromNode(t, e);return function t(e) {
              if (0 !== e.cs) {
                t(e.c[0]);for (var n = f(c(e.c[0].el), 0, null), r = 1; r < e.cs; ++r) {
                  t(e.c[r]);var a = c(e.c[r].er);o(e, r, n), n = f(a, r, n);
                }!function (t) {
                  t.prelim = (t.c[0].prelim + t.c[0].mod + t.c[t.cs - 1].mod + t.c[t.cs - 1].prelim + t.c[t.cs - 1].w) / 2 - t.w / 2;
                }(e), i(e);
              } else i(e);
            }(h), function t(e, n) {
              n += e.mod, e.x = e.prelim + n, function (t) {
                for (var e = 0, n = 0, r = 0; r < t.cs; r++) {
                  e += t.c[r].shift, n += e + t.c[r].change, t.c[r].mod += n;
                }
              }(e);for (var r = 0; r < e.cs; r++) {
                t(e.c[r], n);
              }
            }(h, 0), function t(e, n, r) {
              r ? n.y = e.x : n.x = e.x, e.c.forEach(function (e, i) {
                t(e, n.children[i], r);
              });
            }(h, t, e), r(t, e), t;
          };
        }, function (t, e, n) {
          var r = n(0),
              i = n(8),
              o = n(1),
              u = function (t) {
            function e() {
              return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e;
              }(this, t.apply(this, arguments));
            }return function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(e, t), e.prototype.execute = function () {
              return this.rootNode.width = 0, o(this.rootNode, this.options, i);
            }, e;
          }(r),
              s = {};t.exports = function (t, e) {
            return e = Object.assign({}, s, e), new u(t, e).execute();
          };
        }, function (t, e) {
          var n = { isHorizontal: !0, nodeSep: 20, nodeSize: 20, rankSep: 200, subTreeSep: 10 };t.exports = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};e = Object.assign({}, n, e);var r = 0;var i = void 0;var o = function t(e) {
              if (!e) return null;e.width = 0, e.depth && e.depth > r && (r = e.depth);var n = e.children,
                  i = n.length,
                  o = new function () {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    e = this;e.x = e.y = 0, e.leftChild = e.rightChild = null, e.height = 0, e.children = t;
              }(e.height, []);return n.forEach(function (e, n) {
                var r = t(e);o.children.push(r), 0 === n && (o.leftChild = r), n === i - 1 && (o.rightChild = r);
              }), o.originNode = e, o.isLeaf = e.isLeaf(), o;
            }(t);return function t(e) {
              if (e.isLeaf || 0 === e.children.length) e.drawingDepth = r;else {
                var n = e.children.map(function (e) {
                  return t(e);
                }),
                    i = Math.min.apply(null, n);e.drawingDepth = i - 1;
              }return e.drawingDepth;
            }(o), function t(n) {
              n.x = n.drawingDepth * e.rankSep, n.isLeaf ? (n.y = 0, i && (n.y = i.y + i.height + e.nodeSep, n.originNode.parent !== i.originNode.parent && (n.y += e.subTreeSep)), i = n) : (n.children.forEach(function (e) {
                t(e);
              }), n.y = (n.leftChild.y + n.rightChild.y) / 2);
            }(o), function t(e, n, r) {
              r ? (n.x = e.x, n.y = e.y) : (n.x = e.y, n.y = e.x), e.children.forEach(function (e, i) {
                t(e, n.children[i], r);
              });
            }(o, t, e.isHorizontal), t;
          };
        }, function (t, e, n) {
          var r = n(0),
              i = n(10),
              o = n(3),
              u = ["LR", "RL", "H"],
              s = u[0],
              c = function (t) {
            function e() {
              return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e;
              }(this, t.apply(this, arguments));
            }return function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(e, t), e.prototype.execute = function () {
              var t = this.options,
                  e = this.rootNode;t.isHorizontal = !0;var n = t.indent,
                  r = t.direction || s;if (r && -1 === u.indexOf(r)) throw new TypeError("Invalid direction: " + r);if (r === u[0]) i(e, n);else if (r === u[1]) i(e, n), e.right2left();else if (r === u[2]) {
                var a = o(e, t),
                    c = a.left,
                    f = a.right;i(c, n), c.right2left(), i(f, n);var h = c.getBoundingBox();f.translate(h.width, 0), e.x = f.x - e.width / 2;
              }return e;
            }, e;
          }(r),
              f = {};t.exports = function (t, e) {
            return e = Object.assign({}, f, e), new c(t, e).execute();
          };
        }, function (t, e) {
          t.exports = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                n = null;t.eachNode(function (t) {
              !function (t, e, n) {
                t.x += n * t.depth, t.y = e ? e.y + e.height : 0;
              }(t, n, e), n = t;
            });
          };
        }, function (t, e, n) {
          var r = n(0),
              i = n(12),
              o = n(1),
              u = function (t) {
            function e() {
              return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e;
              }(this, t.apply(this, arguments));
            }return function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(e, t), e.prototype.execute = function () {
              return o(this.rootNode, this.options, i);
            }, e;
          }(r),
              s = {};t.exports = function (t, e) {
            return e = Object.assign({}, s, e), new u(t, e).execute();
          };
        }, function (t, e) {
          var n = { getSubTreeSep: function getSubTreeSep() {
              return 0;
            } };t.exports = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};e = Object.assign({}, n, e), t.parent = { x: 0, width: 0, height: 0, y: 0 }, t.BFTraverse(function (t) {
              t.x = t.parent.x + t.parent.width;
            }), t.parent = null, function t(e, n) {
              var r = 0;return e.children.length ? e.children.forEach(function (e) {
                r += t(e, n);
              }) : r = e.height, e._subTreeSep = n.getSubTreeSep(e.data), e.totalHeight = Math.max(e.height, r) + 2 * e._subTreeSep, e.totalHeight;
            }(t, e), t.startY = 0, t.y = t.totalHeight / 2 - t.height / 2, t.eachNode(function (t) {
              var e = t.children,
                  n = e.length;if (n) {
                var r = e[0];if (r.startY = t.startY + t._subTreeSep, 1 === n) r.y = t.y + t.height / 2 - r.height / 2;else {
                  r.y = r.startY + r.totalHeight / 2 - r.height / 2;for (var i = 1; i < n; i++) {
                    var o = e[i];o.startY = e[i - 1].startY + e[i - 1].totalHeight, o.y = o.startY + o.totalHeight / 2 - o.height / 2;
                  }
                }
              }
            }), function t(e) {
              var n = e.children,
                  r = n.length;if (r) {
                n.forEach(function (e) {
                  t(e);
                });var i = n[0],
                    o = n[r - 1],
                    a = o.y - i.y + o.height,
                    u = 0;if (n.forEach(function (t) {
                  u += t.totalHeight;
                }), a > e.height) e.y = i.y + a / 2 - e.height / 2;else if (1 !== n.length || e.height > u) {
                  var s = e.y + (e.height - a) / 2 - i.y;n.forEach(function (t) {
                    t.translate(0, s);
                  });
                } else e.y = (i.y + i.height / 2 + o.y + o.height / 2) / 2 - e.height / 2;
              }
            }(t);
          };
        }]);
      }, "object" === a(e) && "object" === a(t) ? t.exports = o() : (r = [], void 0 === (i = "function" == typeof (n = o) ? n.apply(e, r) : n) || (t.exports = i));
    }).call(this, n(20)(t));
  }, function (t, e, n) {
    var r = n(8),
        i = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = this.getDefaultCfg();r.mix(this, n, e);
      }return t.prototype.getDefaultCfg = function () {
        return {};
      }, t.prototype.destroy = function () {}, t;
    }();t.exports = i;
  }, function (t, e, n) {
    var r = n(57),
        i = 1 / 0;t.exports = function (t) {
      if ("string" == typeof t || r(t)) return t;var e = t + "";return "0" == e && 1 / t == -i ? "-0" : e;
    };
  }, function (t, e, n) {
    var r = n(261),
        i = n(15);t.exports = function t(e, n, o, a, u) {
      return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u));
    };
  }, function (t, e, n) {
    var r = n(178),
        i = n(296),
        o = n(24);t.exports = function (t) {
      return o(t) ? r(t, !0) : i(t);
    };
  }, function (t, e, n) {
    var r = n(302);t.exports = function (t, e) {
      var n = t.__data__;return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
    };
  }, function (t, e, n) {
    var r = n(23)(Object, "create");t.exports = r;
  }, function (t, e, n) {
    var r = n(41);t.exports = function (t, e) {
      for (var n = t.length; n--;) {
        if (r(t[n][0], e)) return n;
      }return -1;
    };
  }, function (t, e, n) {
    var r = n(320),
        i = n(319),
        o = n(318),
        a = n(317),
        u = n(316);function s(t) {
      var e = -1,
          n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
        var r = t[e];this.set(r[0], r[1]);
      }
    }s.prototype.clear = r, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = u, t.exports = s;
  }, function (t, e, n) {
    var r = n(54),
        i = n(315),
        o = n(314),
        a = n(313),
        u = n(312),
        s = n(311);function c(t) {
      var e = this.__data__ = new r(t);this.size = e.size;
    }c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = u, c.prototype.set = s, t.exports = c;
  }, function (t, e) {
    t.exports = function (t) {
      var e = -1,
          n = Array(t.size);return t.forEach(function (t) {
        n[++e] = t;
      }), n;
    };
  }, function (t, e, n) {
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        i = n(19),
        o = n(15),
        a = "[object Symbol]";t.exports = function (t) {
      return "symbol" == (void 0 === t ? "undefined" : r(t)) || o(t) && i(t) == a;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return t;
    };
  }, function (t, e, n) {
    var r = n(19),
        i = n(14),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        s = "[object Proxy]";t.exports = function (t) {
      if (!i(t)) return !1;var e = r(t);return e == a || e == u || e == o || e == s;
    };
  }, function (t, e) {
    var n = Object.prototype;t.exports = function (t) {
      var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || n);
    };
  }, function (t, e, n) {
    var r = n(362),
        i = n(130),
        o = n(129),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;t.exports = u;
  },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
    var r = n(8);var i = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);r.mix(this, { id: "", type: null, model: {}, group: null, animate: !1, modelCache: {} }, e), this._init();
      }return t.prototype._init = function () {
        this._setIndex(), this._mapping(), this._setShapeObj(), this._initGroup(), this.draw();
      }, t.prototype._setIndex = function () {
        var t = this.model;r.isNil(t.index) && (t.index = this.zIndex);
      }, t.prototype._mapping = function () {
        var t = this.mapper,
            e = this.model;t.mapping(e);
      }, t.prototype._initGroup = function () {
        var t = this.group,
            e = this.model,
            n = this.type;t.isItemContainer = !0, t.id = e.id, t.itemType = n, t.model = e;
      }, t.prototype._calculateBBox = function () {
        var t = this.keyShape,
            e = this.group,
            n = r.getBBox(t, e);return n.width = n.maxX - n.minX, n.height = n.maxY - n.minY, n.centerX = (n.minX + n.maxX) / 2, n.centerY = (n.minY + n.maxY) / 2, n;
      }, t.prototype.getLabel = function () {
        return this.group.findByClass("label")[0];
      }, t.prototype.getGraph = function () {
        return this.graph;
      }, t.prototype.getEnterAnimate = function () {
        var t = this.shapeObj,
            e = this.graph;return t.enterAnimate ? t.enterAnimate : e.get("_enterAnimate");
      }, t.prototype.getLeaveAnimate = function () {
        var t = this.shapeObj,
            e = this.graph;return t.leaveAnimate ? t.leaveAnimate : e.get("_leaveAnimate");
      }, t.prototype._setShapeObj = function () {
        var t = this.graph,
            e = this.type,
            n = this.getModel();this.shapeObj = t.getShapeObj(e, n);
      }, t.prototype._afterDraw = function () {
        var t = this.graph;this._setGId(), this._cacheModel(), t.emit("afteritemdraw", { item: this });
      }, t.prototype._cacheModel = function () {
        this.modelCache = r.mix({}, this.model);
      }, t.prototype._setGId = function () {
        var t = this.group,
            e = this.id,
            n = this.type;t.gid = e, t.deepEach(function (t, r, i) {
          var o = r.gid;t.id = e, t.eventPreFix = n, t.gid = o + "-" + i;
        });
      }, t.prototype._beforeDraw = function () {
        this.graph.emit("beforeitemdraw", { item: this }), this.updateCollapsedParent(), this._setShapeObj();
      }, t.prototype._shouldDraw = function () {
        return !0;
      }, t.prototype._getDiff = function () {
        var t = [],
            e = this.model,
            n = this.modelCache;return r.each(e, function (e, i) {
          r.isEqual(e, n[i]) || t.push(i);
        }), 0 !== t.length && t;
      }, t.prototype._drawInner = function () {
        var t = this.animate;this.group.clear(!t);var e = this.shapeObj,
            n = e.draw(this);n && (n.isKeyShape = !0, this.keyShape = n), e.afterDraw && e.afterDraw(this);
      }, t.prototype.deepEach = function (t, e) {
        r.traverseTree(this, t, e || function (t) {
          return t.getChildren();
        });
      }, t.prototype.getShapeObj = function () {
        return this.shapeObj;
      }, t.prototype.updateCollapsedParent = function () {
        var t = this.dataMap;this.collapsedParent = function t(e, n) {
          var r = n[e.parent];if (!r) return !1;if (r) {
            var i = t(r, n);if (i) return i;
          }return r.collapsed ? r : void 0;
        }(this.model, t);
      }, t.prototype.isVisible = function () {
        return this.group.get("visible");
      }, t.prototype.hide = function () {
        var t = this.group,
            e = this.graph;e.emit("beforeitemhide", { item: this }), t.hide(), e.emit("afteritemhide", { item: this });
      }, t.prototype.show = function () {
        var t = this.group,
            e = this.graph;e.emit("beforeitemshow", { item: this }), t.show(), e.emit("afteritemshow", { item: this });
      }, t.prototype.draw = function () {
        this._beforeDraw(), this._shouldDraw() && this._drawInner(), this._afterDraw();
      }, t.prototype.forceUpdate = function () {
        this._beforeDraw(), this._drawInner(), this._afterDraw();
      }, t.prototype.getCenter = function () {
        var t = this.getBBox();return { x: t.centerX, y: t.centerY };
      }, t.prototype.getBBox = function () {
        return this.bbox || this._calculateBBox();
      }, t.prototype.layoutUpdate = function () {
        this.draw();
      }, t.prototype.update = function () {
        this.draw();
      }, t.prototype.getModel = function () {
        return this.model;
      }, t.prototype.getKeyShape = function () {
        return this.keyShape;
      }, t.prototype.getGraphicGroup = function () {
        return this.group;
      }, t.prototype.getParent = function () {
        var t = this.model;return this.itemMap[t.parent];
      }, t.prototype.getAllParents = function () {
        for (var t = this.model, e = this.itemMap, n = [], r = t.parent; r && e[r];) {
          n.push(e[r]), r = r.parent;
        }return n;
      }, t.prototype.getAllChildren = function () {
        var t = [];return this.deepEach(function (e) {
          t.push(e);
        }), t;
      }, t.prototype.getChildren = function () {
        var t = this.id;return this.graph.getItems().filter(function (e) {
          return e.model.parent === t;
        });
      }, t.prototype.destroy = function () {
        if (!this.destroyed) {
          var t = this.animate,
              e = this.graph;e.emit("beforeitemdestroy", { item: this }), this.group.remove(!t), this.destroyed = !0, e.emit("afteritemdestroy", { item: this });
        }
      }, t;
    }();t.exports = i;
  }, function (t, e, n) {
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        i = n(13),
        o = n(57),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        u = /^\w*$/;t.exports = function (t, e) {
      if (i(t)) return !1;var n = void 0 === t ? "undefined" : r(t);return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || u.test(t) || !a.test(t) || null != e && t in Object(e);
    };
  }, function (t, e, n) {
    var r = n(154);t.exports = function (t) {
      var e = new t.constructor(t.byteLength);return new r(e).set(new r(t)), e;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = e.length, i = t.length; ++n < r;) {
        t[i + n] = e[n];
      }return t;
    };
  }, function (t, e, n) {
    var r = n(159),
        i = n(158),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function (t) {
      return null == t ? [] : (t = Object(t), r(a(t), function (e) {
        return o.call(t, e);
      }));
    } : i;t.exports = u;
  }, function (t, e, n) {
    var r = n(161);t.exports = function (t, e, n) {
      "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n;
    };
  }, function (t, e, n) {
    var r = n(310),
        i = n(303),
        o = n(301),
        a = n(300),
        u = n(299);function s(t) {
      var e = -1,
          n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
        var r = t[e];this.set(r[0], r[1]);
      }
    }s.prototype.clear = r, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = u, t.exports = s;
  }, function (t, e, n) {
    var r = n(14),
        i = n(57),
        o = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        f = parseInt;t.exports = function (t) {
      if ("number" == typeof t) return t;if (i(t)) return o;if (r(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;t = r(e) ? e + "" : e;
      }if ("string" != typeof t) return 0 === t ? t : +t;t = t.replace(a, "");var n = s.test(t);return n || c.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      var n = -1,
          r = t.length;for (e || (e = Array(r)); ++n < r;) {
        e[n] = t[n];
      }return e;
    };
  }, function (t, e, n) {
    var r = n(175)(Object.getPrototypeOf, Object);t.exports = r;
  }, function (t, e, n) {
    var r = n(23)(n(17), "Map");t.exports = r;
  }, function (t, e, n) {
    (function (t) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = n(177),
          o = "object" == r(e) && e && !e.nodeType && e,
          a = o && "object" == r(t) && t && !t.nodeType && t,
          u = a && a.exports === o && i.process,
          s = function () {
        try {
          var t = a && a.require && a.require("util").types;return t || u && u.binding && u.binding("util");
        } catch (t) {}
      }();t.exports = s;
    }).call(this, n(20)(t));
  }, function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  }, function (t, e) {
    var n = 9007199254740991;t.exports = function (t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
    };
  }, function (t, e) {
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        r = 9007199254740991,
        i = /^(?:0|[1-9]\d*)$/;t.exports = function (t, e) {
      var o = void 0 === t ? "undefined" : n(t);return !!(e = null == e ? r : e) && ("number" == o || "symbol" != o && i.test(t)) && t > -1 && t % 1 == 0 && t < e;
    };
  }, function (t, e) {
    var n = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
      }return t.prototype.execute = function () {
        throw new Error("please override this method");
      }, t;
    }();t.exports = n;
  }, function (t, e, n) {
    t.exports = { CompactBoxTree: n(189), Dendrogram: n(188), IndentedTree: n(187), Mindmap: n(186), Base: n(133) };
  }, function (t, e, n) {
    var r = n(8),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = { type: "node", linkable: !0, isNode: !0, zIndex: 3 };return r.mix(i, n), function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, i));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype.updatePosition = function () {
        var t = this.group,
            e = this.model;t.setMatrix([1, 0, 0, 0, 1, 0, e.x ? e.x : 0, e.y ? e.y : 0, 1]), this.bbox = this._calculateBBox();
      }, e.prototype._shouldDraw = function () {
        var e = this._getDiff(),
            n = t.prototype._shouldDraw.call(this);return e && !(2 === e.length && -1 !== e.indexOf("x") && -1 !== e.indexOf("y")) && !(1 === e.length && ("x" === e[0] || "y" === e[0])) && n;
      }, e.prototype._afterDraw = function () {
        this.updatePosition(), t.prototype._afterDraw.call(this);
      }, e.prototype.layoutUpdate = function () {
        this._afterDraw();
      }, e.prototype.getEdges = function (t) {
        var e = this.id,
            n = this.itemMap._edges,
            i = [];return r.each(n, function (n) {
          if (t) t(n) && i.push(n);else {
            var r = n.getModel();e !== r.target && e !== r.source || i.push(n);
          }
        }), i;
      }, e.prototype.getInEdges = function () {
        var t = this;return this.getEdges(function (e) {
          return e.target === t;
        });
      }, e.prototype.getOutEdges = function () {
        var t = this;return this.getEdges(function (e) {
          return e.source === t;
        });
      }, e.prototype.getLinkPoints = function (t) {
        var e = this.getAnchorPoints();if (r.isNumber(t) && e[t]) return [e[t]];var n = t.x,
            i = t.y,
            o = this.getBBox(),
            a = o.centerX,
            u = o.centerY,
            s = n - a,
            c = i - u,
            f = this.shapeObj.anchor || {},
            h = this.defaultIntersectBox,
            l = [];if (r.isEmpty(e)) {
          var p = f.type || h;switch (r.isFunction(p) && (p = p(this)), p) {case "rect":
              l = [r.getIntersectPointRect(o, t)];break;case "path":
              if (this.keyShape && "path" === this.keyShape.get("type")) {
                var d = r.parsePathArray(["M", n, i, "L", a, u]);l = [r.intersection(d, this.keyShape.get("path"))];
              }break;default:
              l = [r.getIntersectPointCircle(n, i, o.centerX, o.centerY, Math.max(o.width, o.height) / 2)];}r.isEmpty(l[0]) && (l = [{ x: a, y: u }]);
        } else l = e.map(function (t) {
          var e = t.x - a,
              n = t.y - u,
              i = r.getArcOfVectors({ x: s, y: c }, { x: e, y: n });return r.mix({}, t, { arc: i });
        }).sort(function (t, e) {
          return t.arc - e.arc;
        });return l;
      }, e.prototype.getAnchorPoints = function (t) {
        var e = this.shapeObj,
            n = this.getBBox(),
            i = [],
            o = e.anchor || {},
            a = void 0;return a = r.isArray(o) ? o : r.isFunction(o) ? o(this) : o.points, r.each(a, function (t, e) {
          var o = r.mix({ x: n.minX + t[0] * n.width, y: n.minY + t[1] * n.height }, t[2], { index: e });i.push(o);
        }), this._anchorPoints = i, r.isNumber(t) ? this._anchorPoints[t] : this._anchorPoints;
      }, e;
    }(n(118));t.exports = i;
  }, function (t, e, n) {
    n(214), n(213), n(212), n(211);var r = n(210),
        i = n(208),
        o = n(183),
        a = n(8),
        u = n(16),
        s = n(204),
        c = n(203),
        f = n(201),
        h = n(199),
        l = n(198),
        p = n(196),
        d = n(195),
        v = n(194),
        g = n(192),
        y = n(191),
        m = u.Canvas,
        x = [d, f, h, v, y, c, g, l, p],
        b = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var r = {};x.forEach(function (t) {
          a.mix(r, t.CFG, n);
        });var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, r));return i._pluginInit(), i.emit("beforeinit"), i._init(), i.emit("afterinit"), i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype.getDefaultCfg = function () {
        return { container: void 0, width: void 0, height: void 0, modes: {}, mode: "default", plugins: [], fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"', nodeDefaultShape: void 0, edgeDefaultShape: void 0, groupDefaultShape: void 0, defaultIntersectBox: "circle", firstRender: !0, _controllers: {}, _timers: {}, _dataMap: {}, _itemMap: {}, _data: {}, _delayRunObj: {} };
      }, e.prototype._init = function () {
        var t = this;this._initData(), this._initContainer(), this._initCanvas(), x.forEach(function (e) {
          e.INIT && t[e.INIT]();
        }), this.initEvent();
      }, e.prototype.initEvent = function () {}, e.prototype._executeLayout = function (t, e, n) {
        a.isFunction(t) ? t(e, n, this) : a.isObject(t) && (t.nodes = e, t.edges = n, t.graph = this, t.execute());
      }, e.prototype._pluginInit = function () {
        var t = this;this.get("plugins").forEach(function (e) {
          e.graph = t, e.init && e.init();
        });
      }, e.prototype._getTimer = function (t) {
        return this.get("_timers")[t];
      }, e.prototype._setTimer = function (t, e) {
        this.get("_timers")[t] = e;
      }, e.prototype._getController = function (t) {
        return this.get("_controllers")[t];
      }, e.prototype._initContainer = function () {
        var t = this.get("container");if (t || (t = this.get("id")), !t) throw new Error("please set the container for the graph !");a.isString(t) && (t = document.getElementById(t));var e = a.createDOM('<div class="graph-container"></div>', { position: "relative" });t.appendChild(e), this.set("_containerDOM", t), this.set("_graphContainer", e);
      }, e.prototype._initCanvas = function () {
        var t = this,
            e = this.get("_graphContainer"),
            n = this.get("width"),
            r = this.get("height"),
            i = { width: n, height: r, fontFamily: this.get("fontFamily"), eventEnable: !1, containerDOM: e },
            o = new m(i),
            u = new m(i),
            c = u.get("el"),
            f = e.appendChild(a.createDOM('<div class="graph-container-html-Elements"></div>'));o.on("beforedraw", function () {
          t.emit("beforecanvasdraw");
        }), c.style.position = "absolute", c.style.top = 0, c.style.left = 0, f.style.overflow = "hidden", f.style.width = n + "px", f.style.height = r + "px", f.style.position = "absolute", f.style.top = 0, f.style.left = 0, this.set("_canvas", o), this.set("_frontCanvas", u), this.set("_htmlElementContaniner", f);var h = this.getMouseEventWarrper();h.style.outline = "none", h.style["user-select"] = "none", h.setAttribute("tabindex", 20), o.set("htmlElementContaniner", f);var l = o.addGroup(s),
            p = u.addGroup(s),
            d = l.addGroup();this.set("_itemGroup", d), this.set("_rootGroup", l), this.set("_frontRootGroup", p);
      }, e.prototype._initData = function () {
        this.set("_dataMap", {}), this.set("_itemMap", { _nodes: [], _edges: [], _groups: [], _guides: [] }), this.set("_data", {});
      }, e.prototype._refresh = function () {}, e.prototype.getMouseEventWarrper = function () {
        return this.get("_htmlElementContaniner");
      }, e.prototype.getGraphContainer = function () {
        return this.get("_graphContainer");
      }, e.prototype.addItems = function (t, e) {
        var n = this;this._addDatas(t, e);var r = a.upperFirst(t),
            o = i[r],
            u = this.get("_itemMap"),
            s = this.get("_itemGroup"),
            c = this.get("_dataMap"),
            f = this.get("animate"),
            h = this.get("defaultIntersectBox");if (!o) throw new Error("please set valid item type!");e.forEach(function (e) {
          var r = new o({ id: e.id, type: t, model: e, group: s.addGroup(), graph: n, mapper: n._getController(t + "Mapper"), itemMap: u, animate: f, dataMap: c, defaultIntersectBox: h });u[e.id] = r, u["_" + t + "s"].push(r);
        });
      }, e.prototype.removeItems = function (t) {
        var e = this.get("_dataMap"),
            n = this.get("_itemMap");t.forEach(function (t) {
          delete e[t.id], delete n[t.id], a.Array.remove(n["_" + t.type + "s"], t), t.destroy();
        });
      }, e.prototype.updateItem = function (t, e) {
        a.mix(t.getModel(), e), t.update();
      }, e.prototype._addDatas = function (t, e) {
        var n = this.get("_dataMap");e.forEach(function (t) {
          if (a.isNil(t.id) && (t.id = a.guid()), n[t.id]) throw new Error("id:" + t.id + " has already been set, please set new one");n[t.id] = t;
        });
      }, e.prototype._drawInner = function () {
        var t = this.get("_data"),
            e = this.get("_itemGroup"),
            n = this.get("_dataMap");t.nodes && this.addItems("node", t.nodes), t.groups && this.addItems("group", t.groups), t.edges && this.addItems("edge", t.edges), t.guides && this.addItems("guide", t.guides), e.sortBy(function (t) {
          var e = t.id;return n[e].index;
        });
      }, e.prototype._clearInner = function () {
        this.getItems().forEach(function (t) {
          t && !t.destroyed && t.destroy();
        });
      }, e.prototype.getShapeObj = function (t, e) {
        if (!a.isObject(t)) {
          var n = a.upperFirst(t),
              r = o[n],
              i = this.get(t + "DefaultShape");return r.getShape(e.shape, i);
        }return t.getShapeObj();
      }, e.prototype.getSource = function () {
        return this.get("_sourceData");
      }, e.prototype.parseSource = function (t) {
        return t;
      }, e.prototype.getCanvas = function () {
        return this.get("_canvas");
      }, e.prototype.getRootGroup = function () {
        return this.get("_rootGroup");
      }, e.prototype.getItemGroup = function () {
        return this.get("_itemGroup");
      }, e.prototype.getFrontRootGroup = function () {
        return this.get("_frontRootGroup");
      }, e.prototype.getFrontCanvas = function () {
        return this.get("_frontCanvas");
      }, e.prototype.source = function (t) {
        return this.emit("beforesource"), this.set("_data", t), this.set("_sourceData", t), this.emit("aftersource"), this;
      }, e.prototype.render = function () {
        return this.emit("beforerender"), this.emit("beforedrawinner"), this._drawInner(), this.emit("afterdrawinner"), this.draw(), this.emit("afterrender"), this;
      }, e.prototype.forcePreventAnimate = function (t) {
        this.set("forcePreventAnimate", t);
      }, e.prototype.reRender = function () {
        var t = this.get("_sourceData");return this.read(t), this;
      }, e.prototype.destroy = function () {
        var e = this.get("_canvas"),
            n = this.get("_frontCanvas"),
            r = this.get("_graphContainer"),
            i = this.get("_controllers"),
            o = this.get("_timers"),
            u = this.get("_windowForceResizeEvent"),
            s = this.get("plugins");return a.each(o, function (t) {
          clearTimeout(t);
        }), a.each(i, function (t) {
          t.destroy();
        }), s.forEach(function (t) {
          t.destroy && t.destroy();
        }), e && e.destroy(), n && n.destroy(), r.destroy(), window.removeEventListener("resize", u), t.prototype.destroy.call(this), this;
      }, e.prototype.save = function () {
        var t = { nodes: [], edges: [], groups: [], guides: [] };return this.get("_itemGroup").get("children").forEach(function (e, n) {
          var r = e.model;if (r) {
            var i = e.itemType,
                o = a.cloneDeep(r);o.index = n, t[i + "s"].push(o);
          }
        }), 0 === t.nodes.length && delete t.nodes, 0 === t.edges.length && delete t.edges, 0 === t.groups.length && delete t.groups, 0 === t.guides.length && delete t.guides, t;
      }, e.prototype.add = function (t, e) {
        var n = { action: "add", model: e };this.emit("beforechange", n);var r = this.get("_itemMap");this.addItems(t, [e]);var i = r[e.id];return i.getAllParents().forEach(function (t) {
          t.update();
        }), n.item = i, this.emit("afterchange", n), this.draw(), i;
      }, e.prototype.remove = function (t) {
        var e = this,
            n = { action: "remove", item: t = this.getItem(t) };(this.emit("beforechange", n), t.isNode || t.isGroup) && t.getEdges().forEach(function (t) {
          e.remove(t);
        });t.isGroup && t.getChildren().forEach(function (t) {
          e.remove(t);
        });return this.removeItems([t]), t.getAllParents().forEach(function (t) {
          t.update();
        }), this.emit("afterchange", n), this.draw(), this;
      }, e.prototype.simpleUpdate = function (t, e) {
        return this.updateItem(t, e), this.draw(), this;
      }, e.prototype.update = function (t, e) {
        var n = this.get("_itemMap"),
            r = (t = this.getItem(t)).getModel(),
            i = a.mix({}, r),
            o = { action: "update", item: t, originModel: i, updateModel: e },
            u = n[i.parent];(u && u !== parent && a.isGroup(u) && t.getAllParents().forEach(function (t) {
          t.update();
        }), e && this.emit("beforechange", o), this.updateItem(t, e), t.getAllParents().forEach(function (t) {
          t.update();
        }), !t.isNode && !t.isGroup || t.collapsedParent) || t.getEdges().forEach(function (t) {
          t.update();
        });return t.isGroup && e && (t.deepEach(function (t) {
          t.updateCollapsedParent(), t.collapsedParent ? t.hide() : t.show(), t.update();
        }), t.getInnerEdges().forEach(function (t) {
          t.linkedItemVisible() ? t.show() : t.hide(), t.update();
        })), e && this.emit("afterchange", o), this.draw(), this;
      }, e.prototype.read = function (t) {
        if (!t) throw new Error("please read valid data!");var e = this.get("fitView"),
            n = { action: "changeData", data: t };return this.emit("beforechange", n), this.clear(), this.source(t), this.render(), this.emit("afterchange", n), e && this.setFitView(e), this;
      }, e.prototype.clear = function () {
        return this.emit("beforeclear"), this._clearInner(), this._initData(), this.emit("afterclear"), this.draw(), this;
      }, e.prototype.hide = function (t) {
        return (t = this.getItem(t)).hide(), t.isNode && t.getEdges().forEach(function (t) {
          t.hide();
        }), t.isGroup && (t.getEdges().forEach(function (t) {
          t.hide();
        }), t.getInnerEdges().forEach(function (t) {
          t.hide();
        }), t.deepEach(function (t) {
          t.hide();
        })), this.draw(), this;
      }, e.prototype.show = function (t) {
        return (t = this.getItem(t)).show(), t.isNode && t.getEdges().forEach(function (t) {
          t.show();
        }), t.isGroup && (t.getEdges().forEach(function (t) {
          t.show();
        }), t.getInnerEdges().forEach(function (t) {
          t.show();
        }), t.deepEach(function (t) {
          t.show();
        })), this.draw(), this;
      }, e.prototype.getWidth = function () {
        return this.get("width");
      }, e.prototype.getHeight = function () {
        return this.get("height");
      }, e.prototype.changeSize = function (t, e) {
        if (!(Math.abs(t) >= 1 / 0 || Math.abs(e) >= 1 / 0)) {
          var n = this.get("_canvas"),
              r = this.get("_frontCanvas"),
              i = this.get("_htmlElementContaniner");return t === this.get("width") && e === this.get("height") || (this.emit("beforechangesize"), n.changeSize(t, e), r.changeSize(t, e), i.css({ width: t + "px", height: e + "px" }), this.set("width", t), this.set("height", e), this.emit("afterchangesize"), this.draw()), this;
        }console.warn("size parameter more than the maximum");
      }, e.prototype.toFront = function (t) {
        t = this.getItem(t);var e = this.get("_itemGroup"),
            n = t.getGraphicGroup();a.toFront(n, e), this.draw();
      }, e.prototype.toBack = function (t) {
        t = this.getItem(t);var e = this.get("_itemGroup"),
            n = t.getGraphicGroup();a.toBack(n, e), this.draw();
      }, e.prototype.css = function (t) {
        var e = this.getGraphContainer();a.modifyCSS(e, t);
      }, e.prototype.saveImage = function () {
        var t = this.getGraph(),
            e = this.getBBox(),
            n = this.getFitViewPadding();return a.graph2Canvas({ graph: t, width: e.width + n[1] + n[3], height: e.height + n[0] + n[2] });
      }, e;
    }(r);x.forEach(function (t) {
      a.mix(b.prototype, t.AUGMENT);
    }), t.exports = b;
  }, function (t, e) {
    var n = { registerBehaviour: function registerBehaviour(t, e, r) {
        e.dependences = r, n[t] = e;
      }, resetMode: function resetMode(t, e) {
        var r = [],
            i = void 0;e._off();for (var o = 0; o < t.length; o++) {
          (i = n[t[o]]) && (i.dependences && i.dependences.forEach(function (t) {
            t && -1 === r.indexOf(t) && (n[t](e), r.push(t));
          }), i && -1 === r.indexOf(i) && i(e));
        }
      } };t.exports = n;
  }, function (t, e, n) {
    var r = n(16),
        i = n(30),
        o = {};i.mix(o, r.DomUtil, { addEventListener: function addEventListener(t, e, n) {
        return t.addEventListener ? (t.addEventListener(e, n, !1), { remove: function remove() {
            t.removeEventListener(e, n, !1);
          } }) : t.attachEvent ? (t.attachEvent("on" + e, n), { remove: function remove() {
            t.detachEvent("on" + e, n);
          } }) : void 0;
      }, createDOM: function createDOM(t, e) {
        var n = void 0;return (n = i.isString(t) ? r.DomUtil.createDom(t) : t).bbox = n.getBoundingClientRect(), n.hide = function () {
          return n.style.visibility = "hidden", n;
        }, n.show = function () {
          return n.style.visibility = "visible", n;
        }, n.css = function (t) {
          return r.DomUtil.modifyCSS(n, t), n;
        }, n.width = function () {
          return r.DomUtil.getWidth(n);
        }, n.height = function () {
          return r.DomUtil.getHeight(n);
        }, n.destroy = function () {
          n.parentNode && n.parentNode.removeChild(n);
        }, n.on = function (t, e) {
          n.addEventListener(t, e);
        }, n.off = function (t, e) {
          n.removeEventListener(t, e);
        }, n.attr = function (t) {
          return n.getAttribute(t);
        }, n.css(e), n;
      } }), t.exports = o;
  }, function (t, e, n) {
    var r = n(146),
        i = n(235),
        o = n(234),
        a = n(145),
        u = n(233),
        s = n(56),
        c = 200;t.exports = function (t, e, n) {
      var f = -1,
          h = i,
          l = t.length,
          p = !0,
          d = [],
          v = d;if (n) p = !1, h = o;else if (l >= c) {
        var g = e ? null : u(t);if (g) return s(g);p = !1, h = a, v = new r();
      } else v = e ? [] : d;t: for (; ++f < l;) {
        var y = t[f],
            m = e ? e(y) : y;if (y = n || 0 !== y ? y : 0, p && m == m) {
          for (var x = v.length; x--;) {
            if (v[x] === m) continue t;
          }e && v.push(m), d.push(y);
        } else h(v, m, n) || (v !== d && v.push(m), d.push(y));
      }return d;
    };
  }, function (t, e, n) {
    var r = n(14),
        i = n(242),
        o = n(125),
        a = "Expected a function",
        u = Math.max,
        s = Math.min;t.exports = function (t, e, n) {
      var c,
          f,
          h,
          l,
          p,
          d,
          v = 0,
          g = !1,
          y = !1,
          m = !0;if ("function" != typeof t) throw new TypeError(a);function x(e) {
        var n = c,
            r = f;return c = f = void 0, v = e, l = t.apply(r, n);
      }function b(t) {
        var n = t - d;return void 0 === d || n >= e || n < 0 || y && t - v >= h;
      }function _() {
        var t = i();if (b(t)) return w(t);p = setTimeout(_, function (t) {
          var n = e - (t - d);return y ? s(n, h - (t - v)) : n;
        }(t));
      }function w(t) {
        return p = void 0, m && c ? x(t) : (c = f = void 0, l);
      }function M() {
        var t = i(),
            n = b(t);if (c = arguments, f = this, d = t, n) {
          if (void 0 === p) return function (t) {
            return v = t, p = setTimeout(_, e), g ? x(t) : l;
          }(d);if (y) return p = setTimeout(_, e), x(d);
        }return void 0 === p && (p = setTimeout(_, e)), l;
      }return e = o(e) || 0, r(n) && (g = !!n.leading, h = (y = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : h, m = "trailing" in n ? !!n.trailing : m), M.cancel = function () {
        void 0 !== p && clearTimeout(p), v = 0, c = d = f = p = void 0;
      }, M.flush = function () {
        return void 0 === p ? l : w(i());
      }, M;
    };
  }, function (t, e, n) {
    var r = n(13),
        i = n(119),
        o = n(252),
        a = n(27);t.exports = function (t, e) {
      return r(t) ? t : i(t, e) ? [t] : o(a(t));
    };
  }, function (t, e, n) {
    var r = n(141),
        i = n(48);t.exports = function (t, e) {
      for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) {
        t = t[i(e[n++])];
      }return n && n == o ? t : void 0;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return null != n && n[t] === e && (void 0 !== e || t in Object(n));
      };
    };
  }, function (t, e, n) {
    var r = n(14);t.exports = function (t) {
      return t == t && !r(t);
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  }, function (t, e, n) {
    var r = n(124),
        i = n(260),
        o = n(259);function a(t) {
      var e = -1,
          n = null == t ? 0 : t.length;for (this.__data__ = new r(); ++e < n;) {
        this.add(t[e]);
      }
    }a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a;
  }, function (t, e, n) {
    var r = n(146),
        i = n(258),
        o = n(145),
        a = 1,
        u = 2;t.exports = function (t, e, n, s, c, f) {
      var h = n & a,
          l = t.length,
          p = e.length;if (l != p && !(h && p > l)) return !1;var d = f.get(t);if (d && f.get(e)) return d == e;var v = -1,
          g = !0,
          y = n & u ? new r() : void 0;for (f.set(t, e), f.set(e, t); ++v < l;) {
        var m = t[v],
            x = e[v];if (s) var b = h ? s(x, m, v, e, t, f) : s(m, x, v, t, e, f);if (void 0 !== b) {
          if (b) continue;g = !1;break;
        }if (y) {
          if (!i(e, function (t, e) {
            if (!o(y, e) && (m === t || c(m, t, n, s, f))) return y.push(e);
          })) {
            g = !1;break;
          }
        } else if (m !== x && !c(m, x, n, s, f)) {
          g = !1;break;
        }
      }return f.delete(t), f.delete(e), g;
    };
  }, function (t, e, n) {
    var r = n(58),
        i = n(275),
        o = n(273);t.exports = function (t, e) {
      return o(i(t, e, r), t + "");
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return "__proto__" == e ? void 0 : t[e];
    };
  }, function (t, e, n) {
    var r = n(24),
        i = n(15);t.exports = function (t) {
      return i(t) && r(t);
    };
  }, function (t, e, n) {
    var r = n(123),
        i = n(41);t.exports = function (t, e, n) {
      (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n);
    };
  }, function (t, e, n) {
    var r = n(286),
        i = n(127),
        o = n(60);t.exports = function (t) {
      return "function" != typeof t.constructor || o(t) ? {} : r(i(t));
    };
  }, function (t, e, n) {
    var r = n(120);t.exports = function (t, e) {
      var n = e ? r(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.length);
    };
  }, function (t, e, n) {
    var r = n(17).Uint8Array;t.exports = r;
  }, function (t, e, n) {
    var r = n(121),
        i = n(13);t.exports = function (t, e, n) {
      var o = e(t);return i(t) ? o : r(o, n(t));
    };
  }, function (t, e, n) {
    var r = n(155),
        i = n(122),
        o = n(29);t.exports = function (t) {
      return r(t, o, i);
    };
  }, function (t, e, n) {
    var r = n(121),
        i = n(127),
        o = n(122),
        a = n(158),
        u = Object.getOwnPropertySymbols ? function (t) {
      for (var e = []; t;) {
        r(e, o(t)), t = i(t);
      }return e;
    } : a;t.exports = u;
  }, function (t, e) {
    t.exports = function () {
      return [];
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
        var a = t[n];e(a, n, t) && (o[i++] = a);
      }return o;
    };
  }, function (t, e, n) {
    (function (t) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = n(17),
          o = "object" == r(e) && e && !e.nodeType && e,
          a = o && "object" == r(t) && t && !t.nodeType && t,
          u = a && a.exports === o ? i.Buffer : void 0,
          s = u ? u.allocUnsafe : void 0;t.exports = function (t, e) {
        if (e) return t.slice();var n = t.length,
            r = s ? s(n) : new t.constructor(n);return t.copy(r), r;
      };
    }).call(this, n(20)(t));
  }, function (t, e, n) {
    var r = n(23),
        i = function () {
      try {
        var t = r(Object, "defineProperty");return t({}, "", {}), t;
      } catch (t) {}
    }();t.exports = i;
  }, function (t, e, n) {
    var r = n(123),
        i = n(41),
        o = Object.prototype.hasOwnProperty;t.exports = function (t, e, n) {
      var a = t[e];o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n);
    };
  }, function (t, e, n) {
    var r = n(55),
        i = n(181),
        o = n(162),
        a = n(298),
        u = n(297),
        s = n(160),
        c = n(126),
        f = n(294),
        h = n(293),
        l = n(156),
        p = n(292),
        d = n(28),
        v = n(291),
        g = n(290),
        y = n(152),
        m = n(13),
        x = n(42),
        b = n(285),
        _ = n(14),
        w = n(283),
        M = n(29),
        S = 1,
        E = 2,
        j = 4,
        A = "[object Arguments]",
        O = "[object Function]",
        P = "[object GeneratorFunction]",
        I = "[object Object]",
        T = {};T[A] = T["[object Array]"] = T["[object ArrayBuffer]"] = T["[object DataView]"] = T["[object Boolean]"] = T["[object Date]"] = T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Map]"] = T["[object Number]"] = T[I] = T["[object RegExp]"] = T["[object Set]"] = T["[object String]"] = T["[object Symbol]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T["[object Error]"] = T[O] = T["[object WeakMap]"] = !1, t.exports = function t(e, n, C, k, F, N) {
      var L,
          B = n & S,
          R = n & E,
          D = n & j;if (C && (L = F ? C(e, k, F, N) : C(e)), void 0 !== L) return L;if (!_(e)) return e;var Y = m(e);if (Y) {
        if (L = v(e), !B) return c(e, L);
      } else {
        var X = d(e),
            G = X == O || X == P;if (x(e)) return s(e, B);if (X == I || X == A || G && !F) {
          if (L = R || G ? {} : y(e), !B) return R ? h(e, u(L, e)) : f(e, a(L, e));
        } else {
          if (!T[X]) return F ? e : {};L = g(e, X, B);
        }
      }N || (N = new r());var z = N.get(e);if (z) return z;if (N.set(e, L), w(e)) return e.forEach(function (r) {
        L.add(t(r, n, C, r, e, N));
      }), L;if (b(e)) return e.forEach(function (r, i) {
        L.set(i, t(r, n, C, i, e, N));
      }), L;var q = D ? R ? p : l : R ? keysIn : M,
          U = Y ? void 0 : q(e);return i(U || e, function (r, i) {
        U && (r = e[i = r]), o(L, i, t(r, n, C, i, e, N));
      }), L;
    };
  }, function (t, e, n) {
    var r = n(322);t.exports = function (t) {
      var e = r(t),
          n = e % 1;return e == e ? n ? e - n : e : 0;
    };
  }, function (t, e, n) {
    var r = n(325),
        i = n(324),
        o = n(323);t.exports = function (t, e, n) {
      return e == e ? o(t, e, n) : r(t, i, n);
    };
  }, function (t, e) {
    t.exports = function (t) {
      var e = -1,
          n = Array(t.size);return t.forEach(function (t, r) {
        n[++e] = [r, t];
      }), n;
    };
  }, function (t, e, n) {
    var r = n(19),
        i = n(127),
        o = n(15),
        a = "[object Object]",
        u = Function.prototype,
        s = Object.prototype,
        c = u.toString,
        f = s.hasOwnProperty,
        h = c.call(Object);t.exports = function (t) {
      if (!o(t) || r(t) != a) return !1;var e = i(t);if (null === e) return !0;var n = f.call(e, "constructor") && e.constructor;return "function" == typeof n && n instanceof n && c.call(n) == h;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) {
        i[n] = e(t[n], n, t);
      }return i;
    };
  }, function (t, e, n) {
    var r = n(345),
        i = n(170),
        o = n(344);t.exports = function (t) {
      return i(t) ? o(t) : r(t);
    };
  }, function (t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports = function (t) {
      return n.test(t);
    };
  }, function (t, e, n) {
    var r = n(347),
        i = n(170),
        o = n(169),
        a = n(27);t.exports = function (t) {
      return function (e) {
        e = a(e);var n = i(e) ? o(e) : void 0,
            u = n ? n[0] : e.charAt(0),
            s = n ? r(n, 1).join("") : e.slice(1);return u[t]() + s;
      };
    };
  }, function (t, e, n) {
    var r = n(23)(n(17), "Set");t.exports = r;
  }, function (t, e) {
    var n = Function.prototype.toString;t.exports = function (t) {
      if (null != t) {
        try {
          return n.call(t);
        } catch (t) {}try {
          return t + "";
        } catch (t) {}
      }return "";
    };
  }, function (t, e, n) {
    var r = n(19),
        i = n(13),
        o = n(15),
        a = "[object String]";t.exports = function (t) {
      return "string" == typeof t || !i(t) && o(t) && r(t) == a;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return t(e(n));
      };
    };
  }, function (t, e, n) {
    var r = n(60),
        i = n(361),
        o = Object.prototype.hasOwnProperty;t.exports = function (t) {
      if (!r(t)) return i(t);var e = [];for (var n in Object(t)) {
        o.call(t, n) && "constructor" != n && e.push(n);
      }return e;
    };
  }, function (t, e, n) {
    (function (e) {
      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          r = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e;t.exports = r;
    }).call(this, n(43));
  }, function (t, e, n) {
    var r = n(367),
        i = n(44),
        o = n(13),
        a = n(42),
        u = n(132),
        s = n(61),
        c = Object.prototype.hasOwnProperty;t.exports = function (t, e) {
      var n = o(t),
          f = !n && i(t),
          h = !n && !f && a(t),
          l = !n && !f && !h && s(t),
          p = n || f || h || l,
          d = p ? r(t.length, String) : [],
          v = d.length;for (var g in t) {
        !e && !c.call(t, g) || p && ("length" == g || h && ("offset" == g || "parent" == g) || l && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, v)) || d.push(g);
      }return d;
    };
  }, function (t, e, n) {
    var r = n(368)();t.exports = r;
  }, function (t, e, n) {
    var r = n(369),
        i = n(360)(r);t.exports = i;
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);) {}return t;
    };
  }, function (t, e, n) {
    var r = n(16),
        i = n(30),
        o = { isBetween: function isBetween(t, e, n) {
        return t >= e && t <= n;
      }, getLineIntersect: function getLineIntersect(t, e, n, r) {
        var i = n.x - t.x,
            a = n.y - t.y,
            u = e.x - t.x,
            s = e.y - t.y,
            c = r.x - n.x,
            f = r.y - n.y,
            h = u * f - s * c,
            l = null;if (h * h > .001 * (u * u + s * s) * (c * c + f * f)) {
          var p = (i * f - a * c) / h,
              d = (i * s - a * u) / h;o.isBetween(p, 0, 1) && o.isBetween(d, 0, 1) && (l = { x: t.x + p * u, y: t.y + p * s });
        }return l;
      }, getIntersectPointRect: function getIntersectPointRect(t, e) {
        var n = t.minX,
            r = t.minY,
            i = t.maxX - t.minX,
            a = t.maxY - t.minY,
            u = [],
            s = { x: n + i / 2, y: r + a / 2 };u.push({ x: n, y: r }), u.push({ x: n + i, y: r }), u.push({ x: n + i, y: r + a }), u.push({ x: n, y: r + a }), u.push({ x: n, y: r });for (var c = null, f = 1; f < u.length && !(c = o.getLineIntersect(u[f - 1], u[f], s, e)); f++) {}return c;
      }, getIntersectPointCircle: function getIntersectPointCircle(t, e, n, r, i) {
        if (Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - r, 2)) < i) return null;var o = t - n,
            a = e - r,
            u = Math.sign(o),
            s = Math.sign(a),
            c = Math.atan(a / o);return { x: n + Math.abs(i * Math.cos(c)) * u, y: r + Math.abs(i * Math.sin(c)) * s };
      }, applyMatrix: function applyMatrix(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = [t.x, t.y, n];return r.MatrixUtil.vec3.transformMat3(i, i, e), { x: i[0], y: i[1] };
      }, invertMatrix: function invertMatrix(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = r.MatrixUtil.mat3.invert([], e),
            o = [t.x, t.y, n];return r.MatrixUtil.vec3.transformMat3(o, o, i), { x: o[0], y: o[1] };
      }, radixSort: function radixSort(t, e) {
        var n = 10,
            r = 1,
            i = [],
            o = 1,
            a = void 0,
            u = void 0,
            s = void 0,
            c = void 0,
            f = void 0,
            h = void 0,
            l = void 0;for (s = 0; s < t.length; s++) {
          a = e(t[s]), u = (a = parseInt(a, 10)).toString().length, a.toString().length > o && (o = u);
        }for (s = 0; s < o; s++, r *= 10, n *= 10) {
          for (c = 0; c < t.length; c++) {
            f = e(t[c]), void 0 === i[f = parseInt(f % n / r, 10)] && (i[f] = []), i[f].push(t[c]);
          }for (h = 0, c = 0; c < i.length; c++) {
            if (l = void 0, void 0 !== i[c]) for (l = i[c].shift(); void 0 !== l;) {
              t[h++] = l, l = i[c].shift();
            }
          }
        }return t;
      }, getArcOfVectors: function getArcOfVectors(t, e) {
        var n = t.x,
            r = t.y,
            i = e.x,
            o = e.y,
            a = Math.sqrt(n * n + r * r),
            u = Math.sqrt(i * i + o * o);return Math.acos((n * i + r * o) / (a * u));
      } };t.exports = i.mix({}, r.MatrixUtil, o);
  }, function (t, e, n) {
    var r = n(31);r.registerShapeManager("node", { defaultShapeType: "common" }), r.registerShapeManager("edge", { defaultShapeType: "common" }), r.registerShapeManager("group", { defaultShapeType: "common" }), r.registerShapeManager("guide", { defaultShapeType: "common" }), n(223), n(220), n(218), n(216), t.exports = r;
  },, function (t, e, n) {
    var r = n(22);setTimeout(function () {
      if (r.trackable) {
        var t = new Image(),
            e = { pg: document.URL, r: new Date().getTime(), g6: !0, version: r.version, page_type: "syslog" },
            n = encodeURIComponent(JSON.stringify([e]));t.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + n;
      }
    }, 3e3);
  }, function (t, e, n) {
    var r = n(46),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return i.layout = r.mindmap, i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e;
    }(n(45));t.exports = i;
  }, function (t, e, n) {
    var r = n(46),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return i.layout = r.indented, i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e;
    }(n(45));t.exports = i;
  }, function (t, e, n) {
    var r = n(46),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return i.layout = r.dendrogram, i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e;
    }(n(45));t.exports = i;
  }, function (t, e, n) {
    var r = n(46),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return i.layout = r.compactBox, i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e;
    }(n(45));t.exports = i;
  }, function (t, e, n) {
    var r = n(8),
        i = n(136),
        o = n(134),
        a = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = r.mix({ layout: new o.CompactBoxTree({ getHGap: function getHGap() {
              return 10;
            }, getVGap: function getVGap() {
              return 10;
            } }) }, n);return function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, i));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype.initEvent = function () {
        var t = this;this.on("afterdrawinner", function () {
          t.get("_sourceData").roots.forEach(function (e) {
            var n = t.find(e.id);t._setVisibleByCollapsed(n);
          });
        });
      }, e.prototype._executeLayout = function (t) {
        var e = this.get("_sourceData");r.isFunction(t) ? t(e.roots, this) : r.isObject(t) && (t.roots = e.roots, t.graph = this, t.execute());
      }, e.prototype.parseSource = function (t) {
        var e = t.roots,
            n = this.get("_dataMap"),
            i = [],
            o = [];return e.forEach(function (t) {
          r.traverseTree(t, function (t, e) {
            t.id || (t.id = r.guid()), e || (e = n[t.parent]), e && (t.parent = e.id, e.id || (e.id = r.guid()), o.push({ source: e.id, target: t.id, id: e.id + "-" + t.id })), i.push(t);
          }, function (t) {
            return t.children;
          }, !0);
        }), { nodes: i, edges: o };
      }, e.prototype._setVisibleByCollapsed = function (t) {
        t.getModel().collapsed ? t.deepEach(function (t) {
          t.hide(), t.getEdges().forEach(function (t) {
            t.hide();
          });
        }) : t.deepEach(function (t) {
          t.collapsedParent && (t.hide(), t.getEdges().forEach(function (t) {
            t.hide();
          }));
        });
      }, e.prototype.source = function (t) {
        var e = this.parseSource(t);this.emit("beforesource"), this.set("_sourceData", t), this.set("_data", e), this.emit("aftersource");
      }, e.prototype.setNodeNth = function (t, e) {
        var n = t.getModel(),
            i = t.getParent().getModel().children;r.Array.remove(i, n), i.splice(e, 0, n);
      }, e.prototype.getNth = function (t) {
        var e = t.getModel();return t.getParent().getModel().children.indexOf(e);
      }, e.prototype.add = function (t, e) {
        var n = this.get("_dataMap")[e.parent],
            i = { action: "add", model: e },
            o = void 0;if ("node" === t || "guide" === t) {
          if (this.emit("beforechange", i), "node" === t) {
            if (!n) throw new Error("please set available parent Id !");r.isArray(n.children) ? n.children.push(e) : n.children = [e];var a = this.parseSource({ roots: [e] });this.addItems("node", a.nodes), this.addItems("edge", a.edges), o = this.find(e.id), this._setVisibleByCollapsed(o), r.isNil(e.nth) || this.setNodeNth(o, e.nth), this.find(n.id).forceUpdate();
          } else this.addItems(t, [e]), o = this.find(e.id);return i.item = o, this.emit("afterchange", i), this.draw(), o;
        }console.warn("Tree do not support add type " + t + "!");
      }, e.prototype.update = function (t, e) {
        var n = this;if (e) {
          var i = (t = this.getItem(t)).getModel(),
              o = r.mix({}, i),
              a = { action: "update", item: t, originModel: o, updateModel: e };if (e && this.emit("beforechange", a), this.updateItem(t, e), t.isNode) {
            if (e.parent) {
              var u = this.find(o.id).getModel(),
                  s = this.find(e.parent).getModel();r.Array.remove(u.children, i), s.push(i), this.find(s.id).forceUpdate();
            }r.isArray(e.children) && (o.children && r.each(o.children, function (t) {
              var e = [n.find(t)];t.getEdges().forEach(function (t) {
                e.push(t);
              }), n.removeItems(e);
            }), r.each(e.children, function (t) {
              var e = n.parseSource({ roots: [t] });n.addItems("node", e.nodes), n.addItems("edge", e.edges);
            })), "collapsed" in e && (e.collapsed ? t.deepEach(function (t) {
              t.hide(), t.getEdges().forEach(function (t) {
                t.hide();
              });
            }) : t.deepEach(function (t) {
              t.show(), t.getEdges(function (e) {
                return e.getModel().target === t.id;
              }).forEach(function (t) {
                t.show();
              });
            }, function (t) {
              return t.model.collapsed ? null : t.getChildren();
            })), r.isNil(e.nth) || this.setNodeNth(t, e.nth);var c = this.find(i.parent);c && c.forceUpdate();
          }return this.emit("afterchange", a), this.draw(), this;
        }
      }, e.prototype.remove = function (t) {
        var e = this.get("_dataMap"),
            n = [];if ((t = this.getItem(t)) && !t.destroyed) {
          var i = { action: "remove", item: t };if (this.emit("beforechange", i), n.push(t), t.getEdges().forEach(function (t) {
            n.push(t);
          }), "node" === t.type) {
            var o = t.getModel(),
                a = e[o.parent];t.deepEach(function (t) {
              n.push(t), t.getEdges().forEach(function (t) {
                n.push(t);
              });
            }), r.Array.remove(a.children, o), this.find(a.id).forceUpdate();
          }return this.removeItems(r.uniq(n)), this.emit("afterchange", i), this.draw(), this;
        }
      }, e.prototype.getRoots = function () {
        var t = this;return this.getSource().roots.map(function (e) {
          return t.find(e.id);
        });
      }, e.prototype.save = function () {
        var t = { roots: r.cloneDeep(this.getSource().roots), guides: this.getGuides().map(function (t) {
            return t.getModel();
          }) };return 0 === t.roots.length && delete t.roots, 0 === t.guides.length && delete t.guides, t;
      }, e;
    }(i);t.exports = a;
  }, function (t, e, n) {
    var r = n(8),
        i = { INIT: "_initForceFit" };i.AUGMENT = { _initForceFit: function _initForceFit() {
        var t = this.get("width"),
            e = this.get("height");return t || e ? t ? e ? void 0 : (this.forceFit("height"), void this._bindForceEvent("height")) : (this.forceFit("width"), void this._bindForceEvent("width")) : (this.forceFit(), void this._bindForceEvent());
      }, _bindForceEvent: function _bindForceEvent(t) {
        var e = this,
            n = this._getTimer("forceFit"),
            r = function r() {
          var r = setTimeout(function () {
            e.forceFit(t);
          }, 200);n && clearTimeout(n), e._setTimer("forceFit", r);
        };window.addEventListener("resize", r), this.set("_windowForceResizeEvent", r);
      }, forceFit: function forceFit(t) {
        var e = this.get("_containerDOM"),
            n = this.get("width"),
            i = this.get("height"),
            o = r.getHeight(e),
            a = r.getWidth(e);return "width" === t ? (this.changeSize(a, i), this) : "height" === t ? (this.changeSize(n, o), this) : (this.changeSize(a, o), this);
      } }, t.exports = i;
  }, function (t, e, n) {
    var r = n(8),
        i = { CFG: { fitView: void 0, fitViewPadding: 10, minZoom: .2, maxZoom: 10 } };i.AUGMENT = { getBBox: function getBBox() {
        return this.get("_itemGroup").getBBox();
      }, getFitViewPadding: function getFitViewPadding() {
        return r.toAllPadding(this.get("fitViewPadding"));
      }, setFitView: function setFitView(t) {
        if (!t) return this;if ("autoZoom" === t) return this.autoZoom(), this;var e = this.getFitViewPadding(),
            n = this.get("width"),
            i = this.get("height"),
            o = this.getBBox(),
            a = o.maxX - o.minX,
            u = o.maxY - o.minY,
            s = { x: 0, y: 0, width: n, height: i },
            c = r.getNineBoxPosition(t, s, a, u, e),
            f = [1, 0, 0, 0, 1, 0, 0, 0, 1];r.mat3.translate(f, f, [-o.minX + c.x, -o.minY + c.y]), this.updateMatrix(f);
      }, _getZoomRatio: function _getZoomRatio(t) {
        var e = this.get("maxZoom"),
            n = this.get("minZoom");return t < n && (t = n), t > e && (t = e), t;
      }, autoZoom: function autoZoom(t) {
        t || (t = this.getFitViewPadding());var e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            n = this.get("width"),
            i = this.get("height"),
            o = this.getBBox(),
            a = (o.maxX + o.minX) / 2,
            u = (o.maxY + o.minY) / 2,
            s = n - t[1] - t[3],
            c = i - t[0] - t[2],
            f = o.maxX - o.minX,
            h = o.maxY - o.minY,
            l = Math.min(c / h, s / f);l = this._getZoomRatio(l), r.mat3.translate(e, e, [-a, -u]), r.mat3.scale(e, e, [l, l]), r.mat3.translate(e, e, [n / 2, i / 2]), this.updateMatrix(e);
      }, getZoom: function getZoom() {
        return this.getMatrix()[0];
      }, updateMatrix: function updateMatrix(t) {
        var e = this.get("_rootGroup"),
            n = this.get("_frontRootGroup"),
            r = { updateMatrix: t, originMatrix: this.getMatrix() };return this.emit("beforeviewportchange", r), e.setMatrix(t), n.setMatrix(t), this.emit("afterviewportchange", r), this.draw(), this;
      }, zoom: function zoom(t, e) {
        if (!r.isNumber(t)) {
          e = this._getZoomRatio(e);var n = this.get("_rootGroup"),
              i = r.clone(n.getMatrix()),
              o = i[6] + i[0] * t.x - e * t.x,
              a = i[7] + i[0] * t.y - e * t.y;return i[6] = 0, i[7] = 0, i[0] = e, i[4] = e, r.mat3.translate(i, i, [o, a]), this.updateMatrix(i), this;
        }var u = this.get("width"),
            s = this.get("height");this.zoomByDom({ x: u / 2, y: s / 2 }, t);
      }, zoomByDom: function zoomByDom(t, e) {
        var n = this.getPoint(t);return this.zoom(n, e), this;
      }, translate: function translate(t, e) {
        var n = this.get("_rootGroup").getMatrix();return r.mat3.translate(n, n, [t, e]), this.updateMatrix(n), this;
      }, translateByDom: function translateByDom(t, e) {
        var n = this.get("_rootGroup").getMatrix()[0];return this.translate(t / n, e / n), this;
      }, getMatrix: function getMatrix() {
        return this.get("_rootGroup").getMatrix();
      }, getPoint: function getPoint(t) {
        return this.getPointByDom(t);
      }, getPointByDom: function getPointByDom(t) {
        var e = this.get("_rootGroup").getMatrix();return r.invertMatrix(t, e);
      }, getPointByCanvas: function getPointByCanvas(t) {
        var e = this.get("_canvas").get("pixelRatio");return this.getPoint({ x: t.x / e, y: t.y / e });
      }, getPointByClient: function getPointByClient(t) {
        var e = this.get("_canvas").getPointByClient(t.x, t.y);return this.getPointByCanvas(e);
      }, getDomPoint: function getDomPoint(t) {
        var e = this.get("_rootGroup").getMatrix();return r.applyMatrix(t, e);
      }, getCanvasPoint: function getCanvasPoint(t) {
        var e = this.get("_canvas").get("pixelRatio"),
            n = this.getDomPoint(t);return { x: n.x * e, y: n.y * e };
      }, getClientPoint: function getClientPoint(t) {
        var e = this.getCanvasPoint(t),
            n = this.get("_canvas").getClientByPoint(e.x, e.y);return { x: n.clientX, y: n.clientY };
      }, focus: function focus(t) {
        if (r.isString(t) && (t = this.find(t)), t) {
          var e = t.getCenter();this.focusPoint(e);
        }return this;
      }, focusPoint: function focusPoint(t) {
        var e = this.get("_rootGroup").getMatrix(),
            n = this.get("width"),
            r = this.get("height"),
            i = -e[6] + n / 2 - e[0] * t.x,
            o = -e[7] + r / 2 - e[0] * t.y;return this.translate(i, o), this;
      }, focusPointByDom: function focusPointByDom(t) {
        var e = this.getPoint(t);return this.focusPoint(e), this;
      } }, t.exports = i;
  }, function (t, e, n) {
    var r = n(47),
        i = n(8),
        o = n(22);var a = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var r = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return r._init(), r;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype._init = function () {
        var t = this;this.graph.on("afteritemdraw", function (e) {
          t.cacheKeyFrame(e.item);
        });
      }, e.prototype.cacheKeyFrame = function (t) {
        var e = this.keyFrameCache,
            n = t.getGraphicGroup();t.isEdge && n.setMatrix([1, 0, 0, 0, 1, 0, 0, 0, 1]), n.deepEach(function (n) {
          var r = n.gid,
              o = { matrix: i.clone(n.getMatrix()) };n.isItemContainer && (o.enterAnimate = t.getEnterAnimate(), o.leaveAnimate = t.getLeaveAnimate()), n.isShape && (o.attrs = n.getAttrs()), o.item = t, e[r] = o;
        }, !0);
      }, e.prototype._compare = function () {
        var t = this.stash0,
            e = this.stash1,
            n = [],
            r = [],
            o = [];i.each(e, function (e, r) {
          t[r] ? e.element.get("type") === t[r].element.get("type") && o.push(r) : n.push(r);
        }), i.each(t, function (t, n) {
          e[n] || r.push(n);
        }), this.enterElements = n, this.leaveElements = r, this.updateElements = o;
      }, e.prototype._addTween = function () {
        var t = this.enterElements,
            e = this.leaveElements,
            n = this.updateElements,
            r = this.stash0,
            a = this.stash1,
            u = this.keyFrameCache;i.each(t, function (t) {
          var e = u[t],
              n = e.enterAnimate;n && n(e.item, r.element, a.element);
        }), i.each(e, function (t) {
          var e = u[t],
              n = e.leaveAnimate;if (n) {
            var i = r[t].element;i.getParent().add(i), n(e.item, r, a);
          }
        }), i.each(n, function (t) {
          var e,
              n,
              s = u[t],
              c = a[t],
              f = r[t],
              h = c.element,
              l = f.element;f.attrsStash && h.attr(f.attrsStash), h.setMatrix(f.matrixStash), e = h, n = i.mix({}, s.attrs, { matrix: s.matrix }), e.set("capture", !1), e.animate(n, o.updateDuration, o.updateEasing, function () {
            e.set("capture", !0);
          }), l !== h && l.remove();
        });
      }, e.prototype.getDefaultCfg = function () {
        return { graph: null, canvases: null, stash0: null, stash1: null, keyFrameCache: {} };
      }, e.prototype.run = function () {
        this.graph.destroyed || (this.updateStash(), this.count < 5e3 && (this._compare(), this._addTween()), i.each(this.canvases, function (t) {
          t.draw();
        }));
      }, e.prototype.updateStash = function () {
        var t = this.canvases,
            e = this.elementsStash,
            n = {},
            r = 0;e = e || {}, i.each(t, function (t) {
          r += function t(e, n, r) {
            var o = n.get("children");return i.each(o, function (n) {
              r++;var o = n.gid;if (n.isGroup && (r = t(e, n, r)), !i.isNil(o)) {
                var a = { matrixStash: i.clone(n.getMatrix()), element: n };if (n.isShape) {
                  var u = n.get("attrs");a.attrsStash = {}, i.each(u, function (t, e) {
                    a.attrsStash[e] = n.attr(e);
                  });
                }e[o] = a;
              }
            }), r;
          }(n, t, 0);
        }), this.elementsStash = n, this.stash0 = e, this.stash1 = n, this.count = r;
      }, e;
    }(r);t.exports = a;
  }, function (t, e, n) {
    var r = n(8),
        i = n(193),
        o = { INIT: "_initAnimate" };o.CFG = { animate: !1, forcePreventAnimate: !1, _enterAnimate: function _enterAnimate(t) {
        var e = t.getGraphicGroup(),
            n = e.getMatrix(),
            i = r.getBBox(e, n),
            o = (i.minX + i.maxX) / 2,
            a = (i.minY + i.maxY) / 2;r.scaleIn(e, o, a);
      }, _leaveAnimate: function _leaveAnimate(t) {
        var e = t.getGraphicGroup(),
            n = e.getMatrix(),
            i = r.getBBox(e, n),
            o = (i.minX + i.maxX) / 2,
            a = (i.minY + i.maxY) / 2;r.scaleOut(e, o, a);
      } }, o.AUGMENT = { _initAnimate: function _initAnimate() {
        var t = this,
            e = this.get("_controllers"),
            n = this.get("animate"),
            o = this.get("_canvas"),
            a = this.get("_frontCanvas"),
            u = void 0;n && (u = new i({ canvases: [o, a], graph: this }), e.animate = u);var s = function s() {
          o.draw(), a.draw();
        },
            c = r.debounce(function () {
          u.run();
        }, 16);if (u) {
          var f = void 0;this.draw = function () {
            t.get("forcePreventAnimate") ? (f && clearTimeout(f), f = setTimeout(function () {
              u.updateStash();
            }, 16), s()) : c();
          };
        } else this.draw = s;
      }, drawFrontCanvas: function drawFrontCanvas() {
        this.get("_frontCanvas").draw();
      } }, t.exports = o;
  }, function (t, e, n) {
    var r = n(8),
        i = { INIT: "_initFilter", CFG: { filters: [] } };i.AUGMENT = { _initFilter: function _initFilter() {
        var t = this,
            e = this.get("filters");r.isFunction(e) && this.set("filters", [e]), this.on("afterchange", function () {
          !t.destroyed && t.filter();
        });
      }, addFilter: function addFilter(t) {
        return this.get("filters").push(t), t;
      }, removeFilter: function removeFilter(t) {
        var e = this.get("filters");this.set("filters", r.filter(e, t));
      }, filter: function filter() {
        var t = this.get("filters"),
            e = this.getItems(),
            n = this.getItems();t.forEach(function (t) {
          n = r.filter(n, t);
        }), e.forEach(function (t) {
          -1 === n.indexOf(t) && t.hide();
        }), this.draw();
      } }, t.exports = i;
  }, function (t, e, n) {
    var r = n(8),
        i = n(137),
        o = { CFG: { modes: null, mode: "default" }, INIT: "_initModes" };o.AUGMENT = { _initModes: function _initModes() {
        this._eventStash = {};var t = this.get("modes"),
            e = this.get("mode");r.isEmpty(t) && (t = r.cloneDeep(this.constructor.Modes), this.set("modes", t)), this.changeMode(e);
      }, changeMode: function changeMode(t) {
        var e = this.get("modes");r.isEmpty(e) || r.isEmpty(e[t]) || (i.resetMode(e[t], this), this.set("mode", t));
      }, addBehaviour: function addBehaviour(t) {
        var e = this.get("modes"),
            n = this.get("mode");r.isEmpty(e[n]) && (e[n] = []);var o = e[n],
            a = [].concat(t);return r.each(a, function (t) {
          -1 === o.indexOf(t) && o.push(t);
        }), i.resetMode(e[n], this), this;
      }, removeBehaviour: function removeBehaviour(t) {
        var e = this.get("modes")[this.get("mode")];if (!r.isEmpty(e)) {
          var n = [].concat(t);return e = e.filter(function (t) {
            return -1 === n.indexOf(t);
          }), i.resetMode(e, this), this;
        }
      }, behaviourOn: function behaviourOn(t, e) {
        var n = this._eventStash;n[t] || (n[t] = []), n[t].push(e), this.on(t, e);
      }, _off: function _off() {
        var t = this,
            e = this._eventStash;r.each(e, function (e, n) {
          r.each(e, function (e) {
            t.off(n, e);
          });
        }), this._eventStash = {};
      } }, t.exports = o;
  }, function (t, e, n) {
    var r = n(47),
        i = n(8),
        o = { MOUSEMOVE: "mousemove", MOUSEDOWN: "mousedown", MOUSEUP: "mouseup", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", CLICK: "click", DBLCLICK: "dblclick", DRAGSTART: "dragstart", DRAG: "drag", DRAGENTER: "dragenter", DRAGLEAVE: "dragleave", DRAGEND: "dragend", DROP: "drop", CONTEXTMENU: "contextmenu", MOUSEWHEEL: "mousewheel", KEYDOWN: "keydown", KEYUP: "keyup", KEYPRESS: "keypress" },
        a = [o.DBLCLICK, o.MOUSEDOWN, o.MOUSEUP, o.MOUSEENTER, o.MOUSELEAVE, o.MOUSEMOVE, o.CONTEXTMENU, o.MOUSEWHEEL],
        u = [o.KEYDOWN, o.KEYUP, o.KEYPRESS],
        s = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var r = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return r._domEvents = [], r._initEventStates(), r._registerEvents(), r;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype._initEventStates = function () {
        this._pressing = !1, this._dragging = !1, this._currentEventObj = null, this._dragEventObj = {};
      }, e.prototype._registerEvents = function () {
        this._registerMouseEvents(), this._registerKeyboardEvents();
      }, e.prototype._registerKeyboardEvents = function () {
        var t = this.graph,
            e = t.get("keyboardEventWrapper"),
            n = e || t.getMouseEventWarrper(),
            r = this._domEvents,
            o = t.get("keyboardEnable");i.each(u, function (e) {
          r.push(i.addEventListener(n, e, function (n) {
            var r = !0;i.isFunction(o) && (r = o()), r && t.emit(e, { domEvent: n });
          }));
        });
      }, e.prototype._registerMouseEvents = function () {
        var t = this,
            e = this,
            n = this.graph.getMouseEventWarrper(),
            r = this._domEvents;i.each(a, function (a) {
          r.push(i.addEventListener(n, a, function (n) {
            var r = t._currentEventObj;t._oldEventObj = r, t._processEventObj(n);var a = t._currentEventObj;e._simulateEvents(n, r, a), -1 !== [o.MOUSELEAVE, o.MOUSEENTER].indexOf(n.type) && e._triggerEvent("canvas:" + n.type), e._triggerEvent(n.type), n.type === o.MOUSELEAVE && (t._dragging && e._triggerEvent(o.DRAGLEAVE, i.mix({}, a, { item: null, shape: null, currentItem: t._dragEventObj.item, currentShape: t._dragEventObj.shape })), e._initEventStates());
          }));
        });
      }, e.prototype.destroy = function () {
        var t = this._domEvents;i.each(t, function (t) {
          t && t.remove();
        }), this._domEvents = null;
      }, e.prototype._triggerEvent = function (t, e) {
        if (e || (e = "mouseleave" === t ? this._oldEventObj : this._currentEventObj), "mousedown" === t && (e.button = this._button), e._type = t, this.emitGraphEvent(t, e), -1 === ["canvas:" + o.MOUSELEAVE, "canvas:" + o.MOUSEENTER].indexOf(t)) {
          var n = e.shape && e.shape.eventPreFix;if (-1 !== [o.DRAGSTART, o.DRAG, o.DRAGEND].indexOf(t) && (n = e.currentShape && e.currentShape.eventPreFix), n) {
            var r = n + ":" + t;e._type = r, i.isBoolean(e._isItemChange) ? e._isItemChange && this.emitGraphEvent(r, e) : this.emitGraphEvent(r, e);
          }
        }
      }, e.prototype.emitGraphEvent = function (t, e) {
        this.graph.emit(t, e);
      }, e.prototype._getDistanceToPress = function (t) {
        return Math.pow(t.clientX - this._pressX, 2) + Math.pow(t.clientY - this._pressY, 2);
      }, e.prototype._simulateEvents = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = this._dragEventObj.item,
            a = this._dragEventObj.shape;switch (t.type) {case o.MOUSEDOWN:
            this._pressing = !0, this._button = t.button, this._pressX = t.clientX, this._pressY = t.clientY;break;case o.MOUSEMOVE:
            if (this._dragging) {
              if (this._triggerEvent(o.DRAG, i.mix({}, n, { button: this._button, currentItem: r, currentShape: a })), e.shape !== n.shape) {
                var u = this._isItemChange(e, n);e.shape && this._triggerEvent(o.DRAGLEAVE, i.mix({}, n, { button: this._button, item: e.item, shape: e.shape, toItem: n.item, toShape: n.shape, currentItem: r, currentShape: a, _isItemChange: u })), n.shape && this._triggerEvent(o.DRAGENTER, i.mix({}, n, { button: this._button, currentItem: r, currentShape: a, fromItem: e.item, fromShape: e.shape, _isItemChange: u }));
              }
            } else this._pressing && this._getDistanceToPress(t) > 9 && (this._dragging = !0, this._dragEventObj = n, r = this._dragEventObj.item, a = this._dragEventObj.shape, this._triggerEvent(o.DRAGSTART, i.mix({}, n, { button: this._button, currentItem: r, currentShape: a })));if (e.shape !== n.shape) {
              var s = this._isItemChange(e, n);e.shape && this._triggerEvent(o.MOUSELEAVE, i.mix({}, n, { item: e.item, shape: e.shape, toItem: n.item, toShape: n.shape, _isItemChange: s })), n.shape && this._triggerEvent(o.MOUSEENTER, i.mix({}, n, { fromtItem: e.item, fromShape: e.shape, _isItemChange: s }));
            }break;case o.MOUSEUP:
            !this._dragging && this._pressing ? this._triggerEvent(o.CLICK, i.mix({}, n, { button: this._button })) : (this._triggerEvent(o.DROP, i.mix({}, n, { button: this._button, currentItem: r, currentShape: a })), this._triggerEvent(o.DRAGEND, i.mix({}, n, { button: this._button, currentItem: r, currentShape: a }))), this._pressing = !1, this._dragging = !1, this._dragEventObj = {};break;default:
            return;}
      }, e.prototype._isItemChange = function (t, e) {
        var n = t.shape,
            r = e.shape,
            o = n && r && (n.get("isItemChange") || r.get("isItemChange"));return o ? o(r, n) : i.isObject(t.item) && i.isObject(e.item) ? t.item.id !== e.item.id : t.item !== e.item;
      }, e.prototype._processEventObj = function (t) {
        var e = this.graph,
            n = e.get("_canvas"),
            r = e.get("_frontCanvas"),
            i = this._getEventObj(t, n),
            o = this._getEventObj(t, r);o.shape && (i.shape = o.shape, i.item = o.item), i.frontEvObj = o, this._currentEventObj = i;
      }, e.prototype._parsePoint = function (t, e) {
        return this.graph.getPointByCanvas({ x: t, y: e });
      }, e.prototype._getEventObj = function (t, e) {
        var n = this.graph,
            r = t.clientX,
            i = t.clientY,
            o = e.getPointByClient(r, i),
            a = this._parsePoint(o.x, o.y),
            u = e.getShape(o.x, o.y);return { item: n.getItemByShape(u), shape: u, x: a.x, y: a.y, domX: t.offsetX, domY: t.offsetY, domEvent: t };
      }, e;
    }(r);t.exports = s;
  }, function (t, e, n) {
    var r = {},
        i = n(197);r.INIT = "_initEvents", r.CFG = { keyboardEnable: !0 }, r.AUGMENT = { _initEvents: function _initEvents() {
        this.get("_controllers").events = new i({ graph: this });
      } }, t.exports = r;
  }, function (t, e, n) {
    var r = n(8),
        i = {};i.AUGMENT = { find: function find(t) {
        return this.get("_itemMap")[t];
      }, getNodes: function getNodes() {
        return this.get("_itemMap")._nodes;
      }, getEdges: function getEdges() {
        return this.get("_itemMap")._edges;
      }, getGroups: function getGroups() {
        return this.get("_itemMap")._groups;
      }, getGuides: function getGuides() {
        return this.get("_itemMap")._guides;
      }, getItems: function getItems() {
        var t = this.get("_itemMap"),
            e = [];return r.each(t, function (t) {
          t.type && e.push(t);
        }), e;
      }, getItemByShape: function getItemByShape(t) {
        return t ? this.getItem(t.id) : null;
      }, getItem: function getItem(t) {
        var e = this.get("_itemMap");return r.isObject(t) ? t.destroyed && (t = e[t.id]) : t = e[t], t;
      } }, t.exports = i;
  }, function (t, e, n) {
    var r = n(47),
        i = n(8),
        o = ["color", "shape", "size", "label", "style"],
        a = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var r = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return r._init(), r;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype._init = function () {
        var t = this,
            e = {};i.each(o, function (n) {
          e[n] = {}, t[n] = function (r) {
            return e[n].input = r, t;
          };
        }), this.channels = e;
      }, e.prototype.addChannels = function (t) {
        var e = this.channels;i.each(t, function (t, n) {
          e[n].input = t;
        });
      }, e.prototype.mapping = function (t) {
        var e = this.channels;i.each(e, function (e, n) {
          i.isNil(t[n]) && (i.isFunction(e.input) ? t[n] = e.input(t) : e.input && (t[n] = e.input));
        });
      }, e;
    }(r);t.exports = a;
  }, function (t, e, n) {
    var r = n(200),
        i = { INIT: "_initMapper" };i.AUGMENT = { _initMapper: function _initMapper() {
        var t = this.get("_controllers");t.nodeMapper = new r({ graph: this }), t.edgeMapper = new r({ graph: this }), t.groupMapper = new r({ graph: this }), t.guideMapper = new r({ graph: this });
      }, node: function node(t) {
        var e = this._getController("nodeMapper");return t && e.addChannels(t), e;
      }, edge: function edge(t) {
        var e = this._getController("edgeMapper");return t && e.addChannels(t), e;
      }, group: function group(t) {
        var e = this._getController("groupMapper");return t && e.addChannels(t), this._getController("groupMapper");
      }, guide: function guide(t) {
        var e = this._getController("guideMapper");return t && e.addChannels(t), this._getController("guideMapper");
      } }, t.exports = i;
  }, function (t, e, n) {
    var r = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var r = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, n));return r._init(), r;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype.getDefaultCfg = function () {
        return { graph: null, auto: !0, processer: null };
      }, e.prototype._init = function () {
        var t = this,
            e = this.graph;e.on("afteritemdraw", function (t) {
          var e = t.item,
              n = e.getKeyShape(),
              r = e.getModel();if (e.isEdge) r.lineWidth = n.attr("lineWidth");else if (e.isNode || e.isGroup) {
            var i = e.getBBox();r.width = i.width, r.height = i.height;
          }
        }), e.on("afterchange", function () {
          t.auto && !e.destroyed && t.layout();
        });
      }, e.prototype.changeLayout = function (t) {
        this.processer = t, this.layout();
      }, e.prototype.layout = function () {
        var t = this.graph,
            e = this.processer,
            n = t.getNodes().filter(function (t) {
          return t.isVisible();
        }).map(function (t) {
          return t.getModel();
        }),
            r = t.getEdges().filter(function (t) {
          return t.isVisible();
        }).map(function (t) {
          return t.getModel();
        });t._executeLayout(e, n, r), t.updateNodePosition();
      }, e.prototype.getLayoutProcesser = function () {
        return this.processer;
      }, e;
    }(n(47));t.exports = r;
  }, function (t, e, n) {
    var r = n(8),
        i = n(202),
        o = { CFG: { layout: void 0 }, INIT: "_initLayout" };o.AUGMENT = { _initLayout: function _initLayout() {
        var t = this.get("_controllers"),
            e = this._getLayoutCfg();e && (t.layout = new i(r.mix({ graph: this }, e)));
      }, _getLayoutCfg: function _getLayoutCfg() {
        var t = this.get("layout");return r.isPlainObject(t) ? t : r.isFunction(t) || r.isObject(t) ? { processer: t } : null;
      }, layout: function layout() {
        return this._getController("layout").layout(), this;
      }, updateNodePosition: function updateNodePosition() {
        var t = this.getItems(),
            e = this.getGroups(),
            n = this.getEdges();return t.forEach(function (t) {
          t.layoutUpdate();
        }), e.forEach(function (t) {
          t.layoutUpdate();
        }), n.forEach(function (t) {
          t.layoutUpdate();
        }), this.draw(), this;
      }, changeLayout: function changeLayout(t) {
        return this._getController("layout").changeLayout(t), this;
      }, getLayout: function getLayout() {
        return this._getController("layout").getLayoutProcesser();
      } }, t.exports = o;
  }, function (t, e, n) {
    var r = n(16),
        i = n(8),
        o = function t(e) {
      t.superclass.constructor.call(this, e);
    };i.extend(o, r.Group), i.augment(o, { drawInner: function drawInner(t) {
        var e = this;this.deepEach(function (t) {
          var n = t.get("freezePoint"),
              r = e.getMatrix()[0];t.isShape && n && t.get("visible") && (t.initTransform(), t.transform([["t", -n.x, -n.y], ["s", 1 / r, 1 / r], ["t", n.x, n.y]]));
        }), o.superclass.drawInner.call(this, t);
      } }), t.exports = o;
  }, function (t, e, n) {
    var r = n(8),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = { type: "guide", isGuide: !0, zIndex: 4 };return r.mix(i, n), function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, i));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e;
    }(n(118));t.exports = i;
  }, function (t, e, n) {
    var r = n(8),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = { type: "group", isNode: !1, isGroup: !0, zIndex: 1 };return r.mix(i, n), function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, i));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype._afterDraw = function () {
        this.getModel().collapsed && this.deepEach(function (t) {
          t.hide();
        }), t.prototype._afterDraw.call(this);
      }, e.prototype.updatePosition = function () {}, e.prototype._shouldDraw = function () {
        return !0;
      }, e.prototype.getCrossEdges = function () {
        var t = [],
            e = this.getInnerEdges();this.deepEach(function (e) {
          t.push(e.id);
        });var n = e.filter(function (e) {
          var n = e.getModel();return -1 === t.indexOf(n.source) || -1 === t.indexOf(n.target);
        });return r.uniq(n);
      }, e.prototype.getInnerEdges = function () {
        var t = [];return this.deepEach(function (e) {
          e.getEdges().forEach(function (e) {
            t.push(e);
          });
        }), r.uniq(t);
      }, e.prototype.getChildrenBBox = function () {
        var t = this.getChildren().map(function (t) {
          return t.getGraphicGroup();
        });return r.getChildrenBBox(t);
      }, e;
    }(n(135));t.exports = i;
  }, function (t, e, n) {
    var r = n(8),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = { type: "edge", isEdge: !0, zIndex: 2 };return r.mix(i, n), function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this, i));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype._beforeDraw = function () {
        var e = this.model,
            n = this.itemMap;r.isObject(e.source) ? this.source = e.source : this.source = n[e.source], r.isObject(e.target) ? this.target = e.target : this.target = n[e.target], t.prototype._beforeDraw.call(this);
      }, e.prototype._afterDraw = function () {
        this.linkedItemVisible() || this.hide(), t.prototype._afterDraw.call(this);
      }, e.prototype._getControlPoints = function () {
        var t = this.model.controlPoints;return r.isArray(t) ? t : [];
      }, e.prototype._shouldDraw = function () {
        return t.prototype._shouldDraw.call(this) && this.linkedItemVisible();
      }, e.prototype._getPoint = function (t) {
        if (t.linkable) {
          var e = t.getBBox();return { x: e.centerX, y: e.centerY };
        }return { x: t.x, y: t.y };
      }, e.prototype.layoutUpdate = function () {
        if (1 === this.getGraphicGroup().get("children").length) {
          var t = this.keyShape,
              e = this.shapeObj;t.attr("path", e.getPath(this));
        }this._afterDraw();
      }, e.prototype.linkedItemVisible = function () {
        var t = this.source,
            e = this.target;return r.isPlainObject(t) || r.isPlainObject(e) || t.isVisible() || e.isVisible() || t.collapsedParent !== e.collapsedParent;
      }, e.prototype.getSource = function () {
        var t = this.source,
            e = t.collapsedParent,
            n = this.itemMap;return e ? n[e.id] : t;
      }, e.prototype.getTarget = function () {
        var t = this.target,
            e = t.collapsedParent,
            n = this.itemMap;return e ? n[e.id] : t;
      }, e.prototype.getPoints = function () {
        var t = this.getSource(),
            e = this.getTarget(),
            n = this.model,
            i = this._getControlPoints(),
            o = this._getPoint(t),
            a = this._getPoint(e),
            u = [o].concat(i).concat([a]),
            s = u.length;if (t.linkable) {
          var c = r.isNumber(this.model.sourceAnchor) && t.id === n.source ? this.model.sourceAnchor : u[1],
              f = t.getLinkPoints(c);u[0] = f[0];
        }if (e.linkable) {
          var h = r.isNumber(this.model.targetAnchor) && e.id === n.target ? this.model.targetAnchor : u[s - 2],
              l = e.getLinkPoints(h);u[s - 1] = l[0];
        }return u;
      }, e;
    }(n(118));t.exports = i;
  }, function (t, e, n) {
    t.exports = { Node: n(135), Edge: n(207), Group: n(206), Guide: n(205) };
  }, function (t, e, n) {
    var r,
        i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };!function (e) {
      "use strict";
      function o() {}var a = o.prototype,
          u = e.EventEmitter;function s(t, e) {
        for (var n = t.length; n--;) {
          if (t[n].listener === e) return n;
        }return -1;
      }function c(t) {
        return function () {
          return this[t].apply(this, arguments);
        };
      }a.getListeners = function (t) {
        var e,
            n,
            r = this._getEvents();if (t instanceof RegExp) for (n in e = {}, r) {
          r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
        } else e = r[t] || (r[t] = []);return e;
      }, a.flattenListeners = function (t) {
        var e,
            n = [];for (e = 0; e < t.length; e += 1) {
          n.push(t[e].listener);
        }return n;
      }, a.getListenersAsObject = function (t) {
        var e,
            n = this.getListeners(t);return n instanceof Array && ((e = {})[t] = n), e || n;
      }, a.addListener = function (t, e) {
        if (!function t(e) {
          return "function" == typeof e || e instanceof RegExp || !(!e || "object" !== (void 0 === e ? "undefined" : i(e))) && t(e.listener);
        }(e)) throw new TypeError("listener must be a function");var n,
            r = this.getListenersAsObject(t),
            o = "object" === (void 0 === e ? "undefined" : i(e));for (n in r) {
          r.hasOwnProperty(n) && -1 === s(r[n], e) && r[n].push(o ? e : { listener: e, once: !1 });
        }return this;
      }, a.on = c("addListener"), a.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }, a.once = c("addOnceListener"), a.defineEvent = function (t) {
        return this.getListeners(t), this;
      }, a.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) {
          this.defineEvent(t[e]);
        }return this;
      }, a.removeListener = function (t, e) {
        var n,
            r,
            i = this.getListenersAsObject(t);for (r in i) {
          i.hasOwnProperty(r) && -1 !== (n = s(i[r], e)) && i[r].splice(n, 1);
        }return this;
      }, a.off = c("removeListener"), a.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }, a.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }, a.manipulateListeners = function (t, e, n) {
        var r,
            o,
            a = t ? this.removeListener : this.addListener,
            u = t ? this.removeListeners : this.addListeners;if ("object" !== (void 0 === e ? "undefined" : i(e)) || e instanceof RegExp) for (r = n.length; r--;) {
          a.call(this, e, n[r]);
        } else for (r in e) {
          e.hasOwnProperty(r) && (o = e[r]) && ("function" == typeof o ? a.call(this, r, o) : u.call(this, r, o));
        }return this;
      }, a.removeEvent = function (t) {
        var e,
            n = void 0 === t ? "undefined" : i(t),
            r = this._getEvents();if ("string" === n) delete r[t];else if (t instanceof RegExp) for (e in r) {
          r.hasOwnProperty(e) && t.test(e) && delete r[e];
        } else delete this._events;return this;
      }, a.removeAllListeners = c("removeEvent"), a.emitEvent = function (t, e) {
        var n,
            r,
            i,
            o,
            a = this.getListenersAsObject(t);for (o in a) {
          if (a.hasOwnProperty(o)) for (n = a[o].slice(0), i = 0; i < n.length; i++) {
            !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
          }
        }return this;
      }, a.trigger = c("emitEvent"), a.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);return this.emitEvent(t, e);
      }, a.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this;
      }, a._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
      }, a._getEvents = function () {
        return this._events || (this._events = {});
      }, o.noConflict = function () {
        return e.EventEmitter = u, o;
      }, void 0 === (r = function () {
        return o;
      }.call(e, n, e, t)) || (t.exports = r);
    }(this || {});
  }, function (t, e, n) {
    var r = n(8),
        i = function (t) {
      function e(n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
        }(this, t.call(this)),
            o = i.getDefaultCfg();return i._cfg = r.mix({}, o, n), i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), e.prototype.getDefaultCfg = function () {
        return {};
      }, e.prototype.get = function (t) {
        return this._cfg[t];
      }, e.prototype.set = function (t, e) {
        this._cfg[t] = e;
      }, e.prototype.destroy = function () {
        this._cfg = {}, this.removeAllListeners(), this.destroyed = !0;
      }, e;
    }(n(209));t.exports = i;
  }, function (t, e, n) {
    var r = n(8),
        i = n(16),
        o = function t(e) {
      t.superclass.constructor.call(this, e);
    };r.extend(o, i.Shape), o.ATTRS = { x: 0, y: 0, width: 0, height: 0 }, r.extend(o, i.Shape), r.augment(o, { canFill: !0, type: "html", __isPointInFill: function __isPointInFill(t, e) {
        var n = this.getBBox(),
            r = n.minX,
            i = n.minY,
            o = n.maxX - n.minX,
            a = n.maxY - n.minY;return r <= t && t <= r + o && i <= e && e <= i + a;
      }, __initHtml: function __initHtml(t) {
        var e = this.get("attrs"),
            n = this.get("canvas").get("htmlElementContaniner");e.html && e.html.destroy && e.html.destroy(), (t = r.createDOM(t)).css({ position: "absolute", padding: "0px", margin: "0px", visibility: "hidden" }), e.html = t, n.appendChild(t);
      }, isPointInPath: function isPointInPath(t, e) {
        return this.__isPointInFill(t, e);
      }, init: function init() {
        var t = this.attr("html");this.get("canvas").on("beforedraw", function () {
          t.css({ visibility: "hidden" });
        }), this.__initHtml(t);
      }, getDefaultAttrs: function getDefaultAttrs() {
        return o.ATTRS;
      }, attr: function attr(t, e) {
        var n = this.get("attrs");return r.isObject(t) ? (t.html && (this.__initHtml(t.html), delete t.html), r.mix(n, t), void 0 === t.x && void 0 === t.y && void 0 === t.width && void 0 === t.height || this.calculateBox(), n) : r.isNil(e) ? n[t] : ("html" === t ? this.__initHtml(e) : (n[t] = e, "x" !== t && "y" !== t && "width" !== t && "height" !== t || this.calculateBox()), this);
      }, calculateBox: function calculateBox() {
        var t = this.attr("x"),
            e = this.attr("y");return { minX: t, minY: e, maxX: t + this.attr("width"), maxY: e + this.attr("height") };
      }, getDrawTotalMatrix: function getDrawTotalMatrix() {
        for (var t = this.get("canvas"), e = r.clone(this.attr("matrix")), n = this.getParent(); n !== t;) {
          r.mat3.multiply(e, n.attr("matrix"), e), n = n.getParent();
        }return e;
      }, getDOM: function getDOM() {
        return this.attr("html");
      }, applyTransform: function applyTransform() {
        var t = this.attr("html"),
            e = this.getDrawTotalMatrix(),
            n = this.attr("x"),
            r = this.attr("y"),
            i = this.attr("width") / 2,
            o = this.attr("height") / 2,
            a = e[0] * n + e[6] + e[0] * i - i,
            u = e[4] * r + e[7] + e[4] * o - o;t.css({ transform: "matrix(" + e[0] + "," + e[1] + "," + e[3] + "," + e[4] + "," + a + "," + u + ")" });
      }, createPath: function createPath() {
        var t = this.attr("html"),
            e = this.get("attrs");this.applyTransform(), t.css(r.mix({ visibility: "visible" }, e));
      }, remove: function remove(t) {
        this.attr("html").css({ visibility: "hidden" }), o.superclass.remove.call(this, t);
      }, destroy: function destroy() {
        var t = this.attr("html");t && t.destroy(), o.superclass.destroy.call(this);
      } }), i.Shape.Html = o, t.exports = o;
  }, function (t, e, n) {
    var r = n(8),
        i = n(16),
        o = function o() {};r.augment(o, { getAttrs: function getAttrs() {
        var t = this,
            e = this.get("attrs"),
            n = {};return r.each(e, function (e, r) {
          n[r] = t.attr(r);
        }), n;
      }, hasClass: function hasClass(t) {
        var e = this.get("class");return !(!e || -1 === e.indexOf(t));
      } }), r.mixin(i.Shape, [o]), t.exports = o;
  }, function (t, e, n) {
    var r = n(16),
        i = n(8),
        o = function o() {};i.augment(o, { findByClass: function findByClass(t) {
        var e = [];return this.deepEach(function (n) {
          n.hasClass(t) && e.push(n);
        }), e;
      }, hasClass: function hasClass(t) {
        var e = this.get("class");return !(!e || -1 === e.indexOf(t));
      }, deepEach: function deepEach(t, e) {
        i.traverseTree(this, t, function (t) {
          return t.get("children");
        }, e);
      }, sort: function sort() {
        var t = this.get("children");this.set("children", i.radixSort(t, function (t) {
          return t.get("zIndex");
        }));
      }, sortBy: function sortBy(t) {
        var e = this.get("children");this.set("children", i.radixSort(e, t));
      }, clear: function clear(t) {
        var e = this.get("children");for (t = !1 !== t; 0 !== e.length;) {
          e[e.length - 1].remove(t);
        }return this;
      } }), i.mixin(r.Group, [o]), t.exports = o;
  }, function (t, e, n) {
    var r = n(8),
        i = n(16),
        o = function o() {};r.augment(o, { beforeDraw: function beforeDraw() {
        var t = this.get("context"),
            e = this.get("el");this.emit("beforedraw"), t && t.clearRect(0, 0, e.width, e.height);
      } }), r.mixin(i.Canvas, [o]), t.exports = o;
  }, function (t, e, n) {
    n(31).registerGuide("common", { draw: function draw() {
        console.warn("do not have this guide, please register one");
      } });
  }, function (t, e, n) {
    t.exports = { common: n(215) };
  }, function (t, e, n) {
    var r = n(31),
        i = n(8),
        o = n(22);r.registerGroup("common", { draw: function draw(t) {
        return t.getModel().collapsed ? this.drawCollapsed(t) : this.drawExpanded(t);
      }, getLabel: function getLabel(t) {
        return t.getModel().label;
      }, drawLabel: function drawLabel(t, e, n) {
        var r = this.getLabel(t);if (r) {
          var a = t.getGraphicGroup(),
              u = [8, 8],
              s = i.mix(!0, {}, o.labelStyle, { x: e + u[0], y: n + u[1], textAlign: "left", textBaseline: "top" });i.isObject(r) ? i.mix(s, r) : s.text = r, a.addShape("text", { attrs: s });
        }
      }, drawKeyShape: function drawKeyShape(t, e, n, r, a) {
        var u = t.getModel(),
            s = t.getGraphicGroup(),
            c = i.mix({}, o.groupStyle, u.style),
            f = i.getRectPath(e, n, r, a, c.radius);return s.addShape("path", { attrs: i.mix({}, c, { path: f }) });
      }, drawExpanded: function drawExpanded(t) {
        var e = t.getChildrenBBox(),
            n = e.minX - o.groupBackgroundPadding[3],
            r = e.minY - o.groupBackgroundPadding[0],
            i = e.maxX - e.minX + o.groupBackgroundPadding[3] + o.groupBackgroundPadding[1],
            a = e.maxY - e.minY + o.groupBackgroundPadding[0] + o.groupBackgroundPadding[2],
            u = this.drawKeyShape(t, n, r, i, a);return this.drawLabel(t, n, r), u;
      }, drawCollapsed: function drawCollapsed(t) {
        var e = t.getChildrenBBox(),
            n = e.minX - o.groupBackgroundPadding[3],
            r = e.minY - o.groupBackgroundPadding[0],
            i = this.drawKeyShape(t, n, r, 184, 40);return this.drawLabel(t, n, r), i;
      } });
  }, function (t, e, n) {
    t.exports = { common: n(217) };
  }, function (t, e, n) {
    var r = n(31),
        i = n(8),
        o = n(22);r.registerEdge("common", { draw: function draw(t) {
        var e = this.drawKeyShape(t);return e.isKeyShape = !0, this.drawLabel(t), e;
      }, drawKeyShape: function drawKeyShape(t) {
        var e = t.getGraphicGroup(),
            n = this.getStyle(t),
            r = this.getPath(t);return e.addShape("path", { attrs: i.mix({}, n, { path: r }) });
      }, getSize: function getSize(t) {
        return t.getModel().size || 1;
      }, getColor: function getColor(t) {
        return t.getModel().color || "#A3B1BF";
      }, getStyle: function getStyle(t) {
        var e = t.getModel();return i.mix(!0, {}, o.edgeStyle, { stroke: this.getColor(t), strokeOpacity: .92, lineWidth: this.getSize(t) }, e.style);
      }, getPath: function getPath(t) {
        var e = t.getPoints();return i.pointsToPolygon(e);
      }, getLabel: function getLabel(t) {
        return t.getModel().label;
      }, drawLabel: function drawLabel(t) {
        var e = this.getLabel(t),
            n = t.getGraphicGroup(),
            r = t.getModel(),
            a = n.findBy(function (t) {
          return t.isKeyShape;
        });if (e) {
          var u = a.getPoint(.5),
              s = i.mix(!0, {}, o.labelStyle, u);i.isObject(e) ? i.mix(s, e) : s.text = e, e = n.addShape("text", { attrs: s });var c = i.toAllPadding([4, 8]),
              f = e.getBBox(),
              h = { fill: "white" },
              l = r.labelRectStyle ? i.mix({}, h, r.labelRectStyle) : h;n.addShape("rect", { attrs: i.mix({}, l, { x: f.minX - c[3], y: f.minY - c[0], width: f.maxX - f.minX + c[1] + c[3], height: f.maxY - f.minY + c[0] + c[2] }) }), i.toFront(e);
        }
      } });
  }, function (t, e, n) {
    t.exports = { common: n(219) };
  }, function (t, e, n) {
    var r = n(31),
        i = n(8);r.registerNode("html", { getHtml: function getHtml(t) {
        return t.getModel().html;
      }, cssSize: !0, draw: function draw(t) {
        var e = i.createDOM('<div class="g6-html-node-container"></div>'),
            n = t.getGraphicGroup(),
            r = t.getModel(),
            o = this.getSize(t),
            a = this.getStyle(t),
            u = n.get("canvas").get("htmlElementContaniner"),
            s = this.cssSize,
            c = this.getHtml(t);c = c ? i.createDOM(c) : i.createDOM("<div></div>"), e.css({ position: "absolute", padding: "0px", margin: "0px", visibility: "hidden" }), e.appendChild(c), s && (u.appendChild(e), o[0] = e.width(), o[1] = e.height());var f = -o[0] / 2,
            h = -o[1] / 2,
            l = o[0],
            p = o[1],
            d = n.addShape("rect", { attrs: i.mix({}, a, { x: f, y: h, width: l, height: p }) });return n.addShape("html", { attrs: i.mix({ x: f, y: h, width: l, height: p, html: e }, r.style) }), d;
      } });
  }, function (t, e, n) {
    var r = n(31),
        i = n(8),
        o = n(22);r.registerNode("common", { draw: function draw(t) {
        var e = t.getGraphicGroup(),
            n = this.drawLabel(t),
            r = this.drawKeyShape(t);return n && i.toFront(n, e), r;
      }, getSize: function getSize(t) {
        var e = t.getModel().size;return i.isArray(e) ? e : i.isNumber(e) ? [e, e] : [o.defaultNodeSize, o.defaultNodeSize];
      }, getStyle: function getStyle(t) {
        var e = t.getModel(),
            n = this.getColor(t),
            r = i.Palettes.generate(n);return i.mix(!0, {}, o.nodeStyle, { fill: r[4], fillOpacity: .92, stroke: r[6] }, e.style);
      }, getColor: function getColor(t) {
        return t.getModel().color || "#1890FF";
      }, getLabel: function getLabel(t) {
        return t.getModel().label;
      }, drawKeyShape: function drawKeyShape(t) {
        var e = t.getGraphicGroup(),
            n = this.getStyle(t),
            r = this.getPath(t);return e.addShape("path", { attrs: i.mix({}, n, { path: r }) });
      }, drawLabel: function drawLabel(t) {
        var e = t.getGraphicGroup(),
            n = this.getLabel(t);if (!i.isNil(n)) {
          var r = i.mix(!0, {}, o.labelStyle, { x: 0, y: 0 });return i.isObject(n) ? i.mix(r, n) : r.text = n, e.addShape("text", { class: "label", attrs: r });
        }
      }, getPath: function getPath(t) {
        var e = this.getSize(t);return i.getEllipsePath(0, 0, e[0] / 2, e[1] / 2);
      } });
  }, function (t, e, n) {
    t.exports = { common: n(222), html: n(221) };
  }, function (t, e, n) {
    var r = n(22);t.exports = { scaleIn: function scaleIn(t, e, n, i, o) {
        i = i || e, o = o || n, t.transform([["t", -i, -o], ["s", .01, .01], ["t", e, n]]), t && !t.get("destroyed") && t.animate({ transform: [["t", -e, -n], ["s", 100, 100], ["t", i, o]] }, r.enterDuration, r.enterEasing);
      }, scaleOut: function scaleOut(t, e, n, i, o) {
        i = i || e, o = o || n, t && !t.get("destroyed") && t.animate({ transform: [["t", -i, -o], ["s", .01, .01], ["t", e, n]] }, r.leaveDuration, r.leaveEasing, function () {
          t.remove();
        });
      } };
  }, function (t, e, n) {
    var r,
        i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };!function (o) {
      var a = /^\s+/,
          u = /\s+$/,
          s = 0,
          c = o.round,
          f = o.min,
          h = o.max,
          l = o.random;function p(t, e) {
        if (t = t || "", e = e || {}, t instanceof p) return t;if (!(this instanceof p)) return new p(t, e);var n = function (t) {
          var e = { r: 0, g: 0, b: 0 },
              n = 1,
              r = null,
              s = null,
              c = null,
              l = !1,
              p = !1;"string" == typeof t && (t = function (t) {
            t = t.replace(a, "").replace(u, "").toLowerCase();var e,
                n = !1;if (T[t]) t = T[t], n = !0;else if ("transparent" == t) return { r: 0, g: 0, b: 0, a: 0, format: "name" };if (e = q.rgb.exec(t)) return { r: e[1], g: e[2], b: e[3] };if (e = q.rgba.exec(t)) return { r: e[1], g: e[2], b: e[3], a: e[4] };if (e = q.hsl.exec(t)) return { h: e[1], s: e[2], l: e[3] };if (e = q.hsla.exec(t)) return { h: e[1], s: e[2], l: e[3], a: e[4] };if (e = q.hsv.exec(t)) return { h: e[1], s: e[2], v: e[3] };if (e = q.hsva.exec(t)) return { h: e[1], s: e[2], v: e[3], a: e[4] };if (e = q.hex8.exec(t)) return { r: L(e[1]), g: L(e[2]), b: L(e[3]), a: Y(e[4]), format: n ? "name" : "hex8" };if (e = q.hex6.exec(t)) return { r: L(e[1]), g: L(e[2]), b: L(e[3]), format: n ? "name" : "hex" };if (e = q.hex4.exec(t)) return { r: L(e[1] + "" + e[1]), g: L(e[2] + "" + e[2]), b: L(e[3] + "" + e[3]), a: Y(e[4] + "" + e[4]), format: n ? "name" : "hex8" };if (e = q.hex3.exec(t)) return { r: L(e[1] + "" + e[1]), g: L(e[2] + "" + e[2]), b: L(e[3] + "" + e[3]), format: n ? "name" : "hex" };return !1;
          }(t));"object" == (void 0 === t ? "undefined" : i(t)) && (U(t.r) && U(t.g) && U(t.b) ? (d = t.r, v = t.g, g = t.b, e = { r: 255 * F(d, 255), g: 255 * F(v, 255), b: 255 * F(g, 255) }, l = !0, p = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : U(t.h) && U(t.s) && U(t.v) ? (r = R(t.s), s = R(t.v), e = function (t, e, n) {
            t = 6 * F(t, 360), e = F(e, 100), n = F(n, 100);var r = o.floor(t),
                i = t - r,
                a = n * (1 - e),
                u = n * (1 - i * e),
                s = n * (1 - (1 - i) * e),
                c = r % 6;return { r: 255 * [n, u, a, a, s, n][c], g: 255 * [s, n, n, u, a, a][c], b: 255 * [a, a, s, n, n, u][c] };
          }(t.h, r, s), l = !0, p = "hsv") : U(t.h) && U(t.s) && U(t.l) && (r = R(t.s), c = R(t.l), e = function (t, e, n) {
            var r, i, o;function a(t, e, n) {
              return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
            }if (t = F(t, 360), e = F(e, 100), n = F(n, 100), 0 === e) r = i = o = n;else {
              var u = n < .5 ? n * (1 + e) : n + e - n * e,
                  s = 2 * n - u;r = a(s, u, t + 1 / 3), i = a(s, u, t), o = a(s, u, t - 1 / 3);
            }return { r: 255 * r, g: 255 * i, b: 255 * o };
          }(t.h, r, c), l = !0, p = "hsl"), t.hasOwnProperty("a") && (n = t.a));var d, v, g;return n = k(n), { ok: l, format: t.format || p, r: f(255, h(e.r, 0)), g: f(255, h(e.g, 0)), b: f(255, h(e.b, 0)), a: n };
        }(t);this._originalInput = t, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = c(100 * this._a) / 100, this._format = e.format || n.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = c(this._r)), this._g < 1 && (this._g = c(this._g)), this._b < 1 && (this._b = c(this._b)), this._ok = n.ok, this._tc_id = s++;
      }function d(t, e, n) {
        t = F(t, 255), e = F(e, 255), n = F(n, 255);var r,
            i,
            o = h(t, e, n),
            a = f(t, e, n),
            u = (o + a) / 2;if (o == a) r = i = 0;else {
          var s = o - a;switch (i = u > .5 ? s / (2 - o - a) : s / (o + a), o) {case t:
              r = (e - n) / s + (e < n ? 6 : 0);break;case e:
              r = (n - t) / s + 2;break;case n:
              r = (t - e) / s + 4;}r /= 6;
        }return { h: r, s: i, l: u };
      }function v(t, e, n) {
        t = F(t, 255), e = F(e, 255), n = F(n, 255);var r,
            i,
            o = h(t, e, n),
            a = f(t, e, n),
            u = o,
            s = o - a;if (i = 0 === o ? 0 : s / o, o == a) r = 0;else {
          switch (o) {case t:
              r = (e - n) / s + (e < n ? 6 : 0);break;case e:
              r = (n - t) / s + 2;break;case n:
              r = (t - e) / s + 4;}r /= 6;
        }return { h: r, s: i, v: u };
      }function g(t, e, n, r) {
        var i = [B(c(t).toString(16)), B(c(e).toString(16)), B(c(n).toString(16))];return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
      }function y(t, e, n, r) {
        return [B(D(r)), B(c(t).toString(16)), B(c(e).toString(16)), B(c(n).toString(16))].join("");
      }function m(t, e) {
        e = 0 === e ? 0 : e || 10;var n = p(t).toHsl();return n.s -= e / 100, n.s = N(n.s), p(n);
      }function x(t, e) {
        e = 0 === e ? 0 : e || 10;var n = p(t).toHsl();return n.s += e / 100, n.s = N(n.s), p(n);
      }function b(t) {
        return p(t).desaturate(100);
      }function _(t, e) {
        e = 0 === e ? 0 : e || 10;var n = p(t).toHsl();return n.l += e / 100, n.l = N(n.l), p(n);
      }function w(t, e) {
        e = 0 === e ? 0 : e || 10;var n = p(t).toRgb();return n.r = h(0, f(255, n.r - c(-e / 100 * 255))), n.g = h(0, f(255, n.g - c(-e / 100 * 255))), n.b = h(0, f(255, n.b - c(-e / 100 * 255))), p(n);
      }function M(t, e) {
        e = 0 === e ? 0 : e || 10;var n = p(t).toHsl();return n.l -= e / 100, n.l = N(n.l), p(n);
      }function S(t, e) {
        var n = p(t).toHsl(),
            r = (n.h + e) % 360;return n.h = r < 0 ? 360 + r : r, p(n);
      }function E(t) {
        var e = p(t).toHsl();return e.h = (e.h + 180) % 360, p(e);
      }function j(t) {
        var e = p(t).toHsl(),
            n = e.h;return [p(t), p({ h: (n + 120) % 360, s: e.s, l: e.l }), p({ h: (n + 240) % 360, s: e.s, l: e.l })];
      }function A(t) {
        var e = p(t).toHsl(),
            n = e.h;return [p(t), p({ h: (n + 90) % 360, s: e.s, l: e.l }), p({ h: (n + 180) % 360, s: e.s, l: e.l }), p({ h: (n + 270) % 360, s: e.s, l: e.l })];
      }function O(t) {
        var e = p(t).toHsl(),
            n = e.h;return [p(t), p({ h: (n + 72) % 360, s: e.s, l: e.l }), p({ h: (n + 216) % 360, s: e.s, l: e.l })];
      }function P(t, e, n) {
        e = e || 6, n = n || 30;var r = p(t).toHsl(),
            i = 360 / n,
            o = [p(t)];for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e;) {
          r.h = (r.h + i) % 360, o.push(p(r));
        }return o;
      }function I(t, e) {
        e = e || 6;for (var n = p(t).toHsv(), r = n.h, i = n.s, o = n.v, a = [], u = 1 / e; e--;) {
          a.push(p({ h: r, s: i, v: o })), o = (o + u) % 1;
        }return a;
      }p.prototype = { isDark: function isDark() {
          return this.getBrightness() < 128;
        }, isLight: function isLight() {
          return !this.isDark();
        }, isValid: function isValid() {
          return this._ok;
        }, getOriginalInput: function getOriginalInput() {
          return this._originalInput;
        }, getFormat: function getFormat() {
          return this._format;
        }, getAlpha: function getAlpha() {
          return this._a;
        }, getBrightness: function getBrightness() {
          var t = this.toRgb();return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        }, getLuminance: function getLuminance() {
          var t,
              e,
              n,
              r = this.toRgb();return t = r.r / 255, e = r.g / 255, n = r.b / 255, .2126 * (t <= .03928 ? t / 12.92 : o.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : o.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : o.pow((n + .055) / 1.055, 2.4));
        }, setAlpha: function setAlpha(t) {
          return this._a = k(t), this._roundA = c(100 * this._a) / 100, this;
        }, toHsv: function toHsv() {
          var t = v(this._r, this._g, this._b);return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
        }, toHsvString: function toHsvString() {
          var t = v(this._r, this._g, this._b),
              e = c(360 * t.h),
              n = c(100 * t.s),
              r = c(100 * t.v);return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + r + "%)" : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        }, toHsl: function toHsl() {
          var t = d(this._r, this._g, this._b);return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
        }, toHslString: function toHslString() {
          var t = d(this._r, this._g, this._b),
              e = c(360 * t.h),
              n = c(100 * t.s),
              r = c(100 * t.l);return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + r + "%)" : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        }, toHex: function toHex(t) {
          return g(this._r, this._g, this._b, t);
        }, toHexString: function toHexString(t) {
          return "#" + this.toHex(t);
        }, toHex8: function toHex8(t) {
          return function (t, e, n, r, i) {
            var o = [B(c(t).toString(16)), B(c(e).toString(16)), B(c(n).toString(16)), B(D(r))];if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);return o.join("");
          }(this._r, this._g, this._b, this._a, t);
        }, toHex8String: function toHex8String(t) {
          return "#" + this.toHex8(t);
        }, toRgb: function toRgb() {
          return { r: c(this._r), g: c(this._g), b: c(this._b), a: this._a };
        }, toRgbString: function toRgbString() {
          return 1 == this._a ? "rgb(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ")" : "rgba(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function toPercentageRgb() {
          return { r: c(100 * F(this._r, 255)) + "%", g: c(100 * F(this._g, 255)) + "%", b: c(100 * F(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function toPercentageRgbString() {
          return 1 == this._a ? "rgb(" + c(100 * F(this._r, 255)) + "%, " + c(100 * F(this._g, 255)) + "%, " + c(100 * F(this._b, 255)) + "%)" : "rgba(" + c(100 * F(this._r, 255)) + "%, " + c(100 * F(this._g, 255)) + "%, " + c(100 * F(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function toName() {
          return 0 === this._a ? "transparent" : !(this._a < 1) && (C[g(this._r, this._g, this._b, !0)] || !1);
        }, toFilter: function toFilter(t) {
          var e = "#" + y(this._r, this._g, this._b, this._a),
              n = e,
              r = this._gradientType ? "GradientType = 1, " : "";if (t) {
            var i = p(t);n = "#" + y(i._r, i._g, i._b, i._a);
          }return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + n + ")";
        }, toString: function toString(t) {
          var e = !!t;t = t || this._format;var n = !1,
              r = this._a < 1 && this._a >= 0;return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()), "prgb" === t && (n = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (n = this.toHexString()), "hex3" === t && (n = this.toHexString(!0)), "hex4" === t && (n = this.toHex8String(!0)), "hex8" === t && (n = this.toHex8String()), "name" === t && (n = this.toName()), "hsl" === t && (n = this.toHslString()), "hsv" === t && (n = this.toHsvString()), n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString();
        }, clone: function clone() {
          return p(this.toString());
        }, _applyModification: function _applyModification(t, e) {
          var n = t.apply(null, [this].concat([].slice.call(e)));return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
        }, lighten: function lighten() {
          return this._applyModification(_, arguments);
        }, brighten: function brighten() {
          return this._applyModification(w, arguments);
        }, darken: function darken() {
          return this._applyModification(M, arguments);
        }, desaturate: function desaturate() {
          return this._applyModification(m, arguments);
        }, saturate: function saturate() {
          return this._applyModification(x, arguments);
        }, greyscale: function greyscale() {
          return this._applyModification(b, arguments);
        }, spin: function spin() {
          return this._applyModification(S, arguments);
        }, _applyCombination: function _applyCombination(t, e) {
          return t.apply(null, [this].concat([].slice.call(e)));
        }, analogous: function analogous() {
          return this._applyCombination(P, arguments);
        }, complement: function complement() {
          return this._applyCombination(E, arguments);
        }, monochromatic: function monochromatic() {
          return this._applyCombination(I, arguments);
        }, splitcomplement: function splitcomplement() {
          return this._applyCombination(O, arguments);
        }, triad: function triad() {
          return this._applyCombination(j, arguments);
        }, tetrad: function tetrad() {
          return this._applyCombination(A, arguments);
        } }, p.fromRatio = function (t, e) {
        if ("object" == (void 0 === t ? "undefined" : i(t))) {
          var n = {};for (var r in t) {
            t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : R(t[r]));
          }t = n;
        }return p(t, e);
      }, p.equals = function (t, e) {
        return !(!t || !e) && p(t).toRgbString() == p(e).toRgbString();
      }, p.random = function () {
        return p.fromRatio({ r: l(), g: l(), b: l() });
      }, p.mix = function (t, e, n) {
        n = 0 === n ? 0 : n || 50;var r = p(t).toRgb(),
            i = p(e).toRgb(),
            o = n / 100;return p({ r: (i.r - r.r) * o + r.r, g: (i.g - r.g) * o + r.g, b: (i.b - r.b) * o + r.b, a: (i.a - r.a) * o + r.a });
      }, p.readability = function (t, e) {
        var n = p(t),
            r = p(e);return (o.max(n.getLuminance(), r.getLuminance()) + .05) / (o.min(n.getLuminance(), r.getLuminance()) + .05);
      }, p.isReadable = function (t, e, n) {
        var r,
            i,
            o = p.readability(t, e);switch (i = !1, (r = function (t) {
          var e, n;e = ((t = t || { level: "AA", size: "small" }).level || "AA").toUpperCase(), n = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA");"small" !== n && "large" !== n && (n = "small");return { level: e, size: n };
        }(n)).level + r.size) {case "AAsmall":case "AAAlarge":
            i = o >= 4.5;break;case "AAlarge":
            i = o >= 3;break;case "AAAsmall":
            i = o >= 7;}return i;
      }, p.mostReadable = function (t, e, n) {
        var r,
            i,
            o,
            a,
            u = null,
            s = 0;i = (n = n || {}).includeFallbackColors, o = n.level, a = n.size;for (var c = 0; c < e.length; c++) {
          (r = p.readability(t, e[c])) > s && (s = r, u = p(e[c]));
        }return p.isReadable(t, u, { level: o, size: a }) || !i ? u : (n.includeFallbackColors = !1, p.mostReadable(t, ["#fff", "#000"], n));
      };var T = p.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" },
          C = p.hexNames = function (t) {
        var e = {};for (var n in t) {
          t.hasOwnProperty(n) && (e[t[n]] = n);
        }return e;
      }(T);function k(t) {
        return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
      }function F(t, e) {
        (function (t) {
          return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t);
        })(t) && (t = "100%");var n = function (t) {
          return "string" == typeof t && -1 != t.indexOf("%");
        }(t);return t = f(e, h(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), o.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e);
      }function N(t) {
        return f(1, h(0, t));
      }function L(t) {
        return parseInt(t, 16);
      }function B(t) {
        return 1 == t.length ? "0" + t : "" + t;
      }function R(t) {
        return t <= 1 && (t = 100 * t + "%"), t;
      }function D(t) {
        return o.round(255 * parseFloat(t)).toString(16);
      }function Y(t) {
        return L(t) / 255;
      }var X,
          G,
          z,
          q = (G = "[\\s|\\(]+(" + (X = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + X + ")[,|\\s]+(" + X + ")\\s*\\)?", z = "[\\s|\\(]+(" + X + ")[,|\\s]+(" + X + ")[,|\\s]+(" + X + ")[,|\\s]+(" + X + ")\\s*\\)?", { CSS_UNIT: new RegExp(X), rgb: new RegExp("rgb" + G), rgba: new RegExp("rgba" + z), hsl: new RegExp("hsl" + G), hsla: new RegExp("hsla" + z), hsv: new RegExp("hsv" + G), hsva: new RegExp("hsva" + z), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });function U(t) {
        return !!q.CSS_UNIT.exec(t);
      }void 0 !== t && t.exports ? t.exports = p : void 0 === (r = function () {
        return p;
      }.call(e, n, e, t)) || (t.exports = r);
    }(Math);
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) {
      for (var e = [], n = (0, o.default)(t), r = h; r > 0; r -= 1) {
        var i = n.toHsv(),
            a = (0, o.default)({ h: p(i, r, !0), s: d(i, r, !0), v: v(i, r, !0) }).toHexString();e.push(a);
      }e.push(n.toHexString());for (var u = 1; u <= l; u += 1) {
        var s = n.toHsv(),
            c = (0, o.default)({ h: p(s, u), s: d(s, u), v: v(s, u) }).toHexString();e.push(c);
      }return e;
    };var r,
        i = n(225),
        o = (r = i) && r.__esModule ? r : { default: r };var a = 2,
        u = 16,
        s = 5,
        c = 5,
        f = 15,
        h = 5,
        l = 4;function p(t, e, n) {
      var r = void 0;return (r = Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n ? Math.round(t.h) - a * e : Math.round(t.h) + a * e : n ? Math.round(t.h) + a * e : Math.round(t.h) - a * e) < 0 ? r += 360 : r >= 360 && (r -= 360), r;
    }function d(t, e, n) {
      var r = void 0;return (r = n ? Math.round(100 * t.s) - u * e : e === l ? Math.round(100 * t.s) + u : Math.round(100 * t.s) + s * e) > 100 && (r = 100), n && e === h && r > 10 && (r = 10), r < 6 && (r = 6), r;
    }function v(t, e, n) {
      return n ? Math.round(100 * t.v) + c * e : Math.round(100 * t.v) - f * e;
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.presetPrimaryColors = e.presetPalettes = e.generate = void 0;var r,
        i = n(226),
        o = (r = i) && r.__esModule ? r : { default: r };var a = { red: "#F5222D", volcano: "#FA541C", orange: "#FA8C16", gold: "#FAAD14", yellow: "#FADB14", lime: "#A0D911", green: "#52C41A", cyan: "#13C2C2", blue: "#1890FF", geekblue: "#2F54EB", purple: "#722ED1", magenta: "#EB2F96" },
        u = {};Object.keys(a).forEach(function (t) {
      u[t] = (0, o.default)(a[t]);
    }), e.generate = o.default, e.presetPalettes = u, e.presetPrimaryColors = a;
  }, function (t, e, n) {
    var r = n(182),
        i = n(30),
        o = { getNineBoxPosition: function getNineBoxPosition(t, e, n, r, i) {
        var o = {};switch (t) {case "tl":
            o.y = e.x + i[0], o.x = e.y + i[3];break;case "lc":
            o.y = (e.height - r) / 2, o.x = i[3];break;case "bl":
            o.y = e.height - r - i[2], o.x = i[3];break;case "cc":
            o.y = (e.height - r) / 2, o.x = (e.width - n) / 2;break;case "tc":
            o.y = i[0], o.x = (e.width - n) / 2;break;case "tr":
            o.y = i[0], o.x = e.width - n - i[1];break;case "rc":
            o.y = (e.height - r) / 2, o.x = e.width - n - i[1];break;case "br":
            o.y = e.height - r - i[2], o.x = e.width - n - i[1];break;case "bc":
            o.y = e.height - r - i[2], o.x = (e.width - n) / 2;break;default:
            o.y = e.x + i[0], o.x = e.y + i[3];}return o.x += e.x, o.y += e.y, o;
      }, getTotalBBox: function getTotalBBox(t) {
        var e = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;return t.forEach(function (t) {
          t.minX < e && (e = t.minX), t.maxX > n && (n = t.maxX), t.minY < r && (r = t.minY), t.maxY > i && (i = t.maxY);
        }), { minX: e, minY: r, maxX: n, maxY: i, width: n - e, height: i - r };
      }, getChildrenBBox: function getChildrenBBox(t) {
        var e = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            a = -1 / 0;i.each(t, function (t) {
          var i = t.isGroup ? o.getChildrenBBox(t.get("children")) : t.getBBox();if (!i) return !0;var u = [i.minX, i.minY, 1],
              s = [i.minX, i.maxY, 1],
              c = [i.maxX, i.minY, 1],
              f = [i.maxX, i.maxY, 1];t.apply(u), t.apply(s), t.apply(c), t.apply(f);var h = Math.min(u[0], s[0], c[0], f[0]),
              l = Math.max(u[0], s[0], c[0], f[0]),
              p = Math.min(u[1], s[1], c[1], f[1]),
              d = Math.max(u[1], s[1], c[1], f[1]);h < e && (e = h), l > n && (n = l), p < r && (r = p), d > a && (a = d);
        });var u = { minX: e, minY: r, maxX: n, maxY: a };return u.x = u.minX, u.y = u.minY, u.width = u.maxX - u.minX, u.height = u.maxY - u.minY, u.centerX = (u.minX + u.maxX) / 2, u.centerY = (u.minY + u.maxY) / 2, u;
      }, getBBox: function getBBox(t, e) {
        var n = t.getBBox(),
            i = { x: n.minX, y: n.minY },
            o = { x: n.maxX, y: n.maxY },
            a = void 0;if (e.isGroup) {
          for (a = t; a !== e;) {
            var u = a.getMatrix();i = r.applyMatrix(i, u), o = r.applyMatrix(o, u), a = a.getParent();
          }var s = a.getMatrix();i = r.applyMatrix(i, s), o = r.applyMatrix(o, s);
        } else i = r.applyMatrix(i, e), o = r.applyMatrix(o, e);return { minX: i.x, minY: i.y, maxX: o.x, maxY: o.y };
      }, toBack: function toBack(t, e) {
        !e && (e = t.getParent());var n = e.get("children");i.Array.remove(n, t), n.unshift(t);
      }, toFront: function toFront(t, e) {
        !e && (e = t.getParent());var n = e.get("children");i.Array.remove(n, t), n.push(t);
      }, Palettes: n(227) };t.exports = o;
  }, function (t, e, n) {
    var r = n(30),
        i = n(138),
        o = n(16).Canvas;t.exports = { isNode: function isNode(t) {
        return t && r.isObject(t) && "node" === t.type;
      }, isEdge: function isEdge(t) {
        return t && r.isObject(t) && "edge" === t.type;
      }, isGroup: function isGroup(t) {
        return t && r.isObject(t) && "group" === t.type;
      }, graph2Canvas: function graph2Canvas(t) {
        var e = t = r.mix({ graph: null, width: null, height: null, canvas: null, minMaxZoom: 1 / 0, minMinZoom: 0, pixelRatio: 2, beforeTransform: function beforeTransform() {}, afterTransform: function afterTransform() {} }, t),
            n = e.graph,
            a = e.width,
            u = e.height,
            s = e.canvas,
            c = e.minMaxZoom,
            f = e.minMinZoom,
            h = e.pixelRatio,
            l = e.beforeTransform,
            p = e.afterTransform,
            d = n.getCanvas(),
            v = void 0;if (!s) {
          var g = i.createDOM("<canvas></canvas>");v = h / d.get("pixelRatio"), d.scale(v, v), s = new o({ containerDOM: g, width: a * v, height: u * v });
        }var y = s.get("context"),
            m = d.get("context"),
            x = n.get("width"),
            b = n.get("height"),
            _ = r.cloneDeep(n.getMatrix()),
            w = n.get("maxZoom"),
            M = n.get("minZoom"),
            S = n._events;return n.set("maxZoom", c), n.set("minZoom", f), n.set("width", a), n.set("height", u), n._events = [], n.getItems().length > 0 && (l(n), d.set("context", y), n.autoZoom(), s.matrix = r.cloneDeep(n.getMatrix())), d.beforeDraw(), d.constructor.superclass.draw.call(d, y), d.set("context", m), n.set("width", x), n.set("height", b), n.set("maxZoom", w), n.set("minZoom", M), n.updateMatrix(_), v && (p(n), d.scale(1 / v, 1 / v)), n._events = S, d.beforeDraw(), d.constructor.superclass.draw.call(d, m), s.get("el");
      } };
  }, function (t, e, n) {
    var r = n(16),
        i = {};n(30).mix(i, r.PathUtil, { getRectPath: r.PathUtil.rectPath, pointsToPolygon: function pointsToPolygon(t) {
        for (var e = [["M", t[0].x, t[0].y]], n = 1; n < t.length; n++) {
          var r = t[n];e.push(["L", r.x, r.y]);
        }return e;
      }, getEllipsePath: function getEllipsePath(t, e, n, r) {
        return [["M", t, e - r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
      } }), t.exports = i;
  }, function (t, e, n) {
    var r = n(139);t.exports = function (t) {
      return t && t.length ? r(t) : [];
    };
  }, function (t, e) {
    t.exports = function () {};
  }, function (t, e, n) {
    var r = n(172),
        i = n(232),
        o = n(56),
        a = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function (t) {
      return new r(t);
    } : i;t.exports = a;
  }, function (t, e) {
    t.exports = function (t, e, n) {
      for (var r = -1, i = null == t ? 0 : t.length; ++r < i;) {
        if (n(e, t[r])) return !0;
      }return !1;
    };
  }, function (t, e, n) {
    var r = n(165);t.exports = function (t, e) {
      return !(null == t || !t.length) && r(t, e, 0) > -1;
    };
  }, function (t, e, n) {
    var r = n(25),
        i = n(44),
        o = n(13),
        a = r ? r.isConcatSpreadable : void 0;t.exports = function (t) {
      return o(t) || i(t) || !!(a && t && t[a]);
    };
  }, function (t, e, n) {
    var r = n(121),
        i = n(236);t.exports = function t(e, n, o, a, u) {
      var s = -1,
          c = e.length;for (o || (o = i), u || (u = []); ++s < c;) {
        var f = e[s];n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f);
      }return u;
    };
  }, function (t, e, n) {
    var r = n(237),
        i = n(148),
        o = n(139),
        a = n(150),
        u = i(function (t) {
      return o(r(t, 1, a, !0));
    });t.exports = u;
  }, function (t, e, n) {
    var r = n(27);t.exports = function () {
      var t = arguments,
          e = r(t[0]);return t.length < 3 ? e : e.replace(t[1], t[2]);
    };
  }, function (t, e, n) {
    var r = n(49);t.exports = function (t, e) {
      return r(t, e);
    };
  }, function (t, e, n) {
    var r = n(49);t.exports = function (t, e, n) {
      var i = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0;return void 0 === i ? r(t, e, void 0, n) : !!i;
    };
  }, function (t, e, n) {
    var r = n(17);t.exports = function () {
      return r.Date.now();
    };
  }, function (t, e, n) {
    var r = n(140),
        i = n(14),
        o = "Expected a function";t.exports = function (t, e, n) {
      var a = !0,
          u = !0;if ("function" != typeof t) throw new TypeError(o);return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, { leading: a, maxWait: e, trailing: u });
    };
  }, function (t, e, n) {
    var r = n(142);t.exports = function (t) {
      return function (e) {
        return r(e, t);
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  }, function (t, e, n) {
    var r = n(245),
        i = n(244),
        o = n(119),
        a = n(48);t.exports = function (t) {
      return o(t) ? r(a(t)) : i(t);
    };
  }, function (t, e, n) {
    var r = n(141),
        i = n(44),
        o = n(13),
        a = n(132),
        u = n(131),
        s = n(48);t.exports = function (t, e, n) {
      for (var c = -1, f = (e = r(e, t)).length, h = !1; ++c < f;) {
        var l = s(e[c]);if (!(h = null != t && n(t, l))) break;t = t[l];
      }return h || ++c != f ? h : !!(f = null == t ? 0 : t.length) && u(f) && a(l, f) && (o(t) || i(t));
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  }, function (t, e, n) {
    var r = n(248),
        i = n(247);t.exports = function (t, e) {
      return null != t && i(t, e, r);
    };
  }, function (t, e, n) {
    var r = n(124),
        i = "Expected a function";function o(t, e) {
      if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);var n = function n() {
        var r = arguments,
            i = e ? e.apply(this, r) : r[0],
            o = n.cache;if (o.has(i)) return o.get(i);var a = t.apply(this, r);return n.cache = o.set(i, a) || o, a;
      };return n.cache = new (o.Cache || r)(), n;
    }o.Cache = r, t.exports = o;
  }, function (t, e, n) {
    var r = n(250),
        i = 500;t.exports = function (t) {
      var e = r(t, function (t) {
        return n.size === i && n.clear(), t;
      }),
          n = e.cache;return e;
    };
  }, function (t, e, n) {
    var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        o = n(251)(function (t) {
      var e = [];return 46 === t.charCodeAt(0) && e.push(""), t.replace(r, function (t, n, r, o) {
        e.push(r ? o.replace(i, "$1") : n || t);
      }), e;
    });t.exports = o;
  }, function (t, e, n) {
    var r = n(142);t.exports = function (t, e, n) {
      var i = null == t ? void 0 : r(t, e);return void 0 === i ? n : i;
    };
  }, function (t, e, n) {
    var r = n(49),
        i = n(253),
        o = n(249),
        a = n(119),
        u = n(144),
        s = n(143),
        c = n(48),
        f = 1,
        h = 2;t.exports = function (t, e) {
      return a(t) && u(e) ? s(c(t), e) : function (n) {
        var a = i(n, t);return void 0 === a && a === e ? o(n, t) : r(e, a, f | h);
      };
    };
  }, function (t, e, n) {
    var r = n(144),
        i = n(29);t.exports = function (t) {
      for (var e = i(t), n = e.length; n--;) {
        var o = e[n],
            a = t[o];e[n] = [o, a, r(a)];
      }return e;
    };
  }, function (t, e, n) {
    var r = n(156),
        i = 1,
        o = Object.prototype.hasOwnProperty;t.exports = function (t, e, n, a, u, s) {
      var c = n & i,
          f = r(t),
          h = f.length;if (h != r(e).length && !c) return !1;for (var l = h; l--;) {
        var p = f[l];if (!(c ? p in e : o.call(e, p))) return !1;
      }var d = s.get(t);if (d && s.get(e)) return d == e;var v = !0;s.set(t, e), s.set(e, t);for (var g = c; ++l < h;) {
        var y = t[p = f[l]],
            m = e[p];if (a) var x = c ? a(m, y, p, e, t, s) : a(y, m, p, t, e, s);if (!(void 0 === x ? y === m || u(y, m, n, a, s) : x)) {
          v = !1;break;
        }g || (g = "constructor" == p);
      }if (v && !g) {
        var b = t.constructor,
            _ = e.constructor;b != _ && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (v = !1);
      }return s.delete(t), s.delete(e), v;
    };
  }, function (t, e, n) {
    var r = n(25),
        i = n(154),
        o = n(41),
        a = n(147),
        u = n(166),
        s = n(56),
        c = 1,
        f = 2,
        h = "[object Boolean]",
        l = "[object Date]",
        p = "[object Error]",
        d = "[object Map]",
        v = "[object Number]",
        g = "[object RegExp]",
        y = "[object Set]",
        m = "[object String]",
        x = "[object Symbol]",
        b = "[object ArrayBuffer]",
        _ = "[object DataView]",
        w = r ? r.prototype : void 0,
        M = w ? w.valueOf : void 0;t.exports = function (t, e, n, r, w, S, E) {
      switch (n) {case _:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case b:
          return !(t.byteLength != e.byteLength || !S(new i(t), new i(e)));case h:case l:case v:
          return o(+t, +e);case p:
          return t.name == e.name && t.message == e.message;case g:case m:
          return t == e + "";case d:
          var j = u;case y:
          var A = r & c;if (j || (j = s), t.size != e.size && !A) return !1;var O = E.get(t);if (O) return O == e;r |= f, E.set(t, e);var P = a(j(t), j(e), r, w, S, E);return E.delete(t), P;case x:
          if (M) return M.call(t) == M.call(e);}return !1;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
        if (e(t[n], n, t)) return !0;
      }return !1;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  }, function (t, e) {
    var n = "__lodash_hash_undefined__";t.exports = function (t) {
      return this.__data__.set(t, n), this;
    };
  }, function (t, e, n) {
    var r = n(55),
        i = n(147),
        o = n(257),
        a = n(256),
        u = n(28),
        s = n(13),
        c = n(42),
        f = n(61),
        h = 1,
        l = "[object Arguments]",
        p = "[object Array]",
        d = "[object Object]",
        v = Object.prototype.hasOwnProperty;t.exports = function (t, e, n, g, y, m) {
      var x = s(t),
          b = s(e),
          _ = x ? p : u(t),
          w = b ? p : u(e),
          M = (_ = _ == l ? d : _) == d,
          S = (w = w == l ? d : w) == d,
          E = _ == w;if (E && c(t)) {
        if (!c(e)) return !1;x = !0, M = !1;
      }if (E && !M) return m || (m = new r()), x || f(t) ? i(t, e, n, g, y, m) : o(t, e, _, n, g, y, m);if (!(n & h)) {
        var j = M && v.call(t, "__wrapped__"),
            A = S && v.call(e, "__wrapped__");if (j || A) {
          var O = j ? t.value() : t,
              P = A ? e.value() : e;return m || (m = new r()), y(O, P, n, g, m);
        }
      }return !!E && (m || (m = new r()), a(t, e, n, g, y, m));
    };
  }, function (t, e, n) {
    var r = n(55),
        i = n(49),
        o = 1,
        a = 2;t.exports = function (t, e, n, u) {
      var s = n.length,
          c = s,
          f = !u;if (null == t) return !c;for (t = Object(t); s--;) {
        var h = n[s];if (f && h[2] ? h[1] !== t[h[0]] : !(h[0] in t)) return !1;
      }for (; ++s < c;) {
        var l = (h = n[s])[0],
            p = t[l],
            d = h[1];if (f && h[2]) {
          if (void 0 === p && !(l in t)) return !1;
        } else {
          var v = new r();if (u) var g = u(p, d, l, t, e, v);if (!(void 0 === g ? i(d, p, o | a, u, v) : g)) return !1;
        }
      }return !0;
    };
  }, function (t, e, n) {
    var r = n(262),
        i = n(255),
        o = n(143);t.exports = function (t) {
      var e = i(t);return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
        return n === t || r(n, t, e);
      };
    };
  }, function (t, e, n) {
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        i = n(263),
        o = n(254),
        a = n(58),
        u = n(13),
        s = n(246);t.exports = function (t) {
      return "function" == typeof t ? t : null == t ? a : "object" == (void 0 === t ? "undefined" : r(t)) ? u(t) ? o(t[0], t[1]) : i(t) : s(t);
    };
  }, function (t, e, n) {
    var r = n(180);t.exports = function (t, e) {
      var n = [];return r(t, function (t, r, i) {
        e(t, r, i) && n.push(t);
      }), n;
    };
  }, function (t, e, n) {
    var r = n(159),
        i = n(265),
        o = n(264),
        a = n(13);t.exports = function (t, e) {
      return (a(t) ? r : i)(t, o(e, 3));
    };
  }, function (t, e, n) {
    var r = n(164),
        i = n(125),
        o = n(27),
        a = Math.min;t.exports = function (t) {
      var e = Math[t];return function (t, n) {
        if (t = i(t), n = null == n ? 0 : a(r(n), 292)) {
          var u = (o(t) + "e").split("e"),
              s = e(u[0] + "e" + (+u[1] + n));return +((u = (o(s) + "e").split("e"))[0] + "e" + (+u[1] - n));
        }return e(t);
      };
    };
  }, function (t, e, n) {
    var r = n(267)("round");t.exports = r;
  }, function (t, e, n) {
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        i = n(41),
        o = n(24),
        a = n(132),
        u = n(14);t.exports = function (t, e, n) {
      if (!u(n)) return !1;var s = void 0 === e ? "undefined" : r(e);return !!("number" == s ? o(n) && a(e, n.length) : "string" == s && e in n) && i(n[e], t);
    };
  }, function (t, e) {
    var n = 800,
        r = 16,
        i = Date.now;t.exports = function (t) {
      var e = 0,
          o = 0;return function () {
        var a = i(),
            u = r - (a - o);if (o = a, u > 0) {
          if (++e >= n) return arguments[0];
        } else e = 0;return t.apply(void 0, arguments);
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      return function () {
        return t;
      };
    };
  }, function (t, e, n) {
    var r = n(271),
        i = n(161),
        o = n(58),
        a = i ? function (t, e) {
      return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 });
    } : o;t.exports = a;
  }, function (t, e, n) {
    var r = n(272),
        i = n(270)(r);t.exports = i;
  }, function (t, e) {
    t.exports = function (t, e, n) {
      switch (n.length) {case 0:
          return t.call(e);case 1:
          return t.call(e, n[0]);case 2:
          return t.call(e, n[0], n[1]);case 3:
          return t.call(e, n[0], n[1], n[2]);}return t.apply(e, n);
    };
  }, function (t, e, n) {
    var r = n(274),
        i = Math.max;t.exports = function (t, e, n) {
      return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
        for (var o = arguments, a = -1, u = i(o.length - e, 0), s = Array(u); ++a < u;) {
          s[a] = o[e + a];
        }a = -1;for (var c = Array(e + 1); ++a < e;) {
          c[a] = o[a];
        }return c[e] = n(s), r(t, this, c);
      };
    };
  }, function (t, e, n) {
    var r = n(148),
        i = n(269);t.exports = function (t) {
      return r(function (e, n) {
        var r = -1,
            o = n.length,
            a = o > 1 ? n[o - 1] : void 0,
            u = o > 2 ? n[2] : void 0;for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, u && i(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;) {
          var s = n[r];s && t(e, s, r, a);
        }return e;
      });
    };
  }, function (t, e, n) {
    var r = n(40),
        i = n(50);t.exports = function (t) {
      return r(t, i(t));
    };
  }, function (t, e, n) {
    var r = n(151),
        i = n(160),
        o = n(153),
        a = n(126),
        u = n(152),
        s = n(44),
        c = n(13),
        f = n(150),
        h = n(42),
        l = n(59),
        p = n(14),
        d = n(167),
        v = n(61),
        g = n(149),
        y = n(277);t.exports = function (t, e, n, m, x, b, _) {
      var w = g(t, n),
          M = g(e, n),
          S = _.get(M);if (S) r(t, n, S);else {
        var E = b ? b(w, M, n + "", t, e, _) : void 0,
            j = void 0 === E;if (j) {
          var A = c(M),
              O = !A && h(M),
              P = !A && !O && v(M);E = M, A || O || P ? c(w) ? E = w : f(w) ? E = a(w) : O ? (j = !1, E = i(M, !0)) : P ? (j = !1, E = o(M, !0)) : E = [] : d(M) || s(M) ? (E = w, s(w) ? E = y(w) : (!p(w) || m && l(w)) && (E = u(M))) : j = !1;
        }j && (_.set(M, E), x(E, M, m, b, _), _.delete(M)), r(t, n, E);
      }
    };
  }, function (t, e, n) {
    var r = n(55),
        i = n(151),
        o = n(179),
        a = n(278),
        u = n(14),
        s = n(50),
        c = n(149);t.exports = function t(e, n, f, h, l) {
      e !== n && o(n, function (o, s) {
        if (u(o)) l || (l = new r()), a(e, n, s, f, t, h, l);else {
          var p = h ? h(c(e, s), o, s + "", e, n, l) : void 0;void 0 === p && (p = o), i(e, s, p);
        }
      }, s);
    };
  }, function (t, e, n) {
    var r = n(279),
        i = n(276)(function (t, e, n) {
      r(t, e, n);
    });t.exports = i;
  }, function (t, e, n) {
    var r = n(163),
        i = 1,
        o = 4;t.exports = function (t) {
      return r(t, i | o);
    };
  }, function (t, e, n) {
    var r = n(28),
        i = n(15),
        o = "[object Set]";t.exports = function (t) {
      return i(t) && r(t) == o;
    };
  }, function (t, e, n) {
    var r = n(282),
        i = n(130),
        o = n(129),
        a = o && o.isSet,
        u = a ? i(a) : r;t.exports = u;
  }, function (t, e, n) {
    var r = n(28),
        i = n(15),
        o = "[object Map]";t.exports = function (t) {
      return i(t) && r(t) == o;
    };
  }, function (t, e, n) {
    var r = n(284),
        i = n(130),
        o = n(129),
        a = o && o.isMap,
        u = a ? i(a) : r;t.exports = u;
  }, function (t, e, n) {
    var r = n(14),
        i = Object.create,
        o = function () {
      function t() {}return function (e) {
        if (!r(e)) return {};if (i) return i(e);t.prototype = e;var n = new t();return t.prototype = void 0, n;
      };
    }();t.exports = o;
  }, function (t, e, n) {
    var r = n(25),
        i = r ? r.prototype : void 0,
        o = i ? i.valueOf : void 0;t.exports = function (t) {
      return o ? Object(o.call(t)) : {};
    };
  }, function (t, e) {
    var n = /\w*$/;t.exports = function (t) {
      var e = new t.constructor(t.source, n.exec(t));return e.lastIndex = t.lastIndex, e;
    };
  }, function (t, e, n) {
    var r = n(120);t.exports = function (t, e) {
      var n = e ? r(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.byteLength);
    };
  }, function (t, e, n) {
    var r = n(120),
        i = n(289),
        o = n(288),
        a = n(287),
        u = n(153),
        s = "[object Boolean]",
        c = "[object Date]",
        f = "[object Map]",
        h = "[object Number]",
        l = "[object RegExp]",
        p = "[object Set]",
        d = "[object String]",
        v = "[object Symbol]",
        g = "[object ArrayBuffer]",
        y = "[object DataView]",
        m = "[object Float32Array]",
        x = "[object Float64Array]",
        b = "[object Int8Array]",
        _ = "[object Int16Array]",
        w = "[object Int32Array]",
        M = "[object Uint8Array]",
        S = "[object Uint8ClampedArray]",
        E = "[object Uint16Array]",
        j = "[object Uint32Array]";t.exports = function (t, e, n) {
      var A = t.constructor;switch (e) {case g:
          return r(t);case s:case c:
          return new A(+t);case y:
          return i(t, n);case m:case x:case b:case _:case w:case M:case S:case E:case j:
          return u(t, n);case f:
          return new A();case h:case d:
          return new A(t);case l:
          return o(t);case p:
          return new A();case v:
          return a(t);}
    };
  }, function (t, e) {
    var n = Object.prototype.hasOwnProperty;t.exports = function (t) {
      var e = t.length,
          r = new t.constructor(e);return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r;
    };
  }, function (t, e, n) {
    var r = n(155),
        i = n(157),
        o = n(50);t.exports = function (t) {
      return r(t, o, i);
    };
  }, function (t, e, n) {
    var r = n(40),
        i = n(157);t.exports = function (t, e) {
      return r(t, i(t), e);
    };
  }, function (t, e, n) {
    var r = n(40),
        i = n(122);t.exports = function (t, e) {
      return r(t, i(t), e);
    };
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];if (null != t) for (var n in Object(t)) {
        e.push(n);
      }return e;
    };
  }, function (t, e, n) {
    var r = n(14),
        i = n(60),
        o = n(295),
        a = Object.prototype.hasOwnProperty;t.exports = function (t) {
      if (!r(t)) return o(t);var e = i(t),
          n = [];for (var u in t) {
        ("constructor" != u || !e && a.call(t, u)) && n.push(u);
      }return n;
    };
  }, function (t, e, n) {
    var r = n(40),
        i = n(50);t.exports = function (t, e) {
      return t && r(e, i(e), t);
    };
  }, function (t, e, n) {
    var r = n(40),
        i = n(29);t.exports = function (t, e) {
      return t && r(e, i(e), t);
    };
  }, function (t, e, n) {
    var r = n(51);t.exports = function (t, e) {
      var n = r(this, t),
          i = n.size;return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
    };
  }, function (t, e, n) {
    var r = n(51);t.exports = function (t) {
      return r(this, t).has(t);
    };
  }, function (t, e, n) {
    var r = n(51);t.exports = function (t) {
      return r(this, t).get(t);
    };
  }, function (t, e) {
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };t.exports = function (t) {
      var e = void 0 === t ? "undefined" : n(t);return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
    };
  }, function (t, e, n) {
    var r = n(51);t.exports = function (t) {
      var e = r(this, t).delete(t);return this.size -= e ? 1 : 0, e;
    };
  }, function (t, e, n) {
    var r = n(52),
        i = "__lodash_hash_undefined__";t.exports = function (t, e) {
      var n = this.__data__;return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this;
    };
  }, function (t, e, n) {
    var r = n(52),
        i = Object.prototype.hasOwnProperty;t.exports = function (t) {
      var e = this.__data__;return r ? void 0 !== e[t] : i.call(e, t);
    };
  }, function (t, e, n) {
    var r = n(52),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;t.exports = function (t) {
      var e = this.__data__;if (r) {
        var n = e[t];return n === i ? void 0 : n;
      }return o.call(e, t) ? e[t] : void 0;
    };
  }, function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];return this.size -= e ? 1 : 0, e;
    };
  }, function (t, e, n) {
    var r = n(52);t.exports = function () {
      this.__data__ = r ? r(null) : {}, this.size = 0;
    };
  }, function (t, e, n) {
    var r = n(308),
        i = n(307),
        o = n(306),
        a = n(305),
        u = n(304);function s(t) {
      var e = -1,
          n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
        var r = t[e];this.set(r[0], r[1]);
      }
    }s.prototype.clear = r, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = u, t.exports = s;
  }, function (t, e, n) {
    var r = n(309),
        i = n(54),
        o = n(128);t.exports = function () {
      this.size = 0, this.__data__ = { hash: new r(), map: new (o || i)(), string: new r() };
    };
  }, function (t, e, n) {
    var r = n(54),
        i = n(128),
        o = n(124),
        a = 200;t.exports = function (t, e) {
      var n = this.__data__;if (n instanceof r) {
        var u = n.__data__;if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;n = this.__data__ = new o(u);
      }return n.set(t, e), this.size = n.size, this;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  }, function (t, e) {
    t.exports = function (t) {
      return this.__data__.get(t);
    };
  }, function (t, e) {
    t.exports = function (t) {
      var e = this.__data__,
          n = e.delete(t);return this.size = e.size, n;
    };
  }, function (t, e, n) {
    var r = n(54);t.exports = function () {
      this.__data__ = new r(), this.size = 0;
    };
  }, function (t, e, n) {
    var r = n(53);t.exports = function (t, e) {
      var n = this.__data__,
          i = r(n, t);return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
    };
  }, function (t, e, n) {
    var r = n(53);t.exports = function (t) {
      return r(this.__data__, t) > -1;
    };
  }, function (t, e, n) {
    var r = n(53);t.exports = function (t) {
      var e = this.__data__,
          n = r(e, t);return n < 0 ? void 0 : e[n][1];
    };
  }, function (t, e, n) {
    var r = n(53),
        i = Array.prototype.splice;t.exports = function (t) {
      var e = this.__data__,
          n = r(e, t);return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
    };
  }, function (t, e) {
    t.exports = function () {
      this.__data__ = [], this.size = 0;
    };
  }, function (t, e, n) {
    var r = n(163),
        i = 4;t.exports = function (t) {
      return r(t, i);
    };
  }, function (t, e, n) {
    var r = n(125),
        i = 1 / 0,
        o = 1.7976931348623157e308;t.exports = function (t) {
      return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0;
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      for (var r = n - 1, i = t.length; ++r < i;) {
        if (t[r] === e) return r;
      }return -1;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return t != t;
    };
  }, function (t, e) {
    t.exports = function (t, e, n, r) {
      for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {
        if (e(t[o], o, t)) return o;
      }return -1;
    };
  }, function (t, e, n) {
    var r = n(165),
        i = n(164),
        o = Math.max;t.exports = function (t, e, n) {
      var a = null == t ? 0 : t.length;if (!a) return -1;var u = null == n ? 0 : i(n);return u < 0 && (u = o(a + u, 0)), r(t, e, u);
    };
  }, function (t, e, n) {
    var r = n(168);t.exports = function (t, e) {
      return r(e, function (e) {
        return t[e];
      });
    };
  }, function (t, e, n) {
    var r = n(327),
        i = n(29);t.exports = function (t) {
      return null == t ? [] : r(t, i(t));
    };
  }, function (t, e) {
    t.exports = function (t) {
      for (var e, n = []; !(e = t.next()).done;) {
        n.push(e.value);
      }return n;
    };
  }, function (t, e, n) {
    var r = n(25),
        i = n(126),
        o = n(28),
        a = n(24),
        u = n(174),
        s = n(329),
        c = n(166),
        f = n(56),
        h = n(169),
        l = n(328),
        p = "[object Map]",
        d = "[object Set]",
        v = r ? r.iterator : void 0;t.exports = function (t) {
      if (!t) return [];if (a(t)) return u(t) ? h(t) : i(t);if (v && t[v]) return s(t[v]());var e = o(t);return (e == p ? c : e == d ? f : l)(t);
    };
  }, function (t, e) {
    t.exports = function (t) {
      return null == t;
    };
  }, function (t, e) {
    var n = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        r = "[" + n + "]",
        i = "\\d+",
        o = "[\\u2700-\\u27bf]",
        a = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
        u = "[^\\ud800-\\udfff" + n + i + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
        s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        f = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
        h = "(?:" + a + "|" + u + ")",
        l = "(?:" + f + "|" + u + ")",
        p = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
        d = "[\\ufe0e\\ufe0f]?" + p + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", s, c].join("|") + ")[\\ufe0e\\ufe0f]?" + p + ")*"),
        v = "(?:" + [o, s, c].join("|") + ")" + d,
        g = RegExp([f + "?" + a + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [r, f, "$"].join("|") + ")", l + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [r, f + h, "$"].join("|") + ")", f + "?" + h + "+(?:['’](?:d|ll|m|re|s|t|ve))?", f + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", i, v].join("|"), "g");t.exports = function (t) {
      return t.match(g) || [];
    };
  }, function (t, e) {
    var n = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports = function (t) {
      return n.test(t);
    };
  }, function (t, e) {
    var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports = function (t) {
      return t.match(n) || [];
    };
  }, function (t, e, n) {
    var r = n(334),
        i = n(333),
        o = n(27),
        a = n(332);t.exports = function (t, e, n) {
      return t = o(t), void 0 === (e = n ? void 0 : e) ? i(t) ? a(t) : r(t) : t.match(e) || [];
    };
  }, function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == t ? void 0 : t[e];
      };
    };
  }, function (t, e, n) {
    var r = n(336)({ "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" });t.exports = r;
  }, function (t, e, n) {
    var r = n(337),
        i = n(27),
        o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");t.exports = function (t) {
      return (t = i(t)) && t.replace(o, r).replace(a, "");
    };
  }, function (t, e) {
    t.exports = function (t, e, n, r) {
      var i = -1,
          o = null == t ? 0 : t.length;for (r && o && (n = t[++i]); ++i < o;) {
        n = e(n, t[i], i, t);
      }return n;
    };
  }, function (t, e, n) {
    var r = n(339),
        i = n(338),
        o = n(335),
        a = RegExp("['’]", "g");t.exports = function (t) {
      return function (e) {
        return r(o(i(e).replace(a, "")), t, "");
      };
    };
  }, function (t, e, n) {
    var r = n(340)(function (t, e, n) {
      return t + (n ? " " : "") + e.toUpperCase();
    });t.exports = r;
  }, function (t, e, n) {
    var r = n(171)("toUpperCase");t.exports = r;
  }, function (t, e, n) {
    var r = n(25),
        i = n(168),
        o = n(13),
        a = n(57),
        u = 1 / 0,
        s = r ? r.prototype : void 0,
        c = s ? s.toString : void 0;t.exports = function t(e) {
      if ("string" == typeof e) return e;if (o(e)) return i(e, t) + "";if (a(e)) return c ? c.call(e) : "";var n = e + "";return "0" == n && 1 / e == -u ? "-0" : n;
    };
  }, function (t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        s = "(?:" + r + "|" + i + ")" + "?",
        c = "[\\ufe0e\\ufe0f]?" + s + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + s + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        h = RegExp(i + "(?=" + i + ")|" + f + c, "g");t.exports = function (t) {
      return t.match(h) || [];
    };
  }, function (t, e) {
    t.exports = function (t) {
      return t.split("");
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      var r = -1,
          i = t.length;e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;for (var o = Array(i); ++r < i;) {
        o[r] = t[r + e];
      }return o;
    };
  }, function (t, e, n) {
    var r = n(346);t.exports = function (t, e, n) {
      var i = t.length;return n = void 0 === n ? i : n, !e && n >= i ? t : r(t, e, n);
    };
  }, function (t, e, n) {
    var r = n(171)("toLowerCase");t.exports = r;
  }, function (t, e, n) {
    var r = n(23)(n(17), "WeakMap");t.exports = r;
  }, function (t, e, n) {
    var r = n(23)(n(17), "Promise");t.exports = r;
  }, function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  }, function (t, e, n) {
    var r = n(17)["__core-js_shared__"];t.exports = r;
  }, function (t, e, n) {
    var r,
        i = n(352),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";t.exports = function (t) {
      return !!o && o in t;
    };
  }, function (t, e, n) {
    var r = n(59),
        i = n(353),
        o = n(14),
        a = n(173),
        u = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        c = Object.prototype,
        f = s.toString,
        h = c.hasOwnProperty,
        l = RegExp("^" + f.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");t.exports = function (t) {
      return !(!o(t) || i(t)) && (r(t) ? l : u).test(a(t));
    };
  }, function (t, e, n) {
    var r = n(23)(n(17), "DataView");t.exports = r;
  }, function (t, e, n) {
    var r = n(176),
        i = n(28),
        o = n(44),
        a = n(13),
        u = n(24),
        s = n(42),
        c = n(60),
        f = n(61),
        h = "[object Map]",
        l = "[object Set]",
        p = Object.prototype.hasOwnProperty;t.exports = function (t) {
      if (null == t) return !0;if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || s(t) || f(t) || o(t))) return !t.length;var e = i(t);if (e == h || e == l) return !t.size;if (c(t)) return !r(t).length;for (var n in t) {
        if (p.call(t, n)) return !1;
      }return !0;
    };
  }, function (t, e, n) {
    var r = n(19),
        i = n(15),
        o = "[object Boolean]";t.exports = function (t) {
      return !0 === t || !1 === t || i(t) && r(t) == o;
    };
  }, function (t, e, n) {
    var r = n(19),
        i = n(15),
        o = "[object Number]";t.exports = function (t) {
      return "number" == typeof t || i(t) && r(t) == o;
    };
  }, function (t, e, n) {
    var r = n(58);t.exports = function (t) {
      return "function" == typeof t ? t : r;
    };
  }, function (t, e, n) {
    var r = n(24);t.exports = function (t, e) {
      return function (n, i) {
        if (null == n) return n;if (!r(n)) return t(n, i);for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);) {}return n;
      };
    };
  }, function (t, e, n) {
    var r = n(175)(Object.keys, Object);t.exports = r;
  }, function (t, e, n) {
    var r = n(19),
        i = n(131),
        o = n(15),
        a = {};a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
      return o(t) && i(t.length) && !!a[r(t)];
    };
  }, function (t, e) {
    t.exports = function () {
      return !1;
    };
  }, function (t, e) {
    var n = Object.prototype.toString;t.exports = function (t) {
      return n.call(t);
    };
  }, function (t, e, n) {
    var r = n(25),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;t.exports = function (t) {
      var e = o.call(t, u),
          n = t[u];try {
        t[u] = void 0;var r = !0;
      } catch (t) {}var i = a.call(t);return r && (e ? t[u] = n : delete t[u]), i;
    };
  }, function (t, e, n) {
    var r = n(19),
        i = n(15),
        o = "[object Arguments]";t.exports = function (t) {
      return i(t) && r(t) == o;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = Array(t); ++n < t;) {
        r[n] = e(n);
      }return r;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return function (e, n, r) {
        for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
          var s = a[t ? u : ++i];if (!1 === n(o[s], s, o)) break;
        }return e;
      };
    };
  }, function (t, e, n) {
    var r = n(179),
        i = n(29);t.exports = function (t, e) {
      return t && r(t, e, i);
    };
  }, function (t, e, n) {
    var r = n(181),
        i = n(180),
        o = n(359),
        a = n(13);t.exports = function (t, e) {
      return (a(t) ? r : i)(t, o(e));
    };
  }, function (t, e, n) {
    t.exports = n(370);
  }, function (t, e, n) {
    var r = n(183),
        i = n(137),
        o = n(22),
        a = { Graph: n(136), Tree: n(190), Util: n(8), Layouts: n(134), G: n(16), Global: o, Plugins: {}, Shape: r, registerNode: r.registerNode, registerEdge: r.registerEdge, registerGroup: r.registerGroup, registerGuide: r.registerGuide, registerBehaviour: i.registerBehaviour, version: o.version, track: function track(t) {
        o.trackable = t;
      } };n(185), t.exports = a;
  }]);
});
//# sourceMappingURL=g6.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../_webpack@4.10.2@webpack/buildin/module.js */ "./node_modules/_webpack@4.10.2@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/_webpack@4.10.2@webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./node_modules/_wolfy87-eventemitter@5.2.4@wolfy87-eventemitter/EventEmitter.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_wolfy87-eventemitter@5.2.4@wolfy87-eventemitter/EventEmitter.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * EventEmitter v5.2.4 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function (exports) {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */

    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        } else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    function isValidListener(listener) {
        if (typeof listener === 'function' || listener instanceof RegExp) {
            return true;
        } else if (listener && (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object') {
            return isValidListener(listener.listener);
        } else {
            return false;
        }
    }

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        if (!isValidListener(listener)) {
            throw new TypeError('listener must be a function');
        }

        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if ((typeof evt === 'undefined' ? 'undefined' : _typeof(evt)) === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    } else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        } else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt === 'undefined' ? 'undefined' : _typeof(evt);
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        } else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        } else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listenersMap = this.getListenersAsObject(evt);
        var listeners;
        var listener;
        var i;
        var key;
        var response;

        for (key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
                listeners = listenersMap[key].slice(0);

                for (i = 0; i < listeners.length; i++) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        } else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return EventEmitter;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(undefined || {});

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview
 * The base class for complex class
 * @author huangtonger@aliyun.com
 */

var EventEmitter = __webpack_require__(/*! wolfy87-eventemitter */ "./node_modules/_wolfy87-eventemitter@5.2.4@wolfy87-eventemitter/EventEmitter.js");
var Util = __webpack_require__(/*! ./util/ */ "./src/util/index.js");

var Base = function (_EventEmitter) {
  _inherits(Base, _EventEmitter);

  _createClass(Base, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {};
    }
  }]);

  function Base(cfg) {
    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this));

    var defaultCfg = _this.getDefaultCfg();
    _this._cfg = Util.mix(true, {}, _this._cfg, defaultCfg, cfg);
    return _this;
  }

  _createClass(Base, [{
    key: 'get',
    value: function get(name) {
      return this._cfg[name];
    }
  }, {
    key: 'set',
    value: function set(name, value) {
      this._cfg[name] = value;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._cfg = {};
      this.destroyed = true;
    }
  }]);

  return Base;
}(EventEmitter);

module.exports = Base;

/***/ }),

/***/ "./src/command/collapseExpand.js":
/*!***************************************!*\
  !*** ./src/command/collapseExpand.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Command = __webpack_require__(/*! ./command */ "./src/command/command.js");

// 展开折叠
Command.registerCommand('collapseExpand', {
  getItem: function getItem(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    if (this.itemId) {
      return graph.find(this.itemId);
    }
    return page.getSelected()[0];
  },
  enable: function enable(editor) {
    var item = this.getItem(editor);
    return item && item.collapseExpand !== false && item.getChildren().length > 0;
  },
  execute: function execute(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var item = this.getItem(editor);
    var selectedModel = item.getModel();
    if (selectedModel.collapsed) {
      graph.update(item, {
        collapsed: false
      });
      this.toCollapsed = false;
    } else {
      graph.update(item, {
        collapsed: true
      });
      this.toCollapsed = true;
    }
    page.clearSelected();
    page.setSelected(item, true);
    if (this.executeTimes === 1) {
      this.itemId = item.id;
    }
  },
  back: function back(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var item = this.getItem(editor);

    if (this.toCollapsed) {
      graph.update(item, {
        collapsed: false
      });
    } else {
      graph.update(item, {
        collapsed: true
      });
    }
    page.clearSelected();
    page.setSelected(item, true);
  },

  shortcutCodes: [['metaKey', '/'], ['ctrlKey', '/']]
});

Command.registerCommand('collapse', {
  enable: function enable(editor) {
    var item = this.getItem(editor);
    return item && item.collapseExpand !== false && item.getChildren().length > 0 && !item.getModel().collapsed;
  }
}, 'collapseExpand');

Command.registerCommand('expand', {
  enable: function enable(editor) {
    var item = this.getItem(editor);
    return item && item.collapseExpand !== false && item.getChildren().length > 0 && item.getModel().collapsed;
  }
}, 'collapseExpand');

/***/ }),

/***/ "./src/command/command.js":
/*!********************************!*\
  !*** ./src/command/command.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Command = {};

// 判断是否有子项被选中
function hasItemSelected(editor) {
  var page = editor.getCurrentPage();
  var items = page.getSelected();
  return items.length > 0;
}

// 执行命令前存储快照
function snapShotexecute(editor) {
  var page = editor.getCurrentPage();
  this.snapShot = page.save();
  this.selectedItems = page.getSelected().map(function (item) {
    return item.id;
  });
  if (this.method) {
    if (Util.isString(this.method)) {
      page[this.method]();
    } else {
      this.method(editor);
    }
  }
}

// 通过快照回滚
function snapShotBack(editor) {
  var page = editor.getCurrentPage();
  page.read(this.snapShot);
  page.setSelected(this.selectedItems, true);
}

// 变更模型判断是否可用
function changeModeEnable(editor) {
  var page = editor.getCurrentPage();
  return page.getMode() !== this.toMode;
}

// 切换模式类执行方法
function changeModeexecute(editor) {
  var page = editor.getCurrentPage();
  this.fromMode = page.getMode();
  page.changeMode(this.toMode);
}

// 模式回滚
function changeModeBack(editor) {
  var page = editor.getCurrentPage();
  page.changeMode(this.fromMode);
}

Command.list = [];

Command.registerCommand = function (name, cfg, extend) {
  if (Command[name]) {
    Util.mix(Command[name], cfg);
  } else {
    var command = _extends({
      enable: function enable() {
        return true;
      },
      init: function init() {},

      execute: snapShotexecute,
      back: snapShotBack,
      shortcutCodes: undefined,
      executeTimes: 1,
      name: name,
      queue: true
    }, cfg);
    if (extend && Command[extend]) {
      command = Util.mix({}, Command[extend], cfg);
    }
    Command[name] = command;
    Command.list.push(command);
  }
};

Command.execute = function (name, editor, obj) {
  var command = Util.mix(true, {}, Command[name], obj);
  var cfg = editor.get('_command');
  if (command.enable(editor)) {
    command.init();
    if (command.queue) {
      cfg.queue.splice(cfg.current, cfg.queue.length - cfg.current, command);
      cfg.current += 1;
    }
    editor.emit('beforecommandexecute', {
      command: command
    });
    command.execute(editor);
    editor.emit('aftercommandexecute', {
      command: command
    });
    editor.setCommandDOMenable(); // 刷新按钮可用情况
    return command;
  }
};

Command.enable = function (name, editor) {
  return Command[name].enable(editor);
};

Command.registerCommand('common', {
  back: snapShotBack
});

Command.registerCommand('update', {
  enable: function enable() {
    return this.itemId && this.updateModel;
  },
  execute: function execute(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var item = graph.find(this.itemId);
    if (this.executeTimes === 1) {
      this.originModel = Util.getContrast(item.getModel(), this.updateModel);
      this.page = page;
    }
    graph.update(item, this.updateModel);
  },
  back: function back() {
    var page = this.page;
    var graph = page.getGraph();
    var item = graph.find(this.itemId);
    graph.update(item, this.originModel);
  }
});

// 重做
Command.registerCommand('redo', {
  queue: false,
  enable: function enable(editor) {
    var cfg = editor.get('_command');
    var queue = cfg.queue;
    return cfg.current < queue.length;
  },
  execute: function execute(editor) {
    var cfg = editor.get('_command');
    var queue = cfg.queue;
    var current = cfg.current;
    queue[current].execute(editor);
    cfg.current += 1;
  },

  shortcutCodes: [['metaKey', 'shiftKey', 'z'], ['ctrlKey', 'shiftKey', 'z']]
});

// 撤销
Command.registerCommand('undo', {
  queue: false,
  enable: function enable(editor) {
    var cfg = editor.get('_command');
    return cfg.current > 0;
  },
  execute: function execute(editor) {
    var cfg = editor.get('_command');
    var queue = cfg.queue;
    var current = cfg.current;
    var command = queue[current - 1];
    command.executeTimes++;
    command.back(editor);
    cfg.current -= 1;
  },

  shortcutCodes: [['metaKey', 'z'], ['ctrlKey', 'z']]
});

function getPaste(clipboard) {
  var oldnewmap = {};
  var rst = [];
  clipboard.forEach(function (data) {
    var model = data.model;
    var newModel = Util.mix(true, {}, _extends({}, model, {
      id: Util.guid()
    }));
    oldnewmap[model.id] = newModel.id;
    rst.push(_extends({}, data, {
      model: newModel
    }));
  });
  rst.forEach(function (data) {
    var model = data.model;
    if (model.parent) {
      var newParentId = oldnewmap[model.parent];
      if (newParentId) {
        model.parent = newParentId;
      } else {
        delete model.parent;
      }
    }
  });
  rst.sort(function (a, b) {
    return a.index - b.index;
  });
  return rst;
}

Command.registerCommand('copy', {
  queue: false,
  enable: hasItemSelected,
  method: function method(editor) {
    var page = editor.getCurrentPage();
    var selectedItems = page.getSelected();
    var cfg = editor.get('_command');
    var selectedGroups = selectedItems.map(function (item) {
      return item.getGraphicGroup();
    });
    var box = Util.getChildrenBBox(selectedGroups);
    cfg.clipboard = [];
    selectedItems.forEach(function (item) {
      Util.traverseTree(item, function (child) {
        var model = child.getModel();
        var group = child.getGraphicGroup();
        cfg.clipboard.push({
          type: child.type,
          index: Util.getIndex(group),
          model: model
        });
      }, function (parent) {
        return parent.getChildren && parent.getChildren();
      }, true);
    });
    editor.set('copyCenterBox', _extends({}, box));
  }
});

Command.registerCommand('pasteHere', {
  enable: function enable(editor) {
    var cfg = editor.get('_command');
    return cfg.clipboard.length > 0;
  },
  method: function method(editor) {
    var page = editor.getCurrentPage();
    var cfg = editor.get('_command');
    var pasteData = this.pasteData ? this.pasteData : getPaste(cfg.clipboard);
    var copyCenterBox = this.copyCenterBox ? this.copyCenterBox : editor.get('copyCenterBox');
    var contextmenuPoint = this.contextmenuPoint ? this.contextmenuPoint : editor.get('contextmenuPoint');
    page.clearSelected();
    this.copyCenterBox = Util.cloneDeep(copyCenterBox);
    this.pasteData = Util.cloneDeep(pasteData);
    this.contextmenuPoint = Util.cloneDeep(contextmenuPoint);
    pasteData.forEach(function (data) {
      var model = data.model;
      if (model.x) {
        model.x += contextmenuPoint.x - copyCenterBox.minX;
      }
      if (model.y) {
        model.y += contextmenuPoint.y - copyCenterBox.minY;
      }
      page.add(data.type, model);
    });
  },

  back: snapShotBack
});

Command.registerCommand('paste', {
  enable: function enable(editor) {
    var cfg = editor.get('_command');
    return cfg.clipboard.length > 0;
  },
  method: function method(editor) {
    var page = editor.getCurrentPage();
    var cfg = editor.get('_command');
    var pasteData = this.pasteData ? this.pasteData : getPaste(cfg.clipboard);
    page.clearSelected();
    this.pasteData = Util.cloneDeep(pasteData);
    pasteData.forEach(function (data) {
      var model = data.model;
      if (model.x) {
        model.x += 10;
      }
      if (model.y) {
        model.y += 10;
      }
      page.add(data.type, model);
    });
  },

  back: snapShotBack
});

Command.registerCommand('addGroup', {
  init: function init() {
    this.addGroupId = Util.guid();
  },
  enable: function enable(editor) {
    var page = editor.getCurrentPage();
    var items = page.getSelected();
    return items.length > 1;
  },
  method: function method(editor) {
    var page = editor.getCurrentPage();
    page.addGroup({
      id: this.addGroupId
    });
  },

  back: snapShotBack
});

Command.registerCommand('unGroup', {
  enable: function enable(editor) {
    var page = editor.getCurrentPage();
    var selectedItems = page.getSelected();
    return selectedItems.length === 1 && selectedItems[0].isGroup;
  },

  method: 'unGroup',
  back: snapShotBack
});

Command.registerCommand('delete', {
  getDeleteItems: function getDeleteItems(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var items = this.itemIds ? this.itemIds.map(function (itemId) {
      return graph.find(itemId);
    }) : page.getSelected();
    items = items.filter(function (item) {
      return item.deleteable !== false;
    });
    return items;
  },
  enable: function enable(editor) {
    var items = this.getDeleteItems(editor);
    return items.length > 0;
  },
  method: function method(editor) {
    var page = editor.getCurrentPage();
    var items = this.getDeleteItems(editor);
    var graph = page.getGraph();

    page.emit('beforedelete', {
      items: items
    });
    Util.each(items, function (item) {
      graph.remove(item);
    });
    page.emit('afterdelete', {
      items: items
    });
    this.itemIds = items.map(function (item) {
      return item.getModel().id;
    });
  },

  back: snapShotBack,
  shortcutCodes: ['Delete', 'Backspace']
});

Command.registerCommand('selectAll', {
  method: function method(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var items = graph.getItems();
    items.forEach(function (item) {
      page.setSelected(item, true);
    });
  },

  back: snapShotBack,
  shortcutCodes: [['metaKey', 'a']]
});

Command.registerCommand('toBack', {
  enable: hasItemSelected,
  method: 'toBack',
  back: snapShotBack
});

Command.registerCommand('toFront', {
  enable: hasItemSelected,
  method: 'toFront',
  back: snapShotBack
});

Command.registerCommand('clear', {
  enable: function enable(editor) {
    var page = editor.getCurrentPage();
    var items = page.getItems();
    return items.length > 0;
  },

  method: 'clear',
  back: snapShotBack
});

Command.registerCommand('multiSelect', {
  enable: changeModeEnable,
  toMode: 'multiSelect',
  execute: changeModeexecute,
  back: changeModeBack
});

Command.registerCommand('move', {
  enable: changeModeEnable,
  toMode: 'move',
  execute: changeModeexecute,
  back: changeModeBack
});

module.exports = Command;

/***/ }),

/***/ "./src/command/index.js":
/*!******************************!*\
  !*** ./src/command/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Command = __webpack_require__(/*! ./command */ "./src/command/command.js");
__webpack_require__(/*! ./zoom */ "./src/command/zoom.js");
__webpack_require__(/*! ./collapseExpand */ "./src/command/collapseExpand.js");
module.exports = Command;

/***/ }),

/***/ "./src/command/zoom.js":
/*!*****************************!*\
  !*** ./src/command/zoom.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Command = __webpack_require__(/*! ./command */ "./src/command/command.js");

// 视口缩放类执行方法
function zoomexecute(editor) {
  var page = editor.getCurrentPage();
  this.matrixCache = page.getMatrix().slice(0);
  this._zoom(editor);
  page.updateStatus();
}

// 视口缩放类回滚
function zoomBack(editor) {
  var page = editor.getCurrentPage();
  page.updateMatrix(this.matrixCache);
}

Command.registerCommand('zoomTo', {
  _zoom: function _zoom(editor) {
    var page = editor.getCurrentPage();
    page.zoom(Number(this.zoom));
  },

  queue: false,
  execute: zoomexecute,
  back: zoomBack
});

Command.registerCommand('zoomIn', {
  enable: function enable(editor) {
    var page = editor.getCurrentPage();
    var maxZoom = page.getMaxZoom();
    var minZoom = page.getMinZoom();
    var zoom = page.getZoom();

    return zoom < maxZoom || zoom === minZoom;
  },
  _zoom: function _zoom(editor) {
    var page = editor.getCurrentPage();
    var cfg = editor.get('_command');
    var zoom = page.getZoom();
    var maxZoom = page.getMaxZoom();
    var toZoom = zoom + cfg.zoomDelta;
    if (toZoom >= maxZoom) {
      toZoom = maxZoom;
    }
    page.zoom(toZoom);
  },

  queue: false,
  execute: zoomexecute,
  back: zoomBack,
  shortcutCodes: [['metaKey', '='], ['ctrlKey', '=']]
});

Command.registerCommand('zoomOut', {
  enable: function enable(editor) {
    var page = editor.getCurrentPage();
    var maxZoom = page.getMaxZoom();
    var minZoom = page.getMinZoom();
    var zoom = page.getZoom();

    return zoom > minZoom || zoom === maxZoom;
  },
  _zoom: function _zoom(editor) {
    var page = editor.getCurrentPage();
    var zoom = page.getZoom();
    var minZoom = page.getMinZoom();
    var cfg = editor.get('_command');
    var toZoom = zoom - cfg.zoomDelta;
    if (toZoom <= minZoom) {
      toZoom = minZoom;
    }
    page.zoom(toZoom);
  },

  queue: false,
  execute: zoomexecute,
  back: zoomBack,
  shortcutCodes: [['metaKey', '-'], ['ctrlKey', '-']]
});

Command.registerCommand('autoZoom', {
  enable: function enable() {
    return true;
  },
  _zoom: function _zoom(editor) {
    var page = editor.getCurrentPage();
    page.autoZoom();
  },

  queue: false,
  execute: zoomexecute,
  back: zoomBack
});

Command.registerCommand('resetZoom', {
  enable: function enable() {
    return true;
  },
  _zoom: function _zoom(editor) {
    var page = editor.getCurrentPage();
    page.resetZoom();
  },

  queue: false,
  execute: zoomexecute,
  back: zoomBack,
  shortcutCodes: [['metaKey', '0'], ['ctrlKey', '0']]
});

/***/ }),

/***/ "./src/contextmenu/index.js":
/*!**********************************!*\
  !*** ./src/contextmenu/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview contextmenu
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Base = __webpack_require__(/*! ../simpleBase */ "./src/simpleBase.js");

var Component = function (_Base) {
  _inherits(Component, _Base);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        /**
         * 类型
         * @type {string}
         */
        type: 'contextmenu',

        /**
         * dom 容器
         * @type {dom}
         */
        container: null
      };
    }
  }, {
    key: 'init',
    value: function init() {
      this._initContainer();
    }
  }, {
    key: '_initContainer',
    value: function _initContainer() {
      var container = this.container;
      if (container) {
        if (Util.isString(container)) {
          container = document.getElementById(container);
        }
      } else {
        throw new Error('please set the container for the tontextmenu !');
      }
      var commands = container.getElementsByClassName('command');
      container.style.position = 'absolute';
      container.style['z-index'] = 2;
      container.style.top = '0px';
      container.style.left = '0px';
      this.commands = commands;
      this.containerDom = container;
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var _this2 = this;

      var commands = this.commands;
      Util.each(commands, function (command) {
        Util.addEventListener(command, 'click', function () {
          command.className.indexOf('disable') === -1 && _this2.hide();
        });
      });
    }
  }, {
    key: 'switch',
    value: function _switch(status) {
      var container = this.containerDom;
      var menus = container.getElementsByClassName('menu');
      Util.each(menus, function (menu) {
        var dataset = menu.dataset;
        if (dataset.status === status) {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      });
    }
  }, {
    key: 'getCommandDoms',
    value: function getCommandDoms() {
      return this.commands;
    }
  }, {
    key: 'show',
    value: function show() {
      var containerDom = this.containerDom;
      var editor = this.editor;
      var page = editor.getCurrentPage();
      page.setSignal('preventWheelPan', true);
      containerDom.style.display = 'block';
    }
  }, {
    key: 'hide',
    value: function hide() {
      var containerDom = this.containerDom;
      var editor = this.editor;
      var page = editor.getCurrentPage();
      page.setSignal('preventWheelPan', false);
      containerDom.style.display = 'none';
    }
  }, {
    key: 'move',
    value: function move(clientX, clientY) {
      var containerDom = this.containerDom;
      var boundingRect = Util.getBoundingClientRect(containerDom);
      var top = parseFloat(Util.getStyle(containerDom, 'top'));
      var left = parseFloat(Util.getStyle(containerDom, 'left'));
      containerDom.style.left = left + (clientX - boundingRect.left) + 'px';
      containerDom.style.top = top + (clientY - boundingRect.top) + 'px';
    }
  }]);

  return Component;
}(Base);

module.exports = Component;

/***/ }),

/***/ "./src/detailpannel/index.js":
/*!***********************************!*\
  !*** ./src/detailpannel/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview detail pannel
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Base = __webpack_require__(/*! ../simpleBase */ "./src/simpleBase.js");

var Component = function (_Base) {
  _inherits(Component, _Base);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        /**
         * 类型
         * @type {string}
         */
        type: 'detailpannel',

        /**
         * dom 容器
         * @type {dom}
         */
        container: null
      };
    }
  }, {
    key: 'init',
    value: function init() {
      this._initContainer();
    }
  }, {
    key: '_initContainer',
    value: function _initContainer() {
      var container = this.container;
      if (container) {
        if (Util.isString(container)) {
          container = document.getElementById(container);
        }
      } else {
        throw new Error('please set the container for the detailpannel !');
      }
      this.containerDom = container;
      this.switch('canvas-selected');
    }
  }, {
    key: 'switch',
    value: function _switch(status) {
      var container = this.containerDom;
      var pannels = container.getElementsByClassName('pannel');
      Util.each(pannels, function (pannel) {
        var dataset = pannel.dataset;
        if (dataset.status === status) {
          pannel.style.display = 'block';
        } else {
          pannel.style.display = 'none';
        }
      });
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var editor = this.editor;
      var getItems = this.getItems;
      Util.each(getItems, function (getItem) {
        Util.addEventListener(getItem, 'mousedown', function () {
          var dataset = getItem.dataset;
          var page = editor.getCurrentPage();
          page.beginAdd(dataset.type, {
            shape: dataset.shape
          });
        });
      });
      Util.addEventListener(window, 'mouseup', function () {
        var page = editor.getCurrentPage();
        page.cancelAdd();
      });
    }
  }]);

  return Component;
}(Base);

module.exports = Component;

/***/ }),

/***/ "./src/editor/index.js":
/*!*****************************!*\
  !*** ./src/editor/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview
 * to manage all components status
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ../base */ "./src/base.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Command = __webpack_require__(/*! ../command/ */ "./src/command/index.js");

var Editor = function (_Base) {
  _inherits(Editor, _Base);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
  }

  _createClass(Editor, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        _components: [],
        _command: {
          zoomDelta: 0.1, // 缩放步长
          queue: [], // 回退堆栈
          current: 0, // 不是索引，是第 N 个数组元素
          clipboard: [] // 剪贴板
        }
      };
    }
  }, {
    key: '_getComponentsBy',
    value: function _getComponentsBy(callback) {
      var components = this.get('_components');
      return components.filter(callback);
    }
    // 绑定命令

  }, {
    key: '_bindCommands',
    value: function _bindCommands(commandDoms) {
      var _this2 = this;

      Util.each(commandDoms, function (commandDom) {
        var dataset = commandDom.dataset;
        var commandName = dataset.command;
        if (!Command[commandName]) {
          console.warn('请设置有效的命令！');
        } else {
          Util.addEventListener(commandDom, 'click', function () {
            var page = _this2.getCurrentPage();
            page.focusGraphWarrper();
            _this2.executeCommand(commandName, dataset);
          });
        }
      });
    }
  }, {
    key: 'getCommands',
    value: function getCommands() {
      return this.get('_command').queue;
    }
  }, {
    key: 'getCurrentCommand',
    value: function getCurrentCommand() {
      var commandCfg = this.get('_command');
      var queue = commandCfg.queue,
          current = commandCfg.current;

      return queue[current - 1];
    }
  }, {
    key: 'executeCommand',
    value: function executeCommand(param, cfg) {
      if (Util.isString(param)) {
        Command.execute(param, this, cfg);
      } else {
        Command.execute('common', this, {
          method: param
        }, cfg);
      }
    }
  }, {
    key: 'commandEnable',
    value: function commandEnable(name) {
      return Command.enable(name, this);
    }
  }, {
    key: 'setCommandDOMenable',
    value: function setCommandDOMenable() {
      var _this3 = this;

      var toolbars = this.getComponentsByType('toolbar');
      var contextmenus = this.getComponentsByType('contextmenu');
      var commandDoms = [];
      toolbars.forEach(function (toolbar) {
        Util.each(toolbar.getCommandDoms(), function (commandDom) {
          commandDoms.push(commandDom);
        });
      });
      contextmenus.forEach(function (contextmenu) {
        Util.each(contextmenu.getCommandDoms(), function (commandDom) {
          commandDoms.push(commandDom);
        });
      });
      Util.each(commandDoms, function (commandDom) {
        var dataset = commandDom.dataset;
        var commandName = dataset.command;

        if (!Command.enable(commandName, _this3)) {
          commandDom.classList.add('disable');
        } else {
          commandDom.classList.remove('disable');
        }
      });
    }
    // 当画板状态变更

  }, {
    key: '_onPageStatusChange',
    value: function _onPageStatusChange() {
      this.setCommandDOMenable();
    }
  }, {
    key: '_beforeAddMinimap',
    value: function _beforeAddMinimap(minimap) {
      var pages = this.getComponentsByType('page');
      if (pages.length === 0) {
        // 如果没有当前页面返回
        return;
      }
      pages.forEach(function (page) {
        minimap.bindPage(page);
      });
      minimap.renderBackground();
    }
  }, {
    key: '_afterAddContextmenu',
    value: function _afterAddContextmenu() {
      this.getCurrentPage() && this.setCommandDOMenable();
    }
  }, {
    key: '_afterAddPage',
    value: function _afterAddPage(page) {
      var _this4 = this;

      var minimaps = this.getComponentsByType('minimap');
      this.setCommandDOMenable();
      minimaps.forEach(function (minimap) {
        minimap.bindPage(page);
        minimap.renderBackground();
      });
      page.on('statuschange', function (ev) {
        _this4._onPageStatusChange(ev);
      });
      page.on('mousedown', function () {
        var contextmenus = _this4.getComponentsByType('contextmenu');
        contextmenus.forEach(function (contextmenu) {
          contextmenu.hide();
        });
      });
      page.on('contextmenu', function (ev) {
        var contextmenus = _this4.getComponentsByType('contextmenu');
        var graph = page.getGraph();
        var canvas = graph.getCanvas();
        var el = canvas.get('el');
        var boundingRect = Util.getBoundingClientRect(el);
        var contextmenuPoint = {
          x: ev.x,
          y: ev.y
        };
        var item = ev.item;

        if (item && !item.isSelected) {
          page.clearSelected();
          page.setSelected(ev.item, true);
        }
        _this4.set('contextmenuPoint', contextmenuPoint);
        ev.domEvent.preventDefault();
        contextmenus.forEach(function (contextmenu) {
          contextmenu.show();
          contextmenu.contextmenuPoint = contextmenuPoint;
          contextmenu.move(boundingRect.left + ev.domX, boundingRect.top + ev.domY);
        });
      });
      page.on('statuschange', function (ev) {
        var contextmenus = _this4.getComponentsByType('contextmenu');
        var detailpannels = _this4.getComponentsByType('detailpannel');
        contextmenus.forEach(function (contextmenu) {
          contextmenu.switch(ev.status);
        });
        detailpannels.forEach(function (detailpannel) {
          detailpannel.switch(ev.status);
        });
      });
      this._bindShortcut(page);
    }
  }, {
    key: '_beforeAddToolbar',
    value: function _beforeAddToolbar(toolbar) {
      var commandDoms = toolbar.getCommandDoms();
      this._bindCommands(commandDoms);
    }
  }, {
    key: '_beforeAddContextmenu',
    value: function _beforeAddContextmenu(contextmenu) {
      var commandDoms = contextmenu.getCommandDoms();
      contextmenu.bindEvent();
      this._bindCommands(commandDoms);
    }
  }, {
    key: '_beforeAddItempannel',
    value: function _beforeAddItempannel(itempannel) {
      itempannel.bindEvent();
    }
  }, {
    key: 'getComponentsByType',
    value: function getComponentsByType(type) {
      return this._getComponentsBy(function (component) {
        return component.type === type;
      });
    }
    /**
     * 获取激活的页面
     * @return  {Page} page
     */

  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      var pages = this.getComponentsByType('page');
      var rst = void 0;
      pages.every(function (page) {
        if (page.isActived) {
          rst = page;
          return false;
        }
        return true;
      });
      if (!rst) {
        rst = pages[0];
      }
      return rst;
    }
    /**
     * 获取所有的组建
     * @return  {array} 组建集
     */

  }, {
    key: 'getComponents',
    value: function getComponents() {
      return this.get('_components');
    }
    // 判断该快捷键下命令是否执行

  }, {
    key: '_shortcutEnable',
    value: function _shortcutEnable(command, domEvent) {
      var shortcutCodes = command.shortcutCodes;
      var key = Util.getKeyboradKey(domEvent);
      var bool = false;
      for (var i = 0; i < shortcutCodes.length; i++) {
        var shortcutCode = shortcutCodes[i];
        if (Util.isArray(shortcutCode)) {
          var l = shortcutCode.length;
          var subBool = true;
          for (var j = 0; j < l - 1; j++) {
            if (!domEvent[shortcutCode[j]]) {
              subBool = false;
              break;
            }
          }
          if ((shortcutCode[l - 1] === key || shortcutCode[l - 1] === Util.lowerFirst(key)) && subBool) {
            bool = true;
          }
        } else {
          if (shortcutCode === key) {
            bool = true;
          }
        }
        if (bool) {
          break;
        }
      }
      return bool;
    }
    /**
     * 绑定快捷键
     * @param  {object} page page or array
     */

  }, {
    key: '_bindShortcut',
    value: function _bindShortcut(page) {
      var _this5 = this;

      var shortcut = page.get('shortcut');
      var graph = page.getGraph();
      graph.on('keydown', function (ev) {
        var contextmenus = _this5.getComponentsByType('contextmenu');
        var domEvent = ev.domEvent;

        contextmenus.forEach(function (contextmenu) {
          contextmenu.hide();
        });
        domEvent.preventDefault();
        var commands = Command.list.filter(function (command) {
          return command.shortcutCodes && shortcut[command.name];
        });

        for (var index = 0; index < commands.length; index++) {
          var command = commands[index];
          if (_this5._shortcutEnable(command, domEvent)) {
            _this5.executeCommand(command.name);
            return false;
          }
        }
      });
    }
  }, {
    key: 'add',
    value: function add(component) {
      var components = this.get('_components');
      var type = Util.upperFirst(component.type);
      component.editor = this;
      this['_beforeAdd' + type] && this['_beforeAdd' + type](component);
      components.push(component);
      this['_afterAdd' + type] && this['_afterAdd' + type](component);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var components = this.get('_components');
      components.forEach(function (component) {
        component.destroy();
      });
    }
  }]);

  return Editor;
}(Base);

module.exports = Editor;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

var Editor = __webpack_require__(/*! ./editor/ */ "./src/editor/index.js");
var Command = __webpack_require__(/*! ./command/ */ "./src/command/index.js");
var version = __webpack_require__(/*! ./version */ "./src/version.js");

Editor.Editor = Editor;
Editor.Page = __webpack_require__(/*! ./page/base/ */ "./src/page/base/index.js");
Editor.Flow = __webpack_require__(/*! ./page/flow/ */ "./src/page/flow/index.js");
Editor.Mind = __webpack_require__(/*! ./page/mind/ */ "./src/page/mind/index.js");
Editor.Util = __webpack_require__(/*! ./util/ */ "./src/util/index.js");
Editor.Minimap = __webpack_require__(/*! ./minimap/ */ "./src/minimap/index.js");
Editor.Toolbar = __webpack_require__(/*! ./toolbar/ */ "./src/toolbar/index.js");
Editor.Contextmenu = __webpack_require__(/*! ./contextmenu/ */ "./src/contextmenu/index.js");
Editor.Itempannel = __webpack_require__(/*! ./itempannel/ */ "./src/itempannel/index.js");
Editor.Detailpannel = __webpack_require__(/*! ./detailpannel/ */ "./src/detailpannel/index.js");
Editor.Command = __webpack_require__(/*! ./command/ */ "./src/command/index.js");
Editor.registerBehaviour = Editor.Page.registerBehaviour;
Editor.registerNode = Editor.Page.registerNode;
Editor.registerEdge = Editor.Page.registerEdge;
Editor.registerGroup = Editor.Page.registerGroup;
Editor.registerGuide = Editor.Page.registerGuide;
Editor.registerCommand = Command.registerCommand;
Editor.version = version;
module.exports = Editor;

/***/ }),

/***/ "./src/itempannel/index.js":
/*!*********************************!*\
  !*** ./src/itempannel/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview item pannel
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Base = __webpack_require__(/*! ../simpleBase */ "./src/simpleBase.js");

var Component = function (_Base) {
  _inherits(Component, _Base);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        /**
         * 类型
         * @type {string}
         */
        type: 'itempannel',

        /**
         * dom 容器
         * @type {dom}
         */
        container: null
      };
    }
  }, {
    key: 'init',
    value: function init() {
      this._initContainer();
    }
  }, {
    key: '_initContainer',
    value: function _initContainer() {
      var container = this.container;
      if (container) {
        if (Util.isString(container)) {
          container = document.getElementById(container);
        }
      } else {
        throw new Error('please set the container for the itempannel !');
      }
      var getItems = container.getElementsByClassName('getItem');
      this.getItems = getItems;
      this.containerDom = container;
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var editor = this.editor;
      var getItems = this.getItems;
      Util.each(getItems, function (getItem) {
        Util.addEventListener(getItem, 'mousedown', function () {
          var dataset = getItem.dataset;
          var page = editor.getCurrentPage();
          page.beginAdd(dataset.type, dataset);
        });
      });
      Util.addEventListener(window, 'mouseup', function () {
        var page = editor.getCurrentPage();
        page.cancelAdd();
      });
    }
  }]);

  return Component;
}(Base);

module.exports = Component;

/***/ }),

/***/ "./src/minimap/index.js":
/*!******************************!*\
  !*** ./src/minimap/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview minimap
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Minimap = __webpack_require__(/*! ./minimap */ "./src/minimap/minimap.js");

var Component = function (_Minimap) {
  _inherits(Component, _Minimap);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'bindPage',
    value: function bindPage(page) {
      var _this2 = this;

      var graph = page.getGraph();
      graph.on('afterchange', Util.throttle(function () {
        _this2.renderBackground(graph);
        _this2.renderViewPort(graph);
      }, 32));
      graph.on('afterviewportchange', Util.throttle(function () {
        _this2.renderViewPort(graph);
      }, 16));
      this.getGraph = function () {
        return page.editor.getCurrentPage().getGraph();
      };
    }
  }]);

  return Component;
}(Minimap);
// const Util = require('../util/');
// const G = G6.G;
// const Canvas = G.Canvas;

// class Minimap extends Base {
//   getDefaultCfg() {
//     return {
//       /**
//        * 类型
//        * @type {string}
//        */
//       type: 'minimap',

//       /**
//        * dom 容器
//        * @type {dom}
//        */
//       container: null,

//       /**
//        * 是否是缩略图
//        * @type {boolean}
//        */
//       isMinimap: true,

//       /**
//        * 背景样式
//        * @type {CSS}
//        */
//       backgroundStyle: {
//         height: '100%',
//         position: 'absolute',
//         margin: 'auto',
//         left: 0,
//         right: 0,
//         'z-index': 0,
//       },

//       /**
//        * 容器样式
//        * @type {CSS}
//        */
//       minimapContainerStyle: {
//         background: '#fff',
//         position: 'absolute',
//         overflow: 'hidden',
//       },

//       /**
//        * 缩略图视口框
//        * @type {CSS}
//        */
//       viewportStyle: {
//         height: '100%',
//         position: 'absolute',
//         margin: 'auto',
//         left: 0,
//         right: 0,
//         'z-index': 1,
//       },

//       /**
//        * 控制图层
//        * @type {CSS}
//        */
//       controlLayerStyle: {
//         width: '100%',
//         height: '100%',
//         cursor: 'move',
//         position: 'absolute',
//         'z-index': 2,
//       },

//       /**
//        * 缩略图可视区域视窗样式
//        * @type {G.Rect.ATTRS}
//        */
//       viewportWindowStyle: {
//         stroke: '#91D5FF',
//       },

//       /**
//        * 缩略图背景样式
//        * @type {G.Rect.ATTRS}
//        */
//       viewportBackStyle: {
//         fill: '#EBEEF2',
//         fillOpacity: 0.65,
//       },
//     };
//   }
//   init() {
//     this._initContainer();
//     this._initMiniMap();
//   }
//   bindEvent() {
//     const editor = this.editor;
//     const controlLayer = this.controlLayer;
//     let miniMapViewPortActived = false;
//     let startMatrix;
//     let miniMapScale;
//     let graphScale;
//     let startPoint;
//     let graph;
//     controlLayer.on('mousedown', ev => {
//       if (!this.miniMapMatrix) {
//         return;
//       }
//       graph = editor.getCurrentPage().getGraph();
//       miniMapViewPortActived = true;
//       startMatrix = Util.cloneDeep(graph.getMatrix());
//       miniMapScale = this.miniMapMatrix[0];
//       graphScale = startMatrix[0];
//       startPoint = {
//         clientX: ev.clientX,
//         clientY: ev.clientY,
//       };
//     });
//     controlLayer.on('mouseup', () => {
//       resetStatus();
//     });
//     controlLayer.on('mouseleave', () => {
//       resetStatus();
//     });
//     controlLayer.on('mousemove', ev => {
//       if (miniMapViewPortActived && graph) {
//         const dx = startPoint.clientX - ev.clientX;
//         const dy = startPoint.clientY - ev.clientY;
//         const matrix = Util.cloneDeep(startMatrix);
//         Util.mat3.translate(matrix, matrix, [ graphScale * dx / miniMapScale, graphScale * dy / miniMapScale ]);
//         graph.updateMatrix(matrix);
//       }
//     });
//     function resetStatus() {
//       miniMapViewPortActived = false;
//       miniMapScale = undefined;
//       startPoint = undefined;
//       startMatrix = undefined;
//       graphScale = undefined;
//       graph = undefined;
//     }
//   }
//   bindPage(page) {
//     const graph = page.getGraph();
//     graph.on('afterchange', Util.throttle(() => {
//       this.renderBackground(graph);
//       this._renderViewPort(graph);
//     }, 32));
//     graph.on('afterviewportchange', Util.throttle(() => {
//       this._renderViewPort(graph);
//     }, 16));
//   }
//   _initMiniMap() {
//     const background = this.background;
//     const viewport = this.viewPort;
//     const width = this.width;
//     const height = this.height;
//     const viewportWindowStyle = this.viewportWindowStyle;
//     const viewportBackStyle = this.viewportBackStyle;
//     const miniMapCanvas = new Canvas({
//       containerDOM: background,
//       width,
//       height,
//     });
//     const viewportCanvas = new Canvas({
//       containerDOM: viewport,
//       width,
//       height,
//     });
//     const viewportWindow = viewportCanvas.addShape('rect', {
//       attrs: {
//         x: 0,
//         y: 0,
//         width,
//         height,
//         ...viewportWindowStyle,
//       },
//     });
//     const viewportBack = viewportCanvas.addShape('path', {
//       attrs: {
//         path: 'M0,0 L1,1',
//         ...viewportBackStyle,
//       },
//     });

//     background.css({
//       width: width + 'px',
//       height: height + 'px',
//     });
//     viewport.css({
//       position: 'absolute',
//     });
//     this.miniMapCanvas = miniMapCanvas;
//     this.viewportCanvas = viewportCanvas;
//     this.viewportWindow = viewportWindow;
//     this.viewportBack = viewportBack;
//   }
//   _initContainer() {
//     let container = this.container;
//     let width = this.width;
//     let height = this.height;
//     if (container) {
//       if (Util.isString(container)) {
//         container = document.getElementById(container);
//       }
//     } else {
//       throw new Error('please set the container for the minimap !');
//     }
//     if (!width) {
//       width = Util.getWidth(container);
//     }
//     if (!height) {
//       height = Util.getHeight(container);
//     }
//     const minimapContainerStyle = this.minimapContainerStyle;
//     const backgroundStyle = this.backgroundStyle;
//     const viewportStyle = this.viewportStyle;
//     const controlLayerStyle = this.controlLayerStyle;
//     const minimapContainer = Util.createDOM('<div class="g6-editor-minimap-container"></div>', minimapContainerStyle);
//     const background = Util.createDOM('<div class="g6-editor-minimap-background"></div>', backgroundStyle);
//     const viewPort = Util.createDOM('<div class="g6-editor-minimap-viewport">', viewportStyle);
//     const controlLayer = Util.createDOM('<div class="g6-editor-minimap-control-layer">', controlLayerStyle);
//     container.appendChild(minimapContainer);
//     minimapContainer.appendChild(controlLayer);
//     minimapContainer.appendChild(viewPort);
//     minimapContainer.appendChild(background);
//     this.minimapContainer = minimapContainer;
//     this.background = background;
//     this.viewPort = viewPort;
//     this.controlLayer = controlLayer;
//   }
//   // 1. 为了防止画面闪烁 2. 为了缩略图中元素最小尺寸可控；所以这里采取了一种比较 hack 的方式绘制缩略图
//   // 大体思路是将 graph canvas 的 context 篡改为 minimap canvas 的 context，然后用 graph 的 canvas 去画
//   renderBackground(graph) {
//     const miniMapCanvas = this.miniMapCanvas;
//     const width = this.width;
//     const height = this.height;
//     Util.graph2Canvas({
//       graph,
//       width,
//       height,
//       canvas: miniMapCanvas,
//     });
//     this.miniMapMatrix = miniMapCanvas.matrix;
//   }
//   _renderViewPort(graph) {
//     if (graph.getItems().length === 0) {
//       return;
//     }
//     const viewportWindow = this.viewportWindow;
//     const viewportCanvas = this.viewportCanvas;
//     const viewportBack = this.viewportBack;
//     const miniMapMatrix = this.miniMapMatrix;
//     const graphWidth = graph.get('width');
//     const graphHeight = graph.get('height');
//     const width = this.width;
//     const height = this.height;
//     const graphMatrix = graph.getMatrix();
//     if (!miniMapMatrix) {
//       return;
//     }
//     const graphTL = Util.invertMatrix({
//       x: 0,
//       y: 0,
//     }, graphMatrix);
//     const graphBR = Util.invertMatrix({
//       x: graphWidth,
//       y: graphHeight,
//     }, graphMatrix);
//     const viewPortTL = Util.applyMatrix(graphTL, miniMapMatrix);
//     const viewPortBR = Util.applyMatrix(graphBR, miniMapMatrix);
//     const windowWidth = viewPortBR.x - viewPortTL.x;
//     const windowHeight = viewPortBR.y - viewPortTL.y;
//     viewportBack.attr({
//       path: [
//         [ 'M', 0, 0 ],
//         [ 'L', width, 0 ],
//         [ 'L', width, height ],
//         [ 'L', 0, height ],
//         [ 'L', 0, 0 ],
//         [ 'M', viewPortTL.x, viewPortTL.y ],
//         [ 'L', viewPortTL.x, viewPortBR.y ],
//         [ 'L', viewPortBR.x, viewPortBR.y ],
//         [ 'L', viewPortBR.x, viewPortTL.y ],
//         [ 'L', viewPortTL.x, viewPortTL.y ],
//       ],
//     });
//     viewportWindow.attr({
//       x: viewPortTL.x,
//       y: viewPortTL.y,
//       width: windowWidth,
//       height: windowHeight,
//     });
//     viewportCanvas.draw();
//   }
//   destroy() {
//     this.minimapContainer.destroy();
//   }
// }

module.exports = Component;

/***/ }),

/***/ "./src/minimap/minimap.js":
/*!********************************!*\
  !*** ./src/minimap/minimap.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview minimap
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Canvas = G6.G.Canvas;

var Minimap = function () {
  function Minimap(options) {
    _classCallCheck(this, Minimap);

    Util.mix(this, _extends({
      /**
       * 类型
       * @type {string}
       */
      type: 'minimap',

      /**
       * dom 容器
       * @type {dom}
       */
      container: null,

      /**
       * 是否是缩略图
       * @type {boolean}
       */
      isMinimap: true,

      /**
       * 背景样式
       * @type {CSS}
       */
      backgroundStyle: {
        height: '100%',
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        'z-index': 0
      },

      /**
       * 容器样式
       * @type {CSS}
       */
      minimapContainerStyle: {
        background: '#fff',
        position: 'absolute',
        overflow: 'hidden'
      },

      /**
       * 缩略图视口框
       * @type {CSS}
       */
      viewportStyle: {
        height: '100%',
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        'z-index': 1
      },

      /**
       * 控制图层
       * @type {CSS}
       */
      controlLayerStyle: {
        width: '100%',
        height: '100%',
        cursor: 'move',
        position: 'absolute',
        'z-index': 2
      },

      /**
       * 缩略图可视区域视窗样式
       * @type {G.Rect.ATTRS}
       */
      viewportWindowStyle: {
        stroke: '#91D5FF'
      },

      /**
       * 缩略图背景样式
       * @type {G.Rect.ATTRS}
       */
      viewportBackStyle: {
        fill: '#EBEEF2',
        fillOpacity: 0.65
      },

      /**
       * 获取 G6 图
       * @type {funtion}
       */
      getGraph: function getGraph() {}
    }, options));
    this._initContainer();
    this._initMiniMap();
    this._bindEvent();
  }

  _createClass(Minimap, [{
    key: '_bindEvent',
    value: function _bindEvent() {
      var _this = this;

      var controlLayer = this.controlLayer;
      var miniMapViewPortActived = false;
      var startMatrix = void 0;
      var miniMapScale = void 0;
      var graphScale = void 0;
      var startPoint = void 0;
      var graph = void 0;
      controlLayer.on('mousedown', function (ev) {
        if (!_this.miniMapMatrix) {
          return;
        }
        graph = _this.getGraph();
        miniMapViewPortActived = true;
        startMatrix = Util.cloneDeep(graph.getMatrix());
        miniMapScale = _this.miniMapMatrix[0];
        graphScale = startMatrix[0];
        startPoint = {
          clientX: ev.clientX,
          clientY: ev.clientY
        };
      });
      controlLayer.on('mouseup', function () {
        resetStatus();
      });
      controlLayer.on('mouseleave', function () {
        resetStatus();
      });
      controlLayer.on('mousemove', function (ev) {
        if (miniMapViewPortActived && graph) {
          var dx = startPoint.clientX - ev.clientX;
          var dy = startPoint.clientY - ev.clientY;
          var matrix = Util.cloneDeep(startMatrix);
          Util.mat3.translate(matrix, matrix, [graphScale * dx / miniMapScale, graphScale * dy / miniMapScale]);
          graph.updateMatrix(matrix);
        }
      });
      function resetStatus() {
        miniMapViewPortActived = false;
        miniMapScale = undefined;
        startPoint = undefined;
        startMatrix = undefined;
        graphScale = undefined;
        graph = undefined;
      }
    }
  }, {
    key: '_initMiniMap',
    value: function _initMiniMap() {
      var background = this.background;
      var viewport = this.viewPort;
      var width = this.width;
      var height = this.height;
      var viewportWindowStyle = this.viewportWindowStyle;
      var viewportBackStyle = this.viewportBackStyle;
      var miniMapCanvas = new Canvas({
        containerDOM: background,
        width: width,
        height: height
      });
      var viewportCanvas = new Canvas({
        containerDOM: viewport,
        width: width,
        height: height
      });
      var viewportWindow = viewportCanvas.addShape('rect', {
        attrs: _extends({
          x: 0,
          y: 0,
          width: width,
          height: height
        }, viewportWindowStyle)
      });
      var viewportBack = viewportCanvas.addShape('path', {
        attrs: _extends({
          path: 'M0,0 L1,1'
        }, viewportBackStyle)
      });

      background.css({
        width: width + 'px',
        height: height + 'px'
      });
      viewport.css({
        position: 'absolute'
      });
      this.miniMapCanvas = miniMapCanvas;
      this.viewportCanvas = viewportCanvas;
      this.viewportWindow = viewportWindow;
      this.viewportBack = viewportBack;
    }
  }, {
    key: '_initContainer',
    value: function _initContainer() {
      var container = this.container;
      var width = this.width;
      var height = this.height;
      if (container) {
        if (Util.isString(container)) {
          container = document.getElementById(container);
        }
      } else {
        throw new Error('please set the container for the minimap !');
      }
      if (!width) {
        width = Util.getWidth(container);
      }
      if (!height) {
        height = Util.getHeight(container);
      }
      var minimapContainerStyle = this.minimapContainerStyle;
      var backgroundStyle = this.backgroundStyle;
      var viewportStyle = this.viewportStyle;
      var controlLayerStyle = this.controlLayerStyle;
      var minimapContainer = Util.createDOM('<div class="g6-editor-minimap-container"></div>', minimapContainerStyle);
      var background = Util.createDOM('<div class="g6-editor-minimap-background"></div>', backgroundStyle);
      var viewPort = Util.createDOM('<div class="g6-editor-minimap-viewport">', viewportStyle);
      var controlLayer = Util.createDOM('<div class="g6-editor-minimap-control-layer">', controlLayerStyle);
      container.appendChild(minimapContainer);
      minimapContainer.appendChild(controlLayer);
      minimapContainer.appendChild(viewPort);
      minimapContainer.appendChild(background);
      this.minimapContainer = minimapContainer;
      this.background = background;
      this.viewPort = viewPort;
      this.controlLayer = controlLayer;
    }
    // 1. 为了防止画面闪烁 2. 为了缩略图中元素最小尺寸可控；所以这里采取了一种比较 hack 的方式绘制缩略图
    // 大体思路是将 graph canvas 的 context 篡改为 minimap canvas 的 context，然后用 graph 的 canvas 去画

  }, {
    key: 'renderBackground',
    value: function renderBackground(graph) {
      if (!graph) {
        graph = this.getGraph();
      }
      var miniMapCanvas = this.miniMapCanvas;
      var width = this.width;
      var height = this.height;
      Util.graph2Canvas({
        graph: graph,
        width: width,
        height: height,
        canvas: miniMapCanvas
      });
      this.miniMapMatrix = miniMapCanvas.matrix;
    }
  }, {
    key: 'renderViewPort',
    value: function renderViewPort(graph) {
      if (graph.getItems().length === 0) {
        return;
      }
      var viewportWindow = this.viewportWindow;
      var viewportCanvas = this.viewportCanvas;
      var viewportBack = this.viewportBack;
      var miniMapMatrix = this.miniMapMatrix;
      var graphWidth = graph.getWidth();
      var graphHeight = graph.getHeight();
      var width = this.width;
      var height = this.height;
      var graphMatrix = graph.getMatrix();
      if (!miniMapMatrix) {
        return;
      }
      var graphTL = Util.invertMatrix({
        x: 0,
        y: 0
      }, graphMatrix);
      var graphBR = Util.invertMatrix({
        x: graphWidth,
        y: graphHeight
      }, graphMatrix);
      var viewPortTL = Util.applyMatrix(graphTL, miniMapMatrix);
      var viewPortBR = Util.applyMatrix(graphBR, miniMapMatrix);
      var windowWidth = viewPortBR.x - viewPortTL.x;
      var windowHeight = viewPortBR.y - viewPortTL.y;
      viewportBack.attr({
        path: [['M', 0, 0], ['L', width, 0], ['L', width, height], ['L', 0, height], ['L', 0, 0], ['M', viewPortTL.x, viewPortTL.y], ['L', viewPortTL.x, viewPortBR.y], ['L', viewPortBR.x, viewPortBR.y], ['L', viewPortBR.x, viewPortTL.y], ['L', viewPortTL.x, viewPortTL.y]]
      });
      viewportWindow.attr({
        x: viewPortTL.x,
        y: viewPortTL.y,
        width: windowWidth,
        height: windowHeight
      });
      viewportCanvas.draw();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.minimapContainer.destroy();
    }
  }]);

  return Minimap;
}();

module.exports = Minimap;

/***/ }),

/***/ "./src/page/base/behaviour/clickCanvasSelected.js":
/*!********************************************************!*\
  !*** ./src/page/base/behaviour/clickCanvasSelected.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview click blank clear selected
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('clickCanvasSelected', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('click', function (ev) {
    if (!ev.shape) {
      // page.executeCommand(() => {
      //   page.clearSelected();
      //   page.clearActived();
      //   page.updateStatus();
      // });
      page.clearSelected();
      page.clearActived();
      page.updateStatus();
    }
  });
  graph.behaviourOn('contextmenu', function (ev) {
    if (!ev.shape) {
      // page.executeCommand(() => {
      //   page.clearSelected();
      //   page.clearActived();
      //   page.updateStatus();
      // });
      page.clearSelected();
      page.clearActived();
      page.updateStatus();
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/clickCollapsedButton.js":
/*!*********************************************************!*\
  !*** ./src/page/base/behaviour/clickCollapsedButton.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview click collapsed button
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('clickCollapsedButton', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('click', function (ev) {
    var item = ev.item;
    var shape = ev.shape;
    if (item && shape && shape.isCollapsedButton) {
      var editor = page.editor;
      if (editor) {
        editor.executeCommand('collapseExpand', {
          itemId: item.id
        });
      } else {
        graph.update(item, {
          collapsed: true
        });
      }
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/clickEdgeSelected.js":
/*!******************************************************!*\
  !*** ./src/page/base/behaviour/clickEdgeSelected.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview click select edge
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('clickEdgeSelected', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('edge:click', function (ev) {
    var multiSelectable = page.get('multiSelectable');
    if (multiSelectable && page.getSignal('shiftKeyDown') === true) {
      page.setSelected(ev.item.id, true);
    } else {
      page.clearActived();
      page.clearSelected();
      page.setSelected(ev.item.id, true);
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/clickExpandedButton.js":
/*!********************************************************!*\
  !*** ./src/page/base/behaviour/clickExpandedButton.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview click expanded button
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('clickExpandedButton', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('click', function (ev) {
    var item = ev.item;
    var shape = ev.shape;
    if (item && shape && shape.isExpandedButton) {
      var editor = page.editor;
      if (editor) {
        editor.executeCommand('collapseExpand', {
          itemId: item.id
        });
      } else {
        graph.update(item, {
          collapsed: false
        });
      }
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/clickGroupSelected.js":
/*!*******************************************************!*\
  !*** ./src/page/base/behaviour/clickGroupSelected.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview click select group
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('clickGroupSelected', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('group:click', function (ev) {
    var multiSelectable = page.get('multiSelectable');
    if (multiSelectable && page.getSignal('shiftKeyDown') === true) {
      page.setSelected(ev.item.id, true);
    } else {
      page.clearActived();
      page.clearSelected();
      page.setSelected(ev.item.id, true);
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/clickNodeSelected.js":
/*!******************************************************!*\
  !*** ./src/page/base/behaviour/clickNodeSelected.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview click select node
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('clickNodeSelected', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('node:click', function (ev) {
    var multiSelectable = page.get('multiSelectable');
    if (multiSelectable && page.getSignal('shiftKeyDown') === true) {
      page.setSelected(ev.item.id, true);
    } else {
      page.clearActived();
      page.clearSelected();
      page.setSelected(ev.item.id, true);
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/dblclickItemEditLabel.js":
/*!**********************************************************!*\
  !*** ./src/page/base/behaviour/dblclickItemEditLabel.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview dblclick item edit label
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('dblclickItemEditLabel', function (page) {
  var graph = page.getGraph();

  graph.behaviourOn('node:dblclick', function (ev) {
    if (ev.shape && !ev.shape.isButton) {
      page.beginEditLabel(ev.item);
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/endPanItem.js":
/*!***********************************************!*\
  !*** ./src/page/base/behaviour/endPanItem.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview start pan item
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('endPanItem', function (page) {
  var graph = page.getGraph();
  var frontCanvas = graph.getFrontCanvas();
  var frontRootGroup = graph.getFrontRootGroup();

  graph.behaviourOn('panitemend', function () {
    var delegation = page.get('panItemDelegation');
    if (delegation) {
      delegation.remove();
      frontCanvas.draw();
    }
    frontRootGroup.set('capture', true);
    page.setSignal('panningItem', false);
    page.set('panItemDelegation', undefined);
    page.set('panItemStartPoint', undefined);
    page.set('panItemStartBox', undefined);
    page.set('panItems', undefined);
  });
  graph.behaviourOn('canvas:mouseleave', function () {
    var panItems = page.get('panItems');
    if (!panItems) {
      return;
    }
    page.clearAlignLine();
    graph.emit('panitemend');
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/hoverButton.js":
/*!************************************************!*\
  !*** ./src/page/base/behaviour/hoverButton.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview hover button
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('hoverButton', function (flow) {
  var graph = flow.getGraph();
  graph.behaviourOn('mouseenter', function (ev) {
    if (flow.getSignal('panningItem')) {
      return;
    }
    if (ev.shape && ev.shape.isButton) {
      flow.css({
        cursor: 'pointer'
      });
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/hoverEdgeActived.js":
/*!*****************************************************!*\
  !*** ./src/page/base/behaviour/hoverEdgeActived.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview hover node
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('hoverEdgeActived', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('edge:mouseenter', function (ev) {
    if (page.getSignal('panningItem') || ev.item && ev.item.isSelected) {
      return;
    }
    page.setActived(ev.item, true);
  });
  graph.behaviourOn('edge:mouseleave', function (ev) {
    page.setActived(ev.item, false);
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/hoverGroupActived.js":
/*!******************************************************!*\
  !*** ./src/page/base/behaviour/hoverGroupActived.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview hover group
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('hoverGroupActived', function (page) {
  var graph = page.getGraph();
  graph.behaviourOn('mouseenter', function (ev) {
    if (page.getSignal('panningItem') || ev.item && ev.item.isSelected) {
      return;
    }
    if (ev.shape && ev.shape.isGroupKeyShape) {
      page.css({
        cursor: 'move'
      });
      page.setActived(ev.item, true);
    }
  });
  graph.behaviourOn('group:mouseleave', function (ev) {
    if (ev.item.isActived && !ev.item.isSelected) {
      page.setActived(ev.item, false);
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/hoverNodeActived.js":
/*!*****************************************************!*\
  !*** ./src/page/base/behaviour/hoverNodeActived.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview hover node
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('hoverNodeActived', function (page) {
  var graph = page.getGraph();
  var hoverItem = void 0;
  graph.behaviourOn('node:mouseenter', function (ev) {
    var item = ev.item;

    var shapeObj = item.getShapeObj();
    if (shapeObj.panAble !== false) {
      page.css({
        cursor: 'move'
      });
    }
    if (page.getSignal('panningItem') || ev.item && ev.item.isSelected) {
      return;
    }
    hoverItem = ev.item;
    page.setActived(hoverItem, true);
  });
  graph.behaviourOn('node:mouseleave', function (ev) {
    var toShape = ev.toShape;
    if (!hoverItem) {
      return;
    }
    if (toShape && toShape.isAnchor && toShape.getItem() === hoverItem) {
      return;
    }
    if (!hoverItem.isSelected) {
      page.setActived(hoverItem, false);
    }
    resetStatus();
  });
  function resetStatus() {
    hoverItem = undefined;
  }
});

/***/ }),

/***/ "./src/page/base/behaviour/index.js":
/*!******************************************!*\
  !*** ./src/page/base/behaviour/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview behaviour picker
 * @author huangtonger@aliyun.com
 */

__webpack_require__(/*! ./panBlank */ "./src/page/base/behaviour/panBlank.js");
__webpack_require__(/*! ./hoverButton */ "./src/page/base/behaviour/hoverButton.js");
__webpack_require__(/*! ./panCanvas */ "./src/page/base/behaviour/panCanvas.js");
__webpack_require__(/*! ./wheelPanCanvas */ "./src/page/base/behaviour/wheelPanCanvas.js");
__webpack_require__(/*! ./processPanItem */ "./src/page/base/behaviour/processPanItem.js");
__webpack_require__(/*! ./startPanItem */ "./src/page/base/behaviour/startPanItem.js");
__webpack_require__(/*! ./endPanItem */ "./src/page/base/behaviour/endPanItem.js");
__webpack_require__(/*! ./dblclickItemEditLabel */ "./src/page/base/behaviour/dblclickItemEditLabel.js");
__webpack_require__(/*! ./clickCanvasSelected */ "./src/page/base/behaviour/clickCanvasSelected.js");
__webpack_require__(/*! ./clickCollapsedButton */ "./src/page/base/behaviour/clickCollapsedButton.js");
__webpack_require__(/*! ./clickEdgeSelected */ "./src/page/base/behaviour/clickEdgeSelected.js");
__webpack_require__(/*! ./clickExpandedButton */ "./src/page/base/behaviour/clickExpandedButton.js");
__webpack_require__(/*! ./clickGroupSelected */ "./src/page/base/behaviour/clickGroupSelected.js");
__webpack_require__(/*! ./clickNodeSelected */ "./src/page/base/behaviour/clickNodeSelected.js");
__webpack_require__(/*! ./hoverNodeActived */ "./src/page/base/behaviour/hoverNodeActived.js");
__webpack_require__(/*! ./hoverGroupActived */ "./src/page/base/behaviour/hoverGroupActived.js");
__webpack_require__(/*! ./hoverEdgeActived */ "./src/page/base/behaviour/hoverEdgeActived.js");

/***/ }),

/***/ "./src/page/base/behaviour/panBlank.js":
/*!*********************************************!*\
  !*** ./src/page/base/behaviour/panBlank.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview pan blank canvas behaviour
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");

Page.registerBehaviour('panBlank', Util.getPanCanvasBehaviour(true));

/***/ }),

/***/ "./src/page/base/behaviour/panCanvas.js":
/*!**********************************************!*\
  !*** ./src/page/base/behaviour/panCanvas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview pan canvas behaviour
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");

Page.registerBehaviour('panCanvas', Util.getPanCanvasBehaviour());

/***/ }),

/***/ "./src/page/base/behaviour/processPanItem.js":
/*!***************************************************!*\
  !*** ./src/page/base/behaviour/processPanItem.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview process pan item
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('processPanItem', function (page) {
  var graph = page.getGraph();
  var frontCanvas = graph.getFrontCanvas();

  graph.behaviourOn('mousemove', function (ev) {
    var delegation = page.get('panItemDelegation');
    if (delegation) {
      var startPoint = page.get('panItemStartPoint');
      var startBox = page.get('panItemStartBox');
      var dx = ev.x - startPoint.x;
      var dy = ev.y - startPoint.y;
      var point = page.align({
        x: startBox.minX + dx,
        y: startBox.minY + dy
      }, {
        width: startBox.width,
        height: startBox.height
      });
      delegation.attr({
        x: point.x,
        y: point.y
      });
      graph.emit('itempanning', ev);
      frontCanvas.draw();
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/startPanItem.js":
/*!*************************************************!*\
  !*** ./src/page/base/behaviour/startPanItem.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview start pan item
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");

Page.registerBehaviour('startPanItem', function (page) {
  var graph = page.getGraph();
  var frontCanvas = graph.getFrontCanvas();
  var frontRootGroup = graph.getFrontRootGroup();

  graph.behaviourOn('dragstart', function (ev) {
    if (ev.button === 2 || !ev.item || !ev.item.isNode && !ev.item.isGroup) {
      return;
    }
    var panItem = ev.item;
    var panItems = void 0;
    if (panItem.isSelected) {
      panItems = page.getSelected();
    } else {
      panItems = [panItem];
    }
    panItems = panItems.filter(function (item) {
      return item.isNode || item.isGroup;
    });
    if (panItems[0] && panItems[0].dragable !== false) {
      graph.emit('beforeshowdelegation');
      var delegation = page.getDelegation(panItems, frontRootGroup);
      var startBox = delegation.getBBox();
      page.setSignal('panningItem', true);
      page.set('panItems', panItems);
      page.set('panItemDelegation', delegation);
      page.set('panItemStartBox', startBox);
      page.set('panItemStartPoint', {
        x: ev.x,
        y: ev.y
      });
      frontRootGroup.set('capture', false);
      frontCanvas.draw();
    }
  });
});

/***/ }),

/***/ "./src/page/base/behaviour/wheelPanCanvas.js":
/*!***************************************************!*\
  !*** ./src/page/base/behaviour/wheelPanCanvas.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview wheel pan canvas
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../page */ "./src/page/base/page.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/base/global.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");

Page.registerBehaviour('wheelPanCanvas', function (page) {
  var graph = page.getGraph();
  var timeout = void 0;
  graph.behaviourOn('mousewheel', function (ev) {
    var domEvent = ev.domEvent;

    domEvent.preventDefault();
  });
  graph.behaviourOn('mousewheel', Util.throttle(update, 16));
  function update(ev) {
    if (page.getSignal('preventWheelPan')) {
      return;
    }

    var domEvent = ev.domEvent;

    var wheelZoom = page.getSignal('wheelZoom');
    if (!timeout) {
      page.setCapture(false);
    }
    if (wheelZoom) {
      var delta = domEvent.wheelDelta;
      var times = 1.05;
      if (Math.abs(delta) > 10) {
        // 控制灵敏度
        var originScale = graph.getMatrix()[0];
        if (delta > 0) {
          graph.zoom({
            x: ev.x,
            y: ev.y
          }, originScale * times);
        } else {
          graph.zoom({
            x: ev.x,
            y: ev.y
          }, originScale * (1 / times));
        }
      }
    } else {
      var matrix = [];
      var startMatrix = graph.getMatrix();
      Util.mat3.translate(matrix, startMatrix, [domEvent.wheelDeltaX * Global.wheelPanRatio, domEvent.wheelDeltaY * Global.wheelPanRatio]);
      page.translateLimt(matrix) && graph.updateMatrix(matrix);
    }
    timeout && clearTimeout(timeout);
    timeout = setTimeout(function () {
      page.setCapture(true);
      timeout = undefined;
    }, 50);
  }
});

/***/ }),

/***/ "./src/page/base/controller/align.js":
/*!*******************************************!*\
  !*** ./src/page/base/controller/align.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview align controller
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ../../../simpleBase */ "./src/simpleBase.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/base/global.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");

function getLineDisObject(line, point) {
  return {
    line: line,
    point: point,
    dis: Util.pointLineDistance(line[0], line[1], line[2], line[3], point.x, point.y)
  };
}

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        /**
         * align line style shoule set g attrs
         * @type {object}
         */
        line: Global.alignLineStyle,

        /**
         * item align type
         * @type {String|True|False}
         */
        item: true, // true || false || 'horizontal' || 'vertical' || 'center',

        /**
         * align type could be true || false || 'cc' || 'tl',
         * @type {String|Boolean}
         */
        grid: false,

        /**
         * tolerance to item force align
         * @type {String|True|False}
         */
        tolerance: 5,
        _horizontalLines: {},
        _verticalLines: {},
        _alignLines: []
      };
    }
  }, {
    key: 'init',
    value: function init() {
      this.item && this._cacheBoxLine();
    }
  }, {
    key: '_cacheBoxLine',
    value: function _cacheBoxLine() {
      var graph = this.graph;
      var horizontalLines = this._horizontalLines;
      var verticalLines = this._verticalLines;
      var itemAlignType = this.item;
      graph.on('afteritemdraw', function (ev) {
        var item = ev.item;
        if (!Util.isEdge(item)) {
          var bbox = item.getBBox();
          // set horizontal lines
          if (itemAlignType === true || itemAlignType === 'horizontal') {
            horizontalLines[item.id + 'tltr'] = [bbox.minX, bbox.minY, bbox.maxX, bbox.minY, item];
            horizontalLines[item.id + 'lcrc'] = [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY, item];
            horizontalLines[item.id + 'blbr'] = [bbox.minX, bbox.maxY, bbox.maxX, bbox.maxY, item];
          } else if (itemAlignType === 'center') {
            horizontalLines[item.id + 'lcrc'] = [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY, item];
          }
          // set vertical lines
          if (itemAlignType === true || itemAlignType === 'vertical') {
            verticalLines[item.id + 'tlbl'] = [bbox.minX, bbox.minY, bbox.minX, bbox.maxY, item];
            verticalLines[item.id + 'tcbc'] = [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY, item];
            verticalLines[item.id + 'trbr'] = [bbox.maxX, bbox.minY, bbox.maxX, bbox.maxY, item];
          } else if (itemAlignType === 'center') {
            verticalLines[item.id + 'tcbc'] = [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY, item];
          }
        }
      });
      graph.on('beforeitemdestroy', function (ev) {
        var item = ev.item;
        delete horizontalLines[item.id + 'tltr'];
        delete horizontalLines[item.id + 'lcrc'];
        delete horizontalLines[item.id + 'blbr'];
        delete verticalLines[item.id + 'tlbl'];
        delete verticalLines[item.id + 'tcbc'];
        delete verticalLines[item.id + 'trbr'];
      });
    }
  }, {
    key: 'align',
    value: function align(point, bbox) {
      var originPoint = Util.mix({}, point);
      var flow = this.flow;
      var gridController = flow.getController('grid');
      this.grid && gridController && gridController.visible && this._gridAlign(point, bbox);
      this.item && this._itemAlign(point, bbox, originPoint);
      return point;
    }
  }, {
    key: '_gridAlign',
    value: function _gridAlign(point, bbox) {
      var flow = this.flow;
      var grid = this.grid;
      var cell = flow.getGridCell();
      if (grid === 'cc') {
        var centerX = Math.round((point.x + bbox.width / 2) / cell) * cell;
        var centerY = Math.round((point.y + bbox.height / 2) / cell) * cell;
        point.x = centerX - bbox.width / 2;
        point.y = centerY - bbox.height / 2;
      } else {
        point.x = Math.round(point.x / cell) * cell;
        point.y = Math.round(point.y / cell) * cell;
      }
    }
  }, {
    key: '_itemAlign',
    value: function _itemAlign(point, bbox, originPoint) {
      var horizontalLines = this._horizontalLines;
      var verticalLines = this._verticalLines;
      var tolerance = this.tolerance;
      var tc = {
        x: originPoint.x + bbox.width / 2,
        y: originPoint.y
      };
      var cc = {
        x: originPoint.x + bbox.width / 2,
        y: originPoint.y + bbox.height / 2
      };
      var bc = {
        x: originPoint.x + bbox.width / 2,
        y: originPoint.y + bbox.height
      };
      var lc = {
        x: originPoint.x,
        y: originPoint.y + bbox.height / 2
      };
      var rc = {
        x: originPoint.x + bbox.width,
        y: originPoint.y + bbox.height / 2
      };
      var horizontalDis = [];
      var verticalDis = [];
      var alignCfg = null;
      this.clearAlignLine();
      Util.each(horizontalLines, function (line) {
        if (line[4].isVisible()) {
          horizontalDis.push(getLineDisObject(line, tc));
          horizontalDis.push(getLineDisObject(line, cc));
          horizontalDis.push(getLineDisObject(line, bc));
        }
      });
      Util.each(verticalLines, function (line) {
        if (line[4].isVisible()) {
          verticalDis.push(getLineDisObject(line, lc));
          verticalDis.push(getLineDisObject(line, cc));
          verticalDis.push(getLineDisObject(line, rc));
        }
      });
      horizontalDis.sort(function (a, b) {
        return a.dis - b.dis;
      });
      verticalDis.sort(function (a, b) {
        return a.dis - b.dis;
      });
      if (horizontalDis.length !== 0 && horizontalDis[0].dis < tolerance) {
        point.y = horizontalDis[0].line[1] - horizontalDis[0].point.y + originPoint.y;
        alignCfg = {
          type: 'item',
          horizontals: [horizontalDis[0]]
        };
        for (var i = 1; i < 3; i++) {
          if (horizontalDis[0].dis === horizontalDis[i].dis) {
            alignCfg.horizontals.push(horizontalDis[i]);
          }
        }
      }
      if (verticalDis.length !== 0 && verticalDis[0].dis < tolerance) {
        point.x = verticalDis[0].line[0] - verticalDis[0].point.x + originPoint.x;
        if (!alignCfg) {
          alignCfg = {
            type: 'item',
            verticals: [verticalDis[0]]
          };
        } else {
          alignCfg.verticals = [verticalDis[0]];
        }
        for (var _i = 1; _i < 3; _i++) {
          if (verticalDis[0].dis === verticalDis[_i].dis) {
            alignCfg.verticals.push(verticalDis[_i]);
          }
        }
      }
      if (alignCfg) {
        alignCfg.bbox = bbox;
        this._addAlignLine(alignCfg);
      }
    }
  }, {
    key: 'clearAlignLine',
    value: function clearAlignLine() {
      var alignLines = this._alignLines;
      Util.each(alignLines, function (line) {
        line.remove();
      });
      this._alignLines = [];
    }
  }, {
    key: '_addAlignLine',
    value: function _addAlignLine(cfg) {
      var bbox = cfg.bbox;
      var graph = this.graph;
      var frontRootGroup = graph.getFrontRootGroup();
      var lineStyle = this.line;
      var alignLines = this._alignLines;
      if (cfg.type === 'item') {
        if (cfg.horizontals) {
          Util.each(cfg.horizontals, function (horizontal) {
            var refLine = horizontal.line;
            var refPoint = horizontal.point;
            var lineCenterX = (refLine[0] + refLine[2]) / 2;
            var x1 = void 0;
            var x2 = void 0;
            if (refPoint.x < lineCenterX) {
              x1 = refPoint.x - bbox.width / 2;
              x2 = Math.max(refLine[0], refLine[2]);
            } else {
              x1 = refPoint.x + bbox.width / 2;
              x2 = Math.min(refLine[0], refLine[2]);
            }
            var line = frontRootGroup.addShape('line', {
              attrs: Util.mix({
                x1: x1,
                y1: refLine[1],
                x2: x2,
                y2: refLine[1]
              }, lineStyle),
              capture: false
            });
            alignLines.push(line);
          });
        }

        if (cfg.verticals) {
          Util.each(cfg.verticals, function (vertical) {
            var refLine = vertical.line;
            var refPoint = vertical.point;
            var lineCenterY = (refLine[1] + refLine[3]) / 2;
            var y1 = void 0;
            var y2 = void 0;
            if (refPoint.y < lineCenterY) {
              y1 = refPoint.y - bbox.height / 2;
              y2 = Math.max(refLine[1], refLine[3]);
            } else {
              y1 = refPoint.y + bbox.height / 2;
              y2 = Math.min(refLine[1], refLine[3]);
            }
            var line = frontRootGroup.addShape('line', {
              attrs: Util.mix({
                x1: refLine[0],
                y1: y1,
                x2: refLine[0],
                y2: y2
              }, lineStyle),
              capture: false
            });
            alignLines.push(line);
          });
        }
      }
    }
  }]);

  return Controller;
}(Base);

module.exports = Controller;

/***/ }),

/***/ "./src/page/base/controller/grid.js":
/*!******************************************!*\
  !*** ./src/page/base/controller/grid.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview align controller
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ../../../simpleBase */ "./src/simpleBase.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/base/global.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        /**
         * grid cell
         * @type {number}
         */
        cell: 16,
        /**
         * grid line style
         * @type {object}
         */
        line: Global.gridStyle,
        /**
         * grid line style
         * @type {string}
         */
        type: 'point',
        /**
         * visible
         * @type {boolean}
         */
        visible: true
      };
    }
  }, {
    key: 'init',
    value: function init() {
      this._draw();
      this._onViewPortChange();
      !this.visible && this.hide();
    }
  }, {
    key: '_onViewPortChange',
    value: function _onViewPortChange() {
      var _this2 = this;

      var graph = this.graph;
      graph.on('afterviewportchange', function () {
        _this2.update();
      });
      graph.on('beforechangesize', function () {
        _this2.update();
      });
    }
  }, {
    key: '_draw',
    value: function _draw() {
      var graph = this.graph;
      var path = this._getPath();
      var group = graph.getRootGroup();
      var attrs = Util.mix({}, this.line);
      var matrix = graph.getMatrix();
      var type = this.type;
      var lineWidth = type === 'line' ? 1 / matrix[0] : 2 / matrix[0];
      if (type === 'point') {
        attrs.lineDash = null;
      }
      attrs.lineWidth = lineWidth;
      attrs.path = path;
      var gridEl = group.addShape('path', {
        attrs: attrs,
        capture: false,
        zIndex: 0
      });
      Util.toBack(gridEl, group);
      this.gridEl = gridEl;
    }
  }, {
    key: 'show',
    value: function show() {
      this.gridEl.show();
      this.visible = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.gridEl.hide();
      this.visible = false;
    }
  }, {
    key: '_getLinePath',
    value: function _getLinePath() {
      var graph = this.graph;
      var width = graph.get('width');
      var height = graph.get('height');
      var tl = graph.getPoint({
        x: 0,
        y: 0
      });
      var br = graph.getPoint({
        x: width,
        y: height
      });
      var cell = this.cell;
      var flooX = Math.ceil(tl.x / cell) * cell;
      var flooY = Math.ceil(tl.y / cell) * cell;
      var path = [];
      for (var i = 0; i <= br.x - tl.x; i += cell) {
        var x = flooX + i;
        path.push(['M', x, tl.y]);
        path.push(['L', x, br.y]);
      }
      for (var j = 0; j <= br.y - tl.y; j += cell) {
        var y = flooY + j;
        path.push(['M', tl.x, y]);
        path.push(['L', br.x, y]);
      }
      return path;
    }
  }, {
    key: '_getPointPath',
    value: function _getPointPath() {
      var graph = this.graph;
      var width = graph.get('width');
      var height = graph.get('height');
      var tl = graph.getPoint({
        x: 0,
        y: 0
      });
      var matrix = graph.getMatrix();
      var detalx = 2 / matrix[0];
      var br = graph.getPoint({
        x: width,
        y: height
      });
      var cell = this.getCell();
      var flooX = Math.ceil(tl.x / cell) * cell;
      var flooY = Math.ceil(tl.y / cell) * cell;
      var path = [];
      for (var i = 0; i <= br.x - tl.x; i += cell) {
        var x = flooX + i;
        for (var j = 0; j <= br.y - tl.y; j += cell) {
          var y = flooY + j;
          path.push(['M', x, y]);
          path.push(['L', x + detalx, y]);
        }
      }
      return path;
    }
  }, {
    key: 'getCell',
    value: function getCell() {
      var cell = this.cell;
      var graph = this.graph;
      var matrix = graph.getMatrix();
      var scale = matrix[0];
      if (cell * scale < 9.6) {
        return 9.6 / scale;
      }
      return cell;
    }
  }, {
    key: '_getPath',
    value: function _getPath() {
      var type = this.type;
      return this['_get' + Util.upperFirst(type) + 'Path']();
    }
  }, {
    key: 'update',
    value: function update(cfg) {
      Util.mix(this, cfg);
      var path = this._getPath();
      var gridEl = this.gridEl;
      var graph = this.graph;
      var matrix = graph.getMatrix();
      var type = this.type;
      var lineWidth = type === 'line' ? 1 / matrix[0] : 2 / matrix[0];
      gridEl.attr('lineWidth', lineWidth);
      gridEl.attr('path', path);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var gridEl = this.gridEl;
      gridEl && gridEl.remove();
    }
  }]);

  return Controller;
}(Base);

module.exports = Controller;

/***/ }),

/***/ "./src/page/base/global.js":
/*!*********************************!*\
  !*** ./src/page/base/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileOverview global cfg
 * @author huangtonger@aliyun.com
 */

module.exports = {
  // 栅格样式
  gridStyle: {
    stroke: '#A3B1BF',
    lineWidth: 0.5
  },
  // 光标样式
  cursor: {
    panningCanvas: '-webkit-grabbing',
    beforePanCanvas: '-webkit-grab'
  },
  // 滚轮滑动系数
  wheelPanRatio: 0.3,
  // 对齐线样式
  alignLineStyle: {
    stroke: '#FA8C16',
    lineWidth: 1
  }
};

/***/ }),

/***/ "./src/page/base/index.js":
/*!********************************!*\
  !*** ./src/page/base/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview page entry file
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var Page = __webpack_require__(/*! ./page */ "./src/page/base/page.js");
var Util = __webpack_require__(/*! ./util/ */ "./src/page/base/util/index.js");
var baseShapeObj = {
  getPath: function getPath() {/* item */},
  getStyle: function getStyle() {/* item */},
  getActivedStyle: function getActivedStyle() /* item */{},
  getSelectedStyle: function getSelectedStyle() /* item */{}
};

G6.registerNode('page-base', _extends({}, baseShapeObj));
G6.registerEdge('page-base', _extends({}, baseShapeObj));
G6.registerGroup('page-base', _extends({}, baseShapeObj));

function getExtendShape(extend, baseExtend) {
  var rst = [];
  if (Util.isString(extend)) {
    rst = [baseExtend, extend];
  } else if (Util.isArray(extend)) {
    extend.unshift(baseExtend);
    rst = extend;
  } else {
    rst = [baseExtend];
  }
  rst.unshift('page-base');
  return rst;
}

Page.registerBehaviour = function (name, behaviour, dependences) {
  G6.registerBehaviour(name, function (graph) {
    var page = graph.get('page');
    page.set('_graph', graph);
    behaviour(page);
  }, dependences);
};

Page.setRegister = function (Constructor, baseExtendNode, baseExtendEdge, baseExtendGroup) {
  Constructor.registerNode = G6.registerNode;
  Constructor.registerEdge = G6.registerEdge;
  Constructor.registerGroup = G6.registerGroup;
  Constructor.registerGuide = G6.registerGuide;
  if (baseExtendNode) {
    Constructor.registerNode = function (name, cfg, extend) {
      Page.registerNode(name, cfg, getExtendShape(extend, baseExtendNode));
    };
  }
  if (baseExtendEdge) {
    Constructor.registerEdge = function (name, cfg, extend) {
      Page.registerEdge(name, cfg, getExtendShape(extend, baseExtendEdge));
    };
  }
  if (baseExtendGroup) {
    Constructor.registerGroup = function (name, cfg, extend) {
      Page.registerGroup(name, cfg, getExtendShape(extend, baseExtendGroup));
    };
  }
};
Page.registerNode = G6.registerNode;
Page.registerEdge = G6.registerEdge;
Page.registerGroup = G6.registerGroup;
Page.registerGuide = G6.registerGuide;
__webpack_require__(/*! ./behaviour/ */ "./src/page/base/behaviour/index.js");
module.exports = Page;

/***/ }),

/***/ "./src/page/base/mixin/active.js":
/*!***************************************!*\
  !*** ./src/page/base/mixin/active.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview active
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util */ "./src/page/base/util/index.js");
var Mixin = {};

Mixin.CFG = {
  /**
   * @type {boolean}
   */
  activeable: true,

  /**
   * @type {object}
   */
  _activedCache: {}
};

Mixin.INIT = '_initActived';
Mixin.AUGMENT = {
  _initActived: function _initActived() {
    var _this = this;

    var graph = this.get('_graph');
    graph.on('afteritemdraw', function (ev) {
      if (ev.item.isActived) {
        _this.setActived(ev.item, true);
      }
    });
    graph.on('beforeitemdestroy', function (ev) {
      _this.clearActived(ev.item);
    });
  },

  /**
   * @param {object} item g6 item
   */
  setItemActived: function setItemActived(item) {
    var graph = this.get('_graph');
    var shapeObj = graph.getShapeObj(item);
    var activedCache = this.get('_activedCache');
    var activedStyle = shapeObj.getActivedStyle(item);
    var keyShape = item.getKeyShape();
    activedCache[item.id] = item;
    activedStyle && keyShape.attr(activedStyle);
    if (item.isEdge) {
      keyShape.startArrow && keyShape.startArrow.attr({
        fill: activedStyle.stroke
      });
      keyShape.endArrow && keyShape.endArrow.attr({
        fill: activedStyle.stroke
      });
    }
  },

  /**
   * @param {object} item g6 item
   */
  clearItemActived: function clearItemActived(item) {
    var graph = this.get('_graph');
    var keyShape = item.getKeyShape();
    var shapeObj = graph.getShapeObj(item);
    var initAttrs = keyShape.get('attrs');
    var activedCache = this.get('_activedCache');
    var activedStyle = shapeObj.getActivedStyle(item);
    var contrastAttrs = Util.getContrast(initAttrs, activedStyle);
    keyShape.attr(contrastAttrs);
    if (item.isEdge) {
      keyShape.startArrow && keyShape.startArrow.attr({
        fill: contrastAttrs.stroke
      });
      keyShape.endArrow && keyShape.endArrow.attr({
        fill: contrastAttrs.stroke
      });
    }
    delete activedCache[item.id];
  },

  /**
   * @param {object|string|array} param item || itemId || items
   * @param {boolean} bool true || false
   */
  setActived: function setActived(param, bool) {
    var _this2 = this;

    var activeable = this.get('activeable');
    var graph = this.get('_graph');

    if (!activeable) {
      return;
    }
    var items = void 0;
    if (Util.isArray(param)) {
      items = param;
    } else {
      items = [param];
    }

    Util.each(items, function (item) {
      if (Util.isString(item)) {
        item = graph.find(item);
      }
      if (!item || item.destroyed) {
        return;
      }
      if (bool && item.isActived) {
        return;
      }
      if (!bool && !item.isActived) {
        return;
      }
      if (bool) {
        _this2.emit('beforeitemactived', {
          item: item
        });
        _this2.setItemActived(item);
        _this2.emit('afteritemactived', {
          item: item
        });
      } else {
        _this2.emit('beforeitemunactived', {
          item: item
        });
        _this2.clearItemActived(item);
        _this2.emit('afteritemunactived', {
          item: item
        });
      }
      item.isActived = bool;
    });
    graph.draw();
  },

  /**
   * get all actived items
   * @return {array} items
   */
  getActived: function getActived() {
    var activedCache = this.get('_activedCache');
    return Util.objectToValues(activedCache);
  },

  /**
   * clear all actived items
   */
  clearActived: function clearActived() {
    var _this3 = this;

    var graph = this.get('_graph');
    var frontCanvas = graph.getFrontCanvas();
    var items = this.get('_activedCache');

    Util.each(items, function (item) {
      item.isActived && _this3.setActived(item, false);
    });
    frontCanvas.draw();
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/mixin/align.js":
/*!**************************************!*\
  !*** ./src/page/base/mixin/align.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview align
 * @author huangtonger@aliyun.com
 */

var AlignController = __webpack_require__(/*! ../controller/align */ "./src/page/base/controller/align.js");
var Mixin = {};

Mixin.CFG = {
  /**
   * align cfg
   * @type {object|undefined}
   */
  align: {}
};
Mixin.INIT = '_initAlign';
Mixin.AUGMENT = {
  _initAlign: function _initAlign() {
    var alignCfg = this.get('align');
    var graph = this.get('_graph');
    var alignController = new AlignController(_extends({
      flow: this,
      graph: graph
    }, alignCfg));
    this.setController('align', alignController);
  },
  align: function align(point, bbox, id) {
    var alignController = this.getController('align');
    return alignController.align(point, bbox, id);
  },
  clearAlignLine: function clearAlignLine() {
    var alignController = this.getController('align');
    return alignController.clearAlignLine();
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/mixin/edit-label.js":
/*!*******************************************!*\
  !*** ./src/page/base/mixin/edit-label.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview edit label
 * @author huangtonger@aliyun.com
 */
var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");
var Mixin = {};

Mixin.CFG = {
  labelEditable: false
};
Mixin.INIT = '_initLabelEditor';
Mixin.AUGMENT = {
  _initLabelEditor: function _initLabelEditor() {
    var _this = this;

    var labelEditable = this.get('labelEditable');
    if (labelEditable) {
      var graph = this.getGraph();
      var labelTextArea = Util.createDOM('<div contenteditable="true" role="textbox" tabindex="1" class="g6-label-editor"></div>', {
        position: 'absolute',
        visibility: 'hidden',
        'z-index': '2',
        padding: '0px 2px 0px 0px',
        resize: 'none',
        width: 'auto',
        height: 'auto',
        outline: 'none',
        border: '1px solid #1890FF',
        'transform-origin': 'left top',
        'max-width': '320px',
        background: 'white',
        'box-sizing': 'content-box'
      });
      var container = graph.getGraphContainer();
      container.appendChild(labelTextArea);
      labelTextArea.on('blur', function (ev) {
        ev.stopPropagation();
        graph.getFrontCanvas().get('el') && _this.endEditLabel();
      });
      labelTextArea.on('keydown', function (ev) {
        ev.stopPropagation();
        var key = Util.getKeyboradKey(ev);
        if (ev.metaKey && key === 's' || ev.ctrlKey && key === 's') {
          ev.preventDefault();
        }
        if (key === 'Enter' || key === 'Escape') {
          _this.endEditLabel();
        }
      });
      this.set('labelTextArea', labelTextArea);
      graph.on('beforeviewportchange', function () {
        if (labelTextArea.focusItem) {
          _this.setLabelEditorBeginPosition(labelTextArea.focusItem);
        }
      });
    }
  },
  _getLabelTextAreaBox: function _getLabelTextAreaBox(labelShape, labelText) {
    var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];

    if (labelText) {
      labelShape.attr('text', labelText);
    }
    var graph = this.getGraph();
    var rootGroup = graph.getRootGroup();
    var labelBox = Util.getBBox(labelShape, rootGroup);
    return {
      minX: labelBox.minX - padding[1],
      minY: labelBox.minY - padding[0],
      maxX: labelBox.maxX + padding[1],
      maxY: labelBox.maxY + padding[0]
    };
  },
  setLabelEditorBeginPosition: function setLabelEditorBeginPosition(item) {
    var labelTextArea = this.get('labelTextArea');
    var labelShape = item.getLabel();
    if (labelShape) {
      var labelBox = this._getLabelTextAreaBox(labelShape);
      var lineHeight = labelShape.attr('lineHeight');
      var fontSize = labelShape.attr('fontSize');
      var labelPoint = {
        x: labelBox.minX,
        y: labelBox.minY - lineHeight / 4 + fontSize / 4 - 1,
        width: labelBox.maxX - labelBox.minX,
        height: labelBox.maxY - labelBox.minY
      };
      labelTextArea.css({
        top: labelPoint.y + 'px',
        left: labelPoint.x + 'px'
      });
      labelTextArea.labelPoint = labelPoint;
    } else {
      var graph = this.getGraph();
      var rootGroup = graph.getRootGroup();
      var keyShape = item.getKeyShape();
      var keyShapeBox = Util.getBBox(keyShape, rootGroup);
      var _labelPoint = {
        x: keyShapeBox.minY + (keyShapeBox.maxY - keyShapeBox.minY - labelTextArea.height()) / 2,
        y: (keyShapeBox.minX + keyShapeBox.maxX) / 2
      };
      labelTextArea.css({
        top: _labelPoint.x + 'px',
        left: _labelPoint.y + 'px'
      });
      labelTextArea.labelPoint = _labelPoint;
    }
  },
  beginEditLabel: function beginEditLabel(item) {
    var labelTextArea = this.get('labelTextArea');
    var graph = this.getGraph();
    if (Util.isString(item)) {
      item = graph.find(item);
    }
    if (item && !item.destroyed && labelTextArea) {
      this.setSignal('preventWheelPan', true);
      var model = item.getModel();
      var labelShape = item.getLabel();
      var zoom = graph.getZoom();
      labelTextArea.focusItem = item;
      if (labelShape) {
        var lineHeight = labelShape.attr('lineHeight');
        var labelBox = this._getLabelTextAreaBox(labelShape);
        var minWidth = (labelBox.maxX - labelBox.minX) / zoom;
        var minHeight = (labelBox.maxY - labelBox.minY + lineHeight / 4) / zoom;
        labelTextArea.innerHTML = model.label;
        labelTextArea.innerHTML = model.label;
        labelTextArea.css({
          'min-width': minWidth + 'px',
          'min-height': minHeight + 'px',
          visibility: 'visible',
          'font-family': labelShape.attr('fontFamily'),
          'line-height': lineHeight + 'px',
          'font-size': labelShape.attr('fontSize') + 'px',
          transform: 'scale(' + zoom + ')'
        });
      } else {
        labelTextArea.innerHTML = '';
        labelTextArea.css({
          'min-width': 'auto',
          'min-height': 'auto'
        });
      }
      this.setLabelEditorBeginPosition(item);
      labelTextArea.css({
        visibility: 'visible'
      });
      labelTextArea.focus();
      document.execCommand('selectAll', false, null);
    }
  },
  endEditLabel: function endEditLabel() {
    var labelTextArea = this.get('labelTextArea');
    this.setSignal('preventWheelPan', false);
    if (labelTextArea) {
      var item = labelTextArea.focusItem;
      if (item) {
        var model = item.getModel();
        if (model.label !== labelTextArea.textContent) {
          this.executeCommand('update', {
            itemId: item.id,
            updateModel: {
              label: labelTextArea.textContent
            }
          });
        }
        labelTextArea.hide();
        labelTextArea.focusItem = undefined;
        this.focusGraphWarrper();
      }
    }
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/mixin/event.js":
/*!**************************************!*\
  !*** ./src/page/base/mixin/event.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileOverview grid
 * @author huangtonger@aliyun.com
 */

var Mixin = {};
function bindBaseGraphEvent(graph, flow, eventName) {
  graph.on(eventName, function (ev) {
    flow.emit(eventName, ev);
  });
  graph.on('node:' + eventName, function (ev) {
    flow.emit('node:' + eventName, ev);
  });
  graph.on('edge:' + eventName, function (ev) {
    flow.emit('edge:' + eventName, ev);
  });
  graph.on('group:' + eventName, function (ev) {
    flow.emit('group:' + eventName, ev);
  });
  graph.on('anchor:' + eventName, function (ev) {
    flow.emit('anchor:' + eventName, ev);
  });
}
Mixin.INIT = '_initEvent';
Mixin.AUGMENT = {
  _initEvent: function _initEvent() {
    var _this = this;

    var graph = this.get('_graph');
    bindBaseGraphEvent(graph, this, 'click');
    bindBaseGraphEvent(graph, this, 'dblclick');
    bindBaseGraphEvent(graph, this, 'mouseenter');
    bindBaseGraphEvent(graph, this, 'mouseleave');
    bindBaseGraphEvent(graph, this, 'mousedown');
    bindBaseGraphEvent(graph, this, 'mouseup');
    bindBaseGraphEvent(graph, this, 'contextmenu');
    graph.on('keydown', function (ev) {
      _this.emit('keydown', ev);
    });
    graph.on('keyup', function (ev) {
      _this.emit('keyup', ev);
    });
    graph.on('beforechange', function (ev) {
      _this.emit('beforechange', ev);
    });
    graph.on('afterchange', function (ev) {
      _this.emit('afterchange', ev);
    });
    graph.on('afterviewportchange', function (ev) {
      _this.emit('afterviewportchange', ev);
      if (ev.updateMatrix[0] !== ev.originMatrix[0]) {
        _this.emit('afterzoom', ev);
      }
    });
    graph.on('beforeviewportchange', function (ev) {
      _this.emit('beforeviewportchange', ev);
      if (ev.updateMatrix[0] !== ev.originMatrix[0]) {
        _this.emit('beforezoom', ev);
      }
    });
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/mixin/graph.js":
/*!**************************************!*\
  !*** ./src/page/base/mixin/graph.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview graph base on G6.Graph
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");
var Mixin = {};
Mixin.INIT = '_initGraph';
Mixin.AUGMENT = {
  // graph
  _initGraph: function _initGraph() {
    var graphCfg = this.get('graph');
    var GraphConstructor = this.get('graphConstructor');
    var graph = new GraphConstructor(_extends({
      page: this
    }, graphCfg));
    graph.draw();
    this.set('_graph', graph);
  },
  changeMode: function changeMode(mode) {
    var graph = this.get('_graph');
    graph.changeMode(mode);
  },
  updateMatrix: function updateMatrix(matrix) {
    var graph = this.get('_graph');
    graph.updateMatrix(matrix);
  },
  getMode: function getMode() {
    var graph = this.get('_graph');
    return graph.get('mode');
  },
  getMatrix: function getMatrix() {
    var graph = this.get('_graph');
    var matrix = graph.getMatrix();
    return matrix;
  },
  getZoom: function getZoom() {
    var graph = this.get('_graph');
    var matrix = graph.getMatrix();
    return matrix[0];
  },
  getMaxZoom: function getMaxZoom() {
    var graph = this.get('_graph');
    return graph.get('maxZoom');
  },
  getMinZoom: function getMinZoom() {
    var graph = this.get('_graph');
    return graph.get('minZoom');
  },
  getGraph: function getGraph() {
    return this.get('_graph');
  },
  getItems: function getItems() {
    var graph = this.get('_graph');
    return graph.getItems();
  },
  getNodes: function getNodes() {
    var graph = this.get('_graph');
    return graph.getNodes();
  },
  translate: function translate(dx, dy) {
    var graph = this.get('_graph');
    return graph.translate(dx, dy);
  },
  getEdges: function getEdges() {
    var graph = this.get('_graph');
    return graph.getEdges();
  },
  getGroups: function getGroups() {
    var graph = this.get('_graph');
    return graph.getGroups();
  },
  render: function render() {
    var graph = this.get('_graph');
    graph.render();
    return this;
  },
  add: function add(type, model) {
    var graph = this.get('_graph');
    graph.add(type, model);
    return this;
  },
  focusPointByDom: function focusPointByDom(domPoint) {
    var graph = this.get('_graph');
    graph.focusPointByDom(domPoint);
    return this;
  },
  focusPoint: function focusPoint(graphPoint) {
    var graph = this.get('_graph');
    graph.focusPoint(graphPoint);
    return this;
  },
  find: function find(id) {
    var graph = this.get('_graph');
    return graph.find(id);
  },
  focus: function focus(id) {
    var graph = this.get('_graph');
    var item = graph.find(id);
    if (item) {
      var point = item.getCenter();
      graph.focusPoint(point);
    }
    return this;
  },
  save: function save() {
    var graph = this.get('_graph');
    return graph.save();
  },
  read: function read(data) {
    var graph = this.get('_graph');
    graph.read(data);
  },
  clear: function clear() {
    var graph = this.get('_graph');
    graph.clear();
  },
  remove: function remove(item) {
    var graph = this.get('_graph');
    graph.remove(item);
    return this;
  },
  update: function update(item, model) {
    var graph = this.get('_graph');
    graph.update(item, model);
    return this;
  },
  zoom: function zoom(point, ratio) {
    var graph = this.get('_graph');
    graph.zoom(point, ratio);
    return this;
  },
  getDomPoint: function getDomPoint(graphPoint) {
    var graph = this.get('_graph');
    return graph.getDomPoint(graphPoint);
  },
  getPoint: function getPoint(domPoint) {
    var graph = this.get('_graph');
    return graph.getPoint(domPoint);
  },
  zoomByDom: function zoomByDom(domPoint, ratio) {
    var graph = this.get('_graph');
    var point = graph.getPoint(domPoint);
    graph.zoom(point, ratio);
    return this;
  },
  autoZoom: function autoZoom() {
    var graph = this.get('_graph');
    graph.autoZoom();
    return this;
  },
  resetZoom: function resetZoom() {
    var graph = this.get('_graph');
    var width = graph.getWidth();
    var height = graph.getHeight();

    graph.zoomByDom({
      x: width / 2,
      y: height / 2
    }, 1);
    return this;
  },
  css: function css(style) {
    var graph = this.get('_graph');
    var mouseEventWarrper = graph.getMouseEventWarrper();
    Util.modifyCSS(mouseEventWarrper, style);
  },
  setCapture: function setCapture(bool) {
    var graph = this.get('_graph');
    var rootGroup = graph.getRootGroup();
    rootGroup.set('capture', bool);
  },
  destroy: function destroy() {
    var graph = this.get('_graph');
    graph.destroy();
  },
  forceDraw: function forceDraw() {
    var graph = this.get('_graph');
    var canvas = graph.getCanvas();
    var context = canvas.get('context');
    canvas.constructor.superclass.draw.call(canvas, context);
  },
  delete: function _delete() {
    var selectedItems = this.getSelected();
    var graph = this.get('_graph');
    Util.each(selectedItems, function (item) {
      graph.remove(item);
    });
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/mixin/grid.js":
/*!*************************************!*\
  !*** ./src/page/base/mixin/grid.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview grid
 * @author huangtonger@aliyun.com
 */

var GridController = __webpack_require__(/*! ../controller/grid */ "./src/page/base/controller/grid.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/base/util/index.js");
var Mixin = {};

Mixin.CFG = {
  /**
   * grid cfg
   * @type {object|undefined}
   */
  grid: undefined
};
Mixin.INIT = '_initGrid';
Mixin.AUGMENT = {
  _initGrid: function _initGrid() {
    var gridCfg = this.get('grid');
    var graph = this.get('_graph');
    if (gridCfg) {
      var gridController = new GridController(_extends({
        flow: this,
        graph: graph
      }, gridCfg));
      this.setController('grid', gridController);
    }
  },
  showGrid: function showGrid(cfg) {
    var graph = this.get('_graph');
    var gridController = this.getController('grid');
    if (!gridController) {
      if (!cfg) {
        this.set('grid', true);
      } else if (Util.isObject(cfg)) {
        this.set('grid', cfg);
      }
      this._initGrid();
    }
    gridController = this.getController('grid');
    gridController.show();
    graph.draw();
  },
  hideGrid: function hideGrid() {
    var graph = this.get('_graph');
    var gridController = this.getController('grid');
    gridController && gridController.hide();
    graph.draw();
  },
  getGridCell: function getGridCell() {
    var gridController = this.getController('grid');
    return gridController.getCell();
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/mixin/select.js":
/*!***************************************!*\
  !*** ./src/page/base/mixin/select.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview select
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util */ "./src/page/base/util/index.js");
var Mixin = {};

Mixin.CFG = {
  /**
   * @type {boolean}
   */
  selectable: true,

  /**
   * @type {boolean}
   */
  multiSelectable: true,

  /**
   * @type {object}
   */
  _selectedCache: {}
};

Mixin.INIT = '_initSelected';
Mixin.AUGMENT = {
  _initSelected: function _initSelected() {
    var _this = this;

    var graph = this.get('_graph');
    graph.on('afteritemdraw', function (ev) {
      if (ev.item.isSelected) {
        _this.setSelected(ev.item, true);
      }
    });
    graph.on('beforeitemdestroy', function (ev) {
      _this.setSelected(ev.item, false);
    });
  },

  /**
   * @param {object} item g6 item
   */
  setItemSelected: function setItemSelected(item) {
    var graph = this.get('_graph');
    var shapeObj = graph.getShapeObj(item);
    var selectedStyle = shapeObj.getSelectedStyle(item);
    var keyShape = item.getKeyShape();
    var selectedCache = this.get('_selectedCache');
    selectedCache[item.id] = item;
    selectedStyle && keyShape.attr(selectedStyle);
    if (item.isEdge) {
      keyShape.startArrow && keyShape.startArrow.attr({
        fill: selectedStyle.stroke
      });
      keyShape.endArrow && keyShape.endArrow.attr({
        fill: selectedStyle.stroke
      });
    }
  },

  /**
   * @param {object} item g6 item
   */
  clearItemSelected: function clearItemSelected(item) {
    var graph = this.get('_graph');
    var keyShape = item.getKeyShape();
    var shapeObj = graph.getShapeObj(item);
    var initAttrs = keyShape.get('attrs');
    var selectedStyle = shapeObj.getSelectedStyle(item);
    var selectedCache = this.get('_selectedCache');
    var contrastAttrs = Util.getContrast(initAttrs, selectedStyle);
    keyShape.attr(contrastAttrs);
    if (item.isEdge) {
      keyShape.startArrow && keyShape.startArrow.attr({
        fill: contrastAttrs.stroke
      });
      keyShape.endArrow && keyShape.endArrow.attr({
        fill: contrastAttrs.stroke
      });
    }
    delete selectedCache[item.id];
  },

  /**
   * @param {object|string|array} param item || itemId || items
   * @param {boolean} bool true || false
   */
  setSelected: function setSelected(param, bool) {
    var _this2 = this;

    var selectable = this.get('selectable');
    var graph = this.get('_graph');
    if (!selectable) {
      return;
    }
    var items = void 0;
    if (Util.isArray(param)) {
      items = param;
    } else {
      items = [param];
    }

    Util.each(items, function (item) {
      if (Util.isString(item)) {
        item = graph.find(item);
      }
      if (!item || item.destroyed) {
        return;
      }
      if (bool && item.isSelected) {
        return;
      }
      if (!bool && !item.isSelected) {
        return;
      }
      if (bool) {
        _this2.emit('beforeitemselected', {
          item: item
        });
        _this2.setItemSelected(item);
        _this2.emit('afteritemselected', {
          item: item
        });
      } else {
        _this2.emit('beforeitemunselected', {
          item: item
        });
        _this2.clearItemSelected(item);
        _this2.emit('afteritemunselected', {
          item: item
        });
      }
      item.isSelected = bool;
      _this2.updateStatus();
      graph.draw();
    });
  },

  /**
   * get all selected items
   * @return {array} items
   */
  getSelected: function getSelected() {
    var selectedCache = this.get('_selectedCache');
    return Util.objectToValues(selectedCache);
  },

  /**
   * clear all selected items
   */
  clearSelected: function clearSelected() {
    var _this3 = this;

    var graph = this.get('_graph');
    var frontCanvas = graph.getFrontCanvas();
    var items = this.get('_selectedCache');

    Util.each(items, function (item) {
      item.isSelected && _this3.setSelected(item, false);
    });
    frontCanvas.draw();
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/mixin/status.js":
/*!***************************************!*\
  !*** ./src/page/base/mixin/status.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileOverview status
 * @author huangtonger@aliyun.com
 */

var Mixin = {};
Mixin.AUGMENT = {
  updateStatus: function updateStatus() {
    var selectedItems = this.getSelected();
    var status = void 0;
    if (selectedItems.length === 0) {
      status = 'canvas-selected';
    } else {
      if (selectedItems.length === 1) {
        if (selectedItems[0].isNode) {
          status = 'node-selected';
        } else if (selectedItems[0].isEdge) {
          status = 'edge-selected';
        } else if (selectedItems[0].isGroup) {
          status = 'group-selected';
        }
      } else {
        status = 'multi-selected';
      }
    }
    this.emit('statuschange', {
      status: status
    });
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/base/page.js":
/*!*******************************!*\
  !*** ./src/page/base/page.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview page
 * abstract class
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ../../base */ "./src/base.js");
var Util = __webpack_require__(/*! ./util/ */ "./src/page/base/util/index.js");
var GraphMixin = __webpack_require__(/*! ./mixin/graph */ "./src/page/base/mixin/graph.js");
var GridMixin = __webpack_require__(/*! ./mixin/grid */ "./src/page/base/mixin/grid.js");
var EventMixin = __webpack_require__(/*! ./mixin/event */ "./src/page/base/mixin/event.js");
var SelectMixin = __webpack_require__(/*! ./mixin/select */ "./src/page/base/mixin/select.js");
var ActiveMixin = __webpack_require__(/*! ./mixin/active */ "./src/page/base/mixin/active.js");
var AlignMixin = __webpack_require__(/*! ./mixin/align */ "./src/page/base/mixin/align.js");
var LabelEditor = __webpack_require__(/*! ./mixin/edit-label */ "./src/page/base/mixin/edit-label.js");
var StatusMixin = __webpack_require__(/*! ./mixin/status */ "./src/page/base/mixin/status.js");

var Mixins = [GraphMixin, SelectMixin, ActiveMixin, GridMixin, EventMixin, AlignMixin, LabelEditor, StatusMixin];

var Page = function (_Base) {
  _inherits(Page, _Base);

  function Page(inputCfg) {
    _classCallCheck(this, Page);

    var cfg = {
      defaultData: null,
      shortcut: {
        redo: true,
        undo: true,
        delete: true,
        resetZoom: true,
        autoZoom: true,
        zoomIn: true,
        zoomOut: true
      },
      _controllers: {},
      _signals: {}
    };
    Util.each(Mixins, function (Mixin) {
      Util.mix(cfg, Mixin.CFG);
    });
    Util.mix(true, cfg, inputCfg);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, cfg));

    _this.isPage = true;
    _this.type = 'page';
    _this._init();
    return _this;
  }

  _createClass(Page, [{
    key: 'getDelegation',
    value: function getDelegation() /* startBox, item, group*/{}
  }, {
    key: 'focusGraphWarrper',
    value: function focusGraphWarrper() {
      var graph = this.getGraph();
      graph.getMouseEventWarrper().focus();
    }
  }, {
    key: 'saveImage',
    value: function saveImage() {
      var _this2 = this;

      var graph = this.getGraph();
      var box = graph.getBBox();
      var padding = graph.getFitViewPadding();
      var seletedIds = void 0;
      var activedIds = void 0;

      return Util.graph2Canvas({
        graph: graph,
        width: box.width + padding[1] + padding[3],
        height: box.height + padding[0] + padding[2],
        beforeTransform: function beforeTransform() {
          seletedIds = _this2.getSelected().map(function (item) {
            return item.id;
          });
          activedIds = _this2.getSelected().map(function (item) {
            return item.id;
          });
          _this2.clearSelected();
          _this2.clearActived();
        },
        afterTransform: function afterTransform() {
          _this2.setSelected(seletedIds, true);
          _this2.setActived(activedIds, true);
        }
      });
    }
  }, {
    key: 'executeCommand',
    value: function executeCommand(callback, cfg) {
      var eidtor = this.editor;
      if (eidtor) {
        eidtor.executeCommand(callback, cfg);
      } else {
        callback();
      }
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {}
    /**
     * 限制画布滚动、拖拽区域
     * Limit the canvas scroll, drag and drop area
     * @param  {object} matrix to matrix
     * @return {boolean} shape
     */

  }, {
    key: 'translateLimt',
    value: function translateLimt() {
      return true;
    }
  }, {
    key: '_init',
    value: function _init() {
      var _this3 = this;

      Util.each(Mixins, function (Mixin) {
        Mixin.INIT && _this3[Mixin.INIT]();
      });
      this.bindEvent();
    }
    /**
     * @param  {String} name signal name
     * @param  {Boolean} value set value
     */

  }, {
    key: 'setSignal',
    value: function setSignal(name, value) {
      var signals = this.get('_signals');
      signals[name] = value;
    }
    /**
     * @param  {object} name signal name
     * @return {Boolean} signal value
     */

  }, {
    key: 'getSignal',
    value: function getSignal(name) {
      var signals = this.get('_signals');
      return signals[name];
    }
    /**
     * @param  {String} name controller name
     * @param  {object} controller controller object
     */

  }, {
    key: 'setController',
    value: function setController(name, controller) {
      var controllers = this.get('_controllers');
      controllers[name] = controller;
    }
    /**
     * @param  {String} name controller name
     * @return {object} controller controller object
     */

  }, {
    key: 'getController',
    value: function getController(name) {
      var controllers = this.get('_controllers');
      return controllers[name];
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var graph = this.get('_graph');
      var controllers = this.get('_controllers');
      Util.each(controllers, function (controller) {
        controller.destroy();
      });
      graph.destroy();
    }
  }]);

  return Page;
}(Base);

Util.each(Mixins, function (Mixin) {
  Util.mix(Page.prototype, Mixin.AUGMENT);
});
module.exports = Page;

/***/ }),

/***/ "./src/page/base/util/index.js":
/*!*************************************!*\
  !*** ./src/page/base/util/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */
var BaseUtil = __webpack_require__(/*! ../../../util/ */ "./src/util/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/base/global.js");
module.exports = _extends({}, BaseUtil, {
  // 移动画布
  getPanCanvasBehaviour: function getPanCanvasBehaviour(bool) {
    return function (page) {
      var graph = page.getGraph();
      var frontCanvas = graph.getFrontCanvas();
      var canvas = graph.getCanvas();
      var startPoint = void 0;
      var startMatrix = void 0;
      // let lastBlckMatrix;
      graph.behaviourOn('canvas:mouseenter', function () {
        page.css({
          cursor: Global.cursor.beforePanCanvas
        });
      });
      graph.behaviourOn('mouseleave', function (ev) {
        if (!ev.toShape) {
          page.css({
            cursor: Global.cursor.beforePanCanvas
          });
        }
      });
      graph.behaviourOn('dragstart', function (ev) {
        if (ev.button !== 2 && !bool || !ev.shape || ev.item && ev.item.dragable === false) {
          startPoint = {
            x: ev.domX,
            y: ev.domY
          };
          page.css({
            cursor: Global.cursor.panningCanvas
          });
          startMatrix = graph.getMatrix();
          page.setCapture(false);
        }
      });
      graph.behaviourOn('drag', function (ev) {
        if (startPoint) {
          var dx = ev.domX - startPoint.x;
          var dy = ev.domY - startPoint.y;
          var matrix = [];
          BaseUtil.mat3.translate(matrix, startMatrix, [dx, dy]);
          if (page.translateLimt(matrix)) {
            graph.updateMatrix(matrix);
            canvas.draw();
            frontCanvas.draw();
          }
        }
      });
      graph.behaviourOn('dragend', function () {
        resetStatus();
        page.css({
          cursor: Global.cursor.beforePanCanvas
        });
      });
      function resetStatus() {
        startPoint = undefined;
        startMatrix = undefined;
        page.setCapture(true);
      }
    };
  },
  getLabelTextByTextLineWidth: function getLabelTextByTextLineWidth(labelText, ctx) {
    var maxTextLineWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 320;

    var lineWidth = ctx.measureText(labelText).width;
    if (lineWidth > maxTextLineWidth) {
      lineWidth = 0;
      for (var i = 1; i < labelText.length; i++) {
        lineWidth += ctx.measureText(labelText[i]).width;
        if (lineWidth >= maxTextLineWidth) {
          labelText = labelText.substring(0, i) + '\n' + labelText.substring(i, labelText.length);
          i = i + 1;
          lineWidth = 0;
        }
      }
    }
    return labelText;
  }
});

/***/ }),

/***/ "./src/page/flow/behaviour/dragAnchorAddEdge.js":
/*!******************************************************!*\
  !*** ./src/page/flow/behaviour/dragAnchorAddEdge.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview drag add edge from anchor
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");

Page.registerBehaviour('dragAnchorAddEdge', function (flow) {
  var graph = flow.getGraph();
  var frontCanvas = graph.getFrontCanvas();
  var frontRootGroup = graph.getFrontRootGroup();
  var noEndEdge = flow.get('noEndEdge');
  var addModel = void 0;
  var delegation = void 0;
  var startPoint = void 0;
  var sourceItem = void 0;
  var sourceAnchor = void 0;
  graph.behaviourOn('anchor:dragstart', function (ev) {
    if (ev.button === 2) {
      return;
    }
    var anchor = ev.shape;
    var centerPoint = anchor.get('freezePoint');
    sourceItem = anchor.getItem();
    addModel = flow.get('addModel');
    sourceAnchor = anchor.getIndex();
    addModel.source = sourceItem.id;
    addModel.sourceAnchor = sourceAnchor;
    startPoint = {
      x: centerPoint.x,
      y: centerPoint.y
    };
    delegation = frontRootGroup.addShape('path', {
      attrs: _extends({}, Global.edgeDelegationStyle),
      capture: false
    });
    flow.setSignal('dragEdge', true);
    flow.dragEdgeBeforeShowAnchor(sourceItem, sourceAnchor, 'target');
  });
  graph.behaviourOn('anchor:drag', function (ev) {
    if (!delegation) {
      return;
    }

    Util.dragingEdgeEndPoint('target', addModel, graph, delegation, startPoint, ev, sourceItem);
  });
  graph.behaviourOn('anchor:dragend', function (ev) {
    if (!delegation) {
      resetStatus();
      return;
    }
    // 需要包装成命令，在 command 里执行
    function method() {
      graph.add('edge', addModel);
    }
    if (ev.shape) {
      if (ev.shape.isAnchor && ev.shape.hasHotspot) {
        // 链接锚点
        var item = ev.shape.getItem();
        addModel.target = item.id;
        addModel.targetAnchor = ev.shape.getIndex();
        var editor = flow.editor;
        if (editor) {
          editor.executeCommand(method);
        } else {
          method();
        }
      }
    } else if (noEndEdge) {
      // 悬空边
      addModel.target = {
        x: ev.x,
        y: ev.y
      };
      var _editor = flow.editor;
      if (_editor) {
        _editor.executeCommand(method);
      } else {
        method();
      }
    }
    var nodes = graph.getNodes();
    nodes.forEach(function (node) {
      flow.clearAnchor(node);
    });
    flow.clearAnchor(sourceItem);
    flow.setActived(sourceItem, false);
    flow.setSelected(sourceItem, false);
    flow.css({
      cursor: Global.cursor.beforePanCanvas
    });
    delegation.remove();
    graph.draw();
    flow.endAdd();
    resetStatus();
  });
  graph.behaviourOn('canvas:mouseleave', function () {
    if (!delegation) {
      resetStatus();
      return;
    }
    var nodes = graph.getNodes();
    nodes.forEach(function (node) {
      flow.clearAnchor(node);
    });
    flow.setActived(sourceItem, false);
    flow.clearAnchor(sourceItem);
    delegation.remove();
    flow.cancelAdd();
    frontCanvas.draw();
    resetStatus();
  });
  function resetStatus() {
    flow.setSignal('dragEdge', false);
    delegation = undefined;
    startPoint = undefined;
    sourceItem = undefined;
    sourceAnchor = undefined;
  }
}, ['dragHoverAnchorHotspot', 'hoverAnchorActived']);

/***/ }),

/***/ "./src/page/flow/behaviour/dragEdgeControlPoint.js":
/*!*********************************************************!*\
  !*** ./src/page/flow/behaviour/dragEdgeControlPoint.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview resize edge
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");

Page.registerBehaviour('dragEdgeControlPoint', function (flow) {
  var graph = flow.getGraph();
  var frontRootGroup = graph.getFrontRootGroup();
  var noEndEdge = flow.get('noEndEdge');
  var targetEndPoint = void 0;
  var sourceEndPoint = void 0;
  var delegation = void 0;
  var startPoint = void 0;
  var originSource = void 0;
  var originTarget = void 0;
  var originSourceAnchor = void 0;
  var originTargetAnchor = void 0;
  var edge = void 0;
  var edgeModel = void 0;
  graph.behaviourOn('edgeControlPoint:dragstart', function (ev) {
    if (ev.button === 2) {
      return;
    }
    var controlPoint = ev.shape;
    if (controlPoint.isTargetEndPoint()) {
      // 拖拽的是目标节点边控制点
      edge = controlPoint.getItem();
      edgeModel = edge.getModel();
      targetEndPoint = controlPoint;
      startPoint = controlPoint.getSourcePoint();
      originSource = edge.getSource();
      originSourceAnchor = edgeModel.sourceAnchor;
    } else if (controlPoint.isSourceEndPoint()) {
      // 拖拽的是源节点边控制点
      edge = controlPoint.getItem();
      edgeModel = edge.getModel();
      sourceEndPoint = controlPoint;
      startPoint = controlPoint.getTargetPoint();
      originTarget = edge.getTarget();
      originTargetAnchor = edgeModel.targetAnchor;
    }
    if (edge) {
      delegation = frontRootGroup.addShape('path', {
        attrs: _extends({
          path: 'M0 0L 1 1'
        }, Global.edgeDelegationStyle),
        capture: false
      });
      if (originSource) {
        flow.dragEdgeBeforeShowAnchor(originSource, originSourceAnchor, 'target');
      } else if (originTarget) {
        flow.dragEdgeBeforeShowAnchor(originTarget, originTargetAnchor, 'source');
      }
      graph.hide(edge);
      flow.setSignal('dragEdge', true);
    }
  });
  graph.behaviourOn('edgeControlPoint:drag', function (ev) {
    if (!delegation) {
      return;
    }

    Util.dragingEdgeEndPoint(originSource ? 'target' : 'source', edgeModel, graph, delegation, startPoint, ev, originSource, originTarget);
  });
  graph.behaviourOn('edgeControlPoint:mouseleave', function (ev) {
    if (!targetEndPoint && !sourceEndPoint) {
      // 如果从控制点移出时无有效端点则切换到默认模式
      flow.changeMode('default');
      if (!ev.toShape) {
        flow.css({
          cursor: Global.cursor.beforePanCanvas
        });
      }
    }
  });
  graph.behaviourOn('edgeControlPoint:dragend', resizeEdge);
  graph.behaviourOn('canvas:mouseleave', resizeEdge);
  function resizeEdge(ev) {
    if (!delegation) {
      return;
    }
    var nodes = graph.getNodes();
    var updateModel = void 0;
    nodes.forEach(function (node) {
      flow.clearAnchor(node);
    });
    flow.css({
      cursor: Global.cursor.beforePanCanvas
    });
    delegation.remove();
    if (ev.shape) {
      if (ev.shape.isAnchor) {
        var anchor = ev.shape;
        var item = anchor.getItem();
        if (targetEndPoint) {
          updateModel = {
            target: item.id,
            targetAnchor: anchor.getIndex()
          };
        } else if (sourceEndPoint) {
          updateModel = {
            source: item.id,
            sourceAnchor: anchor.getIndex()
          };
        }
      }
    } else {
      if (noEndEdge) {
        if (targetEndPoint) {
          updateModel = {
            target: {
              x: ev.x,
              y: ev.y
            }
          };
        } else if (sourceEndPoint) {
          updateModel = {
            source: {
              x: ev.x,
              y: ev.y
            }
          };
        }
      }
      graph.show(edge);
    }
    graph.show(edge);
    var edgeId = edge.id;
    function method() {
      graph.update(edgeId, updateModel);
    }
    if (updateModel) {
      var editor = flow.editor;
      if (editor) {
        editor.executeCommand(method);
      } else {
        method();
      }
    }
    flow.changeMode('default');
    resetStatus();
  }
  function resetStatus() {
    flow.setSignal('dragEdge', false);
    targetEndPoint = undefined;
    sourceEndPoint = undefined;
    delegation = undefined;
    startPoint = undefined;
    originSource = undefined;
    originTarget = undefined;
    originSourceAnchor = undefined;
    originTargetAnchor = undefined;
    edge = undefined;
    edgeModel = undefined;
  }
}, ['dragHoverAnchorHotspot']);

/***/ }),

/***/ "./src/page/flow/behaviour/dragHoverAnchorHotspot.js":
/*!***********************************************************!*\
  !*** ./src/page/flow/behaviour/dragHoverAnchorHotspot.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview drag hover anchor
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");

Page.registerBehaviour('dragHoverAnchorHotspot', function (flow) {
  var graph = flow.getGraph();
  graph.behaviourOn('anchor:dragenter', function (ev) {
    if (flow.getSignal('dragEdge')) {
      var anchor = ev.shape;
      flow.setHotspotActived(anchor, true);
    }
  });
  graph.behaviourOn('anchor:dragleave', function (ev) {
    if (flow.getSignal('dragEdge')) {
      var anchor = ev.shape;
      flow.setHotspotActived(anchor, false);
    }
  });
});

/***/ }),

/***/ "./src/page/flow/behaviour/dragMultiSelect.js":
/*!****************************************************!*\
  !*** ./src/page/flow/behaviour/dragMultiSelect.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview multiSelect
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");

Page.registerBehaviour('dragMultiSelect', function (flow) {
  var graph = flow.getGraph();
  var frontRootGroup = graph.getFrontRootGroup();
  var frontCanvas = graph.getFrontCanvas();
  var startPoint = void 0;
  var delegation = void 0;
  flow.css({
    cursor: Global.cursor.multiSelect
  });
  graph.behaviourOn('dragstart', function (ev) {
    if (ev.button === 2) {
      return;
    }
    startPoint = {
      x: ev.x,
      y: ev.y
    };
    delegation = frontRootGroup.addShape('rect', {
      attrs: Global.multiSelectRectStyle
    });
  });
  graph.behaviourOn('drag', function (ev) {
    if (!delegation) {
      return;
    }
    delegation.attr({
      x: Math.min(startPoint.x, ev.x),
      y: Math.min(startPoint.y, ev.y),
      width: Math.abs(ev.x - startPoint.x),
      height: Math.abs(ev.y - startPoint.y)
    });
    frontCanvas.draw();
  });
  graph.behaviourOn('dragend', function () {
    if (!delegation) {
      return;
    }
    var nodes = graph.getNodes();
    var nodeIds = nodes.map(function (node) {
      return node.id;
    });
    var delegationBox = delegation.getBBox();
    function method() {
      flow.clearSelected();
      nodeIds.forEach(function (nodeId) {
        var node = graph.find(nodeId);
        var box = node.getBBox();
        if (box.minX > delegationBox.minX && box.minY > delegationBox.minY && box.maxX < delegationBox.maxX && box.maxY < delegationBox.maxY) {
          flow.setSelected(node, true);
        }
      });
    }
    var editor = flow.editor;
    if (editor) {
      editor.executeCommand(method);
    } else {
      method();
    }
    delegation.remove();
    flow.changeMode('default');
    flow.updateStatus();
    frontCanvas.draw();
    resetStatus();
  });
  graph.behaviourOn('canvas:mouseleave', function () {
    if (!delegation) {
      return;
    }
    delegation.remove();
    frontCanvas.draw();
    resetStatus();
  });
  function resetStatus() {
    flow.css({
      cursor: Global.cursor.beforePanCanvas
    });
    startPoint = undefined;
    delegation = undefined;
  }
});

/***/ }),

/***/ "./src/page/flow/behaviour/dragNodeAddToGroup.js":
/*!*******************************************************!*\
  !*** ./src/page/flow/behaviour/dragNodeAddToGroup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview drag node hover group and add group
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");

Page.registerBehaviour('dragNodeAddToGroup', function (flow) {
  var graph = flow.getGraph();
  var node = void 0;
  var group = void 0;

  // 鼠标移入合组
  graph.behaviourOn('dragenter', function (ev) {
    if (!flow.getSignal('panningItem')) {
      return;
    }
    var panItems = flow.get('panItems');

    if (panItems[0] && panItems[0].isNode && panItems.length === 1 && ev.item && ev.item.isGroup && panItems[0].getParent() !== ev.item) {
      node = panItems[0];
      group = ev.item;
      graph.update(group, {
        padding: Global.groupBackgroundPadding.map(function (v) {
          return v + 4;
        }),
        style: Global.dragNodeHoverToGroupStyle
      });
    }
  });

  // 鼠标移出取消，移入组的激活状态
  graph.behaviourOn('dragleave', function () {
    if (!group || !node) {
      return;
    }
    graph.update(group, {
      padding: undefined,
      style: undefined
    });
  });

  // 释放鼠标合组
  graph.behaviourOn('drop', function (ev) {
    if (!group || !node || group !== ev.item) {
      return;
    }
    flow.setSignal('dragaddnodetogroup', true);
    var nodeId = node.id;
    var groupId = group.id;
    graph.update(groupId, {
      padding: undefined,
      style: undefined,
      collapsed: false
    });
    function method() {
      graph.update(nodeId, {
        parent: groupId
      });
    }
    var editor = flow.editor;
    if (editor) {
      editor.executeCommand(method);
    } else {
      method();
    }
  });
  graph.behaviourOn('dragend', function () {
    resetStatus();
  });
  // 鼠标移出画布取消合组行为
  graph.behaviourOn('canvas:mouseleave', function () {
    if (group) {
      graph.update(group, {
        padding: undefined,
        style: undefined
      });
      resetStatus();
    }
  });
  function resetStatus() {
    flow.setSignal('dragaddnodetogroup', false);
    node = undefined;
    group = undefined;
  }
});

/***/ }),

/***/ "./src/page/flow/behaviour/dragOutFromGroup.js":
/*!*****************************************************!*\
  !*** ./src/page/flow/behaviour/dragOutFromGroup.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview drag node out of group and remove this node from group
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");

// 鼠标移出方案
Page.registerBehaviour('dragOutFromGroup', function (flow) {
  var graph = flow.getGraph();
  var node = void 0;
  var group = void 0;
  var timer = void 0;
  var panNodeLeave = false;

  graph.behaviourOn('drag', function (ev) {
    if (!flow.getSignal('panningItem') || panNodeLeave) {
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      var panItems = flow.get('panItems');
      if (!panItems) {
        return;
      }
      node = panItems[0];
      group = panItems[0].getParent();
      if (node && panItems.length === 1 && group && !ev.shape) {
        var panItemDelegation = flow.get('panItemDelegation');
        var delegationBox = panItemDelegation.getBBox();
        var groupBox = group.getBBox();
        if (Util.rectRectCrossAlgorithm(delegationBox, groupBox)) {
          graph.update(group, {
            padding: Global.groupBackgroundPadding.map(function (v) {
              return v - 8;
            }),
            style: Global.dragNodeLeaveFromGroupStyle
          });
          panNodeLeave = true;
        }
      }
      if (!panNodeLeave) {
        node = undefined;
        group = undefined;
      }
    }, Global.outFromGroupDelayTime);
  });
  // 鼠标重新移入原组
  graph.behaviourOn('dragenter', function (ev) {
    if (!node || !group) {
      return;
    }
    if (group === ev.item) {
      graph.update(group, {
        padding: Global.groupBackgroundPadding.map(function (v) {
          return v + 4;
        }),
        style: Global.dragNodeHoverToGroupStyle
      });
    }
    panNodeLeave = false;
  });
  graph.on('drop', function (ev) {
    if (!group || !node || ev.shape) {
      return;
    }
    graph.update(node, {
      parent: undefined
    });
    graph.update(group, {
      style: undefined
    });
    resetStatus();
  });
  graph.on('dragend', function () {
    resetStatus();
  });
  graph.behaviourOn('canvas:mouseleave', function () {
    resetStatus();
  });
  function resetStatus() {
    clearTimeout(timer);
    if (group) {
      graph.update(group, {
        padding: undefined,
        style: undefined
      });
    }
    panNodeLeave = false;
    node = undefined;
    group = undefined;
  }
});

/***/ }),

/***/ "./src/page/flow/behaviour/dragPanelItemAddNode.js":
/*!*********************************************************!*\
  !*** ./src/page/flow/behaviour/dragPanelItemAddNode.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview add node by mouse
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");

Page.registerBehaviour('dragPanelItemAddNode', function (flow) {
  var graph = flow.getGraph();
  var frontRootGroup = graph.getFrontRootGroup();
  var frontCanvas = graph.getFrontCanvas();
  var canvas = graph.getCanvas();
  var htmlElementContaniner = canvas.get('htmlElementContaniner');
  var startBox = void 0;
  var delegation = void 0;
  var nodeSize = void 0;
  var addType = void 0;
  var addModel = void 0;
  graph.behaviourOn('canvas:mouseenter', function (ev) {
    if (!delegation) {
      addType = flow.get('addType');
      addModel = flow.get('addModel');
      if (addType === 'node') {
        nodeSize = Util.getNodeSize(addModel, htmlElementContaniner);
        var halfWidth = nodeSize[0] / 2;
        var halfHeight = nodeSize[1] / 2;
        startBox = {
          minX: ev.x - halfWidth,
          minY: ev.y - halfHeight,
          maxX: ev.x + halfWidth,
          maxY: ev.y + halfHeight,
          width: nodeSize[0],
          height: nodeSize[1]
        };
        delegation = Util.getRectByBox(startBox, frontRootGroup, Global.nodeDelegationStyle);
        flow.setSignal('panningItem', true);
        flow.set('panItemDelegation', delegation);
        flow.set('panItemStartBox', startBox);
        flow.set('panItemStartPoint', {
          x: ev.x,
          y: ev.y
        });
      }
    }
  });
  graph.behaviourOn('mouseup', function (ev) {
    if (!delegation) {
      return;
    }
    var model = Util.mix({}, addModel, {
      x: ev.x,
      y: ev.y
    });
    var type = addType;
    Util.setId(model);
    function method() {
      graph.add(type, Util.cloneDeep(model));
      flow.clearSelected();
      flow.setSelected(graph.find(model.id), true);
    }
    var editor = flow.editor;
    if (editor) {
      editor.executeCommand(method);
    } else {
      method();
    }
    delegation.remove();
    flow.endAdd();
    flow.clearAlignLine();
    resetStatus();
  });
  graph.behaviourOn('canvas:mouseleave', function () {
    if (!delegation) {
      return;
    }
    flow.clearAlignLine();
    delegation.remove();
    frontCanvas.draw();
    flow.cancelAdd();
    resetStatus();
  });
  function resetStatus() {
    flow.setSignal('panningItem', false);
    flow.set('panItemDelegation', undefined);
    flow.set('panItemStartBox', undefined);
    flow.set('panItemStartPoint', undefined);
    delegation = undefined;
    nodeSize = undefined;
    addType = undefined;
    addModel = undefined;
  }
}, ['processPanItem']);

/***/ }),

/***/ "./src/page/flow/behaviour/hoverAnchorActived.js":
/*!*******************************************************!*\
  !*** ./src/page/flow/behaviour/hoverAnchorActived.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview mouseenter anchor begin add edge
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");

Page.registerBehaviour('hoverAnchorActived', function (flow) {
  var graph = flow.getGraph();
  var frontCanvas = graph.getFrontCanvas();
  graph.behaviourOn('anchor:mouseenter', function (ev) {
    if (flow.getSignal('panningItem') || flow.getSignal('dragEdge')) {
      return;
    }
    var anchor = ev.shape;
    var item = anchor.getItem();
    var model = item.getModel();
    var tplModel = flow.get('addEdgeModel');
    var addModel = _extends({}, tplModel, {
      source: model.id
    });
    var eventObj = {
      anchor: anchor.getPoint(),
      item: item
    };
    flow.emit('hoveranchor:beforeaddedge', eventObj);
    if (eventObj.cancel) {
      flow.css({
        cursor: Global.cursor.hoverUnEffectiveAnchor
      });
      return;
    }
    flow.css({
      cursor: Global.cursor.hoverEffectiveAnchor
    });
    !anchor.get('destroyed') && anchor.setActived();
    flow.beginAdd('edge', addModel);
    frontCanvas.draw();
  });
  graph.behaviourOn('anchor:mouseleave', function (ev) {
    if (!flow.getSignal('dragEdge') && !flow.getSignal('panningItem')) {
      var anchor = ev.shape;
      var item = anchor.getItem();
      flow.css({
        cursor: Global.cursor.beforePanCanvas
      });

      if (!item.isSelected) {
        flow.clearAnchor(item);
        flow.setActived(item, false);
      }
      !anchor.get('destroyed') && anchor.clearActived();
      flow.cancelAdd();
      frontCanvas.draw();
    }
  });
});

/***/ }),

/***/ "./src/page/flow/behaviour/hoverEdgeControlPoint.js":
/*!**********************************************************!*\
  !*** ./src/page/flow/behaviour/hoverEdgeControlPoint.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview hover node control point
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");

Page.registerBehaviour('hoverEdgeControlPoint', function (flow) {
  var graph = flow.getGraph();
  graph.behaviourOn('edgeControlPoint:mouseenter', function (ev) {
    if (flow.getSignal('dragEdge') || flow.getSignal('panningItem')) {
      return;
    }
    var controlPoint = ev.shape;

    if (controlPoint.isTargetEndPoint() || controlPoint.isSourceEndPoint()) {
      flow.css({
        cursor: Global.cursor.hoverEdgeControllPoint
      });
      flow.changeMode('resize');
    }
  });
});

/***/ }),

/***/ "./src/page/flow/behaviour/index.js":
/*!******************************************!*\
  !*** ./src/page/flow/behaviour/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview behaviour picker
 * @author huangtonger@aliyun.com
 */

__webpack_require__(/*! ./panItem */ "./src/page/flow/behaviour/panItem.js");
__webpack_require__(/*! ./hoverAnchorActived */ "./src/page/flow/behaviour/hoverAnchorActived.js");
__webpack_require__(/*! ./hoverEdgeControlPoint */ "./src/page/flow/behaviour/hoverEdgeControlPoint.js");
__webpack_require__(/*! ./dragEdgeControlPoint */ "./src/page/flow/behaviour/dragEdgeControlPoint.js");
__webpack_require__(/*! ./dragPanelItemAddNode */ "./src/page/flow/behaviour/dragPanelItemAddNode.js");
__webpack_require__(/*! ./dragHoverAnchorHotspot */ "./src/page/flow/behaviour/dragHoverAnchorHotspot.js");
__webpack_require__(/*! ./dragAnchorAddEdge */ "./src/page/flow/behaviour/dragAnchorAddEdge.js");
__webpack_require__(/*! ./dragMultiSelect */ "./src/page/flow/behaviour/dragMultiSelect.js");
__webpack_require__(/*! ./keydownCmdWheelZoom */ "./src/page/flow/behaviour/keydownCmdWheelZoom.js");
__webpack_require__(/*! ./keydownShiftMultiSelected */ "./src/page/flow/behaviour/keydownShiftMultiSelected.js");
__webpack_require__(/*! ./dragNodeAddToGroup */ "./src/page/flow/behaviour/dragNodeAddToGroup.js");
__webpack_require__(/*! ./dragOutFromGroup */ "./src/page/flow/behaviour/dragOutFromGroup.js");

/***/ }),

/***/ "./src/page/flow/behaviour/keydownCmdWheelZoom.js":
/*!********************************************************!*\
  !*** ./src/page/flow/behaviour/keydownCmdWheelZoom.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview keydown Cmd || Alt wheel zoom
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");

Page.registerBehaviour('keydownCmdWheelZoom', function (flow) {
  var graph = flow.getGraph();
  graph.behaviourOn('keydown', function (ev) {
    var domEvent = ev.domEvent;
    if (domEvent.keyCode === 91) {
      flow.setSignal('wheelZoom', true);
    }
  });
  graph.behaviourOn('keyup', function (ev) {
    var domEvent = ev.domEvent;
    if (domEvent.keyCode === 91) {
      flow.setSignal('wheelZoom', false);
    }
  });
});

/***/ }),

/***/ "./src/page/flow/behaviour/keydownShiftMultiSelected.js":
/*!**************************************************************!*\
  !*** ./src/page/flow/behaviour/keydownShiftMultiSelected.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview keydown shift multiSelected
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");

Page.registerBehaviour('keydownShiftMultiSelected', function (flow) {
  var graph = flow.getGraph();
  graph.behaviourOn('keydown', function (ev) {
    var domEvent = ev.domEvent;
    if (domEvent.shiftKey) {
      flow.setSignal('shiftKeyDown', true);
    }
  });
  graph.behaviourOn('keyup', function (ev) {
    var domEvent = ev.domEvent;
    if (!domEvent.shiftKey) {
      flow.setSignal('shiftKeyDown', false);
    }
  });
});

/***/ }),

/***/ "./src/page/flow/behaviour/panItem.js":
/*!********************************************!*\
  !*** ./src/page/flow/behaviour/panItem.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview pan node behaviour
 * @author huangtonger@aliyun.com
 */

var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");

Page.registerBehaviour('panItem', function (flow) {
  var graph = flow.getGraph();

  graph.behaviourOn('drop', function () {
    var panItems = flow.get('panItems');
    if (!panItems) {
      return;
    }
    var panItem = panItems[0];
    var panItemIds = panItems.map(function (panItem) {
      return panItem.id;
    });
    var delegation = flow.get('panItemDelegation');
    var startBox = flow.get('panItemStartBox');
    var panItemId = panItem.id;
    var dx = delegation.attr('x') - startBox.minX;
    var dy = delegation.attr('y') - startBox.minY;
    graph.emit('afterpanitemdrop', {
      panItems: panItems
    });
    function method() {
      panItemIds.forEach(function (itemId) {
        var item = graph.find(itemId);
        var model = item.getModel();
        if (item.isGroup) {
          Util.panGroup(item, dx, dy, graph);
        } else {
          graph.update(item, {
            x: model.x + dx,
            y: model.y + dy
          });
          graph.toFront(item);
        }
      });
      if (panItemIds.length === 1) {
        flow.clearSelected();
        flow.setSelected(panItemId, true);
      }
    }
    flow.clearAlignLine();
    var editor = flow.editor;
    if (!editor || flow.getSignal('dragaddnodetogroup')) {
      method();
    } else {
      editor.executeCommand(method);
    }
    graph.emit('panitemend');
  });
}, ['startPanItem', 'processPanItem', 'endPanItem']);

/***/ }),

/***/ "./src/page/flow/controller/anchor.js":
/*!********************************************!*\
  !*** ./src/page/flow/controller/anchor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview anchor controller
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ../../../simpleBase */ "./src/simpleBase.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        _anchorItemCache: {}
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      var graph = this.graph;
      graph.on('afteritemdraw', function (ev) {
        ev.item.isAnchorShow && _this2.showAnchor(ev.item);
      });
      graph.on('beforeitemdestroy', function (ev) {
        _this2._clearAnchor(ev.item);
      });
      graph.on('afteritemhide', function (ev) {
        if (ev.item.isNode) {
          _this2._clearAnchor(ev.item);
        }
      });
    }
  }, {
    key: '_updateAnchor',
    value: function _updateAnchor(item) {
      var graph = this.graph;
      var frontCanvas = graph.getFrontCanvas();
      item.anchorShapes.forEach(function (anchor) {
        anchor.updatePosition();
      });
      frontCanvas.draw();
    }
  }, {
    key: '_drawAnchor',
    value: function _drawAnchor(item, group, indexs, bool) {
      var anchorPoints = item.getAnchorPoints();
      this._clearAnchor(item);
      Util.each(anchorPoints, function (point, index) {
        if (indexs && indexs.indexOf(index) === -1) {
          return;
        }
        var hotspot = void 0;

        var shape = group.addShape('marker', {
          attrs: _extends({
            symbol: 'circle'
          }, Global.anchorPointStyle, {
            x: point.x,
            y: point.y
          }),
          freezePoint: point,
          item: item,
          index: index,
          eventPreFix: 'anchor',
          isItemChange: function isItemChange() {
            return;
          },

          zIndex: Global.zIndex.anchorPoint
        });
        shape.eventPreFix = 'anchor';
        shape.showHotspot = function () {
          hotspot = group.addShape('marker', {
            attrs: _extends({
              symbol: 'circle'
            }, Global.anchorHotsoptStyle, {
              x: point.x,
              y: point.y
            }),
            freezePoint: point,
            capture: false,
            zIndex: Global.zIndex.anchorHotsopt
          });
          item.anchorShapes.push(hotspot);
          shape.hasHotspot = true;
          Util.toBack(hotspot, group);
        };
        shape.getIndex = function () {
          return index;
        };
        shape.getItem = function () {
          return item;
        };
        shape.getPoint = function () {
          return point;
        };
        shape.updatePosition = function () {
          var anchorPoints = item.getAnchorPoints();
          var point = anchorPoints[index];
          shape.attr(point);
        };
        shape.setActived = function () {
          shape.attr(Global.anchorPointHoverStyle);
        };
        shape.clearActived = function () {
          shape.attr(Global.anchorPointStyle);
        };
        shape.isAnchor = true;
        shape.setHotspotActived = function (bool) {
          if (hotspot) {
            if (bool) {
              hotspot.attr(Global.anchorHotsoptActivedStyle);
            } else {
              hotspot.attr(Global.anchorHotsoptStyle);
            }
          }
        };
        if (bool) {
          shape.showHotspot();
        }
        item.anchorShapes.push(shape);
        item.getAllAnchors = function () {
          return item.anchorShapes.filter(function (shape) {
            return shape.isAnchor;
          });
        };
        item.getAnchor = function (index) {
          return item.anchorShapes.find(function (shape) {
            return shape.get('index') === index;
          });
        };
      });
    }
  }, {
    key: '_clearAnchor',
    value: function _clearAnchor(item) {
      if (item.anchorShapes) {
        item.anchorShapes.forEach(function (shape) {
          shape.remove();
        });
      }
      item.anchorShapes = [];
    }
  }, {
    key: 'setHotspotActived',
    value: function setHotspotActived(anchor, bool) {
      var flow = this.flow;
      var graph = flow.getGraph();
      var frontCanvas = graph.getFrontCanvas();
      anchor.setHotspotActived(bool);
      frontCanvas.draw();
    }
  }, {
    key: 'showAnchor',
    value: function showAnchor(item, indexs, isShowHotspot) {
      if (!item.isVisible()) {
        return;
      }
      var graph = this.graph;
      var anchorItemCache = this._anchorItemCache;
      var frontRootGroup = graph.getFrontRootGroup();
      var frontCanvas = graph.getFrontCanvas();
      this._drawAnchor(item, frontRootGroup, indexs, isShowHotspot);
      item.isAnchorShow = true;
      anchorItemCache[item.id] = item;
      frontCanvas.draw();
    }
  }, {
    key: 'clearAnchor',
    value: function clearAnchor(param) {
      var _this3 = this;

      var graph = this.graph;
      var frontCanvas = graph.getFrontCanvas();
      var itemCache = graph.get('itemCache');
      var anchorItemCache = this._anchorItemCache;
      var items = param;
      if (Util.isObject(param)) {
        items = [param];
      } else if (Util.isString(param)) {
        items = [itemCache[param]];
      } else {
        items = anchorItemCache;
      }
      Util.each(items, function (item) {
        _this3._clearAnchor(item);
        item.isAnchorShow = false;
        delete anchorItemCache[item.id];
      });
      frontCanvas.draw();
    }
  }]);

  return Controller;
}(Base);

module.exports = Controller;

/***/ }),

/***/ "./src/page/flow/flow.js":
/*!*******************************!*\
  !*** ./src/page/flow/flow.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview flow
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var Page = __webpack_require__(/*! ../base/ */ "./src/page/base/index.js");
var Util = __webpack_require__(/*! ./util/ */ "./src/page/flow/util/index.js");
var Global = __webpack_require__(/*! ./global */ "./src/page/flow/global.js");
var ToolMixin = __webpack_require__(/*! ./mixin/tool */ "./src/page/flow/mixin/tool.js");
var AnchorMixin = __webpack_require__(/*! ./mixin/anchor */ "./src/page/flow/mixin/anchor.js");
var ResizeMixin = __webpack_require__(/*! ./mixin/resize */ "./src/page/flow/mixin/resize.js");
var OutterMixin = __webpack_require__(/*! ./mixin/outter */ "./src/page/flow/mixin/outter.js");
var Mixins = [ToolMixin, OutterMixin, ResizeMixin, AnchorMixin];

var Flow = function (_Page) {
  _inherits(Flow, _Page);

  function Flow(inputCfg) {
    _classCallCheck(this, Flow);

    var cfg = {
      /**
       * shortcut list
       * @type {object}
       */
      shortcut: {
        copy: true,
        paste: true,
        selectAll: true,
        addGroup: true,
        unGroup: true
      },

      /**
       * graph cfg
       * @type {object|undefined}
       */
      graph: {
        modes: {
          default: ['panBlank', 'hoverGroupActived', 'clickEdgeSelected', 'clickNodeSelected', 'clickCanvasSelected', 'clickGroupSelected', 'hoverNodeActived', 'hoverEdgeActived', 'hoverAnchorActived', 'hoverButton', 'clickCollapsedButton', 'clickExpandedButton', 'wheelPanCanvas', 'keydownShiftMultiSelected', 'dragNodeAddToGroup', 'dragOutFromGroup', 'panItem', 'hoverEdgeControlPoint'],
          add: ['dragPanelItemAddNode', 'dragAnchorAddEdge'],
          resize: ['dragEdgeControlPoint', 'hoverEdgeControlPoint'],
          readOnly: ['panCanvas'],
          move: ['panCanvas'],
          multiSelect: ['dragMultiSelect']
        },
        mode: 'default',
        defaultIntersectBox: 'rect',
        nodeDefaultShape: Global.nodeDefaultShape,
        edgeDefaultShape: Global.edgeDefaultShape,
        groupDefaultShape: Global.groupDefaultShape,
        minZoom: 0.2,
        maxZoom: 2
      },

      /**
       * 图类构造函数
       * @type {boolean}
       */
      graphConstructor: G6.Graph,

      /**
       * 是否允许悬空边
       * @type {boolean}
       */
      noEndEdge: true
    };
    var mixinCfg = {};
    Util.each(Mixins, function (Mixin) {
      Util.mix(mixinCfg, Mixin.CFG);
    });
    Util.mix(true, cfg, mixinCfg, inputCfg);

    var _this = _possibleConstructorReturn(this, (Flow.__proto__ || Object.getPrototypeOf(Flow)).call(this, cfg));

    _this.isFlow = true;
    return _this;
  }

  _createClass(Flow, [{
    key: '_init',
    value: function _init() {
      var _this2 = this;

      _get(Flow.prototype.__proto__ || Object.getPrototypeOf(Flow.prototype), '_init', this).call(this);
      Util.each(Mixins, function (Mixin) {
        Mixin.INIT && _this2[Mixin.INIT]();
      });
    }
    /**
     * 获取委托图形
     * @type {function}
     * @param  {array} items source data
     * @param  {G.Group} group graphic group
     * @return {G.Shape} shape
     */

  }, {
    key: 'getDelegation',
    value: function getDelegation(items, group) {
      var startBox = Util.getTotalBBox(items.map(function (item) {
        return item.getBBox();
      }));
      return Util.getRectByBox(startBox, group, Global.nodeDelegationStyle);
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var _this3 = this;

      this.on('beforeitemactived', function (ev) {
        var item = ev.item;
        var graph = _this3.get('_graph');
        var shapeObj = graph.getShapeObj(item);
        var activedOutterStyle = shapeObj.getActivedOutterStyle(item);
        if (item.isNode) {
          _this3.addOutterShape(item, Global.nodeActivedOutterLineWidth, activedOutterStyle);
          _this3.hoverShowAnchor(item);
        }
      });
      this.on('beforeitemunactived', function (ev) {
        var item = ev.item;
        if (item.isNode || item.isGroup) {
          _this3.clearOutterShape(item);
          _this3.clearAnchor(item);
        }
      });
      this.on('beforeitemselected', function (ev) {
        var item = ev.item;
        var graph = _this3.get('_graph');
        var shapeObj = graph.getShapeObj(item);
        var selectedOutterStyle = shapeObj.getSelectedOutterStyle(item);
        if (item.isNode) {
          _this3.addOutterShape(item, Global.nodeSelectedOutterLineWidth, selectedOutterStyle);
          _this3.hoverShowAnchor(item);
        } else if (item.isGroup) {
          _this3.addOutterShape(item, Global.groupSelectedOutterLineWidth, selectedOutterStyle);
          _this3.hoverShowAnchor(item);
        }
      });
      this.on('beforeitemunselected', function (ev) {
        var item = ev.item;
        if (item.isNode || item.isGroup) {
          _this3.clearOutterShape(item);
          _this3.clearAnchor(item);
        }
      });
    }
  }]);

  return Flow;
}(Page);

Util.each(Mixins, function (Mixin) {
  Util.mix(Flow.prototype, Mixin.AUGMENT);
});

module.exports = Flow;

/***/ }),

/***/ "./src/page/flow/global.js":
/*!*********************************!*\
  !*** ./src/page/flow/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileOverview flow global cfg
 * @author huangtonger@aliyun.com
 */

module.exports = {
  // 默认节点
  nodeDefaultShape: 'flow-node',
  // 默认边
  edgeDefaultShape: 'flow-smooth',
  // 默认组
  groupDefaultShape: 'flow-group',
  // 背景组边距
  groupBackgroundPadding: [40, 10, 10, 10],
  // 组文本标签水平坐标偏移
  groupLabelOffsetX: 10,
  // 组文本标签竖直坐标偏移
  groupLabelOffsetY: 10,
  // 多选框样式
  multiSelectRectStyle: {
    fill: '#1890FF',
    fillOpacity: 0.08,
    stroke: '#1890FF',
    opacity: 0.1
  },
  // 默认节点尺寸
  defaultNodeSize: [96, 48],
  // 边文本便签样式
  edgeLabelStyle: {
    fill: '#666',
    textAlign: 'center',
    textBaseline: 'middle'
  },
  // 边文本矩形背景边距
  edgeLabelRectPadding: 4,
  // 边文本矩形背景样式
  edgeLabelRectStyle: {
    fill: 'white'
  },
  // 节点文本标签样式
  nodeLabelStyle: {
    fill: '#666',
    textAlign: 'center',
    textBaseline: 'middle'
  },
  // 组样式
  groupStyle: {
    stroke: '#CED4D9',
    fill: '#F2F4F5',
    radius: 4
  },
  // 组文本标签样式
  groupLabelStyle: {
    fill: '#666',
    textAlign: 'left',
    textBaseline: 'top'
  },
  // 鼠标悬浮节点边框
  nodeActivedOutterStyle: {
    stroke: null
  },
  // 鼠标悬浮节点框线宽
  nodeActivedOutterLineWidth: 2,
  // 节点选中样式
  nodeSelectedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF'
  },
  // 选中边框样式
  nodeSelectedOutterStyle: {
    stroke: '#E0F0FF'
  },
  // 节点选中外边框线宽
  nodeSelectedOutterLineWidth: 2,
  // 选中边框样式
  groupSelectedOutterStyle: {
    stroke: '#E0F0FF',
    fill: '#E0F0FF'
  },
  // 组选中外边框线宽
  groupSelectedOutterLineWidth: 2,
  // 节点鼠标悬浮样式
  nodeActivedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF'
  },
  // 组鼠标悬浮样式
  groupActivedStyle: {
    stroke: '#1890FF'
  },
  // 箭头半径
  arrowRadius: 6,
  // 组选中样式
  groupSelectedStyle: {
    stroke: '#1890FF',
    fill: '#F3F9FF',
    fillOpacity: 0.92
  },
  // 选中边的样式
  edgeSelectedStyle: {
    lineWidth: 2,
    strokeOpacity: 0.92,
    stroke: '#A3B1BF'
  },
  // 拖拽节点悬浮组 到达组的样式
  dragNodeHoverToGroupStyle: {
    stroke: '#1890FF',
    lineWidth: 2
  },
  // 拖拽节点移出组 原组的样式
  dragNodeLeaveFromGroupStyle: {
    stroke: '#BAE7FF',
    lineWidth: 2
  },
  // 节点
  nodeStyle: {
    stroke: '#CED4D9',
    fill: '#FFFFFF',
    shadowOffsetX: 0,
    shadowOffsetY: 4,
    shadowBlur: 10,
    shadowColor: 'rgba(13, 26, 38, 0.08)',
    lineWidth: 1,
    radius: 4,
    fillOpacity: 0.92
  },
  // 边样式
  edgeStyle: {
    stroke: '#A3B1BF',
    strokeOpacity: 0.92,
    lineWidth: 1,
    lineAppendWidth: 8,
    endArrow: true
  },
  // 鼠标悬浮边
  edgeActivedStyle: {
    stroke: '#1890FF',
    strokeOpacity: 0.92
  },
  // 锚点样式
  anchorPointStyle: {
    radius: 3.5,
    fill: '#fff',
    stroke: '#1890FF',
    lineAppendWidth: 12
  },
  // 锚点热区样式
  anchorHotsoptStyle: {
    radius: 12,
    fill: '#1890FF',
    fillOpacity: 0.25
  },
  // 锚点热区激活样式
  anchorHotsoptActivedStyle: {
    radius: 14
  },
  // 锚点鼠标悬浮样式
  anchorPointHoverStyle: {
    radius: 4,
    fill: '#1890FF',
    fillOpacity: 1,
    stroke: '#1890FF'
  },
  // 节点委托图形样式
  nodeDelegationStyle: {
    stroke: '#1890FF',
    fill: '#1890FF',
    fillOpacity: 0.08,
    lineDash: [4, 4],
    radius: 4,
    lineWidth: 1
  },
  // 组委托图形样式
  groupDelegationStyle: {
    stroke: '#1890FF',
    fill: '#1890FF',
    fillOpacity: 0.08,
    lineDash: [4, 4],
    radius: 4,
    lineWidth: 1
  },
  // 边委托图形样式
  edgeDelegationStyle: {
    stroke: '#697B8C',
    lineWidth: 1
  },
  // 节点控制点样式
  nodeControlPointStyle: {
    radius: 4,
    fill: '#fff',
    shadowBlur: 4,
    shadowColor: '#666'
  },
  // 边控制点样式
  edgeControlPointStyle: {
    radius: 6,
    symbol: 'square',
    lineAppendWidth: 6,
    // fill: '#fff',
    // shadowBlur: 4,
    // shadowColor: '#666',
    fillOpacity: 0,
    strokeOpacity: 0
  },
  // 节点选中盒样式
  nodeSelectedBoxStyle: {
    stroke: '#C2C2C2'
  },
  // 光标样式
  cursor: {
    panningCanvas: '-webkit-grabbing',
    beforePanCanvas: '-webkit-grab',
    hoverNode: 'move',
    hoverEffectiveAnchor: 'crosshair',
    hoverEdge: 'default',
    hoverGroup: 'move',
    hoverUnEffectiveAnchor: 'default',
    hoverEdgeControllPoint: 'crosshair',
    multiSelect: 'crosshair'
  },
  // 元素层级
  zIndex: {
    anchorPoint: 3,
    anchorHotsopt: 2,
    selectedBox: 1,
    controlPoint: 4
  },
  // 多边形边样式
  polylineEdgeStyle: {
    offset: 10,
    borderRadius: 5
  },
  // 拖拽归组延迟时间
  addToGroupDelayTime: 400,
  // 拖拽出组延迟时间
  outFromGroupDelayTime: 400
};

/***/ }),

/***/ "./src/page/flow/index.js":
/*!********************************!*\
  !*** ./src/page/flow/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview flow entry file
 * @author huangtonger@aliyun.com
 */

var Flow = __webpack_require__(/*! ./flow */ "./src/page/flow/flow.js");
var Page = __webpack_require__(/*! ../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ./global */ "./src/page/flow/global.js");
Flow.Util = __webpack_require__(/*! ./util/ */ "./src/page/flow/util/index.js");
Flow.Global = Global;
Page.setRegister(Flow, Global.nodeDefaultShape, Global.edgeDefaultShape, Global.groupDefaultShape);
__webpack_require__(/*! ./behaviour/ */ "./src/page/flow/behaviour/index.js");
__webpack_require__(/*! ./shape/ */ "./src/page/flow/shape/index.js");
module.exports = Flow;

/***/ }),

/***/ "./src/page/flow/mixin/anchor.js":
/*!***************************************!*\
  !*** ./src/page/flow/mixin/anchor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview anchor
 * @author huangtonger@aliyun.com
 */
var AnchorController = __webpack_require__(/*! ../controller/anchor */ "./src/page/flow/controller/anchor.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");
var Mixin = {};

Mixin.CFG = {
  /**
   * @type {object}
   */
  anchor: {}
};

Mixin.INIT = '_initAnchor';
Mixin.AUGMENT = {
  _initAnchor: function _initAnchor() {
    var anchorCfg = this.get('anchor');
    var graph = this.get('_graph');
    if (anchorCfg) {
      var anchorController = new AnchorController(_extends({
        flow: this,
        graph: graph
      }, anchorCfg));
      this.setController('anchor', anchorController);
    }
  },
  showAnchor: function showAnchor(item, indexs, isShowHotspot) {
    var anchorController = this.getController('anchor');
    anchorController.showAnchor(item, indexs, isShowHotspot);
  },
  clearAnchor: function clearAnchor(item) {
    var anchorController = this.getController('anchor');
    anchorController.clearAnchor(item);
  },
  setHotspotActived: function setHotspotActived(anchor, bool) {
    var anchorController = this.getController('anchor');
    anchorController.setHotspotActived(anchor, bool);
  },
  hoverShowAnchor: function hoverShowAnchor(hoverItem) {
    var _this = this;

    var anchorPoints = hoverItem.getAnchorPoints();
    var showIndexs = [];
    anchorPoints.forEach(function (anchorPoint, index) {
      var hoverNodeEvent = {
        anchor: anchorPoint,
        item: hoverItem
      };
      _this.emit('hovernode:beforeshowanchor', hoverNodeEvent);
      if (!hoverNodeEvent.cancel) {
        showIndexs.push(index);
      }
    });
    this.showAnchor(hoverItem, showIndexs);
  },
  anchorHasBeenLinked: function anchorHasBeenLinked(node, anchor) {
    var edges = node.getEdges();
    var linkedAnchors = [];
    edges.forEach(function (edge) {
      var model = edge.getModel();
      if (model.source === node.id && !Util.isNil(model.sourceAnchor)) {
        linkedAnchors.push(model.sourceAnchor);
      }
      if (model.target === node.id && !Util.isNil(model.targetAnchor)) {
        linkedAnchors.push(model.targetAnchor);
      }
    });
    if (Util.isObject(anchor)) {
      return linkedAnchors.indexOf(anchor.index) !== -1;
    }
    return linkedAnchors.indexOf(anchor) !== -1;
  },
  dragEdgeBeforeShowAnchor: function dragEdgeBeforeShowAnchor(inputNode, inputAnchor, dragEndPointType) {
    var _this2 = this;

    var graph = this.getGraph();
    var nodes = graph.getNodes();
    nodes.forEach(function (node) {
      var showIndexs = [];
      var anchorPoints = node.getAnchorPoints();
      var eventObj = void 0;

      if (inputNode.isNode) {
        // 如果输入端是节点
        var inputAnchorPoints = inputNode.getAnchorPoints();
        anchorPoints.forEach(function (anchorPoint, index) {
          if (dragEndPointType === 'target') {
            eventObj = {
              source: inputNode,
              sourceAnchor: inputAnchorPoints[inputAnchor],
              target: node,
              targetAnchor: anchorPoint,
              dragEndPointType: dragEndPointType
            };
          } else {
            eventObj = {
              target: inputNode,
              targetAnchor: inputAnchorPoints[inputAnchor],
              source: node,
              sourceAnchor: anchorPoint,
              dragEndPointType: dragEndPointType
            };
          }
          _this2.emit('dragedge:beforeshowanchor', eventObj);
          if (!eventObj.cancel) {
            showIndexs.push(index);
          }
        });
      } else {
        // 如果输入端是点
        anchorPoints.forEach(function (anchorPoint, index) {
          showIndexs.push(index);
        });
      }
      if (node === inputNode && node.isAnchorShow) {
        showIndexs.forEach(function (showIndex) {
          var anchor = node.getAnchor(showIndex);
          // 现象：在hovernode:beforeshowanchor事件中，将某个anchor.cancel设为true后，此处可能为undefined
          // 原因：getAnchor是从node.anchorShapes中检索，anchorShapes是getAnchorPoints结果的子集，所以存在找不到的情况
          inputAnchor !== showIndex && anchor && anchor.showHotspot();
        });
      } else {
        _this2.showAnchor(node, showIndexs, true);
      }
    });
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/flow/mixin/outter.js":
/*!***************************************!*\
  !*** ./src/page/flow/mixin/outter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview hover style
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util */ "./src/page/flow/util/index.js");
var Mixin = {};

Mixin.AUGMENT = {
  addOutterShape: function addOutterShape(item, lineWidth, style) {
    this.clearOutterShape(item);
    var keyShape = item.getKeyShape();
    var group = item.getGraphicGroup();
    var originAttrs = keyShape.get('attrs');
    var type = keyShape.get('type');
    var originLineWidth = keyShape.attr('lineWidth');
    var outterShape = group.addShape(type, {
      attrs: _extends({}, originAttrs, {
        lineWidth: lineWidth,
        fill: null
      }, style)
    });
    Util.toBack(outterShape, group);
    var box = outterShape.getBBox();
    var width = box.maxX - box.minX;
    var height = box.maxY - box.minY;
    var centerX = (box.minX + box.maxX) / 2;
    var centerY = (box.minY + box.maxY) / 2;
    outterShape.transform([['t', -centerX, -centerY], ['s', (lineWidth + width + 2 * originLineWidth) / width, (lineWidth + height + 2 * originLineWidth) / height], ['t', centerX, centerY]]);
    outterShape.isOutter = true;
    item.outterShape = outterShape;
  },
  clearOutterShape: function clearOutterShape(item) {
    if (item.outterShape) {
      item.outterShape.remove();
    }
  }
};

module.exports = Mixin;

/***/ }),

/***/ "./src/page/flow/mixin/resize.js":
/*!***************************************!*\
  !*** ./src/page/flow/mixin/resize.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview resize
 * node resize , edge resize
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util */ "./src/page/flow/util/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");
var Mixin = {};

function clearControlPoints(item) {
  if (item.controlPointShapes) {
    Util.each(item.controlPointShapes, function (shape) {
      shape.remove();
    });
  }
  item.controlPointShapes = [];
  item.isControlPointShow = false;
}

function showControlPoints(item) {
  if (item.controlPointShapes) {
    Util.each(item.controlPointShapes, function (shape) {
      shape.show();
    });
  }
  item.isControlPointShow = true;
}

function hideControlPoints(item) {
  if (item.controlPointShapes) {
    Util.each(item.controlPointShapes, function (shape) {
      shape.hide();
    });
  }
  item.isControlPointShow = false;
}

function drawNodeController(node, group) {
  var box = node.getBBox();
  var points = [{
    x: box.minX,
    y: box.minY
  }, {
    x: box.maxX,
    y: box.minY
  }, {
    x: box.minX,
    y: box.maxY
  }, {
    x: box.maxX,
    y: box.maxY
  }];
  clearControlPoints(node);
  var shape = group.addShape('rect', {
    attrs: Util.mix({}, Global.nodeSelectedBoxStyle, {
      symbol: 'square',
      x: box.minX,
      y: box.minY,
      width: box.maxX - box.minX,
      height: box.maxY - box.minY
    })
  });
  node.controlPointShapes.push(shape);
  Util.each(points, function (point) {
    var shape = group.addShape('marker', {
      attrs: Util.mix({}, Global.nodeControlPointStyle, {
        symbol: 'square',
        x: point.x,
        y: point.y
      }),
      freezePoint: {
        x: point.x,
        y: point.y
      },
      item: node
    });
    node.controlPointShapes.push(shape);
  });
}

function drawEdgeController(edge, group) {
  var points = edge.getPoints();
  var model = edge.getModel();
  clearControlPoints(edge);
  Util.each(points, function (point, index) {
    var shape = group.addShape('marker', {
      attrs: Util.mix({}, Global.edgeControlPointStyle, {
        x: point.x,
        y: point.y
      }),
      freezePoint: {
        x: point.x,
        y: point.y
      },
      item: edge
    });
    shape.eventPreFix = 'edgeControlPoint';
    shape.getSourcePoint = function () {
      return points[0];
    };
    shape.getTargetPoint = function () {
      return points[points.length - 1];
    };
    shape.getItem = function () {
      return edge;
    };
    shape.isSourceEndPoint = function () {
      return model.source && index === 0;
    };
    shape.isTargetEndPoint = function () {
      return model.target && index === points.length - 1;
    };
    edge.controlPointShapes.push(shape);
  });
}

Mixin.INIT = '_initResize';

Mixin.CFG = {
  /**
   * @type {boolean}
   */
  nodeResizeable: false,
  /**
   * @type {boolean}
   */
  edgeResizeable: true
};
Mixin.AUGMENT = {
  _initResize: function _initResize() {
    var _this = this;

    var graph = this.get('_graph');
    var nodeResizeable = this.get('nodeResizeable');
    var edgeResizeable = this.get('edgeResizeable');
    if (nodeResizeable) {
      graph.on('afteritemdraw', function (ev) {
        if (ev.item.type === 'node' && ev.item.isVisible()) {
          _this.drawControlPoints(ev.item);
        }
      });
    }
    if (edgeResizeable) {
      graph.on('afteritemdraw', function (ev) {
        if (ev.item.type === 'edge' && ev.item.isVisible()) {
          _this.drawControlPoints(ev.item);
        }
      });
    }
    graph.on('afteritemhide', function (ev) {
      ev.item.isControlPointShow && hideControlPoints(ev.item);
    });
    graph.on('afteritemshow', function (ev) {
      !ev.item.isControlPointShow && showControlPoints(ev.item);
    });
    graph.on('beforeitemdestroy', function (ev) {
      ev.item.isControlPointShow && clearControlPoints(ev.item);
    });
  },
  drawControlPoints: function drawControlPoints(item) {
    var graph = this.get('_graph');
    var frontRootGroup = graph.getFrontRootGroup();
    var nodeResizeable = this.get('nodeResizeable');
    var edgeResizeable = this.get('edgeResizeable');
    if (item.type === 'node') {
      nodeResizeable && drawNodeController(item, frontRootGroup);
    } else if (item.type === 'edge') {
      edgeResizeable && drawEdgeController(item, frontRootGroup);
    }
    item.isControlPointShow = true;
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/flow/mixin/tool.js":
/*!*************************************!*\
  !*** ./src/page/flow/mixin/tool.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview tool
 * @author huangtonger@aliyun.com
 */

var Mixin = {};
var Util = __webpack_require__(/*! ../util/ */ "./src/page/flow/util/index.js");

Mixin.AUGMENT = {
  changeAddEdgeModel: function changeAddEdgeModel(model) {
    this.set('addEdgeModel', model);
  },
  cancelAdd: function cancelAdd() {
    var graph = this.get('_graph');
    this.set('addType', undefined);
    this.set('addModel', undefined);
    graph.changeMode('default');
  },
  beginAdd: function beginAdd(type, model) {
    var graph = this.get('_graph');
    this.set('addType', type);
    this.set('addModel', model);
    graph.changeMode('add');
  },
  endAdd: function endAdd() {
    var graph = this.get('_graph');
    this.set('addType', undefined);
    this.set('addModel', undefined);
    graph.changeMode('default');
  },
  delete: function _delete() {
    var selectedItems = this.getSelected();
    var graph = this.get('_graph');
    Util.each(selectedItems, function (item) {
      graph.remove(item);
    });
  },
  toBack: function toBack() {
    var selectedItems = this.getSelected();
    var graph = this.get('_graph');
    selectedItems.sort(function (a, b) {
      var aGroup = a.getGraphicGroup();
      var bGroup = b.getGraphicGroup();
      return Util.getIndex(bGroup) - Util.getIndex(aGroup);
    });
    selectedItems.forEach(function (item) {
      graph.toBack(item);
    });
  },
  toFront: function toFront() {
    var selectedItems = this.getSelected();
    var graph = this.get('_graph');
    selectedItems.sort(function (a, b) {
      var aGroup = a.getGraphicGroup();
      var bGroup = b.getGraphicGroup();
      return Util.getIndex(aGroup) - Util.getIndex(bGroup);
    });
    selectedItems.forEach(function (item) {
      graph.toFront(item);
    });
  },
  addGroup: function addGroup(model) {
    var graph = this.get('_graph');
    var selectedItems = this.getSelected();
    var inSameGroup = true;
    var originGroup = void 0;
    if (selectedItems.length === 0) {
      return;
    }
    if (!model) {
      model = {
        label: '新建分组'
      };
    }
    Util.setId(model);
    graph.add('group', model);
    graph.toFront(model.id);
    var newGroup = graph.find(model.id);

    selectedItems.forEach(function (item) {
      var parent = item.getParent();
      if (parent) {
        if (originGroup) {
          if (originGroup !== parent) {
            inSameGroup = false;
          }
        } else {
          originGroup = parent;
        }
      }
    });
    if (!inSameGroup) {
      console.warn('add group elements must have the same parent');
      return;
    }
    if (originGroup) {
      model.parent = originGroup.getModel().id;
    }
    selectedItems.forEach(function (item) {
      graph.update(item, {
        parent: model.id
      });
    });
    var innerEdges = newGroup.getInnerEdges();
    newGroup.deepEach(function (child) {
      graph.toFront(child);
    });
    innerEdges.forEach(function (edge) {
      graph.toFront(edge);
    });
  },
  unGroup: function unGroup() {
    var graph = this.get('_graph');
    var selectedItems = this.getSelected();
    var group = selectedItems[0];
    if (selectedItems.length === 1 && Util.isGroup(group)) {
      group.getChildren().forEach(function (child) {
        graph.update(child, {
          parent: undefined
        });
      });
      graph.remove(group);
    }
  },
  newGroup: function newGroup(model) {
    this.addGroup(model);
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/page/flow/shape/edges/base.js":
/*!*******************************************!*\
  !*** ./src/page/flow/shape/edges/base.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview a straight line
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../../base/ */ "./src/page/base/index.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/page/flow/util/index.js");
var Global = __webpack_require__(/*! ../../global */ "./src/page/flow/global.js");

function drawArrow(group, style, radius) {
  var arrow = group.addShape('marker', {
    attrs: {
      symbol: function symbol(x, y, r, ctx) {
        var diffY = r / 1.6;
        ctx.moveTo(x, y - diffY);
        ctx.lineTo(x + radius, y);
        ctx.lineTo(x, y + diffY);
        ctx.closePath();
      },
      x: 0,
      y: 0,
      radius: radius,
      fill: style.stroke
    },
    capture: false
  });
  return arrow;
}

function drawShape(model, group, path, style, points) {
  var endArrow = void 0;
  var startArrow = void 0;
  if (style.endArrow) {
    endArrow = true;
    delete style.endArrow;
  }
  if (style.startArrow) {
    startArrow = true;
    delete style.startArrow;
  }
  var keyShape = group.addShape('path', {
    attrs: _extends({}, style, {
      path: path
    })
  });
  if (endArrow) {
    var segments = keyShape.get('segments');
    var endPoint = points[points.length - 1];
    var radius = Global.arrowRadius;
    if (endPoint) {
      var l = segments.length;
      var lastSegment = segments[l - 1];
      if (!lastSegment || !lastSegment.endTangent) {
        return;
      }
      var endTangent = lastSegment.endTangent();
      if (endTangent[0] === 0 && endTangent[1] === 0) {
        return;
      }
      var normalizeET = Util.vec2.normalize([], endTangent);
      var reviseX = radius * normalizeET[0];
      var reviseY = radius * normalizeET[1];
      path = Util.parsePathString(path);
      var lastSegmentPath = path[path.length - 1];
      lastSegmentPath[lastSegmentPath.length - 2] -= reviseX;
      lastSegmentPath[lastSegmentPath.length - 1] -= reviseY;
      keyShape.attr('path', path);
      endPoint.x -= reviseX;
      endPoint.y -= reviseY;
      var arrow = drawArrow(group, style, radius);
      keyShape.endArrow = arrow;
      arrow.isArrow = true;
      Util.arrowTo(arrow, endPoint.x, endPoint.y, 0, 0, endTangent[0], endTangent[1]);
    }
  }
  if (startArrow) {
    var _segments = keyShape.get('segments');
    var startPoint = points[0];
    var _radius = Global.arrowRadius;
    if (startPoint) {
      var firstSegment = _segments[1];
      if (!firstSegment || !firstSegment.endTangent) {
        return;
      }
      var startTangent = firstSegment.startTangent();
      if (startTangent[0] === 0 && startTangent[1] === 0) {
        return;
      }
      var _normalizeET = Util.vec2.normalize([], startTangent);
      var _reviseX = _radius * _normalizeET[0];
      var _reviseY = _radius * _normalizeET[1];
      path = Util.parsePathString(path);
      var firstSegmentPath = path[0];
      firstSegmentPath[firstSegmentPath.length - 2] -= _reviseX;
      firstSegmentPath[firstSegmentPath.length - 1] -= _reviseY;
      keyShape.attr('path', path);
      startPoint.x -= _reviseX;
      startPoint.y -= _reviseY;
      var _arrow = drawArrow(group, style, _radius);
      keyShape.startArrow = _arrow;
      _arrow.isArrow = true;
      Util.arrowTo(_arrow, startPoint.x, startPoint.y, 0, 0, startTangent[0], startTangent[1]);
    }
  }
  return keyShape;
}

function drawLabel(label, group, keyShape) {
  var center = keyShape.getPoint(0.5);
  var attrs = Util.mix(true, {}, Global.edgeLabelStyle, center);
  if (!center) {
    return;
  }
  if (Util.isString(label)) {
    attrs.text = label;
  } else {
    Util.mix(attrs, label);
  }
  return group.addShape('text', {
    attrs: attrs
  });
}

function drawBackRect(label, group, style) {
  var padding = Util.toAllPadding(Global.edgeLabelRectPadding);
  var textBox = label.getBBox();
  style = style ? style : Global.edgeLabelRectStyle;
  return group.addShape('rect', {
    attrs: _extends({}, style, {
      x: textBox.minX - padding[3],
      y: textBox.minY - padding[0],
      width: textBox.maxX - textBox.minX + padding[1] + padding[3],
      height: textBox.maxY - textBox.minY + padding[0] + padding[2]
    })
  });
}

Page.registerEdge('flow-edge', {
  draw: function draw(item) {
    var model = item.getModel();
    var group = item.getGraphicGroup();
    var points = item.getPoints();
    var path = this.getPath(item);
    var style = this.getStyle(item);
    var keyShape = drawShape(model, group, path, style, points);
    if (model.label && keyShape) {
      var label = drawLabel(model.label, group, keyShape);
      if (label) {
        drawBackRect(label, group, model.labelRectStyle);
        Util.toFront(label, group);
      }
    }
    return keyShape;
  },
  getPath: function getPath(item) {
    var points = item.getPoints();
    var source = item.getSource();
    var target = item.getTarget();
    return this.getPathByPoints(points, source, target);
  },
  getPathByPoints: function getPathByPoints(points) {
    return Util.pointsToPolygon(points);
  },
  getStyle: function getStyle(item) {
    var model = item.getModel();
    return Util.mix(true, {}, Global.edgeStyle, {
      stroke: model.color
    }, model.style);
  },
  getActivedStyle: function getActivedStyle() /* item */{
    return Global.edgeActivedStyle;
  },
  getSelectedStyle: function getSelectedStyle() /* item */{
    return Global.edgeSelectedStyle;
  },
  getActivedOutterStyle: function getActivedOutterStyle() /* item */{},
  getSelectedOutterStyle: function getSelectedOutterStyle() /* item */{}
});

/***/ }),

/***/ "./src/page/flow/shape/edges/polyline.js":
/*!***********************************************!*\
  !*** ./src/page/flow/shape/edges/polyline.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * @fileOverview polyline edges
 * @author leungwensen@gmail.com
 * @reference https://lark.alipay.com/antv/blog/polyline-edges-with-border-radius
 **/

var Util = __webpack_require__(/*! ../../util/ */ "./src/page/flow/util/index.js");
var Page = __webpack_require__(/*! ../../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../../global */ "./src/page/flow/global.js");

var DEFAULT_STYLE = {
  offset: 10,
  borderRadius: 5
};

function isHorizontalPort(port, bbox) {
  var dx = Math.abs(port.x - bbox.centerX);
  var dy = Math.abs(port.y - bbox.centerY);
  return dx / bbox.width > dy / bbox.height;
}

/**
 * BBox Utils
 * BBox:
 * { centerX, centerY, height, maxX, maxY, minX, minY, width }
 **/

function mergeBBox(b1, b2) {
  var minX = Math.min(b1.minX, b2.minX);
  var minY = Math.min(b1.minY, b2.minY);
  var maxX = Math.max(b1.maxX, b2.maxX);
  var maxY = Math.max(b1.maxY, b2.maxY);
  return {
    centerX: (minX + maxX) / 2, centerY: (minY + maxY) / 2,
    minX: minX, minY: minY, maxX: maxX, maxY: maxY,
    height: maxY - minY, width: maxX - minX
  };
}

function isBBoxesOverlapping(b1, b2) {
  return Math.abs(b1.centerX - b2.centerX) * 2 < b1.width + b2.width && Math.abs(b1.centerY - b2.centerY) * 2 < b1.height + b2.height;
}

function getBBoxFromPoint(point) {
  var x = point.x,
      y = point.y;

  return {
    centerX: x, centerY: y,
    minX: x, minY: y, maxX: x, maxY: y,
    height: 0, width: 0
  };
}

function getBBoxFromPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var xs = [];
  var ys = [];
  points.forEach(function (p) {
    xs.push(p.x);
    ys.push(p.y);
  });
  var minX = Math.min.apply(Math, xs);
  var maxX = Math.max.apply(Math, xs);
  var minY = Math.min.apply(Math, ys);
  var maxY = Math.max.apply(Math, ys);
  return {
    centerX: (minX + maxX) / 2, centerY: (minY + maxY) / 2,
    maxX: maxX, maxY: maxY, minX: minX, minY: minY,
    height: maxY - minY, width: maxX - minX
  };
}

function getExpandedBBox(bbox, offset) {
  if (bbox.width === 0 && bbox.height === 0) {
    // when it is a point
    return bbox;
  }
  return {
    centerX: bbox.centerX, centerY: bbox.centerY,
    minX: bbox.minX - offset, minY: bbox.minY - offset, maxX: bbox.maxX + offset, maxY: bbox.maxY + offset,
    height: bbox.height + 2 * offset, width: bbox.width + 2 * offset
  };
}

function getExpandedBBoxPoint(bbox, point) {
  var isHorizontal = isHorizontalPort(point, bbox);
  if (isHorizontal) {
    return { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y };
  }
  return { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
}

function getPointsFromBBox(bbox) {
  // anticlockwise
  var minX = bbox.minX,
      minY = bbox.minY,
      maxX = bbox.maxX,
      maxY = bbox.maxY;

  return [{ x: minX, y: minY }, { x: maxX, y: minY }, { x: maxX, y: maxY }, { x: minX, y: maxY }];
}

// function isPointInsideBBox(point, bbox) {
//   const { x, y } = point;
//   return x > bbox.minX && x < bbox.maxX && y > bbox.minY && y < bbox.maxY;
// }

function isPointOutsideBBox(point, bbox) {
  var x = point.x,
      y = point.y;

  return x < bbox.minX || x > bbox.maxX || y < bbox.minY || y > bbox.maxY;
}

// function isPointIntersectBBox(point, bbox) {
//   return !isPointInsideBBox(point, bbox) && !isPointOutsideBBox(point, bbox);
// }

function getBBoxXCrossPoints(bbox, x) {
  if (x < bbox.minX || x > bbox.maxX) {
    return [];
  }
  return [{ x: x, y: bbox.minY }, { x: x, y: bbox.maxY }];
}

function getBBoxYCrossPoints(bbox, y) {
  if (y < bbox.minY || y > bbox.maxY) {
    return [];
  }
  return [{ x: bbox.minX, y: y }, { x: bbox.maxX, y: y }];
}

function getBBoxCrossPointsByPoint(bbox, point) {
  return getBBoxXCrossPoints(bbox, point.x).concat(getBBoxYCrossPoints(bbox, point.y));
}

function isSegmentsIntersected(p0, p1, p2, p3) {
  var s1_x = p1.x - p0.x;
  var s1_y = p1.y - p0.y;
  var s2_x = p3.x - p2.x;
  var s2_y = p3.y - p2.y;

  var s = (-s1_y * (p0.x - p2.x) + s1_x * (p0.y - p2.y)) / (-s2_x * s1_y + s1_x * s2_y);
  var t = (s2_x * (p0.y - p2.y) - s2_y * (p0.x - p2.x)) / (-s2_x * s1_y + s1_x * s2_y);

  return s >= 0 && s <= 1 && t >= 0 && t <= 1;
}

function isSegmentCrossingBBox(p1, p2, bbox) {
  if (bbox.width === bbox.height === 0) {
    return false;
  }

  var _getPointsFromBBox = getPointsFromBBox(bbox),
      _getPointsFromBBox2 = _slicedToArray(_getPointsFromBBox, 4),
      pa = _getPointsFromBBox2[0],
      pb = _getPointsFromBBox2[1],
      pc = _getPointsFromBBox2[2],
      pd = _getPointsFromBBox2[3];

  return isSegmentsIntersected(p1, p2, pa, pb) || isSegmentsIntersected(p1, p2, pa, pd) || isSegmentsIntersected(p1, p2, pb, pc) || isSegmentsIntersected(p1, p2, pc, pd);
}

/**
 * Polyline Utils
 * Polyline:
 * [ p1, p2, p3, ..., pn ]
 **/

function simplifyPolyline(points) {
  points = filterConnectPoints(points);
  return points;
}

function getSimplePolyline(sPoint, tPoint) {
  return [sPoint, { x: sPoint.x, y: tPoint.y }, tPoint];
}

function filterConnectPoints(points) {
  // pre-process: remove duplicated points
  var result = [];
  var pointsMap = {};
  points.forEach(function (p) {
    var id = p.id = p.x + '-' + p.y;
    pointsMap[id] = p;
  });
  Util.each(pointsMap, function (p) {
    result.push(p);
  });
  return result;
}

function distance(p1, p2) {
  return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
}

function _costByPoints(p, points) {
  var offset = -2;
  var result = 0;
  points.forEach(function (point) {
    if (point) {
      if (p.x === point.x) result += offset;
      if (p.y === point.y) result += offset;
    }
  });
  return result;
}
function heuristicCostEstimate(p, ps, pt, source, target) {
  return distance(p, ps) + distance(p, pt) + _costByPoints(p, [ps, pt, source, target]);
}

function removeFrom(arr, item) {
  var index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

function getNeighborPoints(points, point, bbox1, bbox2) {
  var neighbors = [];
  points.forEach(function (p) {
    if (p !== point) {
      if (p.x === point.x || p.y === point.y) {
        if (!isSegmentCrossingBBox(p, point, bbox1) && !isSegmentCrossingBBox(p, point, bbox2)) {
          neighbors.push(p);
        }
      }
    }
  });

  return filterConnectPoints(neighbors);
}

function reconstructPath(pathPoints, pointById, cameFrom, currentId) {
  var iterator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  pathPoints.unshift(pointById[currentId]);
  if (cameFrom[currentId] && cameFrom[currentId] !== currentId && iterator <= 100) {
    reconstructPath(pathPoints, pointById, cameFrom, cameFrom[currentId], iterator + 1);
  }
}

function pathFinder(points, start, goal, sBBox, tBBox, os, ot) {
  // A-Star Algorithm
  var closedSet = [];
  var openSet = [start];
  var cameFrom = {};
  var gScore = {}; // all default values are Infinity
  var fScore = {}; // all default values are Infinity

  gScore[start.id] = 0;
  fScore[start.id] = heuristicCostEstimate(start, goal, start);

  var pointById = {};
  points.forEach(function (p) {
    pointById[p.id] = p;
  });

  var _loop = function _loop() {
    var current = void 0;
    var lowestFScore = Infinity;
    openSet.forEach(function (p) {
      if (fScore[p.id] < lowestFScore) {
        lowestFScore = fScore[p.id];
        current = p;
      }
    });

    if (current === goal) {
      // ending condition
      var pathPoints = [];
      reconstructPath(pathPoints, pointById, cameFrom, goal.id);
      return {
        v: pathPoints
      };
    }

    removeFrom(openSet, current);
    closedSet.push(current);

    getNeighborPoints(points, current, sBBox, tBBox).forEach(function (neighbor) {
      if (closedSet.indexOf(neighbor) !== -1) return;

      if (openSet.indexOf(neighbor) === -1) {
        openSet.push(neighbor);
      }

      var tentativeGScore = fScore[current.id] + distance(current, neighbor); // + distance(neighbor, goal);

      if (gScore[neighbor.id] && tentativeGScore >= gScore[neighbor.id]) return;

      cameFrom[neighbor.id] = current.id;
      gScore[neighbor.id] = tentativeGScore;
      fScore[neighbor.id] = gScore[neighbor.id] + heuristicCostEstimate(neighbor, goal, start, os, ot);
    });
  };

  while (openSet.length) {
    var _ret = _loop();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  // throw new Error('Cannot find path');
  console.error('cannot find path: ', points, start, goal);
  return [start, goal];
}

function getPolylinePoints(start, end, sNode, tNode, offset) {
  var sBBox = sNode && sNode.bbox ? sNode.bbox : getBBoxFromPoint(start);
  var tBBox = tNode && tNode.bbox ? tNode.bbox : getBBoxFromPoint(end);
  if (isBBoxesOverlapping(sBBox, tBBox)) {
    // source and target nodes are overlapping
    return simplifyPolyline(getSimplePolyline(start, end));
  }
  var sxBBox = getExpandedBBox(sBBox, offset);
  var txBBox = getExpandedBBox(tBBox, offset);
  if (isBBoxesOverlapping(sxBBox, txBBox)) {
    // the expanded bounding boxes of source and target nodes are overlapping
    return simplifyPolyline(getSimplePolyline(start, end));
  }
  var sPoint = getExpandedBBoxPoint(sxBBox, start);
  var tPoint = getExpandedBBoxPoint(txBBox, end);
  var lineBBox = getBBoxFromPoints([sPoint, tPoint]);
  var outerBBox = mergeBBox(sxBBox, txBBox);
  var sMixBBox = mergeBBox(sxBBox, lineBBox);
  var tMixBBox = mergeBBox(txBBox, lineBBox);
  var connectPoints = [];
  connectPoints = connectPoints.concat(getPointsFromBBox(sMixBBox) // .filter(p => !isPointIntersectBBox(p, txBBox))
  );
  connectPoints = connectPoints.concat(getPointsFromBBox(tMixBBox) // .filter(p => !isPointIntersectBBox(p, sxBBox))
  );
  var centerPoint = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
  [lineBBox, sMixBBox, tMixBBox].forEach(function (bbox) {
    connectPoints = connectPoints.concat(getBBoxCrossPointsByPoint(bbox, centerPoint).filter(function (p) {
      return isPointOutsideBBox(p, sxBBox) && isPointOutsideBBox(p, txBBox);
    }));
  });
  [{ x: sPoint.x, y: tPoint.y }, { x: tPoint.x, y: sPoint.y }].forEach(function (p) {
    if (isPointOutsideBBox(p, sxBBox) && isPointOutsideBBox(p, txBBox) // &&
    // isPointInsideBBox(p, sMixBBox) && isPointInsideBBox(p, tMixBBox)
    ) {
        connectPoints.push(p);
      }
  });
  connectPoints.unshift(sPoint);
  connectPoints.push(tPoint);
  connectPoints = filterConnectPoints(connectPoints, sxBBox, txBBox, outerBBox);
  var pathPoints = pathFinder(connectPoints, sPoint, tPoint, sBBox, tBBox, start, end);
  pathPoints.unshift(start);
  pathPoints.push(end);

  return simplifyPolyline(pathPoints);
}

function isBending(p0, p1, p2) {
  return !(p0.x === p1.x === p2.x || p0.y === p1.y === p2.y);
}

function getBorderRadiusPoints(p0, p1, p2, r) {
  var d0 = distance(p0, p1);
  var d1 = distance(p2, p1);
  if (d0 < r) {
    r = d0;
  }
  if (d1 < r) {
    r = d1;
  }
  var ps = {
    x: p1.x - r / d0 * (p1.x - p0.x),
    y: p1.y - r / d0 * (p1.y - p0.y)
  };
  var pt = {
    x: p1.x - r / d1 * (p1.x - p2.x),
    y: p1.y - r / d1 * (p1.y - p2.y)
  };
  return [ps, pt];
}

function getPathWithBorderRadiusByPolyline(points, borderRadius) {
  // TODO
  var pathSegments = [];
  var startPoint = points[0];
  pathSegments.push('M' + startPoint.x + ' ' + startPoint.y);
  points.forEach(function (p, i) {
    var p1 = points[i + 1];
    var p2 = points[i + 2];
    if (p1 && p2) {
      if (isBending(p, p1, p2)) {
        var _getBorderRadiusPoint = getBorderRadiusPoints(p, p1, p2, borderRadius),
            _getBorderRadiusPoint2 = _slicedToArray(_getBorderRadiusPoint, 2),
            ps = _getBorderRadiusPoint2[0],
            pt = _getBorderRadiusPoint2[1];

        pathSegments.push('L' + ps.x + ' ' + ps.y);
        pathSegments.push('Q' + p1.x + ' ' + p1.y + ' ' + pt.x + ' ' + pt.y);
        pathSegments.push('L' + pt.x + ' ' + pt.y);
      } else {
        pathSegments.push('L' + p1.x + ' ' + p1.y);
      }
    } else if (p1) {
      pathSegments.push('L' + p1.x + ' ' + p1.y);
    }
  });
  return pathSegments.join('');
}

Page.registerEdge('flow-polyline', {
  getPathByPoints: function getPathByPoints(points, source, target) {
    var _Util$merge = Util.merge({}, DEFAULT_STYLE, Global.polylineStyle),
        offset = _Util$merge.offset;

    var polylinePoints = getPolylinePoints(points[0], points[points.length - 1], source, target, offset);
    // FIXME default
    return Util.pointsToPolygon(polylinePoints);
  }
}, 'flow-edge');

Page.registerEdge('flow-polyline-round', {
  getPathByPoints: function getPathByPoints(points, source, target) {
    var _Util$merge2 = Util.merge({}, DEFAULT_STYLE, Global.polylineStyle),
        offset = _Util$merge2.offset,
        borderRadius = _Util$merge2.borderRadius;

    var polylinePoints = simplifyPolyline(getPolylinePoints(points[0], points[points.length - 1], source, target, offset));
    // FIXME default
    return getPathWithBorderRadiusByPolyline(polylinePoints, borderRadius);
  }
}, 'flow-edge');

/***/ }),

/***/ "./src/page/flow/shape/edges/smooth.js":
/*!*********************************************!*\
  !*** ./src/page/flow/shape/edges/smooth.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview smooth edges
 * @author leungwensen@gmail.com
 * @reference https://lark.alipay.com/antv/blog/an-approach-to-draw-smooth-cubic-bezier-curves-in-graphs
**/

var Util = __webpack_require__(/*! ../../util/ */ "./src/page/flow/util/index.js");
var Page = __webpack_require__(/*! ../../../base/ */ "./src/page/base/index.js");

function _isHorizontal(port, bbox) {
  var dx = Math.abs(port.x - bbox.centerX);
  var dy = Math.abs(port.y - bbox.centerY);
  return dx / bbox.width > dy / bbox.height;
}

function _getOffset(cx, sx, tx, offset) {
  var minOffset = offset ? offset / 2 : 30;
  var maxOffset = offset;
  if (cx <= sx && sx <= tx || cx >= sx && sx >= tx) {
    var _dx = (tx - sx) / 2;
    var abs = Math.abs(_dx);
    if (_dx === 0) {
      if (cx === sx) {
        return 0;
      }
      return (sx - cx) / Math.abs(sx - cx) * minOffset;
    }
    if (abs > maxOffset) {
      var temp = _dx / abs * maxOffset;
      return Math.abs(temp) < minOffset ? _dx / abs * minOffset : temp;
    }
    if (abs < minOffset) {
      return _dx / abs * minOffset;
    }
    return _dx;
  }
  var dx = minOffset;
  if (Math.abs(sx - tx) < 2 * Math.abs(sx - cx)) {
    dx = offset * Math.abs(sx - tx) / (2 * Math.abs(sx - cx));
  } else {
    dx = offset;
  }
  if (dx > maxOffset) {
    dx = maxOffset;
  }
  if (dx < minOffset) {
    dx = minOffset;
  }
  return sx > cx ? dx : -dx;
}

function _getOffsetPoint(node, port, targetPort, anotherNode) {
  var bbox = node.bbox;
  var isHorizontal = _isHorizontal(port, bbox);
  var dx = void 0;
  var dy = void 0;
  dx = dy = 0;
  var offset = Math.min(bbox.height, bbox.width);
  if (anotherNode && anotherNode.bbox) {
    offset = Math.min(offset, anotherNode.bbox.height, anotherNode.bbox.width);
  }
  if (isHorizontal) {
    dx = _getOffset(bbox.centerX, port.x, targetPort.x, offset);
  } else {
    dy = _getOffset(bbox.centerY, port.y, targetPort.y, offset);
  }
  return {
    x: port.x + dx,
    y: port.y + dy
  };
}

var TINY_OFFSET_SCALE = 0.1;
function _getStraightOffsetPoint(start, end) {
  // to get a tiny offset to provide angle for arrows
  var x0 = start.x;
  var y0 = start.y;
  var x1 = end.x;
  var y1 = end.y;
  return {
    x: x0 + (x1 - x0) * TINY_OFFSET_SCALE,
    y: y0 + (y1 - y0) * TINY_OFFSET_SCALE
  };
}

function getCubicControlPoints(from, to, source, target) {
  // algorithm: https://lark.alipay.com/antv/blog/an-approach-to-draw-smooth-cubic-bezier-curves-in-graphs
  return [source && source.bbox ? _getOffsetPoint(source, from, to, target) : _getStraightOffsetPoint(from, to), target && target.bbox ? _getOffsetPoint(target, to, from, source) : _getStraightOffsetPoint(to, from)];
}

/**
 * get cubic bezier curve
 * @param {array}    points set of points
 * @param {Node}     source source node
 * @param {Node}     target target node
 * @return {array}   path   path segments
**/
function getCubicBezierCurve(points, source, target) {
  var start = points[0];
  var end = points[points.length - 1];
  var M = ['M', start.x, start.y];
  // automatically get the rest two control points
  var controlPoints = getCubicControlPoints(start, end, source, target);
  var sub = ['C'];
  var path = [M];

  Util.each(controlPoints, function (point) {
    sub.push(point.x, point.y);
  });
  sub.push(end.x, end.y);
  path.push(sub);
  return path;
}

Page.registerEdge('flow-smooth', {
  getPathByPoints: function getPathByPoints(points, source, target) {
    return getCubicBezierCurve(points, source, target);
  }
}, 'flow-edge');

/***/ }),

/***/ "./src/page/flow/shape/groups/base.js":
/*!********************************************!*\
  !*** ./src/page/flow/shape/groups/base.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview rect node
 * @author huangtonger@aliyun.com
 */

var Page = __webpack_require__(/*! ../../../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ../../global */ "./src/page/flow/global.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/page/flow/util/index.js");
var groupIconPath = Util.getGroupIconPath();
var collapsedButtonPath = Util.getCollapsedButtonPath();
var expandedButtonPath = Util.getExpandedButtonPath();
var groupIconStyle = {
  fill: '#CED4D9'
};
var collapsedButtonStyle = {
  stroke: '#697B8C',
  fill: '#fff',
  fillOpacity: 0
};
var expandedButtonStyle = {
  stroke: '#697B8C',
  fill: '#fff',
  fillOpacity: 0
};
var groupLabelStyle = {
  fill: '#000000',
  textBaseline: 'top',
  textAlign: 'left'
};
var groupStyle = {
  stroke: '#CED4D9',
  fill: '#F2F4F5',
  radius: 4
};
var groupBackgroundPadding = Global.groupBackgroundPadding; // 背景组边距
var groupLabelMarginLeft = 40; // 组文本标签水平坐标偏移
var groupLabelMarginTop = 13; // 组文本标签竖直坐标偏移
var buttonMarginTop = 12;
var buttonMarginRight = 12;
var iconMarginLeft = 8;
var iconMarginTop = 12;
var collapsedWidth = 184;
var collapsedHeight = 40;
var emptyBoxWidth = collapsedWidth - groupBackgroundPadding[1] - groupBackgroundPadding[3];
var emptyBoxHeight = collapsedHeight - groupBackgroundPadding[0] - groupBackgroundPadding[2];

function getStyle(model) {
  return Util.mix(true, {}, groupStyle, {
    fill: model.color,
    stroke: model.color
  }, model.style);
}

function drawKeyShape(model, group, path, style) {
  var keyShape = group.addShape('path', {
    attrs: _extends({}, style, {
      path: path
    })
  });
  keyShape.isGroupKeyShape = true;
  return keyShape;
}

function drawLabel(label, group, x, y) {
  var attrs = Util.mix(true, {}, groupLabelStyle, {
    x: x + groupLabelMarginLeft,
    y: y + groupLabelMarginTop
  });
  if (Util.isString(label)) {
    attrs.text = label;
  } else {
    Util.mix(attrs, label);
  }
  group.addShape('text', {
    attrs: attrs
  });
}

function drawIcon(path, group, x, y) {
  var shape = group.addShape('path', {
    attrs: _extends({
      path: path
    }, groupIconStyle)
  });
  var shapeBox = shape.getBBox();
  shape.translate(x - shapeBox.minX + iconMarginLeft, y - shapeBox.minY + iconMarginTop);
}

function drawButton(collapsed, group, x, y, width) {
  var shape = void 0;
  if (collapsed) {
    shape = group.addShape('path', {
      attrs: _extends({
        path: expandedButtonPath
      }, expandedButtonStyle)
    });
    var shapeBox = shape.getBBox();
    var shapeWidth = shapeBox.maxX - shapeBox.minX;
    shape.isExpandedButton = true;
    shape.translate(x + width - shapeBox.minX - shapeWidth - buttonMarginRight, y - shapeBox.minY + buttonMarginTop);
  } else {
    shape = group.addShape('path', {
      attrs: _extends({
        path: collapsedButtonPath
      }, collapsedButtonStyle)
    });
    var _shapeBox = shape.getBBox();
    var _shapeWidth = _shapeBox.maxX - _shapeBox.minX;
    shape.isCollapsedButton = true;
    shape.translate(x + width - _shapeBox.minX - _shapeWidth - buttonMarginRight, y - _shapeBox.minY + buttonMarginTop);
  }
  shape.isButton = true;
  return shape;
}

function getX(box, padding) {
  return box.minX - padding[3];
}

function getY(box, padding) {
  return box.minY - padding[0];
}

function getWidth(box, padding) {
  return box.maxX - box.minX + padding[3] + padding[1];
}

function getHeight(box, padding) {
  return box.maxY - box.minY + padding[0] + padding[2];
}

Page.registerGroup('flow-group', {
  draw: function draw(item) {
    var model = item.getModel();
    var group = item.getGraphicGroup();
    var box = item.getChildrenBBox();
    var collapsed = model.collapsed;
    var padding = model.padding ? model.padding : groupBackgroundPadding;
    if (box.minX === Infinity) {
      box.minX = model.x;
      box.maxX = model.x + emptyBoxWidth;
      box.minY = model.y;
      box.maxY = model.y + emptyBoxHeight;
    }
    if (collapsed) {
      box.minX = box.maxX - emptyBoxWidth;
      box.maxY = box.minY + emptyBoxHeight;
    }
    if (box.maxX - box.minX < emptyBoxWidth) {
      var detalWidth = emptyBoxWidth - box.maxX + box.minX;
      box.minX -= detalWidth / 2;
      box.maxX += detalWidth / 2;
    }
    var x = getX(box, padding);
    var y = getY(box, padding);
    var width = getWidth(box, padding);
    var height = getHeight(box, padding);
    var style = getStyle(model);
    var path = Util.getRectPath(x, y, width, height, style.radius);
    var keyShape = drawKeyShape(model, group, path, style);

    drawLabel(Util.isNil(model.label) ? '新建分组' : model.label, group, x, y);
    drawIcon(Util.isNil(model.icon) ? groupIconPath : model.icon, group, x, y);
    var button = drawButton(collapsed, group, x, y, width, height);
    button.item = item;
    model.x = box.minX;
    model.y = box.minY;
    return keyShape;
  },
  getActivedStyle: function getActivedStyle() /* item */{
    return Global.groupActivedStyle;
  },
  getSelectedStyle: function getSelectedStyle() /* item */{
    return Global.groupSelectedStyle;
  },
  getSelectedOutterStyle: function getSelectedOutterStyle() /* item */{
    return Global.groupSelectedOutterStyle;
  },
  getActivedOutterStyle: function getActivedOutterStyle() /* item */{}
});

/***/ }),

/***/ "./src/page/flow/shape/index.js":
/*!**************************************!*\
  !*** ./src/page/flow/shape/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

__webpack_require__(/*! ./nodes/base */ "./src/page/flow/shape/nodes/base.js");
__webpack_require__(/*! ./edges/base */ "./src/page/flow/shape/edges/base.js");
__webpack_require__(/*! ./edges/smooth */ "./src/page/flow/shape/edges/smooth.js");
__webpack_require__(/*! ./edges/polyline */ "./src/page/flow/shape/edges/polyline.js");
__webpack_require__(/*! ./groups/base */ "./src/page/flow/shape/groups/base.js");

/***/ }),

/***/ "./src/page/flow/shape/nodes/base.js":
/*!*******************************************!*\
  !*** ./src/page/flow/shape/nodes/base.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview rect node
 * @author huangtonger@aliyun.com
 */

var Page = __webpack_require__(/*! ../../../base/ */ "./src/page/base/index.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/page/flow/util/index.js");
var Global = __webpack_require__(/*! ../../global */ "./src/page/flow/global.js");

function getStyle(model, color) {
  var fill = void 0;
  var stroke = void 0;

  if (color) {
    var palettes = Util.Palettes.generate(color);
    fill = palettes[0];
    stroke = palettes[3];
  }
  return Util.mix(true, {}, Global.nodeStyle, {
    fill: fill,
    stroke: stroke
  }, model.style);
}

function drawKeyShape(model, group, path, style) {
  return group.addShape('path', {
    attrs: _extends({}, style, {
      path: path
    })
  });
}

function drawLabel(label, group) {
  var attrs = Util.mix(true, {}, Global.nodeLabelStyle, {
    x: 0,
    y: 0
  });
  if (Util.isString(label)) {
    attrs.text = label;
  } else {
    Util.mix(attrs, label);
  }
  group.addShape('text', {
    attrs: attrs
  });
}

Page.registerNode('flow-node', {
  draw: function draw(item) {
    var model = item.getModel();
    var group = item.getGraphicGroup();
    var size = Util.getNodeSize(model);
    var color = this.getColor(item);
    var style = this.getStyle(model, color);
    var path = this.getPath(size, style);
    var keyShape = drawKeyShape(model, group, path, style);
    model.label && drawLabel(model.label, group);
    return keyShape;
  },

  getStyle: getStyle,
  color: null,
  getColor: function getColor(item) {
    var model = item.getModel();
    return model.color ? model.color : this.color;
  },
  getPath: function getPath(size, style) {
    return Util.getRectPath(-size[0] / 2, -size[1] / 2, size[0], size[1], style.radius);
  },
  getActivedOutterStyle: function getActivedOutterStyle() {
    return Global.nodeActivedOutterStyle;
  },
  getActivedStyle: function getActivedStyle(item) {
    var color = this.getColor(item);
    if (color) {
      var palettes = Util.Palettes.generate(color);
      return {
        fill: palettes[0],
        stroke: palettes[5]
      };
    }
    return Global.nodeActivedStyle;
  },
  getSelectedStyle: function getSelectedStyle(item) {
    var color = this.getColor(item);
    if (color) {
      var palettes = Util.Palettes.generate(color);
      return {
        fill: palettes[2],
        stroke: palettes[5]
      };
    }
    return Global.nodeSelectedStyle;
  },
  getSelectedOutterStyle: function getSelectedOutterStyle(item) {
    var color = this.getColor(item);
    if (color) {
      var palettes = Util.Palettes.generate(color);
      return {
        stroke: palettes[1],
        fill: palettes[1]
      };
    }
    return Global.nodeSelectedOutterStyle;
  },

  anchor: [[0.5, 0], // 上面边的中点
  [1, 0.5], // 右边边的中点
  [0.5, 1], // 下边边的中点
  [0, 0.5] // 左边边的中点
  ]
});

Page.registerNode('flow-html', {}, ['flow-node', 'html']);

Page.registerNode('flow-rect', {}, 'flow-node');

Page.registerNode('flow-capsule', {
  getPath: function getPath(size) {
    return Util.getRectPath(-size[0] / 2, -size[1] / 2, size[0], size[1], size[1] / 2);
  }
}, 'flow-node');

Page.registerNode('flow-circle', {
  getPath: function getPath(size) {
    var width = size[0];
    var height = size[1];
    return Util.getEllipsePath(0, 0, width / 2, height / 2);
  }
}, 'flow-node');

Page.registerNode('flow-rhombus', {
  getPath: function getPath(size) {
    var x = 0;
    var y = 0;
    var width = size[0];
    var height = size[1];
    var points = [{
      x: x,
      y: y - height / 2
    }, {
      x: x + width / 2,
      y: y
    }, {
      x: x,
      y: y + height / 2
    }, {
      x: x - width / 2,
      y: y
    }, {
      x: x,
      y: y - height / 2
    }];
    return Util.pointsToPolygon(points);
  }
}, 'flow-node');

/***/ }),

/***/ "./src/page/flow/util/base.js":
/*!************************************!*\
  !*** ./src/page/flow/util/base.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview base util
 * @author huangtonger@aliyun.com
 */

var Global = __webpack_require__(/*! ../global */ "./src/page/flow/global.js");
var Base = __webpack_require__(/*! ../../base/util/ */ "./src/page/base/util/index.js");

module.exports = _extends({}, Base, {
  /**
   * get node size
   * @param  {object} model box
   * @param  {object} htmlElementContaniner group
   * @return {array} rect
   */
  getNodeSize: function getNodeSize(model, htmlElementContaniner) {
    if (model.size) {
      if (Base.isNumber(model.size)) {
        return [model.size, model.size];
      } else if (Base.isString(model.size)) {
        return model.size.split('*');
      }
      return model.size;
    }
    if (model.html && htmlElementContaniner) {
      var dom = Base.createDOM(model.html, {
        position: 'absolute',
        visibility: 'hidden'
      });
      htmlElementContaniner.appendChild(dom);
      var width = Base.getWidth(dom);
      var height = Base.getHeight(dom);
      dom.remove();
      return [width, height];
    }
    return Global.defaultNodeSize;
  }
});

/***/ }),

/***/ "./src/page/flow/util/behaviour.js":
/*!*****************************************!*\
  !*** ./src/page/flow/util/behaviour.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview behaviour util
 * @author huangtonger@aliyun.com
 */
var BaseUtil = __webpack_require__(/*! ./base */ "./src/page/flow/util/base.js");

module.exports = {
  dragingEdgeEndPoint: function dragingEdgeEndPoint(endPointType, edgeModel, graph, delegation, startPoint, ev, source, target) {
    var shapeObj = graph.getShapeObj('edge', edgeModel);
    var points = endPointType === 'source' ? [ev, startPoint] : [startPoint, ev];
    var path = shapeObj.getPathByPoints(points, source, target);
    // let activeAnchor;
    // if (ev.item && ev.item.isNode && ev.item.getAnchorPoints().length > 0) {
    //   const linkPoints = ev.item.getLinkPoints(ev);
    //   const nearestAnchorIndex = linkPoints[0].index;
    //   const anchors = ev.item.getAllAnchors();
    //   anchors.forEach(anchor => {
    //     if (anchor.getIndex() === nearestAnchorIndex) {
    //       activeAnchor = anchor;
    //       anchor.setHotspotActived(true);
    //     } else {
    //       anchor.setHotspotActived(false);
    //     }
    //   });
    // }
    delegation.attr('path', path);
    graph.drawFrontCanvas();
    // return activeAnchor;
  },

  // 平移组
  panGroup: function panGroup(group, dx, dy, graph) {
    var groupModel = group.getModel();
    BaseUtil.traverseTree(group, function (child) {
      if (child.type === 'node') {
        var model = child.getModel();
        graph.update(child, {
          x: model.x + dx,
          y: model.y + dy
        });
      }
    }, function (parent) {
      if (parent.type === 'group') {
        return parent.getChildren();
      }
      return [];
    });
    graph.update(group, {
      x: groupModel.x + dx,
      y: groupModel.y + dy
    });
  }
};

/***/ }),

/***/ "./src/page/flow/util/index.js":
/*!*************************************!*\
  !*** ./src/page/flow/util/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var BaseUtil = __webpack_require__(/*! ./base */ "./src/page/flow/util/base.js");
var BehaviourUtil = __webpack_require__(/*! ./behaviour */ "./src/page/flow/util/behaviour.js");
var MathUtil = __webpack_require__(/*! ./math */ "./src/page/flow/util/math.js");
var Util = _extends({}, G6.Util, BaseUtil, BehaviourUtil, MathUtil);
module.exports = Util;

/***/ }),

/***/ "./src/page/flow/util/math.js":
/*!************************************!*\
  !*** ./src/page/flow/util/math.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileOverview base util
 * @author huangtonger@aliyun.com
 */

module.exports = {
  rectRectCrossAlgorithm: function rectRectCrossAlgorithm(r1, r2) {
    var minx = Math.max(r1.minX, r2.minX);
    var miny = Math.max(r1.minY, r2.minY);
    var maxx = Math.min(r1.maxX, r2.maxX);
    var maxy = Math.min(r1.maxY, r2.maxY);
    return minx > maxx || miny > maxy;
  }
};

/***/ }),

/***/ "./src/page/mind/behaviour/hoverMindExpandButton.js":
/*!**********************************************************!*\
  !*** ./src/page/mind/behaviour/hoverMindExpandButton.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview hover tree ExpandButton
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");

Page.registerBehaviour('hoverMindExpandButton', function (mind) {
  var graph = mind.getGraph();
  graph.behaviourOn('mouseenter', function (ev) {
    var shape = ev.shape;
    if (shape && shape.isExpandedButton) {
      shape.attr('fillOpacity', 0.8);
      graph.draw();
    }
  });
  graph.behaviourOn('mouseleave', function (ev) {
    var shape = ev.shape;
    if (shape && shape.isExpandedButton) {
      shape.attr('fillOpacity', 1);
      graph.draw();
    }
  });
});

/***/ }),

/***/ "./src/page/mind/behaviour/index.js":
/*!******************************************!*\
  !*** ./src/page/mind/behaviour/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview behaviour picker
 * @author huangtonger@aliyun.com
 */

__webpack_require__(/*! ./panMindNode */ "./src/page/mind/behaviour/panMindNode.js");
__webpack_require__(/*! ./hoverMindExpandButton */ "./src/page/mind/behaviour/hoverMindExpandButton.js");
__webpack_require__(/*! ./keydownMoveSelection */ "./src/page/mind/behaviour/keydownMoveSelection.js");
__webpack_require__(/*! ./keydownEditLabel */ "./src/page/mind/behaviour/keydownEditLabel.js");

/***/ }),

/***/ "./src/page/mind/behaviour/keydownEditLabel.js":
/*!*****************************************************!*\
  !*** ./src/page/mind/behaviour/keydownEditLabel.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview keydown edit label
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");

Page.registerBehaviour('keydownEditLabel', function (mind) {
  var graph = mind.getGraph();
  graph.on('keydown', function (ev) {
    mind.showLabelEditor(ev);
  });
});

/***/ }),

/***/ "./src/page/mind/behaviour/keydownMoveSelection.js":
/*!*********************************************************!*\
  !*** ./src/page/mind/behaviour/keydownMoveSelection.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview keydown move selection
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");

Page.registerBehaviour('keydownMoveSelection', function (page) {
  var graph = page.getGraph();
  graph.on('keydown', function (ev) {
    page._moveItemSelection(ev);
  });
});

/***/ }),

/***/ "./src/page/mind/behaviour/panMindNode.js":
/*!************************************************!*\
  !*** ./src/page/mind/behaviour/panMindNode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview pan node
 * @author huangtonger@aliyun.com
 */
var Page = __webpack_require__(/*! ../../base/ */ "./src/page/base/index.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/mind/util/index.js");

Page.registerBehaviour('panMindNode', function (mind) {
  var tree = mind.getGraph();
  var dragNodeModel = void 0;
  var originNth = void 0;
  var lastHotArea = void 0;
  tree.behaviourOn('beforeshowdelegation', function () {
    mind.clearActived();
    mind.clearSelected();
  });
  tree.behaviourOn('node:dragstart', function (ev) {
    if (ev.button === 2) {
      return;
    }
    var item = ev.item;
    dragNodeModel = item.getModel();
    if (!dragNodeModel.parent || ev.shape.isCollapsedButton || ev.shape.isExpandedButton) {
      resetStatus();
      return;
    }
    originNth = tree.getNth(item);
    tree.remove(item);
  });
  tree.behaviourOn('itempanning', function (ev) {
    if (ev.shape && ev.shape.isPlaceholder) {
      return;
    }
    var hotArea = mind.getHotArea(ev);
    var root = mind.getRoot();
    if (lastHotArea) {
      if (hotArea) {
        if (lastHotArea.id !== hotArea.id) {
          tree.remove(tree.find(lastHotArea.id));
        }
      } else {
        tree.remove(tree.find(lastHotArea.id));
      }
    }
    lastHotArea = hotArea;
    if (hotArea) {
      var parent = hotArea.parent;
      if (!tree.find(hotArea.id)) {
        // const box = dragItem.getBBox();
        // const shapeObj = dragItem.getShapeObj();
        // const lineWidth = shapeObj.getStyle().lineWidth;
        var addModel = {
          id: hotArea.id,
          parent: parent.id,
          isPlaceholder: true,
          parentModel: parent,
          baseline: lastHotArea.parent.id === root.id ? 'center' : undefined,
          shape: 'mind-placeholder',
          // lineWidth,
          // width: box.width,
          // height: box.height,
          nth: hotArea.nth
        };
        if (hotArea.side) {
          addModel.side = hotArea.side;
        }
        tree.add('node', addModel);
      }
    }
  });
  tree.behaviourOn('drop', function () {
    if (dragNodeModel) {
      if (lastHotArea) {
        var model = Util.cloneDeep(dragNodeModel);
        tree.remove(lastHotArea.id);
        mind.executeCommand('moveMindNode', {
          model: model,
          newParentId: lastHotArea.parent.id,
          newNth: lastHotArea.nth,
          newSide: lastHotArea.side,
          originParentId: dragNodeModel.parent,
          originNth: originNth,
          originSide: dragNodeModel.side
        });
      } else {
        resetDragNode();
      }
    }
    resetStatus();
  });
  tree.behaviourOn('canvas:mouseleave', function () {
    if (dragNodeModel) {
      resetDragNode();
      resetStatus();
    }
  });
  function resetDragNode() {
    dragNodeModel.nth = originNth;
    var node = tree.add('node', dragNodeModel);
    mind.setSelected(node, true);
    if (lastHotArea) {
      tree.remove(lastHotArea.id);
    }
  }
  function resetStatus() {
    tree.emit('panitemend');
    dragNodeModel = undefined;
    lastHotArea = undefined;
    originNth = undefined;
  }
}, ['startPanItem', 'processPanItem', 'endPanItem']);

/***/ }),

/***/ "./src/page/mind/command/index.js":
/*!****************************************!*\
  !*** ./src/page/mind/command/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

var Command = __webpack_require__(/*! ../../../command/ */ "./src/command/index.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/page/mind/util/index.js");

function enable(editor) {
  var page = editor.getCurrentPage();
  var items = page.getSelected();
  return page.isMind && items.length > 0;
}

function addRootChild(page, selectedItem, addItemId) {
  var graph = page.getGraph();
  var selectedModel = selectedItem.getModel();
  var firstLefts = page.getFirstChildrenBySide('left');
  var firstLeftItem = firstLefts[0] && graph.find(firstLefts[0].id);
  return graph.add('node', {
    id: addItemId,
    parent: selectedItem.id,
    label: '新建节点',
    side: selectedModel.children.length > 2 ? 'left' : 'right',
    nth: firstLeftItem ? graph.getNth(firstLeftItem) : undefined
  });
}

// 添加相邻节点
Command.registerCommand('append', {
  enable: function enable(editor) {
    var page = editor.getCurrentPage();
    var items = page.getSelected();
    return page.isMind && items.length === 1;
  },
  getItem: function getItem(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();

    if (this.selectedItemId) {
      return graph.find(this.selectedItemId);
    }
    return page.getSelected()[0];
  },
  execute: function execute(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var root = page.getRoot();
    var selectedItem = this.getItem(editor);
    var selectedModel = selectedItem.getModel();
    var hierarchy = selectedModel.hierarchy;
    var selectedParent = selectedItem.getParent();
    var addNode = void 0;

    if (selectedItem.isRoot) {
      addNode = addRootChild(page, selectedItem, this.addItemId);
    } else {
      var nth = graph.getNth(selectedItem);
      addNode = graph.add('node', {
        id: this.addItemId,
        parent: selectedParent.id,
        side: hierarchy === 2 && root.children.length === 3 ? 'left' : selectedModel.side,
        label: '新建节点',
        nth: selectedModel.side === 'left' && hierarchy === 2 ? nth : nth + 1
      });
    }
    page.clearSelected();
    page.clearActived();
    page.setSelected(addNode, true);
    if (this.executeTimes === 1) {
      this.selectedItemId = selectedItem.id;
      this.addItemId = addNode.id;
      page.beginEditLabel(addNode);
    }
  },
  back: function back(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    graph.remove(this.addItemId);
    page.clearSelected();
    page.clearActived();
    page.setSelected(this.selectedItemId, true);
  },

  shortcutCodes: ['Enter']
});

// 添加子节点
Command.registerCommand('appendChild', {
  enable: enable,
  getItem: function getItem(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    if (this.selectedItemId) {
      return graph.find(this.selectedItemId);
    }
    return page.getSelected()[0];
  },
  execute: function execute(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var selectedItem = this.getItem(editor);
    var addNode = void 0;
    if (selectedItem.isRoot) {
      addNode = addRootChild(page, selectedItem, this.addItemId);
    } else {
      addNode = graph.add('node', {
        id: this.addItemId,
        parent: selectedItem.id,
        label: '新建节点'
      });
    }
    page.clearSelected();
    page.clearActived();
    page.setSelected(addNode, true);
    if (this.executeTimes === 1) {
      this.selectedItemId = selectedItem.id;
      this.addItemId = addNode.id;
      page.beginEditLabel(addNode);
    }
  },
  back: function back(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    graph.remove(this.addItemId);
    page.clearSelected();
    page.clearActived();
    page.setSelected(this.selectedItemId, true);
  },

  shortcutCodes: ['Tab']
});

// 移动节点
Command.registerCommand('moveMindNode', {
  enable: function enable(editor) {
    var page = editor.getCurrentPage();
    var panItems = page.get('panItems');
    return page.isMind && panItems && panItems.length > 0;
  },
  execute: function execute(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var newParentId = this.newParentId;
    var newNth = this.newNth;
    var newSide = this.newSide;
    var model = Util.cloneDeep(this.model);
    delete model.shape;
    delete model.side;
    graph.remove(model.id);
    Util.mix(model, {
      parent: newParentId,
      nth: newNth,
      side: newSide
    });
    var node = graph.add('node', model);
    page.clearSelected();
    page.setSelected(node, true);
  },
  back: function back(editor) {
    var page = editor.getCurrentPage();
    var graph = page.getGraph();
    var originParentId = this.originParentId;
    var originNth = this.originNth;
    var originSide = this.originSide;
    var model = Util.cloneDeep(this.model);
    delete model.shape;
    delete model.side;
    graph.remove(model.id);
    Util.mix(model, {
      parent: originParentId,
      nth: originNth,
      side: originSide
    });
    var node = graph.add('node', model);
    page.clearSelected();
    page.setSelected(node, true);
  }
});

/***/ }),

/***/ "./src/page/mind/global.js":
/*!*********************************!*\
  !*** ./src/page/mind/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileOverview mind map global cfg
 * @author huangtonger@aliyun.com
 */

module.exports = {
  // 默认节点
  nodeDefaultShape: 'mind-node',
  // 默认边
  edgeDefaultShape: 'mind-edge'
};

/***/ }),

/***/ "./src/page/mind/index.js":
/*!********************************!*\
  !*** ./src/page/mind/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mind entry file
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ./mind */ "./src/page/mind/mind.js");
var Page = __webpack_require__(/*! ../base/ */ "./src/page/base/index.js");
var Global = __webpack_require__(/*! ./global */ "./src/page/mind/global.js");
Mind.Util = __webpack_require__(/*! ./util/ */ "./src/page/mind/util/index.js");
Mind.Global = Global;
Page.setRegister(Mind, Global.nodeDefaultShape, Global.edgeDefaultShape, Global.groupDefaultShape);
__webpack_require__(/*! ./behaviour/ */ "./src/page/mind/behaviour/index.js");
__webpack_require__(/*! ./shape/ */ "./src/page/mind/shape/index.js");
__webpack_require__(/*! ./command/ */ "./src/page/mind/command/index.js");
module.exports = Mind;

/***/ }),

/***/ "./src/page/mind/mind.js":
/*!*******************************!*\
  !*** ./src/page/mind/mind.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview mind map
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var Page = __webpack_require__(/*! ../base/ */ "./src/page/base/index.js");
var Util = __webpack_require__(/*! ./util/ */ "./src/page/mind/util/index.js");
var Global = __webpack_require__(/*! ./global */ "./src/page/mind/global.js");
var Mixins = [];

var Mind = function (_Page) {
  _inherits(Mind, _Page);

  function Mind(inputCfg) {
    _classCallCheck(this, Mind);

    var cfg = {
      /**
       * 是否显示交互热区
       * showHotArea
       * @type {boolean}
       */
      showHotArea: false,

      /**
       * 默认数据
       * default data
       * @type {object}
       */
      defaultData: {
        roots: [{
          label: '思维导图',
          children: [{
            label: '新建节点'
          }, {
            label: '新建节点'
          }, {
            label: '新建节点'
          }]
        }]
      },

      /**
       * 快捷键列表
       * shortcut list
       * @type {object}
       */
      shortcut: {
        append: true,
        appendChild: true,
        collapseExpand: true,
        selectAll: true
      },

      /**
       * 是否支持标签文本编辑
       * label editable
       * @type {boolean}
       */
      labelEditable: true,

      /**
       * 图配置项
       * graph cfg
       * @type {object|undefined}
       */
      graph: {
        modes: {
          default: ['clickNodeSelected', 'keydownMoveSelection', 'clickCanvasSelected', 'hoverMindExpandButton', 'keydownEditLabel', 'panBlank', 'wheelPanCanvas', 'panMindNode', 'clickCollapsedButton', 'clickExpandedButton', 'hoverButton', 'hoverNodeActived', 'dblclickItemEditLabel'],
          readOnly: ['clickNodeSelected', 'wheelPanCanvas', 'keydownMoveSelection', 'hoverNodeActived', 'panCanvas', 'clickExpandedButton', 'hoverButton', 'clickCanvasSelected']
        },
        layout: new G6.Layouts.Mindmap({
          direction: 'H',
          getSubTreeSep: function getSubTreeSep(node) {
            if (node.children && node.children.length > 0) {
              if (node.hierarchy <= 2) {
                return 8;
              }
              return 2;
            }
            return 0;
          },
          getHGap: function getHGap(node) {
            if (node.hierarchy === 1) {
              return 8;
            }
            if (node.hierarchy === 2) {
              return 24;
            }
            return 18;
          },
          getVGap: function getVGap(node) {
            if (node.hierarchy === 1) {
              return 24;
            }
            if (node.hierarchy === 2) {
              return 24;
            }
            return 2;
          },
          getSide: function getSide(node) {
            if (node.data.side) {
              return node.data.side;
            }
            return 'right';
          }
        }),
        mode: 'default',
        defaultIntersectBox: 'rect',
        nodeDefaultShape: Global.nodeDefaultShape,
        edgeDefaultShape: Global.edgeDefaultShape,
        minZoom: 0.2,
        maxZoom: 2
      },

      /**
       * 是否展示对齐线
       * is show align line
       * @type {object}
       */
      align: {
        item: false
      },

      /**
       * 根节点图形
       * root shape
       * @type {string}
       */
      rootShape: 'mind-root',

      /**
       * 第一层子节点图形
       * first sub child shape
       * @type {string}
       */
      firstSubShape: 'mind-first-sub',

      /**
       * 第二层子节点图形
       * second sub child shape
       * @type {string}
       */
      secondSubShape: 'mind-second-sub',

      /**
       * 子节点图形
       * sub child shape
       * @type {string}
       */
      subShape: 'mind-node',

      /**
       * 默认节点图形
       * default node shape
       * @type {boolean}
       */
      nodeDefaultShape: 'mind-node',

      /**
       * 图类构造函数
       * graph constructor
       * @type {string}
       */
      graphConstructor: G6.Tree,

      /**
       * 默认边旁
       * default first class side
       * @type {string}
       */
      defaultSide: 'right'

    };
    var mixinCfg = {};
    Util.each(Mixins, function (Mixin) {
      Util.mix(mixinCfg, Mixin.CFG);
    });
    Util.mix(true, cfg, mixinCfg, inputCfg);

    var _this = _possibleConstructorReturn(this, (Mind.__proto__ || Object.getPrototypeOf(Mind)).call(this, cfg));

    _this.isMind = true;
    return _this;
  }

  _createClass(Mind, [{
    key: '_init',
    value: function _init() {
      var _this2 = this;

      _get(Mind.prototype.__proto__ || Object.getPrototypeOf(Mind.prototype), '_init', this).call(this);
      Util.each(Mixins, function (Mixin) {
        Mixin.INIT && _this2[Mixin.INIT]();
      });
      var graph = this.getGraph();
      var defaultData = this.get('defaultData');
      var mode = graph.get('mode');
      this.set('hotAreaGroup', graph.getFrontRootGroup().addGroup());
      graph.edge().shape(function (model) {
        var target = graph.find(model.target);
        if (target.getModel().isPlaceholder) {
          return 'mind-placeholder-edge';
        }
      });

      defaultData && this.read(defaultData);
      if (mode === 'default') {
        if (defaultData) {
          var root = this.getRoot();
          var rootItem = graph.find(root.id);
          this.setSelected(rootItem, true);
        }
      } else if (mode === 'readOnly') {
        var shortcut = this.get('shortcut');
        shortcut.append = false;
        shortcut.appendChild = false;
        shortcut.selectAll = false;
        shortcut.delete = false;
      }
      if (defaultData) {
        var _root = this.getRoot();
        this.focus(_root.id);
      }
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var _this3 = this;

      var graph = this.get('_graph');
      graph.on('keydown', function (ev) {
        ev.domEvent.preventDefault();
      });
      graph.on('beforechange', function (ev) {
        if (ev.action === 'add') {
          _this3._beforeAdd(ev);
        } else if (ev.action === 'changeData') {
          _this3._beforeChangeData(ev);
        }
      });
      graph.on('aftersource', function () {
        _this3._setHierarchy();
      });
      graph.on('afterchange', function () {
        _this3._setHotArea();
        _this3._cacheBBox();
      });
      graph.on('afteritemdraw', function (ev) {
        var item = ev.item;
        var model = item.getModel();
        if (item.isEdge) {
          var group = item.getGraphicGroup();
          Util.toBack(group, group.getParent());
          group.setSilent('capture', false);
        }
        if (!model.parent) {
          item.isRoot = true;
          item.deleteable = false;
          item.collapseExpand = false;
          item.appendable = false;
          item.dragable = false;
        }
      });
      this.on('beforedelete', function (ev) {
        var item = ev.items[0];
        var brothers = _this3._getBrothers(item);
        var nth = _this3._getNth(item);
        if (brothers[nth - 1]) {
          _this3.setSelected(brothers[nth - 1].id, true);
        } else if (brothers[nth + 1]) {
          _this3.setSelected(brothers[nth + 1].id, true);
        } else {
          _this3.setSelected(item.getParent(), true);
        }
      });
      this.on('afteritemselected', function (ev) {
        _this3._tryAdjustViewport(ev.item);
      });
    }
  }, {
    key: 'translateLimt',
    value: function translateLimt(matrix) {
      var graph = this.getGraph();
      var margin = 100;
      var bboxCache = this.get('bboxCache');
      var width = graph.getWidth();
      var height = graph.getHeight();
      var tl = [bboxCache.minX, bboxCache.minY, 1];
      var br = [bboxCache.maxX, bboxCache.maxY, 1];
      Util.vec3.transformMat3(tl, tl, matrix);
      Util.vec3.transformMat3(br, br, matrix);
      if (br[0] < margin) {
        Util.mat3.translate(matrix, matrix, [margin - br[0], 0]);
      }
      if (br[1] < margin) {
        Util.mat3.translate(matrix, matrix, [0, margin - br[1]]);
      }
      if (tl[1] > height - margin) {
        Util.mat3.translate(matrix, matrix, [0, height - margin - tl[1]]);
      }
      if (tl[0] > width - margin) {
        Util.mat3.translate(matrix, matrix, [width - margin - tl[0], 0]);
      }
      return true;
    }
  }, {
    key: 'getRoot',
    value: function getRoot() {
      var graph = this.getGraph();
      return graph.getSource().roots[0];
    }
    /**
     * 获取拖拽节点时的委托图形
     * get delegation when drag node
     * @type {function}
     * @param  {array} items source data
     * @param  {G.Group} group graphic group
     * @return {G.Shape} shape
     */

  }, {
    key: 'getDelegation',
    value: function getDelegation(items, group) {
      var item = items[0];
      var keyShape = item.getKeyShape();
      var canvas = keyShape.get('canvas');
      var ctx = canvas.get('context');
      var itemBox = item.getBBox();
      var totalMatrix = keyShape.get('totalMatrix');
      var itemCanvasBox = Util.getBBox(keyShape, totalMatrix ? totalMatrix : canvas);
      var virtualCanvas = Util.createDOM('<canvas>');
      var virtualCtx = virtualCanvas.getContext('2d');
      var itemCanvasWidth = itemCanvasBox.maxX - itemCanvasBox.minX;
      var itemCanvasHeight = itemCanvasBox.maxY - itemCanvasBox.minY;
      var padding = [2.5, 2.5, 2.5, 4];
      virtualCanvas.setAttribute('width', itemCanvasWidth);
      virtualCanvas.setAttribute('height', itemCanvasHeight);

      var imgData = ctx.getImageData(itemCanvasBox.minX + padding[3], itemCanvasBox.minY + padding[0], itemCanvasWidth - padding[1] - padding[3], itemCanvasHeight - padding[0] - padding[2]);
      virtualCtx.putImageData(imgData, 0, 0);
      return group.addShape('image', {
        attrs: {
          x: itemBox.minX,
          y: itemBox.minY,
          width: itemBox.width,
          height: itemBox.height,
          swidth: itemCanvasWidth,
          sheight: itemCanvasHeight,
          img: virtualCanvas,
          opacity: 0.5
        }
      });
    }
  }, {
    key: '_cacheBBox',
    value: function _cacheBBox() {
      var graph = this.getGraph();
      this.set('bboxCache', graph.getBBox());
    }
  }, {
    key: '_setHierarchy',
    value: function _setHierarchy(root) {
      var graph = this.getGraph();
      var firstSubShape = this.get('firstSubShape');
      var secondSubShape = this.get('secondSubShape');
      var defaultSide = this.get('defaultSide');
      if (!root) {
        root = this.getRoot();
        root.hierarchy = 1;
      } else {
        var parent = graph.find(root.parent);
        if (parent) {
          var parentModel = parent.getModel();
          root.hierarchy = parentModel.hierarchy + 1;
          if (root.shape !== 'mind-placeholder') {
            if (root.hierarchy === 2) {
              root.shape = firstSubShape;
              if (!root.side) {
                root.side = defaultSide;
              }
            }
            if (root.hierarchy === 3) {
              root.shape = secondSubShape;
            }
          }
        }
      }
      Util.traverseTree(root, function (child, parent) {
        child.hierarchy = parent.hierarchy + 1;
        if (!child.side) {
          child.side = defaultSide;
        }
        if (parent.side) {
          child.side = parent.side;
        }
        if (child.hierarchy === 2) {
          child.shape = firstSubShape;
        } else if (child.hierarchy === 3) {
          child.shape = secondSubShape;
        }
      }, function (parent) {
        return parent.children;
      });
    }
  }, {
    key: 'getFirstChildrenBySide',
    value: function getFirstChildrenBySide(side) {
      var root = this.getRoot();
      var rst = [];
      root.children.forEach(function (child) {
        if (child.side === side) {
          rst.push(child);
        }
      });
      return rst;
    }
  }, {
    key: '_getNth',
    value: function _getNth(item) {
      var graph = this.getGraph();
      return graph.getNth(item);
    }
  }, {
    key: '_getBrothers',
    value: function _getBrothers(item) {
      var parent = item.getParent();
      return parent.getModel().children;
    }
  }, {
    key: '_getMoveChildModel',
    value: function _getMoveChildModel(children) {
      if (children && children.length > 0) {
        var l = children.length;
        return children[parseInt(l / 2)];
      }
    }
  }, {
    key: '_getVerticalMoveItem',
    value: function _getVerticalMoveItem(item, condition, getLong) {
      var graph = this.getGraph();
      var nodes = graph.getNodes();
      var bbox = item.getBBox();
      var checkXs = [bbox.minX, bbox.maxX];
      var inserts = [];

      var toItem = void 0;
      for (var i = 0; i < checkXs.length; i++) {
        var checkX = checkXs[i];
        for (var j = 0; j < nodes.length; j++) {
          var node = nodes[j];
          var nodeBox = node.getBBox();
          if (condition(nodeBox, bbox, checkX)) {
            inserts.push({
              long: getLong(nodeBox, bbox),
              node: node
            });
          }
        }
      }
      if (inserts.length > 0) {
        inserts.sort(function (a, b) {
          return a.long - b.long;
        });
        toItem = inserts[0].node;
      }
      return toItem;
    }
  }, {
    key: '_arrowTopItem',
    value: function _arrowTopItem(item) {
      var brothers = this._getBrothers(item);
      var curNth = this._getNth(item);
      if (brothers[curNth - 1]) {
        return brothers[curNth - 1];
      }
      return this._getVerticalMoveItem(item, function (nodeBox, bbox, checkX) {
        return nodeBox.centerY < bbox.centerY && checkX <= nodeBox.maxX && checkX >= nodeBox.minX;
      }, function (nodeBox, bbox) {
        return bbox.centerY - nodeBox.centerY;
      });
    }
  }, {
    key: '_arrowBottomItem',
    value: function _arrowBottomItem(item) {
      var brothers = this._getBrothers(item);
      var curNth = this._getNth(item);
      if (brothers[curNth + 1]) {
        return brothers[curNth + 1];
      }
      return this._getVerticalMoveItem(item, function (nodeBox, bbox, checkX) {
        return nodeBox.centerY > bbox.centerY && checkX <= nodeBox.maxX && checkX >= nodeBox.minX;
      }, function (nodeBox, bbox) {
        return nodeBox.centerY - bbox.centerY;
      });
    }
  }, {
    key: '_arrowLeftItem',
    value: function _arrowLeftItem(item) {
      var side = Util.getMindNodeSide(item);
      if (item.isRoot) {
        var children = this.getFirstChildrenBySide('left');
        return this._getMoveChildModel(children);
      }
      if (side === 'left') {
        var _children = item.getModel().children;
        return this._getMoveChildModel(_children);
      }
      var parent = item.getParent();
      return parent;
    }
  }, {
    key: '_arrowRightItem',
    value: function _arrowRightItem(item) {
      var side = Util.getMindNodeSide(item);
      if (item.isRoot) {
        var children = this.getFirstChildrenBySide('right');
        return this._getMoveChildModel(children);
      }
      if (side === 'right') {
        var _children2 = item.getModel().children;
        return this._getMoveChildModel(_children2);
      }
      var parent = item.getParent();
      return parent;
    }
  }, {
    key: '_moveItemSelection',
    value: function _moveItemSelection(ev) {
      var graph = this.getGraph();
      var item = this.getSelected()[0];
      if (!item) {
        return;
      }
      var domEvent = ev.domEvent;

      var key = Util.getKeyboradKey(domEvent);
      var toItem = void 0;
      if (key === 'ArrowUp' && !item.isRoot) {
        toItem = this._arrowTopItem(item);
      } else if (key === 'ArrowDown' && !item.isRoot) {
        toItem = this._arrowBottomItem(item);
      } else if (key === 'ArrowLeft') {
        toItem = this._arrowLeftItem(item);
      } else if (key === 'ArrowRight') {
        toItem = this._arrowRightItem(item);
      }
      if (toItem) {
        toItem = graph.find(toItem.id);
        if (toItem.isVisible()) {
          this.clearSelected();
          this.setSelected(toItem, true);
        }
      }
    }
  }, {
    key: 'showLabelEditor',
    value: function showLabelEditor(ev) {
      var domEvent = ev.domEvent;

      var item = this.getSelected()[0];
      var key = Util.getKeyboradKey(domEvent);
      if (item && key.length === 1 && !domEvent.metaKey && !domEvent.ctrlKey) {
        var labelTextArea = this.get('labelTextArea');
        if (item) {
          this.beginEditLabel(item);
          labelTextArea.innerHTML = key;
          Util.setEndOfContenteditable(labelTextArea);
        }
      }
    }
  }, {
    key: '_tryAdjustViewport',
    value: function _tryAdjustViewport(selectedItem) {
      var graph = this.get('_graph');
      var box = selectedItem.getBBox();
      var tl = {
        x: box.minX,
        y: box.minY
      };
      var br = {
        x: box.maxX,
        y: box.maxY
      };
      var domTl = graph.getDomPoint(tl);
      var domBr = graph.getDomPoint(br);
      var width = graph.getWidth();
      var height = graph.getHeight();
      var padding = 16;
      if (domTl.x < 0) {
        graph.translate(-domTl.x + padding, 0);
      }
      if (domTl.y < 0) {
        graph.translate(0, -domTl.y + padding);
      }
      if (domBr.x > width) {
        graph.translate(width - domBr.x - padding, 0);
      }
      if (domBr.y > height) {
        graph.translate(0, height - domBr.y - padding);
      }
    }
  }, {
    key: '_beforeChangeData',
    value: function _beforeChangeData(ev) {
      var root = ev.data.roots[0];
      var rootShape = this.get('rootShape');
      root.shape = rootShape;
      this._setHierarchy(root);
    }
  }, {
    key: '_beforeAdd',
    value: function _beforeAdd(ev) {
      var graph = this.get('_graph');
      var model = ev.model;

      var parent = graph.find(model.parent);
      var parentModel = parent.getModel();
      if (parentModel.collapsed) {
        graph.update(parent, {
          collapsed: false
        });
      }
      this._setHierarchy(model);
    }
    // 绘制交互热区（调试用）

  }, {
    key: '_drawHotAreaShape',
    value: function _drawHotAreaShape() {
      var graph = this.get('_graph');
      var frontCanvas = graph.getFrontCanvas();
      var hotAreaGroup = this.get('hotAreaGroup');
      var hotAreas = this.get('hotAreas');
      hotAreaGroup.clear();
      hotAreas.forEach(function (hotArea) {
        hotAreaGroup.addShape('rect', {
          attrs: {
            x: hotArea.minX,
            y: hotArea.minY,
            width: hotArea.maxX - hotArea.minX,
            height: hotArea.maxY - hotArea.minY,
            fill: hotArea.color,
            fillOpacity: 0.4
          },
          capture: false
        });
      });
      frontCanvas.draw();
    }
    // 设置交互热区

  }, {
    key: '_setHotArea',
    value: function _setHotArea() {
      var hotAreas = [];
      var graph = this.get('_graph');
      var root = this.getRoot();
      var postFix = 'placeholder';
      var showHotArea = this.get('showHotArea');
      // 设置根节点热区
      var rootNode = graph.find(root.id);
      var rootBox = rootNode.getBBox();
      var rootDx = 90;
      var rootDy = 60;
      hotAreas.push({
        minX: rootBox.minX - rootDx,
        minY: rootBox.minY - rootDy,
        maxX: (rootBox.minX + rootBox.maxX) / 2,
        maxY: rootBox.maxY + rootDy,
        parent: root,
        current: root,
        id: root.id + 'left' + postFix,
        nth: root.children.length,
        side: 'left',
        color: 'orange'
      });
      hotAreas.push({
        minX: (rootBox.minX + rootBox.maxX) / 2,
        minY: rootBox.minY - rootDy,
        maxX: rootBox.maxX + rootDx,
        maxY: rootBox.maxY + rootDy,
        parent: root,
        current: root,
        id: root.id + 'right' + postFix,
        nth: root.children.length,
        side: 'right',
        color: 'pink'
      });

      function getNext(initNextIndex, child, parent) {
        var children = parent.children; // 所在节点
        var nextIndex = initNextIndex;
        if (!parent.parent) {
          while (children[nextIndex] && children[nextIndex].side !== child.side) {
            nextIndex++;
          }
        }
        while (children[nextIndex] && children[nextIndex].isPlaceholder) {
          nextIndex++;
        }
        if (children[nextIndex] && children[nextIndex].side === child.side) {
          return children[nextIndex];
        }
      }

      function getLast(initNextIndex, child, parent) {
        var children = parent.children; // 所在节点
        var lastIndex = initNextIndex;

        if (!parent.parent) {
          while (children[lastIndex] && children[lastIndex].side !== child.side) {
            lastIndex--;
          }
        }
        while (children[lastIndex] && children[lastIndex].isPlaceholder) {
          lastIndex--;
        }
        if (children[lastIndex] && children[lastIndex].side === child.side) {
          return children[lastIndex];
        }
      }
      // 设置子节点热区
      Util.traverseTree(root, function (child, parent, index) {
        var childItem = graph.find(child.id);
        if (child.isPlaceholder || !childItem || !childItem.isVisible()) {
          return;
        }
        var next = getNext(index + 1, child, parent);
        var last = getLast(index - 1, child, parent);
        var childBox = graph.find(child.id).getBBox();
        var children = parent.children; // 所在节点
        var firstSubDx = 90;
        var dy = 26;
        var isFirstRight = child.hierarchy === 2 && child.side === 'right';
        var isFirstLeft = child.hierarchy === 2 && child.side === 'left';
        if (!last) {
          hotAreas.push({
            minX: isFirstRight ? childBox.minX - firstSubDx : childBox.minX,
            minY: function () {
              var minY = last ? childBox.minY : childBox.minY - dy;
              if (children[index - 1] && children[index - 1].isPlaceholder && children[index - 1].side === child.side) {
                var placeholderBox = graph.find(children[index - 1].id).getBBox();
                minY = placeholderBox.minY;
              }
              return minY;
            }(),
            maxX: isFirstLeft ? childBox.maxX + firstSubDx : childBox.maxX,
            maxY: (childBox.minY + childBox.maxY) / 2,
            parent: parent,
            id: (last ? last.id : undefined) + child.id + parent.id + postFix,
            side: child.side,
            color: 'yellow',
            nth: index
          });
        }

        if (next) {
          var nextBox = graph.find(next.id).getBBox();
          hotAreas.push({
            minX: function () {
              if (child.side === 'left') {
                return Math.max(childBox.minX, nextBox.minX);
              }
              return isFirstRight ? childBox.minX - firstSubDx : childBox.minX;
            }(),
            minY: (childBox.minY + childBox.maxY) / 2,
            maxX: function () {
              if (child.side === 'right') {
                return Math.min(childBox.maxX, nextBox.maxX);
              }
              return isFirstLeft ? childBox.maxX + firstSubDx : childBox.maxX;
            }(),
            maxY: (nextBox.minY + nextBox.maxY) / 2,
            parent: parent,
            id: child.id + (next ? next.id : undefined) + parent.id + postFix,
            side: child.side,
            color: 'blue',
            nth: index + 1
          });
        } else {
          hotAreas.push({
            minX: isFirstRight ? childBox.minX - firstSubDx : childBox.minX,
            minY: (childBox.minY + childBox.maxY) / 2,
            maxX: isFirstLeft ? childBox.maxX + firstSubDx : childBox.maxX,
            maxY: function () {
              var maxY = childBox.maxY + dy;
              if (children[index + 1] && children[index + 1].isPlaceholder && children[index + 1].side === child.side) {
                var placeholderBox = graph.find(children[index + 1].id).getBBox();
                maxY = placeholderBox.maxY;
              }
              return maxY;
            }(),
            parent: parent,
            id: child.id + undefined + parent.id + postFix,
            color: 'red',
            nth: index + 1,
            addOrder: 'push',
            side: child.side
          });
        }
        if (!child.children || child.children.length === 0 || child.children.length === 1 && child.children[0].isPlaceholder) {
          var dx = 100;
          var _dy = 0;
          var box = void 0;
          if (child.x > parent.x) {
            box = {
              minX: childBox.maxX,
              minY: childBox.minY - _dy,
              maxX: childBox.maxX + dx,
              maxY: childBox.maxY + _dy
            };
          } else {
            box = {
              minX: childBox.minX - dx,
              minY: childBox.minY - _dy,
              maxX: childBox.minX,
              maxY: childBox.maxY + _dy
            };
          }
          hotAreas.push(_extends({}, box, {
            parent: child,
            id: undefined + undefined + child.id + postFix,
            nth: 0,
            color: 'green',
            side: child.side,
            addOrder: 'push'
          }));
        }
      }, function (parent) {
        return parent.children;
      });
      this.set('hotAreas', hotAreas);
      showHotArea && this._drawHotAreaShape();
    }
  }, {
    key: 'hideHotArea',
    value: function hideHotArea() {
      var graph = this.get('_graph');
      var frontCanvas = graph.getFrontCanvas();
      var hotAreaGroup = this.get('hotAreaGroup');
      hotAreaGroup.clear();
      frontCanvas.draw();
      this.set('showHotArea', false);
    }
    // 显示交互热区

  }, {
    key: 'showHotArea',
    value: function showHotArea() {
      this._drawHotAreaShape();
      this.set('showHotArea', true);
    }
    // 热区击中

  }, {
    key: 'getHotArea',
    value: function getHotArea(point) {
      var hotAreas = this.get('hotAreas');
      var rst = void 0;
      hotAreas.forEach(function (hotArea) {
        if (point.x > hotArea.minX && point.x < hotArea.maxX && point.y > hotArea.minY && point.y < hotArea.maxY) {
          rst = hotArea;
          return false;
        }
      });
      return rst;
    }
  }, {
    key: 'saveExpandImage',
    value: function saveExpandImage() {
      var _this4 = this;

      var graph = this.getGraph();
      var box = graph.getBBox();
      var padding = graph.getFitViewPadding();
      var collapsedIds = void 0;
      var seletedIds = void 0;
      var activedIds = void 0;

      return Util.graph2Canvas({
        graph: graph,
        width: box.width + padding[1] + padding[3],
        height: box.height + padding[0] + padding[2],
        beforeTransform: function beforeTransform() {
          var nodes = graph.getNodes();
          collapsedIds = nodes.filter(function (node) {
            return node.getModel().collapsed;
          }).map(function (node) {
            return node.getModel().id;
          });
          collapsedIds.forEach(function (collapsedId) {
            graph.update(collapsedId, {
              collapsed: false
            });
          });
          graph.layout();
          seletedIds = _this4.getSelected().map(function (item) {
            return item.id;
          });
          activedIds = _this4.getSelected().map(function (item) {
            return item.id;
          });
          _this4.clearSelected();
          _this4.clearActived();
        },
        afterTransform: function afterTransform() {
          collapsedIds.forEach(function (collapsedId) {
            graph.update(collapsedId, {
              collapsed: true
            });
          });
          _this4.setSelected(seletedIds, true);
          _this4.setActived(activedIds, true);
        }
      });
    }
  }, {
    key: 'save',
    value: function save() {
      var graph = this.get('_graph');
      var data = graph.save();
      data.roots.forEach(function (root) {
        Util.traverseTree(root, function (child) {
          delete child.x;
          delete child.y;
          delete child.width;
          delete child.height;
          delete child.parent;
          delete child.nth;
          delete child.hierarchy;
          delete child.index;
          delete child.shape;
        }, function (parent) {
          return parent.children;
        }, true);
      });
      return data;
    }
  }]);

  return Mind;
}(Page);

Util.each(Mixins, function (Mixin) {
  Util.mix(Mind.prototype, Mixin.AUGMENT);
});

module.exports = Mind;

/***/ }),

/***/ "./src/page/mind/shape/edges/mind-edge.js":
/*!************************************************!*\
  !*** ./src/page/mind/shape/edges/mind-edge.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mind edge
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ../../mind */ "./src/page/mind/mind.js");

Mind.registerEdge('mind-edge', {
  getEdetal: function getEdetal(targetModel) {
    if (targetModel.children && targetModel.children.length > 0 && !targetModel.collapsed) {
      return targetModel.hierarchy === 2 ? 24 : 18;
    }
    return 0;
  },
  getPath: function getPath(item) {
    var points = item.getPoints();
    var source = item.getSource();
    var target = item.getTarget();
    var sourceBox = source.getBBox();
    var targetBox = target.getBBox();
    var targetModel = target.getModel();
    var controlPointDetal1 = 14;
    var controlPointDetal2 = 4;
    if (targetModel.hierarchy === 2) {
      controlPointDetal1 = 66;
      controlPointDetal2 = 30;
    }
    if (points[0].y === points[1].y) {
      var sDetal = targetModel.hierarchy === 3 ? 24 : 18;
      var _eDetal = this.getEdetal(targetModel);
      if (sourceBox.centerX < targetBox.centerX) {
        return [['M', points[0].x + sDetal, points[0].y], ['L', targetBox.maxX + _eDetal, targetBox.maxY]];
      }
      return [['M', points[0].x + 2, points[0].y], ['L', targetBox.minX - _eDetal, targetBox.maxY]];
    }
    if (targetModel.hierarchy >= 3) {
      var _sDetal = targetModel.hierarchy === 3 ? 24 : 18;
      var _eDetal2 = this.getEdetal(targetModel);
      if (sourceBox.centerX < targetBox.centerX) {
        var _dpx = points[0].x + _sDetal;
        return [['M', points[0].x, points[0].y], ['M', _dpx, points[0].y], ['C', _dpx + controlPointDetal2, points[0].y, targetBox.minX - controlPointDetal1, targetBox.maxY, targetBox.minX, targetBox.maxY], ['L', targetBox.maxX + _eDetal2, targetBox.maxY]];
      }
      var dpx = points[0].x - _sDetal;
      return [['M', points[0].x, points[0].y], ['M', dpx, points[0].y], ['C', dpx - controlPointDetal2, points[0].y, targetBox.maxX + controlPointDetal1, targetBox.maxY, targetBox.maxX, targetBox.maxY], ['L', targetBox.minX - _eDetal2, targetBox.maxY]];
    }
    var eDetal = this.getEdetal(targetModel);
    if (sourceBox.centerX < targetBox.centerX) {
      return [['M', points[0].x, points[0].y], ['C', points[0].x + controlPointDetal2, points[0].y, targetBox.minX - controlPointDetal1, targetBox.maxY, targetBox.minX, targetBox.maxY], ['L', targetBox.maxX + eDetal, targetBox.maxY]];
    }
    return [['M', points[0].x, points[0].y], ['C', points[0].x - controlPointDetal2, points[0].y, targetBox.maxX + controlPointDetal1, targetBox.maxY, targetBox.maxX, targetBox.maxY], ['L', targetBox.minX - eDetal, targetBox.maxY]];
  },
  getStyle: function getStyle(item) {
    var target = item.getTarget();
    var targetModel = target.getModel();
    var lineWidth = void 0;
    if (targetModel.hierarchy <= 3) {
      lineWidth = 3;
    } else if (targetModel.hierarchy <= 5) {
      lineWidth = 2;
    } else {
      lineWidth = 1;
    }
    return {
      stroke: '#959EA6',
      lineWidth: lineWidth
    };
  }
});

// const controlPointDetalX = 10;
// const controlPointDetalY = 2;
// const sourceLineDetal = 22;

// Mind.registerEdge('mind-edge', {
//   // getPath(item) {
//   //   const points = item.getPoints();
//   //   const source = item.getSource();
//   //   const target = item.getTarget();
//   //   const sourceBox = source.getBBox();
//   //   const targetBox = target.getBBox();
//   //   const l = points.length;
//   //   const end = points[l - 1];
//   //   let symbol = 1;

//   //   if (points[0].y === points[1].y) {
//   //     if (sourceBox.centerX < targetBox.centerX) {
//   //       return [
//   //         [ 'M', points[0].x - 2, points[0].y ],
//   //         [ 'L', targetBox.maxX, targetBox.maxY ],
//   //       ];
//   //     }
//   //     return [
//   //       [ 'M', points[0].x + 2, points[0].y ],
//   //       [ 'L', targetBox.minX, targetBox.maxY ],
//   //     ];

//   //   }
//   //   if (sourceBox.centerY < targetBox.centerY) {
//   //     symbol = -1;
//   //   }
//   //   if (sourceBox.centerX < targetBox.centerX) {
//   //     return [
//   //       [ 'M', points[0].x - 2, points[0].y ],
//   //       [ 'L', points[0].x + sourceLineDetal, points[0].y ],
//   //       [ 'Q', end.x - controlPointDetalX, end.y + controlPointDetalY * symbol, end.x, end.y ],
//   //       [ 'L', targetBox.maxX, targetBox.maxY ],
//   //     ];
//   //   }
//   //   return [
//   //     [ 'M', points[0].x + 2, points[0].y ],
//   //     [ 'L', points[0].x - sourceLineDetal, points[0].y ],
//   //     [ 'Q', end.x + controlPointDetalX, end.y + controlPointDetalY * symbol, end.x, end.y ],
//   //     [ 'L', targetBox.minX, targetBox.maxY ],
//   //   ];
//   // },
//   getStyle() {
//     return {
//       stroke: '#434B54',
//       lineWidth: 2,
//       lineJoin: 'round',
//     };
//   },
// });

/***/ }),

/***/ "./src/page/mind/shape/edges/mind-placeholder-edge.js":
/*!************************************************************!*\
  !*** ./src/page/mind/shape/edges/mind-placeholder-edge.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview mind placeholder edge
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ../../mind */ "./src/page/mind/mind.js");

Mind.registerEdge('mind-placeholder-edge', {
  getOriginShapeObject: function getOriginShapeObject(item) {
    var tree = item.getGraph();
    var shapeObj = tree.getShapeObj('edge', {
      shape: 'mind-edge'
    });
    return shapeObj;
  },
  getPath: function getPath(item) {
    var shapeObj = this.getOriginShapeObject(item);
    return shapeObj.getPath(item);
  },
  getStyle: function getStyle(item) {
    var shapeObj = this.getOriginShapeObject(item);
    var style = shapeObj.getStyle(item);
    return _extends({}, style, {
      stroke: '#91D5FF'
    });
  }
});

/***/ }),

/***/ "./src/page/mind/shape/index.js":
/*!**************************************!*\
  !*** ./src/page/mind/shape/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

__webpack_require__(/*! ./nodes/mind-node */ "./src/page/mind/shape/nodes/mind-node.js");
__webpack_require__(/*! ./nodes/mind-first-sub */ "./src/page/mind/shape/nodes/mind-first-sub.js");
__webpack_require__(/*! ./nodes/mind-second-sub */ "./src/page/mind/shape/nodes/mind-second-sub.js");
__webpack_require__(/*! ./nodes/mind-root */ "./src/page/mind/shape/nodes/mind-root.js");
__webpack_require__(/*! ./nodes/mind-placeholder */ "./src/page/mind/shape/nodes/mind-placeholder.js");
__webpack_require__(/*! ./edges/mind-edge */ "./src/page/mind/shape/edges/mind-edge.js");
__webpack_require__(/*! ./edges/mind-placeholder-edge */ "./src/page/mind/shape/edges/mind-placeholder-edge.js");

/***/ }),

/***/ "./src/page/mind/shape/nodes/mind-first-sub.js":
/*!*****************************************************!*\
  !*** ./src/page/mind/shape/nodes/mind-first-sub.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mind first sub node shape
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ../../mind */ "./src/page/mind/mind.js");

Mind.registerNode('mind-first-sub', {
  dy: 0,
  getPadding: function getPadding() {
    return [6, 12, 8, 12];
  },
  getLabelStyle: function getLabelStyle() {
    return {
      fill: 'rgba(38,38,38,0.85)',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 20
    };
  }
  // getStyle() {
  //   return {
  //     fill: '#E8EBF1',
  //     stroke: null,
  //     radius: 4,
  //     lineWidth: 2,
  //   };
  // },
  // defaultWidth: 32,
  // defaultHeight: 38,
  // adjustLabelPosition(item, labelShape) {
  //   const box = labelShape.getBBox();
  //   labelShape.attr({
  //     x: -box.width / 2,
  //     y: -box.height / 2,
  //   });
  // },
  // getPath(item) {
  //   const size = this.getSize(item);
  //   const style = this.getStyle(item);

  //   return Util.getRectPath(-size[0] / 2, -size[1] / 2, size[0], size[1], style.radius);
  // },
  // getButtonPositon(keyShapeBox, buttonBox, side) {
  //   if (side === 'right') {
  //     return {
  //       x: keyShapeBox.maxX + 2,
  //       y: (keyShapeBox.maxY + keyShapeBox.minY) / 2 - (buttonBox.maxY - buttonBox.minY) / 2,
  //     };
  //   }
  //   return {
  //     x: keyShapeBox.minX - (buttonBox.maxX - buttonBox.minX) - 2,
  //     y: (keyShapeBox.maxY + keyShapeBox.minY) / 2 - (buttonBox.maxY - buttonBox.minY) / 2,
  //   };
  // },
  // getLabelStyle() {
  //   return {
  //     fill: 'rgba(0,0,0,0.85)',
  //     lineHeight: 22,
  //     fontSize: 14,
  //   };
  // },
  // anchor: [
  //   [ 0, 0.5 ],
  //   [ 1, 0.5 ],
  // ],

}, 'mind-node');

/***/ }),

/***/ "./src/page/mind/shape/nodes/mind-node.js":
/*!************************************************!*\
  !*** ./src/page/mind/shape/nodes/mind-node.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview mind node shape
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ../../mind */ "./src/page/mind/mind.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/page/mind/util/index.js");
var defaultLabelStyle = {
  fill: '#000',
  textAlign: 'left',
  textBaseline: 'top'
};
var expandedButtonStyle = {
  stroke: '#959EA6',
  strokeOpacity: 0,
  fill: '#959EA6',
  cursor: 'pointer'
};
var collapsedButtonStyle = {
  stroke: '#434B54',
  fill: '#fff',
  cursor: 'pointer'
};

Mind.registerNode('mind-node', {
  dy: 4,
  afterDraw: function afterDraw(item) {
    var model = item.getModel();
    if (model.children && model.children.length > 0) {
      if (model.collapsed) {
        this.drawExpandedButton(item);
      } else {
        // this.drawCollapsedButton(item);
      }
    }
  },
  debugDrawLayoutPoint: function debugDrawLayoutPoint(item) {
    var model = item.getModel();
    var group = item.getGraphicGroup();
    group.addShape('circle', {
      attrs: {
        x: model.x,
        y: model.y,
        r: 5,
        fill: 'red'
      }
    });
  },
  drawExpandedButton: function drawExpandedButton(item) {
    var w = 16;
    var h = 7;
    var s = w / 4;
    var keyShape = item.getKeyShape();
    var keyShapeBox = keyShape.getBBox();
    var group = item.getGraphicGroup();
    var buttonGroup = group.addGroup();
    var buttonPath = buttonGroup.addShape('path', {
      attrs: _extends({
        path: Util.getRectPath(0, 0, w, h, 3)
      }, expandedButtonStyle)
    });
    var buttonBox = buttonPath.getBBox();
    var side = Util.getMindNodeSide(item);
    var positon = this.getButtonPositon(keyShapeBox, buttonBox, side);
    var dotStyle = {
      fill: 'white',
      r: 1
    };
    buttonGroup.addShape('circle', {
      attrs: _extends({}, dotStyle, {
        x: s,
        y: h / 2
      }),
      capture: false
    });
    buttonGroup.addShape('circle', {
      attrs: _extends({}, dotStyle, {
        x: s * 2,
        y: h / 2
      }),
      capture: false
    });
    buttonGroup.addShape('circle', {
      attrs: _extends({}, dotStyle, {
        x: s * 3,
        y: h / 2
      }),
      capture: false
    });
    buttonPath.attr('lineAppendWidth', 20);
    buttonGroup.translate(positon.x, positon.y);
    buttonPath.isExpandedButton = true;
    buttonPath.isButton = true;
  },
  drawCollapsedButton: function drawCollapsedButton(item) {
    var keyShape = item.getKeyShape();
    var keyShapeBox = keyShape.getBBox();
    var group = item.getGraphicGroup();
    var buttonPath = group.addShape('path', {
      attrs: _extends({
        path: Util.getCollapsedButtonPath()
      }, collapsedButtonStyle)
    });
    var buttonBox = buttonPath.getBBox();
    var side = Util.getMindNodeSide(item);
    var positon = this.getButtonPositon(keyShapeBox, buttonBox, side);
    buttonPath.translate(positon.x, positon.y);
    buttonPath.isCollapsedButton = true;
    buttonPath.isButton = true;
  },
  getButtonPositon: function getButtonPositon(keyShapeBox, buttonBox, side) {
    if (side === 'right') {
      return {
        x: keyShapeBox.maxX + 2,
        y: keyShapeBox.maxY - (buttonBox.maxY - buttonBox.minY) / 2
      };
    }
    return {
      x: keyShapeBox.minX - (buttonBox.maxX - buttonBox.minX) - 2,
      y: keyShapeBox.maxY - (buttonBox.maxY - buttonBox.minY) / 2
    };
  },
  getLabel: function getLabel(item) {
    var model = item.getModel();
    return model.label;
  },
  getPadding: function getPadding() {
    return [4, 8, 4, 8];
  },
  getSize: function getSize(item) {
    var model = item.getModel();
    var group = item.getGraphicGroup();
    var size = model.size;
    if (model.size) {
      if (Util.isArray(size)) {
        return size;
      }
      if (Util.isNumber(size)) {
        return [size, size];
      }
    }
    var label = group.findByClass('label')[0];
    var padding = this.getPadding(item);
    var labelBox = label.getBBox();
    return [labelBox.width + padding[1] + padding[3], labelBox.height + padding[0] + padding[2]];
  },
  getPath: function getPath(item) {
    var size = this.getSize(item);
    var style = this.getStyle(item);
    return Util.getRectPath(-size[0] / 2, -size[1] / 2 + this.dy, size[0], size[1], style.radius);
  },
  drawLabel: function drawLabel(item) {
    var group = item.getGraphicGroup();
    var label = this.getLabel(item);
    var labelStyle = this.getLabelStyle(item);

    if (!label) {
      label = ' ';
    }
    var attrs = Util.mix(true, {}, defaultLabelStyle, labelStyle, {
      x: 0,
      y: 0
    });
    if (!Util.isObject(label)) {
      attrs.text = label;
    } else {
      Util.mix(attrs, label);
    }
    var shape = group.addShape('text', {
      class: 'label',
      attrs: attrs
    });
    this.adjustLabelText(shape);
    this.adjustLabelPosition(item, shape);
    return shape;
  },
  adjustLabelText: function adjustLabelText(labelShape) {
    var labelText = labelShape.attr('text');
    var labelBox = labelShape.getBBox();
    if (labelBox.maxX - labelBox.minX > 400) {
      var ctx = labelShape.get('context');
      ctx.font = labelShape.attr('font');
      labelText = Util.getLabelTextByTextLineWidth(labelText, ctx);
      labelShape.attr('text', labelText);
    }
  },
  adjustLabelPosition: function adjustLabelPosition(item, labelShape) {
    var size = this.getSize(item);
    var padding = this.getPadding();
    var width = size[0];
    var labelBox = labelShape.getBBox();

    labelShape.attr({
      x: -width / 2 + padding[3],
      y: -labelBox.height / 2 + this.dy // - padding[2]/2
    });
  },
  getLabelStyle: function getLabelStyle() /* item */{
    return {
      fill: 'rgba(38,38,38,0.85)',
      lineHeight: 18,
      fontSize: 12
    };
  },
  getStyle: function getStyle() /* item */{
    return {
      fill: '#ccc',
      fillOpacity: 0,
      radius: 4,
      lineWidth: 2
    };
  },
  getActivedStyle: function getActivedStyle() /* item */{
    return {
      stroke: '#44C0FF',
      lineWidth: 2
    };
  },
  getSelectedStyle: function getSelectedStyle() /* item */{
    return {
      stroke: '#1AA7EE',
      lineWidth: 2
    };
  },

  anchor: [[0, 1], [1, 1]]
});

/***/ }),

/***/ "./src/page/mind/shape/nodes/mind-placeholder.js":
/*!*******************************************************!*\
  !*** ./src/page/mind/shape/nodes/mind-placeholder.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mind placeholder shape
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ../../mind */ "./src/page/mind/mind.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/page/mind/util/index.js");

Mind.registerNode('mind-placeholder', {
  afterDraw: function afterDraw(item) {
    var keyShape = item.getKeyShape();
    keyShape.isPlaceholder = true;
  },
  getPath: function getPath(item) {
    var model = item.getModel();
    var parentModel = model.parentModel;

    var style = this.getStyle(item);
    var width = 55;
    var height = void 0;
    var Edetal = 0;
    if (parentModel.hierarchy <= 2) {
      height = 28;
    } else {
      height = 20;
      Edetal = 4;
    }
    return Util.getRectPath(-width / 2, -height / 2 + Edetal, width, height, style.radius);
  },
  getStyle: function getStyle() {
    return {
      fill: '#91D5FF',
      radius: 4,
      lineWidth: 3
    };
  },
  drawExpandedButton: function drawExpandedButton() {},
  drawCollapsedButton: function drawCollapsedButton() {},
  anchor: function anchor() {
    return [[0, 1], [1, 1]];
  }
});

/***/ }),

/***/ "./src/page/mind/shape/nodes/mind-root.js":
/*!************************************************!*\
  !*** ./src/page/mind/shape/nodes/mind-root.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mind root node shape
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ../../mind */ "./src/page/mind/mind.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/page/mind/util/index.js");

Mind.registerNode('mind-root', {
  adjustLabelPosition: function adjustLabelPosition(item, labelShape) {
    var box = labelShape.getBBox();
    labelShape.attr({
      x: -box.width / 2,
      y: -box.height / 2 - 1
    });
  },
  getPath: function getPath(item) {
    var size = this.getSize(item);
    var style = this.getStyle(item);

    return Util.getRectPath(-size[0] / 2, -size[1] / 2, size[0], size[1], style.radius);
  },
  getButtonPositon: function getButtonPositon(keyShapeBox, buttonBox, side) {
    if (side === 'right') {
      return {
        x: keyShapeBox.maxX + 2,
        y: (keyShapeBox.maxY + keyShapeBox.minY) / 2 - (buttonBox.maxY - buttonBox.minY) / 2
      };
    }
    return {
      x: keyShapeBox.minX - (buttonBox.maxX - buttonBox.minX) - 2,
      y: (keyShapeBox.maxY + keyShapeBox.minY) / 2 - (buttonBox.maxY - buttonBox.minY) / 2
    };
  },
  getPadding: function getPadding() {
    return Util.toAllPadding([12, 24]);
  },
  getStyle: function getStyle() {
    return {
      fill: '#587EF7',
      stroke: '#587EF7',
      fillOpacity: 1,
      radius: 4
    };
  },
  getLabelStyle: function getLabelStyle() {
    return {
      fontSize: 20,
      fill: 'white',
      lineHeight: 28
    };
  },
  drawExpandedButton: function drawExpandedButton() {},
  drawCollapsedButton: function drawCollapsedButton() {},

  panAble: false,
  anchor: [[0.45, 0.5], [0.55, 0.5]]
}, 'mind-first-sub');

/***/ }),

/***/ "./src/page/mind/shape/nodes/mind-second-sub.js":
/*!******************************************************!*\
  !*** ./src/page/mind/shape/nodes/mind-second-sub.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mind second sub node shape
 * @author huangtonger@aliyun.com
 */

var Mind = __webpack_require__(/*! ../../mind */ "./src/page/mind/mind.js");

Mind.registerNode('mind-second-sub', {
  dy: 0,
  getPadding: function getPadding() {
    return [8, 4, 8, 4];
  },
  getLabelStyle: function getLabelStyle() {
    return {
      fill: 'rgba(38,38,38,0.85)',
      fontSize: 12,
      lineHeight: 20
    };
  }
  // getStyle() {
  //   return {
  //     fill: '#E8EBF1',
  //     stroke: null,
  //     radius: 4,
  //     lineWidth: 2,
  //   };
  // },
  // defaultWidth: 32,
  // defaultHeight: 38,
  // adjustLabelPosition(item, labelShape) {
  //   const box = labelShape.getBBox();
  //   labelShape.attr({
  //     x: -box.width / 2,
  //     y: -box.height / 2,
  //   });
  // },
  // getPath(item) {
  //   const size = this.getSize(item);
  //   const style = this.getStyle(item);

  //   return Util.getRectPath(-size[0] / 2, -size[1] / 2, size[0], size[1], style.radius);
  // },
  // getButtonPositon(keyShapeBox, buttonBox, side) {
  //   if (side === 'right') {
  //     return {
  //       x: keyShapeBox.maxX + 2,
  //       y: (keyShapeBox.maxY + keyShapeBox.minY) / 2 - (buttonBox.maxY - buttonBox.minY) / 2,
  //     };
  //   }
  //   return {
  //     x: keyShapeBox.minX - (buttonBox.maxX - buttonBox.minX) - 2,
  //     y: (keyShapeBox.maxY + keyShapeBox.minY) / 2 - (buttonBox.maxY - buttonBox.minY) / 2,
  //   };
  // },
  // getLabelStyle() {
  //   return {
  //     fill: 'rgba(0,0,0,0.85)',
  //     lineHeight: 22,
  //     fontSize: 14,
  //   };
  // },
  // anchor: [
  //   [ 0, 0.5 ],
  //   [ 1, 0.5 ],
  // ],

}, 'mind-node');

/***/ }),

/***/ "./src/page/mind/util/index.js":
/*!*************************************!*\
  !*** ./src/page/mind/util/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ../../base/util/ */ "./src/page/base/util/index.js");
var Util = _extends({}, Base, {
  getMindNodeSide: function getMindNodeSide(item) {
    var model = item.getModel();
    if (model.side) {
      return model.side;
    }
    var parent = item.getParent();
    if (parent) {
      if (parent.getModel().side) {
        return parent.getModel().side;
      }
      return Util.getMindNodeSide(parent);
    }
    return undefined;
  }
});
module.exports = Util;

/***/ }),

/***/ "./src/simpleBase.js":
/*!***************************!*\
  !*** ./src/simpleBase.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview
 * The base class for simple class
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var Util = G6.Util;

var Base = function () {
  _createClass(Base, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {};
    }
  }]);

  function Base(cfg) {
    _classCallCheck(this, Base);

    var defaultCfg = this.getDefaultCfg();
    Util.mix(this, defaultCfg, cfg);
    this.init();
  }

  _createClass(Base, [{
    key: 'init',
    value: function init() {}
  }, {
    key: 'destroy',
    value: function destroy() {}
  }]);

  return Base;
}();

module.exports = Base;

/***/ }),

/***/ "./src/toolbar/index.js":
/*!******************************!*\
  !*** ./src/toolbar/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview toolbar
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Base = __webpack_require__(/*! ../simpleBase */ "./src/simpleBase.js");

var Component = function (_Base) {
  _inherits(Component, _Base);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'getDefaultCfg',
    value: function getDefaultCfg() {
      return {
        /**
         * 类型
         * @type {string}
         */
        type: 'toolbar',

        /**
         * dom 容器
         * @type {dom}
         */
        container: null
      };
    }
  }, {
    key: 'init',
    value: function init() {
      this._initContainer();
    }
  }, {
    key: '_initContainer',
    value: function _initContainer() {
      var container = this.container;
      if (container) {
        if (Util.isString(container)) {
          container = document.getElementById(container);
        }
      } else {
        throw new Error('please set the container for the toolbar !');
      }
      var commands = container.getElementsByClassName('command');
      this.commands = commands;
    }
  }, {
    key: 'getCommandDoms',
    value: function getCommandDoms() {
      return this.commands;
    }
  }]);

  return Component;
}(Base);

module.exports = Component;

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview base util
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var Path = __webpack_require__(/*! ./path */ "./src/util/path.js");
var keyCodeMap = {
  whitespace: {
    9: 'Tab', 13: 'Enter', 32: 'Space'
  },
  fn: {
    112: 'f1 ', 113: 'f2 ', 114: 'f3 ', 115: 'f4 ', 116: 'f5 ', 117: 'f6 ', 118: 'f7 ', 119: 'f8 ', 120: 'f9 ', 121: 'f10', 122: 'f11', 123: 'f12'
  },
  letter: {
    65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g', 72: 'h', 73: 'i', 74: 'j', 75: 'k', 76: 'l', 77: 'm', 78: 'n', 79: 'o', 80: 'p', 81: 'q', 82: 'r', 83: 's', 84: 't', 85: 'u', 86: 'v', 87: 'w', 88: 'x', 89: 'y', 90: 'z'
  },
  number: {
    48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9'
  },
  navigation: {
    37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown'
  },
  symbol: {
    110: 'decimal point', 186: 'semi-colon', 187: '=', 188: 'comma', 189: '-', 190: 'period ', 191: '/', 192: 'grave accent', 219: 'open bracket ', 220: 'back slash ', 221: 'close bracket ', 222: 'single quote '
  },
  smallNumberKey: {
    96: 'numpad 0 ', 97: 'numpad 1 ', 98: 'numpad 2 ', 99: 'numpad 3 ', 100: 'numpad 4 ', 101: 'numpad 5 ', 102: 'numpad 6 ', 103: 'numpad 7 ', 104: 'numpad 8 ', 105: 'numpad 9 '
  },
  modifierKey: {
    16: 'Shift', 17: 'Ctrl ', 18: 'Alt', 20: 'caps lock'
  },
  escKey: {
    8: 'Backspace', 46: 'Delete', 27: 'Escape'
  },
  homeKey: {
    91: 'Windows Key / Left command', 92: 'right window key ', 93: 'Windows Menu'
  },
  computeKey: {
    106: 'multiply ', 107: 'add', 109: 'subtract ', 111: 'divide '
  }
};
var Util = _extends({}, G6.Util, Path, {
  /**
   * get key bu keycode
   * @param  {number} keyCode key code
   * @return {object} rst
   */
  getTypeAndChar: function getTypeAndChar(keyCode) {
    keyCode = '' + keyCode;
    var type = void 0;
    var character = void 0;
    for (var index in keyCodeMap) {
      type = index;
      for (var i in keyCodeMap[index]) {
        if (i === keyCode) {
          character = keyCodeMap[index][i];
          return {
            type: type,
            character: character
          };
        }
      }
    }
    return {};
  },
  getKeyboradKey: function getKeyboradKey(domEvent) {
    return domEvent.key || Util.getTypeAndChar(domEvent.keyCode).character;
  },

  /**
   * get graphic element index
   * @param  {object} element graphic element
   * @return {number} index
   */
  getIndex: function getIndex(element) {
    var parent = element.getParent();
    var children = parent.get('children');
    return children.indexOf(element);
  },

  /**
   * set model id
   * @param  {object} model model
   */
  setId: function setId(model) {
    if (!model.id) {
      model.id = G6.Util.guid();
    }
  },

  /**
   * point to line distance
   * @param  {number} x1 line p1.x
   * @param  {number} y1 line p1.y
   * @param  {number} x2 line p2.x
   * @param  {number} y2 line p2.y
   * @param  {number} x p.x
   * @param  {number} y p.y
   * @return {Number|NaN} distance
   */
  pointLineDistance: function pointLineDistance(x1, y1, x2, y2, x, y) {
    var d = [x2 - x1, y2 - y1];
    if (G6.Util.vec2.exactEquals(d, [0, 0])) {
      return NaN;
    }

    var u = [-d[1], d[0]];
    G6.Util.vec2.normalize(u, u);
    var a = [x - x1, y - y1];
    return Math.abs(G6.Util.vec2.dot(a, u));
  },

  /**
   * get rect by box
   * @param  {object} box box
   * @param  {object} group group
   * @param  {object} style style
   * @return {object} rect
   */
  getRectByBox: function getRectByBox(box, group, style) {
    return group.addShape('rect', {
      attrs: _extends({}, style, {
        x: box.minX,
        y: box.minY,
        width: box.maxX - box.minX,
        height: box.maxY - box.minY
      })
    });
  },

  /**
   * object to values
   * @param   {object} obj object
   * @return  {array} rst array
   */
  objectToValues: function objectToValues(obj) {
    var rst = [];
    var i = void 0;

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        rst.push(obj[i]);
      }
    }
    return rst;
  },
  getValue: function getValue(value) {
    if (G6.Util.isFunction(value)) {
      return value();
    }
    return value;
  },

  /**
   * get contrast from obj1 by obj2
   * @param  {object} obj1 model
   * @param  {object} obj2 model
   * @return {object} rst
   */
  getContrast: function getContrast(obj1, obj2) {
    var rst = {};
    G6.Util.each(obj2, function (v, k) {
      rst[k] = obj1[k];
    });
    return rst;
  },

  /**
   * set arrow
   * @param {Ganvas.Element}  element g element
   * @param {number}          x       x
   * @param {number}          y       y
   * @param {number}          x0      v.x0
   * @param {number}          y0      v.y0
   * @param {number}          x1      v.x1
   * @param {number}          y1      v.y1
   * @return {Ganvas.Element} element g element
   */
  arrowTo: function arrowTo(element, x, y, x0, y0, x1, y1) {
    var v0 = [1, 0];
    var v = [x1 - x0, y1 - y0];
    var angle = G6.Util.vec2.angleTo(v, v0, true);
    element.transform([['r', angle], ['t', x, y]]);
    return element;
  },

  // 将光标移动到最后
  setEndOfContenteditable: function setEndOfContenteditable(contentEditableElement) {
    var range = void 0,
        selection = void 0;

    // Firefox, Chrome, Opera, Safari, IE 9+
    if (document.createRange) {
      range = document.createRange(); // Create a range (a range is a like the selection but invisible)
      range.selectNodeContents(contentEditableElement); // Select the entire contents of the element with the range
      range.collapse(false); // collapse the range to the end point. false means collapse to end rather than the start
      selection = window.getSelection(); // get the selection object (allows you to change selection)
      selection.removeAllRanges(); // remove any selections already made
      selection.addRange(range); // make the range you have just created the visible selection
    } else if (document.selection) {
      // IE 8 and lower
      range = document.body.createTextRange(); // Create a range (a range is a like the selection but invisible)
      range.moveToElementText(contentEditableElement); // Select the entire contents of the element with the range
      range.collapse(false); // collapse the range to the end point. false means collapse to end rather than the start
      range.select(); // Select the range (make it the visible selection
    }
  }
});
module.exports = Util;

/***/ }),

/***/ "./src/util/path.js":
/*!**************************!*\
  !*** ./src/util/path.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview path resource
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(/*! @antv/g6 */ "./node_modules/_@antv_g6@2.0.0-beta.86@@antv/g6/build/g6.js");
var Util = G6.Util;

module.exports = {
  getGroupIconPath: function getGroupIconPath() {
    return 'M9.75,9.60000014 L3.75,9.60000014 C3.33578644,9.60000014 3,9.2865995 3,8.90000022 C3,8.51340093 3.33578644,8.20000029 3.75,8.20000029 L9.75,8.20000029 C10.1642136,8.20000029 10.5,8.51340093 10.5,8.90000022 C10.5,9.2865995 10.1642136,9.60000014 9.75,9.60000014 M3,11.6999999 C3,11.3134006 3.33578644,11 3.75,11 L6.75,11 C7.16421356,11 7.5,11.3134006 7.5,11.6999999 C7.5,12.0865992 7.16421356,12.3999999 6.75,12.3999999 L3.75,12.3999999 C3.33578644,12.3999999 3,12.0865992 3,11.6999999 M3.75,13.7999997 L6.75,13.7999997 C7.16421356,13.7999997 7.5,14.1134004 7.5,14.4999996 C7.5,14.8865989 7.16421356,15.1999996 6.75,15.1999996 L3.75,15.1999996 C3.33578644,15.1999996 3,14.8865989 3,14.4999996 C3,14.1134004 3.33578644,13.7999997 3.75,13.7999997 M16.4985,4.00000072 L1.5015,4.00000072 C0.674533504,3.99922416 0.00289396564,4.6232696 0,5.39510058 L0,16.6048994 C0.00289396564,17.3767304 0.674533504,18.0007758 1.5015,17.9999993 L16.4985,17.9999993 C17.3254665,18.0007758 17.997106,17.3767304 18,16.6048994 L18,5.39510058 C17.997106,4.6232696 17.3254665,3.99922416 16.4985,4.00000072M19,13.9999993 L19,3 L5,3 L5,1.39510058 C5.00289397,0.623269599 5.6745335,-0.00077583787 6.5015,7.23978642e-07 L21.4985,7.23978642e-07 C22.3254665,-0.00077583787 22.997106,0.623269599 23,1.39510058 L23,12.6048994 C22.997106,13.3767304 22.3254665,14.0007758 21.4985,13.9999993 L19,13.9999993 Z';
  },
  getCollapsedButtonPath: function getCollapsedButtonPath() {
    var w = 14;
    var h = 14;
    var rect = Util.getRectPath(0, 0, w, h, 2);
    return rect + 'M' + w * 3 / 14 + ',' + h / 2 + 'L' + w * 11 / 14 + ',' + h / 2;
  },
  getExpandedButtonPath: function getExpandedButtonPath() {
    var w = 14;
    var h = 14;
    var rect = Util.getRectPath(0, 0, w, h, 2);
    var hp = 'M' + w * 3 / 14 + ',' + h / 2 + 'L' + w * 11 / 14 + ',' + h / 2;
    var vp = 'M' + w / 2 + ',' + h * 3 / 14 + 'L' + w / 2 + ',' + h * 11 / 14;
    return rect + hp + vp;
  }
};

/***/ }),

/***/ "./src/version.js":
/*!************************!*\
  !*** ./src/version.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '1.0.0-beta.78';

/***/ })

/******/ });
});
//# sourceMappingURL=g6Editor.js.map