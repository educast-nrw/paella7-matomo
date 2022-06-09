(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("paella-core"));
	else if(typeof define === 'function' && define.amd)
		define(["paella-core"], factory);
	else if(typeof exports === 'object')
		exports["paella-matomo-plugin"] = factory(require("paella-core"));
	else
		root["paella-matomo-plugin"] = factory(root[undefined]);
})(self, (__WEBPACK_EXTERNAL_MODULE_paella_core__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugins/matomoTracking.js":
/*!***************************************!*\
  !*** ./src/plugins/matomoTracking.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatomoTracking)
/* harmony export */ });
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! paella-core */ "paella-core");
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paella_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MatomoTracking = /*#__PURE__*/function (_PluginModule) {
  _inherits(MatomoTracking, _PluginModule);

  var _super = _createSuper(MatomoTracking);

  function MatomoTracking() {
    _classCallCheck(this, MatomoTracking);

    return _super.apply(this, arguments);
  }

  _createClass(MatomoTracking, [{
    key: "moduleName",
    get: function get() {
      return 'paella-matomo-plugin';
    }
  }, {
    key: "moduleVersion",
    get: function get() {
      return _package_json__WEBPACK_IMPORTED_MODULE_1__.version;
    }
  }]);

  return MatomoTracking;
}(paella_core__WEBPACK_IMPORTED_MODULE_0__.PluginModule);



/***/ }),

/***/ "./src/plugins/org.opencast.paella.matomoTrackingData.js":
/*!***************************************************************!*\
  !*** ./src/plugins/org.opencast.paella.matomoTrackingData.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatomoTrackingDataPlugin)
/* harmony export */ });
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! paella-core */ "paella-core");
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paella_core__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Licensed to The Apereo Foundation under one or more contributor license
 * agreements. See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 *
 * The Apereo Foundation licenses this file to you under the Educational
 * Community License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License
 * at:
 *
 *   http://opensource.org/licenses/ecl2.txt
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 */


var MatomoTrackingDataPlugin = /*#__PURE__*/function (_DataPlugin) {
  _inherits(MatomoTrackingDataPlugin, _DataPlugin);

  var _super = _createSuper(MatomoTrackingDataPlugin);

  function MatomoTrackingDataPlugin() {
    _classCallCheck(this, MatomoTrackingDataPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(MatomoTrackingDataPlugin, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var client_id, heartbeat, tracking_client, server, site_id, matomoPromise, matomoScript;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client_id = this.config.client_id;
                heartbeat = this.config.heartbeat;
                tracking_client = this.config.tracking_client;
                server = this.config.server;
                site_id = this.config.site_id;
                matomoPromise = null;

                matomoScript = function matomoScript(path) {
                  if (!matomoPromise) {
                    matomoPromise = new Promise(function (resolve) {
                      var script = document.createElement('script');
                      script.type = 'text/javascript';
                      script.src = path;
                      var loaded = false;

                      script.onload = script.onreadystatechange = function () {
                        if (!loaded) {
                          loaded = true;
                          resolve();
                        }
                      };

                      document.head.appendChild(script);
                    });
                  }

                  return matomoPromise;
                };

                if (server.substr(-1) != '/') server += '/';
                _context.next = 10;
                return matomoScript(server + tracking_client + '.js');

              case 10:
                this.player.matomotracker = Matomo.getAsyncTracker(server + tracking_client + '.php', site_id);
                this.player.log.debug('Matomo Analytics Initialized: ' + Matomo.initialized);
                this.player.matomotracker.client_id = client_id;
                if (heartbeat && heartbeat > 0) this.player.matomotracker.enableHeartBeatTimer(heartbeat);

                if (Matomo && Matomo.MediaAnalytics) {
                  (0,paella_core__WEBPACK_IMPORTED_MODULE_0__.bindEvent)(this.player, paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.STREAM_LOADED, function () {
                    Matomo.MediaAnalytics.scanForMedia();
                  });
                  this.registerVisit();
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "write",
    value: function () {
      var _write = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(context, _ref, data) {
        var id, currentTime;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref.id;
                _context2.next = 3;
                return this.player.videoContainer.currentTime();

              case 3:
                currentTime = _context2.sent;
                this.player.log.debug("Logging event for video id ".concat(id, " at time: ").concat(currentTime));
                _context2.t0 = data.event;
                _context2.next = _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PLAY ? 8 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PAUSE ? 10 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.ENDED ? 12 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.FULLSCREEN_CHANGED ? 14 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PLAYER_LOADED ? 16 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.SHOW_POPUP ? 18 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.HIDE_POPUP ? 20 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.SEEK ? 22 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.VOLUME_CHANGED ? 24 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.RESIZE_END ? 26 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.CAPTIONS_CHANGED ? 28 : _context2.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PLAYBACK_RATE_CHANGED ? 30 : 33;
                break;

              case 8:
                this.player.matomotracker.trackEvent('Player.Controls', 'Play', this.loadTitle());
                return _context2.abrupt("break", 33);

              case 10:
                this.player.matomotracker.trackEvent('Player.Controls', 'Pause', this.loadTitle());
                return _context2.abrupt("break", 33);

              case 12:
                this.player.matomotracker.trackEvent('Player.Status', 'Ended', this.loadTitle());
                return _context2.abrupt("break", 33);

              case 14:
                if (data.params.status == true) {
                  this.player.matomotracker.trackEvent('Player.View', 'Fullscreen', this.loadTitle());
                } else {
                  this.player.matomotracker.trackEvent('Player.View', 'ExitFullscreen', this.loadTitle());
                }

                return _context2.abrupt("break", 33);

              case 16:
                this.player.matomotracker.trackEvent('Player.Status', 'LoadComplete', this.loadTitle());
                return _context2.abrupt("break", 33);

              case 18:
                this.player.matomotracker.trackEvent('Player.PopUp', 'Show', data.params.plugin.name);
                return _context2.abrupt("break", 33);

              case 20:
                this.player.matomotracker.trackEvent('Player.PopUp', 'Hide', data.params.plugin.name);
                return _context2.abrupt("break", 33);

              case 22:
                this.player.matomotracker.trackEvent('Player.Controls', 'Seek', Math.round(data.params.newTime));
                return _context2.abrupt("break", 33);

              case 24:
                this.player.matomotracker.trackEvent('Player.Settings', 'Volume', data.params.volume);
                return _context2.abrupt("break", 33);

              case 26:
                this.player.matomotracker.trackEvent('Player.View', 'Resize', "".concat(data.params.size.w, "x").concat(data.params.size.h));
                return _context2.abrupt("break", 33);

              case 28:
                this.player.matomotracker.trackEvent('Player.Captions', 'Enabled', data);
                return _context2.abrupt("break", 33);

              case 30:
                this.player.log.info('Playbackrate changed!');
                this.player.matomotracker.trackEvent('Player.Controls', 'PlaybackRate', data.params.newPlaybackRate);
                return _context2.abrupt("break", 33);

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function write(_x, _x2, _x3) {
        return _write.apply(this, arguments);
      }

      return write;
    }()
  }, {
    key: "registerVisit",
    value: function registerVisit() {
      var opencastData, title, eventId, seriesTitle, seriesId, presenter;
      opencastData = this.player.videoManifest.metadata;

      if (opencastData.UID != undefined && opencastData.title != undefined) {
        title = opencastData.title;
        eventId = opencastData.UID;
        presenter = opencastData.presenters;
        this.player.matomotracker.setCustomVariable(5, 'client', this.player.matomotracker.client_id || 'Paella Opencast');
        /* eslint-disable no-unused-vars */

        Matomo.MediaAnalytics.setMediaTitleFallback(function (mediaElement) {
          return title;
        });
        /* eslint-disable no-unused-vars */
      }

      if (opencastData != undefined) {
        seriesId = opencastData.series;
        seriesTitle = opencastData.seriestitle;
      }

      if (title) this.player.matomotracker.setCustomVariable(1, 'event', title + ' (' + eventId + ')');
      if (seriesTitle) this.player.matomotracker.setCustomVariable(2, 'series' + seriesTitle + ' (' + seriesId + ')');
      if (presenter) this.player.matomotracker.setCustomVariable(3, 'presenter', presenter);

      if (title && presenter) {
        this.player.matomotracker.setDocumentTitle(title + ' - ' + (presenter || 'Unknown'));
        this.player.matomotracker.trackPageView(title + ' - ' + (presenter || 'Unknown'));
      } else {
        this.player.matomotracker.trackPageView();
      }
    }
  }, {
    key: "loadTitle",
    value: function loadTitle() {
      var title = this.player.videoManifest.metadata.title;
      return title;
    }
  }]);

  return MatomoTrackingDataPlugin;
}(paella_core__WEBPACK_IMPORTED_MODULE_0__.DataPlugin);



/***/ }),

