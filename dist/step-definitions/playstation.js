"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _cucumber = require("@cucumber/cucumber");
var _test = require("playwright/test");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(0, _cucumber.Given)(/^the user log into Sony application with valid credentials$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var page, acceptButton;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        page = this.screen.page;
        console.log("I am on the Play station home page");
        _context.next = 4;
        return page["goto"]("https://www.sony.co.uk/");
      case 4:
        _context.next = 6;
        return page.locator('#onetrust-button-group>button:last-child');
      case 6:
        acceptButton = _context.sent;
        _context.next = 9;
        return acceptButton.waitFor({
          state: "visible"
        });
      case 9:
        _context.next = 11;
        return acceptButton.isVisible();
      case 11:
        if (!_context.sent) {
          _context.next = 14;
          break;
        }
        _context.next = 14;
        return acceptButton.click();
      case 14:
      case "end":
        return _context.stop();
    }
  }, _callee, this);
})));
(0, _cucumber.When)(/^the user select playstation from the menu$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var _this$screen, page, context, listOfMenu, pagePromise, _iterator, _step, menu, subMenu, acceptButton_PlayStationPage;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _this$screen = this.screen, page = _this$screen.page, context = _this$screen.context;
        console.log("I am on the Play station home page");
        _context2.next = 4;
        return page.locator('.GlobalHeaderNavi>button').click();
      case 4:
        _context2.next = 6;
        return page.$$('.GlobalHeaderNavi__NavListInner>ul>li>a');
      case 6:
        listOfMenu = _context2.sent;
        console.log(listOfMenu.length);
        pagePromise = context.waitForEvent('page');
        _iterator = _createForOfIteratorHelper(listOfMenu);
        _context2.prev = 10;
        _iterator.s();
      case 12:
        if ((_step = _iterator.n()).done) {
          _context2.next = 23;
          break;
        }
        menu = _step.value;
        _context2.next = 16;
        return menu.textContent();
      case 16:
        subMenu = _context2.sent;
        if (!subMenu.includes('PlayStation')) {
          _context2.next = 21;
          break;
        }
        _context2.next = 20;
        return menu.click();
      case 20:
        return _context2.abrupt("break", 23);
      case 21:
        _context2.next = 12;
        break;
      case 23:
        _context2.next = 28;
        break;
      case 25:
        _context2.prev = 25;
        _context2.t0 = _context2["catch"](10);
        _iterator.e(_context2.t0);
      case 28:
        _context2.prev = 28;
        _iterator.f();
        return _context2.finish(28);
      case 31:
        _context2.next = 33;
        return pagePromise;
      case 33:
        global.playStationPage = _context2.sent;
        _context2.next = 36;
        return global.playStationPage.waitForLoadState();
      case 36:
        _context2.next = 38;
        return global.playStationPage.locator('#_evidon-accept-button');
      case 38:
        acceptButton_PlayStationPage = _context2.sent;
        _context2.next = 41;
        return acceptButton_PlayStationPage.waitFor({
          state: "visible"
        });
      case 41:
        _context2.next = 43;
        return acceptButton_PlayStationPage.isVisible();
      case 43:
        if (!_context2.sent) {
          _context2.next = 46;
          break;
        }
        _context2.next = 46;
        return acceptButton_PlayStationPage.click();
      case 46:
      case "end":
        return _context2.stop();
    }
  }, _callee2, this, [[10, 25, 28, 31]]);
})));
(0, _cucumber.When)(/^the user on the playstation home page$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  var _this$screen2, page, context, content;
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _this$screen2 = this.screen, page = _this$screen2.page, context = _this$screen2.context;
        _context3.next = 3;
        return global.playStationPage.title();
      case 3:
        content = _context3.sent;
        _context3.next = 6;
        return (0, _test.expect)(content).toBe("PlayStation® Official Site: Consoles, Games, Accessories & More");
      case 6:
      case "end":
        return _context3.stop();
    }
  }, _callee3, this);
})));
(0, _cucumber.When)(/^the carousel slides should be displayed as expected$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var playStationPage, listOfSlideItems, listOfTiles, listOfBigBanners, tilesCount, arr, count, _iterator2, _step2, menu;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        playStationPage = global.playStationPage;
        _context4.next = 3;
        return playStationPage.$$('div.slider__control>div>div>figure>picture>img');
      case 3:
        listOfSlideItems = _context4.sent;
        listOfTiles = 'div.slider__control:nth-child(' + '*' + ') > div:nth-child(1) > div';
        listOfBigBanners = 'div.slider__slides:nth-child(1) > div:nth-child(' + '*' + ') > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div>div'; // listOfTiles.rep
        tilesCount = listOfSlideItems.length;
        arr = ['Tekken 8 keyart', 'February LNY Sale keyart', 'Like A Dragon keyart', 'TLOU keyart', 'Sterling Silver DualSense Wireless Controller product shot', 'genshin impact keyart', 'Suicide Squad keyart'];
        count = 0;
        _iterator2 = _createForOfIteratorHelper(listOfSlideItems);
        _context4.prev = 10;
        _iterator2.s();
      case 12:
        if ((_step2 = _iterator2.n()).done) {
          _context4.next = 22;
          break;
        }
        menu = _step2.value;
        _context4.t0 = _test.expect;
        _context4.next = 17;
        return menu.getAttribute('alt');
      case 17:
        _context4.t1 = _context4.sent;
        (0, _context4.t0)(_context4.t1).toBe(arr[count]);
        count = count + 1;
      case 20:
        _context4.next = 12;
        break;
      case 22:
        _context4.next = 27;
        break;
      case 24:
        _context4.prev = 24;
        _context4.t2 = _context4["catch"](10);
        _iterator2.e(_context4.t2);
      case 27:
        _context4.prev = 27;
        _iterator2.f();
        return _context4.finish(27);
      case 30:
      case "end":
        return _context4.stop();
    }
  }, _callee4, null, [[10, 24, 27, 30]]);
})));
(0, _cucumber.When)(/^the user select the slides only by one$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
  var _this$screen3, page, context, playStationPage, listOfSlideItems, listOfTiles, listOfBigBanners, tilesCount, screenShots, screenCount, i, item;
  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _this$screen3 = this.screen, page = _this$screen3.page, context = _this$screen3.context;
        playStationPage = global.playStationPage;
        _context5.next = 4;
        return playStationPage.$$('div.slider__control>div>div>figure>picture>img');
      case 4:
        listOfSlideItems = _context5.sent;
        listOfTiles = 'div.slider__control:nth-child(' + '*' + ') > div:nth-child(1) > div';
        listOfBigBanners = 'div.slider__slides:nth-child(1) > div:nth-child(' + '*' + ') > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div>div'; // listOfTiles.rep
        tilesCount = listOfSlideItems.length;
        screenShots = ['Tekken8keyart.png', 'SuicideSquadkeyart.png', 'FebruaryLNYSalekeyart.png', 'LikeADragonkeyart.png', 'TLOUkeyart.png', 'SterlingSilver.png', 'genshinimpactkeyart.png', 'Applekeyart.png'];
        screenCount = 0;
        i = 1;
      case 11:
        if (!(i <= tilesCount)) {
          _context5.next = 21;
          break;
        }
        item = i.toString();
        _context5.next = 15;
        return playStationPage.locator(listOfTiles.replace('*', item)).click();
      case 15:
        _context5.next = 17;
        return (0, _test.expect)(playStationPage.locator(listOfBigBanners.replace('*', item))).toHaveScreenshot(screenShots[screenCount]);
      case 17:
        screenCount = screenCount + 1;
      case 18:
        i++;
        _context5.next = 11;
        break;
      case 21:
      case "end":
        return _context5.stop();
    }
  }, _callee5, this);
})));