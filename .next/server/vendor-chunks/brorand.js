/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/brorand";
exports.ids = ["vendor-chunks/brorand"];
exports.modules = {

/***/ "(ssr)/./node_modules/brorand/index.js":
/*!***************************************!*\
  !*** ./node_modules/brorand/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var r;\n\nmodule.exports = function rand(len) {\n  if (!r)\n    r = new Rand(null);\n\n  return r.generate(len);\n};\n\nfunction Rand(rand) {\n  this.rand = rand;\n}\nmodule.exports.Rand = Rand;\n\nRand.prototype.generate = function generate(len) {\n  return this._rand(len);\n};\n\n// Emulate crypto API using randy\nRand.prototype._rand = function _rand(n) {\n  if (this.rand.getBytes)\n    return this.rand.getBytes(n);\n\n  var res = new Uint8Array(n);\n  for (var i = 0; i < res.length; i++)\n    res[i] = this.rand.getByte();\n  return res;\n};\n\nif (typeof self === 'object') {\n  if (self.crypto && self.crypto.getRandomValues) {\n    // Modern browsers\n    Rand.prototype._rand = function _rand(n) {\n      var arr = new Uint8Array(n);\n      self.crypto.getRandomValues(arr);\n      return arr;\n    };\n  } else if (self.msCrypto && self.msCrypto.getRandomValues) {\n    // IE\n    Rand.prototype._rand = function _rand(n) {\n      var arr = new Uint8Array(n);\n      self.msCrypto.getRandomValues(arr);\n      return arr;\n    };\n\n  // Safari's WebWorkers do not have `crypto`\n  } else if (typeof window === 'object') {\n    // Old junk\n    Rand.prototype._rand = function() {\n      throw new Error('Not implemented yet');\n    };\n  }\n} else {\n  // Node.js or Web worker with no crypto support\n  try {\n    var crypto = __webpack_require__(/*! crypto */ \"crypto\");\n    if (typeof crypto.randomBytes !== 'function')\n      throw new Error('Not supported');\n\n    Rand.prototype._rand = function _rand(n) {\n      return crypto.randomBytes(n);\n    };\n  } catch (e) {\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJvcmFuZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLHNCQUFRO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsZXQtY29ubmVjdGlvbnMvLi9ub2RlX21vZHVsZXMvYnJvcmFuZC9pbmRleC5qcz9mZDIzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJhbmQobGVuKSB7XG4gIGlmICghcilcbiAgICByID0gbmV3IFJhbmQobnVsbCk7XG5cbiAgcmV0dXJuIHIuZ2VuZXJhdGUobGVuKTtcbn07XG5cbmZ1bmN0aW9uIFJhbmQocmFuZCkge1xuICB0aGlzLnJhbmQgPSByYW5kO1xufVxubW9kdWxlLmV4cG9ydHMuUmFuZCA9IFJhbmQ7XG5cblJhbmQucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24gZ2VuZXJhdGUobGVuKSB7XG4gIHJldHVybiB0aGlzLl9yYW5kKGxlbik7XG59O1xuXG4vLyBFbXVsYXRlIGNyeXB0byBBUEkgdXNpbmcgcmFuZHlcblJhbmQucHJvdG90eXBlLl9yYW5kID0gZnVuY3Rpb24gX3JhbmQobikge1xuICBpZiAodGhpcy5yYW5kLmdldEJ5dGVzKVxuICAgIHJldHVybiB0aGlzLnJhbmQuZ2V0Qnl0ZXMobik7XG5cbiAgdmFyIHJlcyA9IG5ldyBVaW50OEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKylcbiAgICByZXNbaV0gPSB0aGlzLnJhbmQuZ2V0Qnl0ZSgpO1xuICByZXR1cm4gcmVzO1xufTtcblxuaWYgKHR5cGVvZiBzZWxmID09PSAnb2JqZWN0Jykge1xuICBpZiAoc2VsZi5jcnlwdG8gJiYgc2VsZi5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gTW9kZXJuIGJyb3dzZXJzXG4gICAgUmFuZC5wcm90b3R5cGUuX3JhbmQgPSBmdW5jdGlvbiBfcmFuZChuKSB7XG4gICAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkobik7XG4gICAgICBzZWxmLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChzZWxmLm1zQ3J5cHRvICYmIHNlbGYubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gSUVcbiAgICBSYW5kLnByb3RvdHlwZS5fcmFuZCA9IGZ1bmN0aW9uIF9yYW5kKG4pIHtcbiAgICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShuKTtcbiAgICAgIHNlbGYubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycik7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cbiAgLy8gU2FmYXJpJ3MgV2ViV29ya2VycyBkbyBub3QgaGF2ZSBgY3J5cHRvYFxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gT2xkIGp1bmtcbiAgICBSYW5kLnByb3RvdHlwZS5fcmFuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG4gICAgfTtcbiAgfVxufSBlbHNlIHtcbiAgLy8gTm9kZS5qcyBvciBXZWIgd29ya2VyIHdpdGggbm8gY3J5cHRvIHN1cHBvcnRcbiAgdHJ5IHtcbiAgICB2YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8ucmFuZG9tQnl0ZXMgIT09ICdmdW5jdGlvbicpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzdXBwb3J0ZWQnKTtcblxuICAgIFJhbmQucHJvdG90eXBlLl9yYW5kID0gZnVuY3Rpb24gX3JhbmQobikge1xuICAgICAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyhuKTtcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/brorand/index.js\n");

/***/ })

};
;