/***/ "./src/plugins sync recursive \\.js":
/*!********************************!*\
  !*** ./src/plugins/ sync \.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./matomoTracking.js": "./src/plugins/matomoTracking.js",
	"./org.opencast.paella.matomoTrackingData.js": "./src/plugins/org.opencast.paella.matomoTrackingData.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/plugins sync recursive \\.js";

/***/ }),

/***/ "paella-core":
/*!*****************************************************************************************!*\
  !*** external {"commonjs":"paella-core","commonjs2":"paella-core","amd":"paella-core"} ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_paella_core__;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"module":"dist/matomoTrackingDataPlugin.js","name":"paella7-matomo","version":"1.0.0","description":"Enables Matomo tracking in Paella player 7","main":"index.js","scripts":{"build":"webpack --mode development --config webpack.config.js","dev":"webpack serve --mode development --config webpack.debug.js"},"repository":{"type":"git","url":"git+https://github.com/educast-nrw/paella7-matomo.git"},"keywords":["paella","matomo","webplayer","webtracking"],"author":"Maximiliano Lira Del Canto","license":"ECL-2.0","bugs":{"url":"https://github.com/educast-nrw/paella7-matomo/issues"},"homepage":"https://github.com/educast-nrw/paella7-matomo#readme","dependencies":{"paella-core":"^1.0.51"},"devDependencies":{"@babel/core":"^7.18.0","@babel/preset-env":"^7.18.0","babel-loader":"^8.2.5","copy-webpack-plugin":"^11.0.0","css-loader":"^6.7.1","file-loader":"^6.2.0","html-webpack-plugin":"^5.5.0","style-loader":"^3.3.1","svg-inline-loader":"^0.8.2","webpack":"^5.72.1","webpack-cli":"^4.9.2","webpack-dev-server":"^4.9.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatomoTrackingDataPlugin": () => (/* binding */ MatomoTrackingDataPlugin),
/* harmony export */   "default": () => (/* binding */ getMatomoPluginContext)
/* harmony export */ });
/* harmony import */ var _plugins_org_opencast_paella_matomoTrackingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/org.opencast.paella.matomoTrackingData */ "./src/plugins/org.opencast.paella.matomoTrackingData.js");

function getMatomoPluginContext() {
  return __webpack_require__("./src/plugins sync recursive \\.js");
}
var MatomoTrackingDataPlugin = _plugins_org_opencast_paella_matomoTrackingData__WEBPACK_IMPORTED_MODULE_0__["default"];
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=paella-matomo-plugin.js.